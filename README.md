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
| The bedside monitor: five cases, vitals model, alarms and every control | `site/assets/home/device.js` |
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

## The bedside monitor

`device.js` starts when the monitor scrolls into view. It is simulated, not live, and every reading is real text in the page so screen readers can reach it. Canvas draws the ECG, pulse oximeter and respiration traces. Simulated, not live. For study only, not clinical guidance.

### Every control, and what it does

- **A reading** (HR, SpO₂, Resp, Temp, NIBP) — focuses its trace and shows a one-line explanation. Tap again to clear.
- **The trace on the screen** — focuses the matching reading.
- **ECG II** — cycles the lead through II, V1, V5 and aVF.
- **Bed 01** — moves to the next bed. There are five cases:
  1. Bed 01 — normal sinus rhythm, the reference
  2. Bed 02 — STEMI: ST elevation, hyperacute T waves
  3. Bed 03 — NSTEMI: ST depression, T-wave inversion
  4. Bed 04 — atrial flutter with 2:1 conduction, about 150 bpm
  5. Bed 05 — atrial fibrillation, irregularly irregular
- **Reveal the case** — shows the name of the rhythm, what it looks like and what it means. Open by default? No: hidden until tapped.
- **Measure blood pressure** — runs a cuff measurement for about three seconds, then shows the reading.
- **The trend strip** — cycles the 60-minute trend through heart rate, oxygen saturation and respiratory rate.
- **Alarm LED** — lights when a limit is breached. Tap it to silence for 60 seconds.
- **Power LED** — standby on or off. Standby freezes the traces and blank the readings.

### How the vitals behave

Each case has target vitals. The displayed values ease toward those targets over a few seconds, so you can watch a rate climb. They are coupled: low oxygen raises the breathing and heart rates; a fever raises the heart rate; low pressure weakens the pulse wave. Limit breaches light the alarm LED and the status line.

## Fonts

Inter Tight and JetBrains Mono are self-hosted under `site/assets/home/fonts/` and preloaded from the same origin. They were moved off Google Fonts because the web font swap caused a layout shift of about 0.09 on mobile. Self-hosting brought CLS to 0 and Performance to 99 locally. The two files total about 76 KB.

## Copy

On Nov 18 2026 I rewrote the headings, descriptions and captions across every public page into direct language: the landing page, About, FAQ, Stats, Library, sign-in, sign-up, account and the 404. The house voice, the hero headline, the three rule names, the closing quote and all links are unchanged. The FAQ answers live in a `FAQS` array near the bottom of `faq.html`, not in the visible markup, so edit them there.

The catalogue once said "The NRE recall vault" in a visible description. That is a board exam name, which the house rules ban in any HTML or title. It is now "Questions that keep coming back in past papers". Two study files under `resources/` still carry that name in their own titles; those are content files, flagged for your call, and I did not edit them.

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
