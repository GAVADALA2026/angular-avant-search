---
source_url: interno
ingested: 2026-06-16
sha256: placeholder
---

# Requisiti di Sicurezza WP8 — Healthcare DT

## Contesto
Il WP8 (Healthcare Digital Twin) gestisce dati sanitari sensibili di pazienti.
Richiede il massimo livello di sicurezza tra tutti i WP del progetto AVANT.

## Requisiti Identificati

### R-SIC-001: Dati sanitari cifrati
Tutti i dati sanitari devono essere cifrati a riposo (AES-256) e in transito (TLS 1.3).
Nessun dato in chiaro su disco o in rete.

### R-SIC-002: Accesso basato su ruolo (RBAC)
Il sistema deve implementare RBAC granulare. Ogni ruolo ha permessi minimi
necessari (principio del minimo privilegio). Ruoli definiti:
- Medico: lettura/scrittura sui propri pazienti
- Infermiero: lettura sui propri pazienti
- Amministratore: gestione utenti, nessun accesso dati clinici
- Sistema: solo API machine-to-machine con service account

### R-SIC-003: Audit trail immutabile
Ogni accesso ai dati sanitari deve essere loggato in audit trail immutabile.
Log deve contenente: chi, cosa, quando, da dove. Retention minima 10 anni.

### R-SIC-004: Federated learning — dati non centralizzati
Per il componente di federated learning, i dati sanitari NON devono mai lasciare
l'ospedale di origine. Solo i gradienti del modello vengono condivisi,
cifrati con secure aggregation.

### R-SIC-005: CDSS — Validazione output AI
Il Clinical Decision Support System (CDSS) basato su AI deve avere:
- Validazione umana obbligatoria prima di azioni cliniche
- Logging di ogni raccomandazione con score di confidenza
- Meccanismo di override medico
- Test periodici per bias algoritmici

### R-SIC-006: Conformita normativa
- GDPR: dati sanitari = categoria speciale (Art. 9)
- MDR (Medical Device Regulation): se CDSS e' classificato dispositivo medico
- ISO 27001: sistema di gestione sicurezza informazioni
- NIS2: operatore di servizio essenziale (sanita)

## Rischi Principali
- R1: Errore AI CDSS -> danno diretto paziente [CRITICO]
- R2: Breach dati sanitizzati -> sanzioni GDPR + danno reputazionale [CRITICO]
- R3: Gradient leakage in federated learning -> re-identificazione paziente [ALTO]

## Soluzioni Tecniche Proposte

### Enterprise
- HashiCorp Vault per secrets management
- IBM Guardium per audit trail
- Microsoft Azure Confidential Computing per federated learning
- ServiceNow GRC per compliance management

### Open-Source
- HashiCorp Vault (open-source edition) per secrets
- Apache Ranger per RBAC e audit
- OpenMined PySyft per federated learning privacy-preserving
- Wazuh per SIEM e audit trail
- Keycloak per identity management e RBAC
