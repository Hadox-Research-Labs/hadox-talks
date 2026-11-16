(async function () {
  'use strict';
  const $ = id => document.getElementById(id);
  let slides, index = 0;
  try {
    const response = await fetch('leccion.json?v=20261116-1');
    if (!response.ok) throw new Error('No se pudo cargar la lección');
    slides = (await response.json()).slides;
  } catch (_) {
    $('slide-caption').textContent = 'Descarga el PDF para consultar la presentación completa.';
    return;
  }
  function show(i) {
    index = Math.max(0, Math.min(slides.length - 1, i));
    const s = slides[index];
    $('slide-image').src = s.image;
    $('slide-image').alt = `Lámina ${s.number}: ${s.title}`;
    $('image-link').href = s.image;
    $('slide-select').value = String(index);
    $('previous').disabled = index === 0;
    $('next').disabled = index === slides.length - 1;
    $('slide-caption').textContent = `Lámina ${s.number} de ${slides.length} · ${s.title}`;
    $('activity-link').href = '#' + s.activity.toLowerCase();
    $('activity-link').textContent = `Ir a la actividad ${s.activity} ↓`;
    history.replaceState(null, '', '#lamina-' + s.number);
    if (slides[index + 1]) { const img = new Image(); img.src = slides[index + 1].image; }
  }
  function readHash() {
    const match = location.hash.match(/^#lamina-(\d+)$/);
    if (match) show(Number(match[1]) - 1);
    else if (/^#a[1-7]$/.test(location.hash)) {
      const details = document.querySelector(location.hash + '>details');
      if (details) details.open = true;
    }
  }
  $('previous').onclick = () => show(index - 1);
  $('next').onclick = () => show(index + 1);
  $('slide-select').onchange = e => show(Number(e.target.value));
  $('activity-link').onclick = () => {
    const details = document.querySelector($('activity-link').getAttribute('href') + '>details');
    if (details) details.open = true;
  };
  $('fullscreen').onclick = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await $('viewer').requestFullscreen();
    } catch (_) { window.open($('image-link').href, '_blank', 'noopener'); }
  };
  document.addEventListener('keydown', e => {
    if (e.altKey || e.ctrlKey || e.metaKey || /INPUT|TEXTAREA|SELECT|BUTTON|VIDEO/.test(e.target.tagName)) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); show(index + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); show(index - 1); }
  });
  document.querySelectorAll('video').forEach(v => v.addEventListener('play', () => {
    document.querySelectorAll('video').forEach(other => { if (other !== v) other.pause(); });
  }));
  document.querySelectorAll('.outline a').forEach(a => a.addEventListener('click', () => {
    const details = document.querySelector(a.getAttribute('href') + '>details');
    if (details) details.open = true;
  }));
  window.addEventListener('hashchange', readHash);
  if (/^#a[1-7]$/.test(location.hash)) readHash();
  else { const match = location.hash.match(/^#lamina-(\d+)$/); show(match ? Number(match[1]) - 1 : 0); }
})();
