(async function () {
  'use strict';
  const $=id=>document.getElementById(id), key='hadox:erp-ia:s1:repaso-v5';
  let saved={}, storageWorks=true;
  try {saved=JSON.parse(localStorage.getItem(key)||'{}');}catch(_){storageWorks=false;}
  const state={fields:{},quiz:{},slide:0,rate:1,...saved};
  function save(){try{localStorage.setItem(key,JSON.stringify(state));}catch(_){storageWorks=false;}
    $('save-status').textContent=storageWorks?'Guardado en este navegador. Descarga tus respuestas para conservar una copia.':'El navegador no permite guardar. Descarga tus respuestas antes de salir.';
  }
  const audio=$('lesson-audio');let slides=[],index=0,continuous=false,practicePause=false,loadingAudio=false;
  function paragraphs(target,text){target.replaceChildren(...text.split(/\n\s*\n/).map(t=>{const p=document.createElement('p');p.textContent=t;return p;}));}
  function show(n,play=false){
    const wasContinuous=continuous;audio.pause();index=Math.max(0,Math.min(slides.length-1,n));state.slide=index;practicePause=false;
    const s=slides[index];$('slide-image').src=s.image;$('slide-image').alt='Lámina '+s.number+': '+s.title;$('image-link').href=s.image;
    $('slide-select').value=String(index);$('previous').disabled=index===0;$('next').disabled=index===slides.length-1;
    $('slide-caption').textContent='Lámina '+s.number+' de '+slides.length+' · '+s.title;
    $('resume-caption').textContent='Lámina '+s.number+' / '+slides.length;
    paragraphs($('slide-transcript-body'),s.transcript);
    $('activity-link').hidden=!s.practice;
    if(s.practice){$('activity-link').href=s.practice==='REPASO'?'#repaso':'#'+s.practice.toLowerCase();$('activity-link').textContent=s.practice==='REPASO'?'Abrir repaso ↓':'Abrir práctica '+s.practice+' ↓';}
    $('voice-status').textContent=s.practice?'Esta lámina tiene una actividad. Puedes abrirla al terminar la explicación.':'Escucha la explicación o avanza con los controles de la presentación.';
    loadingAudio=true;audio.src=s.audio;audio.load();audio.playbackRate=state.rate;
    $('listen-all').textContent='Escuchar y avanzar';continuous=wasContinuous;
    if(play)audio.play().catch(()=>{$('voice-status').textContent='Pulsa reproducir para continuar el audio.';});
    history.replaceState(null,'','#lamina-'+s.number);save();
  }
  audio.addEventListener('loadedmetadata',()=>{audio.playbackRate=state.rate;loadingAudio=false;});
  audio.addEventListener('ratechange',()=>{if(!loadingAudio){state.rate=audio.playbackRate;save();}});
  audio.addEventListener('ended',()=>{
    if(!continuous)return;
    if(slides[index].practice&&$('pause-practices').checked){practicePause=true;continuous=false;$('voice-status').textContent='Pausa de práctica. Abre la actividad y, al terminar, continúa con la siguiente lámina.';$('listen-all').textContent=index<20?'Continuar en la lámina '+(index+2):'Repetir el cierre';return;}
    if(index<slides.length-1)show(index+1,true);else{continuous=false;$('voice-status').textContent='Presentación terminada. Guarda tus respuestas y completa el repaso.';}
  });
  audio.addEventListener('error',()=>{$('voice-status').textContent='No se pudo cargar el audio. Puedes leer la explicación y descargar el PDF.';continuous=false;});
  $('listen-all').onclick=()=>{continuous=true;if(practicePause&&index<20)show(index+1,true);else{practicePause=false;audio.play().catch(()=>{$('voice-status').textContent='Pulsa reproducir para escuchar.';});}};
  $('listen-slide').onclick=()=>{continuous=false;practicePause=false;audio.currentTime=0;audio.play().catch(()=>{});};
  $('previous').onclick=()=>{continuous=false;show(index-1);};$('next').onclick=()=>{continuous=false;show(index+1);};
  $('slide-select').onchange=e=>{continuous=false;show(Number(e.target.value));};
  $('fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await $('viewer').requestFullscreen();}catch(_){window.open($('image-link').href,'_blank','noopener');}};
  document.querySelectorAll('[data-continue]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();continuous=false;show(Number(a.dataset.continue)-1);$('viewer').scrollIntoView({block:'start'});$('next').focus({preventScroll:true});}));
  document.querySelectorAll('[data-return]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();$('viewer').scrollIntoView({block:'start'});$('slide-select').focus({preventScroll:true});}));
  document.querySelectorAll('a[href^="#a"],a[href="#repaso"]').forEach(a=>a.addEventListener('click',()=>{
    const section=document.querySelector(a.getAttribute('href'));if(!section)return;audio.pause();continuous=false;(section.matches('details')?section:section.querySelector('details'))?.setAttribute('open','');
  }));
  document.addEventListener('keydown',e=>{if(e.altKey||e.ctrlKey||e.metaKey||e.target.closest('input,textarea,select,button,audio,a,[contenteditable]')||!e.target.closest('#viewer'))return;if(['ArrowRight','ArrowLeft'].includes(e.key)){e.preventDefault();continuous=false;show(index+(e.key==='ArrowRight'?1:-1));}});
  document.querySelectorAll('[data-field]').forEach(el=>{if(state.fields[el.dataset.field]!=null)el.value=state.fields[el.dataset.field];el.addEventListener('input',()=>{state.fields[el.dataset.field]=el.value;save();});});
  document.querySelectorAll('[data-save]').forEach(b=>b.onclick=()=>{save();$(b.dataset.save).textContent=storageWorks?'Respuestas guardadas en este navegador.':'Descarga una copia; el guardado del navegador no está disponible.';});
  $('download-work').onclick=()=>{
    const lines=['ERP e Inteligencia Artificial · Sesión 1','Hadox Research Labs · Repaso independiente',new Date().toLocaleString('es-MX'),''];
    document.querySelectorAll('[data-field]').forEach(el=>{lines.push(el.labels?.[0]?.textContent||el.dataset.field,el.value||'(Sin respuesta)','');});
    const blob=new Blob([lines.join('\n')],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='Mi_cuaderno_ERP_IA_sesion_1.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  };
  // Keep withdrawal available without republishing or rewriting the old work.
  const previousKey='hadox-erp-ia-s1-progress-v1';let previous={};
  try{previous=JSON.parse(localStorage.getItem(previousKey)||'{}');}catch(_){}
  if(previous.token&&(previous.publicSharing||previous.registered||previous.shareRevokePending)){
    $('previous-record').hidden=false;
    async function withdraw(path,button){
      button.disabled=true;$('previous-record-status').textContent='Retirando el registro anterior…';
      try{
        const response=await fetch('https://app.hadox.org/talks/v1'+path,{method:'POST',credentials:'omit',headers:{'Content-Type':'application/json'},body:JSON.stringify({token:previous.token,listed:false}),signal:AbortSignal.timeout(12000)});
        if(!response.ok)throw new Error('No disponible');
        if(path==='/progress'){previous.publicSharing=false;previous.shareRevokePending=false;}
        localStorage.setItem(previousKey,JSON.stringify(previous));$('previous-record-status').textContent='Se retiró la publicación seleccionada. Tu trabajo anterior se conserva en este navegador.';
      }catch(_){$('previous-record-status').textContent='No se pudo confirmar la retirada. Vuelve a pulsar el botón para reintentar.';}
      finally{button.disabled=false;}
    }
    $('withdraw-progress').onclick=()=>withdraw('/progress',$('withdraw-progress'));
    $('withdraw-finisher').onclick=()=>withdraw('/visibility',$('withdraw-finisher'));
  }
  let quiz=[];
  function grade(){let correct=0,answered=0;quiz.forEach((q,i)=>{const selected=state.quiz[i];if(selected!==undefined){answered++;if(selected===q.correct)correct++;}const f=$('feedback-'+i);f.hidden=false;f.textContent=(selected===undefined?'Sin responder. ':selected===q.correct?'Correcto. ':'Revisa tu respuesta. ')+q.explanation;f.className='feedback '+(selected===q.correct?'correct':'review');});$('quiz-result').textContent=correct+' de '+quiz.length+' aciertos · '+answered+' preguntas respondidas. Puedes corregir y volver a comprobar.';state.graded=true;save();}
  try{
    const [lectureResponse,quizResponse]=await Promise.all([fetch('leccion.json?v=20261119-v5'),fetch('evaluacion_repaso.json?v=20261119-v5')]);
    if(!lectureResponse.ok||!quizResponse.ok)throw new Error('No disponible');
    slides=(await lectureResponse.json()).slides;quiz=(await quizResponse.json()).questions;
    const select=$('slide-select');select.replaceChildren(...slides.map((s,i)=>{const o=document.createElement('option');o.value=i;o.textContent=String(s.number).padStart(2,'0')+' / '+slides.length+' · '+s.title;return o;}));
    $('quiz-questions').replaceChildren(...quiz.map((q,i)=>{
      const f=document.createElement('fieldset'),l=document.createElement('legend');l.textContent=(i+1)+'. '+q.text;f.append(l);
      q.options.forEach((text,j)=>{const label=document.createElement('label');label.className='quiz-option';const input=document.createElement('input');input.type='radio';input.name='q'+i;input.value=j;input.checked=state.quiz[i]===j;input.onchange=()=>{state.quiz[i]=j;save();if(state.graded)grade();};label.append(input,document.createTextNode(text));f.append(label);});
      const feedback=document.createElement('p');feedback.id='feedback-'+i;feedback.hidden=true;f.append(feedback);return f;
    }));
    $('check-quiz').onclick=grade;if(state.graded)grade();
    const hash=location.hash,initial=hash.match(/^#lamina-(\d+)$/);show(initial?Number(initial[1])-1:state.slide||0);
    if(/^#(?:a[123]|repaso)$/.test(hash)){const target=document.querySelector(hash);target?.querySelector('details')?.setAttribute('open','');history.replaceState(null,'',hash);target?.scrollIntoView({block:'start'});}
    for(const id of ['slide-select','listen-all','listen-slide','fullscreen','check-quiz'])$(id).disabled=false;
    $('viewer').setAttribute('aria-busy','false');
  }catch(_){$('voice-status').textContent='No se pudo cargar el visor. Descarga la presentación y el cuaderno PDF, o recarga para reintentar.';}
  window.addEventListener('pagehide',()=>audio.pause());save();
})();
