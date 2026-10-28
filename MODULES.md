# MODULES — MedCoreX hub reference

> Generated 27 Oct 2026 · living reference for all future work on this repo.
> **Terminology (owner's rule): every file of the hub is a MODULE.**
> The hub = **37 modules** grouped into **7 sections**, served behind a 5-page shell.
> Every change to a module is proposed to the owner first — nothing moves without approval.

## The hub at a glance

**Shell (not modules):** `/` = `site/index.html` (home) · `/library` = portal system (category menu → 7 portals) · `/about` · `/faq` · themed 404. All five carry the Studyverse design system: theme engine (🎲/T remix, 🔓 lock, 🌙 light/dark twin), blobs, patterns, hard-shadow cards, toasts/confetti. State: **current design language — done 27 Oct 2026** (`8bcaefb3`→`e7a1a341`).

**The 37 modules** below are grouped by their section. Their design state: modules wear the *earlier* Theme-2026 passes (font trio, tokens, radius, equalizers where noted) — **the Studyverse restyle of all 37 modules is the planned next phase** and awaits the owner's go.

| # | Section | Modules |
|---|---------|---------|
| — | **Core Books** | M01, M02, M03, M04, M05 |
| — | **Mocks & Drills** | M06 |
| — | **Past Papers & Answer Keys** | M07, M08, M09, M10, M11, M12, M13, M14 |
| — | **Exam Intelligence & Strategy** | M15, M16, M17, M18, M19, M20 |
| — | **Quick Reference** | M21, M22, M23, M24, M25, M26 |
| — | **Frameworks & Interactive** | M27 |
| — | **MedCORE Systems** | M28, M29, M30, M31, M32, M33, M34, M35, M36, M37 |

---

## Section · Core Books

### M01 · MedCORE Study Book

- **File:** `site/resources/medcore-production-master-html-medcore-master-book.html`, 1,439 lines — live at `/resources/medcore-production-master-html-medcore-master-book` (also reachable with `.html`; the extensionless URL serves the four-file module from Phase 4)
- **What it is:** Every system, one volume.
- **Inside:** 16 top-level headings; first ones: “Complete Study Book”, “Medicine”, “Surgery”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** live search/filter, 637 collapsible <details> blocks (95 chapter + 527 recall + 15 nav), sticky headers/bars, keyboard shortcuts, persists state in localStorage, print stylesheet, 1029 inline SVGs.
- **Mode system:** one theme system (2026-10-28): `html[data-mode]` + key `mlx-theme`, driven by both the sidebar Theme button and the floating chip; legacy `medcore.theme` honoured once as fallback.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta; crumb-back nav fix; counts corrected (footer 95 topics/2,271 MCQs).

### M02 · MCQ Architecture

- **File:** `site/resources/standalone-htmls-800-plus-mcq-architecture.html`, 1,368 lines — live at `/resources/standalone-htmls-800-plus-mcq-architecture`
- **What it is:** How the exam actually sets questions.
- **Inside:** 7 top-level headings; first ones: “MCQ Architecture”, “01. Evidence”, “02. Anatomy”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** 852 collapsible <details> blocks, sticky headers/bars, persists state in localStorage, print stylesheet, 1 inline SVGs.
- **Mode system:** none · rules:1 pref:3.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.
- **⚠ Notes:** Had IBM Plex Sans hiding in a --sans variable; fixed to Plus Jakarta Sans. @import converted to a single font link.

### M03 · Forge Cards

- **File:** `site/resources/standalone-htmls-forge-master.html`, 25,066 lines — live at `/resources/standalone-htmls-forge-master`
- **What it is:** 100 high-yield cards.
- **Inside:** 100 top-level headings; first ones: “ACS: STEMI & NSTEMI”, “Acute Kidney Injury (AKI)”, “Diabetic Ketoacidosis (DKA)”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** live search/filter, timer/interval logic, sticky headers/bars, keyboard shortcuts, persists state in localStorage, canvas/chart graphics, print stylesheet, 8 inline SVGs.
- **Mode system:** dark · rules:6 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; 4-family interactive themes; has light block; color-scheme meta.

### M04 · Memory Master

- **File:** `site/resources/medcore-memory-master-core.html`, 4,298 lines — live at `/resources/medcore-memory-master-core`
- **What it is:** Recall-first core file.
- **Inside:** 2 top-level headings; first ones: “exam Memory Master — Core”, “THE SYSTEMS”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** persists state in localStorage, print stylesheet, 2 inline SVGs.
- **Mode system:** dark · rules:7 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; 4-family interactive themes; has light block; color-scheme meta.

### M05 · Logic-First Bank

- **File:** `site/resources/qbank-logic-first-high-yield-logic-first-high-yield-bank.html`, 859 lines — live at `/resources/qbank-logic-first-high-yield-logic-first-high-yield-bank`
- **What it is:** Clinical reasoning, high-yield only.
- **Inside:** 2 top-level headings; first ones: “Logic-First High-Yield Bank”, “Round complete”. Data: 1 JSON.parse() loads (localStorage/inline).
- **Interface:** live search/filter, timer/interval logic, persists state in localStorage, print stylesheet, 2 inline SVGs.
- **Mode system:** dark · rules:6 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; 4-family interactive themes; has light block; color-scheme meta.

---

## Section · Mocks & Drills

### M06 · MedCORE Question Bank

- **File:** `site/resources/medcore-question-bank.html`, 2,059 lines — live at `/resources/medcore-question-bank`
- **What it is:** Test series + main bank merged · six subject groups.
- **Inside:** 2 top-level headings; first ones: “MedCORE Question Bank”, “Choose a subject”. Data: 3 JSON.parse() loads (localStorage/inline).
- **Interface:** answer-hiding quiz engine (reveal on click), timer/interval logic, keyboard shortcuts, persists state in localStorage, canvas/chart graphics, print stylesheet, 5 inline SVGs.
- **Mode system:** none · rules:9 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-eq MCQ equalizer; mlx-live toggle; 4-family interactive themes; has light block; color-scheme meta.
- **⚠ Notes:** Carries the 4-family interactive theming (library/ink/ice/copper) + the MCQ length-equalizer (mlx-eq).

---

## Section · Past Papers & Answer Keys

### M07 · Past Paper Hub

- **File:** `site/resources/medcore-past-paper-hub.html`, 527 lines — live at `/resources/medcore-past-paper-hub`
- **What it is:** All recalled past papers.
- **Inside:** 7 top-level headings; first ones: “Past PaperIntelligence Hub”, “The raw material”, “Subject patterns”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** 2 collapsible <details> blocks, sticky headers/bars, persists state in localStorage, print stylesheet, 3 inline SVGs.
- **Mode system:** none · rules:1 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.
- **⚠ Notes:** Had a self-hosted @font-face (IBM Plex Mono base64) — removed during de-Plexing.

### M08 · June 2025

- **File:** `site/resources/standalone-htmls-june-2025-answer-key.html`, 523 lines — live at `/resources/standalone-htmls-june-2025-answer-key`
- **What it is:** Verified key + distractor analysis.
- **Inside:** 0 top-level headings; first ones: flat document. Data: embedded `var DATA` bank · ~140 question entries.
- **Interface:** answer-hiding quiz engine (reveal on click), sticky headers/bars, keyboard shortcuts, persists state in localStorage, print stylesheet, 3 inline SVGs.
- **Mode system:** none · rules:1 pref:2.
- **Design passes so far:** fonts:2026 trio; mlx-eq MCQ equalizer; mlx-live toggle; has light block; color-scheme meta.

### M09 · June 2024

- **File:** `site/resources/standalone-htmls-june-2024-answer-key.html`, 526 lines — live at `/resources/standalone-htmls-june-2024-answer-key`
- **What it is:** Self-scoring.
- **Inside:** 0 top-level headings; first ones: flat document. Data: embedded `var DATA` bank · ~147 question entries.
- **Interface:** answer-hiding quiz engine (reveal on click), sticky headers/bars, keyboard shortcuts, persists state in localStorage, print stylesheet, 3 inline SVGs.
- **Mode system:** none · rules:1 pref:2.
- **Design passes so far:** fonts:2026 trio; mlx-eq MCQ equalizer; mlx-live toggle; has light block; color-scheme meta.

### M10 · December 2024

- **File:** `site/resources/standalone-htmls-dec-2024-answer-key.html`, 526 lines — live at `/resources/standalone-htmls-dec-2024-answer-key`
- **What it is:** Self-scoring.
- **Inside:** 0 top-level headings; first ones: flat document. Data: embedded `var DATA` bank · ~171 question entries.
- **Interface:** answer-hiding quiz engine (reveal on click), sticky headers/bars, keyboard shortcuts, persists state in localStorage, print stylesheet, 3 inline SVGs.
- **Mode system:** none · rules:1 pref:2.
- **Design passes so far:** fonts:2026 trio; mlx-eq MCQ equalizer; mlx-live toggle; has light block; color-scheme meta.

### M11 · December 2025

- **File:** `site/resources/standalone-htmls-dec-2025-answer-key.html`, 526 lines — live at `/resources/standalone-htmls-dec-2025-answer-key`
- **What it is:** Corrected key.
- **Inside:** 0 top-level headings; first ones: flat document. Data: embedded `var DATA` bank · ~187 question entries.
- **Interface:** answer-hiding quiz engine (reveal on click), sticky headers/bars, keyboard shortcuts, persists state in localStorage, print stylesheet, 3 inline SVGs.
- **Mode system:** none · rules:1 pref:2.
- **Design passes so far:** fonts:2026 trio; mlx-eq MCQ equalizer; mlx-live toggle; has light block; color-scheme meta.

### M12 · May 2026

- **File:** `site/resources/standalone-htmls-may-2026-mcq-breakdown.html`, 523 lines — live at `/resources/standalone-htmls-may-2026-mcq-breakdown`
- **What it is:** Topic breakdown.
- **Inside:** 0 top-level headings; first ones: flat document. Data: embedded `var DATA` bank · ~177 question entries.
- **Interface:** answer-hiding quiz engine (reveal on click), sticky headers/bars, keyboard shortcuts, persists state in localStorage, print stylesheet, 3 inline SVGs.
- **Mode system:** none · rules:1 pref:2.
- **Design passes so far:** fonts:2026 trio; mlx-eq MCQ equalizer; mlx-live toggle; has light block; color-scheme meta.

### M13 · Prediction Exam 2026

- **File:** `site/resources/medcore-prediction-exam.html`, 524 lines — live at `/resources/medcore-prediction-exam`
- **What it is:** Full sitting · 14 subjects.
- **Inside:** 0 top-level headings; first ones: flat document. Data: embedded `var DATA` bank · ~200 question entries.
- **Interface:** answer-hiding quiz engine (reveal on click), sticky headers/bars, keyboard shortcuts, persists state in localStorage, print stylesheet, 3 inline SVGs.
- **Mode system:** none · rules:1 pref:2.
- **Design passes so far:** fonts:2026 trio; mlx-eq MCQ equalizer; mlx-live toggle; has light block; color-scheme meta.
- **⚠ Notes:** MCQ length-equalizer applied (mlx-eq) — options clamp to 2 lines pre-reveal.

### M14 · Prediction Exam · Key

- **File:** `site/resources/medcore-prediction-exam-answer-key.html`, 501 lines — live at `/resources/medcore-prediction-exam-answer-key`
- **What it is:** Same paper, full key.
- **Inside:** 0 top-level headings; first ones: flat document. Data: embedded `var DATA` bank · ~200 question entries.
- **Interface:** answer-hiding quiz engine (reveal on click), sticky headers/bars, keyboard shortcuts, persists state in localStorage, print stylesheet, 0 inline SVGs.
- **Mode system:** none · rules:1 pref:2.
- **Design passes so far:** fonts:2026 trio; mlx-eq MCQ equalizer; mlx-live toggle; has light block; color-scheme meta.
- **⚠ Notes:** Same 200 questions as the exam (duplicate set) — MCQ equalizer applied.

---

## Section · Exam Intelligence & Strategy

### M15 · 2026 Prediction Intel

- **File:** `site/resources/medcore-prediction-intelligence-report.html`, 195 lines — live at `/resources/medcore-prediction-intelligence-report`
- **What it is:** What the paper will test.
- **Inside:** 8 top-level headings; first ones: “INTELLIGENCE REPORT”, “Executive Summary”, “Section 1 — Predicted Weightage vs Recalled Pattern”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** 7 collapsible <details> blocks, sticky headers/bars, persists state in localStorage, print stylesheet, 1 inline SVGs.
- **Mode system:** none · rules:1 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.

### M16 · Full Picture Report

- **File:** `site/resources/medcore-system-full-picture-report.html`, 1,215 lines — live at `/resources/medcore-system-full-picture-report`
- **What it is:** Whole-system map · one view of everything.
- **Inside:** 11 top-level headings; first ones: “exam System — The Full Picture”, “Contents”, “The Evidence Base — every source, counted”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** sticky headers/bars, keyboard shortcuts, persists state in localStorage, print stylesheet, 15 inline SVGs.
- **Mode system:** none · rules:1 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.

### M17 · Pattern Analysis

- **File:** `site/resources/medcore-pattern-analysis.html`, 232 lines — live at `/resources/medcore-pattern-analysis`
- **What it is:** Four papers decoded · recurring patterns.
- **Inside:** 4 top-level headings; first ones: “Pattern Analysis — 4 Papers”, “Subject Distribution per Paper”, “Cross-Paper Comparison (MCQs per Subject)”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** persists state in localStorage, print stylesheet, 0 inline SVGs.
- **Mode system:** none · rules:1 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.
- **⚠ Notes:** CSS brace imbalance is PRE-EXISTING (was already off-by-one at the auth-era commit) — fix when this module is worked.
- **⚠ Pre-existing defect:** unbalanced CSS braces (known since the auth-era commit; harmless to browsers, fix in this module's work pass)

### M18 · High-Yield Topic Pool

- **File:** `site/resources/standalone-htmls-prediction-sheet-1-high-yield-topic-pool.html`, 821 lines — live at `/resources/standalone-htmls-prediction-sheet-1-high-yield-topic-pool`
- **What it is:** Where to spend your time.
- **Inside:** 1 top-level headings; first ones: “Prediction Sheet 1 &mdash; High-Yield Topic Pool”. Data: 2 JSON.parse() loads (localStorage/inline).
- **Interface:** live search/filter, sticky headers/bars, persists state in localStorage, canvas/chart graphics, print stylesheet, 19 inline SVGs.
- **Mode system:** none · rules:1 pref:2.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.

### M19 · 60-Day Battle Plan

- **File:** `site/resources/standalone-htmls-60-day-battle-plan.html`, 1,026 lines — live at `/resources/standalone-htmls-60-day-battle-plan`
- **What it is:** Day-by-day route to exam day.
- **Inside:** 8 top-level headings; first ones: “Sixty days toown the exam.”, “Know the Machine”, “The Daily Doctrine”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** timer/interval logic, sticky headers/bars, persists state in localStorage, print stylesheet, 0 inline SVGs.
- **Mode system:** none · rules:1 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.

### M20 · Battle LMS

- **File:** `site/resources/planner-medcore-battle-lms.html`, 1,080 lines — live at `/resources/planner-medcore-battle-lms`
- **What it is:** Command centre · schedule, drills, tracking.
- **Inside:** 4 top-level headings; first ones: “Block 01 in the arena — CVS + Respiratory.”, “Error Log”, “Question Review”. Data: 1 JSON.parse() loads (localStorage/inline).
- **Interface:** timer/interval logic, sticky headers/bars, persists state in localStorage, print stylesheet, 0 inline SVGs.
- **Mode system:** none · rules:5 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.

---

## Section · Quick Reference

### M21 · Cheat Card

- **File:** `site/resources/medcore-cheat-card.html`, 265 lines — live at `/resources/medcore-cheat-card`
- **What it is:** One-page recall sheet.
- **Inside:** 1 top-level headings; first ones: “Cheat Card”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** persists state in localStorage, print stylesheet, 0 inline SVGs.
- **Mode system:** none · rules:1 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.

### M22 · Magic Table

- **File:** `site/resources/standalone-htmls-magic-table-medical-licensing.html`, 1,691 lines — live at `/resources/standalone-htmls-magic-table-medical-licensing`
- **What it is:** Licensing thresholds · memorise once.
- **Inside:** 40 top-level headings; first ones: “Magic Table”, “Endocrine — Diabetes Mellitus”, “Thyroid &amp; Parathyroid”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** live search/filter, sticky headers/bars, keyboard shortcuts, persists state in localStorage, print stylesheet, 210 inline SVGs.
- **Mode system:** none · rules:1 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.

### M23 · Medical Quick Ref

- **File:** `site/resources/standalone-htmls-medical-quick-reference-combined.html`, 116 lines — live at `/resources/standalone-htmls-medical-quick-reference-combined`
- **What it is:** Numerics and ranges.
- **Inside:** 0 top-level headings; first ones: flat document. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** persists state in localStorage, print stylesheet, 0 inline SVGs.
- **Mode system:** none · rules:0 pref:1.
- **Design passes so far:** mlx-live toggle; color-scheme meta.
- **⚠ Notes:** Single-theme file (dark navy stub): theme toggle intentionally hidden (mlx-notoggle).

### M24 · Symptom Clusters

- **File:** `site/resources/standalone-htmls-disease-symptom-clusters.html`, 580 lines — live at `/resources/standalone-htmls-disease-symptom-clusters`
- **What it is:** Symptom to differential, grouped.
- **Inside:** 1 top-level headings; first ones: “Disease Symptom Clusters”. Data: 2 JSON.parse() loads (localStorage/inline).
- **Interface:** sticky headers/bars, persists state in localStorage, canvas/chart graphics, print stylesheet, 16 inline SVGs.
- **Mode system:** none · rules:1 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.

### M25 · Last Day Sheet

- **File:** `site/resources/side-projects-last-day-revision-sheet.html`, 751 lines — live at `/resources/side-projects-last-day-revision-sheet`
- **What it is:** Final night · highest-yield only.
- **Inside:** 17 top-level headings; first ones: “LAST DAY REVISION SHEET”, “EXAM-DAY STRATEGY”, “CONTENTS”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** persists state in localStorage, canvas/chart graphics, print stylesheet, 0 inline SVGs.
- **Mode system:** none · rules:0 pref:1.
- **Design passes so far:** mlx-live toggle; color-scheme meta.
- **⚠ Notes:** Single-theme paper sheet: theme toggle intentionally hidden (mlx-notoggle).

### M26 · Repeat Offenders

- **File:** `site/resources/nre-recall-sheets-repeat-offenders.html`, 874 lines — live at `/resources/nre-recall-sheets-repeat-offenders`
- **What it is:** The NRE recall vault — questions that keep coming back.
- **Inside:** 7 top-level headings; first ones: “The questions that never leave the exam hall.”, “Few repeated questions — all the time”, “Surgery — best initial & gold standard tests”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** live search/filter, 3D flip-card interaction, sticky headers/bars, keyboard shortcuts, persists state in localStorage, print stylesheet, 0 inline SVGs.
- **Mode system:** none · rules:1 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.
- **⚠ Notes:** Newest module (added Oct 2026); title uses the recall-vault naming.

---

## Section · Frameworks & Interactive

### M27 · Case Ladder

- **File:** `site/resources/standalone-htmls-case-ladder-interactive.html`, 432 lines — live at `/resources/standalone-htmls-case-ladder-interactive`
- **What it is:** Interactive clinical case practice.
- **Inside:** 2 top-level headings; first ones: “Clinical Case-Ladder MCQ Add-On”, “Topic ${idx+1}: ${escapeHtml(topic.title)}”. Data: 2 JSON.parse() loads (localStorage/inline).
- **Interface:** live search/filter, sticky headers/bars, persists state in localStorage, print stylesheet, 0 inline SVGs.
- **Mode system:** none · rules:1 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-eq MCQ equalizer; mlx-live toggle; has light block; color-scheme meta.

---

## Section · MedCORE Systems

### M28 · Cardiology

- **File:** `site/resources/medcore-systems-cardiology-cardiology-medcore.html`, 3,160 lines — live at `/resources/medcore-systems-cardiology-cardiology-medcore`
- **What it is:** Complete system book.
- **Inside:** 16 top-level headings; first ones: “Cardiology”, “Acute Coronary Syndrome (ACS)”, “Pericarditis”. Data: 2 JSON.parse() loads (localStorage/inline).
- **Interface:** live search/filter, timer/interval logic, sticky headers/bars, keyboard shortcuts, persists state in localStorage, canvas/chart graphics, print stylesheet, 4 inline SVGs.
- **Mode system:** dark · rules:13 pref:0.
- **Design passes so far:** MedColor sheet (navy ramp); 4-family interactive themes; has light block.
- **⚠ Notes:** Model book of the systems family (House Rules §3). Reverted to its original colorful build + MedColor sheet; keep as template for the other nine.

### M29 · Neurology

- **File:** `site/resources/medcore-systems-neurology-neurology-medcore.html`, 4,603 lines — live at `/resources/medcore-systems-neurology-neurology-medcore`
- **What it is:** Complete system book.
- **Inside:** 13 top-level headings; first ones: “Neurology”, “Neurological Examination Basics”, “Stroke &amp; Cerebrovascular Disease”. Data: 2 JSON.parse() loads (localStorage/inline).
- **Interface:** live search/filter, timer/interval logic, sticky headers/bars, keyboard shortcuts, persists state in localStorage, canvas/chart graphics, print stylesheet, 4 inline SVGs.
- **Mode system:** dark · rules:13 pref:0.
- **Design passes so far:** MedColor sheet (navy ramp); 4-family interactive themes; has light block.

### M30 · Respiratory

- **File:** `site/resources/medcore-systems-respiratory-respiratory-medcore.html`, 4,085 lines — live at `/resources/medcore-systems-respiratory-respiratory-medcore`
- **What it is:** Complete system book.
- **Inside:** 15 top-level headings; first ones: “Respiratory”, “Asthma — Diagnosis, Severity, Acute Exacerbation, and Step T”, “COPD — Diagnosis, Exacerbation, Oxygen/NIV, and LTOT”. Data: 2 JSON.parse() loads (localStorage/inline).
- **Interface:** live search/filter, timer/interval logic, sticky headers/bars, keyboard shortcuts, persists state in localStorage, canvas/chart graphics, print stylesheet, 4 inline SVGs.
- **Mode system:** dark · rules:13 pref:0.
- **Design passes so far:** MedColor sheet (navy ramp); 4-family interactive themes; has light block.

### M31 · Dermatology

- **File:** `site/resources/medcore-systems-dermatology-dermatology-medcore.html`, 2,898 lines — live at `/resources/medcore-systems-dermatology-dermatology-medcore`
- **What it is:** Complete system book.
- **Inside:** 15 top-level headings; first ones: “Dermatology”, “SKIN ANATOMY &amp; TERMINOLOGY”, “ECZEMATOUS DERMATOSES”. Data: 2 JSON.parse() loads (localStorage/inline).
- **Interface:** live search/filter, timer/interval logic, sticky headers/bars, keyboard shortcuts, persists state in localStorage, canvas/chart graphics, print stylesheet, 4 inline SVGs.
- **Mode system:** dark · rules:13 pref:0.
- **Design passes so far:** MedColor sheet (navy ramp); 4-family interactive themes; has light block.

### M32 · Urology

- **File:** `site/resources/medcore-systems-urology-urology-medcore.html`, 4,559 lines — live at `/resources/medcore-systems-urology-urology-medcore`
- **What it is:** Complete system book.
- **Inside:** 15 top-level headings; first ones: “Urology”, “Testicular Torsion vs Epididymitis”, “Acute Urinary Retention and Catheter Logic”. Data: 2 JSON.parse() loads (localStorage/inline).
- **Interface:** live search/filter, timer/interval logic, sticky headers/bars, keyboard shortcuts, persists state in localStorage, canvas/chart graphics, print stylesheet, 4 inline SVGs.
- **Mode system:** dark · rules:13 pref:0.
- **Design passes so far:** MedColor sheet (navy ramp); 4-family interactive themes; has light block.

### M33 · Gynaecology

- **File:** `site/resources/medcore-systems-gynecology-gynecology-medcore.html`, 3,950 lines — live at `/resources/medcore-systems-gynecology-gynecology-medcore`
- **What it is:** Complete system book.
- **Inside:** 26 top-level headings; first ones: “Gynecology”, “Gynecology — Comprehensive Review”, “Abnormal Uterine Bleeding”. Data: 2 JSON.parse() loads (localStorage/inline).
- **Interface:** live search/filter, timer/interval logic, sticky headers/bars, keyboard shortcuts, persists state in localStorage, canvas/chart graphics, print stylesheet, 4 inline SVGs.
- **Mode system:** dark · rules:13 pref:0.
- **Design passes so far:** MedColor sheet (navy ramp); 4-family interactive themes; has light block.

### M34 · Obstetrics

- **File:** `site/resources/medcore-systems-obstetrics-obstetrics-medcore.html`, 4,477 lines — live at `/resources/medcore-systems-obstetrics-obstetrics-medcore`
- **What it is:** Complete system book.
- **Inside:** 7 top-level headings; first ones: “Obstetrics”, “Basics of Pregnancy”, “Prenatal Screening &amp; Diagnostics”. Data: 2 JSON.parse() loads (localStorage/inline).
- **Interface:** live search/filter, timer/interval logic, sticky headers/bars, keyboard shortcuts, persists state in localStorage, canvas/chart graphics, print stylesheet, 4 inline SVGs.
- **Mode system:** dark · rules:13 pref:0.
- **Design passes so far:** MedColor sheet (navy ramp); 4-family interactive themes; has light block.

### M35 · Paediatrics

- **File:** `site/resources/medcore-systems-pediatrics-pediatrics-medcore.html`, 3,905 lines — live at `/resources/medcore-systems-pediatrics-pediatrics-medcore`
- **What it is:** Complete system book.
- **Inside:** 15 top-level headings; first ones: “Pediatrics”, “Neonatology”, “Growth &amp; Development”. Data: 2 JSON.parse() loads (localStorage/inline).
- **Interface:** live search/filter, timer/interval logic, sticky headers/bars, keyboard shortcuts, persists state in localStorage, canvas/chart graphics, print stylesheet, 4 inline SVGs.
- **Mode system:** dark · rules:13 pref:0.
- **Design passes so far:** MedColor sheet (navy ramp); 4-family interactive themes; has light block.

### M36 · ENT

- **File:** `site/resources/medcore-systems-ent-ent-medcore.html`, 2,932 lines — live at `/resources/medcore-systems-ent-ent-medcore`
- **What it is:** Complete system book.
- **Inside:** 10 top-level headings; first ones: “Ear, Nose &amp; Throat”, “ACUTE EPIGLOTTITIS”, “FOREIGN BODY AIRWAY OBSTRUCTION”. Data: 2 JSON.parse() loads (localStorage/inline).
- **Interface:** live search/filter, timer/interval logic, sticky headers/bars, keyboard shortcuts, persists state in localStorage, canvas/chart graphics, print stylesheet, 4 inline SVGs.
- **Mode system:** dark · rules:13 pref:0.
- **Design passes so far:** MedColor sheet (navy ramp); 4-family interactive themes; has light block.

### M37 · Ophthalmology

- **File:** `site/resources/medcore-systems-ophthalmology-ophthalmology-medcore.html`, 3,067 lines — live at `/resources/medcore-systems-ophthalmology-ophthalmology-medcore`
- **What it is:** Complete system book.
- **Inside:** 14 top-level headings; first ones: “Ophthalmology”, “Acute Angle-Closure Glaucoma”, “Anterior Uveitis”. Data: 2 JSON.parse() loads (localStorage/inline).
- **Interface:** live search/filter, timer/interval logic, sticky headers/bars, keyboard shortcuts, persists state in localStorage, canvas/chart graphics, print stylesheet, 4 inline SVGs.
- **Mode system:** dark · rules:13 pref:0.
- **Design passes so far:** MedColor sheet (navy ramp); 4-family interactive themes; has light block.

---

## Rules of engagement for module work

1. One module at a time; the owner approves the approach before edits, the result before deploy.
2. Any module edit must keep: zero file counts, zero board names (PMDC/NRE) in copy,
   zero emoji in *old* surfaces unless the owner has granted it (emoji ARE allowed on the Studyverse shell).
3. Verify before reporting: `node --check` on every inline script, brace balance, content-invariance
   against git (style regions excluded), then deploy + 42-path byte parity.
4. The shell's design language (Studyverse engine + dark twin) is the target every module will adopt
   in the module phase — pending owner's sequencing.
