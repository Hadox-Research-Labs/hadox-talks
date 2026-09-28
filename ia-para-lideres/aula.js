'use strict';
function aulaVisual(s,base=''){
 const e=escapeHTML,v=s.visual,kind=v.layout;
 const footer=`<footer class="aula-footer"><span>HADOX TALKS · IA PARA LÍDERES</span><span>${String(s.numero).padStart(2,'0')} / 30</span></footer>`;
 const header=`<p class="aula-kicker">CLASE 2 · ${e(s.blockTitle)}</p>`;
 const rows=v.body.map(x=>x.split('|'));
 let body='';
 if(kind==='art')return `<article class="aula-slide aula-art"><img src="${base}assets/class2-aula/${e(s.illustration)}.webp" alt="${e(s.titulo+'. '+v.body.join(' '))}" width="1672" height="941"><div class="aula-readable"><h2>${e(s.titulo)}</h2>${v.body.map(t=>`<p>${e(t)}</p>`).join('')}</div></article>`;
 if(kind==='divider')body=`${header}<div class="aula-chapter"><p class="aula-chapter-number">${String(s.block).padStart(2,'0')}</p><div><h2>${e(s.titulo)}</h2><p>${e(v.body[0])}</p></div></div><p class="aula-bottom">${e(v.body[1])}</p>`;
 else if(kind==='demo'){
  const cues={1:['ANA · PERFIL v1','“Diseñé materiales de inducción y facilité talleres internos.”','¿Qué quedará en su ficha?'],2:['ANA · CRITERIO','“Quiero diseñar aprendizaje para equipos de operación.”','¿A quién conviene preguntar?'],3:['ANA · ENCARGO','“Ayúdame a encontrar una colaboración posible con este grupo.”','¿Qué decidirá el agente?'],4:['NEXO · BORRADOR','Una propuesta con fuentes, aportaciones posibles y preguntas pendientes.','¿Qué podemos defender?']};
  const cue=cues[v.demo];
  body=`<p class="aula-kicker">DEMOSTRACIÓN ${v.demo} · ${e(v.body[2])}</p><h2>${e(s.titulo)}</h2><div class="aula-demo-scene"><blockquote><span>${e(cue[0])}</span><p>${e(cue[1])}</p><b>${e(cue[2])}</b></blockquote><div><p class="aula-demo-intro">${e(v.body[0])}</p><p class="aula-observe">${e(v.body[1])}</p></div></div><p class="aula-bottom">Salimos de la presentación. El recorrido ocurre en la herramienta.</p>`;
 }else if(kind==='pause')body=`${header}<div class="aula-pause"><p class="aula-kicker">DESCANSO · 10 MINUTOS</p><h2>${e(v.body[0])}</h2><p>${e(v.body[1])}</p></div>`;
 else if(kind==='table')body=`${header}<h2>${e(s.titulo)}</h2><table class="aula-table"><thead><tr>${rows[0].map(c=>`<th>${e(c)}</th>`).join('')}</tr></thead><tbody>${rows.slice(1).map(r=>`<tr>${r.map((c,i)=>`<td data-label="${e(rows[0][i])}">${e(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
 else if(kind==='evidence')body=`${header}<h2>${e(s.titulo)}</h2><div class="aula-evidence"><blockquote><span>${e(rows[0][0])}</span><p>“Diseñé <mark>materiales de inducción</mark> y <mark>facilité talleres internos</mark>.”</p><small>Fuente ficticia · PERFIL_ANA_V1</small></blockquote><div>${rows.slice(1).map((r,i)=>`<section class="aula-extraction extraction-${i}"><h3>${e(r[0])}</h3><p>${e(r[1])}</p></section>`).join('')}</div></div>`;
 else if(kind==='bridge')body=`${header}<h2>${e(s.titulo)}</h2><div class="aula-bridge">${rows.slice(0,2).map(r=>`<section><p class="aula-kicker">${e(r[0])}</p><h3>${e(r[1])}</h3><p>${e(r[2])}</p></section>`).join('')}</div><div class="aula-bridge-question"><h3>${e(rows[2][1])}</h3><p>${e(rows[2][2])}</p></div><p class="aula-note">Interlocutor real con fuentes. Nexo y los cuatro compañeros del ensayo son ficticios.</p>`;
 else if(kind==='comparison')body=`${header}<h2>${e(s.titulo)}</h2><div class="aula-reasoning">${rows.map((r,i)=>`<section><span class="aula-index">${i+1}</span><div><h3>${e(r[0])}</h3><p>${e(r[1])}</p><small>${e(r[2])}</small></div></section>`).join('')}</div>`;
 else body=`${header}<h2>${e(s.titulo)}</h2><div class="aula-${kind}">${rows.map((r,i)=>`<section><h3>${e(r[0])}</h3><p>${e(r[1])}</p></section>`).join('')}</div>${kind==='assignment'?'<p class="aula-note">Actividad B · Individual · 20 puntos · Guía y rúbrica en los materiales</p>':''}`;
 return `<article class="aula-slide aula-layout-${kind}">${body}${footer}</article>`;
}
