#!/bin/bash

# Script para corregir la página de discografía
# Ejecutar en el directorio raíz de tu proyecto

echo "🔧 Corrigiendo página de discografía..."

# Crear backup del archivo original
if [ -f "src/pages/obras/index.astro" ]; then
    cp src/pages/obras/index.astro src/pages/obras/index.astro.backup.$(date +%Y%m%d_%H%M%S)
    echo "✅ Backup creado"
fi

# Crear la página corregida con HTML válido
cat > src/pages/obras/index.astro << 'EOF'
---
title: "Discografía"
description: "Explora nuestra colección completa de álbumes de música clásica"
---

<section class="discografia-page">
  <div class="container">
    <h1 class="page-title">Discografía DAG Klassical</h1>
    
    <p class="page-description">
      Descubre nuestra extensa colección de álbumes de música clásica, jazz y música tradicional. 
      Una selección curada de interpretaciones excepcionales que abarcan desde obras maestras 
      del repertorio clásico hasta exploraciones contemporáneas.
    </p>

    <div class="discografia-categories">
      <!-- Piano y Teclado -->
      <div class="category">
        <h2 class="category-title">Piano y Teclado</h2>
        <div class="album-grid">
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/piano-aguinaldo-gerardo-gerulewicz">Piano Aguinaldo, Gerardo Gerulewicz</a>
            </h3>
            <p class="album-description">Bella música tradicional navideña venezolana, interpretada al piano con aires de jazz.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/gerardo-gerulewicz-llego-navidad">Gerardo Gerulewicz - Llegó la Navidad</a>
            </h3>
            <p class="album-description">Villancicos tradicionales polacos en una interpretación navideña única.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/teodor-dore">Teodor Dore</a>
            </h3>
            <p class="album-description">Interpretaciones excepcionales de Teodor Dore.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/rachmaninoff-variations-teodor-dore">Rachmaninoff Variations, Teodor Dore</a>
            </h3>
            <p class="album-description">Las legendarias Variations on a Theme of Paganini de Rachmaninoff.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/marcela-roggeri-domenico-scarlatti">Marcela Roggeri - Domenico Scarlatti</a>
            </h3>
            <p class="album-description">Sonatas para teclado del maestro barroco Domenico Scarlatti.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/marcela-roggeri-music-from-home">Marcela Roggeri - Music From Home</a>
            </h3>
            <p class="album-description">Un viaje musical íntimo a través de las tradiciones y raíces de Marcela Roggeri.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/catie-lopez-sonata-brahms">Catie López - Sonata, Brahms</a>
            </h3>
            <p class="album-description">Sonatas de Johannes Brahms con técnica y sensibilidad.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/catie-lopez-sonata-schumann">Catie López - Sonata Schumann</a>
            </h3>
            <p class="album-description">Sonatas de Robert Schumann con pasión y técnica.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/filip-bandzak-canciones-mahler">Filip Bandzak - Canciones de Mahler</a>
            </h3>
            <p class="album-description">Interpretaciones emotivas de las canciones de Gustav Mahler.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/nareh-arghamanyan-comitas-project">Nareh Arghamanyan - The Comitas Project</a>
            </h3>
            <p class="album-description">Proyecto musical innovador que combina tradición y modernidad.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/morris-northcutt-tonada">Morris Northcutt - Tonada</a>
            </h3>
            <p class="album-description">Exploración de la tradición de la tonada en el contexto contemporáneo.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/morris-northcutt-all-is-waiting">Morris Northcutt - All is Waiting</a>
            </h3>
            <p class="album-description">Reflexión musical sobre la paciencia y la espera.</p>
          </div>
        </div>
      </div>

      <!-- Obras Orquestales -->
      <div class="category">
        <h2 class="category-title">Obras Orquestales y de Cámara</h2>
        <div class="album-grid">
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/orquesta-gran-mariscal-ayacucho-bella-noche">Orquesta Gran Mariscal de Ayacucho - Esta Bella Noche</a>
            </h3>
            <p class="album-description">Interpretación de la prestigiosa orquesta venezolana.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/simon-bolivar-string-quartet-cuartetos">Simon Bolivar String Quartet - Cuartetos Paulistas</a>
            </h3>
            <p class="album-description">Riqueza de la tradición camerística latinoamericana.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/momentos-musicales-vol-1">Momentos Musicales Vol 1</a>
            </h3>
            <p class="album-description">Primera colección de momentos musicales únicos e inolvidables.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/momentos-musicales-vol-2">Momentos Musicales Vol 2</a>
            </h3>
            <p class="album-description">Segundo volumen de la prestigiosa serie orquestal.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/momentos-musicales-vol-3">Momentos Musicales Vol 3</a>
            </h3>
            <p class="album-description">Tercera colección de momentos musicales con interpretaciones excepcionales.</p>
          </div>
        </div>
      </div>

      <!-- Obras de James Strauss -->
      <div class="category">
        <h2 class="category-title">Obras de James Strauss</h2>
        <div class="album-grid">
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/james-strauss-rondo-dmkv">James Strauss - Rondo in DMKV ANH 184</a>
            </h3>
            <p class="album-description">Famoso Rondo en Re Mayor KV 184 de Mozart.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/james-strauss-canto-guairaju">James Strauss - Canto Guairaju, Alberto Ginastera</a>
            </h3>
            <p class="album-description">Obra significativa del compositor argentino Alberto Ginastera.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/james-strauss-beethoven-sinfonia">James Strauss - 3ra Sinfonía, Beethoven</a>
            </h3>
            <p class="album-description">La majestuosa Tercera Sinfonía "Eroica" de Beethoven.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/james-strauss-mozart-discoveries">James Strauss - Mozart Discoveries</a>
            </h3>
            <p class="album-description">Obras menos conocidas de Wolfgang Amadeus Mozart.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/james-strauss-twinkle-little-star">James Strauss - Twinkle Little Star</a>
            </h3>
            <p class="album-description">Adaptación educativa de la famosa canción infantil.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/james-strauss-tonal-episodes">James Strauss - Tonal Episodes</a>
            </h3>
            <p class="album-description">Exploración de episodios tonales en la música clásica.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/james-strauss-latin-conexions">James Strauss - Latin Conexions</a>
            </h3>
            <p class="album-description">Conexiones musicales entre la tradición latinoamericana y clásica.</p>
          </div>
        </div>
      </div>

      <!-- Jesús Aníbal Bello -->
      <div class="category">
        <h2 class="category-title">Interpretaciones de Jesús Aníbal Bello</h2>
        <div class="album-grid">
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/te-hare-pescador-jesus-anibal-bello">Te Haré Pescador, Jesús Aníbal Bello</a>
            </h3>
            <p class="album-description">Interpretaciones religiosas y espirituales profundamente conmovedoras.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/jesus-anibal-bello-eucaristia">Jesús Aníbal Bello - Eucaristía</a>
            </h3>
            <p class="album-description">Obra de profunda espiritualidad musical.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/jesus-anibal-bello-toma-corazon">Jesús Aníbal Bello - Toma Mi Corazón</a>
            </h3>
            <p class="album-description">Interpretación emotiva sobre amor y entrega espiritual.</p>
          </div>
        </div>
      </div>

      <!-- Frank Di Polo -->
      <div class="category">
        <h2 class="category-title">Interpretaciones de Frank Di Polo</h2>
        <div class="album-grid">
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/caracas-blues">Caracas Blues</a>
            </h3>
            <p class="album-description">Una fascinante exploración del blues con raíces venezolanas.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/frank-jazz">Frank Jazz</a>
            </h3>
            <p class="album-description">Una celebración del jazz clásico con interpretaciones excepcionales.</p>
          </div>
        </div>
      </div>

      <!-- Senza Fine -->
      <div class="category">
        <h2 class="category-title">Obras de Senza Fine</h2>
        <div class="album-grid">
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/senza-fine-perdido-nostalgia">Senza Fine - Perdido en la Nostalgia</a>
            </h3>
            <p class="album-description">Exploración de la melancolía y belleza de la nostalgia.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/senza-fine-amor-en-vida">Senza Fine - Amor en Vida</a>
            </h3>
            <p class="album-description">Celebración vibrante del amor como fuerza vital.</p>
          </div>
        </div>
      </div>

      <!-- Compositores Clásicos -->
      <div class="category">
        <h2 class="category-title">Compositores Clásicos</h2>
        <div class="album-grid">
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/schubert-goulnara-galimchina">Schubert - Goulnara Galimchina</a>
            </h3>
            <p class="album-description">Interpretaciones clásicas de las obras de Schubert.</p>
          </div>
        </div>
      </div>

      <!-- Álbumes Especiales -->
      <div class="category">
        <h2 class="category-title">Álbumes Especiales</h2>
        <div class="album-grid">
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/capitulos-virginia-ramirez">Capítulos, Virginia Ramirez</a>
            </h3>
            <p class="album-description">Una serie de capítulos musicales que narran historias.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/feliz-dia-de-la-madre">Feliz Día de la Madre</a>
            </h3>
            <p class="album-description">Álbum especial dedicado a celebrar el amor maternal.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/music-news">Music News</a>
            </h3>
            <p class="album-description">Noticias y novedades musicales de DAG Classical.</p>
          </div>
          
          <div class="album-card">
            <h3 class="album-title">
              <a href="/obras/proyecto-enmanuel">Proyecto Enmanuel</a>
            </h3>
            <p class="album-description">Proyecto especial de música y desarrollo artístico.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Estadísticas -->
    <div class="stats-section">
      <h2 class="stats-title">Estadísticas</h2>
      <div class="stats-grid">
        <div class="stat-item">
          <strong>Álbumes totales:</strong> 36
        </div>
        <div class="stat-item">
          <strong>Géneros:</strong> Música Clásica, Jazz, Blues, Música Tradicional Venezolana, Música Barroca, Música Romántica
        </div>
        <div class="stat-item">
          <strong>Artistas destacados:</strong> Gerardo Gerulewicz, Marcela Roggeri, James Strauss, Jesús Aníbal Bello, Orquesta Académica de Moscú
        </div>
        <div class="stat-item">
          <strong>Fecha de migración:</strong> 2025-10-25
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .discografia-page {
    padding: 4rem 0;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
    min-height: 100vh;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .page-title {
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(135deg, #7B3FE4, #E73C7E);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center;
    margin-bottom: 1rem;
  }

  .page-description {
    text-align: center;
    font-size: 1.2rem;
    color: #a0a0a0;
    max-width: 800px;
    margin: 0 auto 3rem;
    line-height: 1.6;
  }

  .category {
    margin-bottom: 4rem;
  }

  .category-title {
    font-size: 2rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid rgba(123, 63, 228, 0.3);
  }

  .album-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }

  .album-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    padding: 2rem;
    transition: all 0.3s ease;
  }

  .album-card:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(123, 63, 228, 0.3);
  }

  .album-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .album-title a {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .album-title a:hover {
    color: #7B3FE4;
  }

  .album-description {
    color: #a0a0a0;
    line-height: 1.6;
    margin: 0;
  }

  .stats-section {
    background: rgba(123, 63, 228, 0.1);
    border: 1px solid rgba(123, 63, 228, 0.2);
    border-radius: 1rem;
    padding: 3rem;
    margin-top: 4rem;
  }

  .stats-title {
    font-size: 2rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 2rem;
    text-align: center;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .stat-item {
    color: #a0a0a0;
    line-height: 1.6;
  }

  .stat-item strong {
    color: #ffffff;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .page-title {
      font-size: 2rem;
    }
    
    .container {
      padding: 0 1rem;
    }
    
    .album-grid {
      grid-template-columns: 1fr;
    }
    
    .stats-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
EOF

echo "✅ Página de discografía corregida con HTML válido!"
echo "🚀 Ahora ejecuta:"
echo "1. npm run dev"
echo "2. Ve a 'Música' > 'Discografía'"
echo ""
echo "📝 El archivo de backup se guardó como:"
echo "src/pages/obras/index.astro.backup.[timestamp]"