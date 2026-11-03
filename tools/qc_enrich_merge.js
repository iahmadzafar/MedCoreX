const fs=require('fs');

const DATA='site/resources/medcore-question-bank/data.js';
const ENRICH='tools/qc_enrichments.json';
const src=fs.readFileSync(DATA,'utf8');
const start=src.indexOf('[');
let depth=0,end=-1;
for(let i=start;i<src.length;i++){const c=src[i];if(c==='[')depth++;else if(c===']'){depth--;if(depth===0){end=i;break;}}}
const data=JSON.parse(src.slice(start,end+1));

const enrich=JSON.parse(fs.readFileSync(ENRICH,'utf8'));
const norm=s=>String(s).trim().toLowerCase().replace(/\s+/g,' ');
const byStem=new Map();
for(const e of enrich) byStem.set(norm(e.stem), e);

let merged=0, notFound=0;
for(const subj of data){
  for(const q of subj.questions){
    const key=norm(q.q);
    const e=byStem.get(key);
    if(!e) continue;
    const L=q.layers||{};
    for(const f of ['discriminator','trap','hook','rule','highyield']){
      if(e[f]!==undefined) L[f]=String(e[f]);
    }
    if(e.others!==undefined && typeof e.others==='object'){
      const letters=['A','B','C','D','E'];
      const others={};
      for(const k of Object.keys(e.others)){
        const letter=k.match(/^\s*([A-E])\s*\)?/i);
        if(letter) others[letter[1].toUpperCase()]=String(e.others[k]);
      }
      if(q.answer!==undefined) delete others[letters[q.answer]];
      L.others=others;
    }
    q.layers=L;
    merged++;
    byStem.delete(key);
  }
}
console.log('merged',merged,'notFound',byStem.size);
if(byStem.size) console.log('unmatched stems:',[...byStem.keys()].slice(0,5));

const tipsStart=src.indexOf('const TIPS = ')+('const TIPS = '.length);
const tips=src.slice(tipsStart, src.lastIndexOf(']')+1);
fs.writeFileSync(DATA, '/* MedCORE Question Bank · data */\nconst SUBJECTS = '+JSON.stringify(data)+';\nconst TIPS = '+tips+';\n');
console.log('written');
