#!/usr/bin/env node
/* Nav gate: the topbar never names the page you are on.
   Owner ruling, 3 Nov 2026 — "never ever include the name of page
   in the a#nav for all pages".

   Two rules, both enforced:

   1. STATIC — no nav link's label may contain the name of the page
      it sits in. The page's own name comes from its <title>: the
      generic words (medcorex, practice, sign in, …) are dropped and
      what remains is the page's name ("question bank", "fresh mock
      bank", "study book"). If a nav label contains that name, the
      page is naming itself in its own topbar — fail.

      Shell destinations (Home · Library · About · FAQ · Stats ·
      Sign in) are the site nav and are allowed everywhere; the rule
      is about a page labelling ITSELF, not about linking elsewhere.

   2. DYNAMIC — no script may write the text of a nav link. A label
      set from a variable is a label that names the current subject,
      paper or question set the moment you open it ("June 2024 ·
      Recall Defects") — exactly what the ruling forbids.

   Run: node navcheck.js   (exit 0 = clean, 1 = violations)
   Needs: node only. Test-only: never deployed. Runs in CI right
   after kitcheck.js. */
const fs = require('fs');
const path = require('path');

const SITE = path.resolve(__dirname);
let files = 0, failures = 0;
const fail = (m) => { failures++; console.log('  ✗ ' + m); };
const ok = (m) => { files++; console.log('  ✓ ' + m); };

/* Words that are furniture, not identity. Dropped from a page's
   <title> before its name is derived. */
const GENERIC = new Set([
  'medcorex', 'medcore', 'the', 'of', 'and', 'a', 'an', 'page', 'hub',
  'complete', 'practice', 'sign', 'in', 'home', 'library', 'about', 'faq',
  'stats', 'keyhole', 'account', 'subjects', 'papers', 'sets', 'mocks',
  'review', 'quiz', 'tests', 'login', 'create',
]);

const norm = (s) => String(s || '')
  .replace(/&[a-z]+;/gi, ' ')
  .replace(/<[^>]*>/g, ' ')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, ' ')
  .trim();

/* naive singular — enough to catch "Papers" vs "Paper" */
const sing = (t) => (t.length > 3 && /s$/.test(t) && !/ss$/.test(t)) ? t.slice(0, -1) : t;

const tokens = (s) => norm(s).split(/\s+/).filter(Boolean).map(sing);

/* the page's own name = the title minus the generic words */
function pageName(title) {
  const t = tokens(title).filter((w) => !GENERIC.has(w));
  return t.join(' ').trim();
}

/* does the label contain the name, as words? */
function containsName(label, name) {
  if (!name) return false;
  const hay = ' ' + tokens(label).join(' ') + ' ';
  return hay.includes(' ' + name + ' ');
}

function walk(dir, out = [], exts = ['.html', '.js']) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name === 'node_modules') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { walk(p, out, exts); continue; }
    if (/\.bak-/.test(e.name) || e.name === '.DS_Store') continue;
    if (exts.includes(path.extname(e.name))) out.push(p);
  }
  return out;
}

/* ══════════════════════ RULE 1 · static labels ══════════════════════ */
const htmlFiles = walk(SITE, [], ['.html']);
for (const f of htmlFiles) {
  const rel = path.relative(SITE, f);
  const src = fs.readFileSync(f, 'utf8');
  const navs = src.match(/<nav class="links"[\s\S]*?<\/nav>/g);
  if (!navs || !navs.length) { files++; continue; }
  const title = (src.match(/<title>([\s\S]*?)<\/title>/) || [, ''])[1];
  const name = pageName(title);
  if (!name) { files++; continue; }
  let bad = 0;
  for (const nav of navs) {
    const links = nav.match(/<a\b[^>]*>[\s\S]*?<\/a>/g) || [];
    for (const a of links) {
      const label = a.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
      if (!label) continue;
      if (containsName(label, name)) {
        fail(rel + ' — nav link "' + label + '" names this page ("' + title.trim() + '")');
        bad++;
      }
    }
  }
  if (!bad) ok(rel + (name ? ' — nav is clear of "' + name + '"' : ''));
}

/* ══════════════════════ RULE 2 · dynamic labels ══════════════════════ */
const DYNAMIC = [
  /* $( '#navX' ).textContent = … / .innerHTML = … */
  /\$\(\s*['"]#nav[^'"]*['"]\s*\)\s*\.\s*(textContent|innerHTML)\s*=/g,
  /querySelector\(\s*['"]#nav[^'"]*['"]\s*\)\s*\.\s*(textContent|innerHTML)\s*=/g,
  /* alias: const np = $('#navPractice'); np.textContent = … */
  /\b(\w+)\s*=\s*\$\(\s*['"]#nav[^'"]*['"]/g,
  /* links inside .links written by script */
  /querySelectorAll\(\s*['"]\.links[^'"]*['"]\s*\)\s*\[\s*[^]]+\]\s*\.\s*(textContent|innerHTML)\s*=/g,
];

const jsFiles = walk(SITE, [], ['.js']);
const scanTargets = jsFiles
  .filter((p) => path.basename(p) !== 'navcheck.js')   /* the checker never scans itself */
  .map((p) => ({ path: p, src: fs.readFileSync(p, 'utf8'), inline: false }));
for (const f of htmlFiles) {
  const src = fs.readFileSync(f, 'utf8');
  const blocks = src.match(/<script\b[^>]*>[\s\S]*?<\/script>/g) || [];
  blocks.forEach((b, i) => scanTargets.push({ path: f + ' [inline script ' + (i + 1) + ']', src: b, inline: true }));
}

for (const t of scanTargets) {
  const rel = path.relative(SITE, t.path);
  let bad = 0;
  for (const re of DYNAMIC) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(t.src)) !== null) {
      const whole = m[0];
      const isAliasDecl = /^\w+\s*=\s*\$\(\s*['"]#nav/.test(whole);
      if (isAliasDecl) {
        /* the alias declaration is fine — the WRITE is the violation */
        const alias = m[1];
        const write = new RegExp('\\b' + alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*\\.\\s*(textContent|innerHTML)\\s*=');
        const line = t.src.slice(0, m.index).split('\n').length;
        if (write.test(t.src)) {
          fail(rel + ' — a script writes nav link text (' + alias + '.textContent, line ~' + line + ')');
          bad++;
        }
        continue;
      }
      const line = t.src.slice(0, m.index).split('\n').length;
      fail(rel + ' — a script writes nav link text (line ~' + line + ': ' + whole.trim() + ')');
      bad++;
    }
  }
  if (!bad) ok(rel + ' — no script writes nav labels');
}

console.log('\nnavcheck: ' + files + ' page(s) checked · ' + failures + ' violation(s)');
if (failures) process.exit(1);
