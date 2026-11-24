# MedCoreX — AUDIT

Phase 1 of the rebuild brief. Written 23 Nov 2026.
Method: full read of the repo working copy at commit `d2d3cba` plus its uncommitted
working-tree changes, the governing docs (README, House Rules, DESIGN-CHOICES, MODULES,
AGENTS), every shell page, every study file's structure, the functions layer, the CI
workflow, and the live site (parity spot-checked). Counts were taken from the data
files themselves, not from documentation. Line counts are used throughout; file sizes
are deliberately omitted per house rule.

---

## 1 · Where everything is

| Thing | Where |
|---|---|
| Working copy (source of truth) | `CloudDocs/X/MedCoreX` — AGENTS.md names `CloudDocs/MedCoreX`, which no longer exists; the actual path is inside the `X` folder. Fix the AGENTS.md line when convenient. |
| GitHub | `github.com/iahmadzafar/MedCoreX`, main = `d2d3cba` |
| Duplicate checkout | `CloudDocs/MedCORE Live/repo` — same remote, older commit (7db1249, 18 Nov). Stale mirror; never edit there. |
| Live site | `https://medcorex.pages.dev` — Cloudflare Pages project `medcorex`, branch `main` |
| Deploy chain | push to main → GitHub Actions: `scriptproof` (every script parses) → `mcq_quality_check --strict` (bank has no critical defects) → `kitcheck` (every page wears the kit) → prune → wrangler deploy. **Auto-push has been disabled since 30 Oct — manual `git push` is the sync.** |
| Deploy parity | local `index.html` md5 matches live byte for byte. `/resources/*` answers 302 to sign-in for visitors (gate works). |

**Uncommitted working-tree changes (today's reconciliation, 23 Nov):**
`MODULES.md` rewritten (498 lines changed — now states 6,689 questions and records
retired modules), `catalog.json` synced (Past Paper Hub / Prediction Exam / Prediction
Intel removed, Repeat Offenders added), the ten `chrome/*.part` shell fragments
deleted, `site/verify.js` comment updated. These look intentional and complete but
are not committed. Decision needed: commit them, or leave them for the owner.

---

## 2 · Shell pages (10 files)

| File | Route | Title | Lines | Notes |
|---|---|---|---|---|
| `index.html` | `/` | MedCoreX — a private study library | 330 | Landing: hero, seven categories, three rules, 60-second sprint, bedside monitor. Graphite and Ember skin. |
| `library.html` | `/library` | Library — MedCoreX | 222 | Portal system: category picker → seven portals, driven by `catalog.js` |
| `about.html` | `/about` | About — MedCoreX | 122 | Static copy |
| `faq.html` | `/faq` | FAQ — MedCoreX | 140 | Answers live in a `FAQS` array, not in markup |
| `stats.html` | `/stats` | Your numbers — MedCoreX | 288 | By subject, confidence, readiness, where to focus |
| `login.html` | `/login` | Sign in — MedCoreX | 218 | Email + password |
| `signup.html` | `/signup` | Create account — MedCoreX | 208 | Email + password, optional username |
| `account.html` | `/account` | Account — MedCoreX | 232 | Username / password change; `_redirects` contains `/account 302 /` yet the page serves 200 — the rule is inert (see §7.7) |
| `404.html` | `/404` | 404 — MedCoreX | 109 | Themed |
| `admin/keyhole.html` | `/admin/keyhole` | Keyhole — MedCoreX | (14k) | Librarian console: account ledger |

Every title currently contains an em dash. The new brief bans dashes in titles.

## 3 · Study files (29 on disk: 26 catalogued, 3 off-shelf)

### Core Books (4)
| File | Lines | Shape |
|---|---|---|
| `standalone-htmls-800-plus-mcq-architecture.html` | 1,371 | Prose + 852 collapsible blocks; no data bank |
| `standalone-htmls-forge-master.html` | 23,876 | 100 cards (100 top-level headings); search, click-to-reveal |
| `medcore-memory-master-core.html` | 4,302 | Recall-first prose file |
| `qbank-logic-first-high-yield-logic-first-high-yield-bank.html` | 859 | Embedded JSON bank (one JSON.parse); search, timer |

### MedCORE Question Bank (1 folder module)
`medcore-question-bank/` — index.html 176, style.css 354, app.js 321, data.js 10
lines (one huge JS literal). **6,689 questions, 18 subjects in 6 groups.**
Groups: Medicine and Allied 2,745 · Surgery and Allied 871 · Eye and ENT 462 ·
Obstetrics and Gynaecology 559 · Paediatrics 466 · Basic Sciences 1,586.

### Past Papers (4 catalogued + 2 off-shelf)
| File | Questions | Shape |
|---|---|---|
| `standalone-htmls-june-2025-answer-key.html` | 140 | `DATA.qs[]` = {subj, label, stem, opts, c, rule, trap, inf} |
| `standalone-htmls-dec-2025-answer-key.html` | 200 | same + rlab |
| `standalone-htmls-dec-2025-recalled-key.html` | 187 | same as June 2025 |
| `standalone-htmls-may-2026-mcq-breakdown.html` | 200 | same + rlab |
| `standalone-htmls-june-2024-answer-key.html` (off-shelf) | 147 | same engine |
| `standalone-htmls-dec-2024-answer-key.html` (off-shelf) | 171 | same engine |

The 2024 keys are on disk, in git, deliberately absent from the shelf.

### Exam Intelligence (2)
| File | Lines | Shape |
|---|---|---|
| `medcore-pattern-analysis.html` | 162 | Prose + tables; known unbalanced CSS braces (pre-existing, harmless) |
| `standalone-htmls-prediction-sheet-1-high-yield-topic-pool.html` | 824 | Search + 19 SVG charts |

### Quick Reference (4 catalogued + 1 twin)
| File | Lines | Shape |
|---|---|---|
| `medcore-cheat-card.html` | 267 | One-page prose |
| `standalone-htmls-magic-table-medical-licensing.html` | 1,695 | 41 sections, pure markup, search |
| `standalone-htmls-disease-symptom-clusters.html` | 581 | Embedded JSON, SVG charts |
| `nre-recall-sheets-repeat-offenders.html` | 873 | Flip-cards, search. Title carries a board name (see §7.1) |
| `medcore-recall-sheets-repeat-offenders.html` (off-shelf twin) | 813 | Same title, different bytes; unreferenced |

### Frameworks (1)
`standalone-htmls-case-ladder-interactive.html` — 471 lines.
`caseData` JSON: 35 topics, each {title, accent, base_case, decision_flow[],
segments[], final_learning_rule}.

### MedCORE Systems (10)
All content-frozen: one style block, static body, zero scripts, print stylesheet.
Cardiology 3,445 · Neurology 4,748 · Respiratory 4,390 · Dermatology 3,174 ·
Urology 4,861 · Gynaecology 4,257 · Obstetrics 4,876 · Paediatrics 4,203 ·
ENT 3,191 · Ophthalmology 3,326 lines. Restyles in the old site only via
`tools/systems-kit.py`, which refuses body edits.

### Landing-page interactives (not shelf content)
Bedside monitor (5 simulated cases, canvas ECG), 10 Read-the-monitor scenarios
(`content/scenarios.json`), the 60-second sprint (`content/questions.json`, 5
questions). None of these appear in the new brief's content list.

## 4 · Data shapes

**Question bank (`data.js`)** — `SUBJECTS[18]` = {id, name, group, questions[]} ;
question = {id, sys, topic, q, options, answer, layers{concept, hook, trap, rule,
others}}.
- 6,689 questions; 6,689 unique public ids.
- Option counts: 4 options 4,483 · 5 options 2,144 · 3 options 50 · 2 options 12.
- Layers are **five** — concept, hook, trap, rule, others (an older MODULES row
  said "seven-layer"; doc drift — its own interface row said five). Fresh QC
  (24 Nov): 3,161 full · 2,076 concept-only · 1,452 partial · **375 with no
  breakdown at all**. Non-empty per layer: concept 5,429 · hook 3,180 ·
  trap 3,300 · rule 4,082 · others 2,708 — full five-layer exists on 47%.
- No `source`, no `difficulty`, no syllabus-line field anywhere (syllabus is
  out of scope entirely — owner ruling, §10.8).
- 17 key-conflict flags (`kc:1`), all adjudicated (conflicts report: 64 true
  cross-paper conflicts found, 6 resolved by decision, 0 remaining).

**Derived records (`hub-data/`, mirrored to `site/hub-data/`)**
- `mcq_index.jsonl` — 6,689 lines: {id, subject, system, topic, stem, opts, c,
  correct_letter}. No layers.
- `topic_map.json` — 5,055 entries {topic: "SUBJ|topic text", n}.
- `duplicates.json` (27 clusters), `key_resolutions.json` (2), `verify_report.md`,
  `conflicts_report.md`, `web-bank-manifest.json`.
- `qc_report.md` (regenerated 24 Nov from the committed bank): 7,404 issues —
  6,094 medium, 1,310 high: NO_OTHERS 3,981 · CONCEPT_ONLY 2,076 · DUP_STEM 1,160
  (exact duplicate stems; 5,529 unique) · BROKEN_MARKER 72 · BAD_OPTION_COUNT 62 ·
  CONTROL_CHAR 37 · ANSWER_LEAK 15 (answer visible in the question) · DUP_OPTIONS 1.
  Answer distribution skewed: A 26.9% · B 36.0% · C 20.0% · D 12.1% · E 5.0%.
  The 13 Nov report read 7,357 / 1,109 dups; the rise follows commit 7488871
  stripping stale A-number labels, which made previously-differentiated stems
  identical.

**Provenance of the QC debt (verified 24 Nov):** the bank is a merge — the source
txt declares "data.js banks (5,498) + all other imported sources (1,218)" and
"explanation/breakdown when available". The pre-rebuild curated bank
(`tools/data.js.preqc.bak`, 5,499 questions) had concept on 100% but hook/trap/rule
on 57% and others on 53% — full five-layer was never universal, despite an older
MODULES row claiming full breakdowns on every question. The canonical rebuild
(`c0aef7c`, 14 Nov) regenerated from the txt and superseded the 3 Nov surgical QC —
that pass had driven high/critical to 0 (27 short-option questions given a fourth
distractor, 10 answer leaks defused, wrong keys corrected), all in data.js. The
prose fixes lived downstream of the source, so after the rebuild the same defect
families are back (15 leaks, 62 short-option). Commit `7db1249` (18 Nov) then added
a regeneration guard — the generator now refuses any rewrite that would change
per-subject counts, IDs, order, stems, options or keys — plus a validated
stable-ID explanation-override mechanism (currently 2 entries: MEDCNS02, MEDCNS03).
The bank is frozen as canonical: it cannot shrink or re-key, and no old-source
restore is needed. The guard does not fill missing layers: the ~3,100 questions
with concept-only or no breakdown are a CONTENT-REVIEW item, not an import defect.

**Content**
- Sprint: 5 questions. Scenarios: 10. Case Ladder: 35 topics.

**Source of record**
`MedCORE-6716-MCQs.txt` (6,716 blocks → 6,689 after 27 in-file duplicates) lives
outside the repo in the iCloud MedCORE folder. The generator `tools/gen_web_bank.js`
imports `merged-parser.js` and `taxonomy.js` from an absolute path outside the repo
(`Projects/MedCORE-Study/lib`) — the new import pipeline must not depend on it.

## 5 · Auth and storage

**Auth (custom, Cloudflare Pages Functions + D1 `medcore-auth-db`)**
- Register: email + password (min 6), auto-assigned username (3–24, reserved-word
  list), optional wanted username. No email verification.
- Login: PBKDF2-SHA256, 100k iterations, per-user salt. Per-(email + IP)
  exponential backoff throttle via `auth_fails` (5 fails → doubling gap, cap 1 hour).
- Sessions: random 32-byte token, D1 `sessions` table, 90-day cookie
  `medcore_session` (HttpOnly, Secure, SameSite=Lax).
- Account PATCH: change username, change password (re-hashes, kills other sessions).
- Forgot password: not automated — the librarian resets it (standing agreement).
- Admin: no roles table. The keyhole — a single shared secret (`MX_KEYHOLE` env)
  sent in an `x-keyhole` header, constant-time compared. Keyhole endpoints: list
  accounts, reset password, remove (remove is banned against real accounts by owner
  law).

**Progress (D1 `medcore-db`, binding `medcore_progress_db`)**
- One JSON blob per user in `progress` table. PUT deep-merges: objects union,
  arrays union, numbers max (never regress), else incoming. 900KB payload cap.
- Client `medcore-sync.js`: wraps localStorage `setItem`; syncs keys prefixed
  `ts-prog-2`, `ts-session-2`, `medcore.`, `adversary.`; 1.5s debounce, push on
  pagehide/tab-hide, 15s backstop interval. Account is source of truth, localStorage
  is the cache.
- Existing users' browsers hold those prefixes right now — any migration must read
  them.

**Content gate**
`functions/resources/[[file]].js` intercepts every `/resources/*` request: signed
in → served with `private, no-store` + `X-Robots-Tag: noindex`; visitor → 302 to
`/login?next=…`. No resource file is reachable without a session.

**Security headers** (`_headers`): nosniff, strict referrer, SAMEORIGIN frames,
CSP with `script-src 'self' 'unsafe-inline'` (no external scripts; style-src still
allows fonts.googleapis.com although fonts are self-hosted).

## 6 · Design state (three documents, three stories)

1. **Live skin:** "Graphite and Ember" (Direction 2) — dark-first instrument,
   Inter Tight + JetBrains Mono self-hosted, kit tokens in
   `studyverse-tokens.css`, all 39 pages on the kit (kitcheck has no exemptions).
2. **House Rules.md (the design law, revised 25 Oct):** Bricolage Grotesque 800 /
   Plus Jakarta Sans / Geist Mono; semantic accents mint `#34D399` (correct),
   coral `#FF6EA9` (wrong), sunshine `#FFC53D`, violet `#8B7CFF` — **exactly the
   Candy Ink lead accents in the new brief.**
3. **DESIGN-CHOICES.md:** documents the older Studyverse remix system (Futura
   pools, random hue engines) — historical, superseded by 1 and 2.

**Conclusion:** the new brief's type trio and accent palette are the owner's own
standing design law (House Rules §1.1–1.2), not a departure. The live skin drifted
from the law; the rebuild brings it back, adds the light-first neutrals (paper,
surface, ink steps), tints, 2.5px borders and hard offset shadows, and makes light
mode the default. Phase 2 formalizes this as tokens; House Rules stays the law,
the brief's token file is its implementation.

## 7 · Inconsistencies and defects

1. **Board names (house-rule violations):** both Repeat Offenders files carry
   `<title>Repeat Offenders — NRE recall vault</title>` (tab-visible), and the
   `nre-…` filename appears in catalogs and URLs. Shell pages are clean.
   **Fixed 24 Nov:** the three `catalog.json` copies now use the shelf wording
   ("Questions that keep coming back in past papers") and are byte-identical
   again. Titles and filenames stay (the old site is frozen); the new build
   renames on import so no board name reaches any new text, title, URL or
   metadata.
2. **Title dashes:** every shell title uses an em dash; the brief bans dashes in
   titles.
3. **Footer text:** current = "© 2026 MedCoreX. All rights reserved." plus a
   personal-use license note; brief = exactly "© 2026 MedCORE. All rights
   reserved." Confirm which wording ships (brief currently wins).
4. **Uncommitted changes** (§1) — reconcile before phase 3 so the audit's baseline
   is a clean tree.
5. **MODULES.md drift:** the GitHub version still says 5,299 questions and lists
   retirable modules as live; the working copy fixes this to 6,689 and records
   retirements. Commit the working copy.
6. **Catalog vs disk:** reconciled — 26 catalogued + 3 off-shelf (twin, 2024 keys)
   = 29 files. Catalog question counts (140/200/187/200) verified correct against
   the data; the old MODULES rows (141/201/188/~177) were wrong.
7. **`_redirects`:** `/account 302 /` exists but `/account` serves 200 — inert
   rule. Remove or implement, don't leave it ambiguous.
8. **Sitemap:** lists only 5 URLs (/, library, about, faq, stats). Fine for a
   private library; login/signup/account correctly absent.
9. **Bank QC debt** (§4): 1,109 duplicate stems, 375 questions with no
   explanation layers, 15 answer leaks, 62 questions with fewer than 4 options,
   37 control characters, 72 broken markers, 1 duplicate-option question, answer
   position skew (B over-represented). All pre-existing; the import must either
   repair or flag these — see question 9.
10. **Generator dependency outside the repo** (§4) — new pipeline parses from
    `data.js` / `mcq_index.jsonl` (or the source txt directly).
11. **No tests, no axe, no Lighthouse CI, no error tracking** in the current repo —
    the brief adds all of them.
12. **Landing interactives** (monitor, scenarios, sprint) are not in the brief's
    content list and the brief specifies a different home hero — see question 2.

## 8 · What must be kept (owner laws, from AGENTS.md and rulings)

- **Accounts and credentials are never deleted.** No exceptions. The keyhole
  ledger only grows. Never drop or wipe `medcore-auth-db` users/sessions.
  Founding accounts: iahmadzafar, chk-audit-phase1, iaroojfatima23,
  ayeshazain6598, asiabasharat027.
- **NRE-Legacy** is a frozen archive — never deploy from it, never copy files back
  without asking.
- **Systems books are content-frozen** in the old site; their bodies are the
  content to import.
- **Old site frozen at cutover**, old domain stays live, new domain to be chosen.
- **Auto-push disabled** — manual push is the sync for the old repo until it is
  archived.
- **Single catalog source** (old: `site/assets/catalog.js`) — the new build needs
  its own single source, not copies.
- Existing localStorage prefixes in readers' browsers (`medcore.`,
  `ts-prog-2`, `ts-session-2`, `adversary.`) are live user data.

## 9 · Content mapping vs the new brief

Every item in the brief's content list exists on disk and was verified:

| Brief says | On disk | Verdict |
|---|---|---|
| Core Books: MCQ Architecture, Forge Cards (100), Memory Master, Logic-First Bank | 4 files | present |
| Question Bank, 18 subjects | 6,689 questions, 18 subjects, 6 groups | present |
| Past Papers: June 2025, Dec 2025, Dec 2025 recalled, May 2026 | 140 / 200 / 187 / 200 | present |
| Exam Intelligence: Pattern Analysis, High-Yield Topic Pool | 2 files | present |
| Quick Reference: Cheat Card, Magic Table, Symptom Clusters, Repeat Offenders | 4 files | present |
| Frameworks: Case Ladder | 35 topics | present |
| MedCORE Systems: 10 books | 10 files | present |

**Gaps the new schema must handle honestly:**
- **Syllabus: removed from scope entirely** (owner ruling, 24 Nov — §10.8
  resolved). No syllabus line in the schema, no syllabus page, no syllabus text
  anywhere; blocks map to subject + topic only. Brief rule 1 is restated as
  "start from the subject map — every block maps to a subject and topic",
  pending the owner's confirmation of the wording.
- No source or difficulty fields on questions (brief's schema adds them; import
  must leave them null rather than invent).
- Bank layers are concept/hook/trap/rule/others — the brief's six-part
  explanation adds a **memory aid** the bank does not have; 375 questions have no
  layers at all. Do not invent clinical content to fill these; show the gap.
- Papers carry rule/trap/inf but no per-option "why each other option fails" and
  no memory aid — same honesty rule.

## 10 · Questions only the owner can answer

1. **June/Dec 2024 keys** — import them (they are not in the brief's list) or
   leave them behind with the old site?
   **Resolved 24 Nov: b** — left behind; the new site ships the brief's four
   papers only.
2. **Landing interactives** — bedside monitor, scenarios, old sprint: retire with
   the old site (my default, since the brief's home spec differs), or port any
   of it?
   **Resolved 24 Nov: b** — the bedside monitor is ported to the new site as its
   own page (scope addition: re-skin to Candy Ink, accessibility, reduced-motion
   path, performance budget). Scenarios and the old sprint retire with the old
   site; the sprint lives on as the new Sprint mode.
3. **Existing five accounts** — migrate into Better Auth by re-hashing passwords
   on first login (credentials preserved per owner law), forcing everyone else to
   sign in again. Acceptable?
   **Resolved 24 Nov: a** — legacy verify-then-upgrade; sessions dropped at
   cutover so everyone signs in once. Magic-link email sender is phase-3
   infrastructure (needs a sending identity on the new domain).
4. **Existing progress** — migrate users' saved progress blobs into the new
   schema (attempts, misses, cards) with a dry-run report, or start progress
   fresh? (I recommend migrate with dry-run — the data is real study history.)
   **Resolved 24 Nov: b** — progress starts fresh in the new app. The old
   progress database stays untouched as the pre-cutover archive (§6).
5. **New Cloudflare project and domain** — old `medcorex` project stays untouched
   and frozen; name for the new Pages project (e.g. `medcorex-app`) and the new
   domain are yours to choose.
   **Open** — undecided. Needed at first preview deploy; the scaffold runs on a
   placeholder name until then.
6. **New D1 database** for the new schema vs new tables inside `medcore-auth-db`?
   (Never dropping users/sessions is compatible with either; a fresh database is
   cleaner — my recommendation.)
   **Answered 24 Nov** (rationale delivered: law protection, migration source,
   rollback isolation, zero keep-cost). Recommendation stands: fresh database;
   owner's confirmation pending.
7. **Uncommitted working-tree changes** — commit today's reconciliation as-is, or
   leave the tree untouched for you?
   **Resolved 24 Nov: committed** — reconciliation (MODULES, catalog sync,
   chrome-fragment deletions, verify.js) plus the catalog board-name fix in one
   commit; AUDIT.md and the refreshed QC reports in a second. Local only —
   auto-push remains disabled; nothing reached GitHub or the live site.
8. **Syllabus lines** — no syllabus document exists in the repo. Do you have one
   to supply, or do we derive topic-to-syllabus mapping during import and flag
   every derived line for your review?
   **Resolved 24 Nov: neither** — owner ruling: syllabus references are removed
   from the product entirely. No upload, no field, no page, no derived lines.
9. **Bank QC debt** — during import: repair what is safely repairable (control
   characters, broken markers) and flag the rest (duplicate stems, answer leaks,
   short-option questions) in CONTENT-REVIEW.md, or import everything untouched
   and flag all of it? (My default: repair mechanical defects, flag content
   judgements, never guess at clinical answers.)
   **Answered 24 Nov with provenance** (§4) — the debt is real, its origin is
   verified, and the bank is frozen as canonical. Policy A stands unless
   countered: mechanical repairs (72 markers, 37 control chars) automated with
   diff reports; everything clinical flagged; duplicate stems split
   within-subject vs cross-subject in the import dry-run for the owner's ruling.

---

*Assumptions made while auditing:* local==GitHub==live parity was verified for
`index.html` only; other pages are assumed deployed from the same commit because
the CI gates run on every push. Question counts come from `data.js` (authoritative
generator output); catalog descriptions were verified against the paper data
directly. The working tree was read, not modified, except for this file.
