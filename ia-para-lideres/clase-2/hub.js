'use strict';
const e=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function md(text){
 const inline=s=>e(s).replace(/https:\/\/[^\s<]+/g,url=>{const clean=url.replace(/[.,;:)]+$/g,'');return `<a href="${clean}" target="_blank" rel="noopener">${clean}</a>`+url.slice(clean.length)}).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');
 const lines=text.split(/\r?\n/);let out='',list=false;
 const close=()=>{if(list){out+='</ul>';list=false}};
 for(let i=0;i<lines.length;i++){
  let t=lines[i];if(!t.trim()){close();continue}
  if(t.startsWith('|')&&/^\|[\s:|\-]+\|$/.test(lines[i+1]||'')){
   close();const cells=t=>t.trim().replace(/^\||\|$/g,'').split('|').map(x=>inline(x.trim()));out+='<div class="guide-table"><table><thead><tr>'+cells(t).map(x=>`<th>${x}</th>`).join('')+'</tr></thead><tbody>';i+=2;while(i<lines.length&&lines[i].startsWith('|')){out+='<tr>'+cells(lines[i]).map(x=>`<td>${x}</td>`).join('')+'</tr>';i++}i--;out+='</tbody></table></div>';continue;
  }
  const h=t.match(/^(#{1,4}) (.+)/);if(h){close();const level=Math.min(6,h[1].length+2);out+=`<h${level}>${inline(h[2])}</h${level}>`;continue}
  if(/^(- |\d+\. )/.test(t)){if(!list){out+='<ul>';list=true}out+=`<li>${inline(t.replace(/^(- |\d+\. )/,''))}</li>`}else{close();out+=`<p>${inline(t)}</p>`}
 }close();return out;
}
let documentRequest=0;
async function openDoc(name){
 const version=++documentRequest,el=document.querySelector('#document');el.innerHTML='<p role="status">Abriendo documento…</p>';
 document.querySelectorAll('[data-doc]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.doc===name)));
 try{const url='../materiales/'+encodeURIComponent(name);const r=await fetch(url+'?v=compact-v3');if(!r.ok)throw Error();const t=await r.text();if(version!==documentRequest)return;el.innerHTML=`<a href="${url}" download>Descargar este documento ↓</a>`+md(t)}catch{if(version===documentRequest)el.innerHTML='<p role="alert">No se pudo abrir. Descarga el kit o vuelve a pulsar el documento.</p>'}
}
document.addEventListener('click',ev=>{const b=ev.target.closest('[data-doc]');if(b)openDoc(b.dataset.doc)});
openDoc('PREPARACION_CLASE_2.md');
