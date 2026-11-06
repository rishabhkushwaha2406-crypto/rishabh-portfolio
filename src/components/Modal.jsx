import { useEffect, useRef, useState } from 'react'
import { ART, DATA } from '../data'
import { IconGitHub } from '../icons'

export default function Modal({ content, onClose, onGoTo }) {
  const closeRef = useRef(null)

  useEffect(() => {
    closeRef.current?.focus({ preventScroll: true })
  }, [content])

  if (!content) return null

  return (
    <div
      className="modal"
      id="modal"
      onClick={(e) => {
        if (e.target.id === 'modal') onClose()
      }}
    >
      <div className="sheet" role="dialog" aria-modal="true">
        {content.type === 'project' ? <ProjectBody project={content.project} /> : null}
        {content.type === 'pick' ? (
          <PickBody pick={content.pick} onGoTo={onGoTo} onClose={onClose} />
        ) : null}
        <button className="close" type="button" aria-label="Close" ref={closeRef} onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  )
}

function ProjectBody({ project: p }) {
  const [playing, setPlaying] = useState(false)

  return (
    <>
      <div className="hero" style={{ background: ART[p.art] }}>
        <h3>{p.title}</h3>
        {p.subtitle ? <p className="hero-sub">{p.subtitle}</p> : null}
      </div>
      {p.liveUrl ? (
        <div className="player">
          {playing ? (
            <iframe
              title={`${p.title} live demo`}
              src={p.embed ? `${p.liveUrl}?embed=true` : p.liveUrl}
              allow="clipboard-write"
            />
          ) : (
            <button className="player-stage" type="button" onClick={() => setPlaying(true)} style={{ background: ART[p.art] }}>
              <span className="player-play" aria-hidden="true">
                <span className="tri" />
              </span>
              <span className="player-label">Play episode</span>
              <span className="player-live">LIVE DEMO</span>
            </button>
          )}
          <div className="player-bar">
            <span>S1 · E1 · {p.subtitle || p.title}</span>
            <a href={p.liveUrl} target="_blank" rel="noopener">
              Open live app
            </a>
          </div>
        </div>
      ) : null}
      <div className="inner">
        <div>
          <div className="meta">
            <span className="match">{p.genre}</span>
            <span>{p.when}</span>
            <span className="chip">{p.liveUrl ? 'LIVE' : 'ML'}</span>
          </div>
          <p style={{ marginTop: 12 }}>{p.logline}</p>
          <ol>
            {p.episodes.map((e, i) => (
              <li key={e}>
                <b>{i + 1}</b>
                <span>{e}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="aside">
          {p.facts.map(([k, v]) => (
            <div key={k}>
              {k}: <span>{v}</span>
            </div>
          ))}
          <div>
            Stack: <span>{p.tags.join(', ')}</span>
          </div>
          {p.liveUrl ? (
            <a
              className="btn btn-red"
              href={p.liveUrl}
              target="_blank"
              rel="noopener"
              style={{ justifyContent: 'center', marginTop: 6 }}
            >
              <span className="tri" />
              Watch live
            </a>
          ) : null}
          <a
            className="btn btn-ghost"
            href={p.github || DATA.github}
            target="_blank"
            rel="noopener"
            style={{ justifyContent: 'center', marginTop: 6 }}
          >
            <IconGitHub />
            More on GitHub
          </a>
        </div>
      </div>
    </>
  )
}

function PickBody({ pick: p, onGoTo, onClose }) {
  return (
    <>
      <div className="hero" style={{ background: ART[p.art] }}>
        <h3>{p.title}</h3>
      </div>
      <div className="inner">
        <div>
          <p>{p.detail}</p>
          <ol>
            {p.list.map((e, j) => (
              <li key={e}>
                <b>{j + 1}</b>
                <span>{e}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="aside">
          <div>
            Genre: <span>{p.tags.join(', ')}</span>
          </div>
          <button
            className="btn btn-red"
            type="button"
            style={{ justifyContent: 'center' }}
            onClick={() => {
              onClose()
              onGoTo('contact')
            }}
          >
            Cast {DATA.first} in this role
          </button>
        </div>
      </div>
    </>
  )
}
