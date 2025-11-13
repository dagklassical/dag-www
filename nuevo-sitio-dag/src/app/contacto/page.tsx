'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío de formulario
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@dagklassical.com',
      description: 'Respuesta en 24-48 horas'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+1 (555) 123-4567',
      description: 'Lun-Vie 9:00-17:00 EST'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Mundial',
      description: 'Conectando artistas globalmente'
    },
    {
      icon: Clock,
      title: 'Horarios',
      content: '24/7 Online',
      description: 'Soporte digital continuo'
    }
  ]

  const asuntos = [
    'Información General',
    'Colaboración Artística',
    'Eventos y Conciertos',
    'Prensa y Medios',
    'Soporte Técnico',
    'Otro'
  ]

  return (
    <div className="bg-dag-ivory min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-dag-burgundy to-dag-caramel text-white py-16">
        <div className="container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-dag-ivory max-w-3xl mx-auto leading-relaxed">
              Estamos aquí para conectar contigo. Ya sea que seas un artista, 
              un amante de la música clásica, o simplemente alguien interesado en nuestro mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-dag-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-dag-golden rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-dag-burgundy" />
                  </div>
                  <h3 className="text-lg font-semibold text-dag-burgundy mb-2">{info.title}</h3>
                  <p className="text-dag-caramel font-medium mb-1">{info.content}</p>
                  <p className="text-sm text-dag-caramel/70">{info.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-secondary">Envíanos un Mensaje</h2>
              <p className="text-body text-lg">
                Completa el formulario y te responderemos lo antes posible.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="card">
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    ¡Mensaje enviado con éxito! Te responderemos pronto.
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-dag-burgundy mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-dag-ivory rounded-lg focus:ring-2 focus:ring-dag-golden focus:border-dag-golden transition-colors duration-300"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dag-burgundy mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-dag-ivory rounded-lg focus:ring-2 focus:ring-dag-golden focus:border-dag-golden transition-colors duration-300"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="asunto" className="block text-sm font-medium text-dag-burgundy mb-2">
                      Asunto *
                    </label>
                    <select
                      id="asunto"
                      name="asunto"
                      required
                      value={formData.asunto}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-dag-ivory rounded-lg focus:ring-2 focus:ring-dag-golden focus:border-dag-golden transition-colors duration-300"
                    >
                      <option value="">Selecciona un asunto</option>
                      {asuntos.map((asunto) => (
                        <option key={asunto} value={asunto}>
                          {asunto}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-dag-burgundy mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={6}
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-dag-ivory rounded-lg focus:ring-2 focus:ring-dag-golden focus:border-dag-golden transition-colors duration-300 resize-none"
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-dag-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Additional Info */}
              <div className="space-y-8">
                <div className="card bg-dag-ivory border-dag-golden">
                  <h3 className="text-xl font-semibold text-dag-burgundy mb-4">Colaboración Artística</h3>
                  <p className="text-body mb-4">
                    ¿Eres un artista clásico buscando una plataforma? Estamos siempre en busca 
                    de talento excepcional para enriquecer nuestra comunidad.
                  </p>
                  <ul className="space-y-2 text-sm text-dag-caramel">
                    <li>• Perfiles de artistas verificados</li>
                    <li>• Networking con otros músicos</li>
                    <li>• Oportunidades de concierto</li>
                    <li>• Promoción en nuestras plataformas</li>
                  </ul>
                </div>

                <div className="card bg-dag-ivory border-dag-golden">
                  <h3 className="text-xl font-semibold text-dag-burgundy mb-4">Prensa y Medios</h3>
                  <p className="text-body mb-4">
                    Para entrevistas, reseñas, y cobertura mediática de eventos y artistas.
                  </p>
                  <p className="text-sm text-dag-caramel">
                    <strong>Contacto de Prensa:</strong><br />
                    press@dagklassical.com
                  </p>
                </div>

                <div className="card bg-dag-ivory border-dag-golden">
                  <h3 className="text-xl font-semibold text-dag-burgundy mb-4">Soporte Técnico</h3>
                  <p className="text-body mb-4">
                    ¿Problemas con la plataforma o necesitas ayuda técnica?
                  </p>
                  <p className="text-sm text-dag-caramel">
                    <strong>Soporte:</strong><br />
                    support@dagklassical.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}