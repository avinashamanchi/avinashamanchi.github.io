import { useEffect, useRef, useState } from 'react'

const NAV_LINKS = [
  { href: '#projects', label: 'work' },
  { href: '#impact', label: 'impact' },
  { href: '#resume', label: 'experience' },
  { href: '#about', label: 'about' },
  { href: '#contact', label: 'contact' },
]

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

function getFocusableElements(container) {
  return container ? [...container.querySelectorAll(FOCUSABLE_SELECTOR)] : []
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const menuRef = useRef(null)
  const triggerRef = useRef(null)
  const wasOpenRef = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('section, header, footer')
      let current = ''
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 100) current = section.getAttribute('id')
      })
      setActiveSection(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) {
      if (wasOpenRef.current) triggerRef.current?.focus()
      wasOpenRef.current = false
      return undefined
    }

    wasOpenRef.current = true
    const firstFocusable = getFocusableElements(menuRef.current)[0]
    requestAnimationFrame(() => firstFocusable?.focus())

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setMenuOpen(false)
        return
      }

      if (event.key !== 'Tab') return
      const focusable = getFocusableElements(menuRef.current)
      if (!focusable.length) {
        event.preventDefault()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <nav className="site-nav fixed top-0 left-0 right-0 z-50" aria-label="Main navigation">
        <div className="site-nav__inner page-wrap">
          <a href="#hero" className="site-nav__brand">avinash amanchi</a>

          <div className="desktop-nav">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`nav-link ${activeSection === href.slice(1) ? 'active' : ''}`}
              >
                {label}
              </a>
            ))}
            <a href="/avinash-amanchi-resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-cta">
              resume
            </a>
          </div>

          <button
            ref={triggerRef}
            onClick={() => setMenuOpen(true)}
            className="menu-trigger"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <>
          <div className="mobile-overlay" aria-hidden="true" onClick={closeMenu} />
          <div
            ref={menuRef}
            id="mobile-menu"
            className="mobile-menu open"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <button onClick={closeMenu} className="mobile-menu__close" aria-label="Close navigation menu">&times;</button>
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} onClick={closeMenu} className="mobile-menu__link">{label}</a>
            ))}
            <a href="/avinash-amanchi-resume.pdf" target="_blank" rel="noopener noreferrer" className="mobile-menu__resume">
              resume
            </a>
          </div>
        </>
      )}
    </>
  )
}
