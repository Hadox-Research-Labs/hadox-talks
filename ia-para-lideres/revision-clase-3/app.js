const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const data=await fetch('course.json?v=20261005-discurso').then(r=>{if(!r.ok)throw Error('No se pudo abrir la clase');return r.json()});
const {slides,refs}=data;
let index=Math.max(0,Math.min(slides.length-1,(Number(location.hash.match(/lamina-(\d+)/)?.[1])||1)-1));
let mode='idle',generation=0,queue=[],part=0,paused=false;
const sections=[...new Set(slides.map(s=>s.section))];
$('#blocks').innerHTML=sections.map((name,i)=>`<button data-jump="${slides.findIndex(s=>s.section===name)}"><small>${String(i+1).padStart(2,'0')}</small>${esc(name)}</button>`).join('');
$('#slideSelect').innerHTML=slides.map(s=>`<option value="${s.number-1}">${String(s.number).padStart(2,'0')}</option>`).join('');
function visualText(v){
 let html=[v.big,v.subtitle,v.lead,v.formula,v.quote].filter(Boolean).map(t=>`<p>${esc(t)}</p>`).join('');
 if(v.headers)html+=`<div class="table-wrap"><table><thead><tr>${v.headers.map(x=>`<th scope="col">${esc(x)}</th>`).join('')}</tr></thead><tbody>${v.rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
 if(v.lines)html+=`<ul>${v.lines.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
 if(v.values)html+=`<ul>${v.values.map((x,i)=>`<li>${esc(v.categories[i])}: USD ${x.toLocaleString('es-MX')}/mes</li>`).join('')}</ul><p>${esc(v.takeaway)}</p>`;
 if(v.note)html+=`<p>${esc(v.note)}</p>`;return html;
}
function render(){
 const s=slides[index];
 $('#slideImage').src=`laminas/c3-${String(s.number).padStart(2,'0')}.png?v=20261004-lideres`;
 $('#slideImage').alt=`Lámina ${s.number}. ${s.title}. ${s.question}`;
 $('#slideText').innerHTML=visualText(s.visual);
 $('#slideMeta').textContent=`${s.start}–${s.end} · ${s.minutes} min · ${s.kind}`;
 $('#counter').textContent=`${s.number} / ${slides.length}`;
 $('#slideSelect').value=String(index);$('#prev').disabled=index===0;$('#next').disabled=index===slides.length-1;
 $('#question').textContent=s.question;$('#speechTitle').textContent=`Qué digo · ${s.title}`;
 $('#speech').innerHTML=s.speech.split('\n\n').map(p=>`<p>${esc(p)}</p>`).join('');
 $('#action').innerHTML=s.action.map(t=>`<li>${esc(t)}</li>`).join('');
 $('#promptBox').hidden=!s.prompt;$('#prompt').textContent=s.prompt||'';$('#copyStatus').textContent='';
 $('#sources').innerHTML=s.sources.length?s.sources.map(k=>`<a href="${esc(refs[k][1])}" target="_blank" rel="noopener">${esc(refs[k][0])} ↗</a>`).join(''):'<p>Caso y actividad docente. Las cifras y datos de demostración se identifican como supuestos o ficticios.</p>';
 $('#outline').innerHTML=slides.map((x,i)=>`<li><button data-jump="${i}" aria-current="${i===index}"><small>${x.start}–${x.end}</small>${String(x.number).padStart(2,'0')} · ${esc(x.title)}</button></li>`).join('');
 document.querySelectorAll('#blocks button').forEach(b=>b.setAttribute('aria-current',String(slides[+b.dataset.jump].section===s.section)));
 history.replaceState(null,'',`#lamina-${s.number}`);document.title=`Lámina ${s.number} · Clase 3 · ${s.title}`;
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
 narration.src=`audio/c3-${String(slide.number).padStart(2,'0')}-jorge.mp3?v=20261005-jorge`;
 narration.playbackRate=Number($('#rate').value);
 narration.onended=()=>{
  if(token!==generation||mode==='idle')return;
  if(mode==='all'&&index<slides.length-1){index++;render();playNarration(token);}
  else{mode='idle';paused=false;voiceState('Narración terminada.');}
 };
 narration.onerror=()=>playbackFailure(token);
 narration.play().then(()=>{if(token===generation)voiceState(`Jorge · Lámina ${slide.number}: ${slide.title}`);}).catch(()=>playbackFailure(token));
}
function startVoice(continuous){stop();mode=continuous?'all':'one';playNarration(generation);}
function go(n){stop();index=Math.max(0,Math.min(slides.length-1,n));render();$('#presentacion').scrollIntoView({block:'start'});}
document.addEventListener('click',e=>{const b=e.target.closest('[data-jump]');if(b)go(Number(b.dataset.jump));});
$('#prev').onclick=()=>go(index-1);$('#next').onclick=()=>go(index+1);$('#slideSelect').onchange=e=>go(Number(e.target.value));
$('#project').onclick=()=>$('#screen').requestFullscreen().catch(()=>{$('#voiceStatus').textContent='Este navegador no permite proyección. Puedes ampliar la ventana.';});
$('#exitFull').onclick=()=>document.exitFullscreen();document.addEventListener('fullscreenchange',()=>{$('#exitFull').hidden=!document.fullscreenElement;});
document.addEventListener('keydown',e=>{if(e.target.closest('input,select,textarea')||e.ctrlKey||e.altKey||e.metaKey)return;if(e.key==='ArrowRight'){go(index+1);e.preventDefault();}if(e.key==='ArrowLeft'){go(index-1);e.preventDefault();}});
window.addEventListener('hashchange',()=>{const n=Number(location.hash.match(/lamina-(\d+)/)?.[1]);if(n&&n!==index+1)go(n-1);});
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
