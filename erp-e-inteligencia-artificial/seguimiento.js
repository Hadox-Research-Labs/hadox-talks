(async function(){
  'use strict';
  const $=id=>document.getElementById(id), key='hadox-erp-ia-s1-progress-v1';
  const API=location.hostname==='127.0.0.1'?'http://127.0.0.1:8136/talks/v1':'https://app.hadox.org/talks/v1';
  const count=(n,word)=>n+' '+word+(n===1?'':'s');
  let state={steps:{},records:{},answers:{},routeA3:'sap'},gradeResult=null,gradeSerial=0,finishersSerial=0,gradeTimer,questions=[];
  try {state={...state,...JSON.parse(localStorage.getItem(key)||'{}')};}catch(_){}
  const forms=[...document.querySelectorAll('form[data-rehearsal]')];
  const checks=[...document.querySelectorAll('input[data-step]')];
  function persist(){try{localStorage.setItem(key,JSON.stringify(state));}catch(_){$('completion-status').textContent='Este navegador no conserva el avance entre visitas. Prepara una copia de tu cuaderno en A7.';}}
  function formValues(f){return Object.fromEntries([...f.querySelectorAll('[name]')].map(e=>[e.name,e.type==='checkbox'?e.checked:e.value]));}
  function fingerprint(f){return JSON.stringify(formValues(f));}
  function recordSaved(f){return f.checkValidity()&&state.records[f.dataset.rehearsal]===fingerprint(f);}
  function requiredChecks(){return checks.filter(e=>e.dataset.activity!=='A3'||(state.routeA3==='video'?e.dataset.step.startsWith('a3-video-'):!e.dataset.step.startsWith('a3-video-')));}
  function savedCodes(){return forms.filter(recordSaved).map(f=>f.dataset.rehearsal);}
  function activeSteps(){return requiredChecks().filter(e=>e.checked).map(e=>e.dataset.step);}
  function route(value,syncForm=false){
    state.routeA3=value==='video'?'video':'sap';$('a3-route').value=state.routeA3;
    $('a3-sap-route').hidden=state.routeA3==='video';$('a3-video-route').hidden=state.routeA3!=='video';
    if(syncForm){const source=document.querySelector('form[data-rehearsal="A3"] [name="origen"]');if(source.value!==state.routeA3){source.value=state.routeA3;source.dispatchEvent(new Event('change',{bubbles:true}));}}
    persist();renderProgress();
  }
  function panel(name){
    document.querySelectorAll('.workshop-tabs [role=tab]').forEach(b=>{const active=b.dataset.panel===name;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;});
    for(const id of ['class','progress','finishers'])$('panel-'+id).hidden=id!==name;
    document.dispatchEvent(new CustomEvent('workshop:panel',{detail:{name}}));
    if(name==='finishers')loadFinishers();
  }
  function openActivity(code){panel('class');const section=$(code.toLowerCase());section.querySelector('details').open=true;section.scrollIntoView({block:'start'});}
  function renderProgress(){
    const required=requiredChecks(),done=activeSteps().length,saved=savedCodes(),answered=Object.keys(state.answers).length;
    const total=required.length+6+10,current=done+saved.length+answered;
    $('overall-progress').value=Math.round(current/total*100);
    $('overall-text').textContent=Math.round(current/total*100)+' % · '+done+'/'+required.length+' pasos · '+saved.length+'/6 trabajos guardados · '+answered+'/10 preguntas respondidas';
    $('activity-status').replaceChildren();
    for(const f of forms){
      const code=f.dataset.rehearsal,steps=required.filter(e=>e.dataset.activity===code),count=steps.filter(e=>e.checked).length,complete=recordSaved(f);
      $('progress-'+code.toLowerCase()).textContent=' · '+count+'/'+steps.length+' pasos'+(complete?' · trabajo guardado':'');
      const row=document.createElement('li'),link=document.createElement('button'),text=document.createElement('span');
      link.type='button';link.textContent=code;link.onclick=()=>openActivity(code);
      text.textContent=count+'/'+steps.length+' pasos · '+(complete?'trabajo guardado':'guarda tu trabajo');row.append(link,text);$('activity-status').append(row);
    }
    const ready=done===required.length&&saved.length===6&&gradeResult?.complete&&gradeResult.answered===answered;
    $('register-completion').disabled=!ready;
    $('completion-requirements').textContent=ready?'Ruta y repaso completos. Puedes registrar tu finalización.':'Por completar: '+count(required.length-done,'paso')+', '+count(6-saved.length,'trabajo')+' y '+count(10-answered,'pregunta')+'. La calificación se confirma al revisar el repaso.';
  }
  async function request(path,body){
    const r=await fetch(API+path,{method:body?'POST':'GET',credentials:'omit',headers:body?{'Content-Type':'application/json'}:undefined,body:body?JSON.stringify(body):undefined,signal:AbortSignal.timeout(12000)});
    const data=await r.json();if(!r.ok)throw new Error(data.error||'No fue posible completar la solicitud.');return data;
  }
  async function grade(){
    const serial=++gradeSerial;gradeResult=null;renderProgress();
    if(!Object.keys(state.answers).length){$('score-value').textContent='Sin respuestas';$('score-live').textContent='Tu nota: sin respuestas';$('score-detail').textContent='Responde el repaso para obtener tu calificación.';$('quiz-status').textContent='Puedes comenzar cuando quieras.';return;}
    $('score-live').textContent='Actualizando tu nota…';
    $('quiz-status').textContent='Actualizando tu calificación…';
    try{
      const result=await request('/grade',{answers:state.answers});if(serial!==gradeSerial)return;
      gradeResult=result;$('score-value').textContent=result.score+'/10';
      $('score-live').textContent='Tu nota: '+result.score+'/10 · '+result.answered+'/10 respondidas'+(result.complete?'':' · provisional');
      $('score-detail').textContent=result.answered+'/10 respondidas · '+count(result.correct,'acierto')+(result.complete?' · calificación completa':' · resultado provisional');
      $('quiz-status').textContent=result.complete?'Repaso revisado. Puedes corregir cualquier respuesta y volver a revisar.':((10-result.answered)===1?'Falta ':'Faltan ')+count(10-result.answered,'pregunta')+' para completar el repaso.';
      for(const item of result.items){const feedback=$('feedback-'+item.id);feedback.className='question-feedback '+(item.correct?'checked':'review-again');feedback.textContent=(item.correct?'Correcto. ':'Revisa. ')+item.explanation;}
      renderProgress();
    }catch(e){if(serial!==gradeSerial)return;$('quiz-status').textContent='No se pudo actualizar la nota. Pulsa Actualizar calificación para reintentar.';$('score-detail').textContent='Calificación pendiente de confirmar.';$('score-live').textContent='Tu nota está pendiente de actualizar.';}
  }
  async function loadFinishers(){
    const serial=++finishersSerial;
    $('finishers-status').textContent='Consultando finalizaciones…';
    try{
      const result=await request('/finishers?lesson=erp-ia-s1');if(serial!==finishersSerial)return;$('finishers-list').replaceChildren();
      for(const item of result.items){const row=document.createElement('tr'),name=document.createElement('td'),date=document.createElement('td');name.textContent=item.name;date.textContent=new Date(item.completedAt).toLocaleDateString('es-MX',{day:'2-digit',month:'short',year:'numeric',timeZone:'America/Mexico_City'});row.append(name,date);$('finishers-list').append(row);}
      $('finishers-status').textContent=result.total?result.total+(result.total===1?' finalización publicada':' finalizaciones publicadas')+(result.items.length<result.total?' · se muestran las '+result.items.length+' más recientes':'')+'.':'Todavía no hay finalizaciones publicadas. Cuando termines, puedes registrar la tuya en Mi avance y calificación.';
    }catch(e){if(serial!==finishersSerial)return;$('finishers-status').textContent='No se pudo consultar la lista. Pulsa Actualizar lista para reintentar.';}
  }
  function token(){if(!state.token){state.token=[...crypto.getRandomValues(new Uint8Array(32))].map(n=>n.toString(16).padStart(2,'0')).join('');persist();}return state.token;}
  function showRegistration(result){
    if(!result.registered)return;
    $('completion-status').textContent=result.listed?'Tu finalización quedó registrada y tu nombre aparece en la lista compartida.':'Tu finalización quedó registrada de forma personal. Tu nombre no aparece en la lista.';
    $('withdraw-name').hidden=!result.listed;
    if(result.alias){$('completion-name').value=result.alias;$('completion-listed').checked=result.listed;$('completion-name').required=result.listed;}
  }
  $('completion-form').addEventListener('submit',async event=>{
    event.preventDefault();if($('register-completion').disabled)return;
    $('register-completion').disabled=true;$('completion-status').textContent='Registrando tu finalización…';
    try{
      const result=await request('/complete',{lesson:'erp-ia-s1',token:token(),answers:state.answers,steps:activeSteps(),records:savedCodes(),route_a3:state.routeA3,listed:$('completion-listed').checked,alias:$('completion-name').value});
      showRegistration(result);state.registered=true;persist();
    }catch(e){$('completion-status').textContent=e.message||'No fue posible registrar la finalización. Tu avance se conserva.';}
    renderProgress();
  });
  $('completion-listed').onchange=()=>{$('completion-name').required=$('completion-listed').checked;};
  $('withdraw-name').onclick=async()=>{try{const result=await request('/visibility',{token:token(),listed:false});$('completion-listed').checked=false;$('completion-name').value='';$('completion-name').required=false;showRegistration(result);}catch(e){$('completion-status').textContent=e.message;}};
  $('refresh-finishers').onclick=loadFinishers;$('retry-grade').onclick=grade;
  document.querySelectorAll('.workshop-tabs [role=tab]').forEach((button,index,buttons)=>{
    button.onclick=()=>panel(button.dataset.panel);
    button.onkeydown=event=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();let next=event.key==='Home'?0:event.key==='End'?buttons.length-1:(index+(event.key==='ArrowRight'?1:-1)+buttons.length)%buttons.length;buttons[next].focus();panel(buttons[next].dataset.panel);};
  });
  checks.forEach(e=>{e.checked=state.steps[e.dataset.step]===true;e.onchange=()=>{state.steps[e.dataset.step]=e.checked;persist();renderProgress();};});
  forms.forEach(form=>{
    form.addEventListener('submit',()=>{if(form.checkValidity()){state.records[form.dataset.rehearsal]=fingerprint(form);persist();renderProgress();}});
    form.addEventListener('input',renderProgress);form.addEventListener('change',renderProgress);
  });
  const origin=document.querySelector('form[data-rehearsal="A3"] [name="origen"]');
  if(['sap','video'].includes(origin.value))state.routeA3=origin.value;
  $('a3-route').onchange=()=>route($('a3-route').value,true);origin.addEventListener('change',()=>{if(origin.value)route(origin.value);});
  $('reset-rehearsal').addEventListener('click',()=>{state.records={};persist();renderProgress();});
  route(state.routeA3);
  try{
    const r=await fetch('../evaluacion.json?v=20261116-4');if(!r.ok)throw new Error();const bank=await r.json();questions=bank.questions;
    for(const [n,q] of questions.entries()){
      const fieldset=document.createElement('fieldset'),legend=document.createElement('legend');legend.textContent=(n+1)+'. '+q.text;fieldset.append(legend);
      for(const [option,text] of Object.entries(q.options)){
        const label=document.createElement('label'),input=document.createElement('input');input.type='radio';input.name=q.id;input.value=option;input.checked=state.answers[q.id]===option;
        input.onchange=()=>{state.answers[q.id]=input.value;persist();gradeSerial++;gradeResult=null;$('feedback-'+q.id).textContent='';renderProgress();clearTimeout(gradeTimer);gradeTimer=setTimeout(grade,450);};
        label.append(input,document.createTextNode(text));fieldset.append(label);
      }
      const feedback=document.createElement('p');feedback.id='feedback-'+q.id;feedback.className='question-feedback';fieldset.append(feedback);$('practice-quiz').append(fieldset);
    }
    $('practice-quiz').onsubmit=e=>e.preventDefault();await grade();
  }catch(e){$('quiz-status').textContent='No se pudieron cargar las preguntas. Recarga la página para reintentar.';}
  if(state.registered&&state.token){try{showRegistration(await request('/me',{token:state.token}));}catch(_){}}
})();
