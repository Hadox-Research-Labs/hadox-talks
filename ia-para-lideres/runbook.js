'use strict';
// Plain directions for the current slide. Only the practice perspective is remembered.
const guideStore={get(key,fallback){try{return localStorage.getItem(key)||fallback}catch{return fallback}},set(key,value){try{localStorage.setItem(key,String(value))}catch{}}};
function guidePrompt(key){return ['sin','con'].includes(key)?`${key}-${role}`:key}
function guideAction(a){
 const e=escapeHTML,url=`materiales/${encodeURIComponent(a.file||'')}`;
 if(a.kind==='link')return `<a class="guide-action" href="${e(a.url)}" target="_blank" rel="noopener">${e(a.label)} ↗</a>`;
 if(a.kind==='download')return `<a class="guide-action" href="${url}" download>${e(a.label)} ↓</a>`;
 if(a.kind==='prompt'){const key=guidePrompt(a.key);return `<div class="guide-prompt"><button class="guide-primary" data-copy="${e(key)}">${e(a.label)}</button><details><summary>Ver encargo completo</summary><pre>${e(prompts[key])}</pre></details></div>`}
 return `<button data-guide-action="${e(a.kind)}"${a.file?` data-file="${e(a.file)}"`:''}>${e(a.label)}</button>`;
}
function renderRunbook(){
 const s=course[cid-1].slides[idx],r=s.runbook;if(!r)return;const e=escapeHTML;
 const activities=(r.items||[]).map(it=>`<li><p>${e(it.text)}</p>${it.actions.length?`<div class="guide-actions">${it.actions.map(guideAction).join('')}</div>`:''}</li>`).join('');
 const body=activities?`<ol class="simple-activities">${activities}</ol>`:'';
 $('#teacher').innerHTML=`<div class="runbook simple-guide"><h3 id="guideStepTitle" tabindex="-1">${e(r.title)}</h3><p class="simple-lead">${e(r.text)}</p>${r.actions.length?`<div class="guide-actions">${r.actions.map(guideAction).join('')}</div>`:''}${r.roleSelection?`<div class="guide-role"><label for="guideRole">Elige tu perspectiva</label><select id="guideRole">${Object.entries(roles).map(([k,v])=>`<option value="${e(k)}"${role===k?' selected':''}>${e(v[0])}</option>`).join('')}</select><p>${e(roles[role][1])}</p></div>`:''}${r.moreTitle?`<details class="simple-demo"><summary>${e(r.moreTitle)}</summary><p>${e(r.moreIntro)}</p>${body}</details>`:body}<div id="guidePreview" class="guide-preview" hidden></div></div>`;
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
  else{const response=await fetch(url+'?v=guia-simple-20260921');if(!response.ok)throw Error('No disponible');body=guideMarkdown(await response.text())}
  if(!preview.isConnected)return;
  preview.innerHTML=`<div class="guide-preview-head"><b>${escapeHTML(file.replaceAll('_',' '))}</b><button data-guide-action="closePreview">Cerrar material</button></div>${body}<a href="${url}" download>Descargar este archivo ↓</a>`;
  preview.scrollIntoView({block:'start'});
 }catch{if(preview.isConnected)preview.innerHTML='<p role="alert">No se pudo abrir el material. Vuelve a pulsar su botón para intentarlo.</p>'}
}
document.addEventListener('click',async event=>{
 const b=event.target.closest('button');if(!b)return;
 const action=b.dataset.guideAction;if(!action)return;
 if(action==='listen'){panel('speech');$('#speech').scrollIntoView({block:'start'});$('#speak').click();return}
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
