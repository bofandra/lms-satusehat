const fs=require("node:fs");
const path=require("node:path");
const x=JSON.parse(fs.readFileSync(path.join(__dirname,"modules.json"),"utf8"));
const m=x.modules;
const okay=(v,what)=>{if(!v)throw Error("INVALID: "+what)};
okay(x.version==="2026-10-25","source version");okay(x.reviewStatus==="pra-uat","review gate");
okay(m.reduce((n,v)=>n+["pre","post"].filter(k=>typeof v[k]==="string").length,0)===21,"21 available assessment IDs only");
okay(x.catalogVisibility==="public-preview-with-QA-holds","public catalog protection");okay(m.length===13,"module count");
okay(m.find(v=>v.id==="01")?.deck==="1bseEpcBjZQk64oYcvHQqXAH2cSOGA6AC","Modul 01 public-safe deck v1.7");
okay(m.reduce((sum,v)=>sum+v.slides,0)===683,"slide count");
okay(m.filter(v=>v.worksheet).length===4,"worksheet count");
okay(new Set(m.map(v=>v.id)).size===13,"unique modules");
const driveIds=m.flatMap(v=>[v.deck,v.infographic,v.worksheet,v.pre,v.post].filter(Boolean));
okay(driveIds.every(v=>/^[a-zA-Z0-9_-]+$/.test(v)),"Drive IDs must be opaque identifiers");
okay(new Set(driveIds).size===driveIds.length,"no duplicate or aliased Drive assets");
const held=m.flatMap(v=>(v.assessmentHold||[]).map(k=>v.id+":"+k)).sort();
okay(JSON.stringify(held)===JSON.stringify(["03:pre","05:post","07:post","12:post","13:pre"]),"five known assessments held");
for(const v of m){
 okay(/^\d{2}$/.test(v.id),"module ID");
 okay(v.deck&&v.infographic,"required learning assets "+v.id);
 okay(["pptx","native"].includes(v.deckType),"slide asset type "+v.id);
 okay(/^[a-zA-Z0-9_-]+$/.test(v.deck),"Drive identifier");
 const h=v.assessmentHold||[];
 for(const k of ["pre","post"]){
  if(h.includes(k))okay(v[k]===null,"held assessment ID must not appear in public JSON: "+v.id+":"+k);
  else okay(typeof v[k]==="string"&&/^[a-zA-Z0-9_-]+$/.test(v[k]),"approved preview assessment "+v.id+":"+k);
 }
}
for(const f of ["index.html","style.css","app.js","modules.json"]){okay(fs.existsSync(path.join(__dirname,f)),f)}
const html=fs.readFileSync(path.join(__dirname,"index.html"),"utf8");
okay(/<meta name="robots" content="noindex,nofollow">/.test(html),"pratinjau must not be indexed");
okay(fs.readFileSync(path.join(__dirname,"robots.txt"),"utf8").includes("Disallow: /"),"all crawlers should be discouraged during Pra-UAT");
okay(!/academy|sertifikasi resmi kami|token rahasia|pasien asli/i.test(html),"editorial/privacy lint");
okay(!fs.existsSync(path.join(__dirname,"release")),"release package must not be deployed");
const js=fs.readFileSync(path.join(__dirname,"app.js"),"utf8");
new (require("node:vm").Script)(js,{filename:"site/app.js"});
okay(js.includes("assessmentHold")&&html.includes("Status Pra-UAT"),"QA gating visible");
for(const f of ["index.html","app.js","modules.json"]){
 okay(!/Apigee|Google Healthcare|Krakend|MongoDB/i.test(fs.readFileSync(path.join(__dirname,f),"utf8")),"no internal vendor detail in "+f);
}
console.log("PASS 13 modules / 683 slides / 21 assessment IDs in public JSON + 5 explicitly null for QA / 13 infographic links / 4 worksheets; syntax and internal term checks pass");
