(async function(){
  'use strict';
  const $=id=>document.getElementById(id);
  let data,index=0,narrator,state={mode:'idle',paused:false},voices=[];
  try{const response=await fetch('talk.json?v=20261112-2');if(!response.ok)throw new Error(response.status);data=await response.json();}
  catch(e){$('speech-status').textContent='No se pudo cargar el guion. Recarga la página o utiliza el PDF y el guion completo.';return;}
  const slides=data.slides;
  const asset=path=>path+'?v='+encodeURIComponent(data.assetVersion||data.revisionDate);
  let resumeAfterVideo=false,videoSlide=-1;
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
    history.replaceState(null,'','#lamina-'+s.folio);
    $('tool-link').hidden=!s.resource;if(s.resource){$('tool-link').href=s.resource.url;$('tool-link').textContent=s.resource.label+' ↗';}
    if(videoSlide!==index){
      resumeAfterVideo=false;$('demo-video').pause();$('demo-video').removeAttribute('src');$('demo-video').load();videoSlide=index;
      $('demo').hidden=!s.video;
      if(s.video){$('demo-video').src=asset(s.video.src);$('demo-video').poster=asset(s.video.poster);$('demo-video').setAttribute('aria-label',s.video.title);$('demo-title').textContent=s.video.title;$('demo-caption').textContent=s.video.caption;}
    }
    if(slides[index+1]){const next=new Image();next.src=asset(slides[index+1].image);}
  }
  function fromHash(){const match=location.hash.match(/^#lamina-0?(\d+)$/);return match?Math.max(0,Math.min(slides.length-1,Number(match[1])-1)):0;}
  function move(i){const continuous=state.mode==='continuous';narrator?.stop('');render(i);if(continuous)narrator.start(index,true);else $('speech-status').textContent='Lámina '+(index+1)+' de '+slides.length+'. Pulsa Reproducir para escuchar.';}
  $('prev').onclick=()=>move(index-1);$('next').onclick=()=>move(index+1);$('slide-select').onchange=e=>move(Number(e.target.value));
  window.addEventListener('hashchange',()=>move(fromHash()));
  document.addEventListener('keydown',e=>{
    if(/INPUT|TEXTAREA|SELECT|BUTTON/.test(e.target.tagName)||e.altKey||e.ctrlKey||e.metaKey)return;
    if(e.key==='ArrowRight'){e.preventDefault();move(index+1);}
    if(e.key==='ArrowLeft'){e.preventDefault();move(index-1);}
  });
  $('fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await $('viewer').requestFullscreen();}catch(e){$('speech-status').textContent='Puedes abrir la lámina en tamaño completo tocando la imagen.';}};
  render(fromHash());
  if(!('speechSynthesis' in window)||!('SpeechSynthesisUtterance' in window)){
    $('audio-controls').hidden=true;$('speech-status').textContent='Este navegador no dispone de lectura de voz. Puedes consultar el guion completo.';return;
  }
  const synth=window.speechSynthesis;
  function voiceOptions(){
    const selected=$('voice').value;
    voices=synth.getVoices().filter(v=>v.lang.toLowerCase().startsWith('es'));
    voices.sort((a,b)=>(b.lang.toLowerCase()==='es-mx')-(a.lang.toLowerCase()==='es-mx'));
    const options=[new Option('Español del navegador',''),...voices.map(v=>new Option(v.name+' · '+v.lang,v.voiceURI))];
    $('voice').replaceChildren(...options);
    if(voices.some(v=>v.voiceURI===selected))$('voice').value=selected;
    else {const preferred=voices.find(v=>v.lang.toLowerCase()==='es-mx');if(preferred)$('voice').value=preferred.voiceURI;}
  }
  voiceOptions();synth.addEventListener('voiceschanged',voiceOptions);
  narrator=window.HadoxNarration.createNarrator({synth,Utterance:SpeechSynthesisUtterance,getSlides:()=>slides,getRate:()=>Number($('rate').value),getVoice:()=>voices.find(v=>v.voiceURI===$('voice').value)||voices[0],onSlide:render,onState:s=>{
    state=s;$('pause').disabled=s.mode==='idle';$('stop').disabled=s.mode==='idle';
    $('pause').textContent=s.paused?'Continuar':'Pausar';$('play').textContent=s.mode==='continuous'?'↻ Reiniciar desde esta lámina':'▶ Reproducir ponencia';
    if(s.message)$('speech-status').textContent=s.message;
  }});
  $('play').onclick=()=>narrator.start(index,true);$('single').onclick=()=>narrator.start(index,false);
  $('demo-video').addEventListener('play',()=>{if(state.mode!=='idle'&&!state.paused){resumeAfterVideo=true;narrator.togglePause();}});
  $('demo-video').addEventListener('ended',()=>{if(resumeAfterVideo&&state.mode!=='idle'&&state.paused)narrator.togglePause();resumeAfterVideo=false;});
  $('pause').onclick=()=>narrator.togglePause();$('stop').onclick=()=>narrator.stop();
  window.addEventListener('pagehide',()=>narrator.stop(''));
})();
