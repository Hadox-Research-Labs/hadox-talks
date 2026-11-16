(function (root) {
  'use strict';
  const statusNames = {
    'sin-solicitar':'sin solicitar', solicitado:'solicitud enviada', preparando:'en preparación',
    workbook:'workbook abierto', sistema:'sistema abierto', operacion:'operación ejecutada y revisada', error:'error encontrado'
  };
  const value = n => String(n ?? '').trim() === '' ? NaN : Number(n);
  const fmt = n => new Intl.NumberFormat('es-MX',{maximumFractionDigits:6}).format(n);
  function review(code, a) {
    const rows=[], add=(kind,text)=>rows.push({kind,text});
    if(code==='A1') {
      add(value(a.faltante)===40?'checked':'review-again','El faltante actual es 120 − 80 = 40 envases.');
      add(a.recepcion==='prevista'?'checked':'review-again','Los 50 previstos todavía requieren una recepción confirmada.');
      add(a.calidad==='pendiente'?'checked':'review-again','El documento de calidad sigue pendiente.');
      add('saved','Tu mapa y propuesta de IA quedaron en el registro. Compáralos con la solución explicada; pueden existir varias distribuciones de sistemas.');
    } else if(code==='A2') {
      add('saved','Registraste Build: '+(statusNames[a.build]||'sin indicar')+'; Analytics Cloud: '+(statusNames[a.sac]||'sin indicar')+'.');
      add('saved','Confirma esos estados en tu portal SAP. Si abriste ambos workbooks, puedes seguir A4 y A5 para entrar al sistema y ejecutar las consultas.');
      if(['preparando','solicitado','error','sin-solicitar'].includes(a.build)||['preparando','solicitado','error','sin-solicitar'].includes(a.sac)) {
        add('review-again','Todavía hay un acceso por completar. Conserva el mensaje y el último paso. Mientras se habilita, puedes hacer A1, A3 y A6 y analizar los recorridos grabados.');
      }
    } else if(code==='A3') {
      add('saved','Registraste '+a.material+': existencia '+a.existencia+' '+a.unidad+', faltante '+a.faltante+' '+a.unidad+'; fecha/periodo: '+a.fecha+'.');
      if(a.origen==='video') {
        add(value(a.existencia)===0&&value(a.faltante)===1200?'checked':'review-again','En la referencia grabada de SG6100 se lee 0 KG de stock y 1,200 KG de faltante. Revisa también la fecha en la pantalla.');
      } else add('saved','Conserva la captura de tu propia sesión. Los valores del sistema compartido pueden cambiar; no se comparan automáticamente con los del video.');
      add('saved','Revisa tu contraste: una respuesta documental sobre sales order without charge no demuestra que Joule haya consultado el stock de SG6100.');
    } else if(code==='A4') {
      const products=[['Carbonated Drinks',value(a.carbonated)],['Juices',value(a.juices)],['Others',value(a.others)],['Alcohol',value(a.alcohol)]];
      if(products.every(p=>Number.isFinite(p[1]))) {
        const maximum=Math.max(...products.map(p=>p[1]));
        const highest=products.filter(p=>p[1]===maximum).map(p=>p[0]).join(' y ');
        add('checked','Con los cuatro valores que anotaste, el mayor es '+highest+': '+fmt(maximum)+' ('+a.unidad+').');
      } else add('review-again','Completa los cuatro valores con números para comparar los productos.');
      add('saved','Contexto registrado: '+a.modelo+'; '+a.metrica+'; versión '+a.version+'; filtros/periodo '+a.filtros+'.');
      add('saved','Contrasta esta comparación con tu gráfica y tabla. Tu explicación de la causa necesita evidencia adicional; guardar el texto no valida esa explicación.');
    } else if(code==='A5') {
      add(value(a.http)===200?'checked':'review-again','Anotaste HTTP '+a.http+'. El recorrido de consulta mostró 200 OK; si tu petición dio un error, conserva el mensaje y revisa el destino y la sesión.');
      add('saved','Registro leído: orden '+a.orden+', estado '+a.estado+', fechas '+a.fechas+'. Conserva la evidencia de la respuesta.');
      add('saved','GET consulta registros. Su respuesta no acredita que hayas modificado la orden ni demuestra por sí sola que las fechas sigan vigentes.');
    } else if(code==='A6') {
      add(a.respuesta==='2'?'checked':'review-again','La respuesta 2 conserva el faltante actual y las comprobaciones pendientes. Aún requiere evidencia antes de prometer una fecha.');
      const criteria=['tarea','datos','calidad','evidencia'].filter(k=>a[k]).length;
      add('saved','Marcaste '+criteria+' de 4 criterios en tu revisión. Es tu autoevaluación; la página no califica automáticamente la calidad de la instrucción.');
      add('saved','Quedaron registradas tu primera versión, la corrección y tu pregunta de negocio. Compara el cambio con el ejemplo y vuelve a editar si hace falta.');
    }
    return rows;
  }
  root.HadoxWorkshop={review};
  if(typeof module!=='undefined')module.exports=root.HadoxWorkshop;
  if(typeof document==='undefined')return;

  const key='hadox-erp-ia-sesion1-ensayo-v1';
  const forms=[...document.querySelectorAll('form[data-rehearsal]')];
  let memory={},storageOK=true,exportUrl;
  try { memory=JSON.parse(localStorage.getItem(key)||'{}'); } catch(_) {storageOK=false;}
  function values(form) {
    return Object.fromEntries([...form.querySelectorAll('[name]')].map(e=>[e.name,e.type==='checkbox'?e.checked:e.value]));
  }
  function save() {
    memory=Object.fromEntries(forms.map(f=>[f.dataset.rehearsal,values(f)]));
    try {localStorage.setItem(key,JSON.stringify(memory));} catch(_) {storageOK=false;}
  }
  function feedback(form,rows) {
    const panel=form.querySelector('.feedback');panel.replaceChildren();
    const heading=document.createElement('p');heading.textContent='Tu trabajo quedó registrado.';panel.append(heading);
    const list=document.createElement('ul');
    for(const row of rows) {const item=document.createElement('li');item.className=row.kind;item.textContent=row.text;list.append(item);}
    panel.append(list);
    if(!storageOK) {
      const note=document.createElement('p');note.textContent='Este navegador no permite guardar las respuestas entre visitas. Ve a A7 y prepara tu cuaderno para conservarlas.';panel.append(note);
    }
  }
  forms.forEach(form=>{
    const saved=memory[form.dataset.rehearsal]||{};
    form.querySelectorAll('[name]').forEach(e=>{
      if(saved[e.name]!==undefined) {if(e.type==='checkbox')e.checked=saved[e.name];else e.value=saved[e.name];}
      e.addEventListener('input',save);e.addEventListener('change',save);
    });
    form.addEventListener('submit',event=>{
      event.preventDefault();save();feedback(form,review(form.dataset.rehearsal,values(form)));
    });
  });
  document.querySelectorAll('.video-chapters').forEach(controls=>{
    const video=controls.closest('.activity').querySelector('video');
    controls.querySelector('button').addEventListener('click',()=>{
      const seconds=Number(controls.querySelector('select').value);
      const seek=()=>{video.currentTime=seconds;video.play().catch(()=>{});};
      if(video.readyState>=1)seek();
      else {video.addEventListener('loadedmetadata',seek,{once:true});video.load();video.play().catch(()=>{});}
      video.scrollIntoView({block:'center'});
    });
  });
  document.getElementById('download-rehearsal').onclick=()=>{
    save();const parts=['Mi trabajo · ERP e Inteligencia Artificial · Sesión 1'];
    for(const form of forms) {
      parts.push('\n'+form.dataset.rehearsal);
      for(const e of form.querySelectorAll('[name]')) {
        const label=[...(e.closest('label')?.childNodes||[])].filter(n=>n.nodeType===3).map(n=>n.textContent).join(' ').trim()||e.name;
        const answer=e.type==='checkbox'?(e.checked?'Revisado':'Por revisar'):e.value===''?'Sin respuesta':e.tagName==='SELECT'?e.selectedOptions[0]?.textContent:e.value;
        parts.push(label+': '+answer);
      }
    }
    const text=parts.join('\n');document.getElementById('work-output').value=text;
    if(exportUrl)URL.revokeObjectURL(exportUrl);
    exportUrl=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));
    document.getElementById('work-download').href=exportUrl;
    document.getElementById('work-export').hidden=false;
    document.getElementById('save-status').textContent='Tu cuaderno está preparado. Revísalo y pulsa Descargar TXT, o copia el texto.';
  };
  document.getElementById('reset-rehearsal').onclick=()=>{
    forms.forEach(f=>{f.reset();f.querySelector('.feedback').replaceChildren();});save();
    document.getElementById('work-export').hidden=true;document.getElementById('work-output').value='';
    if(exportUrl){URL.revokeObjectURL(exportUrl);exportUrl=undefined;}
    document.getElementById('save-status').textContent='Las respuestas de práctica están vacías. Puedes empezar de nuevo.';
  };
})(typeof window==='undefined'?globalThis:window);
