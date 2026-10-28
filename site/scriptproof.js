#!/usr/bin/env node
/* Script proof: every inline <script> in every HTML file must parse, and so must
   every standalone .js and .json/.jsonl in the repo (site, hub, admin, functions,
   the standalone sub-apps — the full system, not just one folder).

   Why this exists: one raw newline inside a quoted JS string silently kills an
   entire <script> block at parse time. The page still "loads", but every line of
   that script is dead — sections that start at opacity:0 never become visible and
   the page renders incomplete. Syntax errors do not show up as network errors, so
   nothing else catches them before they ship.

   Run: node scriptproof.js     (exit 0 = all green, exit 1 = something is broken)
   Needs: node only — no packages. Test-only: never deployed, never linked. */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const SKIP_DIRS = new Set(['.git', 'node_modules', '.wrangler', '.claude', '.opencode']);
const JS_TYPES = new Set(['', 'text/javascript', 'application/javascript', 'module']);

let files = 0, blocks = 0, failures = 0;
const fail = (m) => { failures++; console.log('  ✗ ' + m); };
const ok = (m) => console.log('  ✓ ' + m);

/* ── walk ── */
function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') && e.isDirectory() && SKIP_DIRS.has(e.name)) continue;
    if (e.isDirectory()) { if (!SKIP_DIRS.has(e.name)) walk(path.join(dir, e.name), out); continue; }
    if (/\.bak-/.test(e.name) || e.name === '.DS_Store') continue;
    out.push(path.join(dir, e.name));
  }
  return out;
}
const rel = (p) => path.relative(ROOT, p);

/* ── parse check: feed the code to node --check over stdin, so line numbers in
      the error are relative to the snippet; map them back to the real file. ── */
function parseCheck(code, kind, file, lineOffset) {
  const r = spawnSync(process.execPath, ['--check', '--input-type=' + kind], { input: code, encoding: 'utf8' });
  if (r.status === 0) return;
  const msg = (r.stderr || '').trim().split('\n');
  const syn = (msg.find(l => /SyntaxError/.test(l)) || 'syntax error').trim();
  // node labels stdin input as [stdin]:N — that N is the line inside the snippet,
  // so shift it by the snippet's start line to report the real file line.
  const loc = msg.find(l => /\[stdin\]:\d+/.test(l)) || msg.find(l => l.includes(path.basename(file)));
  const m = loc && loc.match(/:(\d+)/);
  const where = m ? '  → line ' + (lineOffset + parseInt(m[1], 10)) + ':'
                  : (lineOffset ? '  → from line ' + lineOffset + ':' : '');
  fail(rel(file) + '\n     ' + syn.trim().replace(/\s+/g, ' ') + where);
}

/* ═══ [1] inline <script> blocks in every HTML file ═══ */
const htmlFiles = walk(ROOT).filter(f => /\.html?$/i.test(f));
let htmlBlocks = 0;
for (const f of htmlFiles) {
  const src = fs.readFileSync(f, 'utf8');
  let m, hadBad = false;
  const re = /<script([^>]*)>([\s\S]*?)<\/script>/gi;
  while ((m = re.exec(src))) {
    const attrs = m[1] || '';
    if (/\bsrc\s*=/i.test(attrs)) continue;               // external file — checked on its own
    const t = (attrs.match(/type\s*=\s*["']([^"']*)["']/i) || [])[1] || '';
    if (!JS_TYPES.has(t.trim().toLowerCase())) continue;  // application/json etc.
    const before = failures;
    const lineOffset = src.slice(0, m.index).split('\n').length - 1;
    parseCheck(m[2], /module/i.test(t) ? 'module' : 'commonjs', f, lineOffset);
    htmlBlocks++;
    if (failures > before) hadBad = true;
  }
  files++;
}
ok(htmlFiles.length + ' HTML files · ' + htmlBlocks + ' inline script blocks parse');

/* ═══ [2] every standalone .js in the repo ═══ */
const jsFiles = walk(ROOT).filter(f => /\.m?js$/i.test(f));
let jsOk = 0;
for (const f of jsFiles) {
  const src = fs.readFileSync(f, 'utf8');
  const kind = /^\s*(import\s|export\s|import\()/m.test(src) ? 'module' : 'commonjs';
  const before = failures;
  parseCheck(src, kind, f, 0);
  files++;
  if (failures === before) jsOk++;
}
ok(jsFiles.length + ' JavaScript files parse · ' + jsOk + ' clean');

/* ═══ [3] every .json / .jsonl in the repo (hub data, catalogues) ═══ */
const dataFiles = walk(ROOT).filter(f => /\.jsonl?$/i.test(f));
let dataOk = 0, records = 0;
for (const f of dataFiles) {
  const src = fs.readFileSync(f, 'utf8');
  const before = failures;
  try {
    if (/\.jsonl$/i.test(f)) {
      src.split('\n').forEach((line, i) => {
        if (!line.trim()) return;
        records++;
        JSON.parse(line);                       // throws with no file:line → caught below
      });
    } else {
      JSON.parse(src);
      records++;
    }
  } catch (e) {
    const lm = String(e.message).match(/position (\d+)/);
    let line = '';
    if (lm) line = '  → line ' + (src.slice(0, parseInt(lm[1], 10)).split('\n').length) + ': ';
    fail(rel(f) + '\n     ' + line + String(e.message).replace(/\s+/g, ' ').slice(0, 140));
  }
  files++;
  if (failures === before) dataOk++;
}
ok(dataFiles.length + ' JSON/JSONL files parse · ' + dataOk + ' clean · ' + records + ' records');

console.log('\nscriptproof: ' + files + ' files, ' + (htmlBlocks + jsOk) + ' script units checked, ' + failures + ' failure' + (failures === 1 ? '' : 's'));
process.exit(failures ? 1 : 0);
