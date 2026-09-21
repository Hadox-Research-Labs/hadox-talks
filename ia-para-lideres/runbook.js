'use strict';
// A slide-local guide: it stores only mode and position, never learner work.
const guideStore={get(key,fallback){try{return localStorage.getItem(key)||fallback}catch{return fallback}},set(key,value){try{localStorage.setItem(key,String(value))}catch{}}};
let guideMode=guideStore.get('nexo-guide-mode','teach');
if(!['teach','solo'].includes(guideMode))guideMode='teach';
function guideKey(){return `nexo-guide-v1-${cid}-${idx}-${guideMode}`}
function guidePosition(){const n=Number(guideStore.get(guideKey(),'0'));return Math.max(0,Math.min(course[cid-1].slides[idx].runbook.steps.length-1,Number.isFinite(n)?Math.floor(n):0))}
function guidePrompt(key){return ['sin','con'].includes(key)?`${key}-${role}`:key}
function guideAction(a){
 const e=escapeHTML,url=`materiales/${encodeURIComponent(a.file||'')}`;
 if(a.kind==='link')return `<a class="guide-action" href="${e(a.url)}" target="_blank" rel="noopener">${e(a.label)} ↗</a>`;
 if(a.kind==='download')return `<a class="guide-action" href="${url}" download>${e(a.label)} ↓</a>`;
 if(a.kind==='prompt'){const key=guidePrompt(a.key);return `<div class="guide-prompt"><button class="guide-primary" data-copy="${e(key)}">${e(a.label)}</button><details><summary>Ver encargo completo</summary><pre>${e(prompts[key])}</pre></details></div>`}
 return `<button data-guide-action="${e(a.kind)}"${a.file?` data-file="${e(a.file)}"`:''}>${e(a.label)}</button>`;
}
function renderRunbook(focus=false){
 const s=course[cid-1].slides[idx],r=s.runbook;if(!r)return;
 const n=guidePosition(),step=r.steps[n],solo=guideMode==='solo',e=escapeHTML;
 const actions=step.actions.filter(a=>!(solo&&a.kind==='project'));
 $('#teacher').innerHTML=`<div class="runbook"><div class="guide-mode" role="group" aria-label="Cómo seguir la clase"><button data-guide-mode="teach" aria-pressed="${!solo}">Voy a impartirla</button><button data-guide-mode="solo" aria-pressed="${solo}">La estoy tomando por mi cuenta</button></div><p class="guide-goal"><b>En esta lámina:</b> ${e(r.goal)}</p>${r.roleSelection?`<div class="guide-role"><label for="guideRole">Tu perspectiva para toda la práctica</label><select id="guideRole">${Object.entries(roles).map(([k,v])=>`<option value="${e(k)}"${role===k?' selected':''}>${e(v[0])}</option>`).join('')}</select><p>${e(roles[role][1])}</p><small>Conserva esta elección y el mismo modelo en ambos chats.</small></div>`:''}<div class="guide-progress"><span>Paso ${n+1} de ${r.steps.length}</span><span>Lámina ${s.numero} · ${s.minutes} min en total</span></div><progress max="${r.steps.length}" value="${n+1}" aria-label="Paso actual"></progress><section class="guide-step" aria-labelledby="guideStepTitle"><h3 id="guideStepTitle" tabindex="-1">${e(step.title)}</h3><ol class="guide-instructions">${step[solo?'solo':'do'].map(t=>`<li>${e(t)}</li>`).join('')}</ol>${actions.length?`<div class="guide-actions">${actions.map(guideAction).join('')}</div>`:''}${actions.some(a=>a.url==='https://docs.google.com/document/create')?'<p class="guide-hint">Si ya abriste tu documento de trabajo, vuelve a esa pestaña. Sólo necesitas crearlo una vez; también puedes usar tu editor habitual.</p>':''}<div id="guidePreview" class="guide-preview" hidden></div>${solo?`<p class="guide-idea"><b>Idea para llevarte:</b> ${e(step.say)}</p>`:`<blockquote class="guide-say"><span>Una frase para decir</span>${e(step.say)}</blockquote><dl class="guide-stage"><dt>En pantalla</dt><dd>${e(step.screen)}</dd><dt>El grupo</dt><dd>${e(step.group)}</dd></dl>`}<p class="guide-check"><b>Antes de avanzar</b>${e(step.check)}</p>${step.help?`<details class="guide-help"><summary>Si algo no sale como esperabas</summary><p>${e(step.help)}</p></details>`:''}</section><div class="guide-navigation"><button data-guide-step="${n-1}"${n===0?' disabled':''}>← Paso anterior</button>${n<r.steps.length-1?`<button class="guide-primary" data-guide-step="${n+1}">Siguiente paso →</button>`:idx<course[cid-1].slides.length-1?'<button class="guide-primary" data-guide-action="nextSlide">Siguiente lámina →</button>':'<span class="guide-end">Fin de la clase · Conserva tu entrega A</span>'}</div><details class="guide-overview"><summary>Ver todos los pasos de esta lámina</summary><ol>${r.steps.map((t,i)=>`<li><button data-guide-step="${i}" aria-current="${i===n?'step':'false'}">${e(t.title)}</button></li>`).join('')}</ol></details><p class="guide-footnote">Tu lugar en la guía se recuerda en este navegador. Avanzar no envía ni califica tu trabajo. <a href="materiales/GUIA_PASO_A_PASO_1.md" download>Descargar guía completa ↓</a></p></div>`;
 if(focus){$('#guideStepTitle').focus({preventScroll:true});$('#teacher').scrollIntoView({block:'start'})}
}
// Render the trusted, static Markdown materials as readable text and tables.
// Escape first; no HTML from a document is executed.
function guideMarkdown(text){
 const inline=t=>escapeHTML(t).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/`([^`]+)`/g,'<code>$1</code>');
 const lines=text.split(/\r?\n/);let out='',list=false;
 const close=()=>{if(list){out+='</ul>';list=false}};
 for(let i=0;i<lines.length;i++){
  const line=lines[i];if(!line.trim()){close();continue}
  if(line.startsWith('|')&&/^\|[\s:|\-]+\|\s*$/.test(lines[i+1]||'')){
   close();const cells=t=>t.trim().replace(/^\||\|$/g,'').split('|').map(x=>inline(x.trim()));
   out+='<div class="guide-table"><table><thead><tr>'+cells(line).map(x=>`<th>${x}</th>`).join('')+'</tr></thead><tbody>';i+=2;
   while(i<lines.length&&lines[i].startsWith('|')){out+='<tr>'+cells(lines[i]).map(x=>`<td>${x}</td>`).join('')+'</tr>';i++}i--;out+='</tbody></table></div>';continue;
  }
  const h=line.match(/^(#{1,6})\s+(.+)/);if(h){close();const level=Math.min(6,h[1].length+2);out+=`<h${level}>${inline(h[2])}</h${level}>`;continue}
  if(/^\s*([-*]|\d+\.)\s+/.test(line)){if(!list){out+='<ul>';list=true}out+=`<li>${inline(line.replace(/^\s*([-*]|\d+\.)\s+/,''))}</li>`;continue}
  close();if(/^---+$/.test(line)){out+='<hr>';continue}out+=`<p>${inline(line)}</p>`;
 }close();return out;
}
async function guideOpenFile(file,image=false){
 const preview=$('#guidePreview');if(!preview)return;preview.hidden=false;
 preview.innerHTML='<p role="status">Abriendo material…</p>';
 const url=`materiales/${encodeURIComponent(file)}`;
 try{
  let body;if(image)body=`<a href="${url}" target="_blank" rel="noopener" aria-label="Ver imagen V1 a tamaño completo"><img src="${url}" alt="Fuente V1 del caso Nexo: distribución de las 88 solicitudes abiertas"></a><p>Pulsa la imagen para verla a tamaño completo.</p>`;
  else{const response=await fetch(url+'?v=guia-20260921');if(!response.ok)throw Error('No disponible');body=guideMarkdown(await response.text())}
  if(!preview.isConnected)return;
  preview.innerHTML=`<div class="guide-preview-head"><b>${escapeHTML(file.replaceAll('_',' '))}</b><button data-guide-action="closePreview">Cerrar material</button></div>${body}<a href="${url}" download>Descargar este archivo ↓</a>`;
  preview.scrollIntoView({block:'start'});
 }catch{if(preview.isConnected)preview.innerHTML='<p role="alert">No se pudo abrir el material. Vuelve a pulsar su botón para intentarlo.</p>'}
}
document.addEventListener('click',async event=>{
 const b=event.target.closest('button');if(!b)return;
 if(b.dataset.guideMode){guideMode=b.dataset.guideMode;guideStore.set('nexo-guide-mode',guideMode);renderRunbook();return}
 if(b.dataset.guideStep!==undefined){guideStore.set(guideKey(),b.dataset.guideStep);renderRunbook(true);return}
 const action=b.dataset.guideAction;if(!action)return;
 if(action==='project'){$('#fullscreen').click();return}
 if(action==='nextSlide'){idx++;render();panel('teacher');$('#teacher').scrollIntoView({block:'start'});return}
 if(['speech','reserve','sources'].includes(action)){panel(action==='sources'?'sources':'speech');(action==='reserve'?$('.speaker-reserve'):$('#'+(action==='sources'?'sources':'speech')))?.scrollIntoView({block:'start'});return}
 if(action==='closePreview'){$('#guidePreview').hidden=true;$('#guideStepTitle').focus();return}
 if(action==='file'||action==='image'){await guideOpenFile(b.dataset.file,action==='image');return}
 if(action==='copyFile'){
  try{const response=await fetch(`materiales/${encodeURIComponent(b.dataset.file)}`);if(!response.ok)throw Error();await navigator.clipboard.writeText(await response.text());notify('Plantilla copiada. Pégala en tu documento de trabajo.')}catch{notify('No se pudo copiar. Abre la plantilla y selecciona su texto.');await guideOpenFile(b.dataset.file)}
 }
});
document.addEventListener('change',event=>{if(event.target.id==='guideRole'){role=event.target.value;guideStore.set('nexo-role',role);$('#role').value=role;renderWork();renderRunbook()}});
