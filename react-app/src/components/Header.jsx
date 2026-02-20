import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="site-header">
      <div className="container">
        <Link className="logo" to="/">UCR PACN</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/tickets">Tickets</Link>
          <Link to="/merch">Merch</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
