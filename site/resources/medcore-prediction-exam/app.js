/* ============================================================
   MedCoreX · Prediction Exam 2026 · app
   200 MCQs · 14 subjects · self-scoring sitting.
   The kit owns the palette and the chrome; this file owns
   the flow — paper → question → verdict → score card.
   ============================================================ */
(function(){
'use strict';

const $=s=>document.getElementById(s);
const LETTERS='ABCDE'.split('');
const TIPS=[
  'Commit before you check',
  'Read the last line first',
  'Name the discriminator',
  'Rule out before ruling in',
  'An unkeyed question is still a question',
  'The trap is in the wording'
];

const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const say=msg=>{if(window.SV&&SV.toast)SV.toast(msg)};

const qs=DATA.qs;
const N=qs.length;

/* ══════════════════════ STATE ══════════════════════ */
let idx=0;
let ans=new Array(N).fill(null);

/* ══════════════════════ SUBJECTS ══════════════════════ */
const subjOrder=[],subjCount={},subjDefect={};
let defects=0;
qs.forEach(q=>{
  if(!(q.subj in subjCount)){subjCount[q.subj]=0;subjOrder.push(q.subj);}
  subjCount[q.subj]++;
  if(q.c<0){defects++;subjDefect[q.subj]=(subjDefect[q.subj]||0)+1;}
});

/* ══════════════════════ SCREENS ══════════════════════ */
function show(id){
  ['intro','quiz','summary'].forEach(x=>{$(x).hidden=(x!==id)});
  if(id!=='quiz')window.scrollTo(0,0);
}

/* ══════════════════════ COUNTS ══════════════════════ */
function counts(){
  let c=0,w=0,u=0;
  for(let k=0;k<N;k++){
    if(qs[k].c<0)continue;
    if(ans[k]===null)u++;
    else if(ans[k]===qs[k].c)c++;
    else w++;
  }
  return {c,w,u};
}
function tally(){
  const t=counts();
  $('tally').innerHTML='<b>'+t.c+'</b>&#10003; <i>'+t.w+'</i>&#10007;';
}
function answeredPct(){
  return (ans.filter(a=>a!==null).length/N)*100;
}

/* ══════════════════════ QUESTION ══════════════════════ */
function render(){
  const q=qs[idx];
  $('qSubj').textContent=q.subj;
  $('qPos').textContent=(idx+1)+' / '+N;
  $('qLabel').textContent=q.label||('Q'+(idx+1));
  $('qStem').textContent=q.stem;

  const box=$('qOpts');
  box.innerHTML='';
  q.opts.forEach((t,k)=>{
    const b=document.createElement('button');
    b.type='button';
    b.className='opt';
    b.innerHTML='<span class="let">'+LETTERS[k]+'</span><span class="ot">'+esc(t)+'</span>';
    b.addEventListener('click',()=>choose(k));
    box.appendChild(b);
  });

  if(ans[idx]===null){
    equalize();
    if(document.fonts&&!equalize._done){equalize._done=1;document.fonts.ready.then(()=>equalize());}
    $('verdict').hidden=true;
    $('verdict').className='verdict';
    $('navHint').textContent='CLICK AN OPTION TO REVEAL';
  }else{
    paint(ans[idx]);
  }
  $('prevBtn').disabled=(idx===0);
  $('nextBtn').textContent=(idx===N-1)?'Finish →':'Next →';
  $('trackFill').style.width=answeredPct()+'%';
  tally();
}

/* mlx-eq: the length of an option must not tell you which one is right */
function equalize(){
  const rows=[].slice.call(document.querySelectorAll('.opts .opt')).filter(r=>!r.classList.contains('done'));
  rows.forEach(r=>{
    const s=r.querySelector('.ot');
    if(!s)return;
    if(s.scrollHeight>s.clientHeight+2&&!r.querySelector('.exp')){
      const e=document.createElement('span');
      e.className='exp';
      e.textContent='+';
      e.addEventListener('click',ev=>{ev.stopPropagation();r.classList.add('open');});
      r.appendChild(e);
    }
  });
  let h=0;
  rows.forEach(r=>{h=Math.max(h,r.offsetHeight)});
  if(h)rows.forEach(r=>{r.style.minHeight=h+'px'});
}

function choose(k){
  if(ans[idx]!==null||k>=qs[idx].opts.length)return;
  ans[idx]=k;
  paint(k);
  $('trackFill').style.width=answeredPct()+'%';
  tally();
}

function paint(k){
  const q=qs[idx],v=$('verdict'),kids=$('qOpts').children;
  for(let n=0;n<kids.length;n++){
    kids[n].disabled=true;
    kids[n].classList.add('done');
    kids[n].classList.remove('sel-right','sel-wrong','sel-def','reveal');
  }
  let html='';
  if(q.c<0){
    kids[k].classList.add('sel-def');
    v.className='verdict def';
    html='<div class="v-head">&#9888; RECALL DEFECT <span class="sub">NO VERIFIED ANSWER</span></div>';
    if(q.note)html+='<div class="v-note">'+esc(q.note)+'</div>';
    $('navHint').textContent='UNSCORED';
  }else{
    const ok=(k===q.c);
    kids[k].classList.add(ok?'sel-right':'sel-wrong');
    kids[q.c].classList.add('reveal');
    v.className='verdict '+(ok?'ok':'no');
    html=ok?'<div class="v-head">&#10003; CORRECT</div>'
            :'<div class="v-head">&#10007; WRONG <span class="ans">ANSWER: '+LETTERS[q.c]+'</span></div>';
    $('navHint').textContent=ok?'SCORED':'MISSED';
  }
  if(q.rule)html+='<div class="v-block"><b class="rl">'+(q.rlab||'RULE')+'</b>'+esc(q.rule)+'</div>';
  if(q.trap)html+='<div class="v-block"><b class="rl">TRAP</b>'+esc(q.trap)+'</div>';
  if(q.inf)html+='<span class="v-inf">AI-INFERRED KEY</span>';
  v.innerHTML=html;
  v.hidden=false;
}

/* ══════════════════════ NAVIGATION ══════════════════════ */
$('startBtn').addEventListener('click',()=>{idx=0;show('quiz');render()});
$('nextBtn').addEventListener('click',()=>{if(idx===N-1)finish();else{idx++;render()}});
$('prevBtn').addEventListener('click',()=>{if(idx>0){idx--;render()}});
$('retryBtn').addEventListener('click',()=>{ans=new Array(N).fill(null);idx=0;show('quiz');render()});
$('reviewBtn').addEventListener('click',()=>{
  let first=-1;
  for(let k=0;k<N;k++){if(qs[k].c>=0&&ans[k]!==null&&ans[k]!==qs[k].c){first=k;break}}
  if(first<0)for(let k=0;k<N;k++){if(qs[k].c>=0&&ans[k]===null){first=k;break}}
  if(first<0){say('Nothing missed — the paper is clean');return}
  idx=first;show('quiz');render();
});

function finish(){show('summary');buildSummary()}

/* ══════════════════════ SCORE CARD ══════════════════════ */
function buildSummary(){
  const t=counts();
  const per={},order=[];
  let dTotal=0,dAns=0;
  for(let k=0;k<N;k++){
    const q=qs[k];
    if(!(q.subj in per)){per[q.subj]={t:0,c:0};order.push(q.subj)}
    per[q.subj].t++;
    if(q.c<0){dTotal++;if(ans[k]!==null)dAns++;continue}
    if(ans[k]===q.c)per[q.subj].c++;
  }
  const scored=t.c+t.w;
  $('scCorrect').textContent=t.c;
  $('scTotal').textContent=scored;
  let sub=(scored?Math.round(t.c/scored*100):0)+'% ACCURACY · '+t.w+' WRONG · '+t.u+' UNANSWERED';
  if(dTotal)sub+=' · '+dTotal+' RECALL DEFECTS ('+dAns+' MARKED)';
  $('scSub').textContent=sub;
  $('scTable').innerHTML=order.map(s=>{
    const p=per[s],isDef=/defect/i.test(s);
    const pct=p.t?Math.round(p.c/p.t*100):0;
    return '<div class="st-row'+(isDef?' def':'')+'"><span class="st-name">'+esc(s)+
      '</span><span class="st-num">'+(isDef?p.t+' unverified':p.c+' / '+p.t)+
      '</span><span class="st-bar"><i style="width:'+(isDef?0:pct)+'%"></i></span></div>';
  }).join('');
  $('reviewBtn').disabled=!(t.w||t.u);
}

/* ══════════════════════ GRID ══════════════════════ */
function openGrid(){
  let d='';
  for(let k=0;k<N;k++){
    let cls='dot';
    if(qs[k].c<0)cls+=' defect';
    else if(ans[k]===qs[k].c)cls+=' right';
    else if(ans[k]!==null)cls+=' wrong';
    if(k===idx)cls+=' cur';
    d+='<button type="button" class="'+cls+'" data-k="'+k+'">'+(k+1)+'</button>';
  }
  $('dots').innerHTML=d;
  Array.prototype.forEach.call($('dots').children,b=>{
    b.addEventListener('click',()=>{
      idx=+b.dataset.k;
      closeGrid();
      show('quiz');
      render();
    });
  });
  $('gridModal').hidden=false;
}
function closeGrid(){$('gridModal').hidden=true}
$('gridBtn').addEventListener('click',openGrid);
$('sumGridBtn').addEventListener('click',openGrid);
$('gridClose').addEventListener('click',closeGrid);
$('gridFinish').addEventListener('click',()=>{closeGrid();finish()});
$('gridModal').addEventListener('click',e=>{if(e.target===$('gridModal'))closeGrid()});

/* ══════════════════════ KEYBOARD ══════════════════════ */
document.addEventListener('keydown',e=>{
  if(!$('gridModal').hidden){if(e.key==='Escape')closeGrid();return}
  if($('quiz').hidden)return;
  if(e.metaKey||e.ctrlKey||e.altKey)return;
  if(/INPUT|TEXTAREA|SELECT/.test((document.activeElement&&document.activeElement.tagName)||''))return;
  const map={'1':0,'2':1,'3':2,'4':3,'5':4,a:0,b:1,c:2,d:3,e:4};
  const lk=e.key.toLowerCase();
  if(lk in map&&ans[idx]===null&&map[lk]<qs[idx].opts.length){choose(map[lk]);return}
  if(e.key==='Enter'){
    if(document.activeElement&&document.activeElement.tagName==='BUTTON')return;
    e.preventDefault();
    $('nextBtn').click();
    return;
  }
  if(e.key==='ArrowRight'){e.preventDefault();$('nextBtn').click()}
  if(e.key==='ArrowLeft'){e.preventDefault();$('prevBtn').click()}
});

/* ══════════════════════ BOOT ══════════════════════ */
$('tips').innerHTML=[...TIPS,...TIPS].map(t=>'<span>'+esc(t)+'</span>').join('');
$('mMcq').textContent=N;
$('mSubj').textContent=subjOrder.length;
$('mOpt').textContent=qs[0].opts.length;
$('mDef').textContent=defects;

let chips='<span class="chip">'+N+' QUESTIONS</span>'+
          '<span class="chip">'+subjOrder.length+' SUBJECTS</span>'+
          '<span class="chip">SELF-SCORE</span>';
if(defects)chips+='<span class="chip">'+defects+' RECALL DEFECTS</span>';
$('intro').querySelector('.hero .rv .row').insertAdjacentHTML('beforebegin','<div class="row" style="margin:0 0 18px">'+chips+'</div>');

$('smap').innerHTML=subjOrder.map(s=>'<span>'+esc(s)+' <b>'+subjCount[s]+'</b></span>').join('');

tally();
show('intro');
})();
