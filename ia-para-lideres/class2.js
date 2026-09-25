'use strict';
function class2Visual(s){
 const e=escapeHTML,v=s.visual;
 const content=v.body.map((item,i)=>{
  const parts=item.split('|');
  if(v.layout==='opening')return `<p class="opening-line opening-${i}">${e(item)}</p>`;
  if(v.layout==='quote')return `<p class="quote-line quote-${i}">${e(item)}</p>`;
  if(v.layout==='compare')return `<section><h3>${e(parts[0])}</h3>${parts.slice(1).map(t=>`<p>${e(t)}</p>`).join('')}</section>`;
  return `<div class="v-item"><span class="v-number">${String(i+1).padStart(2,'0')}</span><div><h3>${e(parts[0])}</h3><p>${e(parts.slice(1).join(' · '))}</p></div></div>`;
 }).join('');
 return `<article class="lesson-visual ${v.dark?'is-dark':''} layout-${e(v.layout)}"><div class="v-top"><span>IA PARA LÍDERES / CLASE 2</span><span>${e(s.tipo)}</span></div><h2>${e(s.titulo)}</h2><div class="v-body">${content}</div><div class="v-foot"><span>Edgar Valdés · Nexo, caso ficticio</span><span>${String(s.numero).padStart(2,'0')} / 23</span></div></article>`;
}
function renderClass2Work(s){
 $('#role').closest('label').hidden=true;$('#roleDetail').hidden=true;
 const titles={'c2-comparar':'Mismo encargo en Gemini, ChatGPT y Claude','c2-make':'Instrucción para el módulo de IA en Make','c2-agente':'Expediente de reunión con archivos','c2-cambio':'Nueva condición para el expediente','c2-openclaw':'Preguntas de reunión con OpenClaw'};
 $('#prompts').innerHTML=s.work.length?s.work.map(k=>`<article class="prompt"><div class="prompt-head"><div><h4>${escapeHTML(titles[k])}</h4><p>Revisa el texto y los archivos requeridos antes de enviarlo.</p></div><button data-copy="${k}">Copiar encargo</button></div><details><summary>Ver texto completo</summary><pre>${escapeHTML(prompts[k])}</pre></details></article>`).join(''):'<p>Escucha la explicación. Los encargos para copiar aparecen en las láminas de demostración.</p>';
 $('#materials').innerHTML='<a href="clase-2/">Preparación, demostraciones y tarea ↗</a><a href="clase-2/KIT_CLASE_2.zip" download>Descargar kit de clase 2 ↓</a>'+s.materials.map(f=>`<a href="materiales/${encodeURIComponent(f)}" download>${escapeHTML(f.replaceAll('_',' '))} ↓</a>`).join('');
}
