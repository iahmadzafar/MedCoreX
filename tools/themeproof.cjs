#!/usr/bin/env node
'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const engine = fs.readFileSync(path.join(__dirname, '../site/assets/studyverse.js'), 'utf8');

function initialTheme({ systemLight = false, mxMode, legacyMode, mlxTheme, matchMediaMissing = false, matchMediaThrows = false, storageBlocked = false } = {}) {
  const attributes = new Map();
  const root = {
    dataset: {},
    setAttribute(name, value) {
      attributes.set(name, String(value));
      if (name === 'data-theme') this.dataset.theme = String(value);
    },
    getAttribute(name) {
      return attributes.has(name) ? attributes.get(name) : null;
    }
  };
  const values = new Map();
  if (mxMode) values.set('mx-mode', mxMode);
  if (legacyMode) values.set('medcore.theme', legacyMode);
  if (mlxTheme) values.set('mlx-theme', mlxTheme);
  const localStorage = storageBlocked ? {
    getItem() { throw new Error('storage blocked'); },
    setItem() { throw new Error('storage blocked'); }
  } : {
    getItem(key) { return values.has(key) ? values.get(key) : null; },
    setItem(key, value) { values.set(key, String(value)); }
  };
  const document = {
    documentElement: root,
    readyState: 'loading',
    getElementById() { return null; },
    addEventListener() {},
    dispatchEvent() { return true; }
  };
  const context = {
    document,
    localStorage,
    CustomEvent: class CustomEvent {
      constructor(type, init) { this.type = type; this.detail = init && init.detail; }
    },
    MutationObserver: class MutationObserver {
      observe() {}
    },
    addEventListener() {}
  };
  context.window = context;
  if (!matchMediaMissing) {
    context.matchMedia = context.window.matchMedia = query => {
      if (matchMediaThrows) throw new Error('matchMedia blocked');
      return {
        matches: query === '(prefers-color-scheme: light)' && systemLight,
        media: query
      };
    };
  }

  vm.runInNewContext(engine, context, { filename: 'studyverse.js' });
  return { theme: root.dataset.theme, mode: root.getAttribute('data-mode') };
}

function expectTheme(name, options, expected) {
  const actual = initialTheme(options);
  assert.equal(actual.theme, expected, name + ': data-theme');
  assert.equal(actual.mode, expected, name + ': data-mode');
  console.log('✓ ' + name);
}

expectTheme('system light is used without a saved mode', { systemLight: true }, 'light');
expectTheme('system dark remains dark without a saved mode', { systemLight: false }, 'dark');
expectTheme('mx-mode overrides system', { systemLight: true, mxMode: 'dark' }, 'dark');
expectTheme('invalid mx-mode falls through to legacy preference', { systemLight: false, mxMode: 'invalid', legacyMode: 'light' }, 'light');
expectTheme('legacy medcore.theme overrides system', { systemLight: false, legacyMode: 'light' }, 'light');
expectTheme('migrating mlx-theme overrides system', { systemLight: false, mlxTheme: 'light' }, 'light');
expectTheme('missing matchMedia defaults dark', { matchMediaMissing: true }, 'dark');
expectTheme('throwing matchMedia defaults dark', { matchMediaThrows: true }, 'dark');
expectTheme('blocked storage still uses system light', { systemLight: true, storageBlocked: true }, 'light');
