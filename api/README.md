Wiki-LLM minimal API

Setup
1. cd api
2. npm install
3. (Optional) set OPENAI_API_KEY, OPENAI_API_URL, OPENAI_MODEL env vars to enable /api/llm
4. npm start

Endpoints
- GET /api/health
- GET /api/pages
- GET /api/page/:slug
- GET /api/search?q=...
- POST /api/llm {query, top_k}
- POST /api/reindex (rebuild index from markdown files)

The server indexes markdown files located in the repository root under:
- entities/
- concepts/
- comparisons/
- raw/

The LLM endpoint is optional and requires an API key.
