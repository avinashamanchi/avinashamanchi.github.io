import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

const NAV_LINKS = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('section, header, footer')
      let current = ''
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 100) {
          current = section.getAttribute('id')
        }
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-carbon/90 backdrop-blur-sm"
        aria-label="Main navigation"
      >
        <div className="max-w-[1383px] mx-auto flex items-center justify-between px-6 md:px-10 h-[72px]">
          <a
            href="#hero"
            className="font-display text-carbon dark:text-white font-medium text-[15px] tracking-normal"
          >
            avinash amanchi
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`nav-link font-body text-pewter dark:text-dark-text-secondary text-[14px] font-medium ${activeSection === href.slice(1) ? 'active text-carbon dark:text-white' : ''}`}
              >
                {label}
              </a>
            ))}
            <ThemeToggle />
            <a
              href="/avinash-amanchi-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-electric-blue text-white font-body text-[14px] font-medium px-5 py-2 rounded-tesla transition-all duration-tesla hover:opacity-90"
            >
              resume
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(true)}
              className="flex flex-col gap-[5px] p-2"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className="block w-5 h-[1.5px] bg-carbon dark:bg-white transition-all duration-tesla origin-center" />
              <span className="block w-5 h-[1.5px] bg-carbon dark:bg-white transition-all duration-tesla" />
              <span className="block w-5 h-[1.5px] bg-carbon dark:bg-white transition-all duration-tesla origin-center" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu fixed top-0 right-0 bottom-0 w-[280px] bg-white dark:bg-carbon z-[60] flex flex-col pt-24 px-8 gap-6 ${menuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
        aria-label="Navigation menu"
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-carbon dark:text-white text-[24px] font-light"
          aria-label="Close navigation menu"
        >
          &times;
        </button>
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="font-body text-carbon dark:text-white text-[18px] font-medium"
          >
            {label}
          </a>
        ))}
        <a
          href="/avinash-amanchi-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-electric-blue text-white font-body text-[14px] font-medium px-5 py-3 rounded-tesla text-center mt-4 transition-all duration-tesla hover:opacity-90"
        >
          resume
        </a>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-[rgba(128,128,128,0.35)] z-[55]"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  )
}
