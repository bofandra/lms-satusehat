"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ROOT = __dirname;
const source = fs.readFileSync(path.join(ROOT, "app.js"), "utf8");
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, "modules.json"), "utf8"));
const PROGRESS_KEY = "satusehat-learning-progress-20261020";
class FakeNode {
  constructor(tagName, id = "") {
    this.tagName = tagName;
    this.id = id;
    this.children = [];
    this.handlers = {};
    this.textContent = "";
    this.value = "";
    this.disabled = false;
    this.checked = false;
  }
  append(...nodes) { this.children.push(...nodes); }
  replaceChildren(...nodes) { this.children = [...nodes]; }
  addEventListener(name, callback) { this.handlers[name] = callback; }
  setAttribute(name, value) { this[name] = value; }
  fire(name) {
    assert.equal(typeof this.handlers[name], "function", "missing handler: " + name);
    this.handlers[name]();
  }
}
function descendants(node) {
  return [node, ...node.children.filter(n => n instanceof FakeNode).flatMap(descendants)];
}
function findTag(node, tag) { return descendants(node).filter(n => n.tagName === tag); }
async function loadPortal({store = new Map(), rejectFetch = false, initialFetchFailures = 0} = {}) {
  const ids = ["catalog", "search", "group", "study-filter", "progress", "reset-progress", "results-count"];
  const nodes = Object.fromEntries(ids.map(id => [id, new FakeNode("section", id)]));
  const document = {
    getElementById(id) { assert.ok(nodes[id], "missing " + id); return nodes[id]; },
    createElement(tag) { return new FakeNode(tag); },
    createTextNode(value) { const el = new FakeNode("text"); el.textContent = value; return el; }
  };
  const storage = {
    getItem(key) { return store.get(key) ?? null; },
    setItem(key, value) { store.set(key, String(value)); },
    removeItem(key) { store.delete(key); }
  };
  const fetch = () => {
    if (rejectFetch || initialFetchFailures-- > 0) return Promise.reject(new Error("offline"));
    return Promise.resolve({ok: true, json: async () => manifest});
  };
  vm.runInNewContext(source, {document, localStorage: storage, fetch}, {filename: "app.js"});
  await new Promise(resolve => setImmediate(resolve));
  return {nodes, store};
}
(async () => {
  assert.equal(manifest.modules.length, 13);
  const {nodes, store} = await loadPortal();
  assert.equal(findTag(nodes.catalog, "article").length, 13, "render all modules");
  assert.match(nodes["results-count"].textContent, /^13 dari 13/);
  const links = findTag(nodes.catalog, "a");
  assert.equal(links.length, 51, "show only 51 active resources");
  for (const anchor of links) {
    assert.match(anchor.href, /^https:\/\/(drive|docs)\.google\.com\//, "allowed provider links");
    assert.equal(anchor.target, "_blank");
    assert.equal(anchor.rel, "noopener noreferrer");
    assert.match(anchor["aria-label"], /Modul (?:0[1-9]|1[0-3])/, "each link must identify its module for screen readers");
  }
  assert.equal(descendants(nodes.catalog).filter(n => n.className === "link-review").length, 5, "five held assessments have no links");
  const orderedLinks = article => descendants(article).find(n => n.className === "links").children.map(n => n.textContent);
  const cards = findTag(nodes.catalog, "article");
  assert.deepEqual(orderedLinks(cards[0]), ["Pre-test", "Materi slide", "Infografis", "Post-test"], "diagnostic before study, assessment last");
  assert.deepEqual(orderedLinks(cards[2]), ["Pre-test — dalam perbaikan", "Materi slide", "Infografis", "Post-test"], "held pretest stays unavailable but in learning sequence");
  assert.deepEqual(orderedLinks(cards[12]), ["Pre-test — dalam perbaikan", "Materi slide", "Infografis", "Worksheet", "Ujian akhir"], "USG learning sequence ends in final exam");

  nodes.group.value = "Pelayanan";
  nodes.group.fire("change");
  assert.equal(findTag(nodes.catalog, "article").length, 4, "group filter");
  nodes.group.value = "";
  nodes.group.fire("change");
  nodes.search.value = "MWL";
  nodes.search.fire("input");
  assert.equal(findTag(nodes.catalog, "article").length, 1, "objective/topic search");
  nodes.search.value = "";
  nodes.search.fire("input");
  const firstBox = findTag(nodes.catalog, "input")[0];
  firstBox.checked = true;
  firstBox.fire("change");
  assert.match(nodes.progress.textContent, /^1 dari 13/);
  assert.equal(JSON.parse(store.get(PROGRESS_KEY))["01"], true, "progress saved locally");
  nodes["study-filter"].value = "done";
  nodes["study-filter"].fire("change");
  assert.equal(findTag(nodes.catalog, "article").length, 1, "completed filter");
  const completedBox = findTag(nodes.catalog, "input")[0];
  completedBox.checked = false;
  completedBox.fire("change");
  assert.equal(findTag(nodes.catalog, "article").length, 0, "completed filter rerenders when unchecked");
  nodes["study-filter"].value = "todo";
  nodes["study-filter"].fire("change");
  assert.equal(findTag(nodes.catalog, "article").length, 13, "incomplete filter");
  const nextBox = findTag(nodes.catalog, "input")[1];
  nextBox.checked = true;
  nextBox.fire("change");
  assert.equal(findTag(nodes.catalog, "article").length, 12, "incomplete filter rerenders when checked");
  nodes["reset-progress"].fire("click");
  assert.equal(store.has(PROGRESS_KEY), false, "reset clears progress");
  assert.equal(findTag(nodes.catalog, "article").length, 13, "reset restores todo filter");
  assert.equal(nodes["reset-progress"].disabled, true, "disable reset when empty");
  const recovery = await loadPortal({store: new Map([[PROGRESS_KEY, "{invalid-json"]])});
  assert.equal(findTag(recovery.nodes.catalog, "article").length, 13, "bad localStorage does not break catalog");
  const offline = await loadPortal({rejectFetch: true});
  assert.match(findTag(offline.nodes.catalog, "p")[0].textContent, /tidak dapat dimuat/i, "clear network error");
  assert.equal(findTag(offline.nodes.catalog, "button").length, 1, "retry button available when offline");
  const transient = await loadPortal({initialFetchFailures: 1});
  assert.equal(findTag(transient.nodes.catalog, "article").length, 0, "failed load does not display stale catalog");
  assert.equal(transient.nodes["results-count"].textContent, "Katalog belum tersedia");
  findTag(transient.nodes.catalog, "button")[0].fire("click");
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(findTag(transient.nodes.catalog, "article").length, 13, "retry restores catalog after connection recovers");
  console.log("PASS LMS regression: 13 modules, 51 links, 5 QA holds, group/search/status filters, local progress/reset, corrupt storage, offline recovery");
})().catch(error => {console.error(error); process.exitCode = 1;});
