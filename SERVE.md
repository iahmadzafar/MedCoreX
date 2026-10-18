# MedLib X — how to serve it

## Deploy (his shell, one line)

    CLOUDFLARE_API_TOKEN=<Pages:Edit token> ./deploy.sh

- First run creates the D1 database `medlibx-db`, writes its id into `wrangler.toml`, applies `schema.sql`, then deploys.
- Project name: `medlibx` → lands at `medlibx.pages.dev` (or the custom hostname attached in the Cloudflare dashboard — never touches the MedCORE Hub project).
- Later runs skip creation and just deploy. Schema is idempotent.

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
