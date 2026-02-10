export const services = [
  {
    id: 1,
    name: 'Corte Clásico',
    description: 'Corte de cabello tradicional con tijera y máquina, incluye lavado y peinado final.',
    price: 25,
    duration: 45,
    durationLabel: '45 min',
    popular: false,
    premium: false,
  },
  {
    id: 2,
    name: 'Corte + Barba',
    description: 'Servicio completo de corte de cabello y arreglo de barba con navaja tradicional.',
    price: 40,
    duration: 60,
    durationLabel: '60 min',
    popular: true,
    premium: false,
  },
  {
    id: 3,
    name: 'Tinte de Barba',
    description: 'Coloración profesional de barba para cubrir canas o cambiar de look.',
    price: 20,
    duration: 30,
    durationLabel: '30 min',
    popular: false,
    premium: false,
  },
  {
    id: 4,
    name: 'Afeitado Tradicional',
    description: 'Afeitado clásico con toalla caliente, espuma y navaja de barbero.',
    price: 30,
    duration: 45,
    durationLabel: '45 min',
    popular: false,
    premium: false,
  },
  {
    id: 5,
    name: 'Tratamiento Capilar',
    description: 'Tratamiento revitalizante con masaje craneal y productos premium.',
    price: 35,
    duration: 40,
    durationLabel: '40 min',
    popular: false,
    premium: false,
  },
  {
    id: 6,
    name: 'Experiencia Blackwood',
    description: 'Pack completo: corte, barba, tratamiento facial y masaje. La experiencia definitiva.',
    price: 75,
    duration: 90,
    durationLabel: '90 min',
    popular: false,
    premium: true,
  },
]

export const barbers = [
  {
    id: 1,
    name: 'Carlos Blackwood',
    role: 'Fundador & Master Barber',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    speciality: 'Cortes clásicos',
  },
  {
    id: 2,
    name: 'Miguel Ángel Torres',
    role: 'Senior Barber',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    speciality: 'Diseño de barba',
  },
  {
    id: 3,
    name: 'David Ruiz',
    role: 'Barber & Colorista',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    speciality: 'Tintes y color',
  },
  {
    id: 4,
    name: 'Alejandro Vega',
    role: 'Junior Barber',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    speciality: 'Fades modernos',
  },
]

// Genera disponibilidad mock determinista basada en la fecha
function seededRandom(seed) {
  let x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

export function getMockAvailability(date, barberId) {
  const dayOfWeek = date.getDay() // 0=domingo, 1=lunes

  // Cerrado domingos y lunes
  if (dayOfWeek === 0 || dayOfWeek === 1) return []

  // Sábados: 09:00-17:30, resto: 10:00-19:30
  const isSaturday = dayOfWeek === 6
  const startHour = isSaturday ? 9 : 10
  const endHour = isSaturday ? 17 : 19

  const slots = []
  for (let h = startHour; h <= endHour; h++) {
    for (const m of [0, 30]) {
      if (h === endHour && m === 30) {
        if (!isSaturday) continue
        if (isSaturday && h === 17) continue
      }
      const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate() + h * 60 + m + barberId * 7
      const available = seededRandom(seed) > 0.3 // ~70% disponible
      const time = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
      slots.push({ time, available })
    }
  }
  return slots
}
