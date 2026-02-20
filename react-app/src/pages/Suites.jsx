import React from 'react'

const suites = [
  {
    name: 'Tinikling',
    description: 'A traditional bamboo dance suite focused on rhythm, footwork, and ensemble timing.'
  },
  {
    name: 'Maria Clara',
    description: 'A suite inspired by elegance and storytelling through classic Filipino movement styles.'
  },
  {
    name: 'Modern',
    description: 'A contemporary suite blending current choreography with cultural and creative expression.'
  },
  {
    name: 'Filipino Martial Arts',
    description: 'A performance suite showcasing discipline, weapon forms, and partner-based choreography.'
  },
  {
    name: 'Acting',
    description: 'A story-driven suite centered on character work, scenes, and stage presence.'
  },
  {
    name: 'Sound and Music (Choir)',
    description: 'A vocal performance suite featuring harmonies, musicality, and collaborative arrangements.'
  },
  {
    name: 'Sound and Music (Band)',
    description: 'An instrumental suite that supports live performance with dynamic arrangements and energy.'
  },
  {
    name: 'Stage Crew',
    description: 'The production support suite responsible for sets, transitions, and smooth backstage execution.'
  },
  {
    name: 'Marketing & Media',
    description: 'The storytelling and outreach suite that handles branding, visuals, and audience engagement.'
  },
  {
    name: 'PACN Market',
    description: 'A suite dedicated to merchandise, vendor collaboration, and community-centered offerings.'
  },
  {
    name: 'Pactern Program',
    description: 'A mentorship and development suite supporting growth, leadership, and member connection.'
  }
]

export default function Suites(){
  return (
    <div className="container suites-page">
      <h1>PACN Suites & Parts</h1>
      <p>Each PACN suite contributes a unique role to the production and community experience.</p>

      <section className="section-block">
        <div className="card-grid">
          {suites.map((suite) => (
            <article key={suite.name} className="profile-card">
              <h3>{suite.name}</h3>
              <p>{suite.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
