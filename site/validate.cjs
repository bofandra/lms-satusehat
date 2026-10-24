const fs=require("node:fs");
const path=require("node:path");
const x=JSON.parse(fs.readFileSync(path.join(__dirname,"modules.json"),"utf8"));
const m=x.modules;
const okay=(v,what)=>{if(!v)throw Error("INVALID: "+what)};
okay(x.version==="2026-10-20","source version");okay(m.length===13,"module count");
okay(m.reduce((sum,v)=>sum+v.slides,0)===683,"slide count");
okay(m.filter(v=>v.worksheet).length===4,"worksheet count");
okay(new Set(m.map(v=>v.id)).size===13,"unique modules");
for(const v of m){okay(/^\d{2}$/.test(v.id),"module ID");okay(v.deck&&v.pre&&v.post&&v.infographic,"required assets "+v.id);okay(/^[a-zA-Z0-9_-]+$/.test(v.deck),"Drive identifier");}
for(const f of ["index.html","style.css","app.js","modules.json"]){okay(fs.existsSync(path.join(__dirname,f)),f)}
const html=fs.readFileSync(path.join(__dirname,"index.html"),"utf8");
okay(!/academy|sertifikasi resmi kami|token rahasia|pasien asli/i.test(html),"editorial/privacy lint");
okay(!fs.existsSync(path.join(__dirname,"release")),"release package must not be deployed");
console.log("PASS 13 modules / 683 slides / 26 assessment links / 13 infographic links / 4 worksheets; static preview only");
