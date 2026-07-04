# Wiki Schema

## Domain
Analisi Funzionale e Requisiti di Sicurezza per sistemi IT enterprise.
Copre: raccolta requisiti, scrittura specifiche funzionali, soluzioni tecniche
(enterprise e open-source), analisi rischi, conformità normativa.
Contesto operativo: progetto AVANT (IPCEI) — WP1 through WP8.

## Conventions
- File names: lowercase, hyphens, no spaces (es. `wp8-healthcare-dt.md`)
- Ogni pagina wiki inizia con YAML frontmatter (vedi sotto)
- Usare `[[wikilinks]]` per link tra pagine (minimo 2 link in uscita per pagina)
- Aggiornare sempre la data `updated` quando si modifica una pagina
- Ogni nuova pagina deve essere aggiunta in `index.md` nella sezione corretta
- Ogni azione va aggiunta in `log.md`
- Marker di provenienza: `^[raw/papers/nome-file.md]` alla fine di paragrafi
  che derivano da una fonte specifica (solo pagine con 3+ fonti)

## Frontmatter
```yaml
---
title: Titolo Pagina
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: entity | concept | comparison | query | summary
tags: [dal taxonomy sotto]
sources: [raw/articles/nome-file.md]
# Opzionale:
confidence: high | medium | low
contested: true
contradictions: [altra-pagina-slug]
---
```

## Frontmatter per raw/
```yaml
---
source_url: https://example.com        # URL originale, se applicabile
ingested: YYYY-MM-DD
sha256: <hex digest>
---
```

## Tag Taxonomy

### Ambito
- `requisiti` — requisiti funzionali e non funzionali
- `sicurezza` — requisiti di sicurezza, threat model, controlli
- `specifica` — specifiche tecniche e funzionali
- `soluzione-tecnica` — architetture e soluzioni proposte
- `enterprise` — soluzioni enterprise/proprietarie
- `opensource` — soluzioni open-source
- `analisi-rischi` — rischi, mitigazioni, impatto
- `conformita` — normative, compliance, standard (GDPR, ISO 27001, NIS2)
- `wp1` through `wp8` — tag per work package AVANT
- `trasversale` — elementi trasversali ai WP

### Tipologia
- `person` — persone (stakeholder, responsabili)
- `org` — organizzazioni, fornitori, partner
- `product` — prodotti, piattaforme, tool
- `standard` — standard tecnici, protocolli, framework
- `comparison` — confronti tra soluzioni
- `decision` — decisioni architetturali prese

## Page Thresholds
- **Creare una pagina** quando un'entita/concetto appare in 2+ fonti O e' centrale in una fonte
- **Aggiornare pagina esistente** quando una fonte menziona qualcosa gia coperto
- **NON creare pagina** per menzioni passaggiere o dettagli minori
- **Dividere una pagina** quando supera ~200 righe
- **Archiviare una pagina** quando completamente superata — spostare in `_archive/`

## Entity Pages
Una pagina per entita rilevante. Include:
- Overview / cos'e
- Fatti chiave e date
- Relazioni con altre entita (`[[wikilinks]]`)
- Riferimenti alle fonti

## Concept Pages
Una pagina per concetto o topic. Include:
- Definizione / spiegazione
- Stato attuale della conoscenza
- Domande aperte o dibattiti
- Concetti correlati (`[[wikilinks]]`)

## Comparison Pages
Confronti side-by-side. Include:
- Cosa si confronta e perche
- Dimensioni di confronto (formato tabella preferito)
- Verdetto o sintesi
- Fonti

## Update Policy
Quando nuove informazioni confliggono:
1. Controllare le date — fonti piu recenti hanno generalmente priorita
2. Se genuinamente contraddittorio, notare entrambe le posizioni con date e fonti
3. Marcare la contraddizione nel frontmatter: `contradictions: [page-name]`
4. Segnalare per review dell'utente nel report di lint
