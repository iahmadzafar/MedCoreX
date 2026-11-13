#!/usr/bin/env node
/* ============================================================
   MedCoreX · web-bank generator — the ONE true bank, webbed.
   Reads the canonical rebuild (MedCORE-6716-MCQs.txt), runs the
   exact MedCORE-Study pipeline (parse → classify → collapse),
   and emits:
     · site/resources/medcore-question-bank/data.js  (18 subjects × GROUPS)
     · hub-data/ + site/hub-data/  (new-truth derived records)
     · tools/web-bank-manifest.json (counts the proof gates eat)

   Re-runnable and deterministic: IDs are minted by (subject,
   system) bucket in qhash order, exactly like db.commitMerged.
   Do not hand-edit its outputs.
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PARSER_DIR = '/Users/ahmdzafr/Projects/MedCORE-Study/lib';
const SRC = '/Users/ahmdzafr/Library/Mobile Documents/com~apple~CloudDocs/MedCORE/MedCORE MCQs/MedCORE-6716-MCQs.txt';

const { parse } = require(path.join(PARSER_DIR, 'merged-parser.js'));
const T = require(path.join(PARSER_DIR, 'taxonomy.js'));

/* 18 subjects → the six preserved group tabs (owner-confirmed) */
const GROUPS = [
  { id: 'medicine', name: 'Medicine & Allied',        subjects: ['MED', 'PSY', 'HEM', 'MSK', 'REN', 'DRM'] },
  { id: 'surgery',  name: 'Surgery & Allied',         subjects: ['SRG'] },
  { id: 'eye-ent',  name: 'Eye & ENT',                subjects: ['EYE', 'ENT'] },
  { id: 'obgyn',    name: 'Obstetrics & Gynaecology', subjects: ['ONG'] },
  { id: 'paeds',    name: 'Paediatrics',              subjects: ['PED'] },
  { id: 'basic',    name: 'Basic Sciences',           subjects: ['ANT', 'PHY', 'PHM', 'PTH', 'BCH', 'CMM', 'FRM'] },
];

const die = (m) => { console.error('FATAL: ' + m); process.exit(1); };
const t0 = Date.now();

/* ---------- 1. parse the canonical bank ---------- */
const text = fs.readFileSync(SRC, 'utf8');
const { questions } = parse(text);
if (questions.length !== 6716) die(`expected 6716 parsed questions, got ${questions.length}`);
const hard = questions.filter(q => q.problems.some(p => p !== 'key_text_mismatch'));
if (hard.length) die('quality-gate failures: ' + JSON.stringify(hard.slice(0, 5).map(q => q.problems)));
console.log(`[parse] 6716 questions · ${Date.now() - t0}ms`);

/* ---------- 2. classify ---------- */
for (const q of questions) {
  const c = T.classify({ subjectLine: q.subjectLine, concept: q.concept, stem: q.stem });
  q.subject = c.subject; q.system = c.system; q.topic = c.topic;
}
if (new Set(questions.map(q => q.subject)).size !== Object.keys(T.SUBJECTS).length) die('not all subject codes present');
console.log('[classify] 18 subjects × ' + new Set(questions.map(q => q.system)).size + ' systems');

/* ---------- 3. commit in memory: reject → collapse → mint IDs ----------
   Mirrors db.commitMerged exactly (same richness, same bucket/seq rules). */
const richness = (q) =>
  (q.concept ? 8 : 0) + (q.explanation ? 4 : 0) +
  (q.others && Object.keys(q.others).length ? 4 : 0) +
  (q.trapNote ? 2 : 0) + (q.hook ? 2 : 0) +
  (q.options.length > 4 ? 1 : 0);
const best = new Map();
let rejected = 0;
for (const q of questions) {
  if (q.keyIndex == null) { rejected++; continue; }
  if (!q.stem || !Array.isArray(q.options) || q.options.length < 2
    || q.keyIndex < 0 || q.keyIndex >= q.options.length
    || q.options.some(o => typeof o !== 'string' || !o.trim())) { rejected++; continue; }
  const prev = best.get(q.qhash);
  if (!prev || richness(q) > richness(prev)) best.set(q.qhash, q);
}
const unique = [...best.values()];
const inFileDups = questions.length - rejected - unique.length;
console.log(`[commit] ${unique.length} unique · ${inFileDups} in-file dups collapsed · ${rejected} rejected`);

const buckets = {};
for (const q of unique) (buckets[q.subject + '|' + q.system] = buckets[q.subject + '|' + q.system] || []).push(q);

const rows = [];
const collapsedByHash = new Map();
/* collapse record: group raw parsed questions by qhash */
for (const q of questions) {
  if (q.keyIndex == null) continue;
  if (!q.stem || !Array.isArray(q.options) || q.options.length < 2) continue;
  (collapsedByHash.get(q.qhash) || collapsedByHash.set(q.qhash, []).get(q.qhash)).push(q);
}
const serializeRow = (q, publicId) => ({
  id: publicId,
  sys: q.system,
  topic: q.topic,
  q: q.stem,
  options: q.options,
  answer: q.keyIndex,
  layers: {
    concept: q.concept || '',
    hook: q.hook || '',
    trap: q.trapNote || '',
    rule: q.explanation || '',
    others: q.others && Object.keys(q.others).length ? q.others : {},
  },
  kc: (q.problems || []).includes('key_text_mismatch') ? 1 : undefined,
});

for (const key of Object.keys(buckets).sort()) {
  const [sc, sy] = key.split('|');
  const list = buckets[key].slice().sort((a, b) => a.qhash < b.qhash ? -1 : 1);
  const usedSeqs = new Set();
  for (const q of list) {
    let seq = 1;
    while (usedSeqs.has(seq)) seq++;
    usedSeqs.add(seq);
    const publicId = T.makePublicId(sc, sy, seq);
    rows.push({ _pid: publicId, _row: serializeRow(q, publicId), _q: q });
  }
}

const total = rows.length;
if (total + inFileDups + rejected !== 6716) die(`inserted+inFileDups+rejected != 6716 (${total}+${inFileDups}+${rejected})`);
const keyConflicts = rows.filter(r => r._row.kc === 1).length;
const ids = rows.map(r => r._pid);
if (new Set(ids).size !== ids.length) die('public_ids not unique');
const idOK = ids.every(id => /^[A-Z]{3}[A-Z]{3}[0-9A-Z]{2}$/.test(id));
if (!idOK) die('some public_ids malformed');

/* collapse record (27 pairs/clusters expected) */
const dups = [];
for (const [h, list] of collapsedByHash) {
  if (list.length < 2) continue;
  dups.push({
    n: list.length,
    subjects: [...new Set(list.map(q => q.subject))],
    stem: list[0].stem.slice(0, 160),
    kept: rows.find(r => r._q.qhash === h)._pid,
    dropped_variants: list.length - 1,
  });
}
if (dups.reduce((a, d) => a + d.dropped_variants, 0) !== inFileDups) die('collapse record does not sum to inFileDups');

/* ---------- 4. assemble data.js ---------- */
const subjectOrder = GROUPS.flatMap(g => g.subjects);
if (new Set(subjectOrder).size !== 18) die('group mapping does not cover all 18 subjects exactly once');
const bySubject = {};
for (const r of rows) (bySubject[r._q.subject] = bySubject[r._q.subject] || []).push(r._row);

const SUBJECTS = subjectOrder.map(code => ({
  id: code,
  name: T.SUBJECTS[code],
  group: GROUPS.find(g => g.subjects.includes(code)).id,
  questions: (bySubject[code] || []).map(row => {
    const o = { ...row };
    /* drop the correct letter from others — a wrong-answer explainer
       must never explain the right option (QC OTHERS_HAS_CORRECT) */
    const L = o.layers;
    if (L.others && L.others['ABCDE'[o.answer]] !== undefined) { delete L.others['ABCDE'[o.answer]]; }
    if (!Object.keys(L.others).length) delete L.others;
    /* layers without content are dropped so the reader renders only real layers */
    for (const k of Object.keys(L)) if (k !== 'others' && !String(L[k] || '').trim()) delete L[k];
    if (o.kc === undefined) delete o.kc;
    return o;
  }),
}));
const qCount = SUBJECTS.reduce((a, s) => a + s.questions.length, 0);
if (qCount !== total) die(`subject assembly lost questions (${qCount} != ${total})`);

const dataJs =
  '/* MedCORE Question Bank · data — THE ONE TRUE BANK.\n' +
  '   Source: MedCORE-6716-MCQs.txt (6716 blocks) parsed, classified and collapsed\n' +
  `   by tools/gen_web_bank.js · ${total} unique questions · 18 subjects x 16 systems\n` +
  `   · ${inFileDups} in-file duplicates collapsed · ${keyConflicts} key-conflict flags (kc).\n` +
  '   Question shape: { id: public_id, sys, topic, q, options, answer,\n' +
  '   layers: { concept, hook, trap, rule, others } }. Topics and layers stay\n' +
  '   hidden until the question is answered. Generated file — do not hand-edit. */\n' +
  'const SUBJECTS = ' + JSON.stringify(SUBJECTS) + ';\n' +
  'const GROUPS = ' + JSON.stringify(GROUPS) + ';\n' +
  'const TIPS = ["Commit before you check","Wrong answers are data","Space for next, 1 to 5 to answer","Concept before recall","Trap is in the wording","Rule out before ruling in","High-yield links compound","Confidence marks your real accuracy","Flags make the second pass"];\n';

const qbDir = path.join(ROOT, 'site', 'resources', 'medcore-question-bank');
fs.writeFileSync(path.join(qbDir, 'data.js'), dataJs);
console.log('[data.js] ' + (dataJs.length / 1048576).toFixed(1) + ' MB written');

/* ---------- 5. hub-data: the derived layer, new truth ---------- */
const bankKey = 'MEDCORE-6716';
const mcqBanks = {
  included: { [bankKey]: { name: 'MedCORE 6716 — canonical rebuild (post-taxonomy, IDed)', kind: 'canonical', tier: 'AUTH', count: total } },
  excluded: {},
};
const mcqIndex = rows.map(r => ({
  id: r._pid, subject: r._q.subject, system: r._q.system, topic: r._q.topic,
  stem: r._row.q, opts: r._row.options, c: r._row.answer,
  correct_letter: 'ABCDE'[r._row.answer],
  conflict: r._row.kc === 1 ? 'key_text_mismatch' : undefined,
}));
const topicMap = Object.entries(
  mcqIndex.reduce((m, q) => { const k = q.subject + '|' + q.topic; m[k] = (m[k] || 0) + 1; return m; }, {})
).map(([topic, n]) => ({ topic, n })).sort((a, b) => b.n - a.n);
const keyResolutions = {
  decisions: rows.filter(r => r._row.kc === 1).map(r => ({
    id: r._pid, check: 'key_text_mismatch', action: 'flagged',
    note: 'ANSWER letter does not match keyed option text — verify against source',
  })),
  applied: true,
};
const unspecified = mcqIndex.filter(q => /Unspecified/.test(q.topic)).length;
const breakdownMissing = SUBJECTS.reduce((a, s) => a + s.questions.filter(q => !Object.keys(q.layers).length).length, 0);
const verifyReport = {
  generated: new Date().toISOString(),
  source: path.basename(SRC),
  total,
  banks: [bankKey],
  tiers: ['AUTH'],
  topics: topicMap.length,
  topics_unspecified: unspecified,
  breakdown_missing: breakdownMissing,
  hard: [],
  soft: { key_text_mismatch: keyConflicts },
  duplicate_clusters: dups.length,
  duplicate_uids: dups.reduce((a, d) => a + d.n, 0),
  subjects: Object.fromEntries(SUBJECTS.map(s => [s.id, s.questions.length])),
  groups: Object.fromEntries(GROUPS.map(g => [g.id, g.subjects.reduce((a, c) => a + bySubject[c].length, 0)])),
};
let vrMd = '# MedCORE Hub — verify report (the one true bank)\n\n'
  + 'Generated: ' + verifyReport.generated + '\nSource: ' + verifyReport.source + '\n\n'
  + '- Total questions: ' + total + ' (6716 parsed − ' + inFileDups + ' in-file dups − ' + rejected + ' rejected)\n'
  + '- Structure: 18 subjects × 16 systems, public_id on every row\n'
  + '- Key conflicts flagged: ' + keyConflicts + ' (kc:1 in data.js)\n'
  + '- Duplicate clusters collapsed: ' + dups.length + '\n'
  + '- Topics needing review (Unspecified): ' + unspecified + '\n'
  + '- Questions with an empty breakdown (review queue): ' + breakdownMissing + '\n\n'
  + '## Groups\n' + GROUPS.map(g => '- ' + g.name + ': ' + g.subjects.join(', ') + ' — ' + verifyReport.groups[g.id] + ' questions').join('\n') + '\n';

for (const dir of [path.join(ROOT, 'hub-data'), path.join(ROOT, 'site', 'hub-data')]) {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'mcq_banks.json'), JSON.stringify(mcqBanks, null, 2) + '\n');
  fs.writeFileSync(path.join(dir, 'mcq_index.jsonl'), mcqIndex.map(q => JSON.stringify(q)).join('\n') + '\n');
  fs.writeFileSync(path.join(dir, 'topic_map.json'), JSON.stringify(topicMap, null, 2) + '\n');
  fs.writeFileSync(path.join(dir, 'duplicates.json'), JSON.stringify(dups, null, 2) + '\n');
  fs.writeFileSync(path.join(dir, 'key_resolutions.json'), JSON.stringify(keyResolutions, null, 2) + '\n');
  fs.writeFileSync(path.join(dir, 'verify_report.json'), JSON.stringify(verifyReport, null, 2) + '\n');
  fs.writeFileSync(path.join(dir, 'verify_report.md'), vrMd);
}
console.log('[hub-data] regenerated in both copies');

/* ---------- 6. catalog.json — kept in lockstep with assets/catalog.js ---------- */
const catSrc = fs.readFileSync(path.join(ROOT, 'site', 'assets', 'catalog.js'), 'utf8');
const items = [];
const re = /\{t:"([^"]+)",d:"([^"]*)",c:"([^"]+)",f:"([^"]+)",k:([0-9.]+)\}/g;
let m;
while ((m = re.exec(catSrc))) items.push({ t: m[1], d: m[2], c: m[3], f: m[4], k: parseFloat(m[5]) });
const cats = [...new Set(items.map(i => i.c))];
for (const dir of [path.join(ROOT, 'hub-data'), path.join(ROOT, 'site', 'hub-data')]) {
  fs.writeFileSync(path.join(dir, 'catalog.json'), JSON.stringify({ cats, items }, null, 2) + '\n');
}
console.log('[catalog.json] ' + items.length + ' items · ' + cats.length + ' cats');

/* ---------- 7. manifest — what the proof gates eat ---------- */
const manifest = {
  generated: verifyReport.generated,
  source: SRC,
  parsed: 6716,
  total,
  inFileDups,
  rejected,
  keyConflicts,
  duplicateClusters: dups.length,
  topicsUnspecified: unspecified,
  breakdownMissing,
  systems: new Set(mcqIndex.map(q => q.system)).size,
  buckets: new Set(mcqIndex.map(q => q.subject + '|' + q.system)).size,
  subjects: Object.fromEntries(SUBJECTS.map(s => [s.id, s.questions.length])),
  groups: verifyReport.groups,
  hooks: rows.filter(r => r._row.layers.hook).length,
};
fs.writeFileSync(path.join(__dirname, 'web-bank-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');

/* ---------- 8. stats-keys.js — gradeable truth for /stats, derived from the bank ---------- */
const statsJs =
  '/* MedCoreX · /stats grading truth — generated by tools/gen_web_bank.js from the one true bank. Do not hand-edit. */\n' +
  'const STATS_META=' + JSON.stringify(Object.fromEntries(SUBJECTS.map(s => [s.id, [s.name, '', s.questions.length]]))) + ';\n' +
  'const STATS_ORDER=' + JSON.stringify(subjectOrder) + ';\n' +
  'const STATKEYS=' + JSON.stringify(Object.fromEntries(SUBJECTS.map(s => [s.id, s.questions.map(q => q.answer)]))) + ';\n';
fs.writeFileSync(path.join(ROOT, 'site', 'stats-keys.js'), statsJs);
console.log('[stats-keys] ' + subjectOrder.length + ' subjects · grading truth derived');
console.log('[manifest] total=' + total + ' conflicts=' + keyConflicts + ' dups=' + inFileDups);
console.log('DONE in ' + ((Date.now() - t0) / 1000).toFixed(1) + 's');
