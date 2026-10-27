# PLAN — Design Kit (one design, many thin pages)

> Status: APPROVED by owner. Execute phase by phase. After each phase: commit,
> run that phase's checks, and report results before starting the next phase.
> This plan replaces Phase 1 ("Token Contract") of `PLAN — One System.md` for the
> chassis pages. The 10 system books and the standalone papers are out of scope (see Phase 7).
>
> **Amended 27 Oct 2026 (owner decisions):** (1) Accounts = **ON** — sign-in returns
> with Google login → **Phase −1 inserted below, runs before Phase 0**. (2) Execution
> addenda from repo verification are marked **[repo-verified]** inline.

## Goal
Today every page carries its own copy of the Studyverse theme engine and styles
(`site/index.html` inline; `site/resources/medcore-question-bank/app.js` + `style.css`
separately; the copies have already drifted). Target state:

- ONE kit: `site/assets/studyverse.css` + `site/assets/studyverse.js`
- Pages are thin shells: they link the kit, plus their own page CSS/JS/data
- A theme/design change = editing the kit only

## Ground rules for this work
- Work on branch `kit`, NOT `main`. Deploys run on every push to main; a half-migrated
  site must never go live. Merge to main only at the end of Phase 6.
  **[repo-verified]** The post-commit hook currently pushes *only* main — Phase 0 amends
  it to push any branch (deploys stay main-gated by the workflow), so kit commits are
  backed up and visible to the owner's assistant without ever deploying.
- Source of truth for the engine = the copy in `site/index.html` (it is the most complete:
  it has dark mode, `mx-mode` and `mx-lock`). Extract from it; don't rewrite from memory.
- Keep every public URL working. Never rename chapter ids, question ids, or anchors.
- Page CSS may only use kit tokens (`var(--c1..c4)`, `--bg`, `--surface`, `--ink`,
  `--muted`, `--line`, `--ok`, `--bad`, …). No hex colours in page CSS, or dark mode breaks.
  **[repo-verified]** The bank's states use `#fff` on accent fills (13×) — the kit defines
  `--on-accent` (white/black per mode) as part of Phase 1 so the rule stays absolute.

---

## Phase −1 · Accounts back ON (owner decision, 27 Oct 2026) — runs BEFORE Phase 0
Restore sign-in (with Google) from tag `auth-era-on`, integrated into the *current* shell.

1. **API + gate:** take the tag versions of the shared files (`login`, `register`,
   `logout`, `me`, `progress`, `_util`, `account.js`, `keyhole/*`) — they carry the
   Oct 23-era hardening (brute-force throttle) the NRE copies lack; review `progress.js`
   (NRE copy has +36 lines) and keep any NRE improvements explicitly. Keep the merged-in
   Google functions (`api/google/*`, `api/auth/google/*`) — WIP that exists only in this
   tree; add the tag's `functions/resources/[[file]].js` gate.
2. **Redirects:** remove the `/login 302 /` and `/signup 302 /` removal-hygiene lines
   from `_redirects` so auth routes can serve.
3. **Pages:** restore `login.html`, `signup.html`, `account.html`, `admin/keyhole.html`
   from the tag — functional first; they become thin kit shells in Phase 2 (page list
   grows 5 → 9). Add the "Continue with Google" entry point (handler lives in the
   resurrected `medcore-sync.js`; verify wiring).
4. **Chassis re-link:** re-add the auth-slot markup (sign-in link / signed-in state) and
   the `medcore-sync.js` script tag to the five shell pages, adapted to today's markup —
   the tag's pre-Studyverse markup is a reference, not a copy-paste.
5. **Secrets (never in chat):** `MX_KEYHOLE` from the Mac keychain piped straight into
   `wrangler pages secret put MX_KEYHOLE`; owner provides `GOOGLE_CLIENT_ID` +
   `GOOGLE_CLIENT_SECRET` the same way (hidden prompts), and registers the redirect URI
   `https://medcorex.pages.dev/api/google/callback` in the Google Cloud console.
6. **Progress keys:** no action here — Phase 3 renames to `medcore.*`, which is the
   bridge to per-account sync.

**Check:** signed out → `/resources/…` gates to `/login`; login/register/session work;
Google button reaches Google and returns a session; keyhole answers with the key;
`wrangler pages secret list` shows all three secrets. Then report before Phase 0.

---

## Phase 0 · Prep
1. `git checkout -b kit`
2. Amend the post-commit hook to push the current branch (main stays the only
   deploy-triggering branch).
3. Inventory: list every file in `site/` that contains `function makeTheme`, `SCHEMES=`,
   `.blob{` or `class="engine"`. Paste the list into this plan under "Phase 0 results".
4. Note each page's current saved-progress name (search for `localStorage`), so nothing
   gets lost when names change in Phase 3–4.

**Check:** inventory list committed in this file.

## Phase 1 · Build the kit

### 1a. `site/assets/studyverse.css`
Move these blocks out of `site/index.html` (cut, don't copy):
tokens (`:root`), reset, background patterns (`html[data-pattern=…]`), type
(`h1–h3`, `.eyebrow`, `.muted`, `.hl`, `kbd`), `.blobs/.blob` + keyframes, `.wrap`,
`.card`/`.card.hov`, `.btn` + variants (`alt`, `ghost`, `sm`), `.chip`, `.field`,
`.row`, `.tag`, `.rv` reveal, `.nav`/`.logo`/`.links`, `.engine`/`.swatches`/
`.theme-name`/`.icon-btn`, hero pieces (`.hero`, `.mega`, `.lede`, `.hero-art`,
`.sticker`, `.shape s1–s3`), `.marquee`/`.track`, `.section-head`, `.toast`,
`.confetti`, `.foot*`, base `dialog` styles, the reduced-motion rule, and print rules.
Then add any shared component that also exists in the Question Bank `style.css`
(`.opt` states `correct/wrong/dim/sel/picked`, `.prog`, `.bar`), as one version.

### 1b. `site/assets/studyverse.js`
Move the engine out of `site/index.html` and expose this API. Pages must use only this:

```
window.SV = {
  theme,                       // current theme object
  remix(),                     // new random theme (+ toast + confetti)
  toast(msg),
  burst(x, y, n = 34),         // confetti at a point
  burstAt(el),                 // confetti at an element's centre
  countUp(el, to, suffix = ''),
  stagger(root)                // sets --i on .rv children
}
```

Behaviour the kit owns (pages must not reimplement any of it):
- **Boot without flicker:** the file loads in `<head>` without `defer`. It applies the
  theme vars + `data-theme` + `data-pattern` to `<html>` straight away (this needs no DOM).
  Everything that touches page elements waits for `DOMContentLoaded`.
- **Auto-inject:** if missing, add `.blobs` (3 blobs) at the top of `<body>` and
  `#toast` at the end. Fill any `<div class="engine" data-sv-engine></div>` with
  swatches, theme name, mode, lock and remix buttons.
- **Shared storage:** `mx-lock` (locked theme) and `mx-mode` (light/dark). The
  same lock and mode now carry across every page.
- **Keys:** `T` = remix. Ignored while an input is focused, a `<dialog>` is open,
  or Cmd/Ctrl/Alt is held. Pages must never bind `T`.
- **Event:** dispatch `sv:theme` on `document` after every repaint, for pages that
  draw colours in JS.
- **Reduced motion:** no confetti or count-up animation.

**Check:** a scratch page `site/assets/_kit-test.html` (delete before merge) that
links only the kit shows blobs, the engine chip, remix, lock, mode and toast all working.

## Phase 2 · Migrate the chassis pages
Pages: `site/index.html`, `library.html`, `about.html`, `faq.html`, `404.html`
— **plus the four pages restored in Phase −1** (`login.html`, `signup.html`,
`account.html`, `admin/keyhole.html`): nine thin shells total.

Each page's `<head>` becomes:
```html
<meta charset="utf-8">
<meta name="color-scheme" content="light dark">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>…</title>
<link rel="stylesheet" href="/assets/studyverse.css">
<style>/* page-only styles, tokens only */</style>
<script src="/assets/studyverse.js"></script>
```
- Delete the inline engine script and all styles that moved to the kit.
- Replace the hand-written engine chip with `<div class="engine" data-sv-engine></div>`.
- Remove hand-written blobs and toast markup (the kit injects them).
- Page logic (catalogue tabs, filters, resume link, auth-slot state) stays in the page
  and calls `SV.*`.
- **[repo-verified]** Absolute `/assets/…` paths end double-click-from-Finder viewing;
  local viewing = `SERVE.sh` (accepted tradeoff, owner informed).

**Check:**
- `grep -rl "function makeTheme" site/` → only `site/assets/studyverse.js`
- Each page: remix, lock (survives reload and carries to another page), dark/light,
  tabs/filter still work, no console errors, mobile width 390px looks right.

## Phase 3 · Migrate the Question Bank
Folder: `site/resources/medcore-question-bank/`
- `index.html`: kit head as above; engine chip → `data-sv-engine`; remove blobs and toast.
- `app.js`: delete the whole THEME ENGINE section (SCHEMES … `remix()`, the lock button
  code) plus the local `toast`, `burst`, `countUp`, `stagger`. Replace calls with
  `SV.toast`, `SV.burst`, etc. Remove `P.lock` (the kit owns the lock now).
  Its custom `T` binding goes too (the kit owns `T`).
- `style.css`: delete every rule now in the kit; keep only bank-specific layout.
  Replace hex colours with tokens (`--on-accent` for answer-state text).
- Saved progress: rename `medcore_qb` → `medcore.qb` with a one-time migration:
  read the old key if the new one is empty, write the new one, delete the old one.
- Dark mode is new for the bank. Check every state (selected, correct, wrong, flagged,
  breakdown dialog) in both modes.

**Check:** answer 3 questions, reload: progress is kept, and the theme lock matches the homepage.

## Phase 4 · Install the Study Book redesign
- **[repo-verified] BLOCKED ON OWNER INPUT:** the four files (`index.html`, `style.css`,
  `app.js`, `data.js`) exist nowhere in the repo or the legacy archive — only the old
  single `.html`. Owner supplies them, or orders them built (an M06-scale task).
- Create `site/resources/medcore-production-master-html-medcore-master-book/` with the
  four files from the owner, converted the same way as Phase 3: kit head, delete its
  engine/toast/burst/countUp/stagger/lock, use `SV.*`, keep only book-specific CSS.
- Progress name: `medcore_book` → `medcore.book`.
- URL: the old single file has the same name with `.html`. Check how `library.html`,
  `index.html` and `catalog.json` link to it, and keep
  `/resources/medcore-production-master-html-medcore-master-book` working, along with
  old `#ch-…` anchors (the app already redirects them).
  **Ask the owner before deleting the old .html.** Git history keeps it either way.

**Check:** cover → chapter 1 → answer MCQs → mark complete → reload; old link
`…master-book#ch-medicine-cardiology-day-22-acs-next-step-logic` opens chapter 1.

## Phase 5 · Rules in AGENTS.md
Append this section to `AGENTS.md`:

```
## Design kit (owner ruling, 27 Oct 2026)
- All shared design lives in site/assets/studyverse.css + site/assets/studyverse.js.
- NEVER paste theme styles, the theme engine, toast, confetti or count-up into a page.
  Link /assets/studyverse.* and call window.SV.
- Page CSS uses kit tokens only (no hex colours) so dark mode works everywhere.
- Saved-progress names start with "medcore." (e.g. medcore.qb, medcore.book).
  Theme prefs stay mx-lock / mx-mode.
- Test-only, never deployed or linked: verify.js, prooflocal.js, domproof.js,
  bankproof.js, prodcheck.js, serve.js, deploy.sh.
- New page = copy the shell from site/about.html, then add page CSS/JS.

## Change notes from the owner's assistant
Notes arrive as:
  CN-### · <file>
  FIND (exact text) … REPLACE WITH … WHY … CHECK …
Apply exactly. If FIND doesn't match exactly once, stop and report; don't guess.
Commit as "CN-###: <one-line why>", run CHECK, report the result.
```

**[repo-verified]** That AGENTS.md rule is currently false in practice: `verify.js`,
`serve.js`, `prooflocal.js` and `medcore-sync.js` all answer 200 on the live domain —
they are deployed, only unlinked. Enforcement added in Phase 6 (workflow prune +
`deploy.sh` staging drop them).

## Phase 6 · Verify and go live
1. Delete `site/assets/_kit-test.html`.
2. Prune enforcement: add the test scripts (`verify.js`, `prooflocal.js`, `domproof.js`,
   `bankproof.js`, `prodcheck.js`, `serve.js`) to the workflow prune step and to
   `deploy.sh` staging. (`medcore-sync.js` STAYS — accounts are ON; it becomes linked
   again in Phase −1.)
3. Run the checks from Phases 2–4 again on the local server (`SERVE.md`).
4. Line counts before → after for the 5 chassis pages and both modules (they should drop sharply).
5. Merge `kit` → `main`; the hook pushes and Actions deploys.
6. Live check: open `/`, `/library`, the Question Bank, the Study Book and `/login` on
   medcorex.pages.dev; the md5 of live `/assets/studyverse.js` matches local.
7. Rollback if anything is wrong live: `git revert -m 1 <merge-commit>` and push.
8. Same day: amend `PLAN — One System.md` status — its Phase 1 ("Token Contract") is
   superseded by this kit; the remainder (42-file token rollout) rides on top of it.

## Phase 7 · Later, only on owner request
The 10 system books and the standalone papers keep their own identity for now. If the
owner wants them on the kit, convert one file per commit, using the same steps as Phase 3.

## Phase 0 results
(fill in)
