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

console.log('\n[7] resource visual contracts');
const libraryCss = fs.readFileSync(path.join(SITE,'library.html'),'utf8');
const bridgeCss = fs.readFileSync(path.join(SITE,'assets','studyverse-bridge.css'),'utf8');
const tokensCss = fs.readFileSync(path.join(SITE,'assets','studyverse-tokens.css'),'utf8');
const recallHtml = fs.readFileSync(path.join(RES,'medcore-recall-sheets-repeat-offenders.html'),'utf8');
if(/main\.wrap\s*\{[^}]*\bwidth\s*:\s*100%/s.test(libraryCss)) ok('Library main wrapper stretches across its capped canvas');
else fail('Library main wrapper has no definite width inside the flex shell');
if(/\.lib-grid\{[^}]*grid-template-columns:\s*repeat\(auto-fill,minmax\(260px,1fr\)\)/.test(libraryCss)) ok('resource grid remains auto-fill and has no row cap');
else fail('resource grid lost its responsive auto-fill columns');
const hueBlock = catJs.match(/const HUES\s*=\s*\{([^}]+)\}/);
const hueTokens = hueBlock ? [...hueBlock[1].matchAll(/var\(--(c\d+)\)/g)].map(m=>m[1]) : [];
if(hueTokens.length && hueTokens.every(t=>t==='c1'||t==='c4')) ok('filled category accents use contrast-safe c1/c4 tokens');
else fail('filled category accents include a dark/unsafe token: ' + hueTokens.join(','));
const parseVars = block => Object.fromEntries([...block.matchAll(/--([a-z0-9-]+)\s*:\s*(#[0-9a-f]{3,8})/gi)].map(m=>[m[1],m[2]]));
const darkBlock = tokensCss.match(/:root,\s*html\[data-theme="dark"\]\s*\{([^}]+)\}/s);
const lightBlock = tokensCss.match(/html\[data-theme="light"\]\s*\{([^}]+)\}/s);
const luminance = hex => {
  let h=hex.slice(1);
  if(h.length===3) h=h.split('').map(c=>c+c).join('');
  const rgb=[0,2,4].map(i=>parseInt(h.slice(i,i+2),16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);
  return .2126*rgb[0]+.7152*rgb[1]+.0722*rgb[2];
};
if(darkBlock&&lightBlock&&hueTokens.length){
  const dark=parseVars(darkBlock[1]), light=parseVars(lightBlock[1]);
  const fg=dark['on-accent'];
  const ratios=[...new Set(hueTokens)].flatMap(t=>[dark[t],light[t]]).filter(Boolean).map(bg=>{const a=luminance(fg),b=luminance(bg);return (Math.max(a,b)+.05)/(Math.min(a,b)+.05)});
  if(ratios.length===new Set(hueTokens).size*2&&ratios.every(r=>r>=4.5)) ok('category badge contrast is at least 4.5:1 in both themes');
  else fail('category badge contrast falls below 4.5:1 in one theme');
}else fail('could not read the shared theme tokens for contrast checks');
if(/html\[data-sv-map="table"\][\s\S]*?font-family:\s*var\(--font-body\)!important[\s\S]*?font-family:\s*var\(--font-display\)!important[\s\S]*?font-family:\s*var\(--font-mono\)!important/.test(bridgeCss))
  ok('table-family interfaces map to shared body/display/mono fonts');
else fail('table-family bridge has no complete shared font-role map');
if(/\.sx \.topic\{font-family:var\(--font-display\)/.test(recallHtml))
  ok('recall-sheet topic uses the shared display font');
else fail('recall-sheet topic still uses a page-specific font');

console.log('\n[8] fleet-wide uniformity contracts');
const kitCss = fs.readFileSync(path.join(SITE,'assets','studyverse.css'),'utf8');
const qbankCss = fs.readFileSync(path.join(RES,'medcore-question-bank','style.css'),'utf8');
const forgeHtml = fs.readFileSync(path.join(RES,'standalone-htmls-forge-master.html'),'utf8');
const archHtml = fs.readFileSync(path.join(RES,'standalone-htmls-800-plus-mcq-architecture.html'),'utf8');
const memoryHtml = fs.readFileSync(path.join(RES,'medcore-memory-master-core.html'),'utf8');
const nreRecallHtml = fs.readFileSync(path.join(RES,'nre-recall-sheets-repeat-offenders.html'),'utf8');
const lightC2 = lightBlock && lightBlock[1].match(/--c2:\s*(#[0-9a-f]+)/i);
if(lightC2 && luminance(lightC2[1]) >= .5) ok('light c2 is a bright fill for the shared near-black text');
else fail('light c2 is still a dark fill under near-black text');
if(!/--(?:gold|med-gold|anat-orange)\s*:\s*var\(--c2\)/.test(forgeHtml)) ok('forge text aliases no longer depend on highlight fill c2');
else fail('forge text aliases still resolve to dark c2 in light mode');
if(/\.btn:not\(\.btn-primary\)[^{]*\{[^}]*color:\s*var\(--ink\)/.test(kitCss)) ok('primary buttons keep on-accent text in both themes');
else fail('generic .btn rule still overrides .btn-primary text colour');
if(!/--font-(?:display|body)\s*:\s*(?:Futura|"Avenir Next")/.test(qbankCss)) ok('question bank uses the shared kit font roles');
else fail('question bank redefines kit-owned font tokens');
if(/html\[data-sv-map="table"\][^{]*\b(?:button|td)\b[^{]*\{[^}]*font-family:\s*var\(--font-(?:body|mono)\)!important/.test(bridgeCss))
  ok('table-family controls resolve off -apple-system to shared fonts');
else fail('table-family controls still use hard-coded system fonts');
if(/K='mqa-theme'[\s\S]{0,220}?localStorage\.getItem\(['"]medcore\.theme['"]\)\s*\|\|\s*localStorage\.getItem\(['"]mx-mode['"]\)/.test(archHtml))
  ok('MCQ Architecture honours the saved site theme before its own preference');
else fail('MCQ Architecture still starts from its own theme preference');
if(/\.proto-steps\s*\{[^}]*grid-template-columns:\s*repeat\(auto-fit,minmax\(180px,1fr\)\)/.test(memoryHtml))
  ok('memory-master steps reflow at narrow widths');
else fail('memory-master step grid still forces five fixed columns');
if([recallHtml,nreRecallHtml].every(h=>/table-layout:\s*fixed/.test(h)&&/overflow-wrap:\s*anywhere/.test(h)&&/\.rf-grid\{grid-template-columns:minmax\(0,1fr\)\}/.test(h)&&/\.stat-band\{grid-template-columns:repeat\(2,minmax\(0,1fr\)\)\}/.test(h)))
  ok('both recall-sheet tables and grids fit a phone viewport');
else fail('recall-sheet tables still overflow at 390px');

const answerKeys = ['standalone-htmls-dec-2024-answer-key.html','standalone-htmls-dec-2025-answer-key.html','standalone-htmls-dec-2025-recalled-key.html','standalone-htmls-june-2024-answer-key.html','standalone-htmls-june-2025-answer-key.html','standalone-htmls-may-2026-mcq-breakdown.html'];
const caseLadder = fs.readFileSync(path.join(RES,'standalone-htmls-case-ladder-interactive.html'),'utf8');
if(answerKeys.every(f=>!/background:var\(--c2\);color:var\(--ink\)/.test(fs.readFileSync(path.join(RES,f),'utf8'))))
  ok('answer-key chips use on-accent text on c2 fills');
else fail('answer-key chips still put ink text on a c2 fill');
if(!/background:var\(--lift\);color:var\(--ink\)/.test(caseLadder)&&/background:var\(--lift\);color:var\(--on-accent\)/.test(caseLadder))
  ok('case-ladder lift tags use on-accent text');
else fail('case-ladder lift tags still put ink text on a c2 fill');

console.log('\n[9] metadata and favicon');
const htmlFiles=[];
(function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())walk(p);else if(e.name.endsWith('.html'))htmlFiles.push(p);}})(SITE);
const noDesc=[], noFav=[];
for(const f of htmlFiles){
  const s=fs.readFileSync(f,'utf8'), rel=path.relative(SITE,f);
  if(!/<meta\s+name="description"\s+content="[^"\s][^"]*"/i.test(s)) noDesc.push(rel);
  if(!s.includes('<link rel="icon" href="/assets/home/favicon.svg" type="image/svg+xml">') ||
     !s.includes('<link rel="icon" href="/assets/home/favicon-32.png" sizes="32x32" type="image/png">')) noFav.push(rel);
}
if(!noDesc.length) ok('all ' + htmlFiles.length + ' pages carry a real meta description');
else noDesc.forEach(f=>fail(f + ': missing meta description'));
if(!noFav.length) ok('all ' + htmlFiles.length + ' pages link the shared favicon');
else noFav.forEach(f=>fail(f + ': missing shared favicon links'));
const logicFav = fs.readFileSync(path.join(RES,'qbank-logic-first-high-yield-logic-first-high-yield-bank.html'),'utf8');
if(!/<link[^>]+rel="icon"[^>]+data:image\/svg\+xml/.test(logicFav)) ok('Logic First no longer uses the old data-URI favicon');
else fail('Logic First still carries the old data-URI favicon');

console.log('\n[10] shared tool-page shell');
const toolPages = ['medcore-cheat-card.html','medcore-memory-master-core.html','qbank-logic-first-high-yield-logic-first-high-yield-bank.html'];
if(/html\[data-sv-map\] \.sv-nav\{/.test(bridgeCss)&&/html\[data-sv-map\] \.sv-foot-links\{/.test(bridgeCss))
  ok('shared tool shell styles live in the bridge');
else fail('bridge has no shared .sv-nav / .sv-foot-links rules');
for(const f of toolPages){
  const s=fs.readFileSync(path.join(RES,f),'utf8');
  if(/<nav class="sv-nav" aria-label="Primary">/.test(s)&&/<footer[^>]*>[\s\S]*?sv-foot-links/.test(s)) ok(f + ': shared nav and footer present');
  else fail(f + ': shared nav or footer missing');
}

console.log('\n[11] Logic First on-accent alignment');
const nxOn = [...logicFav.matchAll(/--nx-on\s*:\s*([^;}]+)/g)].map(m=>m[1].trim());
if(nxOn.length>=5 && nxOn.every(v=>v==='var(--on-accent)')) ok('Logic First on-accent resolves to the kit token in every theme');
else fail('Logic First still defines its own on-accent: ' + nxOn.join(', '));
if(!/--on-accent\s*:\s*var\(--nx-on\)/.test(logicFav)) ok('Logic First no longer aliases the kit on-accent token back to itself');
else fail('Logic First still creates a circular on-accent alias');
if(!/background:var\(--nx-a1\);\s*color:var\(--nx-bg\)/.test(logicFav)) ok('accent-filled bank controls use on-accent text');
else fail('accent-filled bank controls still use page-background text');

if(/\.btn\.active\{color:var\(--ink\)/.test(logicFav)&&/\.btn\.t[1-4]\.active[^{]*\{[^}]*color:var\(--on-accent\)/.test(logicFav))
  ok('Logic First active buttons keep legible text on plain and tier fills');
else fail('Logic First active buttons still use page-background text');

console.log(failures ? '\n' + failures + ' FAILURE(S)\n' : '\nALL GREEN\n');
process.exit(failures ? 1 : 0);
