const cards = [
  {
    image: '/dist/assets/cafe-original.jpg',
    title: 'Café de alta calidad',
    text: 'Seleccionamos cuidadosamente los mejores granos de café de Oaxaca y Veracruz para garantizar una experiencia excepcional.',
  },
  {
    image: '/dist/assets/tueste-original.jpg',
    title: 'Tueste artesanal',
    text: 'Tostamos en pequeños lotes en nuestro propio taller para resaltar los perfiles únicos de cada origen.',
  },
  {
    image: '/dist/assets/hero-events.png',
    title: 'Pan artesanal',
    text: 'Pan horneado en casa, que complementa perfectamente tu experiencia Armandita.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header light">
          <h2>Somos más que una cafetería</h2>
          <hr />
        </div>
        <div className="features-grid">
          {cards.map((card, i) => (
            <div
              key={i}
              className="feature-card"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="feature-card-overlay">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
