"use strict";
const CATALOG = document.getElementById("catalog");
const SEARCH = document.getElementById("search");
const GROUP = document.getElementById("group");
const PROGRESS = document.getElementById("progress");
const KEY = "satusehat-learning-progress-20261020";
const OBJECTIVES = {
"01":"Mengenali tujuan SATUSEHAT dan pertukaran informasi RME.",
"02":"Memahami alur pelayanan dan konteks perjalanan pasien.",
"03":"Mengenali data klinis RME serta dasar resource FHIR.",
"04":"Memahami keamanan, kerahasiaan dan hak akses.",
"05":"Menghubungkan pasien, tenaga kesehatan dan kunjungan.",
"06":"Membedakan diagnosis, tindakan, obat dan pemeriksaan.",
"07":"Mengenali alur laboratorium, radiologi, citra dan laporan.",
"08":"Memahami rujukan dan kesinambungan pelayanan.",
"09":"Menilai konteks, izin dan status saat menggunakan informasi RME.",
"10":"Menilai mutu, kelengkapan dan ketepatan waktu data.",
"11":"Memahami indikator dan batas interpretasinya.",
"12":"Mengenali validasi FHIR dan penelusuran kendala yang aman.",
"13":"Membedakan order SIMPUS, MWL, citra DICOM, ImagingStudy dan laporan."
};
const presentation = (id) => "https://docs.google.com/presentation/d/" + encodeURIComponent(id) + "/edit";
const documentURL = (id) => "https://docs.google.com/document/d/" + encodeURIComponent(id) + "/edit";
const fileURL = (id) => "https://drive.google.com/file/d/" + encodeURIComponent(id) + "/view";
const sheetURL = (id) => "https://docs.google.com/spreadsheets/d/" + encodeURIComponent(id) + "/edit";
function readProgress(){try{const v=JSON.parse(localStorage.getItem(KEY)||"{}");return v&&typeof v==="object"?v:{}}catch{return {}}}
let progress=readProgress();
let modules=[];
function el(tag,className,text){const node=document.createElement(tag);if(className)node.className=className;if(text!==undefined)node.textContent=text;return node;}
function link(text,url){const a=el("a","",text);a.href=url;a.target="_blank";a.rel="noopener noreferrer";return a;}
function render(){
 const q=SEARCH.value.toLocaleLowerCase("id-ID").trim();
 const filtered=modules.filter(m=>(!GROUP.value||m.group===GROUP.value)&&(!q||(m.id+" "+m.title+" "+m.group).toLocaleLowerCase("id-ID").includes(q)));
 CATALOG.replaceChildren();
 if(!filtered.length)CATALOG.append(el("p","", "Tidak ada modul yang cocok."));
 for(const m of filtered){
  const card=el("article","card");card.append(el("div","meta","MODUL "+m.id+"  ·  "+m.group));
  card.append(el("h3","",m.title));
  card.append(el("p","sub",m.slides+" slide · materi peserta di Google Drive"));
  card.append(el("p","objective","Fokus belajar: "+OBJECTIVES[m.id]));
  const links=el("div","links");
  links.append(link("Materi slide",presentation(m.deck)));
  links.append(link("Infografis",fileURL(m.infographic)));
  const held=Array.isArray(m.assessmentHold)?m.assessmentHold:[];
  for(const [kind,title,doc] of [["pre","Pre-test",m.pre],["post",m.postLabel,m.post]]){
   if(held.includes(kind)){
    const item=el("span","link-review",title+" — dalam perbaikan");
    item.title="Opsi jawaban sedang dikoreksi di Pra-UAT. Tautan ditahan sampai review.";
    links.append(item);
   }else{links.append(link(title,documentURL(doc)));}
  }
  if(m.worksheet)links.append(link("Worksheet",sheetURL(m.worksheet)));
  card.append(links);
  const label=el("label","completed");
  const check=el("input");check.type="checkbox";check.checked=progress[m.id]===true;check.setAttribute("aria-label","Tandai modul "+m.id+" selesai");
  check.addEventListener("change",()=>{progress[m.id]=check.checked;try{localStorage.setItem(KEY,JSON.stringify(progress))}catch{}updateProgress()});
  label.append(check,document.createTextNode("Tandai telah dipelajari (tersimpan hanya di browser)"));card.append(label);CATALOG.append(card);
 }
 updateProgress();
}
function updateProgress(){PROGRESS.textContent=modules.filter(m=>progress[m.id]===true).length+" dari "+modules.length+" modul ditandai dipelajari pada perangkat ini";}
SEARCH.addEventListener("input",render);GROUP.addEventListener("change",render);
fetch("modules.json",{cache:"no-store"}).then(r=>{if(!r.ok)throw Error("Gagal mengambil katalog");return r.json()}).then(x=>{if(!x||!Array.isArray(x.modules))throw Error("Format katalog salah");modules=x.modules;render()}).catch(()=>{CATALOG.replaceChildren(el("p","", "Katalog tidak dapat dimuat. Periksa koneksi dan coba buka halaman kembali."))});
