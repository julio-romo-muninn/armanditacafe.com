export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="contact-split">
        <div className="contact-info">
          <div className="contact-info-inner">
            <div className="section-header dark">
              <h2>Visítanos</h2>
              <hr />
            </div>

            <h4 className="contact-subheading">Aún mejor ¡Ven a visitarnos!</h4>
            <p className="contact-desc">Disfruta de tus alimentos preparados en casa y café de alta especialidad.</p>

            <a
              href="https://wa.me/526643142424"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              ¿Para llevar?
            </a>

            <h4 className="contact-biz-name">Armandita Coffee and Friends</h4>
            <p className="contact-address">González Ortega 850, CENTRO, 22000 Tijuana, B.C.</p>
            <p className="contact-phone">
              Atención a clientes{' '}
              <a href="tel:6634316007">663 431 6007</a>
            </p>
            <p className="contact-phone">
              Pedidos{' '}
              <a href="tel:6634316007">663 431 6007</a>
            </p>

            <div className="contact-hours">
              <h4>Horario</h4>
              <table className="hours-table">
                <tbody>
                  <tr><td>lun</td><td>07:30 a.m. – 08:00 p.m.</td></tr>
                  <tr><td>mar</td><td>07:30 a.m. – 08:00 p.m.</td></tr>
                  <tr><td>mié</td><td>07:30 a.m. – 08:00 p.m.</td></tr>
                  <tr><td>jue</td><td>07:30 a.m. – 08:00 p.m.</td></tr>
                  <tr><td>vie</td><td>07:30 a.m. – 08:00 p.m.</td></tr>
                  <tr><td>sáb</td><td>07:30 a.m. – 08:00 p.m.</td></tr>
                  <tr><td>dom</td><td>07:30 a.m. – 08:00 p.m.</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <div className="map-container">
            <iframe
              title="Ubicación Armandita Coffee and Friends"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.2!2d-117.0385!3d32.5313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9484a5b6b0b0f%3A0x0!2sGonz%C3%A1lez+Ortega+850%2C+Centro%2C+22000+Tijuana%2C+B.C.!5e0!3m2!1ses!2smx!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
