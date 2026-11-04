import { DATA } from '../data'

export default function Intro({ leaving, onPlay, onSkip }) {
  const letters = DATA.first.toUpperCase().split('')

  return (
    <div className={`overlay${leaving ? ' leaving' : ''}`} id="intro" role="dialog" aria-label="Intro">
      <button className="skip" type="button" onClick={onSkip}>
        Skip intro
      </button>
      <h1 className="intro-name" aria-label="Rishabh">
        {letters.map((c, i) => (
          <span key={`${c}-${i}`} style={{ animationDelay: `${120 + i * 55}ms` }}>
            {c}
          </span>
        ))}
      </h1>
      <div className="intro-rule" aria-hidden="true" />
      <div className="intro-sub">THE SERIES</div>
      <p className="intro-role">KYC &amp; Fraud Risk · Computer Science · Bengaluru</p>
      <div className="intro-actions">
        <button className="btn btn-light" type="button" onClick={onPlay} autoFocus>
          <span className="tri" />
          Play
        </button>
      </div>
    </div>
  )
}
