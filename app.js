// app.js — Armani Cunningham portfolio. Data-driven, page-organized gallery system.
// Faithful rebuild of the Wix site (same pages, same content) in the ARSENIC layout.

const PAGES = [
  { slug: "home", title: "Home", type: "home" },
  { slug: "junior-mastery", title: "Junior Mastery", type: "gallery", dir: "junior-mastery",
    intro: "Junior mastery work — the foundation projects." },
  { slug: "animation", title: "Animation", type: "gallery", dir: "animation",
    intro: "Animation work — learning to bring characters and frames to life in Adobe Character Animator." },
  { slug: "digital-arts-1", title: "Digital Arts 1", type: "gallery", dir: "digital-arts-1",
    intro: "Digital Arts 1 — type, brand, and composition studies." },
  { slug: "digital-arts-2", title: "Digital Arts 2", type: "gallery", dir: "digital-arts-2",
    intro: "Digital Arts 2 — building on the first course with more refined pieces." },
  { slug: "portfolio", title: "Portfolio", type: "text",
    body: "<p class='lede'>Portfolio coming soon — see my work on the <a href='#/digital-arts-1'>Digital Arts</a> and <a href='#/ace'>ACE</a> pages.</p>" },
  { slug: "ace", title: "ACE", type: "gallery", dir: "ace",
    intro: "ACE — additional creative work and projects." },
  { slug: "image-editing", title: "Image Editing", type: "gallery", dir: "image-editing",
    intro: "Image editing — retouching, composition, and photo work." },
  { slug: "resources", title: "Resources", type: "links", heading: "Animation Resources", links: [
    { name: "Goblin Tools", url: "https://goblin.tools/" },
    { name: "Mind Map", url: "https://www.canva.com/design/DAGx1dC8NBE/LC58rnwIgI84mphZ4SWmtg/edit?utm_content=DAGx1dC8NBE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" },
    { name: "Unsplash", url: "https://unsplash.com/" },
    { name: "Pexels", url: "https://www.pexels.com/" },
    { name: "Canva Stock", url: "https://www.canva.com/features/free-stock-photos/" },
    { name: "FreePik", url: "https://www.freepik.com/" },
    { name: "Vecteezy", url: "https://www.vecteezy.com/" },
    { name: "Font Gen", url: "https://labs.google/gentype?authuser=0" },
    { name: "Location Release", url: "https://docs.google.com/document/d/1dVMiV9SanCAU3rXU-Qj4a0cnPuUI5_fey_UjwNeJYBk/edit?usp=sharing" },
    { name: "Model Release", url: "https://docs.google.com/document/d/1xxx59X_NDwJwJNtERMY1ikS4vVDrTieOnlD3DO5SDFw/edit?usp=sharing" },
  ]},
  { slug: "vocab", title: "Vocab", type: "vocab", terms: [
    { term: "Narrative", pos: "noun", def: "A spoken or written account of connected events; a story." },
    { term: "Arbitrary", pos: "adjective", def: "Based on random choice or personal whim, rather than any reason or system." },
    { term: "Authentic", pos: "adjective", def: "Of undisputed origin; genuine." },
    { term: "Nuanced", pos: "adjective", def: "Characterized by subtle shades of meaning or expression." },
    { term: "Generic", pos: "adjective", def: "Lacking distinction; general." },
    { term: "Trauma", pos: "noun", def: "A deeply distressing or disturbing experience." },
    { term: "Embodying", pos: "verb", def: "Be an expression of or give a tangible or visible form to (an idea, quality, or feeling)." },
  ]},
  { slug: "animation-vocab", title: "Animation Vocab", type: "vocab", terms: [
    { term: "Rigging", def: "Adding animation data to Photoshop / Illustrator files so they can move in Adobe Character Animator." },
    { term: "Puppet", def: "A digital character created from layered files that can be rigged and animated." },
    { term: "Rig Mode", def: "The workspace for setting up a puppet's structure — handles, tags, sticks, and behaviors." },
    { term: "Handles", def: "Points that define where movement happens on a puppet." },
    { term: "Sticks", def: "Lines that create rigidity between handles, functioning like bones." },
    { term: "Tags", def: "Labels that identify body-part controls." },
    { term: "Behaviors", def: "Prebuilt animation controls that respond to input — e.g. Face, Dragger, Walk, Lip Sync." },
    { term: "Dragger", def: "A behavior that lets you click and drag puppet parts while animating." },
    { term: "Hierarchy", def: "The layer order that tells Character Animator how to organize puppet parts." },
    { term: "Origin Point", def: "The central pivot point for a layer's rotation or movement." },
    { term: "Parent / Child Relationship", def: "Rigging where child parts move in response to parent parts." },
    { term: "Anchor Point", def: "A fixed point that keeps puppet parts stationary." },
    { term: "Trigger", def: "A behavior that switches or reveals specific puppet parts." },
    { term: "Physics Behavior", def: "A setting that enables natural reactions to gravity or collisions." },
    { term: "Calibration", def: "Aligning the webcam and microphone for facial-expression and voice tracking." },
  ]},
];

let MANIFEST = {};
const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => (s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function buildNav() {
  $("#nav-links").innerHTML = PAGES.map((p) =>
    `<a href="#/${p.slug}" data-nav data-slug="${p.slug}">${esc(p.title)}</a>`).join("");
}

function gallery(p) {
  const files = MANIFEST[p.dir] || [];
  if (!files.length) return `<p class="dim">No images in this gallery yet.</p>`;
  const items = files.map((f, i) =>
    `<button class="g-item" data-dir="${p.dir}" data-i="${i}">
       <img src="gallery/${p.dir}/${f}" alt="${esc(p.title)} ${i + 1}" loading="lazy" />
     </button>`).join("");
  return `<div class="grid">${items}</div>`;
}

function render(slug) {
  const p = PAGES.find((x) => x.slug === slug) || PAGES[0];
  document.querySelectorAll("[data-nav]").forEach((a) =>
    a.classList.toggle("active", a.dataset.slug === p.slug));
  const c = $("#content");
  window.scrollTo(0, 0);

  if (p.type === "home") {
    const heroImg = (MANIFEST["home"] || [])[0];
    c.innerHTML = `
      <section class="hero container">
        <div class="hero-copy">
          <p class="mono kicker">Graphic Design Student · Junior Portfolio</p>
          <h1>Armani <span class="red">Cunningham</span></h1>
          <p class="tagline">Animation <span class="sep">·</span> Photography <span class="sep">·</span> <span class="purple">Graphic Design</span></p>
          <p class="lede">I'm a graphic design student. I'm currently learning to animate and learn more graphic design.</p>
          <div class="cta-group">
            <a href="#/digital-arts-1" class="btn btn-primary">View the work</a>
            <a href="#/animation" class="btn btn-ghost">Animation</a>
          </div>
        </div>
        <div class="hero-art">
          ${heroImg ? `<img src="gallery/home/${heroImg}" alt="Featured work" />` : ""}
          <div class="hero-art-frame"></div>
        </div>
      </section>
      <section class="section container">
        <div class="section-head"><h2>Explore the <span class="red">work</span></h2></div>
        <div class="tiles">
          ${["junior-mastery","animation","digital-arts-1","digital-arts-2","ace","image-editing"]
            .map((s) => { const pg = PAGES.find((x) => x.slug === s); const n = (MANIFEST[pg.dir] || []).length;
              return `<a class="tile" href="#/${s}"><span class="tile-title">${esc(pg.title)}</span><span class="mono dim">${n} piece${n === 1 ? "" : "s"}</span></a>`; }).join("")}
        </div>
      </section>`;
    return;
  }

  let inner = "";
  if (p.type === "gallery") inner = `${p.intro ? `<p class="lede">${esc(p.intro)}</p>` : ""}${gallery(p)}`;
  else if (p.type === "text") inner = p.body;
  else if (p.type === "links")
    inner = `${p.heading ? `<p class="lede">${esc(p.heading)}</p>` : ""}<div class="links">` +
      p.links.map((l) => `<a class="link-card" href="${esc(l.url)}" target="_blank" rel="noopener"><span>${esc(l.name)}</span><span class="arrow">↗</span></a>`).join("") + `</div>`;
  else if (p.type === "vocab")
    inner = `<div class="vocab">` + p.terms.map((t) =>
      `<div class="term"><h3>${esc(t.term)}${t.pos ? ` <span class="pos mono">${esc(t.pos)}</span>` : ""}</h3><p>${esc(t.def)}</p></div>`).join("") + `</div>`;

  c.innerHTML = `<section class="section container">
    <div class="section-head"><h2>${esc(p.title)}</h2></div>${inner}</section>`;
}

// ── Lightbox ──
let lb = { dir: null, i: 0 };
function openLB(dir, i) { lb = { dir, i }; showLB(); $("#lightbox").hidden = false; document.body.style.overflow = "hidden"; }
function closeLB() { $("#lightbox").hidden = true; document.body.style.overflow = ""; }
function showLB() {
  const files = MANIFEST[lb.dir] || [];
  if (!files.length) return;
  lb.i = (lb.i + files.length) % files.length;
  $("#lb-img").src = `gallery/${lb.dir}/${files[lb.i]}`;
  $("#lb-count").textContent = `${lb.i + 1} / ${files.length}`;
}
function wireLightbox() {
  $(".lb-close").onclick = closeLB;
  $(".lb-prev").onclick = () => { lb.i--; showLB(); };
  $(".lb-next").onclick = () => { lb.i++; showLB(); };
  $("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") closeLB(); });
  document.addEventListener("keydown", (e) => {
    if ($("#lightbox").hidden) return;
    if (e.key === "Escape") closeLB();
    if (e.key === "ArrowLeft") { lb.i--; showLB(); }
    if (e.key === "ArrowRight") { lb.i++; showLB(); }
  });
  $("#content").addEventListener("click", (e) => {
    const b = e.target.closest(".g-item");
    if (b) openLB(b.dataset.dir, +b.dataset.i);
  });
}

function route() { render((location.hash.replace(/^#\//, "") || "home")); $("#nav-links").classList.remove("open"); }

async function init() {
  buildNav();
  wireLightbox();
  $("#menu-btn").onclick = () => $("#nav-links").classList.toggle("open");
  try { MANIFEST = await (await fetch("gallery/manifest.json")).json(); } catch (e) { MANIFEST = {}; }
  window.addEventListener("hashchange", route);
  route();
}
init();
