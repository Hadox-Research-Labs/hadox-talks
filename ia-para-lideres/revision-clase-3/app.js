const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const data=await fetch('course.json?v=20261005-habilidades').then(r=>{if(!r.ok)throw Error('No se pudo abrir la clase');return r.json()});
const {slides:contentSlides,refs,chapters}=data;
const middleSlides=contentSlides.flatMap(s=>{
 const chapter=chapters.find(c=>s.number<=c.endSlide)||chapters.at(-1);
 const content={...s,chapter:chapter.chapter,key:`lamina-${s.number}`,audio:`audio/c3-${String(s.number).padStart(2,'0')}-jorge.mp3`};
 const c=chapters.find(c=>c.beforeSlide===s.number);
 return c?[{...c,divider:true,key:`tema-${c.chapter}`,number:null,minutes:0,start:s.start,end:s.start,kind:'Cambio de tema',section:c.title,action:['Presentar el nuevo tema y su pregunta guía.','Avanzar a la explicación dentro del tiempo del bloque.'],sources:[],prompt:'',visual:{big:c.title,subtitle:c.question,lines:[c.concepts]},audio:`audio/tema-${String(c.chapter).padStart(2,'0')}-jorge.mp3`},content]:[content];
});
const slides=[data.opening,...middleSlides,data.closing];
function hashIndex(){return Math.max(0,slides.findIndex(s=>`#${s.key}`===location.hash));}
let index=hashIndex();
let mode='idle',generation=0,queue=[],part=0,paused=false;
$('#blocks').innerHTML=chapters.map(c=>`<button data-jump="${slides.findIndex(s=>s.divider&&s.chapter===c.chapter)}"><small>${String(c.chapter).padStart(2,'0')}</small>${esc(c.title)}</button>`).join('');
$('#slideSelect').innerHTML=slides.map((s,i)=>`<option value="${i}">${s.special?s.kind:s.divider?'Tema '+String(s.chapter).padStart(2,'0'):String(s.number).padStart(2,'0')}</option>`).join('');
function visualText(v){
 let html=[v.big,v.subtitle,v.lead,v.formula,v.quote].filter(Boolean).map(t=>`<p>${esc(t)}</p>`).join('');
 if(v.headers)html+=`<div class="table-wrap"><table><thead><tr>${v.headers.map(x=>`<th scope="col">${esc(x)}</th>`).join('')}</tr></thead><tbody>${v.rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
 if(v.lines)html+=`<ul>${v.lines.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
 if(v.values)html+=`<ul>${v.values.map((x,i)=>`<li>${esc(v.categories[i])}: USD ${x.toLocaleString('es-MX')}/mes</li>`).join('')}</ul><p>${esc(v.takeaway)}</p>`;
 if(v.note)html+=`<p>${esc(v.note)}</p>`;return html;
}
function render(){
 const s=slides[index];
 $('#slideImage').src=s.special?s.image:s.divider?`laminas/tema-${String(s.chapter).padStart(2,'0')}.png?v=20261005-temas`:`laminas/c3-${String(s.number).padStart(2,'0')}.png?v=20261004-lideres`;
 $('#slideImage').alt=`${s.special?s.kind:s.divider?'Tema '+s.chapter:'Lámina '+s.number}. ${s.title}. ${s.question}`;
 $('#slideText').innerHTML=visualText(s.visual);
 $('#slideMeta').textContent=s.special?s.kind:s.divider?`Tema ${s.chapter} de ${chapters.length} · Cambio de tema · ${s.start}`:`${s.start}–${s.end} · ${s.minutes} min · ${s.kind}`;
 $('#counter').textContent=`${index+1} / ${slides.length}`;
 $('#slideSelect').value=String(index);$('#prev').disabled=index===0;$('#next').disabled=index===slides.length-1;
 $('#question').textContent=s.question;$('#speechTitle').textContent=`Qué digo · ${s.title}`;
 $('#speech').innerHTML=s.speech.split('\n\n').map(p=>`<p>${esc(p)}</p>`).join('');
 $('#action').innerHTML=s.action.map(t=>`<li>${esc(t)}</li>`).join('');
 $('#promptBox').hidden=!s.prompt;$('#prompt').textContent=s.prompt||'';$('#copyStatus').textContent='';
 $('#sources').innerHTML=s.sources.length?s.sources.map(k=>`<a href="${esc(refs[k][1])}" target="_blank" rel="noopener">${esc(refs[k][0])} ↗</a>`).join(''):s.divider?'<p>Separador de tema. El desarrollo y las fuentes aparecen en las láminas siguientes.</p>':'<p>Caso y actividad docente. Las cifras y datos de demostración se identifican como supuestos o ficticios.</p>';
 $('#outline').innerHTML=slides.map((x,i)=>`<li class="${x.divider?'outline-divider':''}"><button data-jump="${i}" aria-current="${i===index}"><small>${x.divider?'CAMBIO DE TEMA':x.start+'–'+x.end}</small>${x.special?x.kind:x.divider?'Tema '+String(x.chapter).padStart(2,'0'):String(x.number).padStart(2,'0')} · ${esc(x.title)}</button></li>`).join('');
 document.querySelectorAll('#blocks button').forEach(b=>b.setAttribute('aria-current',String(slides[+b.dataset.jump].chapter===s.chapter)));
 history.replaceState(null,'',`#${s.key}`);document.title=`${s.special?s.kind:s.divider?'Tema '+s.chapter:'Lámina '+s.number} · Clase 3 · ${s.title}`;
}
function voiceState(message){$('#voiceStatus').textContent=message;$('#pause').disabled=mode==='idle';$('#stop').disabled=mode==='idle';$('#pause').textContent=paused?'Reanudar':'Pausar';$('#listenOne').setAttribute('aria-pressed',String(mode==='one'));$('#listenAll').setAttribute('aria-pressed',String(mode==='all'));}
const narration=new Audio();
narration.preload='none';
function stop(){
 generation++;mode='idle';paused=false;narration.onended=null;narration.onerror=null;
 narration.pause();narration.removeAttribute('src');narration.load();
 voiceState('Reproducción detenida.');
}
function playbackFailure(token){
 if(token!==generation)return;
 mode='idle';paused=false;voiceState('No se pudo reproducir el audio. Reintenta Escuchar esta lámina; el discurso escrito sigue disponible.');
}
function playNarration(token){
 if(token!==generation||mode==='idle')return;
 const slide=slides[index];
 narration.src=slide.audio+'?v=20261005-jorge';
 narration.playbackRate=Number($('#rate').value);
 narration.onended=()=>{
  if(token!==generation||mode==='idle')return;
  if(mode==='all'&&index<slides.length-1){index++;render();playNarration(token);}
  else{mode='idle';paused=false;voiceState('Narración terminada.');}
 };
 narration.onerror=()=>playbackFailure(token);
 narration.play().then(()=>{if(token===generation)voiceState(`Jorge · ${slide.divider?'Tema '+slide.chapter:'Lámina '+slide.number}: ${slide.title}`);}).catch(()=>playbackFailure(token));
}
function startVoice(continuous){stop();mode=continuous?'all':'one';playNarration(generation);}
function go(n){stop();index=Math.max(0,Math.min(slides.length-1,n));render();$('#presentacion').scrollIntoView({block:'start'});}
document.addEventListener('click',e=>{const b=e.target.closest('[data-jump]');if(b)go(Number(b.dataset.jump));});
$('#prev').onclick=()=>go(index-1);$('#next').onclick=()=>go(index+1);$('#slideSelect').onchange=e=>go(Number(e.target.value));
$('#project').onclick=()=>$('#screen').requestFullscreen().catch(()=>{$('#voiceStatus').textContent='Este navegador no permite proyección. Puedes ampliar la ventana.';});
$('#exitFull').onclick=()=>document.exitFullscreen();document.addEventListener('fullscreenchange',()=>{$('#exitFull').hidden=!document.fullscreenElement;});
document.addEventListener('keydown',e=>{if(e.target.closest('input,select,textarea')||e.ctrlKey||e.altKey||e.metaKey)return;if(e.key==='ArrowRight'){go(index+1);e.preventDefault();}if(e.key==='ArrowLeft'){go(index-1);e.preventDefault();}});
window.addEventListener('hashchange',()=>{const n=hashIndex();if(n!==index)go(n);});
$('#copyPrompt').onclick=async()=>{try{await navigator.clipboard.writeText(slides[index].prompt);$('#copyStatus').textContent=' Encargo copiado.';}catch{$('#copyStatus').textContent=' Selecciona y copia el texto visible.';}};
$('#listenOne').onclick=()=>startVoice(false);
$('#listenAll').onclick=()=>startVoice(true);
$('#pause').onclick=()=>{
 if(mode==='idle')return;
 paused=!paused;
 if(paused){narration.pause();voiceState('Narración en pausa.');}
 else{const token=generation;narration.play().then(()=>{if(token===generation)voiceState(`Jorge · Lámina ${index+1}.`);}).catch(()=>playbackFailure(token));}
};
$('#stop').onclick=stop;
$('#rate').onchange=()=>{narration.playbackRate=Number($('#rate').value);};
voiceState('Jorge · Narración en español mexicano lista.');
window.addEventListener('pagehide',stop);render();if(index>0)$('#presentacion').scrollIntoView({block:'start'});

