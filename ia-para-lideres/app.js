(() => {
  'use strict';
  const $=id=>document.getElementById(id);
  const courses=window.COURSES;
  const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  $('course-list').innerHTML=courses.map(c=>`<article class="course-row">
    <a class="course-preview" href="?clase=${c.id}#lamina-1" aria-label="Ver presentación de la clase ${c.id}"><img src="${c.slides[0].image}" alt="Portada de la clase ${c.id}: ${esc(c.title)}" loading="lazy" width="1280" height="720"><span>Explorar ${c.slides.length} láminas <b aria-hidden="true">↗</b></span></a>
    <div class="course-copy"><p class="meta"><span class="class-tag">Clase 0${c.id}</span> ${c.date} · ${c.duration}</p><h3>${esc(c.title)}</h3><p class="course-topics">${esc(c.topics)}</p><p class="course-question">${esc(c.question)}</p><div class="course-actions"><a class="class-link" href="?clase=${c.id}#lamina-1">Abrir clase ${c.id} <span aria-hidden="true">↗</span></a><a class="quiet-link" href="materiales/0${c.id}_GUIA_CLASE_${c.id}.pdf">Guía de trabajo · PDF ↓</a></div></div>
  </article>`).join('');
  const course=courses.find(c=>c.id===Number(new URLSearchParams(location.search).get('clase')));
  if(!course)return;
  document.body.classList.add('is-viewer');
  $('contenido').hidden=true;$('viewer').hidden=false;
  document.querySelector('.skip').href='#viewer';
  $('class-label').textContent=`Clase ${course.id} · ${course.date} · Horario Guatemala`;
  $('class-title').textContent=course.title;$('class-question').textContent=course.question;
  $('guide-link').href=`materiales/0${course.id}_GUIA_CLASE_${course.id}.pdf`;
  $('pdf-link').href=`materiales/EXPOSICION_${course.id}.pdf`;
  $('assignment-link').href=`materiales/0${course.id}_GUIA_CLASE_${course.id}.pdf`;
  $('notes-link').href=course.notes;
  
  $('slide-select').innerHTML=course.slides.map((s,i)=>`<option value="${i}">${i+1} / ${course.slides.length} · ${esc(s.titulo)}</option>`).join('');
  $('slide-outline').innerHTML=course.slides.map((s,i)=>`<li><button data-index="${i}">${i+1}. ${esc(s.titulo)}<span>${esc(s.tipo)} · ${s.horario}</span></button></li>`).join('');
  let index=0, auto=false, serial=0, utterance=null, speaking=false;
  const synth=window.speechSynthesis;
  const activity=s=>!['APERTURA','EXPLICACIÓN','CIERRE','REFERENCIAS'].includes(s.tipo);
  function status(text){$('audio-status').textContent=text;}
  function stop(message='Narración detenida.'){
    serial++;auto=false;speaking=false;if(synth)synth.cancel();
    $('autoplay').setAttribute('aria-pressed','false');$('pause').disabled=true;$('stop').disabled=true;$('pause').textContent='Pausar';if(message)status(message);
  }
  function currentHash(){const m=location.hash.match(/^#lamina-(\d+)$/);return m?Math.max(0,Math.min(course.slides.length-1,Number(m[1])-1)):0;}
  function render(){
    const s=course.slides[index];$('slide-image').src=s.image;$('slide-image').alt=`Lámina ${index+1}. ${s.titulo}`;
    $('slide-type').textContent=s.tipo;$('slide-time').textContent=s.horario;$('narration-text').textContent=s.narration;
    const prep=s.preparation;
    $('preparation-label').textContent=`Preparar la lámina ${index+1} · ${s.titulo}`;
    $('preparation-content').innerHTML=prep.sections.map(section=>`<section class="note-section${section.kind==='Ampliación'?' note-spoken':''}"><h3>${esc(section.label)}</h3><p>${esc(section.text)}</p></section>`).join('');
    $('preparation-sources').hidden=!prep.sources.length;
    $('source-list').innerHTML=prep.sources.map(ref=>`<li><a href="${esc(ref.url)}" target="_blank" rel="noopener noreferrer">${esc(ref.title)} <span aria-hidden="true">↗</span></a><p>${esc(ref.focus)}</p></li>`).join('');
    $('fullscreen-caption').textContent=`${index+1}/${course.slides.length} · ${s.titulo} · ← → cambiar · Esc salir`;
    $('slide-select').value=String(index);$('previous').disabled=index===0;$('next').disabled=index===course.slides.length-1;
    $('progress').max=course.slides.length;$('progress').value=index+1;
    document.querySelectorAll('[data-index]').forEach(b=>b.setAttribute('aria-current',String(Number(b.dataset.index)===index)));
    document.title=`Clase ${course.id} · ${index+1}. ${s.titulo}`;
    if(index+1<course.slides.length){const preload=new Image();preload.src=course.slides[index+1].image;}
  }
  function go(next, fromAuto=false){
    if(next<0||next>=course.slides.length)return;
    if(!fromAuto)stop('Lámina lista. Puedes escuchar la explicación o continuar.');
    index=next;history.replaceState(null,'',`#lamina-${index+1}`);render();
  }
  function voices(){
    if(!synth)return;const keep=$('voice').value;
    $('voice').innerHTML='<option value="">Predeterminada en español</option>';
    synth.getVoices().filter(v=>v.lang.startsWith('es')).forEach(v=>{const o=document.createElement('option');o.value=v.voiceURI;o.textContent=`${v.name} (${v.lang})`;$('voice').append(o);});
    if([...$('voice').options].some(o=>o.value===keep))$('voice').value=keep;
  }
  function speak(continuous=false){
    stop('');if(!synth){status('Este navegador no ofrece narración. Puedes leer la explicación debajo de la lámina.');return;}
    auto=continuous;$('autoplay').setAttribute('aria-pressed',String(auto));
    const token=serial;
    const chunks=course.slides[index].narration.match(/[^.!?]+[.!?]+|[^.!?]+$/g)||[course.slides[index].narration];
    let chunk=0;
    function run(){
      if(token!==serial)return;
      if(chunk>=chunks.length){
        speaking=false;$('pause').disabled=true;$('stop').disabled=true;
        if(auto&&index<course.slides.length-1){
          go(index+1,true);
          if(activity(course.slides[index])){stop('Pausa para trabajar: retoma la narración cuando termines la actividad.');}
          else speak(true);
        }else stop('Explicación terminada.');
        return;
      }
      utterance=new SpeechSynthesisUtterance(chunks[chunk++].trim());utterance.lang='es-MX';utterance.rate=Number($('rate').value);
      const selected=synth.getVoices().find(v=>v.voiceURI===$('voice').value)||synth.getVoices().find(v=>v.lang.startsWith('es'));
      if(selected)utterance.voice=selected;
      utterance.onstart=()=>{if(token!==serial)return;speaking=true;$('pause').disabled=false;$('stop').disabled=false;status('Narrando la explicación de esta lámina…');};
      utterance.onend=run;utterance.onerror=e=>{if(token!==serial)return;stop(`No se pudo reproducir la voz (${e.error}). La explicación está disponible por escrito.`);};
      synth.speak(utterance);
    }run();
  }
  function pause(){if(!synth||!speaking)return;if(synth.paused){synth.resume();$('pause').textContent='Pausar';status('Narrando…');}else{synth.pause();$('pause').textContent='Continuar';status('Narración en pausa.');}}
  async function full(){try{if(document.fullscreenElement)await document.exitFullscreen();else await $('stage').requestFullscreen();}catch{status('Pantalla completa no disponible en este navegador.');}}
  $('previous').onclick=()=>go(index-1);$('next').onclick=()=>go(index+1);$('slide-select').onchange=e=>go(Number(e.target.value));
  $('slide-outline').onclick=e=>{const b=e.target.closest('[data-index]');if(b)go(Number(b.dataset.index));};
  $('speak').onclick=()=>speak();$('autoplay').onclick=()=>auto?stop():speak(true);$('pause').onclick=pause;$('stop').onclick=()=>stop();$('fullscreen').onclick=full;
  $('rate').onchange=()=>{if(speaking)stop('Velocidad actualizada. Pulsa Escuchar para reiniciar.');};$('voice').onchange=()=>{if(speaking)stop('Voz actualizada. Pulsa Escuchar para reiniciar.');};
  document.addEventListener('keydown',e=>{if(e.ctrlKey||e.altKey||e.metaKey||/INPUT|SELECT|TEXTAREA/.test(e.target.tagName))return;const k=e.key.toLowerCase();if(['arrowleft','arrowright','n','a','p','x','f'].includes(k))e.preventDefault();if(k==='arrowleft')go(index-1);if(k==='arrowright')go(index+1);if(k==='n')speak();if(k==='a')speak(true);if(k==='p')pause();if(k==='x')stop();if(k==='f')full();});
  window.addEventListener('hashchange',()=>{if(/^#lamina-\d+$/.test(location.hash))go(currentHash());});window.addEventListener('pagehide',()=>stop(''));
  if(synth){voices();synth.addEventListener('voiceschanged',voices);}else{['speak','autoplay','pause','stop'].forEach(id=>$(id).disabled=true);status('Narración no disponible aquí. Abre la explicación escrita.');}
  index=currentHash();render();
})();
