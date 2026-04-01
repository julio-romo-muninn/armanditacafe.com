const events = [
  {
    date: 'PRÓXIMAMENTE',
    title: 'TALLER DE PINTURA ACRÍLICA',
    description: 'Te invitamos a escuchar a bandas en vivo tocando música bellísima en el parque. Disfruta de los sonidos de Laureen Davis and the Kings, y di...',
    timeStart: null,
    timeEnd: null,
    location: 'Armandita Coffe and Friends',
    locationSub: 'VISITA NUESTRAS REDES SOCIALES',
    image: '/assets/redes-sociales-3.jpg',
  },
  {
    date: '18/04/2026',
    title: 'TALLER DE EXTRACCIÓN DE CAFÉ',
    description: 'Te invitamos a escuchar a bandas en vivo tocando música bellísima en el parque. Disfruta de los sonidos de Laureen Davis and the Kings, y di...',
    timeStart: '9 a. m.',
    timeEnd: '12 p. m.',
    location: 'Armandita Coffe and Friends',
    locationSub: null,
    image: '/assets/redes-sociales-1.jpg',
  },
  {
    date: '18/04/2026',
    title: 'TALLER DE CERÁMICA',
    description: 'Te invitamos a escuchar a bandas en vivo tocando música bellísima en el parque. Disfruta de los sonidos de Laureen Davis and the Kings, y di...',
    timeStart: '1 p. m.',
    timeEnd: '5 p. m.',
    location: 'Armandita Coffe and Friends',
    locationSub: null,
    image: '/assets/redes-sociales.jpg',
  },
]

export default function EventsSection() {
  return (
    <section className="events" id="events">
      <div className="container">
        <div className="section-header dark">
          <h2>Eventos Armandita</h2>
          <hr />
        </div>
        <div className="events-grid">
          {events.map((event, i) => (
            <div key={i} className="event-card">
              {event.image && (
                <div className="event-card-image">
                  <img src={event.image} alt={event.title} />
                </div>
              )}
              <div className="event-card-inner">
                <div className="event-date-badge">{event.date}</div>
                <h4 className="event-title">{event.title}</h4>
                <p className="event-desc">{event.description}</p>
                <button className="btn btn-event-details">Detalles del evento</button>
                {event.timeStart && (
                  <div className="event-time">
                    <span>{event.timeStart}</span>
                    <span className="event-time-sep">-</span>
                    <span>{event.timeEnd}</span>
                  </div>
                )}
                {event.locationSub && <p className="event-location-sub">{event.locationSub}</p>}
                <p className="event-location">{event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
