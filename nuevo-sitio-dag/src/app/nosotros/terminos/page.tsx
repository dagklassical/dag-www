import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Shield, AlertCircle, Mail, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Términos y Condiciones - DAG Klassical',
  description: 'Términos de uso, política de privacidad y condiciones legales de la plataforma DAG Klassical',
}

export default function TerminosPage() {
  const sections = [
    {
      id: 'condiciones',
      title: 'Condiciones de Uso',
      content: [
        {
          subtitle: 'Aceptación de Términos',
          text: 'Al acceder y utilizar la plataforma DAG Klassical, usted acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo con alguno de estos términos, no debe utilizar nuestro servicio.'
        },
        {
          subtitle: 'Descripción del Servicio',
          text: 'DAG Klassical es una plataforma digital que ofrece música clásica en formato de alta calidad, NFTs musicales, servicios de preventa y herramientas blockchain. Nos reservamos el derecho de modificar o discontinuar cualquier aspecto del servicio en cualquier momento.'
        },
        {
          subtitle: 'Registro y Cuenta',
          text: 'Para acceder a ciertos servicios, debe crear una cuenta proporcionando información precisa y actualizada. Es responsable de mantener la confidencialidad de sus credenciales de acceso.'
        }
      ]
    },
    {
      id: 'nft',
      title: 'Política de NFTs',
      content: [
        {
          subtitle: 'Propiedad de NFTs',
          text: 'Los NFTs emitidos por DAG Klassical son representaciones digitales de derechos musicales. La propiedad del NFT confiere ciertos derechos como se especifica en el contrato inteligente correspondiente.'
        },
        {
          subtitle: 'Tecnología Blockchain',
          text: 'Todos los NFTs se emiten en la red Polygon para asegurar transacciones rápidas y costos mínimos. La plataforma utiliza contratos inteligentes para garantizar la autenticidad y transferencia de NFTs.'
        },
        {
          subtitle: 'Limitaciones de Uso',
          text: 'Los NFTs no confieren derechos de autor sobre las obras musicales subyacentes. Los derechos de reproducción y distribución permanecen con DAG Klassical y los respectivos titulares de derechos.'
        }
      ]
    },
    {
      id: 'privacidad',
      title: 'Política de Privacidad',
      content: [
        {
          subtitle: 'Recopilación de Datos',
          text: 'Recopilamos información personal para proporcionar nuestros servicios, procesar pagos y mejorar la experiencia del usuario. Esto incluye datos de contacto, preferencias musicales y actividad en la plataforma.'
        },
        {
          subtitle: 'Uso de Datos',
          text: 'Utilizamos sus datos para procesar transacciones, enviar comunicaciones relevantes, personalizar contenido y cumplir con obligaciones legales. No vendemos sus datos personales a terceros.'
        },
        {
          subtitle: 'Protección de Datos',
          text: 'Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción.'
        }
      ]
    },
    {
      id: 'blockchain',
      title: 'Términos Blockchain',
      content: [
        {
          subtitle: 'Red Polygon',
          text: 'Utilizamos la red Polygon para todas las operaciones blockchain. Los usuarios deben tener una wallet compatible para interactuar con nuestros NFTs y servicios blockchain.'
        },
        {
          subtitle: 'Transacciones',
          text: 'Todas las transacciones blockchain son irreversibles. Los usuarios son responsables de verificar cuidadosamente las direcciones de destino antes de enviar fondos.'
        },
        {
          subtitle: 'Gas Fees',
          text: 'Las transacciones en Polygon requieren gas fees mínimos, generalmente menos de $0.01. Estos fees se pagan directamente a la red Polygon.'
        }
      ]
    }
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email Legal',
      value: 'legal@dagklassical.com',
      href: 'mailto:legal@dagklassical.com'
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Dirección',
      value: '123 Music Street, Classical City, CC 12345',
      href: null
    }
  ]

  const keyTerms = [
    {
      term: 'DAG Klassical',
      definition: 'La empresa que opera la plataforma de música clásica digital y NFTs.'
    },
    {
      term: 'NFT (Non-Fungible Token)',
      definition: 'Token digital único que representa derechos o ownership de contenido musical específico.'
    },
    {
      term: 'Polygon Network',
      definition: 'Red blockchain de layer 2 utilizada para emitir y transaccionar NFTs de DAG Klassical.'
    },
    {
      term: 'Usuario',
      definition: 'Cualquier persona que acceda o utilice la plataforma DAG Klassical.'
    },
    {
      term: 'Royalties',
      definition: 'Pagos automáticos distribuidos a artistas por reproducciones y uso de contenido.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dag-ivory via-dag-white to-dag-buttermilk">
      {/* Header */}
      <section className="relative py-16 bg-gradient-to-r from-dag-burgundy to-dag-caramel">
        <div className="container-max section-padding">
          <div className="text-center text-dag-white">
            <div className="inline-flex items-center px-4 py-2 bg-dag-golden/20 rounded-full text-dag-golden font-medium mb-6">
              <FileText className="w-4 h-4 mr-2" />
              Documentos Legales
            </div>
            <h1 className="text-4xl lg:text-5xl font-light mb-4">
              Términos y Condiciones
            </h1>
            <p className="text-xl text-dag-ivory/90 max-w-3xl mx-auto">
              Términos de uso, política de privacidad y condiciones legales de nuestra plataforma
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 border-b border-dag-ivory">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-dag-burgundy mb-6 text-center">Índice de Contenidos</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center p-4 bg-dag-white rounded-xl shadow-sm border border-dag-ivory hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-8 h-8 bg-dag-golden text-dag-burgundy rounded-full flex items-center justify-center text-sm font-bold mr-4">
                    {sections.indexOf(section) + 1}
                  </div>
                  <span className="font-medium text-dag-burgundy">{section.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Terms */}
      <section className="py-12">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-dag-burgundy mb-6 text-center">Términos Clave</h2>
            <div className="space-y-4">
              {keyTerms.map((item) => (
                <div
                  key={item.term}
                  className="bg-dag-white rounded-xl p-6 shadow-sm border border-dag-ivory"
                >
                  <h3 className="font-semibold text-dag-burgundy mb-2">{item.term}</h3>
                  <p className="text-dag-caramel">{item.definition}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legal Sections */}
      <section className="py-12">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-3xl font-semibold text-dag-burgundy mb-8">{section.title}</h2>
                <div className="space-y-8">
                  {section.content.map((item) => (
                    <div
                      key={item.subtitle}
                      className="bg-dag-white rounded-xl p-8 shadow-lg border border-dag-ivory"
                    >
                      <h3 className="text-xl font-semibold text-dag-burgundy mb-4">{item.subtitle}</h3>
                      <p className="text-dag-caramel leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-gradient-to-r from-dag-burgundy/5 to-dag-golden/5">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="bg-dag-white rounded-2xl p-8 shadow-lg border border-dag-ivory">
              <div className="flex items-start">
                <AlertCircle className="w-8 h-8 text-dag-golden mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-dag-burgundy mb-4">Aviso Importante</h3>
                  <p className="text-dag-caramel leading-relaxed mb-4">
                    Estos términos y condiciones están sujetos a cambios. Le notificaremos cualquier modificación significativa a través de nuestra plataforma y/o correo electrónico.
                  </p>
                  <p className="text-dag-caramel leading-relaxed">
                    Última actualización: Noviembre 2025. Al continuar utilizando nuestros servicios, usted acepta estos términos actualizados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-dag-burgundy mb-6">Información de Contacto Legal</h2>
            <p className="text-xl text-dag-caramel mb-8">
              Para consultas legales o preguntas sobre estos términos, contáctenos
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((contact) => {
                const Icon = contact.icon
                const content = (
                  <div className="bg-dag-white rounded-xl p-6 shadow-lg border border-dag-ivory hover:shadow-xl transition-shadow duration-300">
                    <div className="inline-flex p-3 bg-dag-golden/20 rounded-xl text-dag-burgundy mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="font-medium text-dag-burgundy mb-2">{contact.label}</div>
                    <div className="text-dag-caramel">{contact.value}</div>
                  </div>
                )

                return contact.href ? (
                  <a key={contact.label} href={contact.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={contact.label}>
                    {content}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Links */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-dag-burgundy mb-8">Enlaces Relacionados</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/nosotros/dag-klassical"
                className="block p-4 bg-dag-white rounded-xl shadow-sm border border-dag-ivory hover:shadow-md transition-shadow duration-300"
              >
                <span className="font-medium text-dag-burgundy">Sobre DAG Klassical</span>
              </Link>
              <Link
                href="/contacto"
                className="block p-4 bg-dag-white rounded-xl shadow-sm border border-dag-ivory hover:shadow-md transition-shadow duration-300"
              >
                <span className="font-medium text-dag-burgundy">Contacto General</span>
              </Link>
              <Link
                href="/blockchain/polygon-networks"
                className="block p-4 bg-dag-white rounded-xl shadow-sm border border-dag-ivory hover:shadow-md transition-shadow duration-300"
              >
                <span className="font-medium text-dag-burgundy">Información Blockchain</span>
              </Link>
              <Link
                href="/nosotros/danilo-alvarez"
                className="block p-4 bg-dag-white rounded-xl shadow-sm border border-dag-ivory hover:shadow-md transition-shadow duration-300"
              >
                <span className="font-medium text-dag-burgundy">Fundador</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dag-burgundy to-dag-caramel">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-dag-white mb-6">
            ¿Tienes Preguntas?
          </h2>
          <p className="text-xl text-dag-ivory/90 mb-8 max-w-2xl mx-auto">
            Nuestro equipo legal está disponible para resolver cualquier duda sobre nuestros términos
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center px-8 py-4 bg-dag-golden text-dag-burgundy rounded-xl font-semibold hover:bg-dag-ivory transition-all duration-300 hover:scale-105"
          >
            Contactar Soporte Legal
            <Mail className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}