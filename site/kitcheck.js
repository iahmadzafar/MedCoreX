#!/usr/bin/env node
/* Kit gate: every page that loads must wear the home theme.
   Every HTML in site/ must link either the kit
   (/assets/studyverse.css) or the bridge
   (/assets/studyverse-bridge.css). Anything else fails the
   deploy — a page can never silently fall back to its own
   private theme again.

   Run: node kitcheck.js   (exit 0 = all pages themed, 1 = gaps)
   Needs: node only — no packages. Test-only: never deployed.
   Runs in CI right after scriptproof.js. */
const fs = require('fs');
const path = require('path');

const SITE = path.resolve(__dirname);
let files = 0, failures = 0, warns = 0;
const fail = (m) => { failures++; console.log('  ✗ ' + m); };
const ok = (m) => { files++; console.log('  ✓ ' + m); };

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue;
    if (e.isDirectory()) { walk(path.join(dir, e.name), out); continue; }
    if (/\.bak-/.test(e.name) || e.name === '.DS_Store') continue;
    if (e.name.endsWith('.html')) out.push(path.join(dir, e.name));
  }
  return out;
}

/* Exempted Nov 3 by owner verdict — originally twenty pre-resign pages:
   the palette-only bridge was "the same cheap trick" for the systems books
   AND the standalone pages. Converted pages are removed from this list as
   real per-page kit conversions land (pattern: forge-master, cbf48fa). */
const EXEMPT = [
  /* remaining standalone pages (were bridge consumers, reverted to pre-bridge bytes) */
  'medcore-cheat-card.html',
  'medcore-memory-master-core.html',
  'medcore-recall-sheets-repeat-offenders.html',
  'nre-recall-sheets-repeat-offenders.html',
  'qbank-logic-first-high-yield-logic-first-high-yield-bank.html',
  'standalone-htmls-800-plus-mcq-architecture.html',
  'standalone-htmls-disease-symptom-clusters.html',
  'standalone-htmls-prediction-sheet-1-high-yield-topic-pool.html',
  /* ten systems books (struck first, same verdict) */
  'medcore-systems-cardiology-cardiology-medcore.html',
  'medcore-systems-dermatology-dermatology-medcore.html',
  'medcore-systems-ent-ent-medcore.html',
  'medcore-systems-gynecology-gynecology-medcore.html',
  'medcore-systems-neurology-neurology-medcore.html',
  'medcore-systems-obstetrics-obstetrics-medcore.html',
  'medcore-systems-ophthalmology-ophthalmology-medcore.html',
  'medcore-systems-pediatrics-pediatrics-medcore.html',
  'medcore-systems-respiratory-respiratory-medcore.html',
  'medcore-systems-urology-urology-medcore.html',
];

for (const f of walk(SITE)) {
  const rel = path.relative(SITE, f);
  const src = fs.readFileSync(f, 'utf8');
  if (EXEMPT.includes(path.basename(f))) {
    console.log('  ~ ' + rel + ' (exempt: pre-resign, owner-ruled Nov 3)');
    files++;
    continue;
  }
  const kit = src.includes('studyverse.css');
  const bridge = src.includes('studyverse-bridge.css');
  if (!kit && !bridge) { fail(rel + ' — no kit or bridge link (off-theme page)'); continue; }
  const engine = src.includes('studyverse.js');
  if (!engine) { warns++; console.log('  ! ' + rel + ' — no studyverse.js (theme engine won\u2019t paint; link it or re-run kitify)'); }
  ok(rel + (kit ? ' (kit)' : ' (bridge)'));
}

console.log('\nkitcheck: ' + files + ' page(s) themed · ' + warns + ' without engine · ' +
  failures + ' unhittable · ' + EXEMPT.length + ' exempted (debt)');
if (failures) process.exit(1);
