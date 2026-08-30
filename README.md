# angular-avant-search

Esempio minimale di ricerca e interrogazione per un wiki markdown (progetto AVANT).
Contiene un backend Node/Express che indicizza file markdown e un frontend Angular minimale.

Indice
- Descrizione
- Requisiti
- Avvio rapido (backend)
- Avvio rapido (frontend)
- API principali
- Aggiungere pagine al wiki
- Configurazione LLM
- Deploy e contributi

---

## Descrizione
Questo repository mostra una pipeline semplice: markdown (entities/, concepts/, comparisons/, raw/) vengono indicizzati con lunr (backend) e resi interrogabili tramite REST. Il frontend Angular fornisce una UI per ricerca keyword e una chiamata LLM tramite il backend.

## Requisiti
- Node.js 20.19.0 (vedere `.nvmrc`)
- npm 10.8.2 (dichiarato nei `package.json`)
- (Opzionale) chiave API per LLM (es. OpenAI)

## Avvio rapido — Backend
1. Aprire una shell in `api/`
2. npm ci
3. (Opzionale) esportare la chiave LLM se si usa l'endpoint LLM:

   export OPENAI_API_KEY="sk-..."
   export OPENAI_API_URL="https://api.openai.com/v1/chat/completions" # opzionale
   export OPENAI_MODEL="gpt-4o-mini" # opzionale

4. npm start

Il server ascolta su http://localhost:3333 per default.

Endpoint utili:
- GET /api/health — stato del servizio
- GET /api/pages — elenco pagine indicizzate
- GET /api/page/:slug — recupera pagina (markdown + html)
- GET /api/search?q=term — ricerca full-text (lunr)
- POST /api/llm {"query":"...","top_k":3} — risposta basata su retrieval (richiede OPENAI_API_KEY)
- POST /api/reindex — ricostruisce l'indice dai file markdown

Esempio curl:

curl "http://localhost:3333/api/search?q=sicurezza"

curl -X POST http://localhost:3333/api/llm -H 'Content-Type: application/json' -d '{"query":"Quali soluzioni per secrets management?","top_k":3}'

## Avvio rapido — Frontend
1. Aprire una shell in `frontend/`
2. npm ci
3. npm start
4. Aprire http://localhost:4200

Per le verifiche riproducibili, eseguire `npm test` (Karma/ChromeHeadless tramite Puppeteer) e `npm run build` in `frontend/`, e `npm test` in `api/`.

Nota: il frontend usa `src/app/search.service.ts` e punta a `http://localhost:3333/api` come base. Cambiare se il backend è remoto.

## Aggiungere pagine al wiki
- Creare file Markdown in una delle directory: `entities/`, `concepts/`, `comparisons/`, `raw/`.
- Ogni pagina deve iniziare con frontmatter YAML (vedere `SCHEMA.md`). Esempio minimo:

```
---
title: Titolo Pagina
created: 2026-07-04
updated: 2026-07-04
type: concept
tags: [sicurezza, requisiti]
sources: [raw/papers/example.md]
---

Contenuto della pagina...
```

- Dopo aver aggiunto o modificato file, chiamare `POST /api/reindex` oppure riavviare il backend per aggiornare l'indice.

## Configurazione LLM
L'endpoint LLM sul backend è opzionale e richiede una chiave impostata in `OPENAI_API_KEY`.
Il backend invia al fornitore LLM il contesto dei documenti recuperati dalla ricerca e una prompt che richiede risposte concise con citazione dei titoli.

Importante: NON esporre la chiave LLM nel frontend. Impostare la chiave solo sul server.

## Deploy
- Frontend: `npm run build` in `frontend/` e servire la cartella `dist/` su un web server (o usare GitHub Pages / Netlify).
- Backend: containerizzare (`Dockerfile` non fornito) o deploy su piattaforme come Heroku/Cloud Run/VM.

## Contribuire
1. Fork del repo
2. Branch di feature
3. Pull request

Aggiornare `index.md` e `log.md` quando si aggiungono pagine.

## File principali
- `api/index.js` — server Express che indicizza markdown e espone API
- `frontend/src/` — app Angular minimale
- `SCHEMA.md` — regole frontmatter e convenzioni del wiki

---

Se vuoi, posso:
- creare e pushare questo README sul repository remoto (richiede permessi),
- generare un `LICENSE` (es. MIT),
- aggiungere esempi di richieste per agenti LLM in `llms.txt` (posso crearlo ora).

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>
