import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    image: '/dist/assets/redes-sociales-3.jpg',
    title: 'Nuestros eventos',
    subtitle: 'Taller de Pintura | Taller de Cerámica | Taller de extracción de café',
    cta: null,
    overlay: 0.5,
  },
  {
    image: '/dist/assets/redes-sociales-1.jpg',
    title: 'Reserva un espacio para tu evento.',
    subtitle: null,
    cta: { text: 'Reservar', href: 'tel:6634316007' },
    overlay: 0.5,
  },
  {
    image: '/dist/assets/redes-sociales.jpg',
    title: 'Café de especialidad y Experiencias únicas',
    subtitle: 'Disfruta de café de especialidad con tueste en casa',
    cta: { text: 'Comprar café', href: '#contact' },
    overlay: 0.25,
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent(i => (i + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="hero" id="hero">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div
            className="hero-overlay"
            style={{ background: `rgba(0,0,0,${slide.overlay})` }}
          />
          <div className="hero-content">
            <div className="hero-text-block">
              <h1>{slide.title}</h1>
              {slide.subtitle && <p className="hero-subtitle">{slide.subtitle}</p>}
              {slide.cta && (
                <a href={slide.cta.href} className="btn btn-hero">
                  {slide.cta.text}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
