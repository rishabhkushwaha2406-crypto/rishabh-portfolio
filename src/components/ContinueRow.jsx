import { useRef } from 'react'
import { ART, PROFILES, SECTIONS } from '../data'
import { bg } from '../lib'

export default function ContinueRow({ profileKey, onGoTo }) {
  const railRef = useRef(null)
  const profile = PROFILES[profileKey]

  const scroll = (dir) => {
    const rail = railRef.current
    if (!rail) return
    rail.scrollBy({ left: rail.clientWidth * 0.8 * dir, behavior: 'smooth' })
  }

  return (
    <div className="row">
      <div className="row-head wrap">
        <h3>Continue exploring as {profile.label}</h3>
        <div className="row-ctrl">
          <button type="button" aria-label="Scroll left" onClick={() => scroll(-1)}>
            ‹
          </button>
          <button type="button" aria-label="Scroll right" onClick={() => scroll(1)}>
            ›
          </button>
        </div>
      </div>
      <div className="rail" ref={railRef}>
        {profile.order.map((k, i) => {
          const s = SECTIONS[k]
          const artStyle = s.photo
            ? { background: `${bg(null, s.photo)} center 22%/cover` }
            : { background: ART[s.art] }
          return (
            <button key={k} className="tile" type="button" onClick={() => onGoTo(k)}>
              <span className="art" style={artStyle} />
              <span className="shade" />
              <span className="ep">EPISODE {String(i + 1).padStart(2, '0')}</span>
              <span className="t">{s.label}</span>
              <span className="hint">{s.hint}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
