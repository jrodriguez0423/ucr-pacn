import React from 'react'

function getInitials(name){
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

const photoById = {
  'alyanna-dizon': 'Alyanna Karmela Dizon.webp',
  'angelo-tagoylo': 'Angelo Tagoylo.webp',
  'bethany-cao': 'Bethany Cao.webp',
  'cadence-saniel': 'Cadence Saniel.webp',
  'carl-edpao': 'Carl_Edpao_PACN37_Headshot.webp',
  'casey-frasco': 'Casey Frasco.webp',
  'frances-rose-javate': 'Frances Javate.webp',
  'gaby-alejandro': 'Gaby Alejandro.webp',
  'hannah-almero': 'Hannah Almero.webp',
  'jacob-stoops': 'Jacob Stoops.webp',
  'janae-batayola': 'Janae Batayola.webp',
  'jason-tenazas': 'Jason Tenazas.webp',
  'jaycee-jabon': 'Jaycee Jabon Hipe.webp',
  'justin-rodriguez': 'Justin_Rodriguez.webp',
  'karena-pascual': 'karena pascual.webp',
  'kat-cenabre': 'Kat Cenabre.webp',
  'klarisse-dayrit': 'KlarisseAllyssaDayrit.webp',
  'leila-betters': 'Leila Betters.webp',
  'matt-dimaandal': 'Matt Dimaandal.webp',
  'makaela-dato': 'Makaela Dato.webp',
  'mira-ramos': 'Mira Ramos.webp',
  'nathan-leopoldo': 'Nathan John Leopoldo.webp',
  'patricia-delfin': 'Patricia Delfin.webp',
  'rhean-ramos': 'Rhean Ashley Ramos.webp',
  'rianna-granados': 'Rianna Granados.webp',
  'riley-robes': 'riley.webp',
  'rylie-nash': 'Rylie Nash.webp',
  'sofie-gange': 'Sofie Gange.webp',
  'sophia-avenido': 'Sophia Avenido.webp',
  'trisha-mae-rivera': 'Trisha Rivera.webp',
  'zion-abendano': 'Zion.webp'
}

const photoPositionById = {
  'klarisse-dayrit': '70%',
  'cadence-saniel': '38%',
  'hannah-almero': '38%',
  'leila-betters': '40%',
  'sofie-gange': '40%',
  'jacob-stoops': '40%',
  'rylie-nash': '40%',
  'justin-rodriguez': '46%',
  'kat-cenabre': '40%',
  'trisha-mae-rivera': '40%',
  'riley-robes': '40%',
  'janae-batayola': '40%',
  'nathan-leopoldo': '40%',
  'jason-tenazas': '40%',
  'carl-edpao': '75%',
  'karena-pascual': '80%',
  'matt-dimaandal': '30%',
  'alyanna-dizon': '100%',
  'angelo-tagoylo': '20%'
}

const photoZoomById = {
  'alyanna-dizon': 1.5,
  'bethany-cao': 1.5,
  'casey-frasco': 1.4,
  'jaycee-jabon': 1.5,
  'rhean-ramos': 1.5,
  'mira-ramos': 1.5,
}

function getPhotoSrc(id){
  const fileName = photoById[id]
  if (!fileName) return null
  return `${import.meta.env.BASE_URL}board-pics-optimized/${encodeURIComponent(fileName)}`
}

function getPhotoStyle(id){
  const yPosition = photoPositionById[id] ?? '50%'
  const zoom = photoZoomById[id] ?? 1

  return {
    objectPosition: `50% ${yPosition}`,
    transform: `scale(${zoom})`,
    transformOrigin: '50% 50%',
  }
}

const members = [
  {
    id: 'klarisse-dayrit',
    name: 'Klarisse Dayrit',
    position: 'PACN Coordinator and Creative Director',
    year: '4th',
    major: 'Biochemistry',
    pronouns: 'She/Her',
    funFact: 'I love to go geocaching.',
    album: 'Unorthodox Jukebox - Bruno Mars',
    albumExplanation: 'You can never go wrong with Bruno Mars. There are so many classics in this album that I will scream the lyrics to any day.'
  },
  {
    id: 'cadence-saniel',
    name: 'Cadence Saniel',
    position: 'Dance Director',
    year: '4th',
    major: 'Biology',
    pronouns: 'She/Her',
    funFact: 'My favorite styles of dance are hip hop and contemporary.',
    album: 'Doo Wops & Hooligans - Bruno Mars',
    albumExplanation: 'The tracklist is generational.'
  },
  {
    id: 'matt-dimaandal',
    name: 'Matt Dimaandal',
    position: 'Financial Director',
    year: '4th',
    major: 'Business Administration',
    pronouns: 'He/Him',
    funFact: 'I can play over forty instruments.',
    album: 'Silk Sonic - Bruno Mars',
    albumExplanation: 'Love me some Silk Sonic while I cry about my upcoming midterms.'
  },
  {
    id: 'kat-cenabre',
    name: 'Kat Cenabre',
    position: 'Marketing and Design Director',
    year: '3rd',
    major: 'Psychology',
    pronouns: 'They/She',
    funFact: 'My favorite font is Calibri and my least favorite is Times New Roman.',
    album: 'Everything I Know About Love - Laufey',
    albumExplanation: 'I tend to get sentimental about everything, so Laufey\'s songs really appeal to me. This album reminds me of amazing people who introduced me to her music. It was also released on my birthday.'
  },
  {
    id: 'trisha-mae-rivera',
    name: 'Trisha Mae Rivera',
    position: 'Marketing and Design Director',
    year: '4th',
    major: 'Business Administration - Marketing',
    pronouns: 'She/Her',
    funFact: 'I love building Gundam.',
    album: 'Bewitched - Laufey',
    albumExplanation: 'It was the first Laufey album I heard. It captures soft, dreamy, romantic energy and feels like falling in love for the first time.'
  },
  {
    id: 'sophia-avenido',
    name: 'Sophia Avenido',
    position: 'Media Director',
    year: '3rd',
    major: 'Business Administration - Marketing',
    pronouns: 'She/Her',
    funFact: 'I watch TikTok edits before my 8 a.m. classes to feel energized.',
    album: 'Short n\' Sweet - Sabrina Carpenter',
    albumExplanation: 'Sabrina is one of my favorite artists. Her lyrics are clever and relatable, and the album feels bubbly and expressive.'
  },
  {
    id: 'frances-rose-javate',
    name: 'Frances Rose Javate',
    position: 'PACN Market Director',
    year: '4th',
    major: 'Business Administration - Accounting',
    pronouns: 'She/Her',
    funFact: 'I was born in Saipan.',
    album: 'Sunburn - Dominic Fike',
    albumExplanation: 'I like the colors and summer vibe of the album.'
  },
  {
    id: 'zion-abendano',
    name: 'Zion Abendano',
    position: 'PACN Market Director',
    year: '4th',
    major: 'Business Administration - Information Systems',
    pronouns: 'He/Him',
    funFact: 'I am an only child.',
    album: 'Rocket - Dominic Fike',
    albumExplanation: 'Each song has a different vibe and genre, and the style fits me.'
  },
  {
    id: 'hannah-almero',
    name: 'Hannah Almero',
    position: 'Financial Coordinator',
    year: '2nd',
    major: 'Sociology and Administrative Studies',
    pronouns: 'She/Her',
    funFact: 'I worked at Knott\'s Berry Farm and had four different uniforms.',
    album: 'Sour - Olivia Rodrigo',
    albumExplanation: 'Olivia Rodrigo is my favorite artist and I relate strongly to her songwriting.'
  },
  {
    id: 'rianna-granados',
    name: 'Rianna Granados',
    position: 'Pactern Advisor',
    year: '2nd',
    major: 'Media and Cultural Studies',
    pronouns: 'She/Her',
    funFact: 'I love escape rooms.',
    album: 'Beautiful Chaos - Katseye',
    albumExplanation: 'The diversity of genres and members reflects the diversity and talent within PACN.'
  },
  {
    id: 'leila-betters',
    name: 'Leila Betters',
    position: 'Stage Crew Manager',
    year: '3rd',
    major: 'Political Science',
    pronouns: 'She/Her',
    funFact: 'I have over 400 hours in Marvel Rivals.',
    album: 'Backflips in a Restaurant - grentperez',
    albumExplanation: 'I love the lyricism and earth tones of this album.'
  },
  {
    id: 'sofie-gange',
    name: 'Sofie Gange',
    position: 'Stage Crew Manager',
    year: '4th',
    major: 'Psychology with a Minor in Organizational Behavior',
    pronouns: 'She/Her',
    funFact: 'I can wiggle my eyebrows.',
    album: 'When We Were Younger - grentperez',
    albumExplanation: 'It reminds me of childhood nostalgia.'
  },
  {
    id: 'patricia-delfin',
    name: 'Patricia Delfin',
    position: 'Acting Coach',
    year: '4th',
    major: 'English and Education',
    pronouns: 'She/Her',
    funFact: 'I reached 600 hours on The Sims this year.',
    album: 'Justified - Justin Timberlake',
    albumExplanation: 'I know many songs from it and enjoy its energy.'
  },
  {
    id: 'jacob-stoops',
    name: 'Jacob Stoops',
    position: 'Acting Coach',
    year: '3rd',
    major: 'Biology',
    pronouns: 'He/Him',
    funFact: 'I have a traffic sign in my room.',
    album: 'Futuresex/Lovesounds - Justin Timberlake',
    albumExplanation: 'I enjoy the music and the style was fitting.'
  },
  {
    id: 'riley-robes',
    name: 'Riley Robes',
    position: 'Modern Coach',
    year: '4th',
    major: 'Business Administration - Marketing',
    pronouns: 'She/Her',
    funFact: 'I did ballet for 12 years.',
    album: 'CALL ME IF YOU GET LOST - Tyler the Creator',
    albumExplanation: 'It was fun to recreate and dress around.'
  },
  {
    id: 'sydney-eustaquio',
    name: 'Sydney Eustaquio',
    position: 'Modern Coach',
    year: '4th',
    major: 'Media and Cultural Studies',
    pronouns: 'She/Her',
    funFact: 'The original creator of the minions designed my tattoo for me'
  },
  {
    id: 'gaby-alejandro',
    name: 'Gaby Alejandro',
    position: 'Maria Clara Coach',
    year: '3rd',
    major: 'Business Administration',
    pronouns: 'She/Her',
    funFact: 'I have pet chickens at home.',
    album: 'This Is How Tomorrow Moves - beabadoobee',
    albumExplanation: 'I like the themes explored in each song.'
  },
  {
    id: 'carl-edpao',
    name: 'Carl Edpao',
    position: 'Filipino Martial Arts Coach',
    year: '2nd',
    major: 'Microbiology',
    pronouns: 'He/Him',
    funFact: 'I know how to rollerblade.',
    album: 'Requiem - Keshi',
    albumExplanation: 'I enjoy Keshi\'s storytelling style.'
  },
  {
    id: 'janae-batayola',
    name: 'Janae Batayola',
    position: 'Tinikling Coach',
    year: '3rd',
    major: 'Actuarial Sciences',
    pronouns: 'She/Her',
    funFact: 'My 99 Nights in a Forest record is 833 days.',
    album: 'Because of the Internet - Childish Gambino',
    albumExplanation: 'It gives summer energy.'
  },
  {
    id: 'nathan-leopoldo',
    name: 'Nathan Leopoldo',
    position: 'Tinikling Coach',
    year: '2nd',
    major: 'Biology',
    pronouns: 'He/Him',
    funFact: 'I have 67 hours on Bloons Tower Defense 6.',
    album: 'Camp - Childish Gambino',
    albumExplanation: 'I enjoy the artist and relate to the album\'s style and color palette.'
  },
  {
    id: 'karena-pascual',
    name: 'Karena Pascual',
    position: 'Tinikling Coach',
    year: '3rd',
    major: 'Media and Cultural Studies',
    pronouns: 'She/Her',
    funFact: 'My first concert was Big Time Rush.',
    album: 'Awaken, My Love - Childish Gambino',
    albumExplanation: 'The songs are chill and match my aesthetic.'
  },
  {
    id: 'jason-tenazas',
    name: 'Jason Tenazas',
    position: 'Tinikling Coach',
    year: '2nd',
    major: 'Psychology',
    pronouns: 'He/Him',
    funFact: 'I am a first-degree black belt.',
    album: 'Bando Stone and The New World - Childish Gambino',
    albumExplanation: 'It was a collective decision among the tinikling coaches and is a strong album.'
  },
  {
    id: 'angelo-tagoylo',
    name: 'Angelo Tagoylo',
    position: 'Sound and Music Coordinator - Choir',
    year: '2nd',
    major: 'Psychology',
    pronouns: 'He/Him',
    funFact: 'I have watched the entirety of The Flash at least seven times.',
    album: 'SOS - SZA',
    albumExplanation: 'I liked the aesthetic.'
  },
  {
    id: 'rylie-nash',
    name: 'Rylie Nash',
    position: 'Sound and Music Coordinator - Choir',
    year: '3rd',
    major: 'Psychology and Neuroscience',
    pronouns: 'She/Her',
    funFact: 'I sleep to horror gameplay videos.',
    album: 'CTRL (Deluxe) - SZA',
    albumExplanation: 'The album carried me through personal growth and resonates deeply with me.'
  },
  {
    id: 'justin-rodriguez',
    name: 'Justin Rodriguez',
    position: 'Sound and Music Coordinator - Band',
    year: 'Graduated',
    major: 'Computer Science',
    pronouns: 'He/Him',
    funFact: 'I play seven instruments: drums, piano, guitar, bass, ukulele, saxophone, and vibraphone.',
    album: 'CASE STUDY 01 - Daniel Caesar',
    albumExplanation: 'It explores different musical styles and emotional depth that resonated with me.'
  }
]

const groupedLeadership = [
  {
    title: 'Directors',
    ids: ['klarisse-dayrit', 'cadence-saniel', 'matt-dimaandal']
  },
  {
    title: 'Creative Team',
    ids: ['rianna-granados', 'leila-betters', 'sofie-gange', 'patricia-delfin', 'jacob-stoops', 'angelo-tagoylo', 'rylie-nash', 'justin-rodriguez']
  },
  {
    title: 'Financial Team',
    ids: ['sophia-avenido', 'hannah-almero', 'kat-cenabre', 'trisha-mae-rivera', 'frances-rose-javate', 'zion-abendano']
  },
  {
    title: 'Dance Coaches',
    ids: ['riley-robes', 'sydney-eustaquio', 'gaby-alejandro', 'carl-edpao', 'janae-batayola', 'nathan-leopoldo', 'karena-pascual', 'jason-tenazas']
  }
]

const pacterns = [
  { id: 'alyanna-dizon', name: 'Alyanna Dizon', pronouns: 'She/Her', academic: '2nd Year, Psychology' },
  { id: 'bethany-cao', name: 'Bethany Cao', pronouns: 'She/Her', academic: '1st Year, Neuroscience' },
  { id: 'casey-frasco', name: 'Casey Frasco', pronouns: 'She/Her', academic: '1st Year, Mechanical Engineering' },
  { id: 'jaycee-jabon', name: 'Jaycee Jabon', pronouns: 'He/Him', academic: '1st Year, Mechanical Engineering' },
  { id: 'rhean-ramos', name: 'Rhean Ramos', pronouns: 'She/Her', academic: '1st Year, Pre-Business' },
  { id: 'makaela-dato', name: 'Makaela Dato', pronouns: 'She/Her', academic: '2nd Year, Biology' },
  { id: 'mira-ramos', name: 'Mira Ramos', pronouns: 'She/Her', academic: '1st Year, Political Science' }
]

const memberById = new Map(members.map((member) => [member.id, member]))

export default function Board(){
  return (
    <div className="container about-page">
      <h1>PACN 37 Board</h1>

      <section className="section-block">
        {groupedLeadership.map((group) => (
          <div key={group.title} className="leadership-group">
            <h3>{group.title}</h3>
            <div className="card-grid">
              {group.ids.map((id) => {
                const member = memberById.get(id)
                if (!member) return null
                const photoSrc = getPhotoSrc(member.id)
                return (
                  <article key={member.id} className="profile-card">
                    <div className="profile-photo" aria-hidden="true">
                      {photoSrc
                        ? <img src={photoSrc} alt={`${member.name} headshot`} loading="lazy" decoding="async" fetchPriority="low" style={getPhotoStyle(member.id)} />
                        : getInitials(member.name)}
                    </div>
                    <h4>{member.name}</h4>
                    <p><strong>Position:</strong> {member.position}</p>
                    <p><strong>Year:</strong> {member.year}</p>
                    <p><strong>Major:</strong> {member.major}</p>
                    <p><strong>Pronouns:</strong> {member.pronouns}</p>
                    <p><strong>Fun Fact:</strong> {member.funFact}</p>
                  </article>
                )
              })}
            </div>
          </div>
        ))}
      </section>

      <section className="section-block">
        <h2>PACterns</h2>
        <div className="card-grid">
          {pacterns.map((pactern) => {
            const photoSrc = getPhotoSrc(pactern.id)
            return (
              <article key={pactern.id} className="profile-card">
                <div className="profile-photo" aria-hidden="true">
                  {photoSrc
                    ? <img src={photoSrc} alt={`${pactern.name} headshot`} loading="lazy" decoding="async" fetchPriority="low" style={getPhotoStyle(pactern.id)} />
                    : getInitials(pactern.name)}
                </div>
                <h4>{pactern.name}</h4>
                <p><strong>Pronouns:</strong> {pactern.pronouns}</p>
                <p><strong>Year & Major:</strong> {pactern.academic}</p>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}
