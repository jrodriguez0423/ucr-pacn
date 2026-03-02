import React from 'react'
import { Link } from 'react-router-dom'

const TICKET_URL = 'https://tulay-web-app.vercel.app/'

export default function Header(){
  return (
    <header className="site-header">
      <div className="container">
        <Link className="logo" to="/" aria-label="UCR PACN home">
          <img src="/images/pacn%20logo.jpg" alt="PACN logo" className="nav-logo-image" />
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">Tickets</a>
        </nav>
      </div>
    </header>
  )
}
