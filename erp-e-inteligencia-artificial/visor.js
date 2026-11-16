(async function () {
  'use strict';
  const $ = id => document.getElementById(id);
  let slides, index = 0, narrator, voiceState = {mode:'idle',paused:false};
  try {
    const response = await fetch('leccion.json?v=20261116-2');
    if (!response.ok) throw new Error('No se pudo cargar la lección');
    slides = (await response.json()).slides;
  } catch (_) {
    $('slide-caption').textContent = 'Descarga el PDF para consultar la presentación completa.';
    return;
  }
  function show(i) {
    index = Math.max(0, Math.min(slides.length - 1, i));
    const s = slides[index];
    $('slide-image').src = s.image; $('slide-image').alt = `Lámina ${s.number}: ${s.title}`;
    $('image-link').href = s.image; $('slide-select').value = String(index);
    $('previous').disabled = index === 0; $('next').disabled = index === slides.length - 1;
    $('slide-caption').textContent = `Lámina ${s.number} de ${slides.length} · ${s.title}`;
    $('activity-link').href = '#' + s.activity.toLowerCase();
    $('activity-link').textContent = `Ir a la actividad ${s.activity} ↓`;
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
      const details = document.querySelector(location.hash + '>details'); if (details) details.open = true;
    }
  }
  $('previous').onclick = () => move(index - 1); $('next').onclick = () => move(index + 1);
  $('slide-select').onchange = e => move(Number(e.target.value));
  $('activity-link').onclick = () => {
    const details = document.querySelector($('activity-link').getAttribute('href') + '>details'); if (details) details.open = true;
  };
  $('fullscreen').onclick = async () => {
    try { if (document.fullscreenElement) await document.exitFullscreen(); else await $('viewer').requestFullscreen(); }
    catch (_) { window.open($('image-link').href, '_blank', 'noopener'); }
  };
  document.addEventListener('keydown', e => {
    if (e.altKey || e.ctrlKey || e.metaKey || /INPUT|TEXTAREA|SELECT|BUTTON|VIDEO/.test(e.target.tagName)) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); move(index + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); move(index - 1); }
  });
  document.querySelectorAll('video').forEach(v => v.addEventListener('play', () => {
    document.querySelectorAll('video').forEach(other => { if (other !== v) other.pause(); });
    if (voiceState.mode !== 'idle' && !voiceState.paused) narrator.togglePause();
  }));
  document.querySelectorAll('.outline a').forEach(a => a.addEventListener('click', () => {
    const details = document.querySelector(a.getAttribute('href') + '>details'); if (details) details.open = true;
  }));
  window.addEventListener('hashchange', readHash);
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
      $('listen-all').textContent = state.mode === 'practice' ? 'Continuar después de la práctica' : 'Ensayar presentación';
    }});
  narrator.select(index);
  function stopVideos() { document.querySelectorAll('video').forEach(v => v.pause()); }
  $('listen-all').onclick = () => { stopVideos(); if (voiceState.mode === 'practice') narrator.continuePractice(); else narrator.start(index,true); };
  $('listen-slide').onclick = () => { stopVideos(); narrator.start(index,false); };
  $('pause-voice').onclick = () => narrator.togglePause(); $('stop-voice').onclick = () => narrator.stop();
  $('voice-rate').onchange = () => { $('lesson-audio').playbackRate=Number($('voice-rate').value); };
  window.addEventListener('pagehide', () => narrator.stop(''));
})();
