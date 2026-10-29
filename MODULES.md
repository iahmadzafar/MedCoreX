# MODULES — MedCoreX hub reference

> Generated 27 Oct 2026 · living reference for all future work on this repo.
> **Audited 29 Oct 2026** — every row re-verified against disk. Conventions used, and what
> to re-run before trusting a row: line count = `wc -l < file>` · “top-level headings” =
> `<h1>`/`<h2>` **with text** (empty JS placeholders don't count) · every feature named in
> **Interface** must actually exist in the file · live URLs are extensionless (`href()` in
> `site/index.html` + `site/library.html` strips `.html`) · multi-file modules are read
> folder-wise. Claims that could not be reproduced were dropped, not kept.
> **Terminology (owner's rule): every file of the hub is a MODULE.**
> The hub = **37 modules** grouped into **7 sections**, served behind a 5-page shell.
> Every change to a module is proposed to the owner first — nothing moves without approval.

## The hub at a glance

**Shell (not modules):** `/` = `site/index.html` (home) · `/library` = portal system (category menu → 7 portals) · `/about` · `/faq` · themed 404. All five carry the Studyverse design system: theme engine (🎲/T remix, 🔓 lock, 🌙 light/dark twin), blobs, patterns, hard-shadow cards, toasts/confetti. State: **current design language — done 27 Oct 2026** (`8bcaefb3`→`e7a1a341`).

**Platform pages (not modules):** `/login` · `/signup` · `/account` · `/stats` · `/admin/keyhole` —
auth and stats chrome. `site/functions/resources/[[file]].js` gates every `/resources/*` path
behind a session (visitors bounce to `/login?next=…`), so no module URL answers unauthenticated.

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

- **File:** four-file module `site/resources/medcore-production-master-html-medcore-master-book/` — `index.html` 73 · `app.js` 171 · `data.js` 3 · `style.css` 92 (339 total) — live at `/resources/medcore-production-master-html-medcore-master-book` (extensionless: that is what the catalog link opens). The same-named `.html` file beside it, 1,447 lines, is the old single-file build, still served at the `.html` URL.
- **What it is:** Every system, one volume.
- **Inside:** 1 top-level heading; first ones: “Chapters, recalls &amp; the drills inside them.”. Data: `data.js` holds `BOOK` — 15 parts · 95 chapters, quizzes inline (`class="q"` × 2,271, option buttons × 11,330); 1 JSON.parse() load.
- **Interface:** live search/filter, expand/collapse-all, sticky top bar, persists state in localStorage (`medcore.book`), 929 inline SVGs — all inside the stored chapter HTML in `data.js`, 0 in the shell itself; no print stylesheet, no keyboard shortcuts. Kit hero cover (mega title, sticker, shapes, marquee of the 15 parts, stat cards, CTA row) + kit nav with engine chips; mobile drawer burger lives in the nav.
- **Mode system:** kit engine (`studyverse.js`, keys `mx-mode`/`mx-lock`) — no bespoke theme code since the 2026-10-29 conversion.
- **Design passes so far:** 2026-10-29 full kit conversion (tokens only, zero hex outside print `:root`; part identity = colour: 15 parts cycle `--c1..c4`, inherited by subcats/quizzes/tables/nav dots/cover chips, `ac-ink` mix keeps accent labels legible in every theme; kit `.opt` language on all 2,271 MCQs, 11,330 option buttons); crumb-back nav fix; counts corrected (footer 95 topics/2,271 MCQs); color-scheme meta.
- **⚠ Notes:** The rows above describe the **module**, which is what readers land on. The 1,447-line `.html` build is the older reference copy — 16 top-level headings, 640 `<details>` (95 chapter + 527 recall + 15 nav), 1,029 inline SVGs, print stylesheet, keyboard shortcuts, but no localStorage of its own.

### M02 · MCQ Architecture

- **File:** `site/resources/standalone-htmls-800-plus-mcq-architecture.html`, 1,367 lines — live at `/resources/standalone-htmls-800-plus-mcq-architecture`
- **What it is:** How the exam actually sets questions.
- **Inside:** 7 top-level headings; first ones: “MCQ Architecture”, “01. Evidence”, “02. Anatomy”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** 852 collapsible <details> blocks, sticky headers/bars, persists state in localStorage, print stylesheet, 1 inline SVGs.
- **Mode system:** none · rules:1 pref:3.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.
- **⚠ Notes:** Had IBM Plex Sans hiding in a --sans variable; fixed to Plus Jakarta Sans. @import converted to a single font link.

### M03 · Forge Cards

- **File:** `site/resources/standalone-htmls-forge-master.html`, 25,065 lines — live at `/resources/standalone-htmls-forge-master`
- **What it is:** 100 high-yield cards.
- **Inside:** 100 top-level headings; first ones: “ACS: STEMI & NSTEMI”, “Acute Kidney Injury (AKI)”, “Diabetic Ketoacidosis (DKA)”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** live search/filter (`#forgeSearch`), sticky headers/bars, keyboard shortcuts, persists state in localStorage, print stylesheet, 8 inline SVGs. No canvas and no timer — cards reveal on click.
- **Mode system:** dark · rules:6 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; 4-family interactive themes; has light block; color-scheme meta.

### M04 · Memory Master

- **File:** `site/resources/medcore-memory-master-core.html`, 4,297 lines — live at `/resources/medcore-memory-master-core`
- **What it is:** Recall-first core file.
- **Inside:** 2 top-level headings; first ones: “exam Memory Master — Core”, “THE SYSTEMS”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** persists state in localStorage, print stylesheet, 2 inline SVGs.
- **Mode system:** dark · rules:7 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; 4-family interactive themes; has light block; color-scheme meta.

### M05 · Logic-First Bank

- **File:** `site/resources/qbank-logic-first-high-yield-logic-first-high-yield-bank.html`, 858 lines — live at `/resources/qbank-logic-first-high-yield-logic-first-high-yield-bank`
- **What it is:** Clinical reasoning, high-yield only.
- **Inside:** 2 top-level headings; first ones: “Logic-First High-Yield Bank”, “Round complete”. Data: 1 JSON.parse() loads (localStorage/inline).
- **Interface:** live search/filter, timer/interval logic, persists state in localStorage, print stylesheet, 2 inline SVGs.
- **Mode system:** dark · rules:6 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; 4-family interactive themes; has light block; color-scheme meta.

---

## Section · Mocks & Drills

### M06 · MedCORE Question Bank

- **File:** four-file module `site/resources/medcore-question-bank/` — `index.html` 151 · `style.css` 318 · `app.js` 288 · `data.js` 2 (759 total) — live at `/resources/medcore-question-bank` and `/resources/medcore-question-bank/`
- **What it is:** Test series + main bank merged · six subject groups · 5,299 questions, every one carrying the full seven-layer breakdown.
- **Inside:** 3 top-level headings (h1+h2); first ones: “MedCORE Question Bank.”, “Choose a subject”, “Subject”. Data: `data.js` holds `SUBJECTS` (Medicine & Allied 2,255 · Surgery & Allied 1,122 · Eye & ENT 371 · Obstetrics & Gynaecology 442 · Paediatrics 448 · Basic Sciences 661) + `TIPS` as a JS literal; 1 JSON.parse() load (the `medcore.qb` state blob). The third heading is the practice title `#pName`, read before JS fills it.
- **Interface:** live search/filter, timer/interval logic with start/pause, sticky headers/bars, jump-to-question + first-unanswered/flagged, progress bar and right/wrong/flagged/not-yet tally, confidence marking (sure/guess/blind), review list, full-breakdown dialog, keyboard shortcuts, `#/s/<id>` hash routing; persists state in localStorage, print stylesheet, 0 inline SVGs (art is kit CSS shapes + sticker).
- **Mode system:** kit engine (`studyverse.js`, `data-sv-engine` chip, keys `mx-mode`/`mx-lock`) — no bespoke theme code since the kit conversion.
- **Design passes so far:** kit conversion (engine + feedback retired from `app.js`, hex sweep to kit tokens, `medcore_qb` → `medcore.qb` with one-time migration, absolute asset paths so the slashless catalog URL resolves, `medcore-sync` + `auth-nav` wired so progress actually syncs); wider breakdown dialog (980px desktop / 72vh mobile).
- **⚠ Notes:** **Six subject groups, full stop** — recalled past papers do NOT belong here (owner ruling, 29 Oct 2026: `2831c1e` had appended 41 duplicate paper subjects → 47 cards, 177 with empty `layers`; reverted as `d94196f`). They live in the Past Paper practice hub. The old single-file `medcore-question-bank.html` no longer exists — every field above was rewritten from the module.

---

## Section · Past Papers & Answer Keys

### M07 · Past Paper Hub

- **File:** `site/resources/medcore-past-paper-hub.html`, 526 lines — live at `/resources/medcore-past-paper-hub`
- **What it is:** All recalled past papers.
- **Inside:** 7 top-level headings; first ones: “Past PaperIntelligence Hub”, “The raw material”, “Subject patterns”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** 2 collapsible <details> blocks, sticky headers/bars, persists state in localStorage, print stylesheet, 3 inline SVGs.
- **Mode system:** none · rules:1 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.
- **⚠ Notes:** Had a self-hosted @font-face (IBM Plex Mono base64) — removed during de-Plexing.

### M08 · June 2025

- **File:** `site/resources/standalone-htmls-june-2025-answer-key.html`, 522 lines — live at `/resources/standalone-htmls-june-2025-answer-key`
- **What it is:** Verified key + distractor analysis.
- **Inside:** 0 top-level headings; first ones: flat document. Data: embedded `var DATA` bank · ~140 question entries.
- **Interface:** answer-hiding quiz engine (reveal on click), sticky headers/bars, keyboard shortcuts, persists state in localStorage, print stylesheet, 3 inline SVGs.
- **Mode system:** none · rules:1 pref:2.
- **Design passes so far:** fonts:2026 trio; mlx-eq MCQ equalizer; mlx-live toggle; has light block; color-scheme meta.

### M09 · June 2024

- **File:** `site/resources/standalone-htmls-june-2024-answer-key.html`, 525 lines — live at `/resources/standalone-htmls-june-2024-answer-key`
- **What it is:** Self-scoring.
- **Inside:** 0 top-level headings; first ones: flat document. Data: embedded `var DATA` bank · ~147 question entries.
- **Interface:** answer-hiding quiz engine (reveal on click), sticky headers/bars, keyboard shortcuts, persists state in localStorage, print stylesheet, 3 inline SVGs.
- **Mode system:** none · rules:1 pref:2.
- **Design passes so far:** fonts:2026 trio; mlx-eq MCQ equalizer; mlx-live toggle; has light block; color-scheme meta.

### M10 · December 2024

- **File:** `site/resources/standalone-htmls-dec-2024-answer-key.html`, 525 lines — live at `/resources/standalone-htmls-dec-2024-answer-key`
- **What it is:** Self-scoring.
- **Inside:** 0 top-level headings; first ones: flat document. Data: embedded `var DATA` bank · ~171 question entries.
- **Interface:** answer-hiding quiz engine (reveal on click), sticky headers/bars, keyboard shortcuts, persists state in localStorage, print stylesheet, 3 inline SVGs.
- **Mode system:** none · rules:1 pref:2.
- **Design passes so far:** fonts:2026 trio; mlx-eq MCQ equalizer; mlx-live toggle; has light block; color-scheme meta.

### M11 · December 2025

- **File:** `site/resources/standalone-htmls-dec-2025-answer-key.html`, 525 lines — live at `/resources/standalone-htmls-dec-2025-answer-key`
- **What it is:** Corrected key.
- **Inside:** 0 top-level headings; first ones: flat document. Data: embedded `var DATA` bank · ~187 question entries.
- **Interface:** answer-hiding quiz engine (reveal on click), sticky headers/bars, keyboard shortcuts, persists state in localStorage, print stylesheet, 3 inline SVGs.
- **Mode system:** none · rules:1 pref:2.
- **Design passes so far:** fonts:2026 trio; mlx-eq MCQ equalizer; mlx-live toggle; has light block; color-scheme meta.

### M12 · May 2026

- **File:** `site/resources/standalone-htmls-may-2026-mcq-breakdown.html`, 522 lines — live at `/resources/standalone-htmls-may-2026-mcq-breakdown`
- **What it is:** Topic breakdown.
- **Inside:** 0 top-level headings; first ones: flat document. Data: embedded `var DATA` bank · ~177 question entries.
- **Interface:** answer-hiding quiz engine (reveal on click), sticky headers/bars, keyboard shortcuts, persists state in localStorage, print stylesheet, 3 inline SVGs.
- **Mode system:** none · rules:1 pref:2.
- **Design passes so far:** fonts:2026 trio; mlx-eq MCQ equalizer; mlx-live toggle; has light block; color-scheme meta.

### M13 · Prediction Exam 2026

- **File:** `site/resources/medcore-prediction-exam.html`, 523 lines — live at `/resources/medcore-prediction-exam`
- **What it is:** Full sitting · 14 subjects.
- **Inside:** 0 top-level headings; first ones: flat document. Data: embedded `var DATA` bank · ~200 question entries.
- **Interface:** answer-hiding quiz engine (reveal on click), sticky headers/bars, keyboard shortcuts, persists state in localStorage, print stylesheet, 3 inline SVGs.
- **Mode system:** none · rules:1 pref:2.
- **Design passes so far:** fonts:2026 trio; mlx-eq MCQ equalizer; mlx-live toggle; has light block; color-scheme meta.
- **⚠ Notes:** MCQ length-equalizer applied (mlx-eq) — options clamp to 2 lines pre-reveal.

### M14 · Prediction Exam · Key

- **File:** `site/resources/medcore-prediction-exam-answer-key.html`, 500 lines — live at `/resources/medcore-prediction-exam-answer-key`
- **What it is:** Same paper, full key.
- **Inside:** 0 top-level headings; first ones: flat document. Data: embedded `var DATA` bank · ~200 question entries.
- **Interface:** answer-hiding quiz engine (reveal on click), sticky headers/bars, keyboard shortcuts, persists state in localStorage, print stylesheet, 0 inline SVGs.
- **Mode system:** none · rules:1 pref:2.
- **Design passes so far:** fonts:2026 trio; mlx-eq MCQ equalizer; mlx-live toggle; has light block; color-scheme meta.
- **⚠ Notes:** Same 200 questions as the exam (duplicate set) — MCQ equalizer applied.

---

## Section · Exam Intelligence & Strategy

### M15 · 2026 Prediction Intel

- **File:** `site/resources/medcore-prediction-intelligence-report.html`, 194 lines — live at `/resources/medcore-prediction-intelligence-report`
- **What it is:** What the paper will test.
- **Inside:** 8 top-level headings; first ones: “INTELLIGENCE REPORT”, “Executive Summary”, “Section 1 — Predicted Weightage vs Recalled Pattern”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** 7 collapsible <details> blocks, sticky headers/bars, persists state in localStorage, print stylesheet, 1 inline SVGs.
- **Mode system:** none · rules:1 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.

### M16 · Full Picture Report

- **File:** `site/resources/medcore-system-full-picture-report.html`, 1,214 lines — live at `/resources/medcore-system-full-picture-report`
- **What it is:** Whole-system map · one view of everything.
- **Inside:** 11 top-level headings; first ones: “exam System — The Full Picture”, “Contents”, “The Evidence Base — every source, counted”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** sticky headers/bars, keyboard shortcuts, persists state in localStorage, print stylesheet, 15 inline SVGs.
- **Mode system:** none · rules:1 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.

### M17 · Pattern Analysis

- **File:** `site/resources/medcore-pattern-analysis.html`, 231 lines — live at `/resources/medcore-pattern-analysis`
- **What it is:** Four papers decoded · recurring patterns.
- **Inside:** 4 top-level headings; first ones: “Pattern Analysis — 4 Papers”, “Subject Distribution per Paper”, “Cross-Paper Comparison (MCQs per Subject)”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** persists state in localStorage, print stylesheet, 0 inline SVGs.
- **Mode system:** none · rules:1 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.
- **⚠ Notes:** CSS brace imbalance is PRE-EXISTING (was already off-by-one at the auth-era commit) — fix when this module is worked.
- **⚠ Pre-existing defect:** unbalanced CSS braces (known since the auth-era commit; harmless to browsers, fix in this module's work pass)

### M18 · High-Yield Topic Pool

- **File:** `site/resources/standalone-htmls-prediction-sheet-1-high-yield-topic-pool.html`, 820 lines — live at `/resources/standalone-htmls-prediction-sheet-1-high-yield-topic-pool`
- **What it is:** Where to spend your time.
- **Inside:** 1 top-level headings; first ones: “Prediction Sheet 1 &mdash; High-Yield Topic Pool”. Data: 2 JSON.parse() loads (localStorage/inline).
- **Interface:** live search/filter, sticky headers/bars, persists state in localStorage, print stylesheet, 19 inline SVGs (the charts are SVG, not canvas).
- **Mode system:** none · rules:1 pref:2.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.

### M19 · 60-Day Battle Plan

- **File:** `site/resources/standalone-htmls-60-day-battle-plan.html`, 1,025 lines — live at `/resources/standalone-htmls-60-day-battle-plan`
- **What it is:** Day-by-day route to exam day.
- **Inside:** 8 top-level headings; first ones: “Sixty days toown the exam.”, “Know the Machine”, “The Daily Doctrine”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** timer/interval logic, sticky headers/bars, persists state in localStorage, print stylesheet, 0 inline SVGs.
- **Mode system:** none · rules:1 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.

### M20 · Battle LMS

- **File:** `site/resources/planner-medcore-battle-lms.html`, 1,079 lines — live at `/resources/planner-medcore-battle-lms`
- **What it is:** Command centre · schedule, drills, tracking.
- **Inside:** 4 top-level headings; first ones: “Block 01 in the arena — CVS + Respiratory.”, “Error Log”, “Question Review”. Data: 1 JSON.parse() loads (localStorage/inline).
- **Interface:** timer/interval logic, sticky headers/bars, persists state in localStorage, print stylesheet, 0 inline SVGs.
- **Mode system:** none · rules:5 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.

---

## Section · Quick Reference

### M21 · Cheat Card

- **File:** `site/resources/medcore-cheat-card.html`, 264 lines — live at `/resources/medcore-cheat-card`
- **What it is:** One-page recall sheet.
- **Inside:** 1 top-level headings; first ones: “Cheat Card”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** persists state in localStorage, print stylesheet, 0 inline SVGs.
- **Mode system:** none · rules:1 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.

### M22 · Magic Table

- **File:** `site/resources/standalone-htmls-magic-table-medical-licensing.html`, 1,690 lines — live at `/resources/standalone-htmls-magic-table-medical-licensing`
- **What it is:** Licensing thresholds · memorise once.
- **Inside:** 41 top-level headings; first ones: “Magic Table”, “Endocrine — Diabetes Mellitus”, “Thyroid &amp; Parathyroid”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** live search/filter, sticky headers/bars, keyboard shortcuts, persists state in localStorage, print stylesheet, 212 inline SVGs.
- **Mode system:** none · rules:1 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.

### M23 · Medical Quick Ref

- **File:** `site/resources/standalone-htmls-medical-quick-reference-combined.html`, 115 lines — live at `/resources/standalone-htmls-medical-quick-reference-combined`
- **What it is:** Numerics and ranges.
- **Inside:** 0 top-level headings; first ones: flat document. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** persists state in localStorage, print stylesheet, 0 inline SVGs.
- **Mode system:** none · rules:0 pref:1.
- **Design passes so far:** mlx-live toggle; color-scheme meta.
- **⚠ Notes:** Single-theme file (dark navy stub): theme toggle intentionally hidden (mlx-notoggle).

### M24 · Symptom Clusters

- **File:** `site/resources/standalone-htmls-disease-symptom-clusters.html`, 579 lines — live at `/resources/standalone-htmls-disease-symptom-clusters`
- **What it is:** Symptom to differential, grouped.
- **Inside:** 1 top-level headings; first ones: “Disease Symptom Clusters”. Data: 2 JSON.parse() loads (localStorage/inline).
- **Interface:** sticky headers/bars, persists state in localStorage, print stylesheet, 16 inline SVGs (charts are SVG, not canvas).
- **Mode system:** none · rules:1 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.

### M25 · Last Day Sheet

- **File:** `site/resources/side-projects-last-day-revision-sheet.html`, 750 lines — live at `/resources/side-projects-last-day-revision-sheet`
- **What it is:** Final night · highest-yield only.
- **Inside:** 17 top-level headings; first ones: “LAST DAY REVISION SHEET”, “EXAM-DAY STRATEGY”, “CONTENTS”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** persists state in localStorage, print stylesheet, 0 inline SVGs.
- **Mode system:** none · rules:0 pref:1.
- **Design passes so far:** mlx-live toggle; color-scheme meta.
- **⚠ Notes:** Single-theme paper sheet: theme toggle intentionally hidden (mlx-notoggle).

### M26 · Repeat Offenders

- **File:** `site/resources/nre-recall-sheets-repeat-offenders.html`, 873 lines — live at `/resources/nre-recall-sheets-repeat-offenders`
- **What it is:** The NRE recall vault — questions that keep coming back.
- **Inside:** 7 top-level headings; first ones: “The questions that never leave the exam hall.”, “Few repeated questions — all the time”, “Surgery — best initial & gold standard tests”. Data: pure markup + CSS content (no embedded data bank).
- **Interface:** live search/filter, 3D flip-card interaction, sticky headers/bars, keyboard shortcuts, persists state in localStorage, print stylesheet, 0 inline SVGs.
- **Mode system:** none · rules:1 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-live toggle; has light block; color-scheme meta.
- **⚠ Notes:** Newest module (added Oct 2026); title uses the recall-vault naming.

---

## Section · Frameworks & Interactive

### M27 · Case Ladder

- **File:** `site/resources/standalone-htmls-case-ladder-interactive.html`, 465 lines — live at `/resources/standalone-htmls-case-ladder-interactive`
- **What it is:** Interactive clinical case practice.
- **Inside:** 1 top-level heading, built at runtime; first ones: none static — the only `<h2>` is emitted by the topic template, so on screen it reads as the active topic title (the old static “Clinical Case-Ladder MCQ Add-On” title is no longer in the file). Data: 2 JSON.parse() loads (localStorage/inline).
- **Interface:** live search/filter, sticky headers/bars, persists state in localStorage, 7 inline SVGs. No print stylesheet.
- **Mode system:** none · rules:1 pref:1.
- **Design passes so far:** fonts:2026 trio; mlx-eq MCQ equalizer; mlx-live toggle; has light block; color-scheme meta.

---

## Section · MedCORE Systems

### M28 · Cardiology

- **File:** `site/resources/medcore-systems-cardiology-cardiology-medcore.html`, 3,068 lines — live at `/resources/medcore-systems-cardiology-cardiology-medcore`
- **What it is:** Complete system book.
- **Inside:** 19 top-level headings; first ones: “Cardiology”, “Contents”, “Acute Coronary Syndrome (ACS)”. Data: pure markup + CSS — one `<style>` block and a static body, no scripts at all (content-frozen original).
- **Interface:** print stylesheet and an in-page contents list. Static page: zero scripts, so no search, no timer, no keyboard shortcuts, no saved state, no canvas and 0 inline SVGs.
- **Mode system:** none — fixed light page (`body` background `#e8eaee`), 0 `prefers-color-scheme`, 0 `data-mode`, no `color-scheme` meta, no toggle.
- **Design passes so far:** none on the kit — content-frozen NRE Prep original, restored `b971aa4` after a restyle attempt lost roughly half the content. Any restyle now runs through `python3 tools/systems-kit.py` (AGENTS.md · Systems templates), which refuses body edits and revalidates all ten atomically.
- **⚠ Notes:** Model book of the systems family (House Rules §3) — and since all ten are now the same content-frozen original, M28's build IS the template for the other nine.

### M29 · Neurology

- **File:** `site/resources/medcore-systems-neurology-neurology-medcore.html`, 4,371 lines — live at `/resources/medcore-systems-neurology-neurology-medcore`
- **What it is:** Complete system book.
- **Inside:** 16 top-level headings; first ones: “Neurology”, “Contents”, “Neurological Examination Basics”. Data: pure markup + CSS — one `<style>` block and a static body, no scripts at all (content-frozen original).
- **Interface:** print stylesheet and an in-page contents list. Static page: zero scripts, so no search, no timer, no keyboard shortcuts, no saved state, no canvas and 0 inline SVGs.
- **Mode system:** none — fixed light page (`body` background `#e8eaee`), 0 `prefers-color-scheme`, 0 `data-mode`, no `color-scheme` meta, no toggle.
- **Design passes so far:** none on the kit — content-frozen NRE Prep original, restored `b971aa4` after a restyle attempt lost roughly half the content. Any restyle now runs through `python3 tools/systems-kit.py` (AGENTS.md · Systems templates), which refuses body edits and revalidates all ten atomically.

### M30 · Respiratory

- **File:** `site/resources/medcore-systems-respiratory-respiratory-medcore.html`, 4,013 lines — live at `/resources/medcore-systems-respiratory-respiratory-medcore`
- **What it is:** Complete system book.
- **Inside:** 18 top-level headings; first ones: “Respiratory”, “Contents”, “Asthma — Diagnosis, Severity, Acute Exacerbation, and Step Therapy”. Data: pure markup + CSS — one `<style>` block and a static body, no scripts at all (content-frozen original).
- **Interface:** print stylesheet and an in-page contents list. Static page: zero scripts, so no search, no timer, no keyboard shortcuts, no saved state, no canvas and 0 inline SVGs.
- **Mode system:** none — fixed light page (`body` background `#e8eaee`), 0 `prefers-color-scheme`, 0 `data-mode`, no `color-scheme` meta, no toggle.
- **Design passes so far:** none on the kit — content-frozen NRE Prep original, restored `b971aa4` after a restyle attempt lost roughly half the content. Any restyle now runs through `python3 tools/systems-kit.py` (AGENTS.md · Systems templates), which refuses body edits and revalidates all ten atomically.

### M31 · Dermatology

- **File:** `site/resources/medcore-systems-dermatology-dermatology-medcore.html`, 2,797 lines — live at `/resources/medcore-systems-dermatology-dermatology-medcore`
- **What it is:** Complete system book.
- **Inside:** 18 top-level headings; first ones: “Dermatology”, “Contents”, “SKIN ANATOMY &amp; TERMINOLOGY”. Data: pure markup + CSS — one `<style>` block and a static body, no scripts at all (content-frozen original).
- **Interface:** print stylesheet and an in-page contents list. Static page: zero scripts, so no search, no timer, no keyboard shortcuts, no saved state, no canvas and 0 inline SVGs.
- **Mode system:** none — fixed light page (`body` background `#e8eaee`), 0 `prefers-color-scheme`, 0 `data-mode`, no `color-scheme` meta, no toggle.
- **Design passes so far:** none on the kit — content-frozen NRE Prep original, restored `b971aa4` after a restyle attempt lost roughly half the content. Any restyle now runs through `python3 tools/systems-kit.py` (AGENTS.md · Systems templates), which refuses body edits and revalidates all ten atomically.

### M32 · Urology

- **File:** `site/resources/medcore-systems-urology-urology-medcore.html`, 4,484 lines — live at `/resources/medcore-systems-urology-urology-medcore`
- **What it is:** Complete system book.
- **Inside:** 18 top-level headings; first ones: “Urology”, “Contents”, “Testicular Torsion vs Epididymitis”. Data: pure markup + CSS — one `<style>` block and a static body, no scripts at all (content-frozen original).
- **Interface:** print stylesheet and an in-page contents list. Static page: zero scripts, so no search, no timer, no keyboard shortcuts, no saved state, no canvas and 0 inline SVGs.
- **Mode system:** none — fixed light page (`body` background `#e8eaee`), 0 `prefers-color-scheme`, 0 `data-mode`, no `color-scheme` meta, no toggle.
- **Design passes so far:** none on the kit — content-frozen NRE Prep original, restored `b971aa4` after a restyle attempt lost roughly half the content. Any restyle now runs through `python3 tools/systems-kit.py` (AGENTS.md · Systems templates), which refuses body edits and revalidates all ten atomically.

### M33 · Gynaecology

- **File:** `site/resources/medcore-systems-gynecology-gynecology-medcore.html`, 3,880 lines — live at `/resources/medcore-systems-gynecology-gynecology-medcore`
- **What it is:** Complete system book.
- **Inside:** 29 top-level headings; first ones: “Gynecology”, “Contents”, “Gynecology — Comprehensive Review”. Data: pure markup + CSS — one `<style>` block and a static body, no scripts at all (content-frozen original).
- **Interface:** print stylesheet and an in-page contents list. Static page: zero scripts, so no search, no timer, no keyboard shortcuts, no saved state, no canvas and 0 inline SVGs.
- **Mode system:** none — fixed light page (`body` background `#e8eaee`), 0 `prefers-color-scheme`, 0 `data-mode`, no `color-scheme` meta, no toggle.
- **Design passes so far:** none on the kit — content-frozen NRE Prep original, restored `b971aa4` after a restyle attempt lost roughly half the content. Any restyle now runs through `python3 tools/systems-kit.py` (AGENTS.md · Systems templates), which refuses body edits and revalidates all ten atomically.

### M34 · Obstetrics

- **File:** `site/resources/medcore-systems-obstetrics-obstetrics-medcore.html`, 4,495 lines — live at `/resources/medcore-systems-obstetrics-obstetrics-medcore`
- **What it is:** Complete system book.
- **Inside:** 9 top-level headings; first ones: “Obstetrics”, “Contents”, “Basics of Pregnancy”. Data: pure markup + CSS — one `<style>` block and a static body, no scripts at all (content-frozen original).
- **Interface:** print stylesheet and an in-page contents list. Static page: zero scripts, so no search, no timer, no keyboard shortcuts, no saved state, no canvas and 0 inline SVGs.
- **Mode system:** none — fixed light page (`body` background `#e8eaee`), 0 `prefers-color-scheme`, 0 `data-mode`, no `color-scheme` meta, no toggle.
- **Design passes so far:** none on the kit — content-frozen NRE Prep original, restored `b971aa4` after a restyle attempt lost roughly half the content. Any restyle now runs through `python3 tools/systems-kit.py` (AGENTS.md · Systems templates), which refuses body edits and revalidates all ten atomically.

### M35 · Paediatrics

- **File:** `site/resources/medcore-systems-pediatrics-pediatrics-medcore.html`, 3,822 lines — live at `/resources/medcore-systems-pediatrics-pediatrics-medcore`
- **What it is:** Complete system book.
- **Inside:** 17 top-level headings; first ones: “Pediatrics”, “Contents”, “Neonatology”. Data: pure markup + CSS — one `<style>` block and a static body, no scripts at all (content-frozen original).
- **Interface:** print stylesheet and an in-page contents list. Static page: zero scripts, so no search, no timer, no keyboard shortcuts, no saved state, no canvas and 0 inline SVGs.
- **Mode system:** none — fixed light page (`body` background `#e8eaee`), 0 `prefers-color-scheme`, 0 `data-mode`, no `color-scheme` meta, no toggle.
- **Design passes so far:** none on the kit — content-frozen NRE Prep original, restored `b971aa4` after a restyle attempt lost roughly half the content. Any restyle now runs through `python3 tools/systems-kit.py` (AGENTS.md · Systems templates), which refuses body edits and revalidates all ten atomically.

### M36 · ENT

- **File:** `site/resources/medcore-systems-ent-ent-medcore.html`, 2,814 lines — live at `/resources/medcore-systems-ent-ent-medcore`
- **What it is:** Complete system book.
- **Inside:** 13 top-level headings; first ones: “Ear, Nose & Throat”, “Contents”, “ACUTE EPIGLOTTITIS”. Data: pure markup + CSS — one `<style>` block and a static body, no scripts at all (content-frozen original).
- **Interface:** print stylesheet and an in-page contents list. Static page: zero scripts, so no search, no timer, no keyboard shortcuts, no saved state, no canvas and 0 inline SVGs.
- **Mode system:** none — fixed light page (`body` background `#e8eaee`), 0 `prefers-color-scheme`, 0 `data-mode`, no `color-scheme` meta, no toggle.
- **Design passes so far:** none on the kit — content-frozen NRE Prep original, restored `b971aa4` after a restyle attempt lost roughly half the content. Any restyle now runs through `python3 tools/systems-kit.py` (AGENTS.md · Systems templates), which refuses body edits and revalidates all ten atomically.

### M37 · Ophthalmology

- **File:** `site/resources/medcore-systems-ophthalmology-ophthalmology-medcore.html`, 2,949 lines — live at `/resources/medcore-systems-ophthalmology-ophthalmology-medcore`
- **What it is:** Complete system book.
- **Inside:** 17 top-level headings; first ones: “Ophthalmology”, “Contents”, “Acute Angle-Closure Glaucoma”. Data: pure markup + CSS — one `<style>` block and a static body, no scripts at all (content-frozen original).
- **Interface:** print stylesheet and an in-page contents list. Static page: zero scripts, so no search, no timer, no keyboard shortcuts, no saved state, no canvas and 0 inline SVGs.
- **Mode system:** none — fixed light page (`body` background `#e8eaee`), 0 `prefers-color-scheme`, 0 `data-mode`, no `color-scheme` meta, no toggle.
- **Design passes so far:** none on the kit — content-frozen NRE Prep original, restored `b971aa4` after a restyle attempt lost roughly half the content. Any restyle now runs through `python3 tools/systems-kit.py` (AGENTS.md · Systems templates), which refuses body edits and revalidates all ten atomically.

---

## On disk, not catalogued (audited 29 Oct 2026)

Present in `site/resources/` but absent from `hub-data/catalog.json`, so the library never shows
them. Listed so a future audit doesn't read them as lost modules — and so nobody mistakes the
twins for each other.

- **`medcore-past-paper-hub-practice/`** — module-shaped folder (`index.html` 155 · `app.js` 227 ·
  `data.js` 5): realtime practice over the five recalled papers (68 subject groups · 822 questions).
  Its only inbound link is `medcore-prediction-exam-practice.html`. **This — not M06 — is where
  recalled past papers are practised.**
- **`medcore-prediction-exam-practice.html`**, 148 lines — realtime practice hub, no inbound links.
- **`medcore-prediction-exam-restyled.html`**, 487 lines — the “Paper view” target of the page above.
- **`medcore-recall-sheets-repeat-offenders.html`**, 813 lines — unreferenced twin of **M26**:
  same `<title>` (“Repeat Offenders — NRE recall vault”), different bytes (M26's `nre-…` file is
  873 lines and is the one `index.html`, `library.html` and the catalog link). Both arrived in merge
  `51c2b29`. Pick one before editing either.
- **`standalone-htmls-medical-quick-reference-dark.html` / `-light.html`**, 1,058 lines each — the two
  tone variants **M23**'s combined page switches between (`SRC` map, line 60).

The **M01** and **M06** folders are *not* in this list: those are catalogued modules. The catalog
keeps their `.html` name and the shell's `href()` strips the extension, so the link lands on the
folder's `index.html` through the slashless URL.

## Rules of engagement for module work

1. One module at a time; the owner approves the approach before edits, the result before deploy.
2. Any module edit must keep: zero file counts, zero board names (PMDC/NRE) in copy,
   zero emoji in *old* surfaces unless the owner has granted it (emoji ARE allowed on the Studyverse shell).
3. Verify before reporting: `node --check` on every inline script, brace balance, content-invariance
   against git (style regions excluded), then deploy + 42-path byte parity.
4. The shell's design language (Studyverse engine + dark twin) is the target every module will adopt
   in the module phase — pending owner's sequencing.
