"use strict";
function class2Visual(s,base=''){
 if(s.divider)return `<article class="lesson-visual section-slide"><p class="section-kicker">CLASE 02 <span>CAPÍTULO ${String(s.block).padStart(2,'0')} / 04</span></p><div class="section-heading"><span class="section-number">${String(s.block).padStart(2,'0')}</span><div><h2>${escapeHTML(s.titulo)}</h2><p>${escapeHTML(s.subtitle)}</p></div></div><div class="section-outcomes">${s.outcomes.map(t=>`<p>${escapeHTML(t)}</p>`).join('')}</div><footer>HADOX TALKS · IA PARA LÍDERES <span>TEORÍA → DEMOSTRACIÓN</span></footer></article>`;
 const description=s.titulo+'. '+s.visual.body.map(t=>t.replaceAll('|',': ')).join('. ');
 return `<article class="lesson-visual image-slide"><img src="${base}assets/class2-v3/${s.art}" width="1672" height="941" alt="${escapeHTML(description)}"></article>`;
}
function renderClass2Work(s){
 $('#role').closest('label').hidden=true;$('#roleDetail').hidden=true;
 const titles={'c2-comparar':'Mismo encargo en Gemini, ChatGPT y Claude','c2-make':'Instrucción para el módulo de IA en Make','c2-agente':'Expediente de reunión con archivos','c2-cambio':'Nueva condición para el expediente','c2-openclaw':'Preguntas de reunión con OpenClaw'};
 $('#prompts').innerHTML=s.work.length?s.work.map(k=>`<article class="prompt"><div class="prompt-head"><div><h4>${escapeHTML(titles[k])}</h4><p>Revisa el texto y los archivos requeridos antes de enviarlo.</p></div><button data-copy="${k}">Copiar encargo</button></div><details><summary>Ver texto completo</summary><pre>${escapeHTML(prompts[k])}</pre></details></article>`).join(''):'<p>Escucha la explicación. Los encargos para copiar aparecen en las láminas de demostración.</p>';
 $('#materials').innerHTML='<a href="clase-2/">Preparación, demostraciones y tarea ↗</a><a href="clase-2/KIT_CLASE_2.zip" download>Descargar kit de clase 2 ↓</a>'+s.materials.map(f=>`<a href="materiales/${encodeURIComponent(f)}" download>${escapeHTML(f.replaceAll('_',' '))} ↓</a>`).join('');
}
