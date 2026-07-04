# Wiki Log

> Record cronologico di tutte le azioni wiki. Solo append.
> Formato: `## [YYYY-MM-DD] azione | soggetto`
> Azioni: ingest, update, query, lint, create, archive, delete
> Quando questo file supera 500 voci, ruotare: rinominare in log-YYYY.md, ricominciare.

## [2026-06-16] create | Wiki inizializzato
- Dominio: Analisi Funzionale e Requisiti di Sicurezza (progetto AVANT IPCEI)
- Struttura creata con SCHEMA.md, index.md, log.md
- Path: ~/wiki

## [2026-06-16] ingest | Documenti M3 — 18 PDF + 6 DOCX
- Fonte: C:\Users\A106889\Documents\AVANT\Docs condivisi AVANT\Deliverable AVANT\08_Deliverables e ConsegneUfficiali\M3\
- PDF estratti con pymupdf: 18 file in raw/papers/
- DOCX estratti con python-docx: 6 file in raw/papers/
- Documenti inseriti con frontmatter (source_file, ingested, sha256, chars)

## [2026-06-16] create | Pagine wiki curate — Work Package
- Entities create: wp1-c3op-platform, wp2-distributed-data-ecosystem, wp3-cybersecurity
- Entities create: wp4-manufacturing-dt, wp5-cultural-heritage, wp6-urban-dt, wp7-energy-dt, wp8-healthcare-dt
- Concepts create: compliance-normativa, requisiti-sicurezza-trasversali
- Comparisons create: enterprise-vs-opensource-sicurezza
- Totale pagine curate: 12
- Aggiornati: index.md
