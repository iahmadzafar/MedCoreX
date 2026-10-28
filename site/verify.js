#!/usr/bin/env node
/* MedCORE Hub — verify inline catalog + files on disk + library router rules.
   Run: node verify.js  (exit 0 = all green, exit 1 = regressions found)
   Rewritten for the current inline-catalog design (no var DATA in index.html). */
const fs = require('fs');
const path = require('path');

const SITE = __dirname;
const ROOT = path.join(__dirname, '..');
const RES = path.join(SITE, 'resources');
let failures = 0;
const fail = (m) => { failures++; console.log('  ✗ ' + m); };
const ok = (m) => console.log('  ✓ ' + m);

console.log('\n[1] inline catalog in library.html + index.html');
const extractItems = (html) => {
  const items = [];
  const re = /\{t:"([^"]+)",d:"([^"]*)",c:"([^"]+)",f:"([^"]+)",k:([0-9.]+)\}/g;
  let m;
  while((m=re.exec(html))){
    items.push({t:m[1],d:m[2],c:m[3],f:m[4],k:parseFloat(m[5])});
  }
  return items;
};
const libHtml = fs.readFileSync(path.join(SITE,'library.html'),'utf8');
const idxHtml = fs.readFileSync(path.join(SITE,'index.html'),'utf8');
const libItems = extractItems(libHtml);
const idxItems = extractItems(idxHtml);
ok('library.html: ' + libItems.length + ' items parsed');
ok('index.html: ' + idxItems.length + ' items parsed');
if(libItems.length === idxItems.length) ok('index and library item counts match');
else fail('index and library counts differ (' + idxItems.length + ' vs ' + libItems.length + ')');
const libKeys = new Set(libItems.map(i=>i.f));
const idxKeys = new Set(idxItems.map(i=>i.f));
if(libItems.length===idxItems.length && [...libKeys].every(k=>idxKeys.has(k))) ok('index and library catalogs are identical');
else fail('index and library catalogs differ');

const titles = libItems.map(i=>i.t);
const dups = titles.filter((t,i)=>titles.indexOf(t)!==i);
if(dups.length===0) ok('no duplicate titles');
else fail('duplicate titles: ' + [...new Set(dups)].join(', '));

console.log('\n[2] hub-data/catalog.json sync');
const catPath = fs.existsSync(path.join(SITE,'hub-data','catalog.json'))
  ? path.join(SITE,'hub-data','catalog.json')
  : (fs.existsSync(path.join(ROOT,'hub-data','catalog.json')) ? path.join(ROOT,'hub-data','catalog.json') : null);
if(catPath){
  const cat = JSON.parse(fs.readFileSync(catPath,'utf8'));
  const catKeys = new Set((cat.items||[]).map(i=>i.f));
  const missing = libItems.filter(i=>!catKeys.has(i.f)).map(i=>i.f);
  const extra = (cat.items||[]).filter(i=>!libKeys.has(i.f)).map(i=>i.f);
  if(missing.length===0) ok('catalog.json has all library items');
  else fail('catalog.json missing: ' + missing.join(', '));
  if(extra.length===0) ok('catalog.json has no extra items vs library');
  else fail('catalog.json extra vs library: ' + extra.join(', '));
  const catCats = cat.cats || [];
  const libCats = [...new Set(libItems.map(i=>i.c))];
  if(JSON.stringify(catCats.slice().sort())===JSON.stringify(libCats.slice().sort())) ok('catalog.json cats match library categories');
  else fail('catalog cats differ: cat=' + catCats.join('|') + ' vs lib=' + libCats.join('|'));
}else{
  fail('hub-data/catalog.json missing');
}

console.log('\n[3] files on disk under site/resources');
const missingFiles = libItems.filter(it=>{
  const base = it.f;
  if(fs.existsSync(path.join(RES, base))) return false;
  if(fs.existsSync(path.join(RES, base.replace(/\.html$/i,'')))) return false;
  return true;
});
if(missingFiles.length===0) ok('every catalog entry has a file or folder under site/resources');
else fail('missing files/folders for: ' + missingFiles.map(i=>i.f).join(', '));

console.log('\n[4] library.html router rules (single-file shelves)');
const CATS = ["Core Books","Mocks & Drills","Past Papers & Answer Keys","Exam Intelligence & Strategy","Quick Reference","Frameworks & Interactive","MedCORE Systems"];
const single = CATS.filter(c=>libItems.filter(i=>i.c===c).length===1);
if(single.includes('Mocks & Drills') && single.includes('Frameworks & Interactive')) ok('single-file shelves detected (Mocks & Drills, Frameworks & Interactive)');
else fail('single-file shelves unexpected: ' + single.join(', '));
if(/const DIRECT\s*=/.test(libHtml)) ok('DIRECT map present for single-file shelves');
else fail('DIRECT map missing');
if(/location\.replace\(DIRECT\[id\]\)/.test(libHtml)) ok('old hashes redirect via location.replace');
else fail('hash redirect missing');
if(libHtml.includes('role="group"')) ok('catbar role=group (allows link chips)');
else fail('catbar role should be group');
if(/catbar\.querySelectorAll\('button\.chip'\)/.test(libHtml)) ok('chip click handler scoped to button.chip');
else fail('chip handler not scoped');

console.log('\n[5] design-kit constraints');
if(/Never print file sizes with file names/.test(fs.readFileSync(path.join(ROOT,'AGENTS.md'),'utf8'))) ok('file-size rule present in AGENTS.md');
else fail('file-size rule missing');
const wf = fs.readFileSync(path.join(ROOT,'.github/workflows/deploy.yml'),'utf8');
if(wf.includes('libproof.js')) ok('libproof.js registered in deploy prune');
else fail('libproof.js not in deploy prune');
if(wf.includes('scriptproof.js')) ok('scriptproof.js registered in deploy prune');
else fail('scriptproof.js not in deploy prune');
if(/node site\/scriptproof\.js/.test(wf)) ok('scriptproof runs as a deploy gate');
else fail('scriptproof is not run before deploy');
if(fs.readFileSync(path.join(SITE,'deploy.sh'),'utf8').includes('scriptproof.js')) ok('scriptproof.js excluded from manual deploy staging');
else fail('scriptproof.js not excluded in deploy.sh');

console.log(failures ? '\n' + failures + ' FAILURE(S)\n' : '\nALL GREEN\n');
process.exit(failures ? 1 : 0);
