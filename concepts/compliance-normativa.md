---
title: Framework di Compliance Normativa AVANT
created: 2026-06-16
updated: 2026-06-16
type: concept
tags: [conformita, gdpr, nis2, ai-act, mdr, cybersecurity-act, requisiti, sicurezza]
sources: [raw/papers/ipcei_avant_d0.3b_m3_pepm_ethicsandprivacymanagementplan_v10.md]
confidence: high
---

# Framework di Compliance Normativa AVANT

## Overview
Il progetto AVANT deve conformarsi a un ecosistema normativo europeo complesso
e in evoluzione. Questa pagina raccoglie tutti i riferimenti normativi applicabili.

## Normative Chiave

### GDPR (Regolamento 2016/679)
- **Dati sanitari** (WP8) = categoria speciale, Art. 9 — consenso esplicito obbligatorio
- **Citizen Twins** (WP6) — trattamento dati personali su larga scala → DPIA obbligatoria
- **Persona Twins** (WP4) — dati biometrici/comportamentali — categoria speciale
- Principi: lawful, fair, transparent; purpose limitation; data minimisation;
  accuracy; storage limitation; integrity & confidentiality
- **DPO** e Legal Office devono approvare Information Sheet e Consent Form

### AI Act (Proposta — in fase di approvazione)
- Approccio basato sul rischio: **unacceptable / high / low**
- **CDSS** (WP8) = alto rischio (dispositivo medico? -> classificazione MDR)
- **XAI** (WP6) — requisito di trasparenza per AI nella PA
- Requisiti high-risk: risk management, human oversight, accuracy, robustness,
  cybersecurity, documentation, transparency, data governance
- **ALTAI Assessment** per validazione trustworthy AI

### NIS2 Directive
- Settori energia (WP7) e sanita (WP8) = **alta criticita**
- Obblighi: security risk management, incident reporting, all-hazards approach
- WP3 e' pivotal per compliance NIS2

### MDR (Medical Device Regulation)
- Se CDSS classificato dispositivo medico — certificatione CE obbligatoria
- Requisiti di clinical evaluation e post-market surveillance

### ePrivacy Regulation (Proposta)
- Consenso esplicito per cookies/tracking
- Riservatezza comunicazioni elettroniche
- Anonimizzazione/eliminazione metadata

### Data Governance Act (DGA)
- Framework condivisione dati G2G, G2B, B2G
- Data intermediaries per European Data Market

### Data Act (Proposta)
- Accesso equo ai dati
- B2G data sharing

### Cybersecurity Act
- Framework di certificazione ENISA
- Coordinamento con WP3

## Privacy by Design (Art. 25 GDPR)
- Pseudonimizzazione e anonimizzazione
- Controlli accessi granulari
- Minimizzazione dati nella architettura
- Crittografia end-to-end
- Metadati anonimizzati/eliminati

## DPIA (Data Protection Impact Assessment)
- Obbligatoria prima di trattare dati personali su larga scala
- Template: Annex III del D0.3B
- Necessaria per: WP6 (Citizen Twins), WP8 (dati sanitari), WP4 (persona twins)

## Consent Management
- Consenso libero, informato, esplicito
- Ritirabile in qualsiasi momento
- Granulare: singolo episodio di cura / singolo studio (WP8)
- Form templates: Annex I del D0.3B

## Ethical by Design
- European Code of Conduct for Research Integrity
  (reliability, honesty, respect, accountability)
- Human rights impact assessment
- Independent oversight mechanisms
- Multi-stakeholder approach
