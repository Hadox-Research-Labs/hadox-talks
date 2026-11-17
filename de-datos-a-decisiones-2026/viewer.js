(async function(){
  'use strict';
  const $=id=>document.getElementById(id),audio=$('narration');
  let data,index=0,continuous=false;
  try{const r=await fetch('talk.json?v=20261116-1');if(!r.ok)throw new Error(r.status);data=await r.json();}
  catch(e){$('speech-status').textContent='No se pudo cargar la presentación. Recarga la página o consulta el PDF.';return;}
  const slides=data.slides,asset=p=>p+'?v='+encodeURIComponent(data.assetVersion);
  const status=text=>$('speech-status').textContent=text;
  $('slide-select').replaceChildren(...slides.map((s,i)=>new Option(String(s.folio).padStart(2,'0')+' / '+slides.length+' · '+s.title,i)));
  function render(i){
    index=Math.max(0,Math.min(slides.length-1,i));const s=slides[index];
    $('slide-image').src=asset(s.image);$('slide-image').alt='Lámina '+s.folio+': '+s.title;
    $('image-link').href=asset(s.image);$('slide-select').value=String(index);
    $('prev').disabled=index===0;$('next').disabled=index===slides.length-1;
    $('folio').textContent='Lámina '+String(s.folio).padStart(2,'0')+' / '+slides.length;
    $('slide-title').textContent=s.title;$('script-link').href='script.html#s'+String(s.folio).padStart(2,'0');
    $('transcript-body').replaceChildren(...s.transcript.split(/\n\s*\n/).map(text=>{const p=document.createElement('p');p.textContent=text;return p;}));
    $('sources').replaceChildren(...s.sources.map(ref=>{const li=document.createElement('li');if(ref.url){const a=document.createElement('a');a.textContent=ref.label;a.href=ref.url;a.target='_blank';a.rel='noopener';li.append(a);}else li.textContent=ref.label;return li;}));
    audio.src=asset(s.audio);audio.playbackRate=Number($('rate').value);
    history.replaceState(null,'','#lamina-'+s.folio);
    if(slides[index+1]){const next=new Image();next.src=asset(slides[index+1].image);}
    update();
  }
  function update(){
    $('pause').disabled=!audio.src||audio.ended;
    $('stop').disabled=!audio.src;
    $('pause').textContent=audio.paused?'Continuar':'Pausar';
    $('play').textContent=!audio.paused&&continuous?'↻ Reiniciar desde esta lámina':'▶ Reproducir ponencia';
  }
  async function play(){
    try{await audio.play();status('Reproduciendo · Lámina '+String(index+1).padStart(2,'0')+' / '+slides.length);}
    catch(e){status('Pulsa Reproducir para iniciar el audio. También puedes descargar la narración completa.');}
    update();
  }
  function stop(message='Reproducción detenida.'){
    continuous=false;audio.pause();audio.currentTime=0;update();status(message);
  }
  function move(i){
    const keepPlaying=!audio.paused,keepContinuous=continuous;audio.pause();render(i);continuous=keepContinuous;
    if(keepPlaying)play();else status('Lámina '+(index+1)+' de '+slides.length+'. Pulsa Reproducir para escuchar.');
  }
  function fromHash(){const m=location.hash.match(/^#lamina-0?(\d+)$/);return m?Math.max(0,Math.min(slides.length-1,Number(m[1])-1)):0;}
  $('prev').onclick=()=>move(index-1);$('next').onclick=()=>move(index+1);
  $('slide-select').onchange=e=>move(Number(e.target.value));
  $('play').onclick=()=>{continuous=true;audio.currentTime=0;play();};
  $('single').onclick=()=>{continuous=false;audio.currentTime=0;play();};
  $('pause').onclick=()=>{if(audio.paused)play();else{audio.pause();status('Reproducción en pausa.');}};
  $('stop').onclick=()=>stop();
  $('rate').onchange=()=>audio.playbackRate=Number($('rate').value);
  audio.addEventListener('play',()=>{update();status('Reproduciendo · Lámina '+String(index+1).padStart(2,'0')+' / '+slides.length);});
  audio.addEventListener('pause',update);
  audio.addEventListener('ended',()=>{
    if(continuous&&index<slides.length-1){render(index+1);play();}
    else{continuous=false;update();status(index===slides.length-1?'Terminó la ponencia.':'Terminó esta lámina.');}
  });
  audio.addEventListener('error',()=>status('No se pudo cargar el audio. Recarga la página o descarga la narración completa.'));
  $('fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await $('viewer').requestFullscreen();}catch(e){status('Puedes abrir la lámina en tamaño completo tocando la imagen.');}};
  document.addEventListener('keydown',e=>{
    if(/INPUT|TEXTAREA|SELECT|BUTTON/.test(e.target.tagName)||e.altKey||e.ctrlKey||e.metaKey)return;
    if(e.key==='ArrowRight'){e.preventDefault();move(index+1);}
    if(e.key==='ArrowLeft'){e.preventDefault();move(index-1);}
  });
  window.addEventListener('hashchange',()=>move(fromHash()));
  window.addEventListener('pagehide',()=>audio.pause());
  render(fromHash());
})();
