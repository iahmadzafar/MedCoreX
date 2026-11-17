/* Stable-ID explanation overlay shared by the bank generator and patch tool. */
'use strict';

const REQUIRED_KEYS = ['hook', 'trap', 'rule', 'others'];

function applyExplanationOverrides(records, overrides) {
  const byId = new Map(records.map(record => [record.id, record]));
  if (byId.size !== records.length) throw new Error('question IDs are missing or duplicated');

  for (const [id, entry] of Object.entries(overrides)) {
    const target = byId.get(id);
    if (!target) throw new Error(`explanation override target is missing: ${id}`);
    if (!entry.identity || target.q !== entry.identity.stem
      || JSON.stringify(target.options) !== JSON.stringify(entry.identity.options)
      || target.answer !== entry.identity.answer)
      throw new Error(`question identity/options/key do not match the validated override: ${id}`);
    if (!Array.isArray(entry.sources) || !entry.sources.length
      || entry.sources.some(source => typeof source !== 'string' || !source.trim()))
      throw new Error(`explanation override needs source notes: ${id}`);
    if (!entry.layers || Object.keys(entry.layers).length !== REQUIRED_KEYS.length
      || REQUIRED_KEYS.some(key => !Object.prototype.hasOwnProperty.call(entry.layers, key)))
      throw new Error(`explanation override must supply exactly ${REQUIRED_KEYS.join(', ')}: ${id}`);
    if (!target.layers || typeof target.layers !== 'object')
      throw new Error(`question has no layers object: ${id}`);

    const normalized = value => value && typeof value === 'object' && !Array.isArray(value)
      ? JSON.stringify(Object.fromEntries(Object.entries(value).sort(([a], [b]) => a.localeCompare(b))))
      : JSON.stringify(value);
    const alreadyApplied = REQUIRED_KEYS.every(key => normalized(target.layers[key]) === normalized(entry.layers[key]));
    if (alreadyApplied) continue;

    for (const key of ['hook', 'trap', 'rule']) {
      const value = entry.layers[key];
      if (typeof value !== 'string' || !value.trim()) throw new Error(`empty ${key} override: ${id}`);
      const existing = target.layers[key];
      if (typeof existing === 'string' && existing.trim() && existing !== value)
        throw new Error(`refusing to overwrite existing ${key}: ${id}`);
    }

    const distractors = entry.layers.others;
    if (!distractors || Array.isArray(distractors) || typeof distractors !== 'object')
      throw new Error(`distractor analysis must be an option-letter object: ${id}`);
    const answerLetter = 'ABCDE'[target.answer];
    const expectedDistractors = target.options
      .map((_, index) => 'ABCDE'[index])
      .filter(letter => letter !== answerLetter)
      .sort();
    const suppliedDistractors = Object.keys(distractors).sort();
    if (JSON.stringify(suppliedDistractors) !== JSON.stringify(expectedDistractors))
      throw new Error(`distractor coverage does not match options for ${id}`);
    if (Object.values(distractors).some(text => typeof text !== 'string' || !text.trim()))
      throw new Error(`empty distractor explanation: ${id}`);
    if (target.layers.others && Object.keys(target.layers.others).length
      && normalized(target.layers.others) !== normalized(distractors))
      throw new Error(`refusing to overwrite existing distractor analysis: ${id}`);

    Object.assign(target.layers, entry.layers);
  }

  return Object.keys(overrides).length;
}

module.exports = { applyExplanationOverrides };
