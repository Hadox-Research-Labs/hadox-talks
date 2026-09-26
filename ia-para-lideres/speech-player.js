'use strict';
// Speech callbacks can arrive after cancellation; each session owns a token.
function createNarrator({synth,Utterance,getSlides,getRate,onSlide,onState}){
 let token=0,mode='idle',paused=false,index=0,chunks=[],pending=false,current=null;
 const emit=message=>onState({mode,paused,index,message});
 function stop(message='Lectura detenida.'){
  token++;mode='idle';paused=false;chunks=[];pending=false;current=null;
  synth.cancel();emit(message);
 }
 function split(text){
  return (text.match(/[^.!?\n]+[.!?]?/g)||[]).flatMap(sentence=>{
   const result=[];let part='';
   for(const word of sentence.trim().split(/\s+/)){
    if(part.length+word.length>220){result.push(part);part=''}
    part+=(part?' ':'')+word;
   }
   if(part)result.push(part);return result;
  });
 }
 function load(){chunks=split(getSlides()[index].narration||'');onSlide(index)}
 function next(id){
  if(id!==token||mode==='idle')return;
  if(paused){pending=true;return}
  while(!chunks.length){
   if(mode!=='continuous'||index>=getSlides().length-1){stop(mode==='continuous'?'Terminó la lectura de la clase.':'Terminó esta lámina.');return}
   index++;load();
  }
  pending=false;current=new Utterance(chunks.shift());current.lang='es-MX';current.rate=getRate();
  const voices=synth.getVoices();const voice=voices.find(v=>v.lang==='es-MX')||voices.find(v=>v.lang.startsWith('es'));
  if(voice)current.voice=voice;
  current.onend=()=>{if(id===token){current=null;next(id)}};
  current.onerror=()=>{if(id===token)stop('No se pudo continuar la voz. Pulsa Escuchar para reintentar.')};
  emit(`${mode==='continuous'?'Lectura continua':'Leyendo'} · lámina ${index+1} de ${getSlides().length}`);
  synth.speak(current);
 }
 function start(startIndex,continuous){
  stop('');index=startIndex;mode=continuous?'continuous':'single';synth.resume();load();next(token);
 }
 function togglePause(){
  if(mode==='idle')return;
  paused=!paused;
  if(paused){synth.pause();emit(`En pausa · lámina ${index+1} de ${getSlides().length}`)}
  else{synth.resume();if(pending)next(token);else emit(`Leyendo · lámina ${index+1} de ${getSlides().length}`)}
 }
 return {start,stop,togglePause};
}
