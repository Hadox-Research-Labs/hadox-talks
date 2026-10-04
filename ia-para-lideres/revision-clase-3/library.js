import {calculate,defaults} from './calculator.mjs';
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const normalized=s=>String(s).normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase();
const [lib,course]=await Promise.all([fetch('library.json').then(r=>r.json()),fetch('course.json').then(r=>r.json())]);
const industryNames=[...new Set(lib.industries.map(i=>i.industry))];
const aliases={T03:['Gemini Workspace'],T04:['Gemini Notebook'],T05:['Perplexity'],T13:['Copilot Studio'],T14:['Agentforce'],T16:['SAP Joule'],T19:['Fin'],T20:['Genesys AI'],T21:['Power BI'],T22:['Tableau'],T24:['Databricks'],T27:['Document AI'],T29:['Textract'],T30:['ABBYY'],T36:['Gemini Enterprise Agent Platform'],T49:['GitHub Copilot']};
$('#industryScope').innerHTML+=industryNames.map(i=>`<option>${esc(i)}</option>`).join('');
const short=['INV','DOC','TAB','BI','PRE','AGE','MUL','DEV','SEC','GOV'];
$('#family').innerHTML+=[...new Set(lib.tools.map(t=>t.family))].sort().map(t=>`<option>${esc(t)}</option>`).join('');
$('#capability').innerHTML+=lib.capabilities.map(t=>`<option>${esc(t)}</option>`).join('');
$('#matrixHead').innerHTML=`<tr><th scope="col">Herramienta</th>${short.map((x,i)=>`<th scope="col" title="${esc(lib.capabilities[i])}">${x}</th>`).join('')}</tr>`;
$('#capacityLegend').textContent=short.map((s,i)=>`${s}: ${lib.capabilities[i]}`).join(' · ');
function renderTools(){
 const q=normalized($('#toolSearch').value),family=$('#family').value,cap=$('#capability').value,industry=$('#industryScope').value;
 const candidates=new Set(lib.industries.filter(i=>i.industry===industry).flatMap(i=>i.candidates.split(';').map(x=>normalized(x.trim()))));
 const tools=lib.tools.filter(t=>(!family||t.family===family)&&(!cap||t.caps[cap]==='D')&&(!industry||[t.name,t.name.split(' antes ')[0],...(aliases[t.id]||[])].some(n=>candidates.has(normalized(n))))&&(!q||normalized([t.name,t.family,t.capability,t.inputs,t.condition].join(' ')).includes(q)));
 $('#toolCount').textContent=`${tools.length} de ${lib.tools.length} herramientas. ${industry?'Candidatos propuestos en las fichas de '+industry+'; encaje sectorial por validar. ':''}El filtro de capacidad muestra sólo D documentadas.`;
 $('#matrixBody').innerHTML=tools.map(t=>`<tr><td><a href="${esc(t.url)}" target="_blank" rel="noopener">${esc(t.name)}</a></td>${lib.capabilities.map(c=>`<td>${esc(t.caps[c])}</td>`).join('')}</tr>`).join('');
 $('#toolDetails').innerHTML=tools.length?tools.map(t=>`<details><summary>${esc(t.name)}<small>${esc(t.family)}</small></summary><dl><dt>Capacidad</dt><dd>${esc(t.capability)}</dd><dt>Entrada</dt><dd>${esc(t.inputs)}</dd><dt>Condición</dt><dd>${esc(t.condition)}</dd><dt>Unidad de costo</dt><dd>${esc(t.cost_driver)}</dd><dt>Evidencia</dt><dd>${esc(t.evidence)} · ${esc(t.reviewed)}</dd></dl><a href="${esc(t.url)}" target="_blank" rel="noopener">Consultar fuente del proveedor ↗</a></details>`).join(''):'<p>No hay candidatos con estos filtros. Puedes ampliar la búsqueda.</p>';
}
['#toolSearch','#family','#capability','#industryScope'].forEach(s=>$(s).addEventListener(s==='#toolSearch'?'input':'change',renderTools));renderTools();
const industries=[...new Set(lib.industries.map(i=>i.industry))];
$('#industry').innerHTML=industries.map(i=>`<option>${esc(i)}</option>`).join('');
function renderIndustry(){
 $('#industryCases').innerHTML=lib.industries.filter(i=>i.industry===$('#industry').value).map(i=>`<article class="industry-case"><div><p class="eyebrow">${esc(i.industry)}</p><h3>${esc(i.process)}</h3><p>${esc(i.capacity)}</p></div><div><p><strong>Candidatos:</strong> ${esc(i.candidates)}</p><p><strong>Datos:</strong> ${esc(i.data)}</p><p><strong>Indicador:</strong> ${esc(i.kpi)}</p><p><strong>Control:</strong> ${esc(i.control)}</p><p><strong>Aceptación:</strong> ${esc(i.acceptance)}</p><p class="fine">${esc(i.evidence)}</p></div></article>`).join('');
}$('#industry').onchange=renderIndustry;renderIndustry();
const num=(v,places=2)=>Number(v).toLocaleString('es-MX',{maximumFractionDigits:places});
const money=(v,places=2)=>'USD '+num(v,places);
function renderCost(){
 const form=$('#calcForm'),values=Object.fromEntries([...form.elements].map(el=>[el.name,Number(el.value)]));
 if(!form.checkValidity()){ $('#calcError').textContent='Corrige las entradas: usa valores no negativos, porcentajes entre 0 y 100 y al menos un mes.';$('#calcResults').hidden=true;return;}
 const r=calculate(values);$('#calcResults').hidden=false;$('#calcError').textContent='';
 const rows=[['Casos aceptados por IA',0,r.accepted],['Horas humanas/mes',r.baselineHours,r.aiHours],['Costo económico/mes',money(r.baseline),money(r.ai)],['Costo por caso resuelto',r.baselineUnit===null?'Sin resultado':money(r.baselineUnit,3),r.aiUnit===null?'Sin resultado':money(r.aiUnit,3)],[`TCO · ${values.months} meses`,money(r.baselineTco),money(r.aiTco)]];
 $('#costTable').innerHTML=rows.map(row=>`<tr>${row.map((x,i)=>`<${i?'td':'th'}${i?'':' scope="row"'}>${esc(typeof x==='number'?num(x):x)}</${i?'td':'th'}>`).join('')}</tr>`).join('');
 const max=Math.max(r.baseline,r.ai,1);$('#costBars').innerHTML=[['Sin IA',r.baseline],['Con IA',r.ai]].map(([label,cost])=>`<div class="cost-bar"><div><span>${label}</span><strong>${money(cost)}</strong></div><div class="cost-track" aria-hidden="true"><span style="width:${cost/max*100}%"></span></div></div>`).join('');
 $('#calcMessage').textContent=r.difference===0?'El TCO económico es igual en este escenario.':`${r.difference>0?'Menor':'Mayor'} TCO económico con IA: ${money(Math.abs(r.difference))} en ${values.months} meses, bajo estos supuestos.`;
 $('#capacityMessage').textContent=`Revisión: ${num(r.reviewHours)} h. Atención restante: ${num(r.remainingHours)} h. ${r.capacity>=0?'Capacidad potencial disponible':'Trabajo humano adicional'}: ${num(Math.abs(r.capacity))} h/mes.`;
 $('#cashMessage').textContent=`Inicial IA: ${money(values.initial)}. Diferencia tecnológica recurrente: ${money(r.monthlyExtraTech)}/mes. La caja depende de pagos y cobros reales; este cálculo no demuestra cambio de nómina.`;
}$('#calcForm').oninput=renderCost;$('#calcForm').onsubmit=e=>e.preventDefault();$('#resetCalc').onclick=()=>{for(const[k,v]of Object.entries(defaults))$('#calcForm').elements.namedItem(k).value=String(v);renderCost();};renderCost();
const KEY='hadox-pbs-clase3-checklist-v1';let state={product:'',owner:'',items:{}},canStore=true;
try{const saved=localStorage.getItem(KEY);if(saved){const parsed=JSON.parse(saved);if(parsed&&parsed.items&&typeof parsed.items==='object')state=parsed;}}catch{canStore=false;$('#storageNotice').textContent='El navegador no permite guardar cambios. Puedes descargar el expediente de esta sesión.';}
$('#checkProduct').value=state.product||'';$('#checkOwner').value=state.owner||'';
const statuses=['Pendiente','Cumple','No cumple','No aplica'];
let prevArea='';$('#checklistRows').innerHTML=lib.checklist.map(row=>{const[id,area,question,evidence,owner,critical,source]=row;const item=state.items[id]||{};let heading='';if(area!==prevArea){heading=`<h3>${esc(area)}</h3>`;prevArea=area;}return `${heading}<article class="checklist-row" data-check="${esc(id)}"><div><h3>${esc(id)} · ${esc(question)}</h3><p>${critical==='Sí'?'<span class="critical">Condición crítica del ejercicio</span>':'Condición de evaluación'}</p><p><strong>Evidencia requerida:</strong> ${esc(evidence)}</p><p><strong>Responsable propuesto:</strong> ${esc(owner)}</p><p class="fine">${esc(source)}</p></div><label>Estado de ${esc(id)}<select aria-label="Estado de ${esc(id)}" data-status="${esc(id)}">${statuses.map(s=>`<option${(item.status||'Pendiente')===s?' selected':''}>${s}</option>`).join('')}</select></label><label>Evidencia o justificación de ${esc(id)}<textarea data-evidence="${esc(id)}" placeholder="Referencia, resultado observado o razón para No aplica">${esc(item.evidence||'')}</textarea></label></article>`;}).join('');
function updateSummary(){
 let pending=0,failed=0,documented=0;
 for(const row of lib.checklist){const item=state.items[row[0]]||{status:'Pendiente'},resolved=['Cumple','No aplica'].includes(item.status)&&String(item.evidence||'').trim();if(resolved)documented++;if(row[5]==='Sí'&&!resolved){pending++;if(item.status==='No cumple')failed++;}}
 $('#checkSummary').textContent=`${documented}/36 condiciones documentadas. ${pending?`${pending} críticas sin resolver (${failed} incumplidas): falta resolverlas antes de recomendar avance.`:'Condiciones críticas documentadas: falta la decisión del responsable.'}`;
}
function save(){state.product=$('#checkProduct').value;state.owner=$('#checkOwner').value;if(canStore)try{localStorage.setItem(KEY,JSON.stringify(state));}catch{canStore=false;$('#storageNotice').textContent='No se pudieron guardar cambios. Descarga el expediente para conservarlos.';}updateSummary();}
$('#checklistRows').addEventListener('input',e=>{const id=e.target.dataset.status||e.target.dataset.evidence;if(!id)return;state.items[id]??={status:'Pendiente',evidence:''};state.items[id][e.target.dataset.status?'status':'evidence']=e.target.value;save();});
$('#checkProduct').oninput=save;$('#checkOwner').oninput=save;updateSummary();
$('#exportChecklist').onclick=()=>{const report={title:'Checklist ejecutivo de IA · Clase 3',adaptation:'Adaptación docente; no acredita conformidad ni certificación.',exported:new Date().toISOString(),product:state.product,review:state.owner,questions:lib.checklist.map(row=>({id:row[0],area:row[1],question:row[2],requiredEvidence:row[3],proposedOwner:row[4],critical:row[5]==='Sí',reference:row[6],status:state.items[row[0]]?.status||'Pendiente',evidence:state.items[row[0]]?.evidence||''}))};const url=URL.createObjectURL(new Blob([JSON.stringify(report,null,2)],{type:'application/json;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='EXPEDIENTE_EVALUACION_IA.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
$('#frameworkLinks').innerHTML=['nist','iso','riesgo','ocde','owasp','finops','forecast','arquitectura','crisp'].map(k=>`<a href="${esc(course.refs[k][1])}" target="_blank" rel="noopener">${esc(course.refs[k][0])} ↗</a>`).join('');

const anchor=document.getElementById(location.hash.slice(1));if(anchor)anchor.scrollIntoView({block:"start"});
