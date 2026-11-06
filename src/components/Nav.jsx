import { useEffect, useState } from 'react'
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
  const [browseOpen, setBrowseOpen] = useState(false)
  const links = [
    ...profile.order.map((k) => ({ id: k, label: SECTIONS[k].nav })),
    { id: 'contact', label: 'Contact' },
  ]

  useEffect(() => {
    if (!browseOpen) return undefined
    const close = (e) => {
      if (!e.target.closest('#browse, .browse-btn')) setBrowseOpen(false)
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [browseOpen])

  const jump = (id) => {
    setBrowseOpen(false)
    onGoTo(id)
  }

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
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={activeSection === link.id ? 'on' : ''}
              onClick={(e) => {
                e.preventDefault()
                jump(link.id)
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-right">
        <button
          className="browse-btn"
          type="button"
          aria-expanded={browseOpen}
          aria-controls="browse"
          onClick={() => setBrowseOpen((v) => !v)}
        >
          Browse
        </button>
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
      {browseOpen ? (
        <div className="menu browse" id="browse">
          {links.map((link) => (
            <button key={link.id} type="button" onClick={() => jump(link.id)}>
              {link.label}
            </button>
          ))}
        </div>
      ) : null}
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
