import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Ubicación', href: '#ubicacion' },
    { name: 'Reservas', href: '#reservas' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-darker/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold flex items-center justify-center">
              <span className="font-display text-2xl text-black">B</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-xl tracking-wider text-white">Blackwood</span>
              <span className="font-display text-xl tracking-wider text-gold ml-2">Barbers</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 pl-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-gold transition-colors duration-300 uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservas"
              className="bg-gold text-black px-6 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors duration-300"
            >
              Reservar
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-gold"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-sm font-medium text-gray-300 hover:text-gold transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservas"
              onClick={() => setIsOpen(false)}
              className="block mt-4 bg-gold text-black px-6 py-3 text-sm font-semibold uppercase tracking-wider text-center hover:bg-gold-light transition-colors"
            >
              Reservar
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
