import { useEffect, useRef, useState } from 'react'
import { DATA, PROFILES } from './data'
import { reduced, store, vt } from './lib'
import Intro from './components/Intro'
import WhoWatching from './components/WhoWatching'
import Nav from './components/Nav'
import Billboard from './components/Billboard'
import ContinueRow from './components/ContinueRow'
import Sections from './components/Sections'
import Outro from './components/Outro'
import Modal from './components/Modal'
import { useReveal, useScrollEffects } from './hooks/useScrollEffects'

export default function App() {
  const [stage, setStage] = useState('intro') // intro | who | app
  const [leavingIntro, setLeavingIntro] = useState(false)
  const [profileKey, setProfileKey] = useState(null)
  const [entered, setEntered] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [modal, setModal] = useState(null)
  const menuRef = useRef(null)

  const scroll = useScrollEffects({ enabled: stage === 'app', menuOpen })
  useReveal([stage, profileKey])

  useEffect(() => {
    document.body.classList.toggle('locked', stage !== 'app' || !!modal)
  }, [stage, modal])

  useEffect(() => {
    ;[DATA.photos.hero, DATA.photos.avatar].forEach((src) => {
      const i = new Image()
      i.src = src
    })

    const hash = location.hash.slice(1)
    if (PROFILES[hash]) {
      enterProfile(hash)
      return
    }
    setStage('intro')
  }, [])

  useEffect(() => {
    const onHash = () => {
      const h = location.hash.slice(1)
      if (PROFILES[h] && h !== profileKey) enterProfile(h)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [profileKey])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      setModal(null)
      setMenuOpen(false)
    }
    const onDocClick = (e) => {
      if (!e.target.closest('#menu, .who-btn')) setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onDocClick, true)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onDocClick, true)
    }
  }, [])

  function showWho() {
    setLeavingIntro(false)
    setMenuOpen(false)
    setModal(null)
    setStage('who')
  }

  function showIntro() {
    setLeavingIntro(false)
    setMenuOpen(false)
    setModal(null)
    setStage('intro')
  }

  function playIntro() {
    if (leavingIntro) return
    setLeavingIntro(true)
    setTimeout(
      () => {
        setLeavingIntro(false)
        setStage('who')
      },
      reduced() ? 0 : 750,
    )
  }

  function enterProfile(nextKey) {
    const next = PROFILES[nextKey] ? nextKey : 'recruiter'
    setMenuOpen(false)
    vt(() => {
      setProfileKey(next)
      store.set('rk-profile', next)
      setStage('app')
      setModal(null)
      window.scrollTo(0, 0)
      if (location.hash !== `#${next}`) history.replaceState(null, '', `#${next}`)
    })
    setEntered(false)
    requestAnimationFrame(() => setEntered(true))
  }

  function goTo(id) {
    setMenuOpen(false)
    setModal(null)
    const el = document.getElementById(id)
    if (!el) return
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: reduced() ? 'auto' : 'smooth' })
      return
    }
    el.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' })
  }

  function openProject(id, btn) {
    const project = DATA.projects.find((x) => x.id === id)
    if (!project) return
    const art = btn?.querySelector('.art')
    if (art) art.style.viewTransitionName = 'sheet-hero'
    vt(() => {
      if (art) art.style.viewTransitionName = ''
      setModal({ type: 'project', project })
    })
  }

  function openPick(i, btn) {
    const pick = DATA.picks[i]
    if (!pick) return
    const art = btn?.querySelector('.art')
    if (art) art.style.viewTransitionName = 'sheet-hero'
    vt(() => {
      if (art) art.style.viewTransitionName = ''
      setModal({ type: 'pick', pick })
    })
  }

  return (
    <>
      {stage === 'intro' ? (
        <Intro leaving={leavingIntro} onPlay={playIntro} onSkip={showWho} />
      ) : null}

      {stage === 'who' ? <WhoWatching onSelect={(key) => enterProfile(key)} /> : null}

      {stage === 'app' && profileKey ? (
        <div id="app" className={entered ? 'entered' : ''}>
          <Nav
            profileKey={profileKey}
            solid={scroll.solid}
            tucked={scroll.tucked}
            progress={scroll.progress}
            activeSection={scroll.activeSection}
            menuOpen={menuOpen}
            menuRef={menuRef}
            onToggleMenu={() => setMenuOpen((v) => !v)}
            onGoTo={goTo}
            onSelectProfile={enterProfile}
            onShowWho={showWho}
            onReplayIntro={showIntro}
          />
          <Billboard parallax={scroll.parallax} onGoTo={goTo} />
          <ContinueRow profileKey={profileKey} onGoTo={goTo} />
          <Sections
            order={PROFILES[profileKey].order}
            aboutParallax={scroll.aboutParallax}
            onOpenProject={openProject}
            onOpenPick={openPick}
          />
          <Outro />
          <footer className="wrap">
            <span>© 2026 Rishabh Kushwaha · Bengaluru, India</span>
            <span>Not affiliated with any streaming service. Just a resume that plays.</span>
          </footer>
        </div>
      ) : null}

      <div id="modalRoot">
        <Modal content={modal} onClose={() => setModal(null)} onGoTo={goTo} />
      </div>
    </>
  )
}
