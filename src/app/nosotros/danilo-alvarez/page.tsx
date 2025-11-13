import { Metadata } from 'next'
import Link from 'next/link'
import { User, Music, Zap, Award, Users, ArrowRight, Quote, Globe, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Danilo Álvarez - Fundador DAG Klassical',
  description: 'Conoce al fundador y visionario detrás de la revolución musical blockchain de DAG Klassical',
}

export default function DaniloAlvarezPage() {
  const achievements = [
    {
      title: 'Fundación DAG Klassical',
      year: '2020',
      description: 'Creó la primera plataforma blockchain dedicada exclusivamente a música clásica',
      icon: Award,
      color: 'from-red-800 to-amber-700'
    },
    {
      title: '500+ Obras Digitalizadas',
      year: '2023',
      description: 'Supervisó la digitalización del catálogo más completo de música clásica',
      icon: Music,
      color: 'from-amber-400 to-amber-700'
    },
    {
      title: 'Integración Polygon',
      year: '2024',
      description: 'Pionero en la implementación de blockchain Polygon para NFTs musicales',
      icon: Zap,
      color: 'from-amber-50 to-amber-400'
    },
    {
      title: 'Red Global de Músicos',
      year: '2025',
      description: 'Construyó una red de 50+ músicos de clase mundial alrededor del mundo',
      icon: Users,
      color: 'from-red-800 to-amber-400'
    }
  ]

  const expertise = [
    { area: 'Dirección Musical', level: 95 },
    { area: 'Tecnología Blockchain', level: 88 },
    { area: 'Producción Audio', level: 92 },
    { area: 'Innovación Digital', level: 90 },
    { area: 'Gestión Cultural', level: 87 },
    { area: 'Visión Estratégica', level: 93 }
  ]

  const philosophy = [
    {
      title: 'Preservación Digital',
      description: 'La tecnología debe servir para preservar y democratizar el arte, no para reemplazarlo',
      icon: Heart
    },
    {
      title: 'Justicia Artística',
      description: 'Los artistas merecen compensación justa y transparente por su trabajo creativo',
      icon: Users
    },
    {
      title: 'Innovación Responsable',
      description: 'La tecnología debe potenciar la expresión artística, nunca limitarla',
      icon: Zap
    },
    {
      title: 'Alcance Global',
      description: 'La música clásica trasciende fronteras y debe ser accesible para todos',
      icon: Globe
    }
  ]

  const projects = [
    {
      title: 'Proyecto Beethoven Completo',
      description: 'Iniciativa para digitalizar todas las obras de Beethoven en alta calidad',
      status: 'En Desarrollo',
      year: '2024-2025'
    },
    {
      title: 'Red de Músicos Globales',
      description: 'Expansión de la red artística DAG a 25 países adicionales',
      status: 'Planificación',
      year: '2025-2026'
    },
    {
      title: 'Academia Musical DAG',
      description: 'Plataforma educativa para formar la próxima generación de músicos clásicos',
      status: 'Concepto',
      year: '2026'
    }
  ]

  const testimonials = [
    {
      quote: "Danilo no solo visionó el futuro de la música clásica, sino que lo hizo realidad. Su liderazgo ha transformado cómo entendemos la digitalización del arte.",
      author: "María González",
      role: "Directora Musical, Orquesta Sinfónica"
    },
    {
      quote: "La combinación de visión artística y conocimiento técnico de Danilo es única. Ha creado un modelo sostenible para músicos en la era digital.",
      author: "Carlos Mendoza",
      role: "Especialista Blockchain"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-800/10 via-transparent to-amber-400/10"></div>
        <div className="container-max section-padding relative">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              {/* Profile Image */}
              <div className="lg:col-span-1">
                <div className="aspect-square bg-gradient-to-br from-red-800 to-amber-700 rounded-2xl flex items-center justify-center text-white">
                  <User className="w-32 h-32" />
                </div>
              </div>
              
              {/* Content */}
              <div className="lg:col-span-2 text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 bg-red-800/10 rounded-full text-red-800 font-medium mb-6">
                  <User className="w-4 h-4 mr-2" />
                  Fundador y Visionario
                </div>
                <h1 className="text-4xl lg:text-5xl font-light text-red-800 mb-4 tracking-wide">
                  Danilo Álvarez
                </h1>
                <p className="text-2xl text-amber-700 mb-6 font-medium">
                  Fundador & Director Musical DAG Klassical
                </p>
                <p className="text-lg text-amber-700 mb-8 leading-relaxed">
                  Maestro visionario que transformó la música clásica digital mediante blockchain, creando el primer ecosistema sostenible para músicos y coleccionistas en el mundo
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/nosotros/dag-klassical"
                    className="inline-flex items-center px-6 py-3 bg-red-800 text-white rounded-lg font-medium hover:bg-red-800/90 transition-all duration-300"
                  >
                    Conocer DAG Klassical
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center px-6 py-3 border-2 border-amber-400 text-red-800 rounded-lg font-medium hover:bg-amber-400 hover:text-red-800 transition-all duration-300"
                  >
                    Contactar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-red-800 mb-4">
                Su Historia
              </h2>
              <p className="text-xl text-amber-700">
                El camino de un visionario que revolucionó la industria musical
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-50 mb-8">
                <Quote className="w-8 h-8 text-amber-400 mb-4" />
                <p className="text-lg text-amber-700 leading-relaxed italic mb-6">
                  {`"La música clásica trasciende el tiempo. Nosotros la llevamos al futuro, no reemplazándola, sino preservándola y democratizándola para las próximas generaciones."`}
                </p>
                <div className="text-red-800 font-medium">— Danilo Álvarez, 2024</div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-red-800 mb-4">Formación Musical</h3>
                  <p className="text-amber-700 leading-relaxed mb-4">
                    Danilo comenzó su formación musical a los 6 años, especializándose en composición y dirección orquestal. Graduado del Conservatorio Nacional con honores, ha dirigido las principales orquestas de América Latina.
                  </p>
                  <h3 className="text-xl font-semibold text-red-800 mb-4 mt-6">Trayectoria Técnica</h3>
                  <p className="text-amber-700 leading-relaxed">
                    Su pasión por la tecnología lo llevó a estudiar desarrollo blockchain, convirtiéndose en uno de los primeros músicos en aplicar esta tecnología para crear un ecosistema justo para artistas.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-800 mb-4">Visión Empresarial</h3>
                  <p className="text-amber-700 leading-relaxed mb-4">
                    En 2020, Danilo fundó DAG Klassical con la visión de crear la primera plataforma que combinara excelencia musical clásica con tecnología blockchain para beneficio de artistas y coleccionistas.
                  </p>
                  <h3 className="text-xl font-semibold text-red-800 mb-4 mt-6">Impacto Global</h3>
                  <p className="text-amber-700 leading-relaxed">
                    Hoy, DAG Klassical es reconocido mundialmente como pionero en la digitalización responsable de la música clásica, estableciendo nuevos estándares en la industria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-red-800 mb-4">
              Logros Principales
            </h2>
            <p className="text-xl text-amber-700">
              Los hitos que definen su carrera como pionero musical
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement) => {
              const Icon = achievement.icon
              return (
                <div
                  key={achievement.title}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-amber-50"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${achievement.color} text-white mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold text-red-800 mb-2">{achievement.year}</div>
                  <h3 className="text-xl font-semibold text-red-800 mb-3">{achievement.title}</h3>
                  <p className="text-amber-700 leading-relaxed">{achievement.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 bg-gradient-to-r from-red-800/5 to-amber-400/5">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-red-800 mb-4">
              Áreas de Expertise
            </h2>
            <p className="text-xl text-amber-700">
              Las competencias que hacen único el liderazgo de Danilo
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {expertise.map((skill) => (
                <div key={skill.area}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-red-800">{skill.area}</span>
                    <span className="text-amber-700">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-amber-50 rounded-full h-3">
                    <div 
                      className="bg-amber-400 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-red-800 mb-4">
              Filosofía Personal
            </h2>
            <p className="text-xl text-amber-700">
              Los principios que guían cada decisión y visión
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {philosophy.map((principle) => {
              const Icon = principle.icon
              return (
                <div
                  key={principle.title}
                  className="bg-white rounded-xl p-8 shadow-lg border border-amber-50"
                >
                  <div className="inline-flex p-4 bg-amber-400/20 rounded-xl text-red-800 mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-red-800 mb-4">{principle.title}</h3>
                  <p className="text-amber-700 leading-relaxed">{principle.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-red-800 mb-4">
              Proyectos Actuales
            </h2>
            <p className="text-xl text-amber-700">
              Las iniciativas que Danilo está desarrollando para el futuro
            </p>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white rounded-xl p-8 shadow-lg border border-amber-50"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-xl font-semibold text-red-800">{project.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === 'En Desarrollo' ? 'bg-amber-400/20 text-red-800' :
                        project.status === 'Planificación' ? 'bg-red-800/20 text-red-800' :
                        'bg-amber-700/20 text-amber-700'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-amber-700 mb-4">{project.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-red-800">{project.year}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-red-800/5 to-amber-400/5">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-red-800 mb-4">
              Testimonios
            </h2>
            <p className="text-xl text-amber-700">
              Lo que dicen quienes conocen su trabajo
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-amber-50"
              >
                <Quote className="w-8 h-8 text-amber-400 mb-4" />
                <p className="text-amber-700 leading-relaxed mb-6 italic">
                  {`"${testimonial.quote}"`}
                </p>
                <div>
                  <div className="font-semibold text-red-800">{testimonial.author}</div>
                  <div className="text-sm text-amber-700">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-800 to-amber-700">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-white mb-6">
            Conecta con Danilo
          </h2>
          <p className="text-xl text-amber-50/90 mb-8 max-w-2xl mx-auto">
            Únete a la visión de transformar la música clásica para el futuro digital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center px-8 py-4 bg-amber-400 text-red-800 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-300 hover:scale-105"
            >
              Contactar Directamente
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/musica"
              className="inline-flex items-center px-8 py-4 border-2 border-amber-400 text-white rounded-xl font-medium hover:bg-white hover:text-red-800 transition-all duration-300"
            >
              Explorar Su Obra
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}