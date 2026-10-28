/* =========================================================
   MedCoreX Past-Paper Practice Hub · app
   qbank-style realtime practice. Home groups sets by paper.
   ========================================================= */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const L=['A','B','C','D','E'];
const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const SV=window.SV||{};

/* ---------- saved progress (own key; safe migration) ---------- */
let P={best:0,sets:{}};
try{
  let raw=localStorage.getItem('medcore.pph');
  if(raw==null){
    raw=localStorage.getItem('medcore_pph');
    if(raw!=null){try{localStorage.setItem('medcore.pph',raw)}catch(e){}}
  }
  if(raw)P=Object.assign(P,JSON.parse(raw));
}catch(e){}
try{localStorage.removeItem('medcore_pph')}catch(e){}
const save=()=>{try{localStorage.setItem('medcore.pph',JSON.stringify(P))}catch(e){}};
const stOf=id=>P.sets[id]||(P.sets[id]={ans:{},flags:[],conf:{},cur:0,time:0});
document.documentElement.style.setProperty('--qs',1);

/* =========================================================
   ROUTER  #/ = papers,  #/s/<set-id> = practice
   ========================================================= */
let S=null,st=null,streak=0,sel=null;
function route(){
  const m=location.hash.match(/^#\/s\/(.+)$/),set=m&&SUBJECTS.find(s=>s.id===decodeURIComponent(m[1]));
  stopClock();
  if(set){S=set;st=stOf(S.id);st.conf=st.conf||{};showPractice()}
  else{S=null;showHome()}
  scrollTo({top:0});
}
addEventListener('hashchange',route);

const tally=(s,st2)=>{const n=s.questions.length;let g=0,r=0;
  for(let i=0;i<n;i++){const a=st2.ans[i];if(a===undefined)continue;if(a===s.questions[i].answer)g++;else r++}
  return{n,g,r}};

$('#tips').innerHTML=[...TIPS,...TIPS].map(t=>`<span>${t}</span>`).join('');

/* =========================================================
   HOME · paper-grouped subject grid
   ========================================================= */
function showHome(){
  $('#practice').hidden=true;$('#home').hidden=false;$('#navPractice').hidden=true;
  $('#navHome').setAttribute('aria-current','page');
  let g=0,r=0,time=0;
  SUBJECTS.forEach(s=>{const t=tally(s,stOf(s.id));g+=t.g;r+=t.r;time+=stOf(s.id).time||0});
  if(SV.countUp){SV.countUp($('#stAnswered'),g+r);SV.countUp($('#stAcc'),g+r?Math.round(g/(g+r)*100):0,'%');SV.countUp($('#stBest'),P.best||0);SV.countUp($('#stTime'),Math.round(time/60))}
  else{$('#stAnswered').textContent=g+r;$('#stAcc').textContent=(g+r?Math.round(g/(g+r)*100):0)+'%';$('#stBest').textContent=P.best||0;$('#stTime').textContent=Math.round(time/60)}

  let gi=0;
  $('#papers').innerHTML=PAPERS.map(p=>{
    const sets=SUBJECTS.filter(s=>s.paper===p.id);
    const total=sets.reduce((a,s)=>a+s.questions.length,0);
    const cards=sets.map(s=>{const t=tally(s,stOf(s.id));const done=t.g+t.r;const accent=`var(--c${gi++%4+1})`;
      return `<button class="card hov subj rv" data-go="${encodeURIComponent(s.id)}" style="--accent:${accent}">
        <div class="top"><span class="no">${String(gi).padStart(2,'0')}</span><span class="emoji" aria-hidden="true">${s.questions.length}</span></div>
        <h3>${s.name}</h3>
        <div class="prog"><i class="g" style="width:${t.n?t.g/t.n*100:0}%"></i><i class="r" style="width:${t.n?t.r/t.n*100:0}%"></i></div>
        <div class="foot"><span>${done} / ${t.n} answered${done?` · ${Math.round(t.g/done*100)}%`:''}</span><span class="go">${done?'Resume':'Start'} →</span></div>
      </button>`}).join('');
    return `<div class="paper-block">
      <div class="paper-head rv"><h2>${p.name}</h2><span class="pc">${total} MCQs</span><span class="pline"></span></div>
      <div class="subjects">${cards}</div>
    </div>`;
  }).join('');
  if(SV.stagger)SV.stagger($('#home'));
}
$('#papers').onclick=e=>{const b=e.target.closest('[data-go]');if(b)location.hash='#/s/'+b.dataset.go};
$$('[data-scroll]').forEach(b=>b.onclick=()=>{const el=document.getElementById(b.dataset.scroll);if(el)el.scrollIntoView({behavior:reduce?'auto':'smooth'})});

/* =========================================================
   PRACTICE
   ========================================================= */
function showPractice(){
  $('#home').hidden=true;$('#practice').hidden=false;
  $('#navHome').removeAttribute('aria-current');
  const np=$('#navPractice');np.hidden=false;np.href=location.hash;
  const paper=PAPERS.find(p=>p.id===S.paper);
  np.textContent=(paper?paper.name+' · ':'')+S.name;np.setAttribute('aria-current','page');
  $('#pSub').textContent=(paper?paper.name:'Practice')+' · realtime practice';
  $('#pName').textContent=S.name;
  streak=0;sel=null;
  st.cur=Math.min(st.cur||0,S.questions.length-1);
  drawClock();renderQ();renderScore();renderRail();
}

/* ---------- seven-layer breakdown ---------- */
const LAYERS=[['rule','Rule'],['trap','Trap'],['fix','Fix'],['note','Note']];
function breakdown(q){
  const Ly=q.layers||{};let n=0;
  const inner=LAYERS.filter(([k])=>Ly[k]).map(([k,label])=>{n++;
    return `<div class="layer${k==='rule'||k==='note'?' wide':''}" style="--accent:var(--c${(n-1)%4+1});--i:${n}"><h4><span>${n}</span>${label}</h4><p>${Ly[k]}</p></div>`}).join('');
  const inf=q.inf?`<span class="inf-badge">AI-inferred key</span>`:'';
  return (inner||inf)?`<div class="bd">${inner}</div>${inf}`:'';
}

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
      <div class="bd-wrap"><div class="bd-head"><h3>Reasoning breakdown</h3></div>${breakdown(q)}</div>`
    :`<div class="conf-row${ready?' ready':''}" id="confRow" role="group" aria-label="Confidence">
        <span class="conf-lbl">${ready?'How sure were you?':'Pick an option, then lock it in'}</span>
        <button class="confb sure" data-c="sure" ${ready?'':'disabled'}>● Sure</button>
        <button class="confb guess" data-c="guess" ${ready?'':'disabled'}>◐ Guess</button>
        <button class="confb blind" data-c="blind" ${ready?'':'disabled'}>○ Blind</button>
      </div>
      <div class="bd-wrap"><div class="placeholder"><b>◆ Confidence-locked reveal</b><p class="muted" style="margin-top:6px">Answering needs two taps: pick an option, then say how sure you are.</p></div></div>`}`;
  $('#prevBtn').disabled=i===0;
  $('#nextBtn').innerHTML=i===S.questions.length-1?'Finish ›':done?'Next question ›':'Skip ahead ›';
}
$('#qcard').addEventListener('click',e=>{
  const o=e.target.closest('[data-a]');if(o){selectOpt(+o.dataset.a);return}
  const c=e.target.closest('[data-c]');if(c){lockIn(c.dataset.c);return}
  if(e.target.closest('#flagBtn')){toggleFlag();return}
  if(e.target.closest('#expandBtn')){openBd()}
});
function selectOpt(j){const i=st.cur,q=S.questions[i];if(st.ans[i]!==undefined||j>=q.options.length)return;sel=j;renderQ()}
function lockIn(conf){
  const i=st.cur,q=S.questions[i];if(st.ans[i]!==undefined||sel===null)return;
  const j=sel;st.ans[i]=j;st.conf=st.conf||{};st.conf[i]=conf;
  const ok=j===q.answer;
  if(ok){streak++;if((P.best||0)<streak)P.best=streak;const el=$(`#qcard [data-a="${j}"]`);if(el&&SV.burst){const b=el.getBoundingClientRect();SV.burst(b.left+40,b.top+b.height/2)}if(streak%5===0&&SV.toast)SV.toast(`🔥 ${streak} in a row!`)}
  else streak=0;
  if(!clock&&!P.noAuto)startClock();
  sel=null;save();renderQ();renderScore();renderRail();
}
function go(d){
  const n=st.cur+d;if(n<0)return;
  if(n>=S.questions.length){const t=tally(S,st);if(SV.toast)SV.toast(`End of ${S.name}: ${t.g} right, ${t.r} wrong, ${t.n-t.g-t.r} left`);if(SV.burst)SV.burst(innerWidth/2,innerHeight/3,60);return}
  st.cur=n;sel=null;save();renderQ();
  if(innerWidth<1000)$('#qcard').scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});
}
$('#prevBtn').onclick=()=>go(-1);$('#nextBtn').onclick=()=>go(1);
function toggleFlag(){const i=st.cur;st.flags=st.flags.includes(i)?st.flags.filter(x=>x!==i):[...st.flags,i];save();renderQ();if(SV.toast)SV.toast(st.flags.includes(i)?'Flagged for review':'Flag removed');renderRail()}

/* ---------- rail ---------- */
function renderRail(){
  const n=S.questions.length,t=tally(S,st),done=t.g+t.r,left=n-done;
  $('#barG').style.width=(t.g/n*100)+'%';$('#barR').style.width=(t.r/n*100)+'%';
  $('#barTxt').textContent=`${done} / ${n} answered`;
  $('#trRight b').textContent=t.g;$('#trWrong b').textContent=t.r;$('#trFlag b').textContent=st.flags.length;$('#trLeft b').textContent=left;
  const ji=$('#jumpInput');ji.max=n;ji.placeholder=`1–${n}`;
  const conf=st.conf||{},groups={sure:[0,0],guess:[0,0],blind:[0,0]};let unmarked=0;
  Object.keys(st.ans).forEach(k=>{const i=+k,q=S.questions[i];if(!q)return;const c=conf[i];if(!c||!groups[c]){unmarked++;return}groups[c][1]++;if(st.ans[i]===q.answer)groups[c][0]++});
  const rows=[],COL={sure:'var(--ok)',guess:'var(--c2)',blind:'var(--c4)'},NAME={sure:'Sure',guess:'Guess',blind:'Blind'};
  Object.keys(groups).forEach(k=>{const[g,c2]=groups[k];if(c2)rows.push(`<div class="trow"><i style="background:${COL[k]}"></i><span>${NAME[k]}</span><b>${Math.round(g/c2*100)}%</b><em>${g}/${c2}</em></div>`)});
  if(unmarked)rows.push(`<div class="trow"><i style="background:var(--surface)"></i><span>Unmarked</span><b>—</b><em>${unmarked}</em></div>`);
  const ct=$('#confTally'),ce=$('#confEmpty');ct.hidden=!rows.length;ce.hidden=!!rows.length;ct.innerHTML=rows.join('');
  const items=[];
  Object.keys(st.ans).forEach(k=>{const i=+k;if(S.questions[i]&&st.ans[i]!==S.questions[i].answer)items.push({i,w:true})});
  st.flags.forEach(i=>{if(!items.some(x=>x.i===i))items.push({i,w:false})});
  items.sort((a,b)=>a.i-b.i);
  const CAP=48,list=$('#reviewList'),empty=$('#reviewEmpty'),more=$('#reviewMore');
  list.hidden=!items.length;empty.hidden=!!items.length;more.hidden=items.length<=CAP;
  if(items.length>0)more.textContent=`+${items.length-CAP} more — narrow it with the jump box`;
  list.innerHTML=items.slice(0,CAP).map(({i,w})=>`<button class="qchip ${w?'w':'f'} ${i===st.cur?'cur':''}" data-q="${i}">${i+1}${w?'':' ⚑'}</button>`).join('');
}
$('#jumpForm').addEventListener('submit',e=>{e.preventDefault();jumpTo(parseInt($('#jumpInput').value,10)-1)});
$('#firstUnanswered').onclick=()=>{const i=S.questions.findIndex((q,i)=>st.ans[i]===undefined);jumpTo(i<0?0:i)};
$('#firstFlagged').onclick=()=>{if(!st.flags.length){if(SV.toast)SV.toast('No flagged questions yet');return}const next=st.flags.find(i=>i>st.cur);jumpTo(next!==undefined?next:st.flags.slice().sort((a,b)=>a-b)[0])};
function jumpTo(i){if(!Number.isFinite(i))return;i=Math.max(0,Math.min(S.questions.length-1,i));st.cur=i;sel=null;save();renderQ();renderRail();$('#qcard').scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'})}
$('#reviewList').addEventListener('click',e=>{const c=e.target.closest('[data-q]');if(c)jumpTo(+c.dataset.q)});
function renderScore(){const t=tally(S,st);$('#scOk').textContent='✓ '+t.g;$('#scBad').textContent='✗ '+t.r;$('#streak').textContent='🔥 '+streak}

/* ---------- search ---------- */
const qsearch=$('#qsearch'),searchCount=$('#searchCount');let hits=[],hi=-1;
function runSearch(){const term=qsearch.value.trim().toLowerCase();if(!term){hits=[];hi=-1;searchCount.hidden=true;return}hits=[];for(let i=0;i<S.questions.length;i++){const q=S.questions[i];if(q.q.toLowerCase().includes(term)||q.options.some(o=>o.toLowerCase().includes(term)))hits.push(i)}searchCount.hidden=false;hi=-1;searchCount.textContent=hits.length?`${hits.length} hit${hits.length>1?'s':''} · Enter ↕`:'no hits'}
function stepSearch(dir){if(!hits.length)return;hi=(hi+dir+hits.length)%hits.length;searchCount.textContent=`${hi+1} / ${hits.length} · Enter ↕`;jumpTo(hits[hi])}
qsearch.addEventListener('input',runSearch);
qsearch.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();stepSearch(e.shiftKey?-1:1)}else if(e.key==='Escape'){qsearch.value='';runSearch();qsearch.blur()}});

/* ---------- full breakdown dialog ---------- */
const bdDlg=$('#bdDlg');
function openBd(){const q=S.questions[st.cur],a=st.ans[st.cur];if(a===undefined){if(SV.toast)SV.toast('Answer the question first');return}$('#bdTitle').textContent=`Question ${st.cur+1} · full breakdown`;$('#bdBody').innerHTML=`<p class="stem">${q.q}</p><div class="verdict ${a===q.answer?'good':'bad'}" style="margin:0 0 18px"><span class="vtxt">Answer ${L[q.answer]}: ${q.options[q.answer]}${a!==q.answer?` · you chose ${L[a]}`:''}</span></div>${breakdown(q)}`;$('#bdPrev').disabled=st.cur===0;if(!bdDlg.open)bdDlg.showModal()}
$('#bdPrev').onclick=()=>{bdDlg.close();go(-1);if(st.ans[st.cur]!==undefined)openBd()};
$('#bdNext').onclick=()=>{bdDlg.close();go(1)};
$$('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d||e.target.closest('[data-close]'))d.close()}));
$$('[data-open-keys]').forEach(b=>b.onclick=()=>$('#keysDlg').showModal());

/* ---------- timer ---------- */
let clock=null;const fmt=s=>[s/3600,s%3600/60,s%60].map(v=>String(Math.floor(v)).padStart(2,'0')).join(':');
function drawClock(){$('#clock').textContent=fmt(st?st.time:0);$('#clockBtn').textContent=clock?'❚❚':'▶';$('#clockBtn').setAttribute('aria-label',clock?'Pause timer':'Start timer')}
function startClock(){if(clock||!st)return;clock=setInterval(()=>{if(document.hidden)return;st.time++;if(st.time%10===0)save();drawClock()},1000);drawClock()}
function stopClock(){clearInterval(clock);clock=null;save();if(st)drawClock()}
$('#clockBtn').onclick=()=>{if(clock){stopClock();P.noAuto=true;save()}else{P.noAuto=false;startClock()}};

/* ---------- restart ---------- */
let armed=0;
function restart(){if(!S)return;if(Date.now()-armed>3000){armed=Date.now();if(SV.toast)SV.toast(`Restart ${S.name}? Press again within 3s to clear answers, flags and time`);return}armed=0;stopClock();P.sets[S.id]={ans:{},flags:[],conf:{},cur:0,time:0};st=P.sets[S.id];streak=0;sel=null;save();drawClock();if(SV.toast)SV.toast('Fresh start');renderQ();renderRail();renderScore()}
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
    if(sel!==null){const c={s:'sure',g:'guess',b:'blind'}[k.toLowerCase()];if(c){lockIn(c);return}if(k>='1'&&k<='5'){selectOpt(+k-1);return}}
    const n='12345'.indexOf(k)>=0?'12345'.indexOf(k):'abcde'.indexOf(k.toLowerCase());
    if(n>=0&&n<S.questions[st.cur].options.length){selectOpt(n);return}
  }
  if(k==='e'||k==='E'){if(st.ans[st.cur]!==undefined)openBd();return}
  if(k==='f'||k==='F'){toggleFlag();return}
  if(k==='r'||k==='R'){restart();return}
});

route();
