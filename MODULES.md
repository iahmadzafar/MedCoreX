# MODULES — MedCoreX hub reference

> **Reconciled 23 Nov 2026 against the files on disk** at commit `d2d3cba`.
> The earlier audits (27–29 Oct 2026) described a larger library. Files deleted
> since then are recorded under **Retired modules** so their IDs never dangle —
> they are not missing, and they are not to be recreated from the old rows.
>
> Terminology (owner's rule): **every file of the hub is a MODULE.** Module IDs
> are permanent labels and are never reused. M01 is a deliberate gap.
>
> **Sources of truth:** the live shelf is `site/assets/catalog.js` (both
> `index.html` and `library.html` read it); the catalog mirrors
> `hub-data/catalog.json` and `site/hub-data/catalog.json` (byte-identical).
> Question-bank counts come from `tools/web-bank-manifest.json` and
> `hub-data/verify_report.md`, not from this document's older revisions.

## The hub at a glance

**Shell (not modules):** `/` = `site/index.html` (home) · `/library` = portal
system (category menu → 7 portals) · `/about` · `/faq` · themed 404. All carry
the Studyverse design system.

**Platform pages (not modules):** `/login` · `/signup` · `/account` · `/stats`
· `/admin/keyhole` — auth and stats chrome. Every `/resources/*` path is gated
by `site/functions/resources/[[file]].js`, which bounces visitors to
`/login?next=…`; no module URL answers unauthenticated.

**26 catalogued modules in 7 sections:**

| Section | Modules | Count |
| --- | --- | --- |
| Core Books | M02, M03, M04, M05 | 4 |
| Mocks & Drills | M06 | 1 |
| Past Papers & Answer Keys | M08, M11, Dec 2025 Recalled, M12 | 4 |
| Exam Intelligence & Strategy | M17, M18 | 2 |
| Quick Reference | M21, M22, M24, M26 | 4 |
| Frameworks & Interactive | M27 | 1 |
| MedCORE Systems | M28–M37 | 10 |

---

## Core Books

- **M02 · MCQ Architecture** — `site/resources/standalone-htmls-800-plus-mcq-architecture.html` · `/resources/standalone-htmls-800-plus-mcq-architecture`. How the exam sets questions; collapsible breakdown blocks, print stylesheet.
- **M03 · Forge Cards** — `site/resources/standalone-htmls-forge-master.html` · `/resources/standalone-htmls-forge-master`. 100 high-yield cards; live search/filter, keyboard shortcuts, reveal on click.
- **M04 · Memory Master** — `site/resources/medcore-memory-master-core.html` · `/resources/medcore-memory-master-core`. Recall-first core file; localStorage state, print stylesheet.
- **M05 · Logic-First Bank** — `site/resources/qbank-logic-first-high-yield-logic-first-high-yield-bank.html` · `/resources/qbank-logic-first-high-yield-logic-first-high-yield-bank`. Clinical reasoning, high-yield only; search, timer, localStorage state.

## Mocks & Drills

- **M06 · MedCORE Question Bank** — `site/resources/medcore-question-bank/` (`index.html` 176 · `style.css` 354 · `app.js` 321 · `data.js` 10 lines / 6.5 MB = 861 lines) · `/resources/medcore-question-bank`.
  - **6,689 unique questions · 18 subjects × 16 systems · 6 groups.** Groups: Medicine & Allied 2,745 · Surgery & Allied 871 · Eye & ENT 462 · Obstetrics & Gynaecology 559 · Paediatrics 466 · Basic Sciences 1,586.
  - **Content store:** `data.js` defines `SUBJECTS`, `GROUPS`, `TIPS` as a JS literal — not a SQL database. It is generated from `MedCORE-6716-MCQs.txt` by `tools/gen_web_bank.js` (6,716 parsed − 27 in-file duplicates = 6,689; 17 `kc:1` key-conflict flags; 375 questions with no breakdown).
  - **Interface:** group tabs → subject cards → practice, `#/s/<id>` hash routing, two-tap confidence lock (pick, then say how sure), **five-layer** breakdown (concept · hook · trap · explanation · why every other option dies), flags, jump-to-question, timer, review rail, right/wrong/flagged/not-yet tally, keyboard 1–5.
  - **State:** `localStorage['medcore.qb']`; legacy group-indexed `medcore_qb` records are archived, never reinterpreted. Synced to Cloudflare D1 `progress` by `site/medcore-sync.js` + `/api/progress`. Theme rides the Studyverse kit engine (`mx-mode`/`mx-lock`).
  - **Ruling:** six subject groups, full stop. Recalled papers are not appended here; they live in the self-scoring paper modules below.

## Past Papers & Answer Keys

- **M08 · June 2025** — `site/resources/standalone-htmls-june-2025-answer-key.html` · `/resources/standalone-htmls-june-2025-answer-key`. Verified key + distractor analysis; self-scoring paper engine.
- **M11 · December 2025** — `site/resources/standalone-htmls-dec-2025-answer-key.html` · `/resources/standalone-htmls-dec-2025-answer-key`. Corrected key; same self-scoring engine.
- **Dec 2025 Recalled** — `site/resources/standalone-htmls-dec-2025-recalled-key.html` · `/resources/standalone-htmls-dec-2025-recalled-key`. The paper as first recalled, kept alongside the corrected key. Unnumbered by design — it arrived after IDs were assigned.
- **M12 · May 2026** — `site/resources/standalone-htmls-may-2026-mcq-breakdown.html` · `/resources/standalone-htmls-may-2026-mcq-breakdown`. Topic breakdown; answer-hiding quiz engine.

## Exam Intelligence & Strategy

- **M17 · Pattern Analysis** — `site/resources/medcore-pattern-analysis.html` · `/resources/medcore-pattern-analysis`. Four papers decoded, recurring patterns. Pre-existing CSS brace imbalance is harmless but still open.
- **M18 · High-Yield Topic Pool** — `site/resources/standalone-htmls-prediction-sheet-1-high-yield-topic-pool.html` · `/resources/standalone-htmls-prediction-sheet-1-high-yield-topic-pool`. Where to spend your time; search and SVG charts.

## Quick Reference

- **M21 · Cheat Card** — `site/resources/medcore-cheat-card.html` · `/resources/medcore-cheat-card`. One-page recall sheet.
- **M22 · Magic Table** — `site/resources/standalone-htmls-magic-table-medical-licensing.html` · `/resources/standalone-htmls-magic-table-medical-licensing`. Licensing thresholds; search, keyboard shortcuts.
- **M24 · Symptom Clusters** — `site/resources/standalone-htmls-disease-symptom-clusters.html` · `/resources/standalone-htmls-disease-symptom-clusters`. Symptom → differential, grouped.
- **M26 · Repeat Offenders** — `site/resources/nre-recall-sheets-repeat-offenders.html` · `/resources/nre-recall-sheets-repeat-offenders`. Questions that keep coming back; search and flip-card interaction. The shelf description is plain language; only the filename keeps the old recall-vault name.

## Frameworks & Interactive

- **M27 · Case Ladder** — `site/resources/standalone-htmls-case-ladder-interactive.html` · `/resources/standalone-htmls-case-ladder-interactive`. Interactive clinical case practice; the only heading is built at runtime from the active topic.

## MedCORE Systems

Ten complete, content-frozen system books. All are static HTML (no scripts),
with a print stylesheet and an in-page contents list; a restyle runs only
through `python3 tools/systems-kit.py`, which refuses body edits and
revalidates all ten atomically.

| ID | Module | File |
| --- | --- | --- |
| M28 | Cardiology | `medcore-systems-cardiology-cardiology-medcore.html` |
| M29 | Neurology | `medcore-systems-neurology-neurology-medcore.html` |
| M30 | Respiratory | `medcore-systems-respiratory-respiratory-medcore.html` |
| M31 | Dermatology | `medcore-systems-dermatology-dermatology-medcore.html` |
| M32 | Urology | `medcore-systems-urology-urology-medcore.html` |
| M33 | Gynaecology | `medcore-systems-gynecology-gynecology-medcore.html` |
| M34 | Obstetrics | `medcore-systems-obstetrics-obstetrics-medcore.html` |
| M35 | Paediatrics | `medcore-systems-pediatrics-pediatrics-medcore.html` |
| M36 | ENT | `medcore-systems-ent-ent-medcore.html` |
| M37 | Ophthalmology | `medcore-systems-ophthalmology-ophthalmology-medcore.html` |

All ten live at `/resources/<filename without .html>`.

---

## Retired modules — IDs kept, no files on disk

These are **not** missing modules. Their files were deliberately removed; git
history keeps the content. Do not add shelf cards or links back to them.

| ID | Was | Retired by / why |
| --- | --- | --- |
| M01 | MedCORE Study Book | Removed 3 Nov 2026 at owner order. The number is never reused. |
| M07 | Past Paper Hub | `c0aef7c` — replaced by the one-true-bank rebuild. |
| M13 | Prediction Exam 2026 | `c0aef7c` — four-file module removed with the old sources. |
| M14 | Prediction Exam · Key | Merged into M13 in `b912130`, then retired with it. |
| M15 | 2026 Prediction Intel | `c0aef7c`. |
| M16 | Full Picture Report | `f90f0c3` — off-theme page wiped on owner order. |
| M19 | 60-Day Battle Plan | `f90f0c3` — same ruling. |
| M20 | Battle LMS | `f90f0c3` — same ruling. |
| M23 | Medical Quick Ref | `f90f0c3` — same ruling, with its light/dark variants. |
| M25 | Last Day Sheet | `4f60ab4` — last fully-hardcoded off-theme page. |

Also retired without M numbers (all in `c0aef7c` unless noted): `medcore-fresh-mock-bank/`, `grand-mock-five-layer-breakdowns/`, `medcore-past-paper-hub-practice/`, `medcore-prediction-exam-practice.html`, `medcore-prediction-exam-restyled.html`; plus `medcore-fresh-mock-bank` and past-paper practice entries that once appeared in the older catalogs.

## On disk, not catalogued

Present in `site/resources/` but absent from the shelf, so the library does not show them:

- **`medcore-recall-sheets-repeat-offenders.html`** — unreferenced twin of M26; same title, different bytes. M26's `nre-…` file is the one in the shelf and in all catalogs. Pick one before editing either.
- **`standalone-htmls-june-2024-answer-key.html`** and **`standalone-htmls-dec-2024-answer-key.html`** — self-scoring keys kept on disk and in git but deliberately left off the shelf.
- **`site/index.html.bak-0958` / `site/index.html.bak-1017`** — untracked local backups of an older eight-category layout (`Test Series & Mocks`, `MCQ Drills`, etc.). They are not modules and their references are stale by design.

## The data layer

- **Question content:** `site/resources/medcore-question-bank/data.js`, generated by `tools/gen_web_bank.js` from `MedCORE-6716-MCQs.txt`. The generator imports `merged-parser.js` and `taxonomy.js` from the absolute path `/Users/ahmdzafr/Projects/MedCORE-Study/lib` — a rebuild dependency outside this repo.
- **Derived records:** `hub-data/mcq_index.jsonl` (6,689 lines), `topic_map.json`, `mcq_banks.json`, `duplicates.json`, `key_resolutions.json`, `conflicts_report.md`, `verify_report.md/json`, and `tools/web-bank-manifest.json`. Mirrored to `site/hub-data/`.
- **Accounts / progress:** Cloudflare D1. `medcore-auth-db` (binding `medcore_db`: users, sessions, auth_fails, schema in `site/schema.sql`) and `medcore-db` (binding `medcore_progress_db`: `progress` table via `site/functions/api/progress.js`). `medcore-sync.js` treats the account as source of truth and localStorage as cache.
- **Portal data:** `catalog.json` at the repo root is the extractor's master index (`extract_content.py`); it is now synced with `hub-data/catalog.json`. The live site reads `site/assets/catalog.js`.

## Rules of engagement for module work

1. One module at a time; the owner approves the approach before edits, the result before deploy.
2. Any module edit must keep: zero file counts, zero board names (PMDC/NRE) in copy, zero emoji in *old* surfaces unless the owner has granted it (emoji ARE allowed on the Studyverse shell).
3. Verify before reporting: `node --check` on every inline script, brace balance, content-invariance against git (style regions excluded), then deploy + 42-path byte parity.
4. The shell's design language (Studyverse engine + dark twin) is the target every module will adopt — pending the owner's sequencing.
