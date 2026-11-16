(function () {
  'use strict';
  const key = 'hadox-erp-ia-sesion1-ensayo-v1';
  const forms = [...document.querySelectorAll('form[data-rehearsal]')];
  let memory = {};
  try { memory = JSON.parse(localStorage.getItem(key) || '{}'); } catch (_) {}
  function values(form) {
    return Object.fromEntries([...form.querySelectorAll('input[name],select[name],textarea[name]')].map(e => [e.name, e.type === 'checkbox' ? e.checked : e.value]));
  }
  function save() {
    memory = Object.fromEntries(forms.map(f => [f.dataset.rehearsal, values(f)]));
    try { localStorage.setItem(key, JSON.stringify(memory)); } catch (_) {}
  }
  const rules = {
    A1: [['faltante', v => Number(v) === 40, 'El faltante actual es 120 menos 80: 40 envases.'],['recepcion', v => v === 'prevista', 'Los 50 previstos todavía requieren una recepción confirmada.'],['calidad', v => v === 'pendiente', 'El documento de calidad continúa pendiente de revisión.']],
    A2: [['identidad', v => v === 'laboratorio', 'Cada laboratorio puede asignar su propio usuario; se consulta en el correo de ese producto.'],['estado', v => v === 'guia', 'Abrir el workbook comprueba que puedes leer la guía. La operación se verifica al ejecutarla.']],
    A3: [['existencia', v => Number(v) === 0, 'La muestra conservada de SG6100 indica existencia de 0.'],['faltante', v => Number(v) === 1200, 'El faltante de esa muestra es 1,200.'],['unidad', v => v === 'KG', 'La unidad mostrada es KG.'],['fuente', v => v === 'documentacion', 'La respuesta de Joule utilizó documentación estándar; no acredita una consulta del inventario.']],
    A4: [['metrica', v => v === 'margen', 'Gross Margin es margen bruto.'],['unidad', v => v === 'millones', 'La consulta conservada está expresada en millones de USD.'],['version', v => v === 'Actual', 'La versión de la referencia es Actual.']],
    A5: [['metodo', v => v === 'GET', 'GET recupera los registros de esta consulta.'],['http', v => Number(v) === 200, '200 OK acredita que la petición terminó correctamente.'],['cambio', v => v === 'no', 'Esta petición de lectura no modifica la orden.']],
  };
  function feedback(form, rows, heading) {
    const panel = form.querySelector('.feedback'); panel.replaceChildren();
    const p = document.createElement('p'); p.textContent = heading; panel.append(p);
    const ul = document.createElement('ul');
    rows.forEach(([ok, text]) => { const li = document.createElement('li'); li.className = ok ? 'checked' : 'review-again'; li.textContent = (ok ? 'Comprobado: ' : 'Revisa: ') + text; ul.append(li); });
    panel.append(ul);
  }
  forms.forEach(form => {
    const saved = memory[form.dataset.rehearsal] || {};
    form.querySelectorAll('[name]').forEach(e => {
      if (saved[e.name] !== undefined) { if (e.type === 'checkbox') e.checked = saved[e.name]; else e.value = saved[e.name]; }
      e.addEventListener('input', save); e.addEventListener('change', save);
    });
    form.addEventListener('submit', event => {
      event.preventDefault(); save(); const a = form.dataset.rehearsal, answers = values(form);
      if (a === 'A6') {
        const criteria = ['tarea','datos','calidad','evidencia'].filter(k => answers[k]).length;
        const rows = [[answers.respuesta === '2','La respuesta 2 conserva el faltante actual y las comprobaciones pendientes.'],[answers.instruccion.trim().length > 0,'Conserva una instrucción escrita que puedas volver a revisar.']];
        feedback(form, rows, `Marcaste ${criteria} de 4 criterios de revisión. La lista es tu autoevaluación; no califica automáticamente la calidad del texto.`);
      } else {
        const rows = rules[a].map(([field,test,text]) => [String(answers[field] ?? '').trim() !== '' && test(answers[field]), text]);
        feedback(form, rows, `Revisaste ${rows.filter(r => r[0]).length} de ${rows.length} criterios correctamente en esta muestra.`);
      }
    });
  });
  document.querySelectorAll('.video-chapters').forEach(controls => {
    const video = controls.closest('.activity').querySelector('video');
    controls.querySelector('button').addEventListener('click', () => {
      const seconds = Number(controls.querySelector('select').value);
      const seek = () => { video.currentTime = seconds; video.play().catch(() => {}); };
      if (video.readyState >= 1) seek();
      else { video.addEventListener('loadedmetadata', seek, {once:true}); video.load(); video.play().catch(() => {}); }
      video.scrollIntoView({block:'center'});
    });
  });
  document.getElementById('download-rehearsal').onclick = () => {
    save(); const parts = ['Mi ensayo · ERP e Inteligencia Artificial · Sesión 1'];
    for (const form of forms) {
      parts.push('\n'+form.dataset.rehearsal);
      for (const e of form.querySelectorAll('[name]')) {
        const label = e.closest('label')?.childNodes[0]?.textContent.trim() || e.name;
        const value = e.type === 'checkbox' ? (e.checked ? 'Revisado' : 'Por revisar') : e.tagName === 'SELECT' ? e.selectedOptions[0]?.textContent : e.value;
        parts.push(label+': '+(value || 'Sin respuesta'));
      }
    }
    const url = URL.createObjectURL(new Blob([parts.join('\n')],{type:'text/plain;charset=utf-8'}));
    const a = document.createElement('a'); a.href = url; a.download = 'Mi_ensayo_sesion_01.txt'; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    document.getElementById('save-status').textContent = 'Se preparó la descarga de tus respuestas de ensayo.';
  };
  document.getElementById('reset-rehearsal').onclick = () => {
    forms.forEach(f => { f.reset(); f.querySelector('.feedback').replaceChildren(); });
    save(); document.getElementById('save-status').textContent = 'Ensayo reiniciado. Puedes responder de nuevo.';
  };
})();
