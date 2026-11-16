/* Fixed audio playlist with rehearsal pauses. */
(function(root){
  'use strict';
  function create({audio,getSlides,getRate,pauseAtPractices,onSlide,onState}){
    let mode='idle',paused=false,index=0;
    function emit(message){onState({mode,paused,index,message});}
    function stop(message='Lectura detenida.'){
      mode='idle';paused=false;audio.pause();emit(message);
    }
    function select(i){
      stop('');index=Math.max(0,Math.min(getSlides().length-1,i));
      audio.src=getSlides()[index].audio;audio.load();onSlide(index);
      emit('Lámina seleccionada. Pulsa Escuchar para comenzar.');
    }
    function playIndex(){
      audio.src=getSlides()[index].audio;audio.playbackRate=getRate();onSlide(index);
      paused=false;emit('Preparando audio · Lámina '+(index+1));
      const promise=audio.play();
      if(promise?.catch)promise.catch(error=>{if(error.name!=='AbortError')stop('No se pudo reproducir el audio. Pulsa Escuchar para reintentar.');});
    }
    function start(i,continuous=true){
      stop('');index=Math.max(0,Math.min(getSlides().length-1,i));mode=continuous?'continuous':'single';playIndex();
    }
    function continuePractice(){
      if(mode!=='practice')return;
      if(index>=getSlides().length-1){stop('Terminó la presentación. Conserva tus respuestas de práctica.');return;}
      index++;mode='continuous';playIndex();
    }
    audio.addEventListener('play',()=>{
      if(mode==='idle'||mode==='practice')mode='single';paused=false;
      emit('Escuchando · Lámina '+(index+1)+' de '+getSlides().length);
    });
    audio.addEventListener('pause',()=>{
      if(mode!=='idle'&&mode!=='practice'&&!audio.ended){paused=true;emit('Lectura en pausa.');}
    });
    audio.addEventListener('ended',()=>{
      if(mode==='idle'||!audio.ended)return;
      if(mode==='single'){stop('Terminó la explicación de esta lámina.');return;}
      const practice=getSlides()[index].practice;
      if(practice&&pauseAtPractices()){mode='practice';paused=true;emit('Momento de práctica '+practice+'. Continúa cuando hayas terminado.');return;}
      if(index>=getSlides().length-1){stop('Terminó la presentación. Puedes repetir una lámina o continuar con los ejercicios.');return;}
      index++;playIndex();
    });
    audio.addEventListener('error',()=>{if(audio.getAttribute('src'))stop('El audio no pudo cargarse. Recarga la página y vuelve a pulsar Escuchar.');});
    function togglePause(){
      if(mode==='practice'){continuePractice();return;}
      if(mode==='idle')return;
      if(audio.paused)audio.play().catch(()=>stop('Pulsa Escuchar para reintentar.'));else audio.pause();
    }
    return{start,stop,select,togglePause,continuePractice};
  }
  root.HadoxLessonNarration={create};
  if(typeof module!=='undefined')module.exports=root.HadoxLessonNarration;
})(typeof window==='undefined'?globalThis:window);
