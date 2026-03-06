import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TICKET_URL = 'https://tulay-web-app.vercel.app/event/bc2cda18-174c-4756-891d-1387ea6803b0'

export default function Header(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container">
        <Link className="logo" to="/" aria-label="UCR PACN home" onClick={closeMenu}>
          <img src="/images/pacn%20logo.jpg" alt="PACN logo" className="nav-logo-image" decoding="async" />
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="site-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="site-nav" className={isMenuOpen ? 'nav-open' : ''}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/board" onClick={closeMenu}>Board</Link>
          <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Tickets</a>
        </nav>
      </div>
    </header>
  )
}
