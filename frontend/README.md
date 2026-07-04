Frontend Angular minimal

Istruzioni:
1. cd frontend
2. npm install
3. npm start

Questo crea una semplice UI con:
- input per ricerca keyword (/api/search)
- listato risultati
- apertura pagina (/api/page/:slug)
- bottone "Chiedi (LLM)" che chiama /api/llm (richiede API key sul backend)

Note:
- Il backend API è previsto in http://localhost:3333 (vedi /api)
- CORS è abilitato sul backend; se preferisci usa proxy config Angular
