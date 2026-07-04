---
title: WP8 — Healthcare Digital Twin (Federated Health Data, CDSS, GenAI)
created: 2026-06-16
updated: 2026-06-16
type: entity
tags: [wp8, healthcare, cdss, hdt, genai, federated-learning, requisiti, sicurezza]
sources: [raw/papers/ipcei_avant_d8.0_m3_dosr_wp8_requirementsandfunctionaldesign_v10.md]
confidence: high
---

# WP8 — Healthcare Digital Twin

## Overview
WP8 sviluppa un framework per integrare dati sanitari da fonti eterogenee,
supportare decisioni cliniche con AI e DT, e garantire privacy dei pazienti.
E' il WP con i requisiti di sicurezza piu stringenti del progetto AVANT.

## Innovation Goals

| IG | Descrizione |
|----|-------------|
| **IG8.1** | Integrazione federata e condivisione dati sanitari olistici |
| **IG8.2** | Sviluppo semplificato di CDSS pluggable, explainable e HDT |
| **IG8.3** | Sviluppo semplificato di EHR olistici per medicina personalizzata |
| **IG8.4** | Integrazione fluida tra assistenza sanitaria e monitoring paziente |

## Obiettivi e KPI

| Obiettivo | KPI |
|-----------|-----|
| OB8.1 — Federazione dati sanitari | >=2 format standard (OMOP, FHIR), >=3 FHIR IGs, consenso paziente granulare |
| OB8.2 — CDSS centrato utente con AI/DT | >=3 nuove feature API, >=3 formati knowledge, >=3 HDT/CDSS testing |
| OB8.3 — EHR per medicina personalizzata | >=4 categorie dati, >=5 attivita sanitarie, >=3 categorie decisioni spiegate |
| OB8.4 — Monitoring paziente remoto | >=4 dati monitorati, >=4 protocolli IoT, >=3 raccomandazioni monitoring |

## User Stories Chiave

### IG8.1 — Federazione Dati
- **R8.1.1**: Repository multi-source cloud-native con full-text search
- **R8.1.2**: Acquisizione dati omici da lab
- **R8.1.3**: Condivisione dati anonimizzati per ricerca (EHDS2)
- **R8.1.4**: Query federate su repository distribuiti

### IG8.2 — CDSS Pluggable
- **R8.2.1**: Framework CDSS/DT pluggable senza coding
- **R8.2.2**: CDS per patologia digitale (analisi campioni istologici)
- **R8.2.3**: DT per emergenze (ottimizzazione risorse EMS)
- **R8.2.4**: CDS con GenAI per query in linguaggio naturale

### IG8.3 — EHR Olistico
- **R8.3.1**: Framework per sviluppo rapido web app sanitarie
- **R8.3.2**: Generative AI per sviluppo interfacce
- **R8.3.3**: Visualizzazione dati clinici-omici
- **R8.3.4**: Plug-in dinamico CDSS senza modifiche codice

### IG8.4 — Remote Monitoring
- **R8.4.1**: Piattaforma telemedicina integrata
- **R8.4.2**: App paziente per advanced telemedicine
- **R8.4.3**: CDS proattivo per monitoring predittivo

## Requisiti Funzionali Chiave
- Modello dati sanitario unificato e estensibile (oltre OMOP/FHIR)
- API CDSS estesa (oltre CDS-Hook) con metadata elucidazioni
- Federazione dati: nessuna centralizzazione, controllo ai data provider
- Consenso paziente granulare: per singolo episodio cura / singolo studio ricerca
- Generative AI per GUI sanitarie
- Integration dispositivi medici certificati + sensori ambientali

## Requisiti di Sicurezza WP8
- **Dati sanitari cifrati**: AES-256 a riposo, TLS 1.3 in transito
- **RBAC granulare**: Medico, Infermiere, Amministratore, Sistema (service account)
- **Audit trail immutabile**: retention 10 anni minimo
- **Federated learning**: dati NON lasciano l'ospedale, solo gradienti cifrati
- **CDSS**: validazione umana obbligatoria, override medico, test anti-bias
- **GDPR Art.9**: dati sanitari = categoria speciale
- **MDR**: se CDSS classificato dispositivo medico
- **ISO 27001**, **NIS2**

## Sfide Tecniche
- Integrazione dati sanitari rispettando privacy e sovranita dati
- API CDSS/HDT limitate
- EHR non pronti per medicina personalizzada
- Supporto insufficiente al monitoring paziente

## Rischi Critici
- **R-AI-CDSS**: Errore AI CDSS -> danno diretto paziente [CRITICO]
- **R-BREACH**: Breach dati sanitari -> sanzioni GDPR + danno reputazionale [CRITICO]
- **R-GRADIENT**: Gradient leakage -> re-identificazione paziente [ALTO]

## Soluzioni Tecniche

### Enterprise
- HashiCorp Vault (secrets), IBM Guardium (audit)
- Azure Confidential Computing (federated learning)
- ServiceNow GRC (compliance)

### Open-Source
- HashiCorp Vault (OSS), Apache Ranger (RBAC/audit)
- OpenMined PySyft (federated learning privacy-preserving)
- Wazuh (SIEM/audit), Keycloak (IAM)
- FHIR standard, CDS-Hook API

## Dipendenze
- Dipende da [[wp1-c3op-platform]] (infrastruttura cloud-edge)
- Dipende da [[wp2-distributed-data-ecosystem]] (data governance sanitaria) — DIPENDENZA ESPLICITA
- Dipende da [[wp3-cybersecurity]] (framework sicurezza DT sanitario)
