
/* =========================================================
   CONTENT. Edit this object to update the whole site.
   ========================================================= */
const DATA = {
  name: "Rishabh Kushwaha",
  first: "Rishabh",
  photos: { hero:"/img/headshot.jpg", avatar:"/img/avatar.jpg", about:"/img/suit.jpg", campus:"/img/campus.jpg" },
  resumePdf: "/Rishabh_Kushwaha_Resume.pdf",
  email: "rishukush08@gmail.com",
  phone: "+91 63079 14345",
  linkedin: "https://www.linkedin.com/in/rishabh-kushwaha-19535b293/",
  github: "https://github.com/codewithrk24",
  location: "Bengaluru, Karnataka",
  hometown: "Prayagraj, Uttar Pradesh",
  synopsis: "A Computer Science graduate who verifies identities for a living. At Navi he checks customer documents for digital onboarding. Outside work he trains models to catch fraud and hate speech.",
  summary: "Detail-oriented Computer Science graduate with hands-on experience in KYC/VKYC operations, customer identity and document verification, data validation, discrepancy identification, and compliant digital onboarding at Navi.",

  experience: [{
    company: "Navi Finserv", role: "VKYC Associate – Product Operations", place: "Bengaluru", when: "Jun 2026 – Present",
    points: [
      "Perform customer identity and document verification for digital onboarding, maintaining accuracy, completeness, data integrity and confidentiality.",
      "Validate customer-provided information and documentation, identifying discrepancies and exceptions for resolution or escalation.",
      "Follow defined KYC/AML procedures, process guidelines and documentation requirements while processing verification cases.",
      "Maintain accurate customer records and complete verification within defined process timelines.",
      "Handle verification-related customer issues and coordinate with internal teams to resolve exceptions."
    ]
  }],

  projects: [
    { id:"fraud", title:"Credit Card Fraud Detection", genre:"Thriller", when:"Feb – Apr 2026", art:"art-fraud", glyph:"₹",
      tags:["Python","Pandas","Scikit-learn"],
      logline:"One transaction in hundreds is a fraud. A model has to find it without crying wolf.",
      episodes:[
        "Built a machine-learning model to identify potentially fraudulent credit-card transactions.",
        "Cleaned and preprocessed transaction data and handled the heavily imbalanced fraud class.",
        "Trained and compared several classifiers, scoring them on precision, recall, F1 and ROC-AUC to reduce missed fraud."
      ],
      facts:[["Timeline","Feb – Apr 2026"],["Focus","Imbalanced classification"],["Metrics","Precision, Recall, F1, ROC-AUC"]]
    },
    { id:"hate", title:"Cyberbullying Hate Detection", genre:"Drama", when:"Aug 2025 – Jan 2026", art:"art-hate", glyph:"#",
      tags:["Python","NLP","Hugging Face","PyTorch","Scikit-learn"],
      logline:"4,940 Hinglish posts, labelled by hand. One question: is this abuse?",
      episodes:[
        "Built and manually annotated a 4,940-sample Hinglish dataset from multiple social-media sources, with 0.92 Cohen's Kappa label agreement.",
        "Created a reproducible NLP pipeline: regex cleaning, Hinglish normalisation, TF-IDF unigram and bigram features, and an 80:20 stratified split.",
        "Compared Linear SVM, Multinomial Naive Bayes and a fine-tuned MuRIL transformer. The SVM reached 97.2% precision, recall, F1 and accuracy on the held-out set."
      ],
      facts:[["Role","Team project"],["Dataset","4,940 Hinglish samples"],["Best model","Linear SVM · 97.2% F1"]]
    }
  ],

  skills: [
    { name:"KYC & Compliance", note:"The day job", color:"#7a0d1b", items:["KYC Verification","VKYC","Identity Verification","Document Verification","Customer Due Diligence","AML Process Awareness","Information Validation","Customer Onboarding","Case Documentation","Process Compliance"] },
    { name:"Risk & Operations", note:"Spotting what doesn't add up", color:"#1b5f5c", items:["Discrepancy Identification","Exception Handling","Case Review","Data Validation","Pattern Recognition","Anomaly Detection","Issue Escalation","Record Maintenance"] },
    { name:"Data & Tools", note:"Where the analysis happens", color:"#8a5d14", items:["MS Excel","Google Sheets","SQL","MySQL","Python","Pandas","Scikit-learn","PyTorch","Hugging Face"] },
    { name:"Communication", note:"Talking to customers and teams", color:"#3b2f63", items:["Customer Communication","Written Documentation","English","Hindi"] }
  ],

  awards: [
    { sel:"Winner", big:"2nd Place", sub:"Cybersecurity Challenge · Security Fundamentals & Threat Defense Bootcamp, MNNIT 2025" },
    { sel:"Best performance", big:"97.2% F1", sub:"Linear SVM on held-out Hinglish hate-speech data" },
    { sel:"Data quality", big:"0.92 Kappa", sub:"Inter-annotator agreement on a hand-labelled dataset" },
    { sel:"Graduated", big:"81.09%", sub:"B.Tech, Computer Science & Engineering, AKTU 2026" }
  ],
  certs: [
    { name:"Diploma in Fraud Management & Anti-Money Laundering Awareness", by:"Alison", year:"2026" },
    { name:"Tata GenAI Data Analytics Virtual Experience Program", by:"Forage", year:"2025" },
    { name:"Machine Learning Course", by:"Soft Pro India", year:"2024" }
  ],

  seasons: [
    { title:"The Beginning", span:"2018 – 2019", art:"art-journey", eps:[
      { t:"High School", d:"Bishop Johnson School, Prayagraj. Finished with 88.67%.", w:"2018 – 2019" } ]},
    { title:"Choosing a Path", span:"2020 – 2021", art:"art-skill", eps:[
      { t:"Intermediate", d:"Erny Memorial School, Prayagraj. Finished with 78.21%.", w:"2020 – 2021" } ]},
    { title:"Engineering", span:"2022 – 2026", photo:"campus", caption:"On campus · UIT Prayagraj", eps:[
      { t:"B.Tech begins", d:"Computer Science & Engineering at United Institute of Technology, AKTU.", w:"2022" },
      { t:"Learning machine learning", d:"Machine Learning course with Soft Pro India.", w:"2024" },
      { t:"Second place at MNNIT", d:"Cybersecurity Challenge at the Security Fundamentals & Threat Defense Bootcamp.", w:"2025" },
      { t:"Tata GenAI Data Analytics", d:"Virtual experience program on Forage.", w:"2025" },
      { t:"The Hinglish dataset", d:"Team project: hand-labelled 4,940 posts and built a hate-speech classifier.", w:"Aug 2025 – Jan 2026" },
      { t:"Chasing fraud", d:"Built a credit-card fraud detection model.", w:"Feb – Apr 2026" },
      { t:"Graduation", d:"B.Tech completed with 81.09%. Diploma in Fraud Management & AML from Alison.", w:"2026" } ]},
    { title:"Building Real Experience", span:"2026 – Now", now:true, photo:"hero", caption:"Now streaming · Navi", eps:[
      { t:"Joining Navi", d:"VKYC Associate in Product Operations, Bengaluru. Verifying identities and documents for digital onboarding.", w:"Jun 2026 – Present", now:true } ]}
  ],

  picks: [
    { title:"The Verifier", tag:"Now streaming", art:"art-ver", line:"Checks every document twice. Flags what doesn't match before it becomes a problem.", tags:["KYC","VKYC","CDD"],
      detail:"Day to day at Navi, Rishabh verifies customer identities and documents for digital onboarding, following KYC/AML procedures and escalating exceptions.", list:["Identity and document verification","Discrepancy and exception handling","Accurate, confidential record keeping"] },
    { title:"The Fraud Hunter", tag:"Original", art:"art-fraud", line:"Teaches models to spot the one bad transaction in a crowd of good ones.", tags:["Python","Scikit-learn","AML"],
      detail:"Pairs compliance training with hands-on machine learning: a fraud-detection model and a diploma in fraud management and AML awareness.", list:["Imbalanced classification","Precision and recall trade-offs","Fraud & AML diploma (Alison, 2026)"] },
    { title:"The Data Detective", tag:"Fan favourite", art:"art-data", line:"Turns messy data into clean answers with SQL, Pandas and patience.", tags:["SQL","Pandas","Excel"],
      detail:"From hand-labelling 4,940 posts to cleaning transaction data, Rishabh is comfortable with the unglamorous work that makes analysis trustworthy.", list:["Data validation and cleaning","Pattern recognition and anomaly detection","SQL, MySQL, Excel, Google Sheets"] }
  ]
};

const PROFILES = {
  rishabh:  { label:"Rishabh",   tag:"MAIN", cls:"av-me",  photo:true, note:"The full series, in order", order:["about","journey","originals","skills","awards","story","picks"] },
  recruiter:{ label:"Recruiter", cls:"av-rec", letter:"R", note:"Resume, awards and skills first", order:["story","awards","skills","journey","originals","picks","about"] },
  analyst:  { label:"Analyst",   cls:"av-ana", letter:"A", glyph:"</>", note:"Projects, data skills and tools first", order:["originals","skills","picks","awards","story","journey","about"] }
};

const SECTIONS = {
  story:    { label:"The Full Story", nav:"Resume",   art:"art-story", hint:"The resume as a screenplay" },
  originals:{ label:"Originals",      nav:"Projects", art:"art-fraud", hint:"Two machine-learning projects" },
  skills:   { label:"Skill Universe", nav:"Skills",   art:"art-skill", hint:"31 skills in 4 genres" },
  awards:   { label:"Award Season",   nav:"Awards",   art:"art-award", hint:"Wins, scores and certificates" },
  journey:  { label:"My Journey",     nav:"Journey",  photo:"campus",  hint:"Four seasons, 2018 to now" },
  about:    { label:"About Me",       nav:"About",    photo:"about",   hint:"The lead, in his own words" },
  picks:    { label:"Top Picks",      nav:"Roles",    art:"art-ver",   hint:"Three roles he fits" }
};

const ART = {
  "art-fraud":  "radial-gradient(120% 90% at 85% 10%, #ff3b4f 0%, #9b0b1d 35%, #2a060b 75%)",
  "art-hate":   "radial-gradient(120% 90% at 15% 15%, #f0b443 0%, #a4521a 40%, #241109 80%)",
  "art-story":  "linear-gradient(135deg,#2b0a10 0%,#7a0d1b 55%,#e3122a 120%)",
  "art-skill":  "radial-gradient(110% 100% at 80% 20%, #2bb3a8 0%, #0f4e4a 45%, #0b1414 85%)",
  "art-award":  "radial-gradient(110% 100% at 50% 0%, #f2cd78 0%, #8f6420 45%, #1d140a 85%)",
  "art-journey":"linear-gradient(160deg,#44344f 0%,#1d1622 60%,#0e0b10 100%)",
  "art-ver":    "linear-gradient(140deg,#1f8a86 0%,#103c3a 60%,#0b1312 100%)",
  "art-data":   "radial-gradient(120% 100% at 90% 90%, #6d7cff 0%, #26265e 45%, #0d0c18 85%)"
};

/* ========================================================= */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => [...(r || document).querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
const store = { get(k){ try{return localStorage.getItem(k)}catch(e){return null} }, set(k,v){ try{localStorage.setItem(k,v)}catch(e){} } };
/* Run a DOM change as a view transition where the browser supports it */
function vt(fn){
  if (document.startViewTransition && !reduced()){
    try { const t = document.startViewTransition(fn); t.ready.catch(()=>{}); t.updateCallbackDone.catch(()=>{}); return t.finished.catch(()=>{}); }
    catch(e){ /* fall through to a plain update */ }
  }
  fn(); return Promise.resolve();
}
const photo = k => DATA.photos[k];
/* The resume PDF is embedded in the page, so the button works anywhere without a network request.
   Rishabh_Kushwaha_Resume.pdf also ships next to the page for direct links. */
let RESUME_HREF = DATA.resumePdf;
function setResumeLinks(){ $$("[data-resume]").forEach(a=>{ a.href = RESUME_HREF; }); }
async function resolveResume(){
  try {
    const b64 = ($("#pdfData")?.textContent || "").trim(); if (!b64) return;
    const bin = atob(b64), bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    RESUME_HREF = URL.createObjectURL(new File([bytes], "Rishabh_Kushwaha_Resume.pdf", {type:"application/pdf"}));
    setResumeLinks();
  } catch(e){}
}
const bg = (art, ph) => ph ? `url('${photo(ph)}')` : ART[art];
const ICON = {
  mail:`<svg class="ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1.5" y="3" width="13" height="10" rx="1.5"/><path d="m2 4 6 5 6-5"/></svg>`,
  in:`<svg class="ic" viewBox="0 0 16 16" fill="currentColor"><path d="M3.6 5.6h-2v8.2h2zM2.6 1.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM14.4 9c0-2.3-1.2-3.5-3-3.5-1.3 0-2 .7-2.3 1.3V5.6h-2v8.2h2V9.6c0-1.1.4-1.9 1.4-1.9 1 0 1.3.8 1.3 1.9v4.2h2z"/></svg>`,
  gh:`<svg class="ic" viewBox="0 0 16 16" fill="currentColor"><path d="M8 .3a7.8 7.8 0 0 0-2.5 15.2c.4.1.5-.2.5-.4v-1.4c-2.2.5-2.6-1-2.6-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.7-.2-3.5-.9-3.5-3.9 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.1.8a7.3 7.3 0 0 1 3.9 0c1.5-1 2.1-.8 2.1-.8.4 1.1.2 1.9.1 2.1.5.5.8 1.2.8 2.1 0 3-1.8 3.7-3.5 3.9.3.2.5.7.5 1.4v2.1c0 .2.1.5.6.4A7.8 7.8 0 0 0 8 .3z"/></svg>`,
  dl:`<svg class="ic" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 2v8m0 0 3-3m-3 3L5 7M3 13h10"/></svg>`
};
let current = null;

/* ---------- Intro ---------- */
function buildIntro(){
  $("#introName").innerHTML = DATA.first.toUpperCase().split("").map((c,i)=>`<span style="animation-delay:${120 + i*55}ms">${c}</span>`).join("");
}
function showIntro(){
  $("#app").hidden = true; $("#who").hidden = true;
  const intro = $("#intro"); intro.classList.remove("leaving"); intro.hidden = false; buildIntro();
  document.body.classList.add("locked"); $("#playBtn").focus({preventScroll:true});
}
function playIntro(){
  const intro = $("#intro"); if (intro.classList.contains("leaving")) return;
  intro.classList.add("leaving");
  setTimeout(()=>{ intro.hidden = true; showWho(); }, reduced() ? 0 : 750);
}
function showWho(){
  $("#intro").hidden = true; $("#app").hidden = true; $("#menu").hidden = true;
  const who = $("#who"); who.hidden = false; document.body.classList.add("locked");
  $$(".avatar", who).forEach(a=>a.style.viewTransitionName="");
  $(".profile", who)?.focus({preventScroll:true});
}
function avatarInner(p){ return p.photo ? `<img src="${photo("avatar")}" alt="">` : esc(p.glyph || p.letter); }
function buildProfiles(){
  $("#profiles").innerHTML = Object.entries(PROFILES).map(([k,p]) =>
    `<button class="profile" data-profile="${k}"><span class="avatar ${p.cls}">${avatarInner(p)}${p.tag?`<span class="av-tag">${p.tag}</span>`:""}</span><b>${p.label}</b><em>${p.note}</em></button>`).join("");
}

/* ---------- Main app ---------- */
function enter(profile, fromEl){
  const next = PROFILES[profile] ? profile : "recruiter";
  // the chosen avatar becomes the small one in the nav
  const av = fromEl?.querySelector(".avatar");
  if (av) av.style.viewTransitionName = "me-avatar";
  $("#menu").hidden = true; $("#whoBtn").setAttribute("aria-expanded","false");
  vt(()=>{
    if (av) av.style.viewTransitionName = "";
    current = next; store.set("rk-profile", current);
    ["intro","who"].forEach(id=>$("#"+id).hidden = true);
    document.body.classList.remove("locked");
    $("#app").hidden = false;
    renderApp();
    $("#whoMini").style.viewTransitionName = "me-avatar";
    window.scrollTo(0,0);
    if (location.hash !== "#"+current) history.replaceState(null,"","#"+current);
  }).then(()=>{ $("#whoMini").style.viewTransitionName = ""; });
  // play the billboard entrance once the swap is under way
  const app = $("#app"); app.classList.remove("entered"); void app.offsetWidth; app.classList.add("entered");
}

function renderApp(){
  const p = PROFILES[current];
  $("#whoMini").className = "mini " + p.cls; $("#whoMini").innerHTML = p.photo ? `<img src="${photo("avatar")}" alt="">` : esc(p.letter);
  $("#synopsis").textContent = DATA.synopsis;
  $("#bbImg").src = photo("hero");
  $("#contTitle").textContent = `Continue exploring as ${p.label}`;
  setResumeLinks();

  $("#navLinks").innerHTML = p.order.map(k=>`<li><a href="#${k}" data-goto="${k}">${SECTIONS[k].nav}</a></li>`).join("") + `<li><a href="#contact" data-goto="contact">Contact</a></li>`;

  const prog = {story:72,originals:45,skills:88,awards:60,journey:35,about:92,picks:20};
  $("#cont").innerHTML = p.order.map((k,i)=>{ const s=SECTIONS[k]; return `<button class="tile" data-goto="${k}">
      <span class="art" style="background:${s.photo?`${bg(null,s.photo)} center 22%/cover`:ART[s.art]}"></span><span class="shade"></span>
      <span class="ep">EPISODE ${String(i+1).padStart(2,"0")}</span>
      <span class="t">${s.label}</span><span class="hint">${s.hint}</span>
      <span class="bar"><i style="width:${prog[k]}%"></i></span></button>`; }).join("");

  const main = $("#sections"); main.innerHTML = "";
  p.order.forEach(k => main.insertAdjacentHTML("beforeend", RENDER[k]()));

  $("#menu").innerHTML = Object.entries(PROFILES).map(([k,q])=>`<button data-profile="${k}"><span class="mini ${q.cls}">${q.photo?`<img src="${photo("avatar")}" alt="">`:esc(q.letter)}</span>${q.label}${k===current?" · watching":""}</button>`).join("")
    + `<hr><button data-act="who">Back to Who's watching</button><button data-act="intro">Replay intro</button>`;

  $("#outroActs").innerHTML = `
    <a class="btn btn-red" href="mailto:${DATA.email}?subject=${encodeURIComponent("Opportunity for Rishabh")}">${ICON.mail}Email me</a>
    <a class="btn btn-ghost" href="${DATA.linkedin}" target="_blank" rel="noopener">${ICON.in}LinkedIn</a>
    <a class="btn btn-ghost" href="${DATA.github}" target="_blank" rel="noopener">${ICON.gh}GitHub</a>
    <a class="btn btn-light" data-resume href="${RESUME_HREF}" target="_blank" rel="noopener">${ICON.dl}Resume PDF</a>`;
  $("#outroCopy").innerHTML = `<div><small>Email</small><div class="copy">${copyHTML(DATA.email)}</div></div><div><small>Phone</small><div class="copy">${copyHTML(DATA.phone)}</div></div>`;

  requestAnimationFrame(()=>{ renderSkills(0,true); renderSeason(DATA.seasons.length-1,true); setupReveal(); onScroll(); });
}

function copyHTML(text){ return `<span>${esc(text)}</span><button data-copy="${esc(text)}">Copy</button>`; }
const rv = i => `class="rv" data-rv style="--i:${i}"`;

const RENDER = {
  story(){
    const e = DATA.experience[0];
    return `<section id="story" class="wrap">
      <div class="sec-head" data-rv><div class="eyebrow">The screenplay</div><h2 class="sec-title">The Full Story</h2>
      <p class="lede">The resume, written the way a story is written. Everything here is on the one-page PDF too.</p></div>
      <div class="story">
        <article class="script" data-rv aria-label="Resume as a screenplay">
          <span class="draft">FINAL DRAFT · 2026</span>
          <h4>${esc(DATA.name.toUpperCase())}</h4>
          <div class="by">a true story · ${esc(DATA.location)}</div>
          <p class="slug">FADE IN:</p>
          <p class="act">${esc(DATA.summary)}</p>
          <p class="slug">INT. ${esc(e.company.toUpperCase())} – ${esc(e.place.toUpperCase())} – ${esc(e.when.toUpperCase())}</p>
          <p class="act">${esc(DATA.first)} works as ${esc(e.role)}.</p>
          <ul>${e.points.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
          <p class="slug">INT. PROJECT LAB – NIGHT</p>
          ${DATA.projects.map(pr=>`<p class="char">${esc(pr.title)}</p><p class="paren">(${esc(pr.tags.join(", "))} · ${esc(pr.when)})</p><p class="dlg">${esc(pr.episodes[pr.episodes.length-1])}</p>`).join("")}
          <p class="slug">EXT. UNITED INSTITUTE OF TECHNOLOGY, AKTU – PRAYAGRAJ – 2022 – 2026</p>
          <p class="act">B.Tech in Computer Science &amp; Engineering, 81.09%. Earlier: Intermediate at Erny Memorial School (78.21%) and High School at Bishop Johnson School (88.67%).</p>
          <p class="slug">MONTAGE – CERTIFICATIONS &amp; ACHIEVEMENTS</p>
          <ul>${DATA.certs.map(c=>`<li>${esc(c.name)} – ${esc(c.by)}, ${c.year}</li>`).join("")}<li>2nd Place – Cybersecurity Challenge, MNNIT, 2025</li></ul>
          <p class="trans">TO BE CONTINUED.</p>
        </article>
        <aside class="side">
          <div class="card" ${rv(1)}><h5>At a glance</h5>
            <div class="stats"><div><b>81%</b><span>B.Tech CSE</span></div><div><b>2</b><span>ML projects</span></div><div><b>4</b><span>awards &amp; certs</span></div></div></div>
          <div class="card" ${rv(2)}><h5>Details</h5><dl class="kv">
            <dt>Now</dt><dd>VKYC Associate, Navi</dd><dt>Based</dt><dd>Bengaluru</dd><dt>Degree</dt><dd>B.Tech CSE, 2026</dd><dt>Languages</dt><dd>English, Hindi</dd></dl></div>
          <div class="card" ${rv(3)}><h5>Reach out</h5><div class="stack">
            <a class="btn btn-light" data-resume href="${RESUME_HREF}" target="_blank" rel="noopener">${ICON.dl}Download resume (PDF)</a>
            <div class="copy">${copyHTML(DATA.email)}</div>
            <div class="copy">${copyHTML(DATA.phone)}</div>
            <a class="btn btn-ghost" href="${DATA.linkedin}" target="_blank" rel="noopener">${ICON.in}LinkedIn</a>
            <a class="btn btn-ghost" href="${DATA.github}" target="_blank" rel="noopener">${ICON.gh}GitHub</a>
          </div></div>
        </aside>
      </div></section>`;
  },
  originals(){
    return `<section id="originals" class="wrap">
      <div class="sec-head" data-rv><div class="eyebrow">Originals</div><h2 class="sec-title">Projects</h2><p class="lede">Two machine-learning stories. Open one to see every episode.</p></div>
      <div class="posters">${DATA.projects.map((p,i)=>`<button class="poster" data-project="${p.id}" ${rv(i)}>
        <span class="art" style="background:${ART[p.art]}"></span><span class="glyph" aria-hidden="true">${p.glyph}</span>
        <span class="body">
          <span class="badge"><i>R</i> ORIGINAL · ${esc(p.genre.toUpperCase())} · ${esc(p.when.toUpperCase())}</span>
          <h3>${esc(p.title)}</h3><p>${esc(p.logline)}</p>
          <span class="tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join("")}</span>
          <span class="more"><span class="tri"></span> Watch the episodes</span>
        </span></button>`).join("")}</div></section>`;
  },
  skills(){
    return `<section id="skills" class="wrap">
      <div class="sec-head" data-rv><div class="eyebrow">Genres</div><h2 class="sec-title">My Skill Universe</h2></div>
      <div class="universe" data-rv>
        <div class="cats tabs" role="tablist" aria-label="Skill categories"><span class="ind"></span>${DATA.skills.map((c,i)=>`<button class="cat" role="tab" aria-selected="${i===0}" data-cat="${i}"><b>${esc(c.name)}</b><span>${c.items.length} skills · ${esc(c.note)}</span></button>`).join("")}</div>
        <div class="skill-panel" id="skillPanel" role="tabpanel"></div>
      </div></section>`;
  },
  awards(){
    const leaf = (x,y,r) => `<ellipse cx="${x}" cy="${y}" rx="7" ry="3.2" transform="rotate(${r} ${x} ${y})" fill="#d8ad55" fill-opacity=".25"/>`;
    const laurel = `<svg viewBox="0 0 120 56" aria-hidden="true" fill="none" stroke="#d8ad55" stroke-width="1.6">${[0,1,2,3,4].map(i=>leaf(22+i*2,8+i*9,-40+i*12)+leaf(98-i*2,8+i*9,40-i*12)).join("")}<path d="M30 8 Q22 30 40 52"/><path d="M90 8 Q98 30 80 52"/></svg>`;
    return `<section id="awards" class="wrap">
      <div class="sec-head" data-rv><div class="eyebrow">Award season</div><h2 class="sec-title">Top Moments</h2></div>
      <div class="awards">${DATA.awards.map((a,i)=>`<div class="award" ${rv(i)}>${laurel}<span class="sel">${esc(a.sel)}</span><b>${esc(a.big)}</b><span>${esc(a.sub)}</span></div>`).join("")}</div>
      <div class="certs-head" data-rv><h3>Certified</h3><span>${DATA.certs.length} credentials</span></div>
      <div class="rail" data-rv style="margin-left:calc(-1 * max(var(--pad-x), env(safe-area-inset-left,0px)));margin-right:calc(-1 * max(var(--pad-x), env(safe-area-inset-right,0px)))">
        ${DATA.certs.map(c=>`<div class="cert"><span class="yr">${c.year} · ${esc(c.by.toUpperCase())}</span><b>${esc(c.name)}</b><span class="iss">Issued by ${esc(c.by)}</span></div>`).join("")}
      </div></section>`;
  },
  journey(){
    return `<section id="journey" class="wrap">
      <div class="sec-head" data-rv><div class="eyebrow">${DATA.seasons.length} seasons</div><h2 class="sec-title">My Journey</h2></div>
      <div class="seasons tabs" role="tablist" aria-label="Seasons" data-rv><span class="ind"></span>${DATA.seasons.map((s,i)=>`<button class="season" role="tab" data-season="${i}" aria-selected="${i===DATA.seasons.length-1}">Season ${i+1}</button>`).join("")}</div>
      <div id="seasonPanel" role="tabpanel" data-rv></div></section>`;
  },
  about(){
    return `<section id="about" class="wrap">
      <div class="sec-head" data-rv><div class="eyebrow">The lead</div><h2 class="sec-title">About Me</h2></div>
      <div class="about">
        <figure class="portrait" data-rv style="margin:0"><img src="${photo("about")}" alt="Rishabh Kushwaha in a dark suit" loading="lazy" id="aboutImg"><figcaption>Rishabh Kushwaha · Bengaluru</figcaption></figure>
        <div>
          <p class="quote" data-rv>${esc(DATA.summary)}</p>
          <dl class="facts">
            <div ${rv(0)}><dt>Currently</dt><dd>VKYC Associate at Navi</dd></div>
            <div ${rv(1)}><dt>Based in</dt><dd>${esc(DATA.location)}</dd></div>
            <div ${rv(2)}><dt>From</dt><dd>${esc(DATA.hometown)}</dd></div>
            <div ${rv(3)}><dt>Speaks</dt><dd>English, Hindi</dd></div>
          </dl>
        </div>
      </div></section>`;
  },
  picks(){
    return `<section id="picks" class="wrap">
      <div class="sec-head" data-rv><div class="eyebrow">Because you watched</div><h2 class="sec-title">${esc(DATA.first)}'s Top Picks</h2><p class="lede">Three sides of the same person. Pick the one your team needs.</p></div>
      <div class="picks">${DATA.picks.map((p,i)=>`<button class="pick" data-pick="${i}" ${rv(i)}>
        <span class="art" style="background:${ART[p.art]}"><small>${esc(p.tag.toUpperCase())}</small><b>${esc(p.title)}</b></span>
        <span class="txt"><p>${esc(p.line)}</p><span class="tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join("")}</span></span></button>`).join("")}</div></section>`;
  }
};

/* ---------- Tabs ---------- */
function moveInd(tabs, btn){
  if (!tabs || !btn) return;
  const ind = $(".ind", tabs); if(!ind || !btn) return;
  const horizontal = getComputedStyle(tabs).flexDirection === "row";
  if (horizontal){ ind.style.height = ""; ind.style.width = btn.offsetWidth + "px"; ind.style.transform = `translateX(${btn.offsetLeft}px)`; }
  else { ind.style.width = ""; ind.style.height = btn.offsetHeight + "px"; ind.style.transform = `translateY(${btn.offsetTop}px)`; }
}
function swapIn(panel, html, first){
  panel.innerHTML = html;
  if (!first && !reduced() && panel.animate) panel.animate([{opacity:0,transform:"translateY(10px)"},{opacity:1,transform:"none"}],{duration:450,easing:"cubic-bezier(.16,1,.3,1)"});
}
function renderSkills(i, first){
  const c = DATA.skills[i]; const panel = $("#skillPanel"); if(!panel) return;
  const ab = s => s.replace(/[^A-Za-z0-9 &]/g,"").split(/\s+/).filter(w=>w&&w!=="&").map(w=>w[0]).join("").slice(0,2).toUpperCase();
  swapIn(panel, `<p class="lede">${esc(c.name)} · ${c.items.length} skills</p><div class="skills">${c.items.map(s=>`<div class="skill"><span class="ab" style="background:${c.color}">${esc(ab(s))}</span><b>${esc(s)}</b></div>`).join("")}</div>`, first);
  $$(".cat").forEach(b=>b.setAttribute("aria-selected", b.dataset.cat==String(i)));
  moveInd($(".cats"), $(`.cat[data-cat="${i}"]`));
}
function renderSeason(i, first){
  const s = DATA.seasons[i]; const panel = $("#seasonPanel"); if(!panel) return;
  const art = s.photo ? `<img src="${photo(s.photo)}" alt="" loading="lazy">` : "";
  swapIn(panel, `<div class="season-body">
      <div class="season-art" style="background:${s.photo?"var(--panel)":ART[s.art]}">${art}<small>${s.caption?esc(s.caption.toUpperCase()):`SEASON ${i+1}`}</small><b>S${i+1}</b></div>
      <div><div class="season-desc"><h3>${esc(s.title)}${s.now?'<span class="now">NOW STREAMING</span>':""}</h3><span>${esc(s.span)} · ${s.eps.length} episode${s.eps.length>1?"s":""}</span></div>
      <div class="eps">${s.eps.map((e,j)=>`<div class="epi"><span class="num">${j+1}</span>
        <div><h4>${esc(e.t)}${e.now?'<span class="now">LIVE</span>':""}</h4><p>${esc(e.d)}</p></div><span class="when">${esc(e.w)}</span></div>`).join("")}</div></div></div>`, first);
  $$(".season").forEach(b=>b.setAttribute("aria-selected", b.dataset.season==String(i)));
  moveInd($(".seasons"), $(`.season[data-season="${i}"]`));
}
addEventListener("resize", ()=>{
  moveInd($(".cats"), $('.cat[aria-selected="true"]')); moveInd($(".seasons"), $('.season[aria-selected="true"]'));
});

/* ---------- Reveal: only things below the fold wait for the scroll ---------- */
let io;
function setupReveal(){
  io?.disconnect();
  const els = [...$$("[data-rv]"), $("#tbc")].filter(Boolean);
  if (reduced() || !("IntersectionObserver" in window)) return;
  io = new IntersectionObserver(entries=>entries.forEach(en=>{
    if (en.isIntersecting){ en.target.classList.remove("pre"); io.unobserve(en.target); }
  }), {rootMargin:"0px 0px -8% 0px", threshold:.08});
  els.forEach(el=>{
    if (el.getBoundingClientRect().top < innerHeight) return;
    el.classList.add("rv","pre"); io.observe(el);
  });
}

/* ---------- Scroll: nav state, progress, parallax, active link ---------- */
let lastY = 0, ticking = false;
function onScroll(){
  const y = scrollY, nav = $("#nav");
  nav.classList.toggle("solid", y > 40);
  nav.classList.toggle("tucked", y > 500 && y > lastY + 2 && $("#menu").hidden);
  if (y < lastY - 2) nav.classList.remove("tucked");
  lastY = y;
  const max = document.documentElement.scrollHeight - innerHeight;
  nav.style.setProperty("--prog", max > 0 ? (y / max).toFixed(4) : 0);
  if (!reduced()){
    const bb = $("#top"); if (bb) bb.style.setProperty("--p", Math.min(y / bb.offsetHeight, 1).toFixed(3));
    const ai = $("#aboutImg"); if (ai){ const r = ai.parentElement.getBoundingClientRect(); ai.parentElement.style.setProperty("--pp", ((innerHeight/2 - (r.top + r.height/2)) / innerHeight).toFixed(3)); }
  }
  let on = null;
  $$("main > section, #contact").forEach(s=>{ if (s.getBoundingClientRect().top < innerHeight * .4) on = s.id; });
  $$("#navLinks a").forEach(a=>a.classList.toggle("on", a.dataset.goto === on));
}
addEventListener("scroll", ()=>{ if(!ticking){ ticking = true; requestAnimationFrame(()=>{ onScroll(); ticking = false; }); } }, {passive:true});

/* ---------- Modal (opens out of the card that was clicked) ---------- */
let lastFocus = null, sourceArt = null;
function openModal(html, srcArt){
  lastFocus = document.activeElement; sourceArt = srcArt;
  if (srcArt) srcArt.style.viewTransitionName = "sheet-hero";
  const t = vt(()=>{
    if (srcArt) srcArt.style.viewTransitionName = "";
    $("#modalRoot").innerHTML = `<div class="modal" id="modal"><div class="sheet" role="dialog" aria-modal="true">${html}<button class="close" aria-label="Close" data-close>×</button></div></div>`;
    $("#modal .hero").style.viewTransitionName = "sheet-hero";
    document.body.classList.add("locked");
  });
  t.then(()=>{ const h=$("#modal .hero"); if(h) h.style.viewTransitionName=""; $("#modal .close")?.focus({preventScroll:true}); });
  if (!document.startViewTransition && !reduced()) $("#modal .sheet")?.animate([{opacity:0,transform:"translateY(24px) scale(.98)"},{opacity:1,transform:"none"}],{duration:450,easing:"cubic-bezier(.16,1,.3,1)"});
}
function closeModal(){
  if(!$("#modal")) return;
  const hero = $("#modal .hero"), src = sourceArt;
  if (hero && src) hero.style.viewTransitionName = "sheet-hero";
  vt(()=>{
    $("#modalRoot").innerHTML = "";
    if (src) src.style.viewTransitionName = "sheet-hero";
    if ($("#who").hidden && $("#intro").hidden) document.body.classList.remove("locked");
  }).then(()=>{ if (src) src.style.viewTransitionName = ""; lastFocus?.focus?.({preventScroll:true}); });
}
function projectModal(id, btn){
  const p = DATA.projects.find(x=>x.id===id); if(!p) return;
  openModal(`<div class="hero" style="background:${ART[p.art]}"><h3>${esc(p.title)}</h3></div>
    <div class="inner"><div>
      <div class="meta"><span class="match">${esc(p.genre)}</span><span>${esc(p.when)}</span><span class="chip">ML</span></div>
      <p style="margin-top:12px">${esc(p.logline)}</p>
      <ol>${p.episodes.map((e,i)=>`<li><b>${i+1}</b><span>${esc(e)}</span></li>`).join("")}</ol>
    </div>
    <div class="aside">${p.facts.map(f=>`<div>${esc(f[0])}: <span>${esc(f[1])}</span></div>`).join("")}<div>Stack: <span>${esc(p.tags.join(", "))}</span></div>
    <a class="btn btn-ghost" href="${DATA.github}" target="_blank" rel="noopener" style="justify-content:center;margin-top:6px">${ICON.gh}More on GitHub</a></div></div>`, $(".art", btn));
}
function pickModal(i, btn){
  const p = DATA.picks[i];
  openModal(`<div class="hero" style="background:${ART[p.art]}"><h3>${esc(p.title)}</h3></div>
    <div class="inner"><div><p>${esc(p.detail)}</p><ol>${p.list.map((e,j)=>`<li><b>${j+1}</b><span>${esc(e)}</span></li>`).join("")}</ol></div>
    <div class="aside"><div>Genre: <span>${esc(p.tags.join(", "))}</span></div><button class="btn btn-red" data-goto="contact" style="justify-content:center">Cast ${esc(DATA.first)} in this role</button></div></div>`, $(".art", btn));
}

/* ---------- Misc ---------- */
function toast(msg){ const t=document.createElement("div"); t.className="toast"; t.textContent=msg; document.body.appendChild(t); setTimeout(()=>t.remove(),1800); }
function goTo(id){
  const go = ()=>{ $("#menu").hidden = true; const el = document.getElementById(id); if(!el) return;
    if (id==="top") return scrollTo({top:0,behavior:reduced()?"auto":"smooth"});
    el.scrollIntoView({behavior: reduced() ? "auto":"smooth", block:"start"}); };
  if ($("#modal")) { $("#modalRoot").innerHTML=""; document.body.classList.remove("locked"); }
  go();
}
function selectText(btn){ const span = btn.previousElementSibling; const r=document.createRange(); r.selectNodeContents(span); const s=getSelection(); s.removeAllRanges(); s.addRange(r); toast("Selected. Press Ctrl+C to copy"); }

document.addEventListener("click", e=>{
  const t = e.target.closest("button, a");
  if(!t){ if(e.target.id==="modal") closeModal(); return; }
  if (t.id==="playBtn") return playIntro();
  if (t.id==="skipIntro") { $("#intro").hidden = true; return showWho(); }
  if (t.dataset.profile) return enter(t.dataset.profile, t.closest(".profile"));
  if (t.dataset.goto){ e.preventDefault(); return goTo(t.dataset.goto); }
  if (t.dataset.project) return projectModal(t.dataset.project, t);
  if (t.dataset.pick) return pickModal(+t.dataset.pick, t);
  if (t.dataset.cat) return renderSkills(+t.dataset.cat);
  if (t.dataset.season) return renderSeason(+t.dataset.season);
  if (t.hasAttribute("data-close")) return closeModal();
  if (t.dataset.rail){ const r=$("#"+t.dataset.rail); r.scrollBy({left:r.clientWidth*.8*(+t.dataset.dir),behavior:"smooth"}); return; }
  if (t.dataset.copy){
    const ok = ()=>{ t.textContent="Copied"; setTimeout(()=>t.textContent="Copy",1500); };
    try { navigator.clipboard.writeText(t.dataset.copy).then(ok, ()=>selectText(t)); } catch(err){ selectText(t); }
    return;
  }
  if (t.id==="whoBtn"){ const m=$("#menu"); m.hidden=!m.hidden; t.setAttribute("aria-expanded", String(!m.hidden)); return; }
  if (t.dataset.act==="who") return showWho();
  if (t.dataset.act==="intro"){ $("#menu").hidden=true; return showIntro(); }
});
document.addEventListener("keydown", e=>{
  if (e.key==="Escape"){ closeModal(); $("#menu").hidden = true; $("#whoBtn")?.setAttribute("aria-expanded","false"); }
});
document.addEventListener("click", e=>{ if(!e.target.closest("#menu, #whoBtn")){ $("#menu").hidden = true; $("#whoBtn")?.setAttribute("aria-expanded","false"); } }, true);

/* ---------- Boot ---------- */
function boot(){
  buildProfiles();
  resolveResume();
  [DATA.photos.hero, DATA.photos.avatar].forEach(src=>{ const i=new Image(); i.src=src; });   // warm the cache during the intro
  const h = location.hash.slice(1);
  if (PROFILES[h]) return enter(h);       // share …#recruiter to open straight in recruiter mode
  showIntro();
}
addEventListener("hashchange", ()=>{ const h=location.hash.slice(1); if (PROFILES[h] && h!==current) enter(h); });
boot();
