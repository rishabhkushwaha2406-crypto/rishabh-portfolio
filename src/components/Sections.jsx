import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ART, DATA } from '../data'
import { photo, reduced, skillAbbr } from '../lib'
import { IconDownload, IconGitHub, IconLinkedIn } from '../icons'
import CopyField from './CopyField'

function Laurel() {
  const leaf = (x, y, r, key) => (
    <ellipse
      key={key}
      cx={x}
      cy={y}
      rx="7"
      ry="3.2"
      transform={`rotate(${r} ${x} ${y})`}
      fill="#d8ad55"
      fillOpacity=".25"
    />
  )
  return (
    <svg viewBox="0 0 120 56" aria-hidden="true" fill="none" stroke="#d8ad55" strokeWidth="1.6">
      {[0, 1, 2, 3, 4].map((i) => [
        leaf(22 + i * 2, 8 + i * 9, -40 + i * 12, `l-${i}`),
        leaf(98 - i * 2, 8 + i * 9, 40 - i * 12, `r-${i}`),
      ])}
      <path d="M30 8 Q22 30 40 52" />
      <path d="M90 8 Q98 30 80 52" />
    </svg>
  )
}

function useTabIndicator(containerRef, selectedSelector) {
  const move = () => {
    const tabs = containerRef.current
    if (!tabs) return
    const ind = tabs.querySelector('.ind')
    const btn = tabs.querySelector(selectedSelector)
    if (!ind || !btn) return
    const horizontal = getComputedStyle(tabs).flexDirection === 'row'
    if (horizontal) {
      ind.style.height = ''
      ind.style.width = `${btn.offsetWidth}px`
      ind.style.transform = `translateX(${btn.offsetLeft}px)`
    } else {
      ind.style.width = ''
      ind.style.height = `${btn.offsetHeight}px`
      ind.style.transform = `translateY(${btn.offsetTop}px)`
    }
  }

  useLayoutEffect(() => {
    move()
    const onResize = () => move()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  })

  return move
}

function StorySection() {
  const e = DATA.experience[0]
  return (
    <section id="story" className="wrap">
      <div className="sec-head" data-rv>
        <div className="eyebrow">The screenplay</div>
        <h2 className="sec-title">The Full Story</h2>
        <p className="lede">The resume, written the way a story is written. Everything here is on the one-page PDF too.</p>
      </div>
      <div className="story">
        <article className="script" data-rv aria-label="Resume as a screenplay">
          <span className="draft">FINAL DRAFT · 2026</span>
          <h4>{DATA.name.toUpperCase()}</h4>
          <div className="by">a true story · {DATA.location}</div>
          <p className="slug">FADE IN:</p>
          <p className="act">{DATA.summary}</p>
          <p className="slug">
            INT. {e.company.toUpperCase()} – {e.place.toUpperCase()} – {e.when.toUpperCase()}
          </p>
          <p className="act">
            {DATA.first} works as {e.role}.
          </p>
          <ul>
            {e.points.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <p className="slug">INT. PROJECT LAB – NIGHT</p>
          {DATA.projects.map((pr) => (
            <div key={pr.id}>
              <p className="char">{pr.title}</p>
              <p className="paren">
                ({pr.tags.join(', ')} · {pr.when})
              </p>
              <p className="dlg">{pr.episodes[pr.episodes.length - 1]}</p>
            </div>
          ))}
          <p className="slug">EXT. UNITED INSTITUTE OF TECHNOLOGY, AKTU – PRAYAGRAJ – 2022 – 2026</p>
          <p className="act">
            B.Tech in Computer Science &amp; Engineering, 81.09%. Earlier: Intermediate at Erny Memorial School
            (78.21%) and High School at Bishop Johnson School (88.67%).
          </p>
          <p className="slug">MONTAGE – CERTIFICATIONS &amp; ACHIEVEMENTS</p>
          <ul>
            {DATA.certs.map((c) => (
              <li key={c.name}>
                {c.name} – {c.by}, {c.year}
              </li>
            ))}
            <li>2nd Place – Cybersecurity Challenge, MNNIT, 2025</li>
          </ul>
          <p className="trans">TO BE CONTINUED.</p>
        </article>
        <aside className="side">
          <div className="card" data-rv style={{ '--i': 1 }}>
            <h5>At a glance</h5>
            <div className="stats">
              <div>
                <b>81%</b>
                <span>B.Tech CSE</span>
              </div>
              <div>
                <b>3</b>
                <span>live projects</span>
              </div>
              <div>
                <b>4</b>
                <span>awards &amp; certs</span>
              </div>
            </div>
          </div>
          <div className="card" data-rv style={{ '--i': 2 }}>
            <h5>Details</h5>
            <dl className="kv">
              <dt>Now</dt>
              <dd>VKYC Associate, Navi</dd>
              <dt>Based</dt>
              <dd>Bengaluru</dd>
              <dt>Degree</dt>
              <dd>B.Tech CSE, 2026</dd>
              <dt>Languages</dt>
              <dd>English, Hindi</dd>
            </dl>
          </div>
          <div className="card" data-rv style={{ '--i': 3 }}>
            <h5>Reach out</h5>
            <div className="stack">
              <a className="btn btn-light" href={DATA.resumePdf} target="_blank" rel="noopener">
                <IconDownload />
                Download resume (PDF)
              </a>
              <CopyField text={DATA.email} />
              <CopyField text={DATA.phone} />
              <a className="btn btn-ghost" href={DATA.linkedin} target="_blank" rel="noopener">
                <IconLinkedIn />
                LinkedIn
              </a>
              <a className="btn btn-ghost" href={DATA.github} target="_blank" rel="noopener">
                <IconGitHub />
                GitHub
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

function OriginalsSection({ onOpenProject }) {
  return (
    <section id="originals" className="wrap">
      <div className="sec-head" data-rv>
        <div className="eyebrow">Originals</div>
        <h2 className="sec-title">Projects</h2>
        <p className="lede">Three live stories. Open one to play the episode.</p>
      </div>
      <div className="posters">
        {DATA.projects.map((p, i) => (
          <div className="poster-wrap" key={p.id}>
          <button
            className="poster"
            type="button"
            data-rv
            style={{ '--i': i }}
            onClick={(e) => onOpenProject(p.id, e.currentTarget)}
          >
            <span className="art" style={{ background: ART[p.art] }} />
            <span className="glyph" aria-hidden="true">
              {p.glyph}
            </span>
            <span className="body">
              <span className="badge">
                <i>R</i> ORIGINAL · {p.genre.toUpperCase()} · {p.when.toUpperCase()}
              </span>
              <h3>{p.title}</h3>
              <p>{p.logline}</p>
              {p.result ? <span className="poster-result">{p.result}</span> : null}
              <span className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </span>
              <span className="more">
                <span className="tri" /> {p.liveUrl ? 'Play episode' : 'Watch the episodes'}
              </span>
            </span>
          </button>
          {p.liveUrl ? (
            <a className="poster-live" href={p.liveUrl} target="_blank" rel="noopener">
              Live demo · {p.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </a>
          ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}

function SkillsSection() {
  const [active, setActive] = useState(0)
  const catsRef = useRef(null)
  useTabIndicator(catsRef, '.cat[aria-selected="true"]')
  const c = DATA.skills[active]

  useEffect(() => {
    const panel = document.getElementById('skillPanel')
    if (!panel || reduced() || !panel.animate) return
    panel.animate(
      [
        { opacity: 0, transform: 'translateY(10px)' },
        { opacity: 1, transform: 'none' },
      ],
      { duration: 450, easing: 'cubic-bezier(.16,1,.3,1)' },
    )
  }, [active])

  return (
    <section id="skills" className="wrap">
      <div className="sec-head" data-rv>
        <div className="eyebrow">Genres</div>
        <h2 className="sec-title">My Skill Universe</h2>
      </div>
      <div className="universe" data-rv>
        <div className="cats tabs" role="tablist" aria-label="Skill categories" ref={catsRef}>
          <span className="ind" />
          {DATA.skills.map((cat, i) => (
            <button
              key={cat.name}
              className="cat"
              role="tab"
              type="button"
              aria-selected={i === active}
              onClick={() => setActive(i)}
            >
              <b>{cat.name}</b>
              <span>
                {cat.items.length} skills · {cat.note}
              </span>
            </button>
          ))}
        </div>
        <div className="skill-panel" id="skillPanel" role="tabpanel">
          <p className="lede">
            {c.name} · {c.items.length} skills
          </p>
          <div className="skills">
            {c.items.map((s) => (
              <div className="skill" key={s}>
                <span className="ab" style={{ background: c.color }}>
                  {skillAbbr(s)}
                </span>
                <b>{s}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AwardsSection() {
  return (
    <section id="awards" className="wrap">
      <div className="sec-head" data-rv>
        <div className="eyebrow">Award season</div>
        <h2 className="sec-title">Top Moments</h2>
      </div>
      <div className="awards">
        {DATA.awards.map((a, i) => (
          <div className="award" key={a.big} data-rv style={{ '--i': i }}>
            <Laurel />
            <span className="sel">{a.sel}</span>
            <b>{a.big}</b>
            <span>{a.sub}</span>
          </div>
        ))}
      </div>
      <div className="certs-head" data-rv>
        <h3>Certified</h3>
        <span>{DATA.certs.length} credentials</span>
      </div>
      <div
        className="rail"
        data-rv
        style={{
          marginLeft: 'calc(-1 * max(var(--pad-x), env(safe-area-inset-left,0px)))',
          marginRight: 'calc(-1 * max(var(--pad-x), env(safe-area-inset-right,0px)))',
        }}
      >
        {DATA.certs.map((c) => (
          <div className="cert" key={c.name}>
            <span className="yr">
              {c.year} · {c.by.toUpperCase()}
            </span>
            <b>{c.name}</b>
            <span className="iss">Issued by {c.by}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function JourneySection() {
  const last = DATA.seasons.length - 1
  const [active, setActive] = useState(last)
  const seasonsRef = useRef(null)
  useTabIndicator(seasonsRef, '.season[aria-selected="true"]')
  const s = DATA.seasons[active]

  useEffect(() => {
    const panel = document.getElementById('seasonPanel')
    if (!panel || reduced() || !panel.animate) return
    panel.animate(
      [
        { opacity: 0, transform: 'translateY(10px)' },
        { opacity: 1, transform: 'none' },
      ],
      { duration: 450, easing: 'cubic-bezier(.16,1,.3,1)' },
    )
  }, [active])

  return (
    <section id="journey" className="wrap">
      <div className="sec-head" data-rv>
        <div className="eyebrow">{DATA.seasons.length} seasons</div>
        <h2 className="sec-title">My Journey</h2>
      </div>
      <div className="seasons tabs" role="tablist" aria-label="Seasons" data-rv ref={seasonsRef}>
        <span className="ind" />
        {DATA.seasons.map((_, i) => (
          <button
            key={i}
            className="season"
            role="tab"
            type="button"
            aria-selected={i === active}
            onClick={() => setActive(i)}
          >
            Season {i + 1}
          </button>
        ))}
      </div>
      <div id="seasonPanel" role="tabpanel" data-rv>
        <div className="season-body">
          <div
            className="season-art"
            style={{ background: s.photo ? 'var(--panel)' : ART[s.art] }}
          >
            {s.photo ? <img src={photo(s.photo)} alt="" loading="lazy" /> : null}
            <small>{s.caption ? s.caption.toUpperCase() : `SEASON ${active + 1}`}</small>
            <b>S{active + 1}</b>
          </div>
          <div>
            <div className="season-desc">
              <h3>
                {s.title}
                {s.now ? <span className="now">NOW STREAMING</span> : null}
              </h3>
              <span>
                {s.span} · {s.eps.length} episode{s.eps.length > 1 ? 's' : ''}
              </span>
            </div>
            <div className="eps">
              {s.eps.map((e, j) => (
                <div className="epi" key={`${e.t}-${j}`}>
                  <span className="num">{j + 1}</span>
                  <div>
                    <h4>
                      {e.t}
                      {e.now ? <span className="now">LIVE</span> : null}
                    </h4>
                    <p>{e.d}</p>
                  </div>
                  <span className="when">{e.w}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection({ aboutParallax }) {
  return (
    <section id="about" className="wrap">
      <div className="sec-head" data-rv>
        <div className="eyebrow">The lead</div>
        <h2 className="sec-title">About Me</h2>
      </div>
      <div className="about">
        <figure className="portrait" data-rv style={{ margin: 0, '--pp': aboutParallax }}>
          <img src={photo('about')} alt="Rishabh Kushwaha in a suit" loading="lazy" id="aboutImg" />
          <figcaption>Rishabh Kushwaha · Bengaluru</figcaption>
        </figure>
        <div>
          <p className="quote" data-rv>
            {DATA.summary}
          </p>
          <dl className="facts">
            <div data-rv style={{ '--i': 0 }}>
              <dt>Currently</dt>
              <dd>VKYC Associate at Navi</dd>
            </div>
            <div data-rv style={{ '--i': 1 }}>
              <dt>Based in</dt>
              <dd>{DATA.location}</dd>
            </div>
            <div data-rv style={{ '--i': 2 }}>
              <dt>From</dt>
              <dd>{DATA.hometown}</dd>
            </div>
            <div data-rv style={{ '--i': 3 }}>
              <dt>Speaks</dt>
              <dd>English, Hindi</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

function PicksSection({ onOpenPick }) {
  return (
    <section id="picks" className="wrap">
      <div className="sec-head" data-rv>
        <div className="eyebrow">Because you watched</div>
        <h2 className="sec-title">{DATA.first}&apos;s Top Picks</h2>
        <p className="lede">Three sides of the same person. Pick the one your team needs.</p>
      </div>
      <div className="picks">
        {DATA.picks.map((p, i) => (
          <button
            key={p.title}
            className="pick"
            type="button"
            data-rv
            style={{ '--i': i }}
            onClick={(e) => onOpenPick(i, e.currentTarget)}
          >
            <span className="art" style={{ background: ART[p.art] }}>
              <small>{p.tag.toUpperCase()}</small>
              <b>{p.title}</b>
            </span>
            <span className="txt">
              <p>{p.line}</p>
              <span className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </span>
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}

const SECTION_MAP = {
  story: StorySection,
  originals: OriginalsSection,
  skills: SkillsSection,
  awards: AwardsSection,
  journey: JourneySection,
  about: AboutSection,
  picks: PicksSection,
}

export default function Sections({ order, aboutParallax, onOpenProject, onOpenPick }) {
  return (
    <main id="sections" style={{ marginTop: 'clamp(64px,8vw,104px)' }}>
      {order.map((key) => {
        const Comp = SECTION_MAP[key]
        if (!Comp) return null
        const extra =
          key === 'about'
            ? { aboutParallax }
            : key === 'originals'
              ? { onOpenProject }
              : key === 'picks'
                ? { onOpenPick }
                : {}
        return <Comp key={key} {...extra} />
      })}
    </main>
  )
}
