import { useEffect, useRef, useState } from 'react'
import { reduced } from '../lib'

export function useScrollEffects({ enabled, menuOpen }) {
  const [solid, setSolid] = useState(false)
  const [tucked, setTucked] = useState(false)
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState(null)
  const [parallax, setParallax] = useState(0)
  const [aboutParallax, setAboutParallax] = useState(0)
  const lastY = useRef(0)

  useEffect(() => {
    if (!enabled) return undefined

    let ticking = false
    const onScroll = () => {
      const y = window.scrollY
      setSolid(y > 40)
      setTucked(y > 500 && y > lastY.current + 2 && !menuOpen)
      if (y < lastY.current - 2) setTucked(false)
      lastY.current = y

      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Number((y / max).toFixed(4)) : 0)

      if (!reduced()) {
        const bb = document.getElementById('top')
        if (bb) setParallax(Math.min(y / bb.offsetHeight, 1))
        const ai = document.getElementById('aboutImg')
        if (ai?.parentElement) {
          const r = ai.parentElement.getBoundingClientRect()
          setAboutParallax((window.innerHeight / 2 - (r.top + r.height / 2)) / window.innerHeight)
        }
      }

      let on = null
      document.querySelectorAll('main > section, #contact').forEach((s) => {
        if (s.getBoundingClientRect().top < window.innerHeight * 0.4) on = s.id
      })
      setActiveSection(on)
    }

    const handler = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        onScroll()
        ticking = false
      })
    }

    onScroll()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [enabled, menuOpen])

  return { solid, tucked, progress, activeSection, parallax, aboutParallax }
}

export function useReveal(deps) {
  useEffect(() => {
    if (reduced() || !('IntersectionObserver' in window)) return undefined

    const els = [...document.querySelectorAll('[data-rv], #tbc')]
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.remove('pre')
            io.unobserve(en.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return
      el.classList.add('rv', 'pre')
      io.observe(el)
    })

    return () => io.disconnect()
  }, deps)
}
