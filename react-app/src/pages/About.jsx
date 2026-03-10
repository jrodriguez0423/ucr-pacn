import React from 'react'

export default function About(){
  const danceSuites = [
    {
      name: 'Binasuan',
      description:
        'A traditional folk dance originating in Bayambang, Pangasinan. Binasuan meaning "with drinking glasses." The movements of this dance are smooth and graceful, as the dancers balance glasses of water during the piece and convey a light, festive and elegant mood.',
    },
    {
      name: 'FMA',
      description:
        'Filipino Martial Arts incorporates various martial arts forms such as eskrima, arnis, and kali, which emphasize weapon-based fighting and empty-hand combat. Historically, Filipino Martial Arts practiced with tools that were easily accessible to common folk and concealable.',
    },
    {
      name: 'Modern',
      description:
        'Modern focuses on the Filipino-American identity and experience, incorporating western dance styles, hip hop influence and music from Filipino and Fil-Am artists. There are four different suites: Project Rizzerside (Advanced), Kati Kuties (Feminine), PackN (Masculine), and Tito Status (Seniors).',
    },
    {
      name: 'Sarung Banggi',
      description:
        'Sarung Banggi is a Bicolano love song which translates to "one evening/one night", showcasing themes of courtship, love, and longing. This piece is being performed under our Maria Clara suite, originating from the Bicol Region and Spanish Colonial period (16th-19th Century).',
    },
    {
      name: 'Singkil',
      description:
        'Our newest suite to PACN, tells the story of a princess who gets caught in a storm and is guided through their escape, originating from the Maranao people. It is adapted from the epic "Darangen" and features a large ensemble cast.',
    },
    {
      name: 'Tinikling',
      description:
        'Originating from Leyte, in the Visayas Region, dancers showcase their footwork as they navigate between opening and closing bamboo poles. This mimics the movement of Tikling birds stepping in and out of bamboo traps set by farmers.',
    },
  ]

  return (
    <div className="container about-page about-info-page">
      <h1>WHAT IS PACN?</h1>
      <p>
        Pilipino-American Cultural Night (PACN) is one of the most anticipated annual events hosted
        by UC Riverside&apos;s Katipunan Pilipino Student Organization. PACN is a fully student-run
        theatrical production that brings together our Kababayan to create an original show
        celebrating Pilipinx culture, identity, and storytelling.
      </p>
      <p>
        Through creative mediums such as dance, acting, and music, our cast explore and express our
        identity while sharing meaningful narratives with the surrounding community. Months of
        collaboration go into writing, producing, and breathing life into this production, creating
        an experience that is both artistic and deeply personal for everyone involved.
      </p>
      <p>
        Beyond the stage, PACN serves as a space for participants to grow, build community, and
        connect with their heritage. At UC Riverside, the production also acts as a platform for
        education and activism, highlighting Pilipino-American history, culture, and the issues
        impacting the community today.
      </p>

      <section className="section-block">
        <h2>Learn about our PACN 37 dance suites:</h2>
        <div className="dance-suite-grid">
          {danceSuites.map((suite) => (
            <article key={suite.name} className="dance-suite-card">
              <h3>{suite.name}</h3>
              <p>{suite.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2>37th Annual Pilipino-American Cultural Night (PACN)</h2>
        <h3 className="play-title">Someday</h3>
        <div className="play-info-grid" aria-label="PACN 37 show information">
          <article className="play-info-card">
            <h4>PACN 37 Show Days &amp; Time</h4>
            <p>Saturday, April 25, 2026 at 7-8 PM</p>
            <p>Doors open at 6 PM.</p>
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
                href="https://www.tulayticketing.com/event/bc2cda18-174c-4756-891d-1387ea6803b0"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.tulayticketing.com/event/bc2cda18-174c-4756-891d-1387ea6803b0
              </a>
            </p>
          </article>
        </div>
        <div className="synopsis-panel">
          <p>
            <span className="synopsis-word">Someday</span> is a heartfelt production that follows a
            Filipino immigrant father and his college-aged daughter as they navigate love, grief,
            and the quiet sacrifices that shape a family.
          </p>
          <p>
            Magnolia, a passionate pre-med UCR student, is discovering love while still carrying
            the weight of her mother&apos;s passing and supporting her father in his pursuit of his
            citizenship. Across the way in the Bay Area, her loving father Crisanto works
            tirelessly to build stability for their future, haunted by loneliness, missing his wife
            and daughter, and the uncertainty of his immigration status.
          </p>
          <p>
            As new relationships bloom and old wounds resurface, the characters are forced to
            confront before it&apos;s too late.
          </p>
          <p>
            <em>
              DISCLAIMER: Someday touches themes of immigration, family grief, and
              intergenerational conflict.
            </em>
          </p>
        </div>
      </section>
    </div>
  )
}
