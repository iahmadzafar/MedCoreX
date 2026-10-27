/* =========================================================
   MedCORE Question Bank · app
   ========================================================= */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const rand=(a,b)=>Math.random()*(b-a)+a;
const pick=a=>a[Math.floor(Math.random()*a.length)];
const hsl=(h,s,l)=>`hsl(${Math.round((h%360+360)%360)} ${Math.round(s)}% ${Math.round(l)}%)`;
const L=['A','B','C','D','E'];
const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const SCHEMES={Triadic:[0,120,240,60],Complementary:[0,180,30,210],Split:[0,150,210,45],Analogous:[0,32,64,-32],Tetradic:[0,90,180,270],Candy:[0,300,60,200]};
const DISPLAY=[
  {f:'Futura,"Century Gothic","Trebuchet MS",sans-serif',w:800,c:'uppercase',t:'.01em'},
  {f:'Rockwell,"Roboto Slab",Georgia,serif',w:800,c:'none',t:'-.01em'},
  {f:'"American Typewriter","Courier New",monospace',w:700,c:'none',t:'-.02em'},
  {f:'"Marker Felt","Comic Sans MS",cursive',w:700,c:'none',t:'0'},
  {f:'"Chalkboard SE","Comic Sans MS",cursive',w:700,c:'none',t:'0'},
  {f:'Didot,"Bodoni 72","Times New Roman",serif',w:700,c:'none',t:'-.02em'},
  {f:'Copperplate,"Copperplate Gothic Light",serif',w:700,c:'uppercase',t:'.04em'},
  {f:'Impact,"Arial Black",sans-serif',w:400,c:'uppercase',t:'.02em'},
  {f:'"Avenir Next Condensed","Arial Narrow",sans-serif',w:800,c:'uppercase',t:'.01em'},
  {f:'"Cooper Black","Bookman Old Style",Georgia,serif',w:900,c:'none',t:'-.01em'}
];
const BODY=[
  '"Avenir Next","Segoe UI",sans-serif','"Gill Sans","Gill Sans MT",sans-serif',
  'Optima,Candara,sans-serif','Georgia,"Times New Roman",serif',
  'Menlo,Consolas,monospace','Baskerville,"Hoefler Text",Georgia,serif','"Trebuchet MS",Verdana,sans-serif'
];
const SHADOWS=[
  ['6px 6px 0 var(--ink)','10px 10px 0 var(--ink)'],
  ['6px 6px 0 var(--c4)','10px 10px 0 var(--c1)'],
  ['4px 4px 0 var(--c2),8px 8px 0 var(--ink)','6px 6px 0 var(--c2),12px 8px 0 var(--ink)'],
  ['0 14px 30px -12px color-mix(in srgb,var(--c4) 70%,transparent)','0 22px 40px -12px color-mix(in srgb,var(--c1) 70%,transparent)'],
  ['-6px 6px 0 var(--c3)','-10px 10px 0 var(--ink)']
];
const ADJ=['Electric','Bubblegum','Cosmic','Retro','Sour','Velvet','Jazzy','Turbo','Lemon','Neon','Groovy','Fizzy','Disco','Cherry','Tropical','Glitter','Mango','Pixel'];
const NOUN=['Ward','Clinic','Pulse','Lab','Atlas','Rounds','Scrubs','Stethoscope','Vitals','Theatre','Locker','Cortex','Synapse','Orbit'];

function makeTheme(){
  const h=rand(0,360),scheme=pick(Object.keys(SCHEMES)),o=SCHEMES[scheme],s=rand(74,96);
  const d=pick(DISPLAY),sh=pick(SHADOWS);
  return {name:`${pick(ADJ)} ${pick(NOUN)}`,scheme,pattern:pick(['dots','grid','stripes','checks','waves','plain']),vars:{
    '--c1':hsl(h+o[0],s,rand(60,68)),'--c2':hsl(h+o[1],s,rand(62,72)),
    '--c3':hsl(h+o[2],s,rand(60,70)),'--c4':hsl(h+o[3],s*.9,rand(64,74)),
    '--bg':hsl(h+o[1]*.25,rand(70,95),rand(93,96)),'--surface':hsl(h,100,rand(98.5,99.5)),'--ink':hsl(h+200,rand(35,60),rand(9,15)),
    '--font-display':d.f,'--dw':d.w,'--case':d.c,'--track':d.t,
    '--font-body':pick(BODY),
    '--radius':pick(['0px','8px','16px','26px','34px']),
    '--bw':pick(['2px','3px','4px']),
    '--shadow':sh[0],'--shadow-hover':sh[1],
    '--title-shadow':pick(['3px 3px 0 var(--c2)','4px 4px 0 var(--c3)','none','-3px 3px 0 var(--c1)']),
    '--tilt':pick(['0deg','-1deg','1.2deg','-2deg'])}};
}
let current;
function applyTheme(t){
  const r=document.documentElement;
  Object.entries(t.vars).forEach(([k,v])=>r.style.setProperty(k,v));
  r.dataset.pattern=t.pattern;
  document.getElementById('themeName').textContent=t.name;
  current=t;
}

/* ---------- saved progress ---------- */
let P={lock:null,fs:1,best:0,subj:{}};
try{P=Object.assign(P,JSON.parse(localStorage.getItem('medcore_qb')||'{}'))}catch(e){}
const save=()=>{try{localStorage.setItem('medcore_qb',JSON.stringify(P))}catch(e){}};
const stOf=id=>P.subj[id]||(P.subj[id]={ans:{},flags:[],conf:{},cur:0,time:0});

applyTheme(P.lock||makeTheme());
const syncLock=()=>{$('#lockBtn').setAttribute('aria-pressed',!!P.lock);$('#lockBtn').textContent=P.lock?'🔒':'🔓'};
syncLock();
function remix(){applyTheme(makeTheme());if(P.lock){P.lock=current;save()}toast(`New theme: ${current.name} · ${current.scheme}`);burst(innerWidth-60,40)}
$('#remixBtn').onclick=remix;
$('#lockBtn').onclick=()=>{P.lock=P.lock?null:current;save();syncLock();toast(P.lock?'Theme locked for next visit':'A new theme every visit')};
document.documentElement.style.setProperty('--qs',P.fs);

/* ---------- feedback ---------- */
let tt;
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('show'),2300)}
function burst(x,y,n=34){
  if(reduce)return;
  for(let i=0;i<n;i++){
    const c=document.createElement('span');c.className='confetti';
    c.style.cssText=`left:${x}px;top:${y}px;background:var(--c${1+i%4});border-radius:${i%3?'2px':'50%'}`;
    document.body.appendChild(c);
    const a=rand(0,Math.PI*2),d=rand(80,220);
    c.animate([{transform:'translate(0,0) rotate(0)',opacity:1},{transform:`translate(${Math.cos(a)*d}px,${Math.sin(a)*d+120}px) rotate(${rand(-540,540)}deg)`,opacity:0}],{duration:rand(800,1300),easing:'cubic-bezier(.2,.7,.3,1)'}).onfinish=()=>c.remove();
  }
}
function countUp(el,to,suffix=''){
  if(reduce){el.textContent=to+suffix;return}
  const t0=performance.now(),f=t=>{const p=Math.min(1,(t-t0)/900);el.textContent=Math.round(to*(1-Math.pow(1-p,3)))+suffix;if(p<1)requestAnimationFrame(f)};
  requestAnimationFrame(f);
}
const stagger=root=>root.querySelectorAll('.rv').forEach((el,i)=>el.style.setProperty('--i',Math.min(i,10)));
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
  countUp($('#stAnswered'),g+r);countUp($('#stAcc'),g+r?Math.round(g/(g+r)*100):0,'%');countUp($('#stBest'),P.best);countUp($('#stTime'),Math.round(time/60));
  $('#subjGrid').innerHTML=SUBJECTS.map((s,i)=>{const t=tally(s,stOf(s.id));const done=t.g+t.r;
    return `<button class="card hov subj rv" data-go="${s.id}" style="--accent:var(--c${i%4+1})">
      <div class="top"><span class="no">${String(i+1).padStart(2,'0')}</span><span class="emoji" aria-hidden="true">${s.emoji}</span></div>
      <h3>${s.name}</h3>
      <div class="prog" aria-label="${done} of ${t.n} answered"><i class="g" style="width:${t.g/t.n*100}%"></i><i class="r" style="width:${t.r/t.n*100}%"></i></div>
      <div class="foot"><span>${done} / ${t.n} answered${done?` · ${Math.round(t.g/done*100)}%`:''}</span><span class="go">${done?'Resume':'Start'} →</span></div>
    </button>`}).join('');
  stagger($('#home'));
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
  if(ok){streak++;if(streak>P.best)P.best=streak;const el=$(`#qcard [data-a="${j}"]`);if(el){const b=el.getBoundingClientRect();burst(b.left+40,b.top+b.height/2)}if(streak%5===0)toast(`🔥 ${streak} in a row!`)}
  else streak=0;
  if(!clock&&!P.noAuto)startClock();
  sel=null;
  save();renderQ();renderScore();renderRail();
}
function go(d){
  const n=st.cur+d;
  if(n<0)return;
  if(n>=S.questions.length){const t=tally(S,st);toast(`End of ${S.name}: ${t.g} right, ${t.r} wrong, ${t.n-t.g-t.r} left`);burst(innerWidth/2,innerHeight/3,60);return}
  st.cur=n;sel=null;save();renderQ();
  if(innerWidth<1000)$('#qcard').scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});
}
$('#prevBtn').onclick=()=>go(-1);
$('#nextBtn').onclick=()=>go(1);
function toggleFlag(){const i=st.cur;st.flags=st.flags.includes(i)?st.flags.filter(x=>x!==i):[...st.flags,i];save();renderQ();toast(st.flags.includes(i)?'Flagged for review':'Flag removed');renderRail()}

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
$('#firstFlagged').onclick=()=>{if(!st.flags.length){toast('No flagged questions yet');return}const next=st.flags.find(i=>i>st.cur);jumpTo(next!==undefined?next:st.flags.slice().sort((a,b)=>a-b)[0])};
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
  if(a===undefined){toast('Answer the question first');return}
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
  if(Date.now()-armed>3000){armed=Date.now();toast(`Restart ${S.name}? Press again within 3 seconds to clear answers, flags and time`);return}
  armed=0;
  stopClock();P.subj[S.id]={ans:{},flags:[],conf:{},cur:0,time:0};st=P.subj[S.id];streak=0;sel=null;save();drawClock();toast('Fresh start');renderQ();renderRail();renderScore();
}
$('#restartBtn').onclick=restart;

/* ---------- keyboard ---------- */
addEventListener('keydown',e=>{
  if(e.metaKey||e.ctrlKey||e.altKey||/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName))return;
  const k=e.key,open=$('dialog[open]');
  if(k==='?'){e.preventDefault();open&&open.close();$('#keysDlg').showModal();return}
  if(k==='t'||k==='T'){remix();return}
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
