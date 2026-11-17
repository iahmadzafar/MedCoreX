#!/usr/bin/env node
/* Apply evidence-linked stable-ID explanations to the current generated bank
   without rebuilding or reordering its questions. */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { applyExplanationOverrides } = require('./qbank-explanations');

const ROOT = path.resolve(__dirname, '..');
const dataPath = path.join(ROOT, 'site', 'resources', 'medcore-question-bank', 'data.js');
const overridesPath = path.join(__dirname, 'qbank-explanation-overrides.json');
const source = fs.readFileSync(dataPath, 'utf8');
const overrides = JSON.parse(fs.readFileSync(overridesPath, 'utf8'));
const context = {};

vm.runInNewContext(`${source}\nthis.__subjects = SUBJECTS;`, context, { timeout: 10000 });
const subjects = context.__subjects;
if (!Array.isArray(subjects)) throw new Error('generated question bank did not expose SUBJECTS');

const records = subjects.flatMap(subject => subject.questions);
const original = new Map(Object.entries(overrides).map(([id]) => {
  const index = records.findIndex(question => question.id === id);
  if (index < 0) throw new Error(`question ID not found in generated bank: ${id}`);
  const question = records[index];
  return [id, {
    index,
    id: question.id,
    q: question.q,
    options: JSON.stringify(question.options),
    answer: question.answer,
  }];
}));

const count = applyExplanationOverrides(records, overrides);
for (const [id, before] of original) {
  const question = records[before.index];
  if (question.id !== before.id || question.q !== before.q
    || JSON.stringify(question.options) !== before.options || question.answer !== before.answer)
    throw new Error(`question identity, order, options, or key changed while applying ${id}`);
}

const marker = 'const SUBJECTS = ';
const start = source.indexOf(marker);
const end = source.indexOf(';\nconst GROUPS =', start);
if (start < 0 || end < 0) throw new Error('could not locate generated SUBJECTS block');
const updated = source.slice(0, start)
  + marker + JSON.stringify(subjects)
  + source.slice(end);

fs.writeFileSync(dataPath, updated);
console.log(`Applied ${count} explanation overrides; IDs, order, options, and answer keys unchanged.`);
