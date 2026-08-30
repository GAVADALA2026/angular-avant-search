const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const test = require('node:test');

process.env.CORS_ORIGINS = 'http://trusted.example';
const { app, SEARCH_DIRS, WIKI_DIR, loadDocs } = require('./index');

let upstreamServer;
let upstreamUrl;

function request(baseUrl, path, options = {}) {
  return fetch(`${baseUrl}${path}`, options).then(async response => ({
    status: response.status,
    headers: response.headers,
    body: (response.headers.get('content-type') || '').includes('application/json') ? await response.json() : await response.text()
  }));
}

async function withApiServer(callback) {
  const server = http.createServer(app);
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    return await callback(`http://127.0.0.1:${server.address().port}/api`);
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
}

test.before(async () => {
  upstreamServer = http.createServer((req, res) => {
    res.writeHead(500, {'content-type': 'application/json'});
    res.end(JSON.stringify({error: {message: 'provider detail that must not leak'}}));
  });
  await new Promise(resolve => upstreamServer.listen(0, '127.0.0.1', resolve));
  upstreamUrl = `http://127.0.0.1:${upstreamServer.address().port}/v1/chat/completions`;
  process.env.OPENAI_API_KEY = 'test-key';
  process.env.OPENAI_API_URL = upstreamUrl;
});

test.after(() => new Promise(resolve => upstreamServer.close(resolve)));

function markdownInventory() {
  const files = [];

  function visit(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) visit(fullPath);
      else if (entry.isFile() && entry.name.endsWith('.md')) files.push(fullPath);
    }
  }

  for (const directory of SEARCH_DIRS) {
    const fullPath = path.join(WIKI_DIR, directory);
    if (fs.existsSync(fullPath)) visit(fullPath);
  }

  return files.sort();
}

test('loadDocs indexes every Markdown file, including nested raw/papers files', () => {
  const inventory = markdownInventory();
  const indexedPaths = loadDocs().map((doc) => doc.path).sort();

  assert.ok(inventory.some((file) => file.includes(`${path.sep}raw${path.sep}papers${path.sep}`)));
  assert.deepEqual(indexedPaths, inventory.map((file) => path.relative(WIKI_DIR, file)).sort());
});

test('pages and health endpoints report the complete document inventory', async (t) => {
  const server = http.createServer(app);
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  t.after(() => server.close());

  const { port } = server.address();
  const baseUrl = `http://127.0.0.1:${port}/api`;
  const [pagesResponse, healthResponse] = await Promise.all([
    fetch(`${baseUrl}/pages`),
    fetch(`${baseUrl}/health`)
  ]);
  const pages = await pagesResponse.json();
  const health = await healthResponse.json();
  const inventory = markdownInventory();

  assert.equal(pagesResponse.status, 200);
  assert.equal(healthResponse.status, 200);
  assert.equal(pages.length, inventory.length);
  assert.equal(health.docs, inventory.length);
});

test('permits only configured browser origins', async () => {
  await withApiServer(async baseUrl => {
    const trusted = await request(baseUrl, '/health', {headers: {Origin: 'http://trusted.example'}});
    const untrusted = await request(baseUrl, '/health', {headers: {Origin: 'https://evil.example'}});
    assert.equal(trusted.headers.get('access-control-allow-origin'), 'http://trusted.example');
    assert.equal(untrusted.headers.get('access-control-allow-origin'), null);
  });
});

test('rejects oversized queries and invalid top_k', async () => {
  await withApiServer(async baseUrl => {
    const longQuery = 'a'.repeat(501);
    const search = await request(baseUrl, `/search?q=${longQuery}`);
    const llm = await request(baseUrl, '/llm', {method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify({query: longQuery})});
    const topK = await request(baseUrl, '/llm', {method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify({query: 'security', top_k: 11})});
    assert.equal(search.status, 400);
    assert.equal(llm.status, 400);
    assert.equal(topK.status, 400);
  });
});

test('does not expose provider payloads or a reindex route', async () => {
  await withApiServer(async baseUrl => {
    const llm = await request(baseUrl, '/llm', {method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify({query: 'security'})});
    const reindex = await request(baseUrl, '/reindex', {method: 'POST'});
    assert.deepEqual(llm.body, {error: 'LLM provider request failed'});
    assert.equal(JSON.stringify(llm.body).includes('provider detail'), false);
    assert.equal(reindex.status, 404);
  });
});

test('rate limits repeated LLM requests', async () => {
  await withApiServer(async baseUrl => {
    for (let attempt = 0; attempt < 7; attempt += 1) {
      const response = await request(baseUrl, '/llm', {method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify({query: 'security'})});
      assert.equal(response.status, 502);
    }
    const limited = await request(baseUrl, '/llm', {method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify({query: 'security'})});
    assert.equal(limited.status, 429);
  });
});
