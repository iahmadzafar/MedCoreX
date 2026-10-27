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
 {f:'Impact,"Arial Black",sans-serif',w:400,c:'uppercase',t:'.02em'},
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
  b.setAttribute('aria-pressed',d); b.textContent=d?'☀️':'🌙';
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
const syncLock=()=>{const b=document.getElementById('lockBtn');if(!b)return;b.setAttribute('aria-pressed',!!LOCK);b.textContent=LOCK?'🔒':'🔓'};
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
  '<div class="swatches"><i style="background:var(--c1)"></i><i style="background:var(--c2)"></i><i style="background:var(--c3)"></i><i style="background:var(--c4)"></i></div>'+
  '<span class="theme-name" id="themeName">Theme</span>'+
  '<button class="icon-btn" id="modeBtn" aria-label="Toggle dark mode">🌙</button>'+
  '<button class="icon-btn" id="lockBtn" aria-pressed="false" aria-label="Lock this theme">🔓</button>'+
  '<button class="icon-btn" id="remixBtn" aria-label="Remix theme">🎲</button>';
function fillChips(){
  document.querySelectorAll('[data-sv-engine]').forEach(el=>{
    if(el.dataset.svDone)return;
    if(el.contains(document.getElementById('themeName'))) {el.dataset.svDone='1';return;}
    if(document.getElementById('themeName')&&!el.contains(document.getElementById('themeName')))return;
    el.innerHTML=CHIP_HTML;
    el.dataset.svDone='1';
  });
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
  paint(); syncLock(); syncMode();   /* name/lock/mode state onto the freshly filled chip */
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);
else boot();
})();
