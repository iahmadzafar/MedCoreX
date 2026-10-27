# AGENTS.md — MedCoreX (MCX)

Single source of truth: `/Users/ahmdzafr/Documents/MedCoreX` (repo → `github.com/iahmadzafar/MedCoreX`, live → `medcorex.pages.dev`).

## The sync contract (automatic — do not skip, do not need asking)

1. **Commit** your work with a real message.
2. A **post-commit hook auto-pushes** `main` to GitHub on every commit — so step 1 *is* the sync.
3. **GitHub Actions** (`/.github/workflows/deploy.yml`) deploys to Cloudflare Pages on every push.
4. If the auto-push ever fails (see `~/.git-medcorex-push.log`), push manually: `git push origin main`.

Local == GitHub == live is the expected steady state at the end of any session.
Verify cheaply: `git status -sb` (no ahead/behind) + `curl -s localhost`-style md5 of any
`site/` file vs its live URL.

### Sync triggers (owner ruling, 27 Oct 2026)

- **"SYNC!"** (he says it, or anything that close) = do it *now*: commit every pending
  change with a real message (the hook pushes it), then verify the triple — `git status -sb`,
  remote hash, one live md5 — and report all three states back.
- **Idle-drift reminder:** when the working tree has accumulated a noticeable uncommitted
  change set (several files / multi-module edits) and the session is heading toward a wrap,
  **remind him to sync proactively** — before he asks, without waiting for "SYNC!".
  A quiet `git status` showing nothing is also worth one line: "nothing to sync — chain green."
- He should never have to remember the mechanics; the agent carries them.

## Naming (owner ruling, 27 Oct 2026)

The project is **MedCoreX / MCX** — nothing is called MedLib X or medcorehub anymore.
Keep it that way in every file, title, comment and commit. The only permitted `medlibx`
strings are the infra identifiers that Cloudflare owns: D1 database `medlibx-db`, binding
`medlibx_db`, session cookie `medlibx_session`, the keychain account `medlibx` (keyhole key — NEVER renamed, renaming orphans the stored secret) and localStorage `medlibx.keyhole`.

## House rules

`House Rules.md` is the design law (space, type, color, surface). `SERVE.md` = deploy/serve
how-to. `MODULES.md` = module map. Bottom breathing room on every page: footerless sections
get `padding-bottom:120px`, footer pages ≥48px — add on sight, no approval needed.

## Legacy

`NRE-Legacy` (renamed from NRE Prep) is a frozen archive — also zipped at
`~/Library/Mobile Documents/com~apple~CloudDocs/OpenCode/Ahmad/NRE-Legacy.zip`.
Never deploy from it, never copy files back from it without asking. `studyverse.html`
(owner's design reference) lives in this repo root, **git-ignored on purpose** — keep it on
disk, never `git add` it (owner removed it from the repo in `a05bba5`).

## Secrets

Never in chat, never in git. PAT lives in macOS Keychain + gh keyring; Cloudflare token in
Actions secrets (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`).
