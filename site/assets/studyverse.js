/* ============================================================
   MedCoreX · Studyverse KIT — site/assets/studyverse.js
   The one shared theme engine. Load in <head> WITHOUT defer:
   it paints the theme vars onto <html> before first paint
   (no flash), then waits for DOMContentLoaded for anything
   touching elements. Pages use window.SV.* only — they must
   never reimplement theme/toast/confetti/count-up, nor bind T.

   Source of truth: the engine cut from site/index.html
   (Phase 1, PLAN — Design Kit.md) — behaviour preserved verbatim.
   ============================================================ */
(function () {
'use strict';

/* proper line icons for the engine chip — no emoji, currentColor, theme-aware */
const IC={
 sun:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/></svg>',
 moon:'<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" stroke="none" aria-hidden="true"><path d="M20.4 14.2A9 9 0 1 1 9.8 3.6a7.2 7.2 0 0 0 10.6 10.6z"/></svg>',
 lock:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="10.5" width="16" height="10.5" rx="2.4"/><path d="M7.6 10.5V7a4.4 4.4 0 0 1 8.8 0v3.5"/></svg>',
 unlock:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="10.5" width="16" height="10.5" rx="2.4"/><path d="M7.6 10.5V7a4.4 4.4 0 0 1 8.6-1.4"/></svg>',
 dice:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round" aria-hidden="true"><rect x="3.8" y="3.8" width="16.4" height="16.4" rx="3.8"/><circle cx="8.5" cy="8.5" r="1.35" fill="currentColor" stroke="none"/><circle cx="15.5" cy="8.5" r="1.35" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.35" fill="currentColor" stroke="none"/><circle cx="8.5" cy="15.5" r="1.35" fill="currentColor" stroke="none"/><circle cx="15.5" cy="15.5" r="1.35" fill="currentColor" stroke="none"/></svg>',
 up:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 14 6-6 6 6"/></svg>',
 down:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 10 6 6 6-6"/></svg>'
};

/* ── engine (verbatim from index.html) ── */
const rand=(a,b)=>Math.random()*(b-a)+a;
const pick=a=>a[Math.floor(Math.random()*a.length)];
const hsl=(h,s,l)=>`hsl(${Math.round((h%360+360)%360)} ${Math.round(s)}% ${Math.round(l)}%)`;
const SCHEMES={Triadic:[0,120,240,60],Complementary:[0,180,30,210],Split:[0,150,210,45],Analogous:[0,32,64,-32],Tetradic:[0,90,180,270],Candy:[0,300,60,200]};
const DISPLAY=[
 {f:'Futura,"Century Gothic","Trebuchet MS",sans-serif',w:800,c:'uppercase',t:'.01em'},
 {f:'Rockwell,"Roboto Slab",Georgia,serif',w:800,c:'none',t:'-.01em'},
 {f:'"American Typewriter","Courier New",monospace',w:700,c:'none',t:'-.02em'},
 {f:'"Marker Felt","Comic Sans MS",cursive',w:700,c:'none',t:'0'},
 {f:'"Chalkboard SE","Comic Sans MS",cursive',w:700,c:'none',t:'0'},
 {f:'Didot,"Bodoni 72","Times New Roman",serif',w:700,c:'none',t:'-.02em'},
 {f:'Copperplate,"Copperplate Gothic Light",serif',w:700,c:'uppercase',t:'.04em'},
 {f:'Impact,"Franklin Gothic Heavy",sans-serif',w:400,c:'uppercase',t:'.02em'},
 {f:'"Avenir Next Condensed","Arial Narrow",sans-serif',w:800,c:'uppercase',t:'.01em'},
 {f:'"Cooper Black","Bookman Old Style",Georgia,serif',w:900,c:'none',t:'-.01em'}];
const BODY=['"Avenir Next","Segoe UI",sans-serif','"Gill Sans","Gill Sans MT",sans-serif','Optima,Candara,sans-serif','Georgia,"Times New Roman",serif','Menlo,Consolas,monospace','Baskerville,"Hoefler Text",Georgia,serif','"Trebuchet MS",Verdana,sans-serif'];
const SHADOWS=[
 ['6px 6px 0 var(--ink)','10px 10px 0 var(--ink)'],
 ['6px 6px 0 var(--c4)','10px 10px 0 var(--c1)'],
 ['4px 4px 0 var(--c2),8px 8px 0 var(--ink)','6px 6px 0 var(--c2),12px 8px 0 var(--ink)'],
 ['0 14px 30px -12px color-mix(in srgb,var(--c4) 70%,transparent)','0 22px 40px -12px color-mix(in srgb,var(--c1) 70%,transparent)'],
 ['-6px 6px 0 var(--c3)','-10px 10px 0 var(--ink)']];
const ADJ=['Electric','Bubblegum','Cosmic','Retro','Sour','Velvet','Jazzy','Turbo','Lemon','Neon','Groovy','Fizzy','Disco','Cherry','Tropical','Glitter','Mango','Pixel'];
const NOUN=['Notebook','Riot','Library','Sundae','Lab','Arcade','Atlas','Mixtape','Garden','Comet','Parade','Studio','Lagoon','Cassette','Carnival','Orbit'];
function makeTheme(){
  const h=rand(0,360), name=Object.keys(SCHEMES), scheme=pick(name), offs=SCHEMES[scheme], s=rand(74,96);
  const d=pick(DISPLAY), sh=pick(SHADOWS);
  return {name:`${pick(ADJ)} ${pick(NOUN)}`, scheme, vars:{
    '--c1':hsl(h+offs[0],s,rand(60,68)),'--c2':hsl(h+offs[1],s,rand(62,72)),
    '--c3':hsl(h+offs[2],s,rand(60,70)),'--c4':hsl(h+offs[3],s*.9,rand(64,74)),
    '--bg':hsl(h+offs[1]*.25,rand(70,95),rand(93,96)),
    '--surface':hsl(h,100,rand(98.5,99.5)),
    '--ink':hsl(h+200,rand(35,60),rand(9,15)),
    '--font-display':d.f,'--dw':d.w,'--case':d.c,'--track':d.t,
    '--font-body':pick(BODY),
    '--radius':pick(['0px','8px','16px','26px','34px']),
    '--bw':pick(['2px','3px','4px']),
    '--shadow':sh[0],'--shadow-hover':sh[1],
    '--title-shadow':pick(['3px 3px 0 var(--c2)','4px 4px 0 var(--c3)','none','-3px 3px 0 var(--c1)']),
    '--tilt':pick(['0deg','-1deg','1.2deg','-2deg'])},
    pattern:pick(['dots','grid','stripes','checks','waves','plain'])};
}
let current;
function hue(v){const m=String(v).match(/hsl\(\s*([\d.]+)/);return m?+m[1]:0}
function paint(){
  const r=document.documentElement;
  Object.entries(current.vars).forEach(([k,v])=>r.style.setProperty(k,v));
  r.dataset.pattern=current.pattern;
  if(r.dataset.theme==='dark'){
    r.style.setProperty('--bg', hsl(hue(current.vars['--bg']),26,8));
    r.style.setProperty('--surface', hsl(hue(current.vars['--surface']),22,12));
    r.style.setProperty('--ink','#FFFFFF');
    r.style.setProperty('--muted','rgba(255,255,255,.74)');
  } else {
    /* engine has no --muted value: clear the dark inline so :root light value applies */
    r.style.removeProperty('--muted');
  }
  const tn=document.getElementById('themeName'); if(tn) tn.textContent=current.name;
  try{document.dispatchEvent(new CustomEvent('sv:theme',{detail:{theme:current,mode:r.dataset.theme}}))}catch(e){}
}
function applyTheme(t){ current=t; paint(); }
const MKEY='mx-mode';
function initMode(){
  let m=null; try{m=localStorage.getItem(MKEY)}catch(e){}
  if(m!=='dark'&&m!=='light') m=(window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light';
  const rr=document.documentElement; rr.dataset.theme=m; paint(); syncMode();
}
function syncMode(){
  const b=document.getElementById('modeBtn'); if(!b) return;
  const d=document.documentElement.dataset.theme==='dark';
  b.setAttribute('aria-pressed',d); b.innerHTML=d?IC.sun:IC.moon;
}
document.addEventListener('click',e=>{
  if(e.target.id==='modeBtn'){
    const n=document.documentElement.dataset.theme==='dark'?'light':'dark';
    document.documentElement.dataset.theme=n;
    try{localStorage.setItem(MKEY,n)}catch(err){}
    syncMode(); paint(); toast(n==='dark'?'Dark mode 🌙':'Light mode ☀️');
  }
});
let LOCK=null; try{LOCK=JSON.parse(localStorage.getItem('mx-lock')||'null')}catch(e){}
function saveLock(){try{localStorage.setItem('mx-lock',JSON.stringify(LOCK))}catch(e){}}
const syncLock=()=>{const b=document.getElementById('lockBtn');if(!b)return;b.setAttribute('aria-pressed',!!LOCK);b.innerHTML=LOCK?IC.lock:IC.unlock};
syncLock();
function remix(){applyTheme(makeTheme()); if(LOCK){LOCK=current;saveLock()} toast(`New theme: ${current.name} · ${current.scheme}`); burst(innerWidth-60,40)}
document.addEventListener('click',e=>{
  if(e.target.id==='remixBtn') remix();
  if(e.target.id==='lockBtn'){ LOCK=LOCK?null:current; saveLock(); syncLock(); toast(LOCK?'Theme locked for next visit':'A new theme every visit'); }
});
addEventListener('keydown',e=>{
  if(e.metaKey||e.ctrlKey||e.altKey)return;
  if(/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName))return;
  if(document.querySelector('dialog[open]'))return;
  if(e.key==='t'||e.key==='T') remix();
});
applyTheme(LOCK||makeTheme());
initMode();

let tt;
function toast(msg){const t=document.getElementById('toast');if(!t)return;t.textContent=msg;t.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('show'),2200)}
const reducedMotion=()=>window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function burst(x,y,n){
  if(reducedMotion())return;
  const total=n||34;
  for(let i=0;i<total;i++){
    const c=document.createElement('span');c.className='confetti';
    c.style.cssText=`left:${x}px;top:${y}px;background:var(--c${1+i%4});border-radius:${i%3?'2px':'50%'}`;
    document.body.appendChild(c);
    const a=rand(0,Math.PI*2),dist=rand(80,220);
    c.animate([{transform:'translate(0,0) rotate(0)',opacity:1},{transform:`translate(${Math.cos(a)*dist}px,${Math.sin(a)*dist+120}px) rotate(${rand(-540,540)}deg)`,opacity:0}],{duration:rand(800,1300),easing:'cubic-bezier(.2,.7,.3,1)'}).onfinish=()=>c.remove();
  }
}

/* ── kit extras (API surface per plan 1b) ── */
function burstAt(el){
  if(!el)return;
  const r=el.getBoundingClientRect();
  burst(r.left+r.width/2, r.top+r.height/2);
}
function countUp(el,to,suffix){
  if(!el)return;
  const s=suffix||'';
  if(reducedMotion()){el.textContent=to+s;return}
  const t0=performance.now();
  const frame=t=>{const p=Math.min(1,(t-t0)/900);el.textContent=Math.round(to*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(frame)};
  requestAnimationFrame(frame);
}
function stagger(root){
  if(!root)return;
  root.querySelectorAll('.rv').forEach((el,i)=>el.style.setProperty('--i',Math.min(i,10)));
}

/* ── the public API: pages use only this ── */
window.SV={
  get theme(){return current},
  remix, toast, burst, burstAt, countUp, stagger
};

/* ── auto-inject: blobs, toast, engine chips (DOMContentLoaded only) ── */
const CHIP_HTML=
  '<button class="icon-btn" id="modeBtn" aria-label="Toggle dark mode">'+IC.moon+'</button>'+
  '<button class="icon-btn" id="lockBtn" aria-pressed="false" aria-label="Lock this theme">'+IC.unlock+'</button>'+
  '<button class="icon-btn" id="remixBtn" aria-label="Remix theme">'+IC.dice+'</button>';
function fillChips(){
  document.querySelectorAll('[data-sv-engine]').forEach(el=>{
    if(el.dataset.svDone)return;
    if(el.contains(document.getElementById('themeName'))) {el.dataset.svDone='1';return;}
    if(document.getElementById('themeName')&&!el.contains(document.getElementById('themeName')))return;
    el.innerHTML=CHIP_HTML;
    el.dataset.svDone='1';
  });
}
/* Library hover menu in the nav — the shelves, one hover away (catbar's job, moved to the kit) */
const SHELVES=[['Core Books','core-books'],['Mocks & Drills','mocks-drills'],['Past Papers & Answer Keys','past-papers-answer-keys'],['Exam Intelligence & Strategy','exam-intelligence-strategy'],['Quick Reference','quick-reference'],['Frameworks & Interactive','frameworks-interactive'],['MedCORE Systems','medcore-systems']];
function buildNavMenu(){
  const a=document.querySelector('.links a[href="/library"]');
  if(!a||a.parentNode.classList.contains('navdrop'))return;
  const w=document.createElement('span');w.className='navdrop';
  a.parentNode.insertBefore(w,a);w.appendChild(a);
  w.insertAdjacentHTML('beforeend','<div class="navmenu"><a class="all" href="/library">All shelves</a>'+SHELVES.map(function(s){return '<a href="/library#'+s[1]+'">'+s[0]+'</a>'}).join('')+'</div>');
}
/* Topbar hide/show — one chevron in the engine cluster, a restore pill when hidden.
   Preference is remembered across pages (medcore.nav). */
function applyNav(on){
  document.body.classList.toggle('nav-off',!on);
  const t=document.querySelector('.nav-tog');
  if(t)t.setAttribute('aria-expanded',String(on));
}
function buildNavToggle(){
  if(!document.querySelector('.nav'))return;
  const eng=document.querySelector('.nav .engine');
  if(eng&&!eng.querySelector('.nav-tog')){
    eng.insertAdjacentHTML('beforeend','<button class="nav-tog" type="button" aria-label="Hide topbar" aria-expanded="true" title="Hide topbar">'+IC.up+'</button>');
    eng.querySelector('.nav-tog').onclick=function(){
      applyNav(false);
      try{localStorage.setItem('medcore.nav','off');}catch(e){}
    };
  }
  if(!document.getElementById('navShow')){
    document.body.insertAdjacentHTML('beforeend','<button class="nav-show" id="navShow" type="button" aria-label="Show topbar">'+IC.down+'<span>Show topbar</span></button>');
    document.getElementById('navShow').onclick=function(){
      applyNav(true);
      try{localStorage.setItem('medcore.nav','on');}catch(e){}
    };
  }
  let on=true;
  try{ on=localStorage.getItem('medcore.nav')!=='off'; }catch(e){}
  applyNav(on);
}
function boot(){
  if(!document.querySelector('.blobs')){
    document.body.insertAdjacentHTML('afterbegin',
      '<div class="blobs" aria-hidden="true"><div class="blob"></div><div class="blob"></div><div class="blob"></div></div>');
  }
  if(!document.getElementById('toast')){
    document.body.insertAdjacentHTML('beforeend','<div class="toast" id="toast" role="status"></div>');
  }
  fillChips();
  buildNavMenu();
  buildNavToggle();
  paint(); syncLock(); syncMode();   /* name/lock/mode state onto the freshly filled chip */
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);
else boot();
})();
