import { useState } from 'react'

const items = [
  {
    image: '/assets/about-image.png',
    heading: 'Nuestra Historia',
    text: 'En Armandita Coffee and Friends, nos enorgullece ofrecer café de especialidad y una experiencia culinaria única que refleja la rica cultura de nuestra comunidad. Desde nuestros inicios, hemos estado comprometidos a servir platos auténticos elaborados con ingredientes frescos y de alta calidad.',
    expandable: false,
  },
  {
    image: '/assets/menu.jpg',
    heading: 'Nuestro Menú',
    text: 'El menú de Armandita Coffee and Friends está diseñado para deleitar todos los paladares, ofreciendo una variedad de opciones. Cada receta está cuidadosamente elaborada para resaltar los sabores auténticos y frescos de nuestra cocina.',
    expandable: true,
  },
]

export default function AboutSection() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header dark">
          <h2>Sobre Armandita</h2>
          <hr />
        </div>
        {items.map((item, i) => (
          <div key={i} className={`about-row ${i % 2 === 1 ? 'reverse' : ''}`}>
            <div className={`about-image${item.expandable ? ' about-image--expandable' : ''}`}>
              <img
                src={item.image}
                alt={item.heading}
                onClick={item.expandable ? () => setLightbox(item.image) : undefined}
              />
              {item.expandable && (
                <span className="about-image-zoom" onClick={() => setLightbox(item.image)} aria-label="Ampliar imagen">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
                </span>
              )}
            </div>
            <div className="about-text">
              <h3>{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Cerrar">&times;</button>
          <img src={lightbox} alt="Menú expandido" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}
