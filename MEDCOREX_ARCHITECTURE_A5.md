# MedCoreX Architecture (For Brainstorming & Edits)

*Printed for mapping changes. Focus: how it works & how parts connect. No MCQ/content dump.*

**Repo:** `/Users/ahmdzafr/Documents/MedCoreX`  
**Live:** `https://medcorex.pages.dev`  
**Project:** MedCoreX / MCX (37 modules across 7 shelves)  
**Deploy:** Cloudflare Pages via GitHub Actions; local post-commit hook auto-pushes `main`

---

## 1) High-Level Overview

MedCoreX is a static-first study library served by **Cloudflare Pages** with **Pages Functions** for gating. The UI is a "Studyverse" design system shared across shells and modules. Content is organized as **37 HTML modules** grouped into **7 shelves** (catalog), surfaced via shell pages (`/`, `/library`, `/about`, `/faq`, `404`). Access to `/resources/*` is gated by a function that checks sessions in **D1**; auth/account flows exist in functions but were removed from nav/UI per owner call (still restorable).

```
Browser
  ↓
Cloudflare Pages (static assets from site/)
  ├─ Shells: index.html, library.html, about.html, faq.html, 404.html, etc.
  ├─ Assets: /assets/studyverse.css, /assets/studyverse.js
  └─ Functions (Pages Functions)
       ├─ /resources/[[file]].js  (gate: session check → serve via ASSETS or redirect /login)
       └─ /api/*                   (auth/session/progress/keyhole/account - mostly inactive in UI now)
            ↓
           D1: medlibx_db (sessions/users) + medcore_db (present)
```

---

## 2) Repository Layout

```
MedCoreX/
├── .github/workflows/deploy.yml  # CI: scriptproof → prune test files → wrangler pages deploy
├── AGENTS.md                     # Repo rules (sync, naming, house rules, scriptproof gate)
├── MODULES.md                    # Canonical module map (37 modules, groups, notes)
├── SERVE.md                      # Deploy/local/auth notes
├── House Rules.md                # Design law
├── PLAN — Design Kit.md          # Design kit plan
├── catalog.json                  # Source of truth for library catalog (cats + items)
├── site/                         # Build output root for Pages (pages_build_output_dir = ".")
│   ├── index.html                # Home (shelf tabs, ticker, rules)
│   ├── library.html              # Library shell (portals/shelves, reads catalog inline)
│   ├── about.html, faq.html, stats.html, 404.html
│   ├── assets/
│   │   ├── studyverse.css        # Shared design tokens + components
│   │   └── studyverse.js         # Theme engine (remix/lock/mode), toast/confetti, window.SV
│   ├── functions/
│   │   ├── resources/[[file]].js # Gate for all /resources/*
│   │   └── api/*                 # Auth/session/progress/keyhole endpoints
│   ├── resources/                # All 37 module HTML files (gated)
│   ├── _redirects                # 3:/account 302 /
│   ├── _headers                  # CSP/security headers
│   ├── wrangler.toml             # D1 bindings, Pages config
│   ├── schema.sql                # D1 schema
│   └── scriptproof.js            # Syntax gate (must pass before deploy)
└── hub-data/, data/              # Supporting data (not served as modules)
```

---

## 3) Routing, Shells & Navigation

**Shell pages (static):**
- `/` → `site/index.html` (Home): "Seven shelves, tabbed" catalogue, theme engine, tips marquee, rules/quote. Reads catalog inline in JS.
- `/library` → `site/library.html` (Library): portal picker by shelf; shelves with single file go direct; others show grid. Also reads catalog inline. Links to `/resources/<slug>`.
- `/about`, `/faq`, `/stats`, `404.html` — themed with Studyverse.
- Auth pages exist (`login.html`, `signup.html`, `account.html`) but nav/footer auth links may be present; account redirected via `_redirects`.

**Resource routing:**
- Modules live in `site/resources/*.html` (37 files).
- Requests to `/resources/*` are intercepted by `site/functions/resources/[[file]].js` (Pages Functions route takes precedence).
- Gate logic (`onRequestGet`): checks session cookie via `readCookie` → looks up `sessions` in `medcore_db` where `expires_at > Date.now()`. If not signed in: returns 401 JSON if `Accept: application/json` or `?fmt=json`, else **302 to `/login?next=<path>`** with `Cache-Control: no-store`. If signed in: resolves asset via `env.ASSETS.fetch` (tries path, falls back to `path + '.html'`), sets `Cache-Control: private, max-age=0, must-revalidate` and `X-Robots-Tag: noindex, nofollow`. 404 → redirect to `/404`. HEAD/OPTIONS supported.

**Linking convention:** Library/Home build href as `/resources/` + encoded filename with `.html` stripped (see `href()` in both shells). The gate resolves back to actual asset.

---

## 4) Catalog & Modules (How Content is Organized)

**Source of truth:** `catalog.json` (and mirrored inline in `index.html`/`library.html`).  
**Structure:** 7 categories, 37 items total. Each item: `{t, d, c, f, k}` (title, desc, category, filename, size in KB).

**Categories (shelves):**
1. Core Books (M01-M05)
2. Mocks & Drills (M06)
3. Past Papers & Answer Keys (M07-M14)
4. Exam Intelligence & Strategy (M15-M20)
5. Quick Reference (M21-M26)
6. Frameworks & Interactive (M27)
7. MedCORE Systems (M28-M37)

**Module types:** Most are self-contained HTML with inline CSS/JS; some load small JSON via `JSON.parse()` (M05, M06, M18, M20, M24, M27). Systems books (M28-M37) share a "MedColor sheet" pattern (model: M28 Cardiology). Design passes vary; Studyverse restyle planned for all modules.

**Key detail:** "Every file of the hub is a MODULE" (MODULES.md). The hub = 37 modules + 5-page shell.

---

## 5) Design System (Studyverse)

**Shared assets:** `site/assets/studyverse.css`, `site/assets/studyverse.js` loaded by shells. Pages must use kit tokens and `window.SV.*`; never paste theme engine/toast/confetti/count-up.

**CSS tokens (core):** `--bg`, `--surface`, `--ink`, `--c1`..`--c4`, `--radius`, `--bw`, `--shadow`, `--shadow-hover`, `--font-display`, `--font-body`, `--dw`, `--case`, `--track`, `--muted`, patterns via `html[data-pattern]`. Dark mode via `html[data-theme=dark]` with adjusted values; `--on-accent` flips black/white.

**Theme engine (studyverse.js):**
- Generates random theme on load: scheme from `SCHEMES` (Triadic/Complementary/Split/Analogous/Tetradic/Candy), random hues, picks display/font/shadows/radius/border, picks pattern, builds name from `ADJ + NOUN`.
- Persists: `mx-mode` (light/dark), `mx-lock` (locked theme object). Falls back to `prefers-color-scheme`.
- UI: injects engine chips into `[data-sv-engine]` (swatches, theme name, mode/lock/remix buttons). Hotkeys: `T/t` remixes (when not typing/in dialogs).
- API: `window.SV = { theme, remix(), toast(), burst(), burstAt(), countUp(), stagger() }`. Auto-injects blobs and toast on boot.
- Paints CSS variables on `<html>`, sets `data-pattern`, dispatches `sv:theme` event.

**Patterns:** dots/grid/stripes/checks/waves/plain. Decorations: morphing blobs, confetti bursts, staggered reveals.

---

## 6) Auth, Sessions, API & Data

**D1 bindings (wrangler.toml):**
- `medcore_db` (database_name `medcore-auth-db`, id `f830d37c...`) — primary for auth/sessions per functions
- `medcore_db` (database_name `medcore-db`, id `2d13a393...`) — present

**Session model:** Cookie read by `readCookie()` (in `functions/api/_util.js`). Gate checks `SELECT expires_at FROM sessions WHERE token=?` in `medcore_db`; valid if row exists and `expires_at > Date.now()`. Sessions are HttpOnly/Secure/SameSite=Lax (90-day per SERVE). 

**API routes (site/functions/api/):** `login.js`, `register.js`, `logout.js`, `me.js`, `account.js`, `progress.js`, plus `auth/`, `google/`, `keyhole/` subdirs, `_util.js`. UI auth removed Oct 22 2026 (gate/functions/schema/keys intact). Restore path noted in SERVE.

**Redirects/headers:** `_redirects` has `3:/account 302 /` (auth-era artifact). `_headers` sets security headers including CSP allowing `self` inline scripts/styles and Google Fonts.

**Schema:** `site/schema.sql` defines users/sessions etc (separate from MedCORE Hub context).

---

## 7) Build, Deploy & Sync

**Local dev:** `./SERVE.sh [port]` serves `site/` at `http://127.0.0.1:<port>`; `/resources/*` gated same way but API unavailable locally.

**Deploy pipeline (automatic):**
1. Commit changes in repo.
2. **Post-commit hook** auto-pushes `main` to GitHub (see `~/.git-medcorex-push.log` on failure).
3. **GitHub Actions** (`.github/workflows/deploy.yml`) on push/dispatch:
   - Checkout
   - **Proof gate:** `node site/scriptproof.js` — every inline `<script>` in every HTML, every `.js`, every `.json`/`.jsonl` must parse (fails on syntax errors like unescaped newlines in strings)
   - Prune: remove `.github`, `.gitignore`, `.DS_Store`, `*.bak-*`, and test files (`verify.js`, `prooflocal.js`, `domproof.js`, `bankproof.js`, `prodcheck.js`, `libproof.js`, `scriptproof.js`, `serve.js`, `deploy.sh`)
   - Check `CLOUDFLARE_API_TOKEN` secret; if set, deploy with `cloudflare/wrangler-action@v3` using `workingDirectory: site`, command `pages deploy . --project-name=medcorex --branch=main`

**Sync contract:** Local == GitHub == live expected. Verify with `git status -sb` and spot checks. Owner can say "SYNC!" to force commit/push/verify.

**Manual deploy:** `npx wrangler login` or `CLOUDFLARE_API_TOKEN=... ./deploy.sh` (from repo root; `deploy.sh` idempotent).

**Naming/house rules:** Project is MedCoreX/MCX. Only infra identifiers may be `medcore*` (DB/binding/cookie/keychain/localStorage). No file sizes in names/docs/commits. Test-only files never deployed. New page copies shell from `site/about.html`.

---

## 8) How It All Connects (Flow)

**Page load (shell):**
1. HTML loads `studyverse.css` + `studyverse.js` in `<head>`. JS paints theme vars before paint, injects blobs/toast/chips on DOMContentLoaded.
2. Shell JS (inline in index/library) builds UI from catalog (inline arrays) or reads structure.
3. Navigation links to `/library` or directly to `/resources/<name>`.

**Accessing a module:**
1. User clicks module → browser requests `/resources/<file>` (or extensionless per href).
2. Cloudflare Pages matches Pages Function `functions/resources/[[file]].js` first.
3. Function reads session cookie, validates against D1 `sessions`. 
   - Invalid → 302 to `/login?next=...` (or 401 JSON)
   - Valid → fetches static asset via `env.ASSETS.fetch`, adds private/no-store headers, returns it.
4. Module HTML loads with its own CSS/JS; may use Studyverse classes/tokens if styled, but many modules have older passes.

**Theme flow:** `studyverse.js` creates/applies theme → sets CSS vars on `<html>`, updates chips, dispatches event. `mx-lock` saves theme; `mx-mode` controls light/dark. All shells share same engine.

**Deploy flow:** Edit in `site/` or root → commit → hook pushes → Actions runs scriptproof → prunes test files → wrangler deploys `site/` to Pages project `medcorex`.

---

## 9) Quick Pointers For Edits

- **Add/change module:** Update `catalog.json` and inline catalog in `index.html`/`library.html` (they duplicate it). Add file to `site/resources/`. Follow MODULES.md.
- **Change design system:** Edit `site/assets/studyverse.css` and/or `site/assets/studyverse.js`. All shells use them.
- **Change gating:** Edit `site/functions/resources/[[file]].js` and related API/util.
- **Change deploy:** Edit `.github/workflows/deploy.yml` or `site/wrangler.toml`.
- **Before commit:** Run `node site/scriptproof.js` (CI will enforce). Check `git status -sb`.
- **House rules:** No official board names, no emojis in old surfaces (emoji ok on Studyverse shell), no file sizes printed, keep MedCoreX/MCX naming.

