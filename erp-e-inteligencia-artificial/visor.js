(async function () {
  'use strict';
  const $ = id => document.getElementById(id);
  let slides, index = 0, narrator, voiceState = {mode:'idle',paused:false};
  function practiceCue(state=voiceState) {
    const s=slides[index],practice=s.practice;
    const upcoming=slides.slice(index+1).find(item=>item.practice);
    $('practice-cue').classList.toggle('is-practice',Boolean(practice));
    $('activity-link').hidden=!practice;
    if(practice){
      const section=document.querySelector('#'+practice.toLowerCase());
      const name=section?.querySelector('h3')?.textContent||'';
      $('practice-cue-title').textContent=(state.mode==='practice'?'Pausa para la práctica ':'Práctica ')+practice;
      const after=index<slides.length-1?'Al terminar, vuelve a la presentación y continúa en la lámina '+(index+2)+'.':'Al terminar, vuelve y pulsa Terminar presentación.';
      $('practice-cue-text').textContent=state.mode==='practice'?'Abre '+practice+' y realiza sus pasos. '+after:name+'. Al terminar esta explicación puedes abrir la actividad.';
      $('activity-link').href='#'+practice.toLowerCase();
      $('activity-link').textContent='Abrir práctica '+practice+' ↓';
    }else{
      $('practice-cue-title').textContent='Teoría · continúa la presentación';
      $('practice-cue-text').textContent=upcoming?'La próxima práctica es '+upcoming.practice+', en la lámina '+upcoming.number+'. Aquí todavía no se realiza el ejercicio.':'Esta lámina no contiene una práctica.';
    }
  }
  try {
    const response = await fetch('leccion.json?v=20261119-3');
    if (!response.ok) throw new Error('No se pudo cargar la lección');
    slides = (await response.json()).slides;
  } catch (_) {
    $('slide-caption').textContent = 'Descarga el PDF para consultar la presentación completa.';
    $('voice-status').textContent='No se pudo preparar la presentación. Recarga la página para reintentar o descarga el PDF.';
    $('listen-all').textContent='Ensayo no disponible';
    $('viewer').setAttribute('aria-busy','false');
    return;
  }
  function show(i) {
    index = Math.max(0, Math.min(slides.length - 1, i));
    const s = slides[index];
    $('slide-image').src = s.image; $('slide-image').alt = `Lámina ${s.number}: ${s.title}`;
    $('image-link').href = s.image; $('slide-select').value = String(index);
    $('previous').disabled = index === 0; $('next').disabled = index === slides.length - 1;
    $('slide-caption').textContent = `Lámina ${s.number} de ${slides.length} · ${s.title}`;
    practiceCue({mode:'idle'});
    $('slide-transcript-body').replaceChildren(...s.transcript.split(/\n\s*\n/).map(text => {
      const p = document.createElement('p'); p.textContent = text; return p;
    }));
    history.replaceState(null, '', '#lamina-' + s.number);
    if (slides[index + 1]) { const img = new Image(); img.src = slides[index + 1].image; }
  }
  function move(i) { if(narrator)narrator.select(i);else show(i); }
  function readHash() {
    const match = location.hash.match(/^#lamina-(\d+)$/);
    if (match) move(Number(match[1]) - 1);
    else if (/^#a[1-7]$/.test(location.hash)) {
      openPractice(location.hash.slice(1).toUpperCase());
    }
  }
  $('previous').onclick = () => move(index - 1); $('next').onclick = () => move(index + 1);
  $('slide-select').onchange = e => move(Number(e.target.value));
  async function openPractice(code) {
    const section=document.querySelector('#'+code.toLowerCase());
    if(!section)return;
    if(document.fullscreenElement){
      try{await document.exitFullscreen();}
      catch(_){$('voice-status').textContent='Pulsa Esc para salir de pantalla completa y abrir la práctica.';return;}
    }
    stopVideos();
    if(!narrator.enterPractice(code))return;
    section.querySelector('details').open=true;
    history.replaceState(null,'','#'+code.toLowerCase());
    section.scrollIntoView({block:'start'});
    section.querySelector('summary').focus({preventScroll:true});
  }
  $('activity-link').onclick = event => {event.preventDefault();openPractice(slides[index].practice);};
  $('fullscreen').onclick = async () => {
    try { if (document.fullscreenElement) await document.exitFullscreen(); else await $('viewer').requestFullscreen(); }
    catch (_) { window.open($('image-link').href, '_blank', 'noopener'); }
  };
  document.addEventListener('keydown', e => {
    if (e.altKey || e.ctrlKey || e.metaKey || e.target.closest('input,textarea,select,button,audio,video,[contenteditable="true"]')) return;
    if (!e.target.closest('#viewer')) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); move(index + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); move(index - 1); }
  });
  document.querySelectorAll('video').forEach(v => v.addEventListener('play', () => {
    document.querySelectorAll('video').forEach(other => { if (other !== v) other.pause(); });
    if (voiceState.mode !== 'idle' && !voiceState.paused) narrator.togglePause();
  }));
  document.querySelectorAll('.outline a,.start a[href^="#a"]').forEach(a => a.addEventListener('click', event => {
    event.preventDefault();openPractice(a.getAttribute('href').slice(1).toUpperCase());
  }));
  document.querySelectorAll('.return-to-class').forEach(a=>a.addEventListener('click',event=>{
    event.preventDefault();history.replaceState(null,'','#lamina-'+slides[index].number);
    $('viewer').scrollIntoView({block:'start'});$('listen-all').focus({preventScroll:true});
  }));
  window.addEventListener('hashchange', readHash);
  const initialActivity = /^#a[1-7]$/.test(location.hash) ? location.hash : null;
  const initial = location.hash.match(/^#lamina-(\d+)$/);
  show(initial ? Number(initial[1]) - 1 : 0);
  narrator = window.HadoxLessonNarration.create({audio:$('lesson-audio'),getSlides:() => slides,
    getRate:() => Number($('voice-rate').value),
    pauseAtPractices:() => $('pause-practices').checked,onSlide:show,
    onState:state => {
      voiceState = state; $('voice-status').textContent = state.message || 'Pulsa Escuchar para comenzar.';
      $('pause-voice').disabled = state.mode === 'idle' || state.mode === 'practice';
      $('stop-voice').disabled = state.mode === 'idle';
      $('pause-voice').textContent = state.paused ? 'Continuar voz' : 'Pausar';
      $('listen-all').textContent = state.mode === 'practice' ? (index<slides.length-1?'Continuar con la lámina '+(index+2):'Terminar presentación') : 'Ensayar presentación';
      practiceCue(state);
    }});
  narrator.select(index);
  if (initialActivity) {
    openPractice(initialActivity.slice(1).toUpperCase());
  }
  function stopVideos() { document.querySelectorAll('video').forEach(v => v.pause()); }
  $('listen-all').onclick = () => { stopVideos(); if (voiceState.mode === 'practice') narrator.continuePractice(); else narrator.start(index,true); };
  $('listen-slide').onclick = () => { stopVideos(); narrator.start(index,false); };
  $('pause-voice').onclick = () => narrator.togglePause(); $('stop-voice').onclick = () => narrator.stop();
  $('voice-rate').onchange = () => { $('lesson-audio').playbackRate=Number($('voice-rate').value); };
  document.addEventListener('workshop:panel', event => { if (event.detail.name !== 'class' && voiceState.mode !== 'idle' && !voiceState.paused) narrator.togglePause(); });
  window.addEventListener('pagehide', () => narrator.stop(''));
  for(const id of ['listen-all','listen-slide','slide-select','fullscreen'])$(id).disabled=false;
  $('previous').disabled=index===0;$('next').disabled=index===slides.length-1;
  $('viewer').setAttribute('aria-busy','false');
})();
