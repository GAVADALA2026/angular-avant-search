---
title: WP5 — Cultural Heritage Digital Twin (3DGS, XR, Conservation)
created: 2026-06-16
updated: 2026-06-16
type: entity
tags: [wp5, cultural-heritage, 3dgs, xr, photogrammetry, conservation, requisiti]
sources: [raw/papers/ipcei_avant_d5.0_m3_dosr_wp5_requirementsandfunctionaldesign_v10.md]
confidence: high
---

# WP5 — Cultural Heritage Digital Twin

## Overview
WP5 sviluppa Digital Twin per patrimonio culturale europeo. Focus su
3D Gaussian Splatting (3DGS), fotogrammetria, XR per fruizione, e
applicazioni di conservazione/restauro.

## Innovation Goals

| IG | Descrizione |
|----|-------------|
| **IG5.1** | Migliorare rapporto qualita/costo della digitazione — accessibile anche per piccole istituzioni |
| **IG5.2** | Architettura SW completa per gestione ciclo vita DT culturali |
| **IG5.3** | DT per fruizione XR — esperienze immersive con riuso asset digitali |
| **IG5.4** | DT per conservazione, preservazione e restauro |

## Obiettivi e KPI

| Obiettivo | KPI |
|-----------|-----|
| OB5.1.a — Workflow convergente performance/costo | >20 equipment valutati, >8 selezionati, >5 best practices |
| OB5.1.b — ML per acquisizione digitale | >3 modelli ML |
| OB5.2 — Architettura unifica per DT culturali | >7 classi CH supportate |
| OB5.3 — XR fruizione su cloud-edge continuum | >2 formati persistenti su >3 dispositivi XR recenti |
| OB5.4 — Conservazione/preservazione/restauro | >3 ML per tali processi |

## Requisiti Funzionali Chiave
- Supporto categorie CH dipinti, sculture, edifici storici, siti archeologici
- Modelli 3D alta qualita + dati materiali/proprieta fisiche/sensori
- Ciclo vita: storage, versioning, preservazione digitale
- XR: VR headset, AR glasses, guanti tattili
- ML per classificazione, segmentazione, VQA su dataset CH
- Workflow economici con foto come input primario

## Requisiti di Sicurezza WP5
- Diritti proprietari e copyright su artefatti digitalizzati
- Permessi per artefatti culturali/religiosi sensibili
- Protezione contro duplicazione e divulgazione illecita
- Compliance protezione dati personali nei dataset CH

## Sfide Tecniche
- Costo elevato acquisizione digitale (LIDAR, fotogrammetria)
- Obsolescenza XR rapida (Unity <-> Unreal)
- Scetticismo professionisti sulla precisione DT per restauro
- Barriere legali/etiche: copyright, sensibilita culturale
- Validazione: micro-crack, texture fini

## Soluzioni Tecniche

### Enterprise
- LIDAR professionali (FARO, Leica)
- Agisoft Metashape, Reality Capture
- Unity / Unreal Engine

### Open-Source
- **3D Gaussian Splatting (3DGS)** — rendering real-time >=60 fps
- **NeRFs** — fotorealismo 3D
- **Colmap** — fotogrammetria open-source
- **CloudCompare** — denoising point cloud
- **CLIP, DINO, DINOv2** — classificazione/segmentazione/VQA
- iPad/iPhone LIDAR come alternativa low-cost
- Droni economici per copertura aerea

## Rischi
- Costo eccessivo per piccole istituzioni GLAM
- Obsolescenza investimenti XR
- Tecniche ML promettenti (3DGS) che non mantengono aspettative
- Dispute IP su artefatti digitalizzati

## Dipendenze
- Dipende da [[wp1-c3op-platform]] (cloud-edge per XR rendering)
- Dipende da [[wp2-distributed-data-ecosystem]] (gestione asset digitali)
