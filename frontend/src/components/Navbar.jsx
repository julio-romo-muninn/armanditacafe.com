import { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          <img src="/assets/logo-original.webp" alt="Armandita Coffee and Friends" />
        </a>
        <div className="navbar-right">
          <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#hero" className="active" onClick={() => setMenuOpen(false)}>Inicio</a></li>
            <li><a href="#features" onClick={() => setMenuOpen(false)}>Café</a></li>
          </ul>
          <div className="navbar-utils">
            <a href="#" className="nav-icon" aria-label="Buscar">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </a>
            <a href="#" className="nav-icon" aria-label="Carrito">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            </a>
            <a href="#" className="nav-icon" aria-label="Cuenta">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </a>
          </div>
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú de navegación"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
