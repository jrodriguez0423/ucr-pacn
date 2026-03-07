import React, { useEffect, useRef, useState } from 'react'

const TICKET_URL = 'https://www.tulayticketing.com/event/bc2cda18-174c-4756-891d-1387ea6803b0'

const galleryImages = [
  '/carousel-optimized/DSC06969.webp',
  '/carousel-optimized/DSC06979.webp',
  '/carousel-optimized/DSC08053.webp',
  '/carousel-optimized/_TJL0012.webp',
  '/carousel-optimized/_TJL8163.webp',
  '/carousel-optimized/_TJL8200.webp',
  '/carousel-optimized/_TJL8206.webp',
  '/carousel-optimized/_TJL8807.webp',
  '/carousel-optimized/_TJL8813.webp',
]

const castMembers = [
  ['Magnolia "Lia" Espinosa', 'Allyson Mendoza'],
  ['Crisanto Espinosa', 'Gavin Manela'],
  ['Gabriel Bernardo', 'Jacob Adriano'],
  ['Roselle "Ro" de la Cruz', 'Hazel Jose'],
  ['Eden\n Gonzalez', 'Lovel\n Cruz'],
  ['Angel Bautista', 'Soren Hocke'],
  ['Father Bernie', 'Javen Sebastian'],
  ['Irene\n Espinosa', 'Faith\n Garcia'],
]

const pastPacns = [
  {
    title: 'PACN 36: Soundproof',
    yearLabel: 'PACN 36',
    embedUrl: 'https://www.youtube.com/embed/MnOk1ERZ44o',
  },
  {
    title: 'PACN 35: Stardust',
    yearLabel: 'PACN 35',
    embedUrl: 'https://www.youtube.com/embed/NUD2v2tcJ00',
  },
  {
    title: 'PACN 34: Till The Sun Rises',
    yearLabel: 'PACN 34',
    embedUrl: 'https://www.youtube.com/embed/ioEx13R8NZo',
  },
]

export default function Home() {
  const galleryTrackRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const dragStateRef = useRef({
    isDragging: false,
    startX: 0,
    startScrollLeft: 0,
  })

  useEffect(() => {
    const track = galleryTrackRef.current
    if (!track) {
      return
    }

    const updateGalleryArrows = () => {
      const maxScrollLeft = track.scrollWidth - track.clientWidth
      const threshold = 4

      setCanScrollLeft(track.scrollLeft > threshold)
      setCanScrollRight(track.scrollLeft < maxScrollLeft - threshold)
    }

    updateGalleryArrows()
    track.addEventListener('scroll', updateGalleryArrows, { passive: true })
    window.addEventListener('resize', updateGalleryArrows)

    return () => {
      track.removeEventListener('scroll', updateGalleryArrows)
      window.removeEventListener('resize', updateGalleryArrows)
    }
  }, [])

  function scrollGallery(direction) {
    const track = galleryTrackRef.current
    if (!track) {
      return
    }

    const firstCard = track.querySelector('.gallery-card')
    const cardWidth = firstCard instanceof HTMLElement ? firstCard.offsetWidth + 16 : 320

    track.scrollBy({
      left: direction * cardWidth,
      behavior: 'smooth',
    })
  }

  function handleGalleryMouseDown(event) {
    const track = galleryTrackRef.current
    if (!track) {
      return
    }

    dragStateRef.current = {
      isDragging: true,
      startX: event.clientX,
      startScrollLeft: track.scrollLeft,
    }
  }

  function handleGalleryMouseMove(event) {
    const track = galleryTrackRef.current
    if (!track || !dragStateRef.current.isDragging) {
      return
    }

    event.preventDefault()
    const delta = event.clientX - dragStateRef.current.startX
    track.scrollLeft = dragStateRef.current.startScrollLeft - delta
  }

  function handleGalleryMouseUp() {
    if (!dragStateRef.current.isDragging) {
      return
    }

    dragStateRef.current = {
      isDragging: false,
      startX: 0,
      startScrollLeft: 0,
    }
  }

  return (
    <div className="home-page">
      <section
        className="home-hero"
        style={{ backgroundImage: 'url("/images/Someday-hero.webp")' }}
      >
        <div className="container home-hero-inner">
          <div className="home-hero-copy">
            <p className="eyebrow">The official website for UCR PACN</p>
            <p className="hero-kicker">UC Riverside&apos;s Katipunan PSO presents:</p>
            <h1>Pilipino-American Culture Night</h1>
            <p className="hero-note">
              PACN 37 returns with <span>Someday</span> on April 25th.
            </p>
            <div className="hero-actions">
              <a
                href={TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn hero-ticket-btn"
              >
                Get Tickets
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container logo-band" aria-label="PACN logo">
        <img src="/images/pacn%20logo.jpg" alt="PACN logo" className="pacn-logo-image" />
      </section>

      <section className="container section-block gallery-section">
        <div className="section-heading">
          <p className="eyebrow">Photo Gallery</p>
          <h2>Gallery</h2>
          <p>Scroll through the gallery with the arrows or by dragging.</p>
        </div>

        <div className="gallery-carousel">
          {canScrollLeft ? (
            <button
              type="button"
              className="gallery-arrow"
              onClick={() => scrollGallery(-1)}
              aria-label="Scroll gallery left"
            >{'<'}</button>
          ) : (
            <div className="gallery-arrow-spacer" aria-hidden="true" />
          )}

          <div
            className="gallery-track"
            ref={galleryTrackRef}
            onMouseDown={handleGalleryMouseDown}
            onMouseMove={handleGalleryMouseMove}
            onMouseUp={handleGalleryMouseUp}
            onMouseLeave={handleGalleryMouseUp}
          >
            {galleryImages.map((imagePath) => (
              <article key={imagePath} className="gallery-card">
                <img
                  src={imagePath}
                  alt="PACN gallery"
                  className="gallery-image"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  draggable="false"
                />
              </article>
            ))}
          </div>

          {canScrollRight ? (
            <button
              type="button"
              className="gallery-arrow"
              onClick={() => scrollGallery(1)}
              aria-label="Scroll gallery right"
            >{'>'}</button>
          ) : (
            <div className="gallery-arrow-spacer" aria-hidden="true" />
          )}
        </div>
      </section>

      <section className="container section-block">
        <div className="section-heading">
          <p className="eyebrow">Current Production</p>
          <h2>Cast</h2>
        </div>

        <ul className="cast-list">
          {castMembers.map(([character, actor]) => (
            <li key={character}>
              <span>
                {character.split('\n').map((part, index, parts) => (
                  <React.Fragment key={`${character}-${part}`}>
                    {part}
                    {index < parts.length - 1 ? (
                      <>
                        <br className="cast-desktop-break" />
                        <span className="cast-mobile-space" aria-hidden="true">{' '}</span>
                      </>
                    ) : null}
                  </React.Fragment>
                ))}
              </span>
              <strong>
                {actor.split('\n').map((part, index, parts) => (
                  <React.Fragment key={`${actor}-${part}`}>
                    {part}
                    {index < parts.length - 1 ? (
                      <>
                        <br className="cast-desktop-break" />
                        <span className="cast-mobile-space" aria-hidden="true">{' '}</span>
                      </>
                    ) : null}
                  </React.Fragment>
                ))}
              </strong>
            </li>
          ))}
        </ul>
      </section>

      <section className="container section-block archive-section">
        <div className="section-heading">
          <p className="eyebrow">PACN Archive</p>
          <h2>Past Productions</h2>
        </div>

        <div className="video-grid">
          {pastPacns.map((video) => (
            <article key={video.title} className="video-card">
              <div className="video-frame">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="video-copy">
                <p>{video.yearLabel}</p>
                <h3>{video.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

