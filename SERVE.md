# MedLib X — how to serve it

## Deploy

**LIVE since Oct 18 2026 — https://medlibx.pages.dev** (v1.2, database `f830d37c…`).

Two paths, both clean (no secret through chat):
- OAuth (preferred): `npx wrangler login` once — approval in the browser, secret lives in `~/.wrangler` — then just `./deploy.sh`.
- Token: `CLOUDFLARE_API_TOKEN=<token> ./deploy.sh`.

`deploy.sh` is idempotent at every stage: creates the D1 database + applies schema on first run, creates the Pages project if missing, then stages and uploads. Redeploys after edits are the same one command; schema reapplies harmlessly.

## Local check (no Cloudflare at all)

    ./SERVE.sh <custom-port-optional>

Serves `site/` at `http://127.0.0.1:<port>` with `/resources/*` correctly gated
(302 to `/login` without a session). The API endpoints are unavailable locally —
that's Cloudflare Functions territory — so sign-in flows need a deployed build,
but every page, the footer, catalog behaviour and the gate redirect can be verified
right here.

## What's where

- `functions/resources/[[file]].js` — the gate. Sessions in D1, bounce to `/login?next=…`
- `functions/api/` — register (auto-assigns + unique username), login, logout, me, account (username & password change)
- `schema.sql` — users + sessions, fresh database, separate from MedCORE Hub
- `resources/` — all 36 files, unreachable without a session (the intercept shadows static serving)
- `index.html` library `about.html` `faq.html` `login.html` `signup.html` `account.html` `404.html` — footer + copyright on every page

## House rules kept

- No official board names anywhere in any file or copy.
- No emojis — inline SVG glyphs only.
- `medcorehub.pages.dev` and its deploy were not read, modified, or touched.
