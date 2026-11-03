const fs=require('fs');

const DATA='site/resources/medcore-question-bank/data.js';
const src=fs.readFileSync(DATA,'utf8');
const start=src.indexOf('[');
let depth=0,end=-1;
for(let i=start;i<src.length;i++){const c=src[i];if(c==='[')depth++;else if(c===']'){depth--;if(depth===0){end=i;break;}}}
const data=JSON.parse(src.slice(start,end+1));

const letters=['A','B','C','D','E'];
const reLetterRef=/\b(Option|option|Choice|choice)\s*[A-E]\b|\(\s*[A-E]\s*\)/;

// deterministic RNG (mulberry32)
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
const rand=mulberry32(0x5EED1234);

const beforeDist={0:0,1:0,2:0,3:0,4:0};
const afterDist={0:0,1:0,2:0,3:0,4:0};
let shuffled=0, skipped=0;

for(const subj of data){
  for(const q of subj.questions){
    const opts=q.options||[];
    const ans=q.answer;
    if(typeof ans!=='number'||ans<0||ans>=opts.length) continue;
    const L=q.layers||{};
    const text=[L.rule,L.concept,L.discriminator,L.trap,L.hook,L.highyield].filter(Boolean).join(' ');
    beforeDist[ans]++;
    if(reLetterRef.test(text)){ afterDist[ans]++; skipped++; continue; }

    const n=opts.length;
    // place correct answer at a target position; shuffle the rest
    const target=Math.floor(rand()*n);
    const others=L.others&&typeof L.others==='object'?L.others:{};
    const othersArr=[];
    for(let i=0;i<n;i++) othersArr.push(others[letters[i]]);

    // build perm: perm[newPos]=origIndex
    const othersIdx=[];
    for(let i=0;i<n;i++) if(i!==ans) othersIdx.push(i);
    // shuffle othersIdx
    for(let i=othersIdx.length-1;i>0;i--){ const j=Math.floor(rand()*(i+1)); [othersIdx[i],othersIdx[j]]=[othersIdx[j],othersIdx[i]]; }
    const perm=new Array(n);
    perm[target]=ans;
    let oi=0;
    for(let k=0;k<n;k++){ if(k===target) continue; perm[k]=othersIdx[oi++]; }

    const newOptions=perm.map(i=>opts[i]);
    const newOthers={};
    for(let k=0;k<n;k++){ const orig=perm[k]; if(orig!==ans && othersArr[orig]!==undefined) newOthers[letters[k]]=othersArr[orig]; }
    q.options=newOptions;
    q.answer=perm.indexOf(ans);
    if(Object.keys(newOthers).length) L.others=newOthers;
    else delete L.others;
    afterDist[q.answer]++;
    shuffled++;
  }
}

const tipsStart=src.indexOf('const TIPS = ')+('const TIPS = '.length);
const tips=src.slice(tipsStart, src.lastIndexOf(']')+1);
fs.writeFileSync(DATA, '/* MedCORE Question Bank · data */\nconst SUBJECTS = '+JSON.stringify(data)+';\nconst TIPS = '+tips+';\n');

const pct=d=>{const t=Object.values(d).reduce((a,b)=>a+b,0);return Object.fromEntries(Object.entries(d).map(([k,v])=>[letters[k], (v/t*100).toFixed(1)+'%']));};
console.log('shuffled',shuffled,'skipped(letters)',skipped);
console.log('before',JSON.stringify(pct(beforeDist)));
console.log('after',JSON.stringify(pct(afterDist)));
