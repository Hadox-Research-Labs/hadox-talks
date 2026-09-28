"use strict";
function class2Visual(s,base=''){
 if(s.aula)return aulaVisual(s,base);
 if(s.red)return redVisual(s,base);
 if(s.divider)return `<article class="lesson-visual section-slide"><p class="section-kicker">CLASE 02 <span>CAPÍTULO ${String(s.block).padStart(2,'0')} / 04</span></p><div class="section-heading"><span class="section-number">${String(s.block).padStart(2,'0')}</span><div><h2>${escapeHTML(s.titulo)}</h2><p>${escapeHTML(s.subtitle)}</p></div></div><div class="section-outcomes">${s.outcomes.map(t=>`<p>${escapeHTML(t)}</p>`).join('')}</div><footer>HADOX TALKS · IA PARA LÍDERES <span>TEORÍA → DEMOSTRACIÓN</span></footer></article>`;
 const description=s.titulo+'. '+s.visual.body.map(t=>t.replaceAll('|',': ')).join('. ');
 return `<article class="lesson-visual image-slide"><img src="${base}assets/class2-v3/${s.art}" width="1672" height="941" alt="${escapeHTML(description)}"></article>`;
}
function renderClass2Work(s){
 $('#role').closest('label').hidden=true;$('#roleDetail').hidden=true;
 const titles={'aula-extraer':'Preparar una ficha revisable','aula-conectar':'Encontrar una colaboración','aula-agente':'Delegar una exploración','aula-cambio':'Cambiar una condición','aula-proponer':'Preparar dos propuestas','aula-revisar':'Revisar contra las fuentes','red-extraer':'Extraer una ficha fiel','red-conectar':'Buscar conexiones con evidencia','red-agente':'Delegar una exploración','red-cambio':'Cambiar el criterio','red-proponer':'Preparar una propuesta','red-revisar':'Revisar contra las fuentes','c2-comparar':'Mismo encargo en Gemini, ChatGPT y Claude','c2-make':'Instrucción para el módulo de IA en Make','c2-agente':'Expediente de reunión con archivos','c2-cambio':'Nueva condición para el expediente','c2-openclaw':'Preguntas de reunión con OpenClaw'};
 $('#prompts').innerHTML=s.work.length?s.work.map(k=>`<article class="prompt"><div class="prompt-head"><div><h4>${escapeHTML(titles[k])}</h4><p>Revisa el texto y los archivos requeridos antes de enviarlo.</p></div><button data-copy="${k}">Copiar encargo</button></div><details><summary>Ver texto completo</summary><pre>${escapeHTML(prompts[k])}</pre></details></article>`).join(''):'<p>Escucha la explicación. Los encargos para copiar aparecen en las láminas de demostración.</p>';
 $('#materials').innerHTML='<a href="clase-2/">Preparación, demostraciones y tarea ↗</a><a href="clase-2/KIT_CLASE_2.zip" download>Descargar kit de clase 2 ↓</a>'+s.materials.map(f=>`<a href="materiales/${encodeURIComponent(f)}" download>${escapeHTML(f.replaceAll('_',' '))} ↓</a>`).join('');
}

function redVisual(s,base=''){
 const e=escapeHTML,v=s.visual,kind=v.layout;
 const rows=v.body.map(t=>t.split('|'));
 const top=`<div class="red-top"><span>IA PARA LÍDERES · CLASE 02</span><span>${e(s.blockTitle)}</span></div>`;
 const foot=`<div class="red-foot"><span>HADOX TALKS · EDGAR VALDÉS</span><span>${String(s.numero).padStart(2,'0')} / 22</span></div>`;
 const title=s.titulo.replace(/^Demostración (\d+) · /,'');
 const img=s.illustration?`<img class="red-art" src="${base}assets/class2-red/${s.illustration}" alt="${e({'red':'Red de aportaciones que se combinan','representacion':'Una representación conserva sólo parte de la información original','afinidad':'Piezas similares frente a piezas que se complementan','ciclo':'Ciclo: observar, decidir, actuar y comprobar','error':'Una distorsión se amplifica al atravesar varias etapas','propuesta':'Fuentes y capacidades reunidas en una propuesta'}[s.illustration.split('.')[0]])}">`:'';
 let content='';
 if(kind==='divider')content=`<div class="red-divider"><span class="red-chapter">${String(s.block).padStart(2,'0')}</span><div><h2>${e(title)}</h2><p>${e(v.body[0])}</p></div></div><p class="red-transition">${e(v.body[1])}</p>`;
 else if(kind==='cover')content=`<div class="red-cover"><div><p class="red-label">AUTOMATIZACIÓN + AGENTES</p><h2>${e(title)}</h2><p>${e(v.body[0])}</p></div>${img}</div>`;
 else if(kind==='table')content=`<h2>${e(title)}</h2><div class="red-content"><table><thead><tr>${rows[0].map(c=>`<th>${e(c)}</th>`).join('')}</tr></thead><tbody>${rows.slice(1).map(r=>`<tr>${r.map(c=>`<td>${e(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
 else if(kind==='image')content=`<h2>${e(title)}</h2><div class="red-content red-illustrated">${img}<div>${rows.map(r=>`<section><h3>${e(r[0])}</h3><p>${e(r[1]||'')}</p></section>`).join('')}</div></div>`;
 else if(kind==='demo')content=`<p class="red-label">DEMOSTRACIÓN ${[6,10,16,20].indexOf(s.numero)+1} · EL PROFESOR REALIZA EL RECORRIDO</p><h2>${e(title)}</h2><div class="red-content red-demo">${rows.map((r,i)=>`<section><span>${String(i+1).padStart(2,'0')}</span><div><h3>${e(r[0])}</h3><p>${e(r[1]||'')}</p></div></section>`).join('')}</div><p class="red-transition">Los pasos y encargos están en la guía. Observa, cuestiona y después repite.</p>`;
 else if(kind==='sequence')content=`<h2>${e(title)}</h2><div class="red-content red-sequence">${rows.map((r,i)=>`<section><span>${String(i+1).padStart(2,'0')}</span><h3>${e(r[0])}</h3><p>${e(r[1]||'')}</p></section>`).join('')}</div>`;
 else content=`<div class="red-closing"><p class="red-label">${kind==='dark'?'PAUSA · DIEZ MINUTOS':'HACIA LA CLASE 3'}</p><h2>${e(title)}</h2>${rows.map(r=>`<p>${e(r.join(' · '))}</p>`).join('')}</div>`;
 return `<article class="red-slide red-layout-${kind} ${v.dark?'red-dark':''}">${top}${content}${foot}</article>`;
}
