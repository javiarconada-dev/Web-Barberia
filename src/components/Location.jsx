const Location = () => {
  const schedule = [
    { day: 'Lunes', hours: 'Cerrado' },
    { day: 'Martes', hours: '10:00 - 20:00' },
    { day: 'Miércoles', hours: '10:00 - 20:00' },
    { day: 'Jueves', hours: '10:00 - 20:00' },
    { day: 'Viernes', hours: '10:00 - 21:00' },
    { day: 'Sábado', hours: '09:00 - 18:00' },
    { day: 'Domingo', hours: 'Cerrado' },
  ]

  return (
    <section id="ubicacion" className="py-24 bg-brand-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Encuéntranos</span>
          <h2 className="font-display text-5xl sm:text-6xl text-white mt-4 mb-6">Ubicación & Horario</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="relative">
            <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] bg-brand-gray overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6232618186847!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287d10b6f3b1%3A0x6f4d4ea3f3c4e0c!2sPuerta%20del%20Sol%2C%20Madrid!5e0!3m2!1sen!2ses!4v1699999999999!5m2!1sen!2ses"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Blackwood Barbers"
              ></iframe>
            </div>
            {/* Overlay card */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-xs bg-brand-dark/95 backdrop-blur-sm p-6 border border-gold/30">
              <h3 className="font-display text-xl text-gold mb-2">Blackwood Barbers</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Calle Gran Vía, 42<br />
                28013 Madrid, España
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold text-sm mt-4 hover:underline"
              >
                Cómo llegar
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-10">
            {/* Schedule */}
            <div>
              <h3 className="font-display text-2xl text-white mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Horario de Apertura
              </h3>
              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-3 border-b border-white/10 ${
                      item.hours === 'Cerrado' ? 'opacity-50' : ''
                    }`}
                  >
                    <span className="text-gray-300">{item.day}</span>
                    <span className={item.hours === 'Cerrado' ? 'text-gray-500' : 'text-gold font-medium'}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="font-display text-2xl text-white mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contacto Rápido
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+34912345678"
                  className="flex items-center gap-4 p-4 bg-brand-gray hover:bg-brand-gray-light transition-colors group"
                >
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Llámanos</p>
                    <p className="text-white font-medium">+34 912 345 678</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/34912345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-brand-gray hover:bg-brand-gray-light transition-colors group"
                >
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">WhatsApp</p>
                    <p className="text-white font-medium">Escríbenos</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Parking info */}
            <div className="p-4 border border-gold/30 bg-gold/5">
              <p className="text-gold text-sm flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Parking público a 50m. Metro más cercano: Gran Vía (L1, L5) a 2 min andando.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
