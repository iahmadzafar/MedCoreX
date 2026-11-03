/* ============================================================
   MedCoreX · Past-Paper Practice · app
   Five recalled papers · 68 subject sets · realtime practice.
   The kit owns the palette and the chrome; this file owns
   the flow — papers → set → question → locked answer → review.
   ============================================================ */
(function(){
'use strict';

const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const LETTERS=['A','B','C','D','E'];
const STORE='medcore.pph';
const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const SV=window.SV||{};

const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const say=msg=>{if(SV.toast)SV.toast(msg)};

/* ══════════════════════ PROGRESS STORE ══════════════════════ */
const blank=()=>({ans:{},flags:[],conf:{},cur:0,time:0});
let P={best:0,noAuto:false,sets:{}};

(function load(){
  let raw=null;
  try{
    raw=localStorage.getItem(STORE);
    if(raw==null){
      raw=localStorage.getItem('medcore_pph');
      if(raw!=null){try{localStorage.setItem(STORE,raw)}catch(e){}}
    }
  }catch(e){}
  if(raw){try{P=Object.assign(P,JSON.parse(raw))}catch(e){}}
  try{localStorage.removeItem('medcore_pph')}catch(e){}
})();

const save=()=>{try{localStorage.setItem(STORE,JSON.stringify(P))}catch(e){}};
const stOf=id=>P.sets[id]||(P.sets[id]=blank());
const setById=id=>SUBJECTS.find(s=>s.id===id);
const paperName=pid=>{const p=PAPERS.find(x=>x.id===pid);return p?p.name:'Recalled paper'};

/* tally a set: answered, right, wrong */
function tally(set,st){
  const n=set.questions.length;let g=0,r=0;
  for(let i=0;i<n;i++){
    const a=st.ans[i];
    if(a===undefined)continue;
    if(a===set.questions[i].answer)g++;else r++;
  }
  return {n,g,r,done:g+r};
}

/* ══════════════════════ ROUTER ══════════════════════ */
let SET=null,ST=null,streak=0,picked=null;

function route(){
  const m=location.hash.match(/^#\/s\/(.+)$/);
  const set=m&&setById(decodeURIComponent(m[1]));
  stopClock();
  if(set){
    SET=set;ST=stOf(SET.id);
    /* normalise anything a half-written store might be missing */
    if(!ST.ans||typeof ST.ans!=='object')ST.ans={};
    if(!ST.conf||typeof ST.conf!=='object')ST.conf={};
    if(!Array.isArray(ST.flags))ST.flags=[];
    if(typeof ST.cur!=='number')ST.cur=0;
    if(typeof ST.time!=='number')ST.time=0;
    showPractice();
  }else{
    SET=null;ST=null;picked=null;
    showPapers();
  }
  scrollTo({top:0});
}
addEventListener('hashchange',route);

/* ══════════════════════ PAPERS (home) ══════════════════════ */
function showPapers(){
  $('#view-papers').hidden=false;
  $('#view-practice').hidden=true;
  $('#navPractice').hidden=true;
  $('#navPapers').setAttribute('aria-current','page');

  let done=0,right=0,time=0;
  SUBJECTS.forEach(s=>{
    const st=stOf(s.id),t=tally(s,st);
    done+=t.done;right+=t.g;time+=st.time||0;
  });
  const acc=done?Math.round(right/done*100):0;

  /* hero monitor */
  $('#mPaper').textContent=PAPERS.length;
  $('#mSet').textContent=SUBJECTS.length;
  $('#mMcq').textContent=SUBJECTS.reduce((a,s)=>a+s.questions.length,0);
  $('#mDone').textContent=done;
  $('#mAcc').textContent=acc+'%';

  /* stat cards */
  if(SV.countUp){
    SV.countUp($('#stAnswered'),done);
    SV.countUp($('#stAcc'),acc,'%');
    SV.countUp($('#stBest'),P.best||0);
    SV.countUp($('#stTime'),Math.round(time/60));
  }else{
    $('#stAnswered').textContent=done;
    $('#stAcc').textContent=acc+'%';
    $('#stBest').textContent=P.best||0;
    $('#stTime').textContent=Math.round(time/60);
  }

  /* paper blocks → subject sets */
  let i=0;
  $('#papers').innerHTML=PAPERS.map(p=>{
    const sets=SUBJECTS.filter(s=>s.paper===p.id);
    const total=sets.reduce((a,s)=>a+s.questions.length,0);
    const cards=sets.map(s=>{
      const st=stOf(s.id),t=tally(s,st),accent='var(--c'+(i++%4+1)+')';
      return '<button class="card hov set" data-go="'+encodeURIComponent(s.id)+'" style="--accent:'+accent+';--i:'+(i%10)+'">'+
        '<div class="top"><span class="no">'+String(i).padStart(2,'0')+'</span><span class="n">'+s.questions.length+'</span></div>'+
        '<h3>'+esc(s.name)+'</h3>'+
        '<div class="prog"><i class="g" style="width:'+(t.n?t.g/t.n*100:0)+'%"></i><i class="r" style="width:'+(t.n?t.r/t.n*100:0)+'%"></i></div>'+
        '<div class="foot"><span>'+t.done+' / '+t.n+' answered'+(t.done?' · '+Math.round(t.g/t.done*100)+'%':'')+'</span>'+
        '<span class="go">'+(t.done?'Resume':'Start')+' →</span></div>'+
      '</button>';
    }).join('');
    return '<section class="paper-block rv">'+
      '<div class="paper-head"><h2>'+esc(p.name)+'</h2><span class="pc">'+total+' MCQs</span><span class="pline"></span></div>'+
      '<div class="sets">'+cards+'</div>'+
    '</section>';
  }).join('');

  if(SV.stagger)SV.stagger($('#view-papers'));
}
$('#papers').addEventListener('click',e=>{
  const b=e.target.closest('[data-go]');
  if(b)location.hash='#/s/'+b.dataset.go;
});
$$('[data-scroll]').forEach(b=>b.addEventListener('click',()=>{
  const el=document.getElementById(b.dataset.scroll);
  if(el)el.scrollIntoView({behavior:reduce?'auto':'smooth'});
}));

/* ══════════════════════ PRACTICE ══════════════════════ */
function showPractice(){
  $('#view-papers').hidden=true;
  $('#view-practice').hidden=false;
  $('#navPapers').removeAttribute('aria-current');

  const np=$('#navPractice');
  np.hidden=false;np.href=location.hash;
  np.setAttribute('aria-current','page');

  $('#pSub').textContent=paperName(SET.paper)+' · realtime practice';
  $('#pName').textContent=SET.name;

  streak=0;picked=null;
  ST.cur=Math.min(ST.cur||0,SET.questions.length-1);
  drawClock();
  renderQuestion();
  renderScore();
  renderRail();
}

/* ---------- reasoning layers ---------- */
/* ---------- breakdown — the Question Bank's seven layers, verbatim ---------- */
const LAYERS=[['concept','Concept'],['discriminator','Discriminator'],['trap','Trap'],['rule','Rule'],['others','Why every other option dies'],['highyield','High-yield link'],['hook','Memory hook']];
/* the recalled answer keys also carry two layers the seven-layer schema has no slot for */
const EXTRA_LAYERS=[['fix','Fix'],['note','Note']];
function breakdown(q){
  const Ly=q.layers||{};let n=0;
  const card=function(k,label){
    n++;
    const body=k==='others'
      ?'<ul>'+Object.entries(Ly.others).map(([l,t])=>'<li><b>'+esc(l)+'</b><span>'+esc(t)+'</span></li>').join('')+'</ul>'
      :'<p>'+esc(Ly[k])+'</p>';
    return '<div class="layer'+(k==='others'?' wide':'')+'" style="--accent:var(--c'+((n-1)%4+1)+');--i:'+n+'">'+
      '<h4><span>'+n+'</span>'+label+'</h4>'+body+'</div>';
  };
  const body=LAYERS.concat(EXTRA_LAYERS).filter(([k])=>Ly[k]).map(([k,label])=>card(k,label)).join('');
  const inf=q.inf?'<span class="inf-badge">AI-inferred key</span>':'';
  if(!body&&!inf)return '';
  return (body?'<div class="bd">'+body+'</div>':'')+inf;
}
/* not every recalled item carries a written layer — say so rather than show an empty grid */
function breakdownOrNote(q){
  return breakdown(q)||'<p class="muted empty-note" style="margin:0">No reasoning layer recorded for this item yet. Answer it, flag it, and it belongs in the write-up.</p>';
}

/* ---------- the question ---------- */
function renderQuestion(){
  const i=ST.cur,q=SET.questions[i],chosen=ST.ans[i];
  const answered=chosen!==undefined,ok=answered&&chosen===q.answer;
  const flagged=ST.flags.indexOf(i)>-1;

  $('#qcard').innerHTML=
    '<div class="qhead">'+
      '<span class="qno">Question '+(i+1)+' <span class="muted" style="font-size:.8em">of '+SET.questions.length+'</span></span>'+
      '<button class="flag" id="flagBtn" aria-pressed="'+flagged+'">⚑ '+(flagged?'Flagged':'Flag')+'</button>'+
    '</div>'+
    '<p class="stem">'+esc(q.q)+'</p>'+
    '<div class="opts" role="group" aria-label="Answer options">'+q.options.map((o,j)=>{
      let cls='';
      if(answered){if(j===q.answer)cls='correct';else if(j===chosen)cls='wrong';else cls='dim';}
      else if(j===picked)cls='sel';
      const mark=answered&&j===q.answer?'<span class="mark">✓</span>'
              :answered&&j===chosen?'<span class="mark">✗</span>'
              :'<span class="key">'+(j+1)+'</span>';
      return '<button class="opt '+cls+'" data-a="'+j+'" '+(answered?'disabled':'')+' aria-label="Option '+LETTERS[j]+': '+esc(o)+'">'+
        '<span class="let">'+LETTERS[j]+'</span><span>'+esc(o)+'</span>'+mark+
      '</button>';
    }).join('')+'</div>'+
    (answered
      ? '<div class="verdict '+(ok?'good':'bad')+'"><span class="vtxt">'+(ok?'✓ Correct!':'✗ Not quite.')+
        ' The answer is '+LETTERS[q.answer]+'.</span><button class="btn ghost sm" id="expandBtn">⤢ Expand <kbd>E</kbd></button></div>'+
        '<div class="bd-wrap"><div class="bd-head"><h3>Seven-layer breakdown</h3></div>'+breakdownOrNote(q)+'</div>'
      : '<div class="conf-row'+(picked!==null?' ready':'')+'" id="confRow" role="group" aria-label="Confidence">'+
          '<span class="conf-lbl">'+(picked!==null?'How sure were you?':'Pick an option, then lock it in')+'</span>'+
          '<button class="confb sure" data-c="sure" '+(picked!==null?'':'disabled')+'>● Sure</button>'+
          '<button class="confb guess" data-c="guess" '+(picked!==null?'':'disabled')+'>◐ Guess</button>'+
          '<button class="confb blind" data-c="blind" '+(picked!==null?'':'disabled')+'>○ Blind</button>'+
        '</div>'+
        '<div class="bd-wrap"><div class="placeholder"><b>◆ Confidence-locked reveal</b>'+
          '<p class="muted" style="margin-top:6px">Answering needs two taps: pick an option, then say how sure you are.</p></div></div>');

  $('#prevBtn').disabled=i===0;
  $('#nextBtn').innerHTML=i===SET.questions.length-1?'Finish ›':answered?'Next question ›':'Skip ahead ›';
}

$('#qcard').addEventListener('click',e=>{
  const opt=e.target.closest('[data-a]');
  if(opt){pick(+opt.dataset.a);return}
  const conf=e.target.closest('[data-c]');
  if(conf){lockIn(conf.dataset.c);return}
  if(e.target.closest('#flagBtn')){toggleFlag();return}
  if(e.target.closest('#expandBtn')){openBreakdown();return}
});

function pick(j){
  if(ST.ans[ST.cur]!==undefined||j>=SET.questions[ST.cur].options.length)return;
  picked=j;renderQuestion();
}
function lockIn(conf){
  const i=ST.cur,q=SET.questions[i];
  if(ST.ans[i]!==undefined||picked===null)return;
  const j=picked;
  ST.ans[i]=j;
  if(!ST.conf)ST.conf={};
  ST.conf[i]=conf;
  if(j===q.answer){
    streak++;
    if((P.best||0)<streak)P.best=streak;
    const el=$('#qcard [data-a="'+j+'"]');
    if(el&&SV.burst){const r=el.getBoundingClientRect();SV.burst(r.left+40,r.top+r.height/2)}
    if(streak%5===0)say(streak+' in a row');
  }else{
    streak=0;
  }
  if(!clock&&!P.noAuto)startClock();
  picked=null;
  save();
  renderQuestion();renderScore();renderRail();
}
function go(step){
  const n=ST.cur+step;
  if(n<0)return;
  if(n>=SET.questions.length){
    const t=tally(SET,ST);
    say('End of '+SET.name+': '+t.g+' right, '+t.r+' wrong, '+(t.n-t.done)+' left');
    if(SV.burst)SV.burst(innerWidth/2,innerHeight/3,60);
    return;
  }
  ST.cur=n;picked=null;save();renderQuestion();
  if(innerWidth<1000)$('#qcard').scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});
}
$('#prevBtn').addEventListener('click',()=>go(-1));
$('#nextBtn').addEventListener('click',()=>go(1));

function toggleFlag(){
  const i=ST.cur;
  ST.flags=ST.flags.indexOf(i)>-1?ST.flags.filter(x=>x!==i):ST.flags.concat([i]);
  save();renderQuestion();renderRail();
  say(ST.flags.indexOf(i)>-1?'Flagged for review':'Flag removed');
}

/* ══════════════════════ RAIL ══════════════════════ */
function renderRail(){
  const n=SET.questions.length,t=tally(SET,ST),left=n-t.done;
  $('#barG').style.width=(t.g/n*100)+'%';
  $('#barR').style.width=(t.r/n*100)+'%';
  $('#barTxt').textContent=t.done+' / '+n+' answered';
  $('#trRight').querySelector('b').textContent=t.g;
  $('#trWrong').querySelector('b').textContent=t.r;
  $('#trFlag').querySelector('b').textContent=ST.flags.length;
  $('#trLeft').querySelector('b').textContent=left;

  const jump=$('#jumpInput');
  jump.max=n;jump.placeholder='1–'+n;

  /* confidence tally */
  const groups={sure:[0,0],guess:[0,0],blind:[0,0]};
  let unmarked=0;
  Object.keys(ST.ans).forEach(k=>{
    const i=+k,q=SET.questions[i];
    if(!q)return;
    const c=(ST.conf||{})[i];
    if(!c||!groups[c]){unmarked++;return}
    groups[c][1]++;
    if(ST.ans[i]===q.answer)groups[c][0]++;
  });
  const COL={sure:'var(--ok)',guess:'var(--c2)',blind:'var(--c4)'};
  const NAME={sure:'Sure',guess:'Guess',blind:'Blind'};
  const rows=[];
  Object.keys(groups).forEach(k=>{
    const g=groups[k][0],c=groups[k][1];
    if(!c)return;
    rows.push('<div class="trow"><i style="background:'+COL[k]+'"></i><span>'+NAME[k]+'</span>'+
      '<b>'+Math.round(g/c*100)+'%</b><em>'+g+'/'+c+'</em></div>');
  });
  if(unmarked)rows.push('<div class="trow"><i style="background:var(--surface)"></i><span>Unmarked</span><b>—</b><em>'+unmarked+'</em></div>');
  $('#confTally').hidden=!rows.length;
  $('#confEmpty').hidden=!!rows.length;
  $('#confTally').innerHTML=rows.join('');

  /* review list — wrong answers + flags */
  const items=[];
  Object.keys(ST.ans).forEach(k=>{
    const i=+k;
    if(SET.questions[i]&&ST.ans[i]!==SET.questions[i].answer)items.push({i,w:true});
  });
  ST.flags.forEach(i=>{if(!items.some(x=>x.i===i))items.push({i,w:false})});
  items.sort((a,b)=>a.i-b.i);
  const CAP=48;
  $('#reviewList').hidden=!items.length;
  $('#reviewEmpty').hidden=!!items.length;
  $('#reviewMore').hidden=items.length<=CAP;
  if(items.length>CAP)$('#reviewMore').textContent='+'+(items.length-CAP)+' more — narrow it with the jump box';
  $('#reviewList').innerHTML=items.slice(0,CAP).map(({i,w})=>
    '<button class="qchip '+(w?'w':'f')+' '+(i===ST.cur?'cur':'')+'" data-q="'+i+'">'+(i+1)+(w?'':' ⚑')+'</button>').join('');
}
function renderScore(){
  const t=tally(SET,ST);
  $('#scOk').textContent='✓ '+t.g;
  $('#scBad').textContent='✗ '+t.r;
}

$('#jumpForm').addEventListener('submit',e=>{
  e.preventDefault();
  jumpTo(parseInt($('#jumpInput').value,10)-1);
});
$('#firstUnanswered').addEventListener('click',()=>{
  const i=SET.questions.findIndex((q,i)=>ST.ans[i]===undefined);
  jumpTo(i<0?0:i);
});
$('#firstFlagged').addEventListener('click',()=>{
  if(!ST.flags.length){say('No flagged questions yet');return}
  const next=ST.flags.filter(i=>i>ST.cur);
  jumpTo(next.length?next[0]:ST.flags.slice().sort((a,b)=>a-b)[0]);
});
$('#reviewList').addEventListener('click',e=>{
  const c=e.target.closest('[data-q]');
  if(c)jumpTo(+c.dataset.q);
});
function jumpTo(i){
  if(!Number.isFinite(i))return;
  i=Math.max(0,Math.min(SET.questions.length-1,i));
  ST.cur=i;picked=null;save();renderQuestion();renderRail();
  $('#qcard').scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});
}

/* ══════════════════════ SEARCH ══════════════════════ */
const qsearch=$('#qsearch'),searchCount=$('#searchCount');
let hits=[],hitAt=-1;
function runSearch(){
  const term=qsearch.value.trim().toLowerCase();
  if(!term){hits=[];hitAt=-1;searchCount.hidden=true;return}
  hits=[];
  for(let i=0;i<SET.questions.length;i++){
    const q=SET.questions[i];
    if(q.q.toLowerCase().indexOf(term)>-1||q.options.some(o=>o.toLowerCase().indexOf(term)>-1))hits.push(i);
  }
  searchCount.hidden=false;
  hitAt=-1;
  searchCount.textContent=hits.length?hits.length+' hit'+(hits.length>1?'s':'')+' · Enter ↕':'no hits';
}
function stepSearch(dir){
  if(!hits.length)return;
  hitAt=(hitAt+dir+hits.length)%hits.length;
  searchCount.textContent=(hitAt+1)+' / '+hits.length+' · Enter ↕';
  jumpTo(hits[hitAt]);
}
qsearch.addEventListener('input',runSearch);
qsearch.addEventListener('keydown',e=>{
  if(e.key==='Enter'){e.preventDefault();stepSearch(e.shiftKey?-1:1)}
  else if(e.key==='Escape'){qsearch.value='';runSearch();qsearch.blur()}
});

/* ══════════════════════ BREAKDOWN DIALOG ══════════════════════ */
const bdDlg=$('#bdDlg');
function openBreakdown(){
  const q=SET.questions[ST.cur],chosen=ST.ans[ST.cur];
  if(chosen===undefined){say('Answer the question first');return}
  $('#bdTitle').textContent='Question '+(ST.cur+1)+' · full breakdown';
  $('#bdBody').innerHTML=
    '<p class="stem">'+esc(q.q)+'</p>'+
    '<div class="verdict '+(chosen===q.answer?'good':'bad')+'" style="margin:0 0 18px"><span class="vtxt">'+
      'Answer '+LETTERS[q.answer]+': '+esc(q.options[q.answer])+
      (chosen!==q.answer?' · you chose '+LETTERS[chosen]:'')+
    '</span></div>'+breakdownOrNote(q);
  $('#bdPrev').disabled=ST.cur===0;
  if(!bdDlg.open)bdDlg.showModal();
}
$('#bdPrev').addEventListener('click',()=>{
  bdDlg.close();go(-1);
  if(ST.ans[ST.cur]!==undefined)openBreakdown();
});
$('#bdNext').addEventListener('click',()=>{bdDlg.close();go(1)});
$$('dialog').forEach(d=>d.addEventListener('click',e=>{
  if(e.target===d||e.target.closest('[data-close]'))d.close();
}));
$$('[data-open-keys]').forEach(b=>b.addEventListener('click',()=>$('#keysDlg').showModal()));

/* ══════════════════════ TIMER ══════════════════════ */
let clock=null;
const fmt=s=>[s/3600,s%3600/60,s%60].map(v=>String(Math.floor(v)).padStart(2,'0')).join(':');
const playSVG='<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
const pauseSVG='<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><rect x="7" y="5" width="3.5" height="14" rx="1"/><rect x="13.5" y="5" width="3.5" height="14" rx="1"/></svg>';
function drawClock(){
  $('#clock').textContent=fmt(ST?ST.time:0);
  $('#clockBtn').innerHTML=clock?pauseSVG:playSVG;
  $('#clockBtn').setAttribute('aria-label',clock?'Pause timer':'Start timer');
}
function startClock(){
  if(clock||!ST)return;
  clock=setInterval(()=>{
    if(document.hidden)return;
    ST.time++;
    if(ST.time%10===0)save();
    drawClock();
  },1000);
  drawClock();
}
function stopClock(){
  clearInterval(clock);clock=null;save();
  if(ST)drawClock();
}
$('#clockBtn').addEventListener('click',()=>{
  if(clock){stopClock();P.noAuto=true;save()}
  else{P.noAuto=false;startClock()}
});

/* ══════════════════════ RESTART ══════════════════════ */
let armedAt=0;
function restart(){
  if(!SET)return;
  if(Date.now()-armedAt>3000){
    armedAt=Date.now();
    say('Restart '+SET.name+'? Press R again within 3s to clear answers, flags and time');
    return;
  }
  armedAt=0;
  stopClock();
  P.sets[SET.id]=blank();
  ST=P.sets[SET.id];
  streak=0;picked=null;
  save();drawClock();
  say('Fresh start');
  renderQuestion();renderRail();renderScore();
}

/* ══════════════════════ KEYBOARD ══════════════════════ */
addEventListener('keydown',e=>{
  if(e.metaKey||e.ctrlKey||e.altKey)return;
  if(/INPUT|TEXTAREA|SELECT/.test((document.activeElement&&document.activeElement.tagName)||''))return;
  const open=document.querySelector('dialog[open]');
  const k=e.key;
  if(k==='?'){
    e.preventDefault();
    if(open)open.close();
    $('#keysDlg').showModal();
    return;
  }
  if(open){
    if(open===bdDlg){
      if(k==='ArrowRight')$('#bdNext').click();
      if(k==='ArrowLeft')$('#bdPrev').click();
    }
    return;
  }
  if(!SET)return;
  if(k==='/'){e.preventDefault();qsearch.focus();qsearch.select();return}
  if(k===' '){e.preventDefault();go(1);return}
  if(k==='ArrowRight'){go(1);return}
  if(k==='ArrowLeft'){go(-1);return}
  if(ST.ans[ST.cur]===undefined){
    const lower=k.toLowerCase();
    if(picked!==null){
      const conf={s:'sure',g:'guess',b:'blind'}[lower];
      if(conf){lockIn(conf);return}
    }
    const n='12345'.indexOf(k)>-1?'12345'.indexOf(k):'abcde'.indexOf(lower);
    if(n>-1&&n<SET.questions[ST.cur].options.length){pick(n);return}
  }
  if(k==='e'||k==='E'){if(ST.ans[ST.cur]!==undefined)openBreakdown();return}
  if(k==='f'||k==='F'){toggleFlag();return}
  if(k==='r'||k==='R'){restart();return}
});

/* ══════════════════════ BOOT ══════════════════════ */
$('#tips').innerHTML=[...TIPS,...TIPS].map(t=>'<span>'+esc(t)+'</span>').join('');
route();
})();
