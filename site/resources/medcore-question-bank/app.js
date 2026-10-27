/* =========================================================
   MedCORE Question Bank · app  (kit edition — engine lives in /assets/studyverse.js)
   ========================================================= */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const L=['A','B','C','D','E'];
const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- saved progress · medcore_qb → medcore.qb one-time migration ---------- */
let P={fs:1,best:0,subj:{}};
try{
  let raw=localStorage.getItem('medcore.qb');
  if(raw==null){
    raw=localStorage.getItem('medcore_qb');
    if(raw!=null){ try{localStorage.setItem('medcore.qb',raw)}catch(e){} }
  }
  if(raw) P=Object.assign(P,JSON.parse(raw));
}catch(e){}
try{localStorage.removeItem('medcore_qb')}catch(e){}
const save=()=>{try{localStorage.setItem('medcore.qb',JSON.stringify(P))}catch(e){}};
const stOf=id=>P.subj[id]||(P.subj[id]={ans:{},flags:[],conf:{},cur:0,time:0});
document.documentElement.style.setProperty('--qs',P.fs);

const tally=(S,st)=>{let g=0,r=0;Object.entries(st.ans).forEach(([i,a])=>{const q=S.questions[i];if(!q)return;a===q.answer?g++:r++});return {g,r,n:S.questions.length}};

/* =========================================================
   ROUTER  #/  = subjects,  #/s/<id> = practice
   ========================================================= */
let S=null,st=null,streak=0,sel=null;
function route(){
  const m=location.hash.match(/^#\/s\/([\w-]+)/),subj=m&&SUBJECTS.find(s=>s.id===m[1]);
  stopClock();
  if(subj){S=subj;st=stOf(S.id);st.conf=st.conf||{};showPractice()}
  else{S=null;showHome()}
  scrollTo({top:0});
}
addEventListener('hashchange',route);

/* =========================================================
   SUBJECTS
   ========================================================= */
$('#tips').innerHTML=[...TIPS,...TIPS].map(t=>`<span>${t}</span>`).join('');
function showHome(){
  $('#practice').hidden=true;$('#home').hidden=false;$('#navPractice').hidden=true;
  $('#navHome').setAttribute('aria-current','page');
  let g=0,r=0,time=0;
  SUBJECTS.forEach(s=>{const t=tally(s,stOf(s.id));g+=t.g;r+=t.r;time+=stOf(s.id).time});
  SV.countUp($('#stAnswered'),g+r);SV.countUp($('#stAcc'),g+r?Math.round(g/(g+r)*100):0,'%');SV.countUp($('#stBest'),P.best);SV.countUp($('#stTime'),Math.round(time/60));
  $('#subjGrid').innerHTML=SUBJECTS.map((s,i)=>{const t=tally(s,stOf(s.id));const done=t.g+t.r;
    return `<button class="card hov subj rv" data-go="${s.id}" style="--accent:var(--c${i%4+1})">
      <div class="top"><span class="no">${String(i+1).padStart(2,'0')}</span><span class="emoji" aria-hidden="true">${s.emoji}</span></div>
      <h3>${s.name}</h3>
      <div class="prog" aria-label="${done} of ${t.n} answered"><i class="g" style="width:${t.g/t.n*100}%"></i><i class="r" style="width:${t.r/t.n*100}%"></i></div>
      <div class="foot"><span>${done} / ${t.n} answered${done?` · ${Math.round(t.g/done*100)}%`:''}</span><span class="go">${done?'Resume':'Start'} →</span></div>
    </button>`}).join('');
  SV.stagger($('#home'));
}
$('#subjGrid').onclick=e=>{const b=e.target.closest('[data-go]');if(b)location.hash='#/s/'+b.dataset.go;};

/* =========================================================
   PRACTICE
   ========================================================= */
function showPractice(){
  $('#home').hidden=true;$('#practice').hidden=false;
  $('#navHome').removeAttribute('aria-current');
  const np=$('#navPractice');np.hidden=false;np.href=location.hash;np.textContent=S.name;np.setAttribute('aria-current','page');
  $('#pName').textContent=S.name;
  streak=0;sel=null;
  st.cur=Math.min(st.cur,S.questions.length-1);
  drawClock();
  renderQ();renderScore();renderRail();
}

/* ---------- seven-layer breakdown ---------- */
const LAYERS=[['concept','Concept'],['discriminator','Discriminator'],['trap','Trap'],['rule','Rule'],['others','Why every other option dies'],['highyield','High-yield link'],['hook','Memory hook']];
function breakdown(q){
  const Ly=q.layers||{};let n=0;
  return `<div class="bd">${LAYERS.filter(([k])=>Ly[k]).map(([k,label])=>{n++;
    const body=k==='others'?`<ul>${Object.entries(Ly.others).map(([l,t])=>`<li><b>${l}</b><span>${t}</span></li>`).join('')}</ul>`:`<p>${Ly[k]}</p>`;
    return `<div class="layer${k==='others'?' wide':''}" style="--accent:var(--c${(n-1)%4+1});--i:${n}"><h4><span>${n}</span>${label}</h4>${body}</div>`}).join('')}</div>`;
}

/* ---------- one question ---------- */
function renderQ(){
  const i=st.cur,q=S.questions[i],a=st.ans[i],done=a!==undefined,ok=done&&a===q.answer,flag=st.flags.includes(i);
  const ready=sel!==null;
  $('#qcard').innerHTML=`
    <div class="qhead"><span class="qno">Question ${i+1} <span class="muted" style="font-size:.8em">of ${S.questions.length}</span></span>
      <button class="flag" id="flagBtn" aria-pressed="${flag}">⚑ ${flag?'Flagged':'Flag'}</button></div>
    <p class="stem">${q.q}</p>
    <div class="opts" role="group" aria-label="Answer options">${q.options.map((o,j)=>{
      let cls='';if(done){if(j===q.answer)cls='correct';else if(j===a)cls='wrong';else cls='dim'}else if(j===sel)cls='sel';
      return `<button class="opt ${cls}" data-a="${j}" ${done?'disabled':''} aria-label="Option ${L[j]}: ${o}"><span class="let">${L[j]}</span><span>${o}</span>${done&&j===q.answer?'<span class="mark">✓</span>':done&&j===a?'<span class="mark">✗</span>':`<span class="key">${j+1}</span>`}</button>`}).join('')}</div>
    ${done?`<div class="verdict ${ok?'good':'bad'}"><span class="vtxt">${ok?'✓ Correct!':'✗ Not quite.'} The answer is ${L[q.answer]}.</span><button class="btn ghost sm" id="expandBtn">⤢ Expand <kbd>E</kbd></button></div>
      <div class="bd-wrap"><div class="bd-head"><h3>Seven-layer breakdown</h3></div>${breakdown(q)}</div>`
    :`<div class="conf-row${ready?' ready':''}" id="confRow" role="group" aria-label="Confidence">
        <span class="conf-lbl">${ready?'How sure were you?':'Pick an option, then lock it in'}</span>
        <button class="confb sure" data-c="sure" ${ready?'':'disabled'}>● Sure</button>
        <button class="confb guess" data-c="guess" ${ready?'':'disabled'}>◐ Guess</button>
        <button class="confb blind" data-c="blind" ${ready?'':'disabled'}>○ Blind</button>
      </div>
      <div class="bd-wrap"><div class="placeholder"><b>◆ Confidence-locked reveal</b><p class="muted" style="margin-top:6px">Answering needs two taps: pick an option, then say how sure you are. The seven-layer breakdown lands after the lock-in.</p></div></div>`}`;
  $('#prevBtn').disabled=i===0;
  $('#nextBtn').innerHTML=i===S.questions.length-1?'Finish ›':done?'Next question ›':'Skip ahead ›';
}
/* single delegated listener — survives re-renders */
$('#qcard').addEventListener('click',e=>{
  const o=e.target.closest('[data-a]');
  if(o){selectOpt(+o.dataset.a);return}
  const c=e.target.closest('[data-c]');
  if(c){lockIn(c.dataset.c);return}
  if(e.target.closest('#flagBtn')){toggleFlag();return}
  if(e.target.closest('#expandBtn')){openBd()}
});
function selectOpt(j){
  const i=st.cur,q=S.questions[i];
  if(st.ans[i]!==undefined||j>=q.options.length)return;
  sel=j;renderQ();
}
function lockIn(conf){
  const i=st.cur,q=S.questions[i];
  if(st.ans[i]!==undefined||sel===null)return;
  const j=sel;
  st.ans[i]=j;
  st.conf=st.conf||{};
  st.conf[i]=conf;
  const ok=j===q.answer;
  if(ok){streak++;if(streak>P.best)P.best=streak;const el=$(`#qcard [data-a="${j}"]`);if(el){const b=el.getBoundingClientRect();SV.burst(b.left+40,b.top+b.height/2)}if(streak%5===0)SV.toast(`🔥 ${streak} in a row!`)}
  else streak=0;
  if(!clock&&!P.noAuto)startClock();
  sel=null;
  save();renderQ();renderScore();renderRail();
}
function go(d){
  const n=st.cur+d;
  if(n<0)return;
  if(n>=S.questions.length){const t=tally(S,st);SV.toast(`End of ${S.name}: ${t.g} right, ${t.r} wrong, ${t.n-t.g-t.r} left`);SV.burst(innerWidth/2,innerHeight/3,60);return}
  st.cur=n;sel=null;save();renderQ();
  if(innerWidth<1000)$('#qcard').scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});
}
$('#prevBtn').onclick=()=>go(-1);
$('#nextBtn').onclick=()=>go(1);
function toggleFlag(){const i=st.cur;st.flags=st.flags.includes(i)?st.flags.filter(x=>x!==i):[...st.flags,i];save();renderQ();SV.toast(st.flags.includes(i)?'Flagged for review':'Flag removed');renderRail()}

/* ---------- rail: jump, progress, review ---------- */
function renderRail(){
  const n=S.questions.length,t=tally(S,st),done=t.g+t.r,left=n-done;
  const barG=$('#barG'),barR=$('#barR');
  barG.style.width=(t.g/n*100)+'%';
  barR.style.width=(t.r/n*100)+'%';
  $('#barTxt').textContent=`${done} / ${n} answered`;
  $('#trRight b').textContent=t.g;
  $('#trWrong b').textContent=t.r;
  $('#trFlag b').textContent=st.flags.length;
  $('#trLeft b').textContent=left;
  const jumpInput=$('#jumpInput');
  jumpInput.max=n;
  jumpInput.placeholder=`1–${n}`;
  /* confidence: accuracy grouped by how sure you were */
  const conf=st.conf||{},groups={sure:[0,0],guess:[0,0],blind:[0,0]};
  let unmarked=0;
  Object.keys(st.ans).forEach(k=>{
    const i=+k,q=S.questions[i];if(!q)return;
    const c=conf[i];
    if(!c||!groups[c]){unmarked++;return}
    groups[c][1]++;if(st.ans[i]===q.answer)groups[c][0]++;
  });
  const confTally=$('#confTally'),confEmpty=$('#confEmpty');
  const rows=[];
  const COL={sure:'var(--ok)',guess:'var(--c2)',blind:'var(--c4)'};
  const NAME={sure:'Sure',guess:'Guess',blind:'Blind'};
  Object.keys(groups).forEach(k=>{const [g,c2]=groups[k];if(c2)rows.push(
    `<div class="trow"><i style="background:${COL[k]}"></i><span>${NAME[k]}</span><b>${Math.round(g/c2*100)}%</b><em>${g}/${c2}</em></div>`)});
  if(unmarked)rows.push(`<div class="trow"><i style="background:var(--surface)"></i><span>Unmarked</span><b>—</b><em>${unmarked}</em></div>`);
  confTally.hidden=!rows.length;confEmpty.hidden=!!rows.length;
  confTally.innerHTML=rows.join('');
  /* review: wrong answers + flags, nearest first, capped */
  const items=[];
  Object.keys(st.ans).forEach(k=>{const i=+k;if(S.questions[i]&&st.ans[i]!==S.questions[i].answer)items.push({i,w:true})});
  st.flags.forEach(i=>{if(!items.some(x=>x.i===i))items.push({i,w:false})});
  items.sort((a,b)=>a.i-b.i);
  const CAP=48;
  const list=$('#reviewList'),empty=$('#reviewEmpty'),more=$('#reviewMore');
  list.hidden=!items.length;empty.hidden=!!items.length;
  more.hidden=items.length<=CAP;
  if(items.length>0)more.textContent=`+${items.length-CAP} more — narrow it with the jump box`;
  list.innerHTML=items.slice(0,CAP).map(({i,w})=>
    `<button class="qchip ${w?'w':'f'} ${i===st.cur?'cur':''}" data-q="${i}">${i+1}${w?'':' ⚑'}</button>`).join('');
}
$('#jumpForm').addEventListener('submit',e=>{e.preventDefault();jumpTo(parseInt($('#jumpInput').value,10)-1)});
$('#firstUnanswered').onclick=()=>{const i=S.questions.findIndex((q,i)=>st.ans[i]===undefined);jumpTo(i<0?0:i)};
$('#firstFlagged').onclick=()=>{if(!st.flags.length){SV.toast('No flagged questions yet');return}const next=st.flags.find(i=>i>st.cur);jumpTo(next!==undefined?next:st.flags.slice().sort((a,b)=>a-b)[0])};
function jumpTo(i){
  if(!Number.isFinite(i))return;
  i=Math.max(0,Math.min(S.questions.length-1,i));
  st.cur=i;sel=null;save();renderQ();renderRail();
  $('#qcard').scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});
}
$('#reviewList').addEventListener('click',e=>{const c=e.target.closest('[data-q]');if(c)jumpTo(+c.dataset.q)});
function renderScore(){const t=tally(S,st);$('#scOk').textContent='✓ '+t.g;$('#scBad').textContent='✗ '+t.r;$('#streak').textContent='🔥 '+streak}

/* ---------- search: in-subject stem + options ---------- */
const qsearch=$('#qsearch'),searchCount=$('#searchCount');
let hits=[],hi=-1;
function runSearch(){
  const term=qsearch.value.trim().toLowerCase();
  if(!term){hits=[];hi=-1;searchCount.hidden=true;return}
  hits=[];
  for(let i=0;i<S.questions.length;i++){
    const q=S.questions[i];
    if(q.q.toLowerCase().includes(term)||q.options.some(o=>o.toLowerCase().includes(term)))hits.push(i);
  }
  searchCount.hidden=false;hi=-1;
  searchCount.textContent=hits.length?`${hits.length} hit${hits.length>1?'s':''} · Enter ↕`:'no hits';
}
function stepSearch(dir){
  if(!hits.length)return;
  hi=(hi+dir+hits.length)%hits.length;
  searchCount.textContent=`${hi+1} / ${hits.length} · Enter ↕`;
  jumpTo(hits[hi]);
}
qsearch.addEventListener('input',runSearch);
qsearch.addEventListener('keydown',e=>{
  if(e.key==='Enter'){e.preventDefault();stepSearch(e.shiftKey?-1:1)}
  else if(e.key==='Escape'){qsearch.value='';runSearch();qsearch.blur()}
});

/* ---------- full breakdown dialog ---------- */
const bdDlg=$('#bdDlg');
function openBd(){
  const q=S.questions[st.cur],a=st.ans[st.cur];
  if(a===undefined){SV.toast('Answer the question first');return}
  $('#bdTitle').textContent=`Question ${st.cur+1} · full breakdown`;
  $('#bdBody').innerHTML=`<p class="stem">${q.q}</p><div class="verdict ${a===q.answer?'good':'bad'}" style="margin:0 0 18px"><span class="vtxt">Answer ${L[q.answer]}: ${q.options[q.answer]}${a!==q.answer?` · you chose ${L[a]}`:''}</span></div>${breakdown(q)}`;
  $('#bdPrev').disabled=st.cur===0;
  if(!bdDlg.open)bdDlg.showModal();
}
$('#bdPrev').onclick=()=>{bdDlg.close();go(-1);if(st.ans[st.cur]!==undefined)openBd()};
$('#bdNext').onclick=()=>{bdDlg.close();go(1)};
$$('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d||e.target.closest('[data-close]'))d.close()}));
$$('[data-open-keys]').forEach(b=>b.onclick=()=>$('#keysDlg').showModal());

/* ---------- timer ---------- */
let clock=null;
const fmt=s=>[s/3600,s%3600/60,s%60].map(v=>String(Math.floor(v)).padStart(2,'0')).join(':');
function drawClock(){$('#clock').textContent=fmt(st?st.time:0);$('#clockBtn').textContent=clock?'❚❚':'▶';$('#clockBtn').setAttribute('aria-label',clock?'Pause timer':'Start timer')}
function startClock(){if(clock||!st)return;clock=setInterval(()=>{if(document.hidden)return;st.time++;if(st.time%10===0)save();drawClock()},1000);drawClock()}
function stopClock(){clearInterval(clock);clock=null;save();if(st)drawClock()}
$('#clockBtn').onclick=()=>{if(clock){stopClock();P.noAuto=true;save()}else{P.noAuto=false;startClock()}};

/* ---------- restart ---------- */
let armed=0;
function restart(){
  if(!S)return;
  if(Date.now()-armed>3000){armed=Date.now();SV.toast(`Restart ${S.name}? Press again within 3 seconds to clear answers, flags and time`);return}
  armed=0;
  stopClock();P.subj[S.id]={ans:{},flags:[],conf:{},cur:0,time:0};st=P.subj[S.id];streak=0;sel=null;save();drawClock();SV.toast('Fresh start');renderQ();renderRail();renderScore();
}
$('#restartBtn').onclick=restart;

/* ---------- keyboard ---------- */
addEventListener('keydown',e=>{
  if(e.metaKey||e.ctrlKey||e.altKey||/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName))return;
  const k=e.key,open=$('dialog[open]');
  if(k==='?'){e.preventDefault();open&&open.close();$('#keysDlg').showModal();return}
  if(open){if(open===bdDlg){if(k==='ArrowRight')$('#bdNext').click();if(k==='ArrowLeft')$('#bdPrev').click()}return}
  if(!S)return;
  if(k==='/'){e.preventDefault();qsearch.focus();qsearch.select();return}
  if(k===' '){e.preventDefault();go(1);return}
  if(k==='ArrowRight'){go(1);return}
  if(k==='ArrowLeft'){go(-1);return}
  const answered=st.ans[st.cur]!==undefined;
  if(!answered){
    if(sel!==null){
      const c={s:'sure',g:'guess',b:'blind'}[k.toLowerCase()];
      if(c){lockIn(c);return}
      if(k>='1'&&k<='5'){selectOpt(+k-1);return}
    }
    const n='12345'.indexOf(k)>=0?'12345'.indexOf(k):'abcde'.indexOf(k.toLowerCase());
    if(n>=0&&n<S.questions[st.cur].options.length){selectOpt(n);return}
  }
  if(k==='e'||k==='E'){if(st.ans[st.cur]!==undefined)openBd();return}
  if(k==='f'||k==='F'){toggleFlag();return}
  if(k==='r'||k==='R'){restart();return}
});

/* ---------- init ---------- */
$$('[data-scroll]').forEach(b=>b.onclick=()=>document.getElementById(b.dataset.scroll).scrollIntoView({behavior:reduce?'auto':'smooth'}));
route();
