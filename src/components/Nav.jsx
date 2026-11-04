import { DATA, PROFILES, SECTIONS } from '../data'
import { IconDownload } from '../icons'
import { MiniAvatar } from './WhoWatching'

export default function Nav({
  profileKey,
  solid,
  tucked,
  progress,
  activeSection,
  menuOpen,
  onToggleMenu,
  onGoTo,
  onSelectProfile,
  onShowWho,
  onReplayIntro,
  menuRef,
}) {
  const profile = PROFILES[profileKey]

  return (
    <header className={`nav wrap${solid ? ' solid' : ''}${tucked ? ' tucked' : ''}`} id="nav" style={{ '--prog': progress }}>
      <a
        className="mark"
        href="#top"
        aria-label="Rishabh, back to top"
        onClick={(e) => {
          e.preventDefault()
          onGoTo('top')
        }}
      >
        RISHABH <small>SERIES</small>
      </a>
      <ul className="nav-links">
        {profile.order.map((k) => (
          <li key={k}>
            <a
              href={`#${k}`}
              className={activeSection === k ? 'on' : ''}
              onClick={(e) => {
                e.preventDefault()
                onGoTo(k)
              }}
            >
              {SECTIONS[k].nav}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className={activeSection === 'contact' ? 'on' : ''}
            onClick={(e) => {
              e.preventDefault()
              onGoTo('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="nav-right">
        <a className="nav-resume" href={DATA.resumePdf} target="_blank" rel="noopener">
          <IconDownload />
          <span>Resume</span>
        </a>
        <button
          className="who-btn"
          type="button"
          aria-haspopup="true"
          aria-expanded={menuOpen}
          aria-label="Switch profile"
          onClick={onToggleMenu}
        >
          <MiniAvatar profileKey={profileKey} />
          <span className="caret" aria-hidden="true">
            ▾
          </span>
        </button>
      </div>
      {!menuOpen ? null : (
        <div className="menu" id="menu" ref={menuRef}>
          {Object.entries(PROFILES).map(([k, q]) => (
            <button key={k} type="button" onClick={() => onSelectProfile(k)}>
              <MiniAvatar profileKey={k} />
              {q.label}
              {k === profileKey ? ' · watching' : ''}
            </button>
          ))}
          <hr />
          <button type="button" onClick={onShowWho}>
            Back to Who&apos;s watching
          </button>
          <button type="button" onClick={onReplayIntro}>
            Replay intro
          </button>
        </div>
      )}
      <span className="progress" aria-hidden="true" />
    </header>
  )
}
