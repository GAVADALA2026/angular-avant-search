const express = require('express');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const lunr = require('lunr');
const marked = require('marked');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(express.json());
app.use(cors());

const WIKI_DIR = path.join(__dirname, '..'); // repo root contains entities/, concepts/, comparisons/, raw/
const SEARCH_DIRS = ['entities', 'concepts', 'comparisons', 'raw'];

function loadDocs() {
  const docs = [];

  function readDirectory(dir) {
    const entries = fs.readdirSync(dir, {withFileTypes: true});
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        readDirectory(full);
        continue;
      }
      if (!entry.isFile() || !entry.name.endsWith('.md')) continue;

      try {
        const raw = fs.readFileSync(full, 'utf8');
        const parsed = matter(raw);
        const relativePath = path.relative(WIKI_DIR, full);
        const slug = relativePath.replace(/\\.md$/, '').split(path.sep).join('--');
        docs.push({
          slug,
          path: relativePath,
          frontmatter: parsed.data || {},
          content: parsed.content || ''
        });
      } catch (err) {
        console.error('Failed to read', full, err.message);
      }
    }
  }

  for (const d of SEARCH_DIRS) {
    const dir = path.join(WIKI_DIR, d);
    if (!fs.existsSync(dir)) continue;
    readDirectory(dir);
  }
  return docs;
}

let docs = loadDocs();
let idx = null;

function buildIndex() {
  docs = loadDocs();
  idx = lunr(function () {
    this.ref('slug');
    this.field('title');
    this.field('content');
    this.field('tags');

    for (const d of docs) {
      this.add({
        slug: d.slug,
        title: (d.frontmatter && d.frontmatter.title) || d.slug,
        content: (d.content || '').replace(/\s+/g, ' '),
        tags: (d.frontmatter && (d.frontmatter.tags || []).join(' ')) || ''
      });
    }
  });
}

buildIndex();

app.get('/api/health', (req, res) => res.json({ok: true, docs: docs.length}));

app.get('/api/pages', (req, res) => {
  const list = docs.map(d => ({slug: d.slug, title: (d.frontmatter && d.frontmatter.title) || d.slug, type: d.frontmatter.type || null, tags: d.frontmatter.tags || []}));
  res.json(list);
});

app.get('/api/page/:slug', (req, res) => {
  const slug = req.params.slug;
  const doc = docs.find(d => d.slug === slug);
  if (!doc) return res.status(404).json({error: 'Not found'});
  const html = marked.parse(doc.content || '');
  res.json({slug: doc.slug, path: doc.path, frontmatter: doc.frontmatter, content: doc.content, html});
});

app.get('/api/search', (req, res) => {
  const q = req.query.q;
  if (!q || q.trim() === '') return res.status(400).json({error: 'Missing query parameter q'});
  const raw = idx.search(q + '*'); // simple prefix
  const results = raw.slice(0, 20).map(r => {
    const d = docs.find(x => x.slug === r.ref);
    // snippet: first 300 chars
    const snippet = (d && d.content) ? d.content.replace(/\n+/g, ' ').slice(0, 300) : '';
    return {slug: r.ref, score: r.score, title: (d.frontmatter && d.frontmatter.title) || r.ref, snippet};
  });
  res.json({query: q, results});
});

app.post('/api/llm', async (req, res) => {
  const {query, top_k = 3} = req.body || {};
  if (!query) return res.status(400).json({error: 'Missing query in body'});

  // find top_k docs with lunr
  const raw = idx.search(query + '*').slice(0, top_k);
  const contexts = raw.map(r => {
    const d = docs.find(x => x.slug === r.ref);
    return `--- ${d && d.frontmatter && d.frontmatter.title ? d.frontmatter.title : d.slug}\n${(d && d.content) ? (d.content.slice(0, 2000)) : ''}`;
  }).join('\n\n');

  // require environment variables
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  const OPENAI_API_URL = process.env.OPENAI_API_URL || 'https://api.openai.com/v1/chat/completions';
  const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';

  if (!OPENAI_API_KEY) {
    return res.status(501).json({error: 'LLM not configured. Set OPENAI_API_KEY in environment to enable LLM endpoint.'});
  }

  const prompt = `You are an assistant that answers user queries using the provided wiki context. Context:\n${contexts}\n\nUser query:\n${query}\n\nAnswer concisely and cite titles of pages used.`;

  try {
    const resp = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        messages: [
          {role: 'system', content: 'You are a concise assistant that cites source titles.'},
          {role: 'user', content: prompt}
        ],
        max_tokens: 512,
        temperature: 0.0
      })
    });
    const data = await resp.json();
    // best-effort extraction for OpenAI ChatCompletion
    const content = data && data.choices && data.choices[0] && (data.choices[0].message ? data.choices[0].message.content : data.choices[0].text) || null;
    res.json({query, context_docs: raw.map(r=>r.ref), llm: content, raw: data});
  } catch (err) {
    console.error('LLM call failed', err.message);
    res.status(500).json({error: 'LLM call failed', details: err.message});
  }
});

// simple reindex endpoint
app.post('/api/reindex', (req, res) => {
  buildIndex();
  res.json({ok: true, docs: docs.length});
});

const PORT = process.env.PORT || 3333;
if (require.main === module) {
  app.listen(PORT, () => console.log(`wiki-llm API listening on ${PORT}, docs=${docs.length}`));
}

module.exports = {app, loadDocs, SEARCH_DIRS, WIKI_DIR};
