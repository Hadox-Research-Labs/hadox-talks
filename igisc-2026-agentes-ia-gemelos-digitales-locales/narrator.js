/* Shared browser-voice approach used by Hadox Talks. No external service. */
(function(root){
  'use strict';
  function splitSpeech(text){
    const chunks=[];
    for(const sentence of text.match(/[^.!?\n]+[.!?]?/g)||[]){
      let part='';
      for(const word of sentence.trim().split(/\s+/)){
        if(part && part.length+word.length+1>220){chunks.push(part);part='';}
        part+=(part?' ':'')+word;
      }
      if(part)chunks.push(part);
    }
    return chunks;
  }
  function createNarrator({synth,Utterance,getSlides,getRate,getVoice,onSlide,onState}){
    let token=0,mode='idle',paused=false,index=0,chunks=[],pending=false,current=null;
    function emit(message){onState({mode,paused,index,message});}
    function stop(message='Lectura detenida.'){
      token++;mode='idle';paused=false;chunks=[];pending=false;
      if(current){current.onend=null;current.onerror=null;current=null;}
      synth.cancel();emit(message);
    }
    function load(){chunks=splitSpeech(getSlides()[index].transcript||'');onSlide(index);}
    function next(id){
      if(id!==token||mode==='idle')return;
      if(paused){pending=true;return;}
      while(!chunks.length){
        if(mode!=='continuous'||index>=getSlides().length-1){stop(mode==='continuous'?'Terminó la lectura de la ponencia.':'Terminó esta lámina.');return;}
        index++;onSlide(index);
        if(getSlides()[index].optional){stop('Terminó la ponencia. Esta lámina queda como respaldo para la discusión.');return;}
        load();
      }
      pending=false;current=new Utterance(chunks.shift());
      current.lang='es-MX';current.rate=getRate();
      const voice=getVoice?.();if(voice)current.voice=voice;
      current.onend=()=>{if(id===token){current=null;next(id);}};
      current.onerror=e=>{if(id===token && e.error!=='interrupted' && e.error!=='canceled')stop('No se pudo continuar la voz. Pulsa Reproducir para reintentar.');};
      emit((paused?'Pausa':'Leyendo')+' · Lámina '+String(index+1).padStart(2,'0')+' / '+getSlides().length);
      synth.speak(current);
    }
    function start(startIndex,continuous){
      stop('');index=startIndex;mode=continuous?'continuous':'single';
      synth.resume();load();next(token);
    }
    function togglePause(){
      if(mode==='idle')return;
      paused=!paused;
      if(paused){synth.pause();emit('Lectura en pausa.');}
      else{synth.resume();if(pending)next(token);else emit('Leyendo · Lámina '+String(index+1).padStart(2,'0'));}
    }
    return {start,stop,togglePause};
  }
  root.HadoxNarration={createNarrator,splitSpeech};
  if(typeof module!=='undefined')module.exports=root.HadoxNarration;
})(typeof window!=='undefined'?window:globalThis);
