Wiki-LLM minimal API

Setup
1. cd api
2. npm install
3. Set the runtime configuration described below, then start the server.
4. npm start

Endpoints
- GET /api/health
- GET /api/pages
- GET /api/page/:slug
- GET /api/search?q=...
- POST /api/llm {query, top_k}

The server indexes markdown files located in the repository root under:
- entities/
- concepts/
- comparisons/
- raw/

The LLM endpoint is optional and requires an API key. It accepts queries of up to
500 characters and `top_k` values from 1 through 10, applies an in-memory limit
of 10 requests per minute per client IP, and returns only the normalized answer
and source document identifiers.

## Runtime configuration

- `OPENAI_API_KEY` enables `/api/llm`; set it only in the server environment.
- `OPENAI_API_URL` optionally overrides the provider endpoint.
- `OPENAI_MODEL` optionally overrides the model.
- `LLM_UPSTREAM_TIMEOUT_MS` optionally sets the provider timeout (1000–120000;
  default 15000).
- `CORS_ORIGINS` is a comma-separated allowlist of exact `http` or `https`
  origins, for example `http://localhost:4200,https://search.example.org`.
  With no value, browser cross-origin access is not enabled. Wildcards are
  ignored.

The API writes security-relevant LLM events (success, provider error, malformed
provider response, and rate limiting) to standard output for the host's logging
system. The public `/api/reindex` route has been removed; restart the backend to
rebuild the markdown index after content changes.
