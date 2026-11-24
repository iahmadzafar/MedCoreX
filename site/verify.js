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

console.log('\n[1] shared catalog in assets/catalog.js');
const extractItems = (src) => {
  const items = [];
  const re = /\{t:"([^"]+)",d:"([^"]*)",c:"([^"]+)",f:"([^"]+)",k:([0-9.]+)\}/g;
  let m;
  while((m=re.exec(src))){
    items.push({t:m[1],d:m[2],c:m[3],f:m[4],k:parseFloat(m[5])});
  }
  return items;
};
const catJs = fs.readFileSync(path.join(SITE,'assets','catalog.js'),'utf8');
const libHtml = fs.readFileSync(path.join(SITE,'library.html'),'utf8');
const idxHtml = fs.readFileSync(path.join(SITE,'index.html'),'utf8');
const libItems = extractItems(catJs);
const idxItems = libItems;
ok('assets/catalog.js: ' + libItems.length + ' items parsed');
if(!libHtml.includes('/assets/catalog.js')) fail('library.html does not load assets/catalog.js');
else ok('library.html loads assets/catalog.js');
if(!idxHtml.includes('/assets/catalog.js')) fail('index.html does not load assets/catalog.js');
else ok('index.html loads assets/catalog.js');
if(!/const Items\s*=/.test(libHtml) && !/const Items\s*=/.test(idxHtml)) ok('no duplicated Items list left in either page');
else fail('a page still declares its own const Items (must live only in assets/catalog.js)');

const titles = libItems.map(i=>i.t);
const dups = titles.filter((t,i)=>titles.indexOf(t)!==i);
if(dups.length===0) ok('no duplicate titles');
else fail('duplicate titles: ' + [...new Set(dups)].join(', '));
const libKeys = new Set(libItems.map(i=>i.f));

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
const perCount = Object.fromEntries(CATS.map(c=>[c, libItems.filter(i=>i.c===c).length]));
const single = CATS.filter(c=>perCount[c]===1);
/* Router is data-driven: DIRECT is built at runtime for whichever shelves are
   single-file, so the check is consistency, not a hardcoded shelf list —
   a shelf can vacate/register as the catalog grows (e.g. Mocks & Drills is
   currently single-file with M06 Question Bank). */
if(single.length === 0){
  ok('no single-file shelves (every shelf has a picker)');
}else{
  /* DIRECT is composed at runtime from the same slug function for whichever
     shelves are single-file — wiring is consistency, not a hardcoded list */
  if(/if\(its\.length===1\)DIRECT\[slug\(c\)\]=href\(its\[0\]\)/.test(libHtml.replace(/\s+/g,'')))
    ok('single-file shelf wiring intact — shelves: ' + single.join(', '));
  else fail('single-file shelf exists (' + single.join(', ') + ') but runtime DIRECT composition not found');
}
if(/const DIRECT\s*=/.test(libHtml)) ok('DIRECT map present for single-file shelves');
else fail('DIRECT map missing');
if(/location\.replace\(DIRECT\[id\]\)/.test(libHtml)) ok('old hashes redirect via location.replace');
else fail('hash redirect missing');
if(!/class="catbar"/.test(libHtml) && !/catbar/.test(libHtml)) ok('catbar retired (direct links + picker router)');
else fail('catbar present but unchecked — restore its checks');
if(/closest\('\[data-cat\]'\)/.test(libHtml)) ok('picker router via data-cat');
else fail('picker router missing');
if(/button class="chip saved"/.test(libHtml)) ok('saved filter chip is a real button');
else fail('saved filter chip missing');

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

console.log('\n[6] Magic Table — kit-coherence (system-level wiring)');
const mt = fs.readFileSync(path.join(RES,'standalone-htmls-magic-table-medical-licensing.html'),'utf8');
const kit = fs.readFileSync(path.join(SITE,'assets','studyverse.css'),'utf8')
  + fs.readFileSync(path.join(SITE,'assets','studyverse-tokens.css'),'utf8');
if(mt.includes('/assets/studyverse.css')) ok('magic table links studyverse.css');
else fail('magic table missing studyverse.css link');
if(mt.includes('/assets/studyverse.js')) ok('magic table links studyverse.js');
else fail('magic table missing studyverse.js link');
if(mt.includes('data-sv-engine')) ok('magic table carries engine chip (data-sv-engine)');
else fail('magic table missing data-sv-engine chip');
if(mt.includes('class="foot"')) ok('magic table has house footer (foot)');
else fail('magic table missing house footer');
if(!mt.includes('mt-theme') && !mt.includes('mlx-theme') && !mt.includes('themeToggle')) ok('magic table: no mt-theme / mlx-theme / themeToggle leftovers');
else fail('magic table still has theme leftover references');
if(kit.includes('--font-mono')) ok('kit defines --font-mono label voice');
else fail('kit missing --font-mono');

console.log(failures ? '\n' + failures + ' FAILURE(S)\n' : '\nALL GREEN\n');
process.exit(failures ? 1 : 0);
