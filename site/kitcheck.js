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

for (const f of walk(SITE)) {
  const rel = path.relative(SITE, f);
  const src = fs.readFileSync(f, 'utf8');
  const kit = src.includes('studyverse.css');
  const bridge = src.includes('studyverse-bridge.css');
  if (!kit && !bridge) { fail(rel + ' — no kit or bridge link (off-theme page)'); continue; }
  const engine = src.includes('studyverse.js');
  if (!engine) { warns++; console.log('  ! ' + rel + ' — no studyverse.js (theme engine won\u2019t paint; link it or re-run kitify)'); }
  ok(rel + (kit ? ' (kit)' : ' (bridge)'));
}

console.log('\nkitcheck: ' + files + ' page(s) themed · ' + warns + ' without engine · ' +
  failures + ' unhittable');
if (failures) process.exit(1);
