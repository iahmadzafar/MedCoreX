const fs=require('fs');
const decode=s=>String(s).replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;|&#x27;/g,"'").replace(/&#34;/g,'"').replace(/&amp;/g,'&');
const norm=s=>decode(String(s)).trim().toLowerCase().replace(/\s+/g,' ');
const letters=['A','B','C','D','E'];

const en=JSON.parse(fs.readFileSync('tools/qc_enrichments.json','utf8'));
const authored=JSON.parse(fs.readFileSync('/private/var/folders/8_/0p2bm7pn3md9rt8qt0q2zrxm0000gn/T/opencode/scratchpad/basic_conceptonly.json','utf8'));
const src=fs.readFileSync('tools/data.js.preqc.bak','utf8');
const start=src.indexOf('[');
let depth=0,end=-1;
for(let i=start;i<src.length;i++){const c=src[i];if(c==='[')depth++;else if(c===']'){depth--;if(depth===0){end=i;break;}}}
const data=JSON.parse(src.slice(start,end+1));
const pristine=new Map();
for(const subj of data) for(const q of subj.questions) pristine.set(norm(q.q), q.options.map(decode));

const authoredByStem=new Map();
for(const a of authored) authoredByStem.set(norm(a.q), a.opts.map(decode));

let fixed=0, skipped=0;
for(const e of en){
  const key=norm(e.stem);
  const aOpts=authoredByStem.get(key);
  const pOpts=pristine.get(key);
  if(!aOpts||!pOpts||!e.others){ skipped++; continue; }
  const newOthers={};
  for(const k of Object.keys(e.others)){
    const li=letters.indexOf(k);
    if(li<0||li>=aOpts.length){ continue; }
    const val=aOpts[li];
    const pi=pOpts.indexOf(val);
    if(pi<0){ continue; }
    newOthers[letters[pi]]=e.others[k];
  }
  e.others=newOthers;
  fixed++;
}
fs.writeFileSync('tools/qc_enrichments.json', JSON.stringify(en,null,1));
console.log('rekeyed',fixed,'skipped',skipped);
