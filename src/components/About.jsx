const About = () => {
  const team = [
    {
      name: 'Carlos Blackwood',
      role: 'Fundador & Master Barber',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      speciality: 'Cortes clásicos',
    },
    {
      name: 'Miguel Ángel Torres',
      role: 'Senior Barber',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      speciality: 'Diseño de barba',
    },
    {
      name: 'David Ruiz',
      role: 'Barber & Colorista',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      speciality: 'Tintes y color',
    },
    {
      name: 'Alejandro Vega',
      role: 'Junior Barber',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      speciality: 'Fades modernos',
    },
  ]

  return (
    <section id="nosotros" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Interior de Blackwood Barbers"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold -z-10 hidden lg:block"></div>
            {/* Experience badge */}
            <div className="absolute -bottom-8 -left-8 bg-gold p-6 hidden lg:block">
              <p className="font-display text-5xl text-black">5+</p>
              <p className="text-black text-sm uppercase tracking-wider">Años</p>
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Nuestra historia</span>
            <h2 className="font-display text-5xl sm:text-6xl text-white mt-4 mb-8">Sobre Nosotros</h2>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                <span className="text-gold font-semibold">Blackwood Barbers</span> nació en 2019 con una visión clara:
                recuperar el arte perdido de la barbería tradicional y fusionarlo con las tendencias más actuales.
              </p>
              <p>
                Nuestro espacio es más que una barbería. Es un refugio donde los caballeros pueden desconectar,
                disfrutar de una cerveza artesanal y recibir un servicio de primera clase en un ambiente que
                respira masculinidad clásica y estilo contemporáneo.
              </p>
              <p>
                Cada uno de nuestros barberos ha sido formado en las técnicas tradicionales de navaja y tijera,
                combinándolas con las últimas tendencias en corte y cuidado masculino.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-white/10">
              <div>
                <div className="w-12 h-12 border border-gold flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="font-display text-lg text-white">Calidad</h4>
                <p className="text-sm text-gray-400 mt-1">Sin compromisos</p>
              </div>
              <div>
                <div className="w-12 h-12 border border-gold flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-display text-lg text-white">Tradición</h4>
                <p className="text-sm text-gray-400 mt-1">Técnicas clásicas</p>
              </div>
              <div>
                <div className="w-12 h-12 border border-gold flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-display text-lg text-white">Estilo</h4>
                <p className="text-sm text-gray-400 mt-1">Siempre actual</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Profesionales</span>
            <h2 className="font-display text-5xl sm:text-6xl text-white mt-4">Nuestro Equipo</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden aspect-[3/4] mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-gold text-sm">{member.speciality}</span>
                  </div>
                </div>
                <h3 className="font-display text-xl text-white">{member.name}</h3>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
