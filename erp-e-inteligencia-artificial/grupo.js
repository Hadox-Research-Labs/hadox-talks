(function(){
  'use strict';
  const $=id=>document.getElementById(id);
  const API=location.hostname==='127.0.0.1'?'http://127.0.0.1:8136/talks/v1':'https://app.hadox.org/talks/v1';
  let participants=[],total=0,loading=false,lastRead=null;
  const dateFormat=new Intl.DateTimeFormat('es-MX',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit',timeZone:'America/Mexico_City'});
  function cell(row,label){const td=document.createElement('td');td.dataset.label=label;row.append(td);return td;}
  function render(){
    const query=$('group-search').value.trim().toLocaleLowerCase('es'),filter=$('group-filter').value,sort=$('group-sort').value;
    const rows=participants.filter(p=>(!query||p.name.toLocaleLowerCase('es').includes(query))&&(filter==='all'||(filter==='complete'?p.complete:!p.complete)));
    rows.sort((a,b)=>sort==='name'?a.name.localeCompare(b.name,'es'):sort==='progress'?b.progressPercent-a.progressPercent:sort==='score'?(b.score??-1)-(a.score??-1):b.updatedAt.localeCompare(a.updatedAt));
    $('group-rows').replaceChildren();
    for(const p of rows){
      const row=document.createElement('tr');const name=cell(row,'Participante'),nameText=document.createElement('div');nameText.className='participant-name';nameText.textContent=p.name;name.append(nameText);
      const advancement=cell(row,'Avance'),body=document.createElement('div'),line=document.createElement('div'),bar=document.createElement('progress'),percent=document.createElement('strong'),counts=document.createElement('p');
      line.className='group-progress-line';bar.max=100;bar.value=p.progressPercent;bar.setAttribute('aria-label','Avance de '+p.name);percent.textContent=p.progressPercent+' %';line.append(bar,percent);
      counts.className='group-counts';counts.textContent=p.stepsDone+'/'+p.stepsTotal+' pasos · '+p.recordsSaved+'/6 trabajos · '+p.answered+'/10 preguntas';body.append(line,counts);
      const details=document.createElement('details'),summary=document.createElement('summary'),list=document.createElement('ul');details.className='group-activities';summary.textContent='Ver A1–A6';details.append(summary,list);
      for(const a of p.activities){const item=document.createElement('li');item.textContent=a.code+' · '+a.stepsDone+'/'+a.stepsTotal+' pasos · '+(a.saved?'trabajo guardado':'trabajo pendiente');list.append(item);}body.append(details);advancement.append(body);
      const score=cell(row,'Nota / 10'),scoreBody=document.createElement('div'),number=document.createElement('span'),note=document.createElement('span');number.className='group-score';number.textContent=p.score===null?'—':p.score;note.className='group-score-note';note.textContent=p.score===null?'Sin respuestas':p.scoreComplete?'Repaso completo':'Provisional · '+p.answered+'/10';scoreBody.append(number,note);score.append(scoreBody);
      const status=cell(row,'Estado'),statusText=document.createElement('span');statusText.textContent=p.complete?'Ruta completa':'En curso';statusText.className=p.complete?'group-complete':'';status.append(statusText);
      const updated=cell(row,'Actualizado'),time=document.createElement('time');time.dateTime=p.updatedAt;time.textContent=dateFormat.format(new Date(p.updatedAt))+' CDMX';updated.append(time);$('group-rows').append(row);
    }
    const completed=participants.filter(p=>p.complete).length;
    $('group-summary').textContent=total+' '+(total===1?'participante comparte':'participantes comparten')+' su avance · '+completed+' con ruta completa'+(participants.length<total?' · se muestran los '+participants.length+' más recientes':'');
    $('group-empty').hidden=rows.length>0;
    $('group-empty').textContent=total===0?'Aún no hay participantes que compartan su avance. En la sesión 1, abre Mi avance y calificación y elige Publicar mi avance.':'No hay participantes que coincidan con estos filtros.';
  }
  async function load(){
    if(loading)return;loading=true;$('group-refresh').disabled=true;document.querySelector('.group-monitor').setAttribute('aria-busy','true');
    $('group-status').textContent='Actualizando el registro…';
    try{
      const response=await fetch(API+'/participants?lesson=erp-ia-s1',{credentials:'omit',signal:AbortSignal.timeout(12000)});if(!response.ok)throw new Error();const result=await response.json();
      participants=result.items;total=result.total;lastRead=new Date();render();$('group-status').textContent='Consultado '+dateFormat.format(lastRead)+' CDMX. Los datos cambian cuando cada persona comparte su avance.';
    }catch(_){$('group-status').textContent='No se pudo actualizar. Pulsa Actualizar para reintentar.';if(!lastRead){$('group-summary').textContent='Registro pendiente de consulta.';$('group-empty').hidden=true;}}
    finally{loading=false;$('group-refresh').disabled=false;document.querySelector('.group-monitor').setAttribute('aria-busy','false');}
  }
  $('group-filters').onsubmit=e=>e.preventDefault();$('group-search').oninput=render;$('group-filter').onchange=render;$('group-sort').onchange=render;$('group-refresh').onclick=load;
  setInterval(()=>{if($('group-auto').checked&&!document.hidden)load();},30000);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden&&$('group-auto').checked)load();});
  load();
})();
