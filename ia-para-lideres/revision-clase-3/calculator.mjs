export const defaults={volume:10000,humanMin:6,hour:18,baseTech:800,eligible:70,acceptance:90,reviewMin:0.4,aiTech:2464,initial:12000,months:12};
export function calculate(v){
 if(Object.keys(defaults).some(k=>!Number.isFinite(v[k])||v[k]<0)||v.eligible>100||v.acceptance>100||v.months<1)throw new Error('Entradas fuera de rango');
 const accepted=v.volume*v.eligible/100*v.acceptance/100;
 const baselineHours=v.volume*v.humanMin/60;
 const reviewHours=accepted*v.reviewMin/60;
 const remainingHours=(v.volume-accepted)*v.humanMin/60;
 const aiHours=reviewHours+remainingHours;
 const baseline=v.baseTech+baselineHours*v.hour;
 const ai=v.aiTech+aiHours*v.hour;
 const baselineTco=v.months*baseline,aiTco=v.initial+v.months*ai;
 return {accepted,baselineHours,reviewHours,remainingHours,aiHours,baseline,ai,baselineTco,aiTco,difference:baselineTco-aiTco,capacity:baselineHours-aiHours,baselineUnit:v.volume>0?baseline/v.volume:null,aiUnit:v.volume>0?ai/v.volume:null,monthlyExtraTech:v.aiTech-v.baseTech};
}
