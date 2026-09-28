'use strict';
function studioVisual(s,base=''){
 const e=escapeHTML,v=s.visual,k=v.layout,b=v.body,r=b.map(t=>t.split('|'));
 const brand='<span>HADOX / TALKS</span><span>IA PARA LÍDERES · PBS</span>';
 const footer=`<footer class="st-footer">${brand}<span>${String(s.numero).padStart(2,'0')} / 18</span></footer>`;
 const title=`<p class="st-eyebrow">${e(s.blockTitle)}</p><h2>${e(s.titulo)}</h2>`;
 let html='';
 if(k==='figure')return `<article class="st-slide st-figure"><img src="${base}assets/class2-studio/${e(s.art)}.webp" width="1672" height="941" alt="${e(s.titulo+'. '+b.join(' '))}"><div class="st-accessible"><h2>${e(s.titulo)}</h2>${b.map(t=>`<p>${e(t)}</p>`).join('')}</div></article>`;
 if(k==='cover')html=`<img class="st-cover-art" src="${base}assets/class2-studio/cover.webp" alt="Un grupo reúne experiencias y conocimientos alrededor de un proyecto compartido"><div class="st-cover-copy"><p class="st-eyebrow">${e(b[1])}</p><h2>Conocernos<br>para construir<br>juntos</h2><p class="st-cover-sub">${e(b[0])}</p><p class="st-author">Edgar Valdés<br>PBS · 28 septiembre 2026</p></div>`;
 if(k==='chapter')html=`<p class="st-eyebrow">CLASE 2 · PARTE ${s.block}</p><h2>${e(s.titulo)}</h2><p class="st-chapter-question">${e(b[0])}</p><p class="st-chapter-concepts">${e(b[1])}</p>`;
 if(k==='result')html=`${title}<div class="st-result"><div class="st-result-context"><h3>${e(r[0][0])}</h3><p>${e(r[0][1])}</p><h3>${e(r[2][0])}</h3><p>${e(r[2][1])}</p></div><div class="st-document"><p class="st-eyebrow">DOCUMENTO DE SALIDA · ESTRUCTURA</p><h3>${e(r[1][0])}</h3>${r[1][1].split('\n').map((t,i)=>`<p><span>${i+1}</span>${e(t)}</p>`).join('')}</div></div>`;
 if(k==='demo')html=`<p class="st-eyebrow">DEMOSTRACIÓN ${s.demo} · ${e(s.tools)}</p><h2>${e(s.titulo.replace(/^Demo \d · /,''))}</h2><div class="st-demo"><div><h3>${e(r[0][0])}</h3><p>${e(r[0][1])}</p></div><div><h3>${e(r[1][0])}</h3><p>${e(r[1][1])}</p></div></div><p class="st-demo-watch"><b>${e(r[2][0])}</b> ${e(r[2][1])}</p><p class="st-live">Demostración en la herramienta · El profesor realiza el recorrido completo.</p>`;
 if(k==='modes')html=`${title}<div class="st-modes">${r.slice(0,3).map(t=>`<section><h3>${e(t[0])}</h3><div><strong>${e(t[1])}</strong><p>${e(t[2])}</p></div></section>`).join('')}</div><p class="st-principle">${e(b[3])}</p>`;
 if(k==='authority')html=`${title}<div class="st-authority"><section><h3>${e(r[0][0])}</h3><p>${e(r[0][1])}</p><small>Autonomía dentro de la tarea</small></section><section><h3>${e(r[1][0])}</h3><p>${e(r[1][1])}</p><small>Consecuencias bajo autorización</small></section></div><div class="st-test"><h3>${e(r[2][0])}</h3><p>${e(r[2][1])}</p></div>`;
 if(k==='implementation')html=`${title}<div class="st-choices">${r.slice(0,3).map(t=>`<section><h3>${e(t[0])}</h3><p>${e(t[1])}</p></section>`).join('')}</div><div class="st-brief"><h3>${e(r[3][0])}</h3><p>${e(r[3][1])}</p><small>¿Quién mantiene el sistema y quién acepta el resultado?</small></div>`;
 if(k==='task')html=`${title}<div class="st-task">${r.map(t=>`<section><h3>${e(t[0])}</h3><p>${e(t[1])}</p></section>`).join('')}</div><p class="st-task-note">Repetir la demostración + desafío propio · Evidencia B · 20 puntos</p>`;
 if(k==='pause')html=`<p class="st-eyebrow">DESCANSO · 10 MINUTOS</p><h2>${e(b[0])}</h2><p class="st-pause-question">${e(b[1])}</p><p class="st-pause-next">Al volver: delegar la preparación de una propuesta.</p>`;
 if(k==='closing')html=`<p class="st-eyebrow">CONTINUAR LA INVESTIGACIÓN</p><h2>${e(s.titulo)}</h2><p class="st-closing-main">${e(b[0])}</p><p class="st-closing-detail">${e(b[1])}</p><p class="st-next-class">${e(b[2])}</p>`;
 return `<article class="st-slide st-${k}">${html}${footer}</article>`;
}
