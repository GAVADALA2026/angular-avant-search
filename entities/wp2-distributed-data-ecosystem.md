---
title: WP2 — Distributed Data Ecosystem (DDE, DDAaaS, DT4DT)
created: 2026-06-16
updated: 2026-06-16
type: entity
tags: [wp2, trasversale, data-governance, dde, ddaaas, dt4dt, gdpr, requisiti, sicurezza]
sources: [raw/papers/ipcei_avant_d0.3a_m3_pdmp_datamanagementplan_v10.md, raw/papers/ipcei_avant_d1.0_m3_dosr_wp1_requirementsandfunctionaldesign_v10.md]
confidence: high
---

# WP2 — Distributed Data Ecosystem

## Overview
WP2 e' il cuore della gestione dati del progetto AVANT. E' composto da tre
componenti che forniscono la fondazione di data governance per tutti i WP verticali:

1. **DDE** (Distributed Data Ecosystem) — framework per interoperabilita dati e servizi
2. **DDAaaS** (Distributed Data Analytics as a Service) — piattaforma AI-based analytics
3. **DT4DT** (Data Toolkit for DT Platforms) — strumenti per piattaforme Digital Twin

## Componenti

### DDE — Distributed Data Ecosystem
- Framework per interoperabilita dati e servizi
- DataOps practices
- Gestione qualita dati
- Compliance GDPR
- Allineamento con GAIA-X / IDSA Data Spaces

### DDAaaS — Distributed Data Analytics as a Service
- Piattaforma per analytics AI-based
- Supporto MLOps
- Big data management
- Lifecycle modelli ML

### DT4DT — Data Toolkit for DT Platforms
- Data management per piattaforme DT
- Trasformazione e processing dati
- Strumenti di visualizzazione 3D general-purpose

## Requisiti Funzionali Chiave
- Federazione dati multi-dominio
- DataOps automatizzati
- Qualita dati: profiling, cleansing, monitoring
- Metadata management centralizzato
- Catalogo dati unificato
- Lineage tracking end-to-end
- Consent management granulare

## Requisiti di Sicurezza WP2
- **GDPR compliance** by design: lawful processing, purpose limitation, data minimisation
- **Pseudonimizzazione e anonimizzazione** dei dati
- **Encryption** a riposo (AES-256) e in transito (TLS 1.3)
- **RBAC** per accesso ai dati
- **Audit trail** per tutte le operazioni sui dati
- **Data sovereignty**: i dati restano sotto controllo del provider
- **Data Usage Policies** con smart contract
- **Provenienza e tracciabilita** dei dati (data lineage)

## Dipendenze
- Fonda su [[wp1-c3op-platform]] (infrastruttura cloud-edge)
- Abilita [[wp3-cybersecurity]] (security framework)
- **Tutti i WP verticali dipendono da WP2** per data governance
- [[wp8-healthcare-dt]] dipende ESPLICITAMENTE da WP2

## Riferimenti Normativi
- GDPR (Regolamento 2016/679)
- Data Governance Act (DGA)
- Data Act
- ePrivacy Regulation
- GAIA-X Framework
- IDSA Reference Architecture
