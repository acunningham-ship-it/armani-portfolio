// app.js — renders the data-driven, page-organized portfolio (faithful to Wix, ARSENIC layout).
let FILES = [];                       // all media filenames (from media-list.json)
const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => (s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const mediaURL = (f) => "media/" + encodeURIComponent(f);

// expand special tokens / arrays into a real file list (only files that exist)
function imgs(spec) {
  let list = spec;
  if (spec === "INKTOBER") list = FILES.filter((f) => f.toLowerCase().startsWith("firefly"));
  else if (spec === "STATEFAIR") list = FILES.filter((f) => /^IMG_20251017/.test(f));
  else if (!Array.isArray(spec)) list = [];
  return list.filter((f) => FILES.includes(f));
}

function navHTML() {
  return window.SITE.nav.map((n) => {
    if (n.children) {
      const sub = n.children.map((c) => `<a href="#/${c.slug}" data-slug="${c.slug}">${esc(c.title)}</a>`).join("");
      return `<div class="nav-drop"><a href="#/${n.slug}" data-slug="${n.slug}">${esc(n.title)} ▾</a><div class="nav-menu">${sub}</div></div>`;
    }
    return `<a href="#/${n.slug}" data-slug="${n.slug}">${esc(n.title)}</a>`;
  }).join("");
}

let lb = { list: [], i: 0 };
function openLB(list, i) { lb = { list, i }; $("#lightbox").hidden = false; document.body.style.overflow = "hidden"; showLB(); }
function closeLB() { $("#lightbox").hidden = true; document.body.style.overflow = ""; }
function showLB() {
  if (!lb.list.length) return;
  lb.i = (lb.i + lb.list.length) % lb.list.length;
  $("#lb-img").src = mediaURL(lb.list[lb.i]);
  $("#lb-count").textContent = `${lb.i + 1} / ${lb.list.length}`;
}

function gallery(list) {
  if (!list.length) return "";
  return `<div class="grid" data-gallery='${esc(JSON.stringify(list))}'>` +
    list.map((f, i) => `<button class="g-item" data-i="${i}"><img src="${mediaURL(f)}" alt="" loading="lazy"></button>`).join("") + `</div>`;
}

function sectionHTML(s) {
  const list = imgs(s.images || []);
  let h = `<section class="block">`;
  if (s.sub && !s.heading) h += `<p class="band mono">${esc(s.sub)}</p>`;
  h += `<h2>${esc(s.heading || "")}</h2>`;
  if (s.sub && s.heading) h += `<p class="sub">${esc(s.sub)}</p>`;
  if (s.body) h += `<p class="body">${esc(s.body)}</p>`;
  if (s.video && FILES.includes(s.video)) h += `<video class="vid" controls src="${mediaURL(s.video)}"></video>`;
  if (s.item) h += `<p class="item-label mono">${esc(s.item)}</p>`;
  if (s.caption) h += `<p class="caption">${esc(s.caption)}</p>`;
  h += gallery(list);
  if (s.note) h += `<p class="note mono">${esc(s.note)}</p>`;
  return h + `</section>`;
}

function render(slug) {
  const P = window.SITE.pages;
  const p = P[slug] ? slug : "home";
  const page = P[p];
  document.querySelectorAll("#nav-links [data-slug]").forEach((a) => a.classList.toggle("active", a.dataset.slug === p));
  $("#nav-links").classList.remove("open");
  const c = $("#content"); window.scrollTo(0, 0);

  if (page.type === "home") {
    const hero = FILES.includes("Armani Cunningham.jpg") ? "Armani Cunningham.jpg" : (FILES.find((f) => /welcome|theheader|heyjohn/i.test(f)) || FILES[0]);
    c.innerHTML = `
      <section class="hero container">
        <div class="hero-copy">
          <p class="mono kicker">Graphic Design Student · Junior Portfolio</p>
          <h1>Armani <span class="red">Cunningham</span></h1>
          <p class="tagline">Animation <span class="sep">·</span> Photography <span class="sep">·</span> <span class="purple">Graphic Design</span></p>
          <p class="lede">I'm a graphic designer and animator with experience in Adobe programs such as Photoshop. Strong creative and analytical skills, a team player with an eye for detail — currently learning to animate and going deeper into graphic design.</p>
          <div class="cta-group"><a href="#/digital-arts-1" class="btn btn-primary">View the work</a><a href="mailto:hamstudios101@gmail.com" class="btn btn-ghost">Contact</a></div>
        </div>
        <div class="hero-art">${hero ? `<img src="${mediaURL(hero)}" alt="Armani Cunningham">` : ""}<div class="hero-art-frame"></div></div>
      </section>
      <section class="container" style="padding:0 24px 56px">
        <div class="section-head"><h2>Explore the <span class="red">work</span></h2></div>
        <div class="tiles">${["junior-mastery","animation","digital-arts-1","digital-arts-2","ace","image-editing"]
          .map((s) => `<a class="tile" href="#/${s}"><span class="tile-title">${esc(P[s].title)}</span></a>`).join("")}</div>
      </section>`;
    return;
  }

  let inner = "";
  if (page.type === "sections") inner = `<div class="section-head"><h2>${esc(page.title)}</h2></div>` + page.sections.map(sectionHTML).join("");
  else if (page.type === "canva") {
    inner = `<div class="section-head"><h2>${esc(page.title)}</h2></div>
      <p class="lede">${esc(page.body)}</p>
      <a class="btn btn-primary" href="${esc(page.canva)}" target="_blank" rel="noopener">Open my Canva animation site ↗</a>
      ${gallery(imgs(page.images || []))}`;
  } else if (page.type === "text")
    inner = `<div class="section-head"><h2>${esc(page.title)}</h2></div><p class="lede">${page.body}</p>${gallery(imgs(page.images || []))}`;
  else if (page.type === "links")
    inner = `<div class="section-head"><h2>${esc(page.title)}</h2></div><div class="links">` +
      page.links.map((l) => `<a class="link-card" href="${esc(l.url)}" target="_blank" rel="noopener"><span>${esc(l.name)}</span><span class="arrow">↗</span></a>`).join("") + `</div>`;
  else if (page.type === "vocab")
    inner = `<div class="section-head"><h2>${esc(page.title)}</h2></div><div class="vocab">` +
      page.terms.map((t) => `<div class="term"><h3>${esc(t.term)}${t.pos ? ` <span class="pos mono">${esc(t.pos)}</span>` : ""}</h3><p>${esc(t.def)}</p></div>`).join("") + `</div>`;

  c.innerHTML = `<section class="section container">${inner}</section>`;
}

function route() { render(location.hash.replace(/^#\//, "") || "home"); }

async function init() {
  $("#nav-links").innerHTML = navHTML();
  try { FILES = await (await fetch("media-list.json")).json(); } catch (e) { FILES = []; }
  // lightbox wiring
  $(".lb-close").onclick = closeLB;
  $(".lb-prev").onclick = () => { lb.i--; showLB(); };
  $(".lb-next").onclick = () => { lb.i++; showLB(); };
  $("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") closeLB(); });
  document.addEventListener("keydown", (e) => {
    if ($("#lightbox").hidden) return;
    if (e.key === "Escape") closeLB(); if (e.key === "ArrowLeft") { lb.i--; showLB(); } if (e.key === "ArrowRight") { lb.i++; showLB(); }
  });
  $("#content").addEventListener("click", (e) => {
    const b = e.target.closest(".g-item"); if (!b) return;
    const list = JSON.parse(b.closest(".grid").dataset.gallery);
    openLB(list, +b.dataset.i);
  });
  $("#menu-btn").onclick = () => $("#nav-links").classList.toggle("open");
  window.addEventListener("hashchange", route);
  route();
}
init();
