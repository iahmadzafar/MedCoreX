# PLAN — One System (2026) · the whole hub as one coherent design

> Status: PROPOSED — nothing moves until you approve or amend.
> Written after the mode-logic audit of all 42 files + research (modern-web-guidance:
> color-scheme/light-dark()/forced data-theme machinery; NN/g tabs & progressive
> disclosure rules; contrast math instead of eyeballing).

## 0 · Diagnosis — measured, not guessed

The hub = 42 files with **mode logic living in 42 hand-rolled places**. The
rollout repainted surfaces and fonts but never migrated the mode logic, so:

- **2 files have no mode CSS at all** (last-day sheet, quick-ref) — the toggle
  button I shipped literally does nothing there (worse than nothing).
- **15 files carry only one vestigial mode-scoped rule** — effectively no system.
- **7 files are light-first with `data-mode` rules and no `prefers` logic** —
  flipping the attribute re-paints only part of the page → the
  *white-text-in-light / black-text-in-dark* inversions you saw belong here.
- 14 files run full dual machinery (books/banks) — but by their own local rules,
  not a shared language.
- Only the 5 chassis pages speak the unified 2026 language.

## 1 · The core mechanism (research-backed)

**A. One normative theme contract for the whole hub — the only place mode logic lives:**

- `:root { color-scheme: light dark; }` + `<meta name="color-scheme" content="light dark">`
  in every file (kills the flash-of-unthemed-content at load).
- Every color is a **semantic token** defined once as a `light-dark(pair)`:
  `--surface`, `--surface-2`, `--panel`, `--ink`, `--ink-muted`, `--line`,
  `--accent`, `--accent-2`, `--good`, `--warn`, `--bad` — plus the user's stark
  rule: text pure `#FFFFFF` in dark, pure `#000000` in light.
- Override machinery: `data-theme="light|dark"` attribute forces; absent =
  system preference. Toggle + persistence follow this contract everywhere.
- Component-specific surfaces that must sit in one mode (paper pages, print
  views, code blocks) use scoped `color-scheme` per the Chrome guidance —
  never bare text-color swaps.

**B. Homepage as progressively-disclosed catalogue (NN/g rules applied):**

- **Tabs for the 7 shelves** — same-context alternate views ✓, short labels,
  first tab open on arrival, per-tab persistence of last position.
- **Collapsed menu (accordion) inside each tab** for the group → files reveal,
  counts in the label, high-scent headings. No tabs inside accordions, no
  accordions inside tabs (NN/g hard rules).
- Under 640px the tab row collapses to an accordion of shelves (mobile rule).
- "Continue reading" slot + search live above the tabs; the long flat list dies.
- ARIA `role=tab/tabpanel`, `aria-expanded`, keyboard-navigable.

**C. Verification is math + eyes, not vibes:**

- A contrast auditor computes every text/background pair **per mode across all
  42 files** (WCAG AA minimum) — inverted text becomes impossible by construction.
- Each file gets **seen in both modes**: I review the rendered view (in-app
  browser when it cooperates; else the audit pack for your flip-through).

## 2 · Phases

1. **Phase 0 — Per-file audit manifest.** Every HTML gets one row: current
   system, inverted/missing-mode faults found, planned fix. Written into this
   plan as a checklist and ticked as work lands.
2. **Phase 1 — The Token Contract.** Build the single theme block, contrast-audited
   in both modes, plus the one true toggle. No site touches this except consuming it.
3. **Phase 2 — Homepage shell**: tabs per shelf + collapsed groups + search +
   continue-reading. You review it before fleet work begins.
4. **Phase 3 — File-by-file migration, each seen individually:** chassis →
   master book/forge/memory → 10 system books (their identity stays; their
   grays/labels map onto the contract) → banks & tools → standalone papers.
   Every change is additive and reversible (one injected contract block vs
   retired bespoke rules).
5. **Phase 4 — Proof pack per file:** both-mode screenshots + contrast results
   in one gallery page for your eyes.
6. **Phase 5 — Deploy after each phase; commit discipline; regression battery
   (scripts, braces, counts, Plex) every round.**

## 3 · File audit manifest (fills as Phase 0 runs)

- [ ] 404 · [ ] index · [ ] library · [ ] about · [ ] faq
- [ ] master book · [ ] forge · [ ] memory-master
- [ ] 10 × system books (identity preserved, contract consumed)
- [ ] question bank · [ ] prediction exam · [ ] prediction key
- [ ] 5 × standalone keys · [ ] may-2026 breakdown
- [ ] qbank-logic (fix the reading copy) · [ ] case-ladder · [ ] planner
- [ ] prediction intel · [ ] full-picture · [ ] pattern-analysis (fix the brace bug too)
- [ ] cheat-card · [ ] last-day · [ ] quick-ref · [ ] magic-table
- [ ] 60-day plan · [ ] 800-mcq architecture · [ ] disease-symptom clusters
- [ ] prediction-sheet · [ ] past-paper hub · [ ] repeat-offenders

## 4 · What I need from you

Approve or amend. Then bring your ready-made ideas — they slot into Phase 2/3
as reviews, not rewrites.
