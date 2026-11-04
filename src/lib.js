import { ART, DATA } from './data'

export const reduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const store = {
  get(k) {
    try {
      return localStorage.getItem(k)
    } catch {
      return null
    }
  },
  set(k, v) {
    try {
      localStorage.setItem(k, v)
    } catch {
      /* ignore */
    }
  },
}

export function vt(fn) {
  if (typeof document !== 'undefined' && document.startViewTransition && !reduced()) {
    try {
      const t = document.startViewTransition(fn)
      t.ready.catch(() => {})
      t.updateCallbackDone.catch(() => {})
      return t.finished.catch(() => {})
    } catch {
      /* fall through */
    }
  }
  fn()
  return Promise.resolve()
}

export const photo = (k) => DATA.photos[k]

export const bg = (art, ph) => (ph ? `url('${photo(ph)}')` : ART[art])

export function skillAbbr(s) {
  return s
    .replace(/[^A-Za-z0-9 &]/g, '')
    .split(/\s+/)
    .filter((w) => w && w !== '&')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function toast(msg) {
  const t = document.createElement('div')
  t.className = 'toast'
  t.textContent = msg
  document.body.appendChild(t)
  setTimeout(() => t.remove(), 1800)
}

export async function copyText(text, onOk) {
  try {
    await navigator.clipboard.writeText(text)
    onOk?.()
  } catch {
    toast('Selected. Press Ctrl+C to copy')
  }
}
