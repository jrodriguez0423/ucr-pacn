import React from 'react'

export default function About(){
  return (
    <div className="container about-page about-info-page">
      <h1>About PACN</h1>
      <p>
        Pilipino-American Cultural Night (PACN) is one of the longest-standing and most anticipated
        annual events hosted by UC Riverside&apos;s Katipunan Pilipino Student Organization (PSO).
        Held each Spring Quarter, PACN is a fully student-run theatrical production that brings
        together a dedicated board and cast to create an original show celebrating Pilipinx
        culture, identity, and storytelling.
      </p>
      <p>
        Through creative mediums such as dance, acting, and music, students explore and express
        their Pilipinx identity while sharing meaningful narratives with the campus and surrounding
        community. Months of collaboration go into writing, producing, and performing the
        production, creating an experience that is both artistic and deeply personal for everyone
        involved.
      </p>
      <p>
        Beyond the stage, PACN serves as a space for participants to grow, build community, and
        connect with their heritage. At UC Riverside, the production also acts as a platform for
        education and activism, highlighting Pilipinx history, culture, and the issues impacting
        the community today.
      </p>

      <section className="section-block">
        <h2>37th Annual Pilipino-American Cultural Night (PACN)</h2>
        <h3 className="play-title">Someday</h3>
        <div className="play-info-grid" aria-label="PACN 37 show information">
          <article className="play-info-card">
            <h4>PACN 37 Show Days &amp; Time</h4>
            <p>Saturday, April 25, 2026 at 6 PM</p>
            <p>Doors open 30 minutes before show.</p>
          </article>
          <article className="play-info-card">
            <h4>Tickets</h4>
            <p>Early Bird Special: $18</p>
            <p>General Admission: $22</p>
            <p>VIP Reserved Seating: $30</p>
            <p><em>ADA Accessible</em></p>
          </article>
          <article className="play-info-card">
            <h4>California Theatre Of The Performing Arts</h4>
            <p>562 W 4th St, San Bernardino, CA 92401</p>
          </article>
          <article className="play-info-card">
            <h4>Purchase tickets today!</h4>
            <p>
              <a
                href="https://tulay-web-app.vercel.app/event/bc2cda18-174c-4756-891d-1387ea6803b0/tickets"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://tulay-web-app.vercel.app/event/bc2cda18-174c-4756-891d-1387ea6803b0/tickets
              </a>
            </p>
          </article>
        </div>
        <div className="synopsis-panel">
          <p>
            <span className="synopsis-word">Someday</span> is a heartfelt story about love, family,
            and the invisible threads that connect our lives. Set between church pews, classrooms,
            apartments, and quiet moments of reflection, the story follows Magnolia, a brilliant
            young college student trying to find her path while carrying the weight of grief after
            losing her mother. As she navigates school, friendships, and a growing romance with
            Gabriel, Magnolia learns how love can both heal and complicate the relationships closest
            to her.
          </p>
          <p>
            At the same time, her father Crisanto, an immigrant who sacrificed everything to build a
            better life for his family, struggles with loneliness, uncertainty, and the fragile hope
            of securing his future in the country he now calls home. His story reveals the quiet
            resilience of a parent determined to protect the people he loves.
          </p>
          <p>
            Through music, humor, and emotional moments, Someday explores what it means to hold on to
            the past while moving toward the future. It is a story about grief, friendship, identity,
            and the courage to keep loving even when life changes in ways we never expected. In the
            end, the characters must confront the truth that every relationship leaves a mark, and
            that the people who shape us remain part of who we are forever.
          </p>
        </div>
      </section>
    </div>
  )
}
