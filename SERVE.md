# MedLib X — how to serve it

## Deploy

**LIVE — https://medcorex.pages.dev** (renamed from medlibx.pages.dev, Oct 25 2026) (v1.2, database `f830d37c…`).

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


## AUTH REMOVED (Oct 22 2026) — restore path preserved

His call: "remove the sign in and account module for now." Deleted: the gate function, the whole API suite, login/signup/account pages, auth-slot scripts, nav/footer links, FAQ/About account copy — the library is fully open. **NOT touched:** the D1 database (users/sessions/auth_fails all intact, including the owner's seat), the MX_KEYHOLE secret, the schema file. Restore auth with `git revert 470e27e` (or checkout tag `auth-era-on` before this removal) and redeploy — gate and pages come back as they were. Edge cache may serve stale /login for up to 7 days after removal; /_redirects sends them onward.

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
- Cleanup only ever removes rows I created (exact names); never bulk deletes the ledger.

## Keyhole (the librarian's window) — LIVE

Ledger admin: https://medcorex.pages.dev/admin/keyhole — list every account (name, email, since, live device sessions), reset a password by hand (new one shown once in the response, all device sessions killed), or cancel a seat by name (two confirmations, unrecoverable).

The key: Pages secret `MX_KEYHOLE`, mirrored into the Mac keychain. Retrieve in Terminal:

    security find-generic-password -a medlibx -s keyhole -w

Paste into the keyhole page once — the browser remembers it (localStorage `medlibx.keyhole`). The key is never pasted into chat, never written to any file, and nothing is reachable without it.

## Sessions · practical "come back later"

90-day session cookies (`medlibx_session`, HttpOnly/Secure/SameSite=Lax), sessions + users live in D1 `medlibx-db`. Sign in once, come back weeks later on the same browser — still signed. Private/incognito windows discard cookies by design; the site cannot remember those. Always use the plain medcorex.pages.dev host; per-deploy snapshot subdomains don't share cookies.
