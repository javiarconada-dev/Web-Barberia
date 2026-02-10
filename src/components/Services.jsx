const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
        </svg>
      ),
      name: 'Corte Clásico',
      description: 'Corte de cabello tradicional con tijera y máquina, incluye lavado y peinado final.',
      price: '25',
      duration: '45 min',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      name: 'Corte + Barba',
      description: 'Servicio completo de corte de cabello y arreglo de barba con navaja tradicional.',
      price: '40',
      duration: '60 min',
      popular: true,
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      name: 'Tinte de Barba',
      description: 'Coloración profesional de barba para cubrir canas o cambiar de look.',
      price: '20',
      duration: '30 min',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      name: 'Afeitado Tradicional',
      description: 'Afeitado clásico con toalla caliente, espuma y navaja de barbero.',
      price: '30',
      duration: '45 min',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      name: 'Tratamiento Capilar',
      description: 'Tratamiento revitalizante con masaje craneal y productos premium.',
      price: '35',
      duration: '40 min',
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      name: 'Experiencia Blackwood',
      description: 'Pack completo: corte, barba, tratamiento facial y masaje. La experiencia definitiva.',
      price: '75',
      duration: '90 min',
      premium: true,
    },
  ]

  return (
    <section id="servicios" className="py-24 bg-brand-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Lo que ofrecemos</span>
          <h2 className="font-display text-5xl sm:text-6xl text-white mt-4 mb-6">Nuestros Servicios</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Cada servicio es una experiencia única, donde la tradición se encuentra con las técnicas más modernas
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-brand-gray p-8 border border-white/5 hover:border-gold/50 transition-all duration-500 ${
                service.premium ? 'lg:col-span-1 ring-1 ring-gold/30' : ''
              }`}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute -top-3 right-6 bg-gold text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  Popular
                </div>
              )}
              {service.premium && (
                <div className="absolute -top-3 right-6 bg-white text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  Premium
                </div>
              )}

              {/* Icon */}
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl text-white mb-3">{service.name}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

              {/* Price and duration */}
              <div className="flex items-end justify-between pt-6 border-t border-white/10">
                <div>
                  <span className="font-display text-4xl text-gold">{service.price}</span>
                  <span className="text-gold text-xl">€</span>
                </div>
                <span className="text-sm text-gray-500 uppercase tracking-wider">{service.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#reservas"
            className="inline-flex items-center gap-3 bg-gold text-black px-10 py-4 font-semibold uppercase tracking-wider hover:bg-gold-light transition-all duration-300"
          >
            Reservar Ahora
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
