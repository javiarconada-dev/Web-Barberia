import { useState, useMemo } from 'react'
import { services, barbers, getMockAvailability } from '../data'

const steps = ['Servicio', 'Barbero', 'Fecha y Hora', 'Confirmación']

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedService, setSelectedService] = useState(null)
  const [selectedBarber, setSelectedBarber] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', notes: '' })
  const [confirmed, setConfirmed] = useState(false)

  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, 3))
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 0))

  const handleConfirm = (e) => {
    e.preventDefault()
    setConfirmed(true)
  }

  const resetBooking = () => {
    setCurrentStep(0)
    setSelectedService(null)
    setSelectedBarber(null)
    setSelectedDate(null)
    setSelectedTime(null)
    setFormData({ name: '', phone: '', email: '', notes: '' })
    setConfirmed(false)
  }

  // Calendario
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startPad = (firstDay.getDay() + 6) % 7 // lunes = 0
    const days = []

    for (let i = 0; i < startPad; i++) {
      days.push(null)
    }
    for (let d = 1; d <= lastDay.getDate(); d++) {
      const date = new Date(year, month, d)
      const dow = date.getDay()
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const isPast = date < today
      const isClosed = dow === 0 || dow === 1
      days.push({ day: d, date, disabled: isPast || isClosed, isClosed })
    }
    return days
  }, [currentMonth])

  const timeSlots = useMemo(() => {
    if (!selectedDate || !selectedBarber) return []
    const barberId = selectedBarber === 'any' ? 1 : selectedBarber.id
    return getMockAvailability(selectedDate, barberId)
  }, [selectedDate, selectedBarber])

  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  const dayNames = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']

  const prevMonth = () => {
    const today = new Date()
    const newMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    if (newMonth.getFullYear() > today.getFullYear() || (newMonth.getFullYear() === today.getFullYear() && newMonth.getMonth() >= today.getMonth())) {
      setCurrentMonth(newMonth)
    }
  }
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const formatDate = (date) => {
    if (!date) return ''
    return `${date.getDate()} de ${monthNames[date.getMonth()]} de ${date.getFullYear()}`
  }

  // ===== PANTALLA DE CONFIRMACIÓN FINAL =====
  if (confirmed) {
    return (
      <section id="reservas" className="py-24 bg-brand-dark">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-brand-gray border border-gold/30 p-12">
            {/* Check animado */}
            <div className="w-20 h-20 mx-auto mb-8 rounded-full border-2 border-gold flex items-center justify-center">
              <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-4xl text-white mb-4">Reserva Confirmada</h3>
            <p className="text-gray-400 mb-8">Te hemos enviado un SMS de confirmación al número proporcionado.</p>

            <div className="text-left bg-brand-dark p-6 space-y-3 mb-8">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Servicio</span>
                <span className="text-white font-medium">{selectedService?.name}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Barbero</span>
                <span className="text-white font-medium">{selectedBarber === 'any' ? 'Sin preferencia' : selectedBarber?.name}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Fecha</span>
                <span className="text-white font-medium">{formatDate(selectedDate)}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Hora</span>
                <span className="text-white font-medium">{selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Precio</span>
                <span className="text-gold font-display text-2xl">{selectedService?.price}€</span>
              </div>
            </div>

            <button
              onClick={resetBooking}
              className="bg-gold text-black px-8 py-3 font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors"
            >
              Nueva Reserva
            </button>
          </div>
        </div>
      </section>
    )
  }

  // ===== WIZARD PRINCIPAL =====
  return (
    <section id="reservas" className="py-24 bg-brand-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Reserva Online</span>
          <h2 className="font-display text-5xl sm:text-6xl text-white mt-4 mb-6">Reserva Tu Cita</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Selecciona tu servicio, barbero preferido y el horario que mejor te venga
          </p>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-center mb-16 max-w-2xl mx-auto">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 flex items-center justify-center border-2 transition-colors duration-300 ${
                    i < currentStep
                      ? 'bg-gold border-gold text-black'
                      : i === currentStep
                        ? 'border-gold text-gold'
                        : 'border-white/20 text-white/30'
                  }`}
                >
                  {i < currentStep ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="font-display text-lg">{i + 1}</span>
                  )}
                </div>
                <span className={`text-xs mt-2 uppercase tracking-wider hidden sm:block ${i <= currentStep ? 'text-gold' : 'text-white/30'}`}>
                  {step}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`w-12 sm:w-20 h-px mx-2 ${i < currentStep ? 'bg-gold' : 'bg-white/10'}`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="min-h-[400px]">
          {/* PASO 1: Servicio */}
          {currentStep === 0 && (
            <div>
              <h3 className="font-display text-2xl text-white mb-6 text-center">Elige tu servicio</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`text-left p-6 border transition-all duration-300 ${
                      selectedService?.id === service.id
                        ? 'border-gold bg-gold/10'
                        : 'border-white/10 bg-brand-gray hover:border-white/30'
                    }`}
                  >
                    {(service.popular || service.premium) && (
                      <span className={`inline-block text-xs font-bold px-2 py-0.5 uppercase tracking-wider mb-3 ${service.popular ? 'bg-gold text-black' : 'bg-white text-black'}`}>
                        {service.popular ? 'Popular' : 'Premium'}
                      </span>
                    )}
                    <h4 className="font-display text-xl text-white mb-2">{service.name}</h4>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                    <div className="flex items-end justify-between pt-4 border-t border-white/10">
                      <span className="font-display text-3xl text-gold">{service.price}<span className="text-lg">€</span></span>
                      <span className="text-sm text-gray-500 uppercase tracking-wider">{service.durationLabel}</span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex justify-end mt-8">
                <button
                  onClick={nextStep}
                  disabled={!selectedService}
                  className="bg-gold text-black px-8 py-3 font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  Siguiente
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* PASO 2: Barbero */}
          {currentStep === 1 && (
            <div>
              <h3 className="font-display text-2xl text-white mb-6 text-center">Elige tu barbero</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Sin preferencia */}
                <button
                  onClick={() => setSelectedBarber('any')}
                  className={`p-6 border transition-all duration-300 text-center ${
                    selectedBarber === 'any'
                      ? 'border-gold bg-gold/10'
                      : 'border-white/10 bg-brand-gray hover:border-white/30'
                  }`}
                >
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full border-2 border-white/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="font-display text-lg text-white">Sin preferencia</h4>
                  <p className="text-gray-400 text-xs mt-1">Cualquier barbero disponible</p>
                </button>

                {barbers.map((barber) => (
                  <button
                    key={barber.id}
                    onClick={() => setSelectedBarber(barber)}
                    className={`p-6 border transition-all duration-300 text-center ${
                      selectedBarber?.id === barber.id
                        ? 'border-gold bg-gold/10'
                        : 'border-white/10 bg-brand-gray hover:border-white/30'
                    }`}
                  >
                    <img
                      src={barber.image}
                      alt={barber.name}
                      className="w-16 h-16 mx-auto mb-3 rounded-full object-cover grayscale"
                    />
                    <h4 className="font-display text-lg text-white">{barber.name.split(' ')[0]}</h4>
                    <p className="text-gray-400 text-xs mt-1">{barber.speciality}</p>
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  className="border border-white/20 text-white px-8 py-3 font-semibold uppercase tracking-wider hover:border-gold hover:text-gold transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Atrás
                </button>
                <button
                  onClick={nextStep}
                  disabled={!selectedBarber}
                  className="bg-gold text-black px-8 py-3 font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  Siguiente
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* PASO 3: Fecha y Hora */}
          {currentStep === 2 && (
            <div>
              <h3 className="font-display text-2xl text-white mb-6 text-center">Elige fecha y hora</h3>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Calendario */}
                <div className="bg-brand-gray border border-white/10 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <button onClick={prevMonth} className="text-gray-400 hover:text-gold transition-colors p-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <h4 className="font-display text-xl text-white">
                      {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                    </h4>
                    <button onClick={nextMonth} className="text-gray-400 hover:text-gold transition-colors p-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Días de la semana */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {dayNames.map((d) => (
                      <div key={d} className="text-center text-xs text-gray-500 uppercase tracking-wider py-2">{d}</div>
                    ))}
                  </div>

                  {/* Días del mes */}
                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map((d, i) =>
                      d === null ? (
                        <div key={`pad-${i}`}></div>
                      ) : (
                        <button
                          key={d.day}
                          disabled={d.disabled}
                          onClick={() => { setSelectedDate(d.date); setSelectedTime(null) }}
                          className={`aspect-square flex items-center justify-center text-sm transition-all duration-200 ${
                            d.disabled
                              ? 'text-white/10 cursor-not-allowed'
                              : selectedDate?.getDate() === d.day && selectedDate?.getMonth() === d.date.getMonth()
                                ? 'bg-gold text-black font-bold'
                                : 'text-white hover:bg-white/10'
                          }`}
                        >
                          {d.day}
                        </button>
                      )
                    )}
                  </div>

                  {/* Leyenda */}
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-gold"></div>
                      <span>Seleccionado</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 border border-white/10"></div>
                      <span>No disponible</span>
                    </div>
                  </div>
                </div>

                {/* Horarios */}
                <div className="bg-brand-gray border border-white/10 p-6">
                  <h4 className="font-display text-xl text-white mb-4">
                    {selectedDate ? formatDate(selectedDate) : 'Selecciona una fecha'}
                  </h4>
                  {selectedDate ? (
                    timeSlots.length > 0 ? (
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot.time}
                            disabled={!slot.available}
                            onClick={() => setSelectedTime(slot.time)}
                            className={`py-3 text-sm font-medium transition-all duration-200 ${
                              !slot.available
                                ? 'bg-white/5 text-white/20 line-through cursor-not-allowed'
                                : selectedTime === slot.time
                                  ? 'bg-gold text-black font-bold'
                                  : 'bg-brand-dark text-white hover:bg-white/10 border border-white/10'
                            }`}
                          >
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-400 text-center py-12">Cerrado este día</p>
                    )
                  ) : (
                    <div className="flex items-center justify-center h-48 text-gray-500">
                      <div className="text-center">
                        <svg className="w-12 h-12 mx-auto mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p>Selecciona una fecha en el calendario</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  className="border border-white/20 text-white px-8 py-3 font-semibold uppercase tracking-wider hover:border-gold hover:text-gold transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Atrás
                </button>
                <button
                  onClick={nextStep}
                  disabled={!selectedDate || !selectedTime}
                  className="bg-gold text-black px-8 py-3 font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  Siguiente
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* PASO 4: Datos y Confirmación */}
          {currentStep === 3 && (
            <div>
              <h3 className="font-display text-2xl text-white mb-6 text-center">Confirma tu reserva</h3>
              <div className="grid lg:grid-cols-5 gap-8">
                {/* Formulario */}
                <form onSubmit={handleConfirm} className="lg:col-span-3 space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 uppercase tracking-wider mb-2">Nombre completo *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-brand-gray border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 uppercase tracking-wider mb-2">Teléfono *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-brand-gray border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                      placeholder="612 345 678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 uppercase tracking-wider mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-brand-gray border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 uppercase tracking-wider mb-2">Notas</label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={3}
                      className="w-full bg-brand-gray border border-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Indicaciones especiales..."
                    ></textarea>
                  </div>
                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="border border-white/20 text-white px-8 py-3 font-semibold uppercase tracking-wider hover:border-gold hover:text-gold transition-colors flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Atrás
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.name || !formData.phone}
                      className="bg-gold text-black px-8 py-3 font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      Confirmar Reserva
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </button>
                  </div>
                </form>

                {/* Resumen */}
                <div className="lg:col-span-2">
                  <div className="bg-brand-gray border border-gold/30 p-6 sticky top-24">
                    <h4 className="font-display text-xl text-gold mb-6 uppercase tracking-wider">Resumen</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between border-b border-white/10 pb-3">
                        <span className="text-gray-400">Servicio</span>
                        <span className="text-white font-medium text-right">{selectedService?.name}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-3">
                        <span className="text-gray-400">Duración</span>
                        <span className="text-white">{selectedService?.durationLabel}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-3">
                        <span className="text-gray-400">Barbero</span>
                        <span className="text-white">{selectedBarber === 'any' ? 'Sin preferencia' : selectedBarber?.name}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-3">
                        <span className="text-gray-400">Fecha</span>
                        <span className="text-white text-right">{formatDate(selectedDate)}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-3">
                        <span className="text-gray-400">Hora</span>
                        <span className="text-white">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between pt-2">
                        <span className="text-gray-400 text-lg">Total</span>
                        <span className="font-display text-3xl text-gold">{selectedService?.price}€</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Booking
