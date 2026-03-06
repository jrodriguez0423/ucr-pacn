import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TICKET_URL = 'https://www.tulayticketing.com/event/bc2cda18-174c-4756-891d-1387ea6803b0'

export default function Header(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  function handleNavClick() {
    closeMenu()
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })
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
          <Link to="/" onClick={handleNavClick}>Home</Link>
          <Link to="/about" onClick={handleNavClick}>About</Link>
          <Link to="/board" onClick={handleNavClick}>Board</Link>
          <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" onClick={handleNavClick}>Tickets</a>
        </nav>
      </div>
    </header>
  )
}

