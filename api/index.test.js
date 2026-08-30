const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const test = require('node:test');

const { app, SEARCH_DIRS, WIKI_DIR, loadDocs } = require('./index');

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
