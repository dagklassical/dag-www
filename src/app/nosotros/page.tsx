import { Metadata } from 'next'
import Link from 'next/link'
import { Users, Building, User, FileText, ArrowRight, Award, Heart, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nosotros - DAG Klassical',
  description: 'Conoce la historia de DAG Klassical, nuestro equipo y valores que impulsan la innovación musical',
}

export default function NosotrosPage() {
  const sections = [
    {
      title: 'DAG Klassical',
      description: 'Nuestra historia, misión y visión como pioneros en la música clásica digital',
      icon: Building,
      href: '/nosotros/dag-klassical',
      gradient: 'from-red-800 to-amber-700',
      features: ['Historia fundada', 'Misión y visión', 'Valores empresariales']
    },
    {
      title: 'Danilo Álvarez',
      description: 'Conoce al fundador y visionario detrás de la revolución musical blockchain',
      icon: User,
      href: '/nosotros/danilo-alvarez',
      gradient: 'from-amber-400 to-amber-700',
      features: ['Perfil profesional', 'Trayectoria musical', 'Visión blockchain']
    },
    {
      title: 'Términos y Condiciones',
      description: 'Términos de uso, política de privacidad y condiciones legales de nuestra plataforma',
      icon: FileText,
      href: '/nosotros/terminos',
      gradient: 'from-amber-50 to-amber-400',
      features: ['Términos de uso', 'Política privacidad', 'Condiciones legales']
    }
  ]

  const values = [
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Comprometidos con la más alta calidad en cada producción musical'
    },
    {
      icon: Heart,
      title: 'Pasión',
      description: 'Amor profundo por la música clásica y la innovación tecnológica'
    },
    {
      icon: Target,
      title: 'Visión',
      description: 'Pioneros en el futuro digital de la música clásica mundial'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-800/10 via-transparent to-amber-400/10"></div>
        <div className="container-max section-padding relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-red-800/10 rounded-full text-red-800 font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Nuestro Equipo
            </div>
            <h1 className="text-4xl lg:text-6xl font-light text-red-800 mb-6 tracking-wide">
              Transformando la
              <span className="block font-medium text-amber-700">Música Clásica</span>
            </h1>
            <p className="text-xl text-amber-700 mb-8 leading-relaxed">
              Somos pioneros que combinan la tradición musical clásica con la innovación tecnológica blockchain
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/nosotros/dag-klassical"
                className="inline-flex items-center px-8 py-4 bg-red-800 text-white rounded-xl font-medium hover:bg-red-800/90 transition-all duration-300 hover:scale-105"
              >
                Conocer DAG
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/nosotros/danilo-alvarez"
                className="inline-flex items-center px-8 py-4 border-2 border-amber-400 text-red-800 rounded-xl font-medium hover:bg-amber-400 hover:text-red-800 transition-all duration-300"
              >
                Conocer al Fundador
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-red-800 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo y nos impulsan hacia la excelencia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="text-center bg-white rounded-xl p-8 shadow-lg border border-amber-50"
                >
                  <div className="inline-flex p-4 bg-amber-400/20 rounded-xl text-red-800 mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-red-800 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-amber-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-red-800 mb-4">
              Explora Más
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Profundiza en nuestra historia, conoce a nuestro equipo y conoce nuestros términos
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <Link
                  key={section.title}
                  href={section.href}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-amber-50"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${section.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-red-800 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                    {section.title}
                  </h3>
                  
                  <p className="text-amber-700 mb-6 leading-relaxed">
                    {section.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {section.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-amber-700">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="inline-flex items-center text-red-800 font-medium group-hover:text-amber-700 transition-colors duration-300">
                    Explorar
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Quote Section */}
      <section className="py-16 bg-gradient-to-r from-red-800/5 to-amber-400/5">
        <div className="container-max section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <blockquote className="text-2xl lg:text-3xl font-light text-red-800 mb-6 italic">
              {`"La música clásica trasciende el tiempo. Nosotros la llevamos al futuro."`}
            </blockquote>
            <cite className="text-xl text-amber-700">— Danilo Álvarez, Fundador</cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-800 to-amber-700">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-white mb-6">
            Únete a Nuestra Misión
          </h2>
          <p className="text-xl text-amber-50/90 mb-8 max-w-2xl mx-auto">
            Sé parte de la revolución musical que combina tradición e innovación en el mundo clásico
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center px-8 py-4 bg-amber-400 text-red-800 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-300 hover:scale-105"
          >
            Contactar
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}