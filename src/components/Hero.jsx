const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-dark"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rotate-45 hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 border border-gold/10 rotate-12 hidden lg:block"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-gold/50 px-4 py-2 mb-8">
          <div className="w-2 h-2 bg-gold"></div>
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Establecido 2019</span>
          <div className="w-2 h-2 bg-gold"></div>
        </div>

        {/* Main title */}
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-4 leading-none">
          Blackwood
        </h1>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold mb-8 leading-none">
          Barbers
        </h2>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light tracking-wide">
          Donde el arte del afeitado clásico se encuentra con el estilo contemporáneo.
          <span className="text-gold"> Una experiencia premium para el caballero moderno.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#reservas"
            className="group bg-gold text-black px-10 py-4 text-lg font-semibold uppercase tracking-wider hover:bg-gold-light transition-all duration-300 flex items-center gap-3"
          >
            Reservar Cita
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#servicios"
            className="border-2 border-white/30 text-white px-10 py-4 text-lg font-semibold uppercase tracking-wider hover:border-gold hover:text-gold transition-all duration-300"
          >
            Ver Servicios
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 text-gold mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 pt-10 border-t border-white/10 max-w-3xl mx-auto">
          <div>
            <p className="font-display text-4xl sm:text-5xl text-gold">5+</p>
            <p className="text-sm text-gray-400 uppercase tracking-wider mt-2">Años de experiencia</p>
          </div>
          <div>
            <p className="font-display text-4xl sm:text-5xl text-gold">10K+</p>
            <p className="text-sm text-gray-400 uppercase tracking-wider mt-2">Clientes satisfechos</p>
          </div>
          <div>
            <p className="font-display text-4xl sm:text-5xl text-gold">4</p>
            <p className="text-sm text-gray-400 uppercase tracking-wider mt-2">Barberos expertos</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
