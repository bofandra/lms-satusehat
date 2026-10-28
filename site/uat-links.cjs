"use strict";
// Generate a reviewer-only CSV from the published preview manifest.
// Usage: node site/uat-links.cjs > uat-links.csv
// The CSV is NOT part of GitHub Pages allowlisted deployment.
const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, "modules.json"), "utf8"));
assert.equal(manifest.reviewStatus, "pra-uat", "Only generate the Pra-UAT register");
assert.equal(manifest.modules.length, 13, "Expected 13 modules");
const ppt = id => "https://docs.google.com/presentation/d/" + encodeURIComponent(id) + "/edit";
const doc = id => "https://docs.google.com/document/d/" + encodeURIComponent(id) + "/edit";
const file = id => "https://drive.google.com/file/d/" + encodeURIComponent(id) + "/view";
const rows = [];
for (const m of manifest.modules) {
  const held = m.assessmentHold || [];
  const pushAssessment = (field, label) => {
    if (held.includes(field)) {
      assert.equal(m[field], null, "Held assessment ID must not be public: " + m.id + ":" + field);
      rows.push([m.id, m.title, label, "DITAHAN", "", "", "", "", "Verifikasi tidak ada tautan di LMS"]);
    } else {
      assert.match(m[field], /^[a-zA-Z0-9_-]+$/, "Missing preview ID: " + m.id + ":" + field);
      rows.push([m.id, m.title, label, "UJI ANONIM", doc(m[field]), "", "", "", ""]);
    }
  };
  pushAssessment("pre", "Pre-test");
  rows.push([m.id, m.title, "Materi slide", "UJI ANONIM",
    m.deckType === "native" ? ppt(m.deck) : file(m.deck), "", "", "", ""]);
  rows.push([m.id, m.title, "Infografis", "UJI ANONIM", file(m.infographic), "", "", "", ""]);
  if (m.worksheet) rows.push([m.id, m.title, "Worksheet", "UJI ANONIM", file(m.worksheet), "", "", "", ""]);
  pushAssessment("post", m.postLabel || "Post-test");
}
assert.equal(rows.filter(row => row[3] === "UJI ANONIM").length, 51, "51 active links");
assert.equal(rows.filter(row => row[3] === "DITAHAN").length, 5, "5 held links");
const urls = rows.filter(row => row[4]).map(row => row[4]);
assert.equal(new Set(urls).size, urls.length, "No repeated active URLs");
assert.ok(urls.every(url => /^https:\/\/(?:drive|docs)\.google\.com\//.test(url)), "Drive and Docs URLs only");
const header = ["Modul", "Judul modul", "Jenis materi", "Status awal", "URL untuk diuji",
  "Hasil incognito", "Hasil Android", "Berkas sesuai?", "Catatan dan bukti"];
const csvCell = value => '"' + String(value).replace(/"/g, '""') + '"';
process.stdout.write([header, ...rows].map(row => row.map(csvCell).join(",")).join("\n") + "\n");
