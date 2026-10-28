"use strict";
// A destructive manifest-mutation regression, run only in a temporary copy.
// It never changes the participant catalog, assessment IDs, or release assets.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const {spawnSync} = require("node:child_process");
const root = __dirname;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "satusehat-qa-gate-"));
const dest = path.join(dir, "site");
const filenames = ["validate.cjs","modules.json","app.js","index.html","style.css","robots.txt"];
function verify(label, edit, expectedFailure) {
  const original = JSON.parse(fs.readFileSync(path.join(root,"modules.json"),"utf8"));
  if(edit) edit(original);
  fs.writeFileSync(path.join(dest,"modules.json"),JSON.stringify(original));
  const result = spawnSync(process.execPath,[path.join(dest,"validate.cjs")],
    {cwd:dir,encoding:"utf8",timeout:5000});
  const message = (result.stdout||"") + (result.stderr||"");
  assert.notEqual(result.error?.code,"ETIMEDOUT",label+": validator timed out");
  if (expectedFailure) {
    assert.notEqual(result.status,0,label+": mutated catalog must be rejected");
    assert.match(message,expectedFailure,label+": unexpected rejection reason");
  } else {
    assert.equal(result.status,0,label+": unchanged catalog must be accepted; "+message);
  }
}
try {
  fs.mkdirSync(dest);
  for(const file of filenames) fs.copyFileSync(path.join(root,file),path.join(dest,file));
  verify("baseline",null,null);
  const deckCases = [
    ["09 v2.6", "09","1vlemdZVuS97qHIqQ3_5tw5dSLLkICdzOuqCyCnNRUE8"],
    ["09 v2.7", "09","1O7IjFitfskRV-2M0CqvM9IrCRiPCtJhZzakYIGtnnmI"],
    ["11 v2.7", "11","1xQOUi-2dU9-62dPuSSWjySWSjEDb30tI"],
    ["13 v2.4", "13","1fQgBupKqT0Zh4_zzK93bxsldeF2iaS0R"]
  ];
  for(const [name,id,deck] of deckCases) {
    verify(name,m=>{m.modules.find(x=>x.id===id).deck=deck;},
      /INVALID: slide\/infographic\/worksheet catalog changed before SME \+ UAT approval/);
  }
  verify("held assessment 03-pre",m=>{
    m.modules.find(x=>x.id==="03").pre="unapprovedCandidateDocument";
  },/INVALID: (?:21 available assessment IDs only|assessment catalog changed before SME \+ UAT approval)/);
  verify("changed live assessment 01-pre",m=>{
    m.modules.find(x=>x.id==="01").pre="changedLiveAssessment";
  },/INVALID: assessment catalog changed before SME \+ UAT approval/);
  console.log("PASS QA-gate mutation regressions: baseline + 4 candidate decks + 2 assessment modifications");
} finally {
  fs.rmSync(dir,{recursive:true,force:true});
}
