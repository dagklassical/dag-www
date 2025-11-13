import { Metadata } from 'next'
import Link from 'next/link'
import { Building, Music, Users, Target, Heart, Award, ArrowRight, Globe, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'DAG Klassical - Nuestra Historia',
  description: 'Conoce la historia, misión y visión de DAG Klassical como pioneros en la música clásica digital',
}

export default function DAGKlassicalPage() {
  const milestones = [
    {
      year: '2020',
      title: 'Fundación',
      description: 'Danilo Álvarez funda DAG Klassical con la visión de digitalizar la música clásica',
      category: 'Origen'
    },
    {
      year: '2021',
      title: 'Primera Grabación',
      description: 'Grabamos nuestra primera sinfonía con tecnología de vanguardia',
      category: 'Producción'
    },
    {
      year: '2022',
      title: 'Expansión Artística',
      description: 'Incorporamos 50+ músicos y расширили nuestro catálogo a 500+ obras',
      category: 'Crecimiento'
    },
    {
      year: '2023',
      title: 'Innovación Blockchain',
      description: 'Introducimos la tecnología blockchain para NFTs musicales',
      category: 'Tecnología'
    },
    {
      year: '2024',
      title: 'Polygon Integration',
      description: 'Integración completa con Polygon para transacciones rápidas y seguras',
      category: 'Blockchain'
    },
    {
      year: '2025',
      title: 'Presente y Futuro',
      description: 'Líderes en música clásica digital con alcance global y 1,000+ obras',
      category: 'Actualidad'
    }
  ]

  const values = [
    {
      icon: Award,
      title: 'Excelencia Artística',
      description: 'Buscamos la perfección en cada interpretación, colaborando con los mejores músicos del mundo',
      color: 'from-dag-burgundy to-dag-caramel'
    },
    {
      icon: Zap,
      title: 'Innovación Tecnológica',
      description: 'Pioneros en la aplicación de tecnología blockchain para preservar y democratizar la música clásica',
      color: 'from-dag-golden to-dag-caramel'
    },
    {
      icon: Heart,
      title: 'Pasión Musical',
      description: 'Amor profundo por la música clásica y compromiso con su preservación y evolución',
      color: 'from-dag-ivory to-dag-golden'
    },
    {
      icon: Globe,
      title: 'Alcance Global',
      description: 'Hacemos la música clásica accesible para audiencias de todo el mundo a través de la tecnología',
      color: 'from-dag-burgundy to-dag-golden'
    }
  ]

  const achievements = [
    { number: '1,000+', label: 'Obras Grabadas', description: 'Catálogo completo de música clásica' },
    { number: '50+', label: 'Músicos Colaboradores', description: 'Red de artistas internacionales' },
    { number: '100K+', label: 'Oyentes Globales', description: 'Audiencia mundial en crecimiento' },
    { number: '25+', label: 'Países Presentes', description: 'Alcance internacional' }
  ]

  const team = [
    {
      name: 'Danilo Álvarez',
      role: 'Fundador y Director Musical',
      image: '/team/danilo-alvarez.jpg',
      bio: 'Maestro fundador con visión de digitalizar la música clásica'
    },
    {
      name: 'Equipo Técnico DAG',
      role: 'Especialistas Blockchain',
      image: '/team/tech-team.jpg',
      bio: 'Expertos en tecnología y desarrollo de plataformas digitales'
    },
    {
      name: 'Orquesta Sinfónica DAG',
      role: 'Músicos Residentes',
      image: '/team/orchestra.jpg',
      bio: '50+ músicos profesionales de clase mundial'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dag-ivory via-dag-white to-dag-buttermilk">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dag-burgundy/10 via-transparent to-dag-golden/10"></div>
        <div className="container-max section-padding relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-dag-burgundy/10 rounded-full text-dag-burgundy font-medium mb-6">
              <Building className="w-4 h-4 mr-2" />
              Nuestra Historia
            </div>
            <h1 className="text-4xl lg:text-6xl font-light text-dag-burgundy mb-6 tracking-wide">
              DAG Klassical
              <span className="block font-medium text-dag-caramel">Pioneros Musicales</span>
            </h1>
            <p className="text-xl text-dag-caramel mb-8 leading-relaxed">
              Transformando la música clásica para el futuro digital desde 2020, combinando excelencia artística con innovación tecnológica
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/nosotros/danilo-alvarez"
                className="inline-flex items-center px-8 py-4 bg-dag-burgundy text-dag-white rounded-xl font-medium hover:bg-dag-burgundy/90 transition-all duration-300 hover:scale-105"
              >
                Conocer al Fundador
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center px-8 py-4 border-2 border-dag-golden text-dag-burgundy rounded-xl font-medium hover:bg-dag-golden hover:text-dag-burgundy transition-all duration-300"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-dag-burgundy mr-3" />
                <h2 className="text-3xl font-semibold text-dag-burgundy">Nuestra Misión</h2>
              </div>
              <p className="text-lg text-dag-caramel leading-relaxed mb-6">
                Democratizar el acceso a la música clásica de la más alta calidad, utilizando tecnología blockchain para crear un ecosistema musical justo, transparente y sostenible.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-dag-caramel">
                  <div className="w-2 h-2 bg-dag-golden rounded-full mr-3"></div>
                  Preservar y digitalizar el legado musical clásico
                </li>
                <li className="flex items-center text-dag-caramel">
                  <div className="w-2 h-2 bg-dag-golden rounded-full mr-3"></div>
                  Compensar justamente a músicos y artistas
                </li>
                <li className="flex items-center text-dag-caramel">
                  <div className="w-2 h-2 bg-dag-golden rounded-full mr-3"></div>
                  Crear experiencias musicales únicas y exclusivas
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-dag-burgundy mr-3" />
                <h2 className="text-3xl font-semibold text-dag-burgundy">Nuestra Visión</h2>
              </div>
              <p className="text-lg text-dag-caramel leading-relaxed mb-6">
                Ser el referente global en música clásica digital, estableciendo nuevos estándares de excelencia artística y tecnológica en la industria musical.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-dag-caramel">
                  <div className="w-2 h-2 bg-dag-golden rounded-full mr-3"></div>
                  Liderar la revolución digital musical clásica
                </li>
                <li className="flex items-center text-dag-caramel">
                  <div className="w-2 h-2 bg-dag-golden rounded-full mr-3"></div>
                  Expandir el alcance global de la música clásica
                </li>
                <li className="flex items-center text-dag-caramel">
                  <div className="w-2 h-2 bg-dag-golden rounded-full mr-3"></div>
                  Establecer un nuevo modelo económico para artistas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-dag-caramel max-w-3xl mx-auto">
              Los principios fundamentales que guían cada decisión y acción en DAG Klassical
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="bg-dag-white rounded-2xl p-8 shadow-lg border border-dag-ivory"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${value.color} text-dag-white mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-dag-burgundy mb-4">
                    {value.title}
                  </h3>
                  <p className="text-dag-caramel leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gradient-to-r from-dag-burgundy/5 to-dag-golden/5">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-4">
              Historia de Crecimiento
            </h2>
            <p className="text-xl text-dag-caramel">
              Los momentos clave que han definido nuestra evolución como pioneros musicales
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-dag-golden"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-dag-white rounded-xl p-6 shadow-lg border border-dag-ivory">
                      <div className="text-2xl font-bold text-dag-burgundy mb-2">{milestone.year}</div>
                      <div className="inline-block px-3 py-1 bg-dag-golden/20 text-dag-burgundy text-sm rounded-full mb-3">
                        {milestone.category}
                      </div>
                      <h3 className="text-xl font-semibold text-dag-burgundy mb-3">{milestone.title}</h3>
                      <p className="text-dag-caramel">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-dag-golden rounded-full border-4 border-dag-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-4">
              Logros Destacados
            </h2>
            <p className="text-xl text-dag-caramel">
              Números que reflejan nuestro impacto y crecimiento en el ecosistema musical
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement) => (
              <div
                key={achievement.label}
                className="text-center bg-dag-white rounded-xl p-8 shadow-lg border border-dag-ivory"
              >
                <div className="text-4xl font-bold text-dag-burgundy mb-2">{achievement.number}</div>
                <div className="text-xl font-semibold text-dag-caramel mb-2">{achievement.label}</div>
                <div className="text-dag-caramel text-sm">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-dag-burgundy mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-dag-caramel">
              Las mentes creativas y técnicas detrás de la revolución musical DAG
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-dag-white rounded-xl p-6 shadow-lg border border-dag-ivory text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-dag-ivory to-dag-buttermilk rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-dag-caramel" />
                </div>
                <h3 className="text-xl font-semibold text-dag-burgundy mb-2">{member.name}</h3>
                <div className="text-dag-caramel font-medium mb-3">{member.role}</div>
                <p className="text-dag-caramel text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dag-burgundy to-dag-caramel">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-dag-white mb-6">
            Únete a Nuestra Misión
          </h2>
          <p className="text-xl text-dag-ivory/90 mb-8 max-w-2xl mx-auto">
            Sé parte de la revolución musical que combina tradición, tecnología y pasión artística
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/musica"
              className="inline-flex items-center px-8 py-4 bg-dag-golden text-dag-burgundy rounded-xl font-semibold hover:bg-dag-ivory transition-all duration-300 hover:scale-105"
            >
              Explorar Nuestra Música
              <Music className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center px-8 py-4 border-2 border-dag-golden text-dag-white rounded-xl font-medium hover:bg-dag-white hover:text-dag-burgundy transition-all duration-300"
            >
              Contactar Ahora
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}