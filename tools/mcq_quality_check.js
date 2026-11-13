const fs=require('fs');
const path=require('path');

const DATA='site/resources/medcore-question-bank/data.js';
const src=fs.readFileSync(DATA,'utf8');
const start=src.indexOf('[');
let depth=0,end=-1;
for(let i=start;i<src.length;i++){const c=src[i];if(c==='[')depth++;else if(c===']'){depth--;if(depth===0){end=i;break;}}}
const data=JSON.parse(src.slice(start,end+1));

const issues=[];
const add=(subject,idx,check,severity,detail,stem)=>issues.push({subject,idx,check,severity,detail,stem:(stem||'').slice(0,140)});

const seenStems=new Map();
const letters=['A','B','C','D','E'];
const fields=['concept','hook','trap','rule'];

let totalQ=0;
const subjCounts={}, answerDist={}, optCountDist={};
const layerCompleteness={full:0, conceptOnly:0, partial:0};

for(const subj of data){
  subjCounts[subj.id]=0;
  for(let i=0;i<(subj.questions||[]).length;i++){
    const q=subj.questions[i];
    totalQ++; subjCounts[subj.id]++;
    const stem=(q.q||'').trim();
    const opts=q.options||[];
    const ans=q.answer;
    const L=q.layers||{};

    const key=stem.toLowerCase().replace(/\s+/g,' ').slice(0,120);
    if(seenStems.has(key)) add(subj.id,i,'DUP_STEM','high','duplicate of '+seenStems.get(key),stem);
    else seenStems.set(key,subj.id+'#'+i);

    if(!stem) add(subj.id,i,'STEM_EMPTY','critical','empty stem',stem);
    /* retired by owner triage (3 Nov): short recall-style stems are fine */
    /* NO_QUESTION_MARK retired — owner ruling: recall-style one-liners without '?' are fine */
    /* retired by owner triage (3 Nov): long stems are fine */

    if(opts.length<4||opts.length>5) add(subj.id,i,'BAD_OPTION_COUNT','high','n='+opts.length,stem);
    optCountDist[opts.length]=(optCountDist[opts.length]||0)+1;

    const normOpts=opts.map(o=>String(o).trim().toLowerCase());
    if(new Set(normOpts).size!==normOpts.length) add(subj.id,i,'DUP_OPTIONS','high','duplicate options',stem);

    for(let k=0;k<opts.length;k++){
      const o=String(opts[k]);
      if(!o.trim()) add(subj.id,i,'EMPTY_OPTION','critical','option '+letters[k],stem);
      if(/[\u0000-\u0008\u000b-\u001f\u007f]/.test(o)) add(subj.id,i,'CONTROL_CHAR','medium','ctrl char in option '+letters[k],stem);
      if(o!==o.trim()) add(subj.id,i,'WS_OPTION','low','whitespace in option '+letters[k],stem);
    }
    if(/[\u0000-\u0008\u000b-\u001f\u007f]/.test(stem)) add(subj.id,i,'CONTROL_CHAR','medium','ctrl char in stem',stem);

    if(typeof ans!=='number'||ans<0||ans>=opts.length){
      add(subj.id,i,'ANSWER_OOR','critical','answer='+ans+' (n='+opts.length+')',stem);
    } else {
      answerDist[ans]=(answerDist[ans]||0)+1;
      const ct=String(opts[ans]).trim();
      if(ct.length>8 && stem.toLowerCase().includes(ct.toLowerCase())) add(subj.id,i,'ANSWER_LEAK','high','correct option text in stem',stem);
    }

    if(!L||typeof L!=='object') add(subj.id,i,'NO_LAYERS','high','missing layers',stem);
    else {
      const emptyFields=fields.filter(f=>!String(L[f]||'').trim());
      if(emptyFields.length===0) layerCompleteness.full++;
      else if(emptyFields.length===fields.length-1 && L.concept) layerCompleteness.conceptOnly++;
      else layerCompleteness.partial++;

      /* retired by owner triage (3 Nov): partial layers are fine */
      if(emptyFields.length===fields.length-1 && L.concept){
        add(subj.id,i,'CONCEPT_ONLY','medium','only concept layer present',stem);
      }

      const others=L.others;
      if(!others||typeof others!=='object') add(subj.id,i,'NO_OTHERS','medium','missing others',stem);
      else {
        const keys=Object.keys(others);
        const isLetter=keys.every(k=>letters.includes(k));
        if(!isLetter){
          add(subj.id,i,'SCHEMA_TEXT_KEYED','low','others keyed by option text (inconsistent schema)',stem);
        } else {
          const expected=opts.length-1;
          /* retired by owner triage (3 Nov): others-layer count variance is fine */
          for(const k of keys){
            if(k===letters[ans]) add(subj.id,i,'OTHERS_HAS_CORRECT','high','others contains correct letter '+k,stem);
            /* retired by owner triage (3 Nov): empty others entries are fine */
          }
        }
      }
    }

    const combined=(stem+' '+(L.concept||'')+' '+(L.highyield||'')+' '+(L.rule||'')).toLowerCase();
    const markers=['incomplete stem','broken stem','cannot be evaluated','contradiction','mismatch','post-mock','flagged correct option','moved out of the flagged'];
    for(const mk of markers){ if(combined.includes(mk)){ add(subj.id,i,'BROKEN_MARKER','high','marker: '+mk,stem); break; } }
    if(String(L.highyield||'').toLowerCase().includes('post-mock')||String(L.rule||'').toLowerCase().includes('post-mock'))
      add(subj.id,i,'TEMPLATE_LEAK','medium','review template leaked',stem);
  }
}

for(const subj of data){
  const d={}; let t=0;
  for(const q of subj.questions){ if(typeof q.answer==='number'){ d[q.answer]=(d[q.answer]||0)+1; t++; } }
  const exp=t/5;
  for(let k=0;k<5;k++){
    /* retired by owner triage (3 Nov): per-subject answer distribution is informational */
  }
}
const distVals=Object.values(answerDist); const distTotal=distVals.reduce((a,b)=>a+b,0); const exp=distTotal/5;
/* retired by owner triage (3 Nov): global answer distribution is informational */

fs.writeFileSync('tools/qc_issues.json', JSON.stringify(issues,null,2));
const byCheck={}; for(const it of issues) byCheck[it.check]=(byCheck[it.check]||0)+1;
const sevCount={}; for(const it of issues) sevCount[it.severity]=(sevCount[it.severity]||0)+1;

let md='# MCQ Quality Check Report — MedCoreX Question Bank\n\n';
md+='Generated: '+new Date().toISOString()+'\n\n';
md+='## Scope\n';
md+='- Subjects: '+data.map(s=>s.id+' ('+s.questions.length+')').join(', ')+'\n';
md+='- Total questions: '+totalQ+'\n';
md+='- Unique stems: '+seenStems.size+' (exact dup: '+(totalQ-seenStems.size)+')\n';
md+='- Total issues: '+issues.length+'\n\n';
md+='## Layer completeness\n';
md+='- Full (all 4 text layers + others): '+layerCompleteness.full+'\n';
md+='- Concept only: '+layerCompleteness.conceptOnly+'\n';
md+='- Partial: '+layerCompleteness.partial+'\n\n';
md+='## Severity counts\n';
for(const [k,v] of Object.entries(sevCount)) md+='- '+k+': '+v+'\n';
md+='\n## Issue counts by check\n';
for(const [k,v] of Object.entries(byCheck).sort((a,b)=>b[1]-a[1])) md+='- '+k+': '+v+'\n';
md+='\n## Answer distribution (all subjects)\n';
for(let k=0;k<5;k++) md+='- '+letters[k]+': '+(answerDist[k]||0)+' ('+((answerDist[k]||0)/distTotal*100).toFixed(1)+'%)\n';
md+='\n## Option count distribution\n';
for(const [k,v] of Object.entries(optCountDist)) md+='- '+k+' options: '+v+'\n';
md+='\n## Subject counts\n';
for(const [k,v] of Object.entries(subjCounts)) md+='- '+k+': '+v+'\n';
md+='\n## Sample issues (first 60)\n';
for(const it of issues.slice(0,60)){
  md+='### ['+it.severity+'] '+it.check+' — '+it.subject+' #'+it.idx+'\n';
  md+='> '+it.stem.replace(/\n/g,' ')+'\n';
  md+='Detail: '+it.detail+'\n\n';
}
fs.writeFileSync('tools/qc_report.md', md);
console.log('TOTAL',totalQ,'UNIQUE',seenStems.size,'DUP',totalQ-seenStems.size,'ISSUES',issues.length);
console.log('SEVERITY',JSON.stringify(sevCount));
console.log('LAYER',JSON.stringify(layerCompleteness));
console.log('TOP',Object.entries(byCheck).sort((a,b)=>b[1]-a[1]).slice(0,15).map(x=>x[0]+':'+x[1]).join(', '));
console.log('ANSWER DIST',JSON.stringify(answerDist));
if(process.argv.includes('--strict') && (sevCount.critical||0)>0){
  console.error('STRICT: '+sevCount.critical+' critical issue(s) found');
  process.exit(1);
}
