export default function CompositoresPage() {
  return (
    <div className="bg-dag-ivory min-h-screen">
      <section className="bg-gradient-to-r from-dag-burgundy to-dag-caramel text-white py-16">
        <div className="container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">
              Compositores
            </h1>
            <p className="text-xl text-dag-ivory max-w-3xl mx-auto leading-relaxed">
              Descubre las mentes creativas que están dando forma al futuro de la música clásica.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center">
            <div className="card max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-dag-burgundy mb-4">Próximamente</h2>
              <p className="text-body">
                Estamos preparando una sección especial para mostrar a nuestros compositores 
                asociados y sus obras únicas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}