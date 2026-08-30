const assert = require('node:assert/strict');
const http = require('node:http');
const test = require('node:test');

let apiServer;
let upstreamServer;
let baseUrl;

function request(path, options = {}) {
  return fetch(`${baseUrl}${path}`, options).then(async response => {
    const contentType = response.headers.get('content-type') || '';
    return {
      status: response.status,
      headers: response.headers,
      body: contentType.includes('application/json') ? await response.json() : await response.text()
    };
  });
}

test.before(async () => {
  upstreamServer = http.createServer((req, res) => {
    res.writeHead(500, {'content-type': 'application/json'});
    res.end(JSON.stringify({error: {message: 'provider detail that must not leak'}}));
  });
  await new Promise(resolve => upstreamServer.listen(0, '127.0.0.1', resolve));
  const upstreamPort = upstreamServer.address().port;

  process.env.CORS_ORIGINS = 'http://trusted.example';
  process.env.OPENAI_API_KEY = 'test-key';
  process.env.OPENAI_API_URL = `http://127.0.0.1:${upstreamPort}/v1/chat/completions`;
  const {app} = require('./index');
  apiServer = app.listen(0, '127.0.0.1');
  await new Promise(resolve => apiServer.once('listening', resolve));
  baseUrl = `http://127.0.0.1:${apiServer.address().port}`;
});

test.after(async () => {
  await Promise.all([
    new Promise(resolve => apiServer.close(resolve)),
    new Promise(resolve => upstreamServer.close(resolve))
  ]);
});

test('permits only configured browser origins', async () => {
  const trusted = await request('/api/health', {headers: {Origin: 'http://trusted.example'}});
  const untrusted = await request('/api/health', {headers: {Origin: 'https://evil.example'}});

  assert.equal(trusted.status, 200);
  assert.equal(trusted.headers.get('access-control-allow-origin'), 'http://trusted.example');
  assert.equal(untrusted.status, 200);
  assert.equal(untrusted.headers.get('access-control-allow-origin'), null);
});

test('rejects oversized search and LLM queries', async () => {
  const longQuery = 'a'.repeat(501);
  const search = await request(`/api/search?q=${longQuery}`);
  const llm = await request('/api/llm', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({query: longQuery})
  });

  assert.equal(search.status, 400);
  assert.equal(llm.status, 400);
});

test('validates top_k before contacting the provider', async () => {
  const response = await request('/api/llm', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({query: 'security', top_k: 11})
  });

  assert.equal(response.status, 400);
  assert.match(response.body.error, /top_k/);
});

test('does not expose provider response payloads', async () => {
  const response = await request('/api/llm', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({query: 'security', top_k: 1})
  });

  assert.equal(response.status, 502);
  assert.deepEqual(response.body, {error: 'LLM provider request failed'});
  assert.equal(JSON.stringify(response.body).includes('provider detail'), false);
});

test('does not expose a public reindex route', async () => {
  const response = await request('/api/reindex', {method: 'POST'});
  assert.equal(response.status, 404);
});

test('rate limits repeated LLM requests', async () => {
  for (let attempt = 0; attempt < 7; attempt += 1) {
    const response = await request('/api/llm', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({query: 'security'})
    });
    assert.equal(response.status, 502);
  }

  const limited = await request('/api/llm', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({query: 'security'})
  });
  assert.equal(limited.status, 429);
});
