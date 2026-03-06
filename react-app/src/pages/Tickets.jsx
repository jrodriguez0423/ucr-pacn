import React, { useEffect } from 'react'

const TICKET_URL = 'https://www.tulayticketing.com/event/bc2cda18-174c-4756-891d-1387ea6803b0' // replace with the real ticketing URL

export default function Tickets(){
  useEffect(()=>{
    const t = setTimeout(()=>{ window.open(TICKET_URL, '_blank', 'noopener,noreferrer') }, 600)
    return ()=> clearTimeout(t)
  },[])

  return (
    <div className="container">
      <h1>Tickets</h1>
      <p>Tickets are handled on our external ticketing site. You will be redirected shortly.</p>
      <p><a className="btn" href={TICKET_URL} target="_blank" rel="noopener noreferrer">Open Ticketing Site</a></p>
      <p>If you are not redirected, click the link above or copy this URL into your browser:</p>
      <code>{TICKET_URL}</code>
    </div>
  )
}

