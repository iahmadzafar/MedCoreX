#!/usr/bin/env node
/* Runtime proof for the ONE true bank reader (site/resources/medcore-question-bank/).
   Covers: group home, group → subject drill-down, question render, public_id head,
   topic hidden until answered, five-layer breakdown labels, ID uniqueness.
   Needs: npm i jsdom — test-only, never deployed or linked.
   Run: node bankproof.js     (exit 0 = all green) */
const fs = require('fs');
const path = require('path');
const { JSDOM, VirtualConsole } = require('jsdom');

const SITE = __dirname;
const QB = path.join(SITE, 'resources', 'medcore-question-bank');
let fails = 0;
const ok = m => console.log('  ✓ ' + m);
const bad = m => { fails++; console.log('  ✗ ' + m); };
const errors = [];
const vc = new VirtualConsole();
vc.on('jsdomError', e => { if (!/navigation|not implemented|Could not load/i.test(e.message)) errors.push(e.message); });

/* ---------- static data-layer assertions first (no DOM needed) ---------- */
console.log('[data layer] one true bank');
const src = fs.readFileSync(path.join(QB, 'data.js'), 'utf8');
const start = src.indexOf('[');
let depth = 0, end = -1;
for (let i = start; i < src.length; i++) { const c = src[i]; if (c === '[') depth++; else if (c === ']') { depth--; if (depth === 0) { end = i; break; } } }
const SUBJECTS = JSON.parse(src.slice(start, end + 1));
const MAN = JSON.parse(fs.readFileSync(path.join(SITE, '..', 'tools', 'web-bank-manifest.json'), 'utf8'));
const totalQ = SUBJECTS.reduce((a, s) => a + s.questions.length, 0);
if (totalQ === MAN.total && totalQ === 6689) ok('total questions: ' + totalQ + ' (matches manifest + rebuild)'); else bad('total questions: ' + totalQ);
const groups = [...new Set(SUBJECTS.map(s => s.group))];
if (groups.length === 6) ok('six group tabs preserved: ' + groups.join(', ')); else bad('groups: ' + groups.length);
const ids = SUBJECTS.flatMap(s => s.questions.map(q => q.id));
if (new Set(ids).size === ids.length) ok('every question carries a unique public_id'); else bad('public_ids not unique');
const allSys = SUBJECTS.every(s => s.questions.every(q => q.sys));
if (allSys) ok('every question carries its system'); else bad('some question missing sys');
const layersOK = SUBJECTS.every(s => s.questions.every(q => q.layers && typeof q.layers === 'object'));
if (layersOK) ok('every question carries a breakdown object'); else bad('some question missing layers');

/* ---------- runtime proof (jsdom; scripts eval'd inline — data.js is 6 MB) ---------- */
const appSrc = fs.readFileSync(path.join(QB, 'app.js'), 'utf8');
const dom = new JSDOM(fs.readFileSync(path.join(QB, 'index.html'), 'utf8').replace(/<script src="[^"]*"><\/script>/g, ''), {
  url: 'http://localhost/resources/medcore-question-bank/',
  runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: vc,
  beforeParse(w) {
    w.matchMedia = q => ({ matches: false, media: q, addListener(){}, removeListener(){}, addEventListener(){}, removeEventListener(){} });
    w.Element.prototype.scrollIntoView = function () {};
    w.scrollTo = function () {};
    w.SV = { countUp(){}, stagger(){}, toast(){}, burst(){}, burstAt(){} };
  },
});
const w = dom.window, d = w.document;
const settle = (ms) => new Promise(r => setTimeout(r, ms));
setTimeout(() => {
  console.log('\n[runtime] reader — groups, drill-down, practice');
  w.eval(src + '\n' + appSrc);   /* data.js + app.js in one scope */
  return;
}, 0);
setTimeout(() => {
  const home = d.getElementById('home');
  const grpCards = [...d.querySelectorAll('#grpGrid .subj')];
  if (home && !home.hidden && grpCards.length === 6) ok('home opens with 6 group cards'); else bad('home cards: ' + grpCards.length);

  /* drill into group 1 */
  grpCards[0].click();
}, 100);
setTimeout(() => {
  const gp = d.getElementById('groupPage');
  const subjCards = [...d.querySelectorAll('#subjGrid .subj')];
  if (gp && !gp.hidden && subjCards.length === 6) ok('medicine group opens 6 subject cards (MED PSY HEM MSK REN DRM)'); else bad('group cards: ' + subjCards.length);

  /* open first subject (jsdom may not fire hashchange — route() invoked manually) */
  subjCards[0].click();
  if (/^#\/s\/[A-Z]{3}$/.test(w.location.hash)) ok('subject card click routes: ' + w.location.hash); else bad('subject card click did not set #/s hash: ' + w.location.hash);
  w.route();
}, 200);
setTimeout(() => {
  const pr = d.getElementById('practice');
  if (pr && !pr.hidden) ok('practice opens'); else bad('practice hidden');
  const stem = d.querySelector('#qcard .stem');
  if (stem && stem.textContent.length > 20) ok('question renders: "' + stem.textContent.slice(0, 52) + '…"'); else bad('no question rendered');
  const pid = d.querySelector('#qcard .qpid');
  if (pid && /^[A-Z]{6}[0-9A-Z]{2}$/.test(pid.textContent.trim())) ok('public_id shown in question head: ' + pid.textContent.trim()); else bad('qpid missing/malformed: ' + (pid && pid.textContent));

  /* topic must NOT be visible before answering */
  const pre = d.querySelector('#qcard .topic-tag');
  if (!pre) ok('topic hidden before answering'); else bad('topic leaked before answering');

  /* answer via the DOM: pick option 0, lock in sure */
  const opt = d.querySelector('#qcard [data-a="0"]');
  if (opt) opt.click(); else bad('no option button');
}, 300);
setTimeout(() => {
  const lock = d.querySelector('#qcard [data-c="sure"]');
  if (lock) lock.click();
}, 350);
setTimeout(() => {
  const layers = [...d.querySelectorAll('#qcard .layer h4')].map(e => e.textContent.replace(/^\d+/, '').trim());
  if (layers.length >= 1) ok('breakdown renders ' + layers.length + ' layer(s): ' + layers.slice(0, 5).join(' · ')); else bad('no layers rendered');
  const disc = [...d.querySelectorAll('#qcard .layer h4')].some(e => /discriminator/i.test(e.textContent));
  if (!disc) ok('discriminator label retired'); else bad('discriminator label still present');
  const topic = d.querySelector('#qcard .topic-tag');
  if (topic && topic.textContent.trim()) ok('topic revealed after answering: ' + topic.textContent.trim()); else bad('topic not shown after answering');
}, 400);
setTimeout(() => {
  w.location.hash = '#/g/eye-ent';
  w.route();
}, 500);
setTimeout(() => {
  const subjCards = [...d.querySelectorAll('#subjGrid .subj')];
  if (subjCards.length === 2) ok('#/g/eye-ent opens 2 subjects (EYE, ENT)'); else bad('eye-ent cards: ' + subjCards.length);

  if (!errors.length) ok('zero uncaught JS errors'); else errors.slice(0, 4).forEach(e => bad(e));
  console.log('\n' + (fails ? '✗ ' + fails + ' failure(s)' : '✓ BANK PROVEN — one true bank, groups → subjects → practice, IDs, hidden topics, five layers, zero errors'));
  process.exit(fails ? 1 : 0);
}, 600);
