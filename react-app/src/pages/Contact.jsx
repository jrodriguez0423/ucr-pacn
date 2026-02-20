import React from 'react'

export default function Contact(){
  return (
    <div className="container">
      <h1>Contact</h1>
      <p>For general inquiries, email <a href="mailto:pacn@ucr.edu">pacn@ucr.edu</a></p>
      <form className="contact-form" onSubmit={(e)=>{e.preventDefault(); alert('This demo sends mailto only.')}}>
        <label>Name<br/><input name="name" /></label>
        <label>Email<br/><input name="email" type="email" /></label>
        <label>Message<br/><textarea name="message" /></label>
        <button className="btn" type="submit">Send (demo)</button>
      </form>
    </div>
  )
}
