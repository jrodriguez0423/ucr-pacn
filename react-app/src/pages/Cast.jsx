import React, { useMemo, useState } from 'react'

function getInitials(name){
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

const castMembers = [
  { name: 'Patricia Delfin', role: 'Acting Coach', suite: 'Acting', group: 'Acting Roles' },
  { name: 'Jacob Stoops', role: 'Acting Coach', suite: 'Acting', group: 'Acting Roles' },
  { name: 'Riley Robes', role: 'Modern Coach', suite: 'Modern', group: 'Dance Suites' },
  { name: 'Gaby Alejandro', role: 'Maria Clara Coach', suite: 'Maria Clara', group: 'Dance Suites' },
  { name: 'Carl Edpao', role: 'Filipino Martial Arts Coach', suite: 'Filipino Martial Arts', group: 'Dance Suites' },
  { name: 'Janae Batayola', role: 'Tinikling Coach', suite: 'Tinikling', group: 'Dance Suites' },
  { name: 'Nathan Leopoldo', role: 'Tinikling Coach', suite: 'Tinikling', group: 'Dance Suites' },
  { name: 'Karena Pascual', role: 'Tinikling Coach', suite: 'Tinikling', group: 'Dance Suites' },
  { name: 'Jason Tenazas', role: 'Tinikling Coach', suite: 'Tinikling', group: 'Dance Suites' }
]

const songMusicNotes = [
  'Sound and Music (Choir) roster will be posted here as soon as casting is finalized.',
  'Sound and Music (Band) roster will be posted here as soon as casting is finalized.'
]

export default function Cast(){
  const [sortBy, setSortBy] = useState('suite')

  const groupedCast = useMemo(() => {
    const key = sortBy === 'suite' ? 'suite' : 'role'
    return castMembers.reduce((acc, member) => {
      const bucket = member[key]
      if (!acc[bucket]) acc[bucket] = []
      acc[bucket].push(member)
      return acc
    }, {})
  }, [sortBy])

  const groupNames = Object.keys(groupedCast).sort()

  return (
    <div className="container cast-page">
      <h1>Cast List</h1>
      <p>Browse current cast members by suite or role.</p>

      <div className="cast-sort">
        <span>Sort by:</span>
        <button
          className={`sort-btn ${sortBy === 'suite' ? 'active' : ''}`}
          onClick={() => setSortBy('suite')}
          type="button"
        >
          Suite
        </button>
        <button
          className={`sort-btn ${sortBy === 'role' ? 'active' : ''}`}
          onClick={() => setSortBy('role')}
          type="button"
        >
          Role
        </button>
      </div>

      <section className="section-block">
        <h2>Cast Members</h2>
        {groupNames.map((groupName) => (
          <div key={groupName} className="leadership-group">
            <h3>{groupName}</h3>
            <div className="card-grid">
              {groupedCast[groupName].map((member) => (
                <article key={`${groupName}-${member.name}`} className="profile-card">
                  <div className="profile-photo" aria-hidden="true">{getInitials(member.name)}</div>
                  <h4>{member.name}</h4>
                  <p><strong>Role:</strong> {member.role}</p>
                  <p><strong>Suite:</strong> {member.suite}</p>
                  <p><strong>Category:</strong> {member.group}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="section-block">
        <h2>Acting Roles</h2>
        <ul className="simple-list">
          {castMembers
            .filter((member) => member.group === 'Acting Roles')
            .map((member) => (
              <li key={`acting-${member.name}`}>{member.name} - {member.role}</li>
            ))}
        </ul>
      </section>

      <section className="section-block">
        <h2>Dance Suites</h2>
        <ul className="simple-list">
          {castMembers
            .filter((member) => member.group === 'Dance Suites')
            .map((member) => (
              <li key={`dance-${member.name}`}>{member.name} - {member.suite}</li>
            ))}
        </ul>
      </section>

      <section className="section-block">
        <h2>Sound and Music</h2>
        <ul className="simple-list">
          {songMusicNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
