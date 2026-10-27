/* =========================================================
   MedCoreX · Study Book — app (kit edition: engine lives in
   /assets/studyverse.js; feedback via window.SV.*)
   ========================================================= */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];

/* ── progress · medcore.book = {done:{id:true}, quiz:{qid:{sel,revealed}}} ── */
let P={done:{},quiz:{}};
try{P=Object.assign({done:{},quiz:{}},JSON.parse(localStorage.getItem('medcore.book')||'{}'))}catch(e){}
const save=()=>{try{localStorage.setItem('medcore.book',JSON.stringify(P))}catch(e){}};
const ALL=BOOK.parts.flatMap(p=>p.items);

/* ── table of contents ── */
function renderToc(){
  $('#tocList').innerHTML=BOOK.parts.map((p,pi)=>`
    <div class="tocpart" data-part="${pi}">
      <div class="plabel"><span>${p.label}</span><span>${p.items.filter(i=>P.done[i.id]).length}/${p.items.length}</span></div>
      ${p.items.map(it=>`<a href="#${it.id}" data-toc="${it.id}" class="${P.done[it.id]?'done':''}"><span>${it.title}</span><span class="tick">${P.done[it.id]?'✓':''}</span></a>`).join('')}
    </div>`).join('');
}
function syncToc(){
  $$('#tocList a[data-toc]').forEach(a=>{
    const on=!!P.done[a.dataset.toc];
    a.classList.toggle('done',on);
    a.querySelector('.tick').textContent=on?'✓':'';
  });
  $$('#tocList .tocpart').forEach((el,pi)=>{
    const items=BOOK.parts[pi].items;
    el.querySelector('.plabel span:last-child').textContent=items.filter(i=>P.done[i.id]).length+'/'+items.length;
  });
  const marked=ALL.filter(i=>P.done[i.id]).length;
  $('#bkBar').style.width=(marked/ALL.length*100)+'%';
  $('#bkCount').textContent=`${marked} / ${ALL.length} marked`;
}

/* ── book render ── */
function renderBook(){
  $('#bookBody').innerHTML=BOOK.parts.map(p=>p.items.map(it=>`
    <details class="bkchap${P.done[it.id]?' done':''}" id="${it.id}">
      <summary>
        <span class="bktitle">${it.title}</span>
        <button class="bkmark${P.done[it.id]?' done':''}" type="button" data-mark="${it.id}">${P.done[it.id]?'Marked ✓':'Mark complete'}</button>
      </summary>
      <div class="bkbody">${it.html}</div>
    </details>`).join('')).join('');
  restoreQuizzes();
}

/* ── quizzes: pick → reveal → right/wrong, persisted ── */
function revealQ(q,animate){
  const correct=parseInt(q.dataset.correct,10);
  q.classList.add('revealed');
  const ans=q.querySelector('.ans'); if(ans) ans.hidden=false;
  $$('.opt',q).forEach(o=>{
    const oi=parseInt(o.dataset.oi,10);
    o.disabled=true;
    o.classList.remove('right','wrong');
    if(oi===correct) o.classList.add('right');
    else if(o.classList.contains('sel')) o.classList.add('wrong');
  });
  const st=P.quiz[q.id]||{};
  st.revealed=true;
  if(st.sel===undefined){
    const sel=q.querySelector('.opt.sel');
    if(sel) st.sel=parseInt(sel.dataset.oi,10);
  }
  P.quiz[q.id]=st; save();
  if(animate&&st.right===undefined){
    const sel=q.querySelector('.opt.sel');
    st.right=(sel&&parseInt(sel.dataset.oi,10)===correct)?1:0; save();
    if(st.right){SV.burstAt(q.querySelector('.ans-answer')||q);SV.toast('✓ Correct — logged to your book')}
  }
}
function restoreQuizzes(){
  Object.keys(P.quiz).forEach(qid=>{
    const st=P.quiz[qid], q=document.getElementById(qid);
    if(!q||!st)return;
    if(st.sel!==undefined){
      const o=q.querySelector('.opt[data-oi="'+st.sel+'"]');
      if(o) o.classList.add('sel');
    }
    if(st.revealed) revealQ(q,false);
  });
}
document.addEventListener('click',e=>{
  const opt=e.target.closest('#bookBody .opt');
  if(opt){
    const q=opt.closest('.q'); if(!q||q.classList.contains('revealed'))return;
    $$('.opt',q).forEach(o=>o.classList.remove('sel'));
    opt.classList.add('sel');
    P.quiz[q.id]=Object.assign({},P.quiz[q.id],{sel:parseInt(opt.dataset.oi,10)});
    save();
    return;
  }
  const rev=e.target.closest('#bookBody .reveal');
  if(rev){
    const q=rev.closest('.q'); if(q&&!q.classList.contains('revealed')) revealQ(q,true);
    return;
  }
  const rall=e.target.closest('#bookBody .reveal-all');
  if(rall){
    const scope=rall.closest('.quiz')||document;
    let n=0;
    $$('.q',scope).forEach(q=>{if(!q.classList.contains('revealed')){revealQ(q,false);n++}});
    if(n)SV.toast(`Revealed ${n} answer${n>1?'s':''}`);
    return;
  }
  const mark=e.target.closest('[data-mark]');
  if(mark){
    e.preventDefault(); e.stopPropagation();
    const id=mark.dataset.mark;
    P.done[id]=!P.done[id];
    const chap=document.getElementById(id);
    if(chap) chap.classList.toggle('done',!!P.done[id]);
    mark.classList.toggle('done',!!P.done[id]);
    mark.textContent=P.done[id]?'Marked ✓':'Mark complete';
    save(); syncToc();
    SV.toast(P.done[id]?'Chapter marked complete ✓':'Chapter unmarked');
    if(P.done[id]) SV.burstAt(mark);
  }
});

/* ── header actions ── */
$('#revealAll').onclick=()=>{
  let n=0;
  $$('#bookBody .q').forEach(q=>{if(!q.classList.contains('revealed')){revealQ(q,false);n++}});
  SV.toast(n?`Revealed every answer on screen (${n})`:'Everything already revealed');
};
$('#collapseAll').onclick=()=>{
  $$('#bookBody .bkchap[open]').forEach(d=>d.open=false);
  SV.toast('All chapters collapsed');
};

/* ── hash: old #ch- anchors (and any #id) open their block; else chapter 1 ── */
function expandTo(hash){
  $$('#bookBody .bkchap[open]').forEach(d=>{if(!hash||d.id!==hash.slice(1))d.open=false});
  let id=(hash||'').slice(1), el=id?document.getElementById(id):null;
  if(!el||!el.classList.contains('bkchap')){
    el=document.getElementById(id);
    if(!el) el=$('#bookBody .bkchap');            /* unknown anchor → chapter 1 */
    while(el&&el!==document.body){
      if(el.tagName==='DETAILS') el.open=true;
      el=el.parentElement;
    }
  } else { el.open=true; }
  if(el&&location.hash.length>1) setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'start'}),40);
}
addEventListener('hashchange',()=>expandTo(location.hash));

/* ── search: filters the toc ── */
$('#bkSearch').addEventListener('input',()=>{
  const term=$('#bkSearch').value.trim().toLowerCase();
  let shown=0;
  $$('#tocList a[data-toc]').forEach(a=>{
    const hit=!term||a.textContent.toLowerCase().includes(term);
    a.hidden=!hit; if(hit)shown++;
  });
  $$('#tocList .tocpart').forEach(p=>{
    p.hidden=!$$( 'a[data-toc]',p).some(a=>!a.hidden);
  });
  const note=$('#bkFilterNote');
  note.hidden=!term;
  if(term)note.textContent=`${shown} chapter${shown===1?'':'s'} match “${$('#bkSearch').value.trim()}”`;
});

/* ── boot ── */
renderToc();
renderBook();
syncToc();
SV.stagger(document.querySelector('.bookhead'));
expandTo(location.hash);   /* nothing open on empty hash — user starts at the cover */
