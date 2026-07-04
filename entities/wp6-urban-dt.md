---
title: WP6 — Urban Digital Twin (Citizen Twin, XAI, Governance)
created: 2026-06-16
updated: 2026-06-16
type: entity
tags: [wp6, urban, citizen-twin, xai, governance, society50, requisiti, sicurezza]
sources: [raw/papers/ipcei_avant_d6.0_m3_dosr_wp6_requirementsandfunctionaldesign_v10.md]
confidence: high
---

# WP6 — Urban Digital Twin (Society 5.0)

## Overview
WP6 sviluppa DT per contesti urbani con focus su trasparenza AI (XAI),
gestione evidence, partecipazione cittadina, e coordinamento multi-DT.
Introduce il concetto di **Citizen Twin** — DT del cittadino per servizi
pubblici personalizzati.

## Innovation Goals

| IG | Descrizione |
|----|-------------|
| **IG6.1** | Trasparenza e explainability degli algoritmi AI nella PA |
| **IG6.2** | Digitalizzazione, standardizzazione e correlazione di tipologie evidence |
| **IG6.3** | Ruolo attivo di cittadini, imprese e societa civile |
| **IG6.4** | Coordinamento micro-sistemi e DT multipli in contesto urbano |

## Obiettivi e KPI

| Obiettivo | KPI |
|-----------|-----|
| OB6.1 — AI sicura e affidabile con XAI | >=3 algoritmi XAI |
| OB6.2 — Decision-making evidence-informed | 1 processo, 1 tool knowledge space |
| OB6.3 — Servizi per societa civile attiva | >=10 algoritmi AI, >=10 servizi modulari, >=10 UI intuitive |
| OB6.4 — Sistema modulare multi-DT | 1 runtime simulazione, 1 architettura referenza, 1 UDT |

## Requisiti Funzionali Chiave
- **XAI**: SHAP, LIME, modelli glass-box, score-based input contribution
- **Evidence management**: spazio collaborativo, tag semantici, ontologie, tassonomie
- **Citizen participation**: workshop interattivi, gamification, co-design, drag-and-drop data flow
- **Multi-DT coordination**: microservizi, flussi dati logici, interoperabilita, GUI grafica
- **Citizen Twins**: unificazione data silos, predizione bisogni, servizi personalizzati
- **Open Data**: High-Value Datasets con compliance GDPR

## Requisiti di Sicurezza WP6
- **Privacy e sicurezza dati** — prioritari per Citizen Twins
- **GDPR compliance** per tutto il trattamento dati personali
- **Data Governance Act** per condivisione G2G, G2B, B2G
- **Anonimizzazione/agregazione** dati condivisi
- **Protezione cyber** per IoT e grandi volumi dati
- **Accountability, trasparenza, uguaglianza, privacy** nella PA

## Sfide Tecniche
- Interoperabilita dati tra entita urbane
- Privacy Citizen Twins — questioni etiche significative
- Governance dati carente
- Complessita algoritmica e skill gap
- Infrastruttura obsoleta in molte aree urbane
- Scalabilita con volumi crescenti

## Soluzioni Tecniche

### Enterprise
- Piattaforme city operation proprietarie

### Open-Source
- **SHAP** e **LIME** per XAI
- Ontologie e tassonomie per evidence cataloging
- Data Governance Act frameworks
- Data intermediaries per European Data Market
- Open Data / High-Value Datasets
- Architettura modulare e interoperabile
- Interfacce drag-and-drop per non-esperti

## Rischi Critici
- **R-CITIZEN**: Privacy Citizen Twin -> violazione diritti fondamentali [CRITICO]
- Diffidenza pubblica se privacy non adeguatamente protetta
- Barriere socio-economiche: finanziamento, regolamentazione
- AI nella PA: accountability e fairness

## Dipendenze
- Dipende da [[wp1-c3op-platform]] (infrastruttura)
- Dipende da [[wp2-distributed-data-ecosystem]] (data governance urbana)
- Dipende da [[wp3-cybersecurity]] (protezione IoT urbano)
