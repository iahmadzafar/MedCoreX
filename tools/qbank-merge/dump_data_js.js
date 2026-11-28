#!/usr/bin/env node
/* Dump site/resources/medcore-question-bank/data.js to JSON so the Python
   merge pipeline can read it without a JS runtime.
   Usage: node tools/qbank-merge/dump_data_js.js [out-path] */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const SRC = path.join(ROOT, 'site', 'resources', 'medcore-question-bank', 'data.js');
const OUT = process.argv[2] || path.join(__dirname, 'data', 'canonical.json');

const src = fs.readFileSync(SRC, 'utf8') + '\n;globalThis.__X = { GROUPS, TIPS, SUBJECTS };';
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(src, sandbox);

const { GROUPS, TIPS, SUBJECTS } = sandbox.__X;
const total = SUBJECTS.reduce((a, s) => a + s.questions.length, 0);

if (total !== 6689) {
  console.error(`FATAL: expected 6689 canonical questions, got ${total}`);
  process.exit(1);
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify({ groups: GROUPS, tips: TIPS, subjects: SUBJECTS }));
console.log(`wrote ${OUT}: ${SUBJECTS.length} subjects, ${total} questions`);
