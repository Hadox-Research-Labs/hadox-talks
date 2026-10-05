const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const data=await fetch('course.json?v=20261004-academica').then(r=>{if(!r.ok)throw Error('No se pudo abrir la clase');return r.json()});
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
 $('#slideImage').src=`laminas/c3-${String(s.number).padStart(2,'0')}.png?v=20261004-academica`;
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
function stop(){generation++;mode='idle';paused=false;queue=[];if('speechSynthesis'in window)speechSynthesis.cancel();voiceState('Lectura detenida.');}
function chunks(text){return text.split(/(?<=[.!?])\s+/).flatMap(p=>{if(p.length<230)return[p];const words=p.split(' '),result=[];let current='';for(const w of words){if((current+' '+w).length>210){result.push(current);current=w;}else current+=(current?' ':'')+w;}if(current)result.push(current);return result;});}
function readNext(token){
 if(token!==generation||mode==='idle')return;
 if(part>=queue.length){if(mode==='all'&&index<slides.length-1){index++;render();queue=chunks(slides[index].speech);part=0;}else{mode='idle';voiceState('Lectura terminada.');return;}}
 const u=new SpeechSynthesisUtterance(queue[part++]);u.lang='es-MX';u.rate=Number($('#rate').value);
 const voices=speechSynthesis.getVoices();u.voice=voices.find(v=>/^es[-_]MX/i.test(v.lang))||voices.find(v=>/^es/i.test(v.lang))||null;
 u.onend=()=>readNext(token);u.onerror=e=>{if(token===generation&&e.error!=='canceled'&&e.error!=='interrupted'){mode='idle';voiceState('La voz se interrumpió. Puedes volver a iniciar la lectura o leer el discurso.');}};
 speechSynthesis.speak(u);voiceState(`Leyendo lámina ${slides[index].number}: ${slides[index].title}`);
}
function startVoice(continuous){stop();mode=continuous?'all':'one';queue=chunks(slides[index].speech);part=0;readNext(generation);}
function go(n){stop();index=Math.max(0,Math.min(slides.length-1,n));render();$('#presentacion').scrollIntoView({block:'start'});}
document.addEventListener('click',e=>{const b=e.target.closest('[data-jump]');if(b)go(Number(b.dataset.jump));});
$('#prev').onclick=()=>go(index-1);$('#next').onclick=()=>go(index+1);$('#slideSelect').onchange=e=>go(Number(e.target.value));
$('#project').onclick=()=>$('#screen').requestFullscreen().catch(()=>{$('#voiceStatus').textContent='Este navegador no permite proyección. Puedes ampliar la ventana.';});
$('#exitFull').onclick=()=>document.exitFullscreen();document.addEventListener('fullscreenchange',()=>{$('#exitFull').hidden=!document.fullscreenElement;});
document.addEventListener('keydown',e=>{if(e.target.closest('input,select,textarea')||e.ctrlKey||e.altKey||e.metaKey)return;if(e.key==='ArrowRight'){go(index+1);e.preventDefault();}if(e.key==='ArrowLeft'){go(index-1);e.preventDefault();}});
window.addEventListener('hashchange',()=>{const n=Number(location.hash.match(/lamina-(\d+)/)?.[1]);if(n&&n!==index+1)go(n-1);});
$('#copyPrompt').onclick=async()=>{try{await navigator.clipboard.writeText(slides[index].prompt);$('#copyStatus').textContent=' Encargo copiado.';}catch{$('#copyStatus').textContent=' Selecciona y copia el texto visible.';}};
if('speechSynthesis'in window){$('#listenOne').onclick=()=>startVoice(false);$('#listenAll').onclick=()=>startVoice(true);$('#pause').onclick=()=>{paused=!paused;if(paused)speechSynthesis.pause();else speechSynthesis.resume();voiceState(paused?'Lectura en pausa.':`Leyendo lámina ${index+1}.`);};$('#stop').onclick=stop;voiceState('Lectura lista. Voz según el navegador.');}else{['#listenOne','#listenAll','#pause','#stop'].forEach(k=>$(k).disabled=true);voiceState('La voz no está disponible en este navegador. El discurso escrito está completo.');}
window.addEventListener('pagehide',stop);render();if(index>0)$('#presentacion').scrollIntoView({block:'start'});
