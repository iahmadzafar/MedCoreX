const fs=require('fs');
const path=require('path');

const DATA='site/resources/medcore-question-bank/data.js';
const BACKUP='site/resources/medcore-question-bank/data.js.preqc.bak';
// always normalize from the pristine backup for a clean, deterministic result
const src=fs.readFileSync(BACKUP,'utf8');
const start=src.indexOf('[');
let depth=0,end=-1;
for(let i=start;i<src.length;i++){const c=src[i];if(c==='[')depth++;else if(c===']'){depth--;if(depth===0){end=i;break;}}}
const data=JSON.parse(src.slice(start,end+1));

const letters=['A','B','C','D','E'];
const stripCtrl=s=>String(s).replace(/[\u0000-\u0008\u000b-\u001f\u007f]/g,'');
const decodeEnt=s=>String(s).replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;|&#x27;/g,"'").replace(/&#34;/g,'"').replace(/&amp;/g,'&');
const TEMPLATE='Post-Mock Review Template';
const stripTemplate=s=>{ const i=String(s).indexOf(TEMPLATE); return i>=0?String(s).slice(0,i).trim():String(s); };

const isIndexEcho=q=>{
  const stem=(q.q||'');
  if(/bridge review/i.test(stem)) return true;
  if(/Which linked concept should you revise first/i.test(stem)) return true;
  if(/A review question gives this trigger/i.test(stem)) return true;
  const c=String((q.layers&&q.layers.concept)||'');
  if(/^Day \d+/.test(c)) return true;
  if(c==='Use the chronic-management pathway') return true;
  return false;
};
const isBroken=q=>{
  const L=q.layers||{};
  const combined=(q.q+' '+(L.concept||'')+' '+(L.highyield||'')+' '+(L.rule||'')).toLowerCase();
  return ['incomplete stem','broken stem','cannot be evaluated','contradiction','mismatch','flagged correct option','answer —','post-mock'].some(mk=>combined.includes(mk));
};

const normalizeOthers=(q)=>{
  const opts=q.options||[];
  const L=q.layers||{};
  if(!L.others||typeof L.others!=='object') return;
  const keys=Object.keys(L.others);
  if(keys.every(k=>letters.includes(k))){
    if(typeof q.answer==='number'&&opts.length) delete L.others[letters[q.answer]];
    return;
  }
  // text-keyed: keys look like "A) <option text>" — take the leading letter
  const newOthers={};
  for(const k of keys){
    const m=String(k).match(/^\s*([A-E])\)/);
    if(m){
      const letter=m[1];
      if(letters.indexOf(letter)!==q.answer && !newOthers[letter]) newOthers[letter]=stripCtrl(L.others[k]);
    }
  }
  L.others=newOthers;
};

let kept=0, removedIndexEcho=0, removedDup=0, removedBroken=0, textKeyedFixed=0, strippedCtrl=0, strippedTpl=0, trimmedOpts=0;
const seen=new Set();
const out=[];
for(const subj of data){
  const newQ=[];
  for(const q of subj.questions){
    if(isIndexEcho(q)){ removedIndexEcho++; continue; }
    if(isBroken(q)){ removedBroken++; continue; }
    if((q.options||[]).length<3){ removedBroken++; continue; }
    const key=decodeEnt(stripCtrl(q.q||'')).trim().toLowerCase().replace(/\s+/g,' ').slice(0,120);
    if(seen.has(key)){ removedDup++; continue; }
    seen.add(key);
    const before=JSON.stringify(q);
    q.q=decodeEnt(stripCtrl(q.q)).trim();
    q.options=(q.options||[]).map(o=>{const s=decodeEnt(stripCtrl(String(o))).trim(); if(s!==String(o)) trimmedOpts++; return s;});
    const L=q.layers||{};
    for(const f of ['concept','discriminator','trap','hook','rule','highyield']){
      if(typeof L[f]==='string'){ L[f]=stripTemplate(decodeEnt(stripCtrl(L[f]))); }
    }
    if(L.others&&typeof L.others==='object'){
      for(const k of Object.keys(L.others)) L.others[k]=stripTemplate(decodeEnt(stripCtrl(L.others[k])));
    }
    const wasText=!(Object.keys(L.others||{}).every(k=>letters.includes(k)));
    if(wasText) textKeyedFixed++;
    normalizeOthers(q);
    if(JSON.stringify(q)!==before) strippedCtrl++;
    newQ.push(q); kept++;
  }
  subj.questions=newQ;
}

const tipsStart=src.indexOf('const TIPS = ')+('const TIPS = '.length);
const tips=src.slice(tipsStart, src.lastIndexOf(']')+1);
fs.writeFileSync(DATA, '/* MedCORE Question Bank · data */\nconst SUBJECTS = '+JSON.stringify(data)+';\nconst TIPS = '+tips+';\n');

console.log(JSON.stringify({kept,removedIndexEcho,removedDup,removedBroken,textKeyedFixed,strippedCtrl,strippedTpl,trimmedOpts},null,2));
