"use strict";
const CATALOG = document.getElementById("catalog");
const SEARCH = document.getElementById("search");
const GROUP = document.getElementById("group");
const PROGRESS = document.getElementById("progress");
const KEY = "satusehat-learning-progress-20261020";
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
  const links=el("div","links");
  links.append(link("Materi slide",presentation(m.deck)));
  links.append(link("Infografis",fileURL(m.infographic)));
  links.append(link("Pre-test",documentURL(m.pre)));
  links.append(link(m.postLabel,documentURL(m.post)));
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
fetch("modules.json",{cache:"no-store"}).then(r=>{if(!r.ok)throw Error("Gagal mengambil katalog");return r.json()}).then(x=>{modules=x.modules;render()}).catch(()=>{CATALOG.replaceChildren(el("p","", "Katalog tidak dapat dimuat. Periksa koneksi dan coba buka halaman kembali."))});
