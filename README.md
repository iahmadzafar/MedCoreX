# MedCoreX landing page

The redesigned landing page at `/` (`site/index.html`). The rest of the site is unchanged and still runs on the Studyverse kit.

**Direction:** 2, "Graphite and Ember". A matte bedside instrument: graphite body, hard 2px edges, one ember accent used only for the action and out-of-range values. Dark by default. The light twin keeps the monitor dark, because it is an instrument, not a page.

## Setup

There is no build step and no `npm install`. The site is static HTML, CSS and JS, served by Cloudflare Pages in production.

```bash
node site/serve.js 8123          # Pages-style local server, http://127.0.0.1:8123
# or
./SERVE.sh 8123
```

Open `http://127.0.0.1:8123/`. Sign-in and the `/resources/*` gate need Cloudflare Functions, so they only work on the deployed site.

Before any commit that touches the page:

```bash
node site/scriptproof.js         # every script parses
node site/kitcheck.js            # every page is themed (the landing page is exempt, see below)
```

## Where things live

| What | Where |
|---|---|
| Page markup and copy | `site/index.html` |
| Landing page styles (tokens, type scale, grid, both themes) | `site/assets/home/home.css` |
| Always-loaded behaviour: theme, reveals, rules, tabs, reading explanations | `site/assets/home/home.js` |
| Canvas monitor (ECG, pleth, respiration), loaded when the monitor is in view | `site/assets/home/monitor.js` |
| "Read the monitor" scenarios, loaded on click | `site/assets/home/scenarios.js` |
| 60-second sprint, loaded on click | `site/assets/home/sprint.js` |
| Scenario data | `site/content/scenarios.json` |
| Sprint questions | `site/content/questions.json` |
| Resource list (the seven categories and their items) | `site/assets/catalog.js` (shared with `/library`) |
| OG card, favicons, manifest | `site/assets/home/og.svg`, `favicon.svg`, `site.webmanifest` (raster versions generated from the SVGs) |
| Crawl files | `site/robots.txt`, `site/sitemap.xml` |

## Editing copy

- **Page copy** (headline, lede, rules, quote, footer, category descriptions) is in `site/index.html`. The copy is kept word for word from the brief. Changing it means editing the HTML directly.
- **Why not one content file?** The page is static HTML, so putting all copy in one JSON file would mean adding a build step to render it. That's a decision for you, not one I made silently. The game copy is already in JSON.
- **Category descriptions** are the `<p>` and `<h3>` inside each `<section class="panel">`. Item counts come from `catalog.js` at runtime, so they can't drift.

## Editing scenarios (`site/content/scenarios.json`)

Each scenario has:

- `id`: unique, kebab-case
- `title`: shown to the user
- `vitals`: `hr`, `spo2`, `rr`, `temp`, `sys`, `dia`
- `rhythm`: `regular` or `irregular` (drives the ECG and pleth)
- `pleth`: pulse amplitude, `0.5` to `1.2`
- `options`: exactly four strings
- `answer`: zero-based index of the correct option
- `why`: the one-line explanation shown after answering
- `category`: must match a name in `catalog.js` exactly, so the "Study this in" link works

The file ships with 10 scenarios.

## Editing sprint questions (`site/content/questions.json`)

Each question has `id`, `stem`, `options` (four), `answer` (zero-based), `why` and `category`. The sprint uses the first five. Keep the answer index varied so the correct option doesn't always land in the same place.

## Storage and privacy

The landing page stores nothing. There is no account and no study record. Scores from the scenario and the sprint live only in the page's memory and are gone when the visit ends. On load, the page clears any `medcore.*` keys left by an earlier build of the study record.

## Deploy to Cloudflare Pages

**Production (default).** Commits stay local until you push. `git push origin main` triggers `.github/workflows/deploy.yml`, which runs the gates and deploys `site/` to the `medcorex` Pages project on `main`. The workflow needs the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repository secrets.

**Manual production deploy.** `CLOUDFLARE_API_TOKEN=… ./site/deploy.sh`, or `npx wrangler login` once and then `./site/deploy.sh`.

**Preview (recommended before production).** Upload to a branch that isn't `main`. This creates a preview URL and leaves production untouched:

```bash
cd site
npx wrangler pages deploy . --project-name medcorex --branch landing-preview
```

Wrangler prints the preview URL. Check the page there before merging to `main`.

## Exemptions and decisions

- **`kitcheck.js`** exempts `site/index.html` by exact path. The landing page doesn't load the Studyverse kit, theme engine or tokens, because the redesign is its own visual system. All other pages stay on the kit. The exemption is recorded in the script.
- **No Tailwind, Motion or GSAP.** The brief allowed these. The page uses CSS custom properties, IntersectionObserver and canvas instead, which keeps the bundle small and avoids a build step. The one-at-a-time rule reveal is an IntersectionObserver, not a GSAP timeline.
- **No Next.js or Astro.** The brief said to keep the existing framework if it works. It does: static files, Pages Functions for sign-in, and the CI gates all assume it.
- **Tips ticker removed.** The "Teach it to learn it" marquee was decoration the brief excludes, and it isn't in the required section order. It's a one-line revert if you want it back.
- **Reveals hide content until their turn** rather than dimming it. A dimmed state failed text contrast, and hidden content is excluded from contrast testing.
- **Study record removed.** Visitors have no account, so there was nothing durable to save. The sprint still shows your misses at the end.
- **Theme toggle is an inline SVG sun and moon,** not emoji. The house rules ban emoji on anything a student reads.
