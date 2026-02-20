import React from 'react'

export default function Home(){
  return (
    <section className="hero container">
      <div className="hero-text">
        <h1>UCR PACN</h1>
        <p>Promoting performing arts and connecting communities at UC Riverside — join us for shows, workshops, and events.</p>
        <p className="cta-row"><a className="btn" href="/tickets">Get Tickets</a> <a className="btn btn-outline" href="/about">Learn More</a></p>
      </div>
      <div className="hero-illustration">
        <img src="/public/images/hero.svg" alt="Performing arts illustration" />
      </div>
    </section>
  )
}
