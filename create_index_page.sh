#!/bin/bash

# Script para crear la página índice actualizada de la discografía
# Ejecutar en el directorio raíz del proyecto

echo "📄 Creando página índice de discografía..."

cat > src/pages/obras/index.astro << 'EOF'
---
title: "Discografía DAG Klassical"
description: "Explora nuestra extensa colección de álbumes de música clásica, jazz y música tradicional. Una selección curada de interpretaciones excepcionales."
---

# Discografía DAG Klassical

Descubre nuestra extensa colección de álbumes de música clásica, jazz y música tradicional. Una selección curada de interpretaciones excepcionales que abarcan desde obras maestras del repertorio clásico hasta exploraciones contemporáneas.

## Piano y Teclado

### [Piano Aguinaldo, Gerardo Gerulewicz](/obras/piano-aguinaldo-gerardo-gerulewicz)
Bella música tradicional navideña venezolana, interpretada al piano con aires de jazz.

### [Gerardo Gerulewicz - Llegó la Navidad, Villancicos Polacos](/obras/gerardo-gerulewicz-llego-navidad)
Villancicos tradicionales polacos en una interpretación navideña única.

### [Teodor Dore](/obras/teodor-dore)
Interpretaciones excepcionales de Teodor Dore.

### [Rachmaninoff Variations, Teodor Dore](/obras/rachmaninoff-variations-teodor-dore)
Las legendarias Variations on a Theme of Paganini de Rachmaninoff.

### [Marcela Roggeri - Domenico Scarlatti](/obras/marcela-roggeri-domenico-scarlatti)
Sonatas para teclado del maestro barroco Domenico Scarlatti.

### [Marcela Roggeri - Music From Home](/obras/marcela-roggeri-music-from-home)
Un viaje musical íntimo a través de las tradiciones y raíces de Marcela Roggeri.

### [Catie López - Sonata, Brahms](/obras/catie-lopez-sonata-brahms)
Sonatas de Johannes Brahms con técnica y sensibilidad.

### [Catie López - Sonata Schumman](/obras/catie-lopez-sonata-schumann)
Sonatas de Robert Schumman con pasión y técnica.

### [Filip Bandzak - Canciones de Mahler](/obras/filip-bandzak-canciones-mahler)
Interpretaciones emotivas de las canciones de Gustav Mahler.

### [Nareh Arghamanyan - The Comitas Project](/obras/nareh-arghamanyan-comitas-project)
Proyecto musical innovador que combina tradición y modernidad.

### [Morris Northcutt - Tonada](/obras/morris-northcutt-tonada)
Exploración de la tradición de la tonada en el contexto contemporáneo.

### [Morris Northcutt - All is Waiting](/obras/morris-northcutt-all-is-waiting)
Reflexión musical sobre la paciencia y la espera.

## Obras Orquestales y de Cámara

### [Orquesta Gran Mariscal de Ayacucho - Esta Bella Noche](/obras/orquesta-gran-mariscal-ayacucho-bella-noche)
Interpretación de la prestigiosa orquesta venezolana.

### [Simon Bolivar String Quartet - Cuartetos Paulistas](/obras/simon-bolivar-string-quartet-cuartetos)
Riqueza de la tradición camerística latinoamericana.

### [Momentos Musicales Vol 1](/obras/momentos-musicales-vol-1)
Primera colección de momentos musicales únicos e inolvidables.

### [Momentos Musicales Vol 2](/obras/momentos-musicales-vol-2)
Segundo volumen de la prestigiosa serie orquestal.

### [Momentos Musicales Vol 3](/obras/momentos-musicales-vol-3)
Tercera colección de momentos musicales con interpretaciones excepcionales.

## Obras de James Strauss

### [James Strauss - Rondo in DMKV ANH 184](/obras/james-strauss-rondo-dmkv)
Famoso Rondo en Re Mayor KV 184 de Mozart.

### [James Strauss - Canto Guairaju, Alberto Ginastrera](/obras/james-strauss-canto-guairaju)
Obra significativa del compositor argentino Alberto Ginastrera.

### [James Strauss - 3ra Sinfonía, Beethoven](/obras/james-strauss-beethoven-sinfonia)
La majestuosa Tercera Sinfonía "Eroica" de Beethoven.

### [James Strauss - Mozart Discoveries](/obras/james-strauss-mozart-discoveries)
Obras menos conocidas de Wolfgang Amadeus Mozart.

### [James Strauss - Twinkle Little Star](/obras/james-strauss-twinkle-little-star)
Adaptación educativa de la famosa canción infantil.

### [James Strauss - Tonal Episodes](/obras/james-strauss-tonal-episodes)
Exploración de episodios tonales en la música clásica.

### [James Strauss - Latin Conexions](/obras/james-strauss-latin-conexions)
Conexiones musicales entre la tradición latinoamericana y clásica.

## Interpretaciones de Jesús Aníbal Bello

### [Te Haré Pescador, Jesús Aníbal Bello](/obras/te-hare-pescador-jesus-anibal-bello)
Interpretaciones religiosas y espirituales profundamente conmovedoras.

### [Jesús Aníbal Bello - Eucaristía](/obras/jesus-anibal-bello-eucaristia)
Obra de profunda espiritualidad musical.

### [Jesús Aníbal Bello - Toma Mi Corazón](/obras/jesus-anibal-bello-toma-corazon)
Interpretación emotiva sobre amor y entrega espiritual.

## Interpretaciones de Frank Di Polo

### [Caracas Blues](/obras/caracas-blues)  
Una fascinante exploración del blues con raíces venezolanas.

### [Frank Jazz](/obras/frank-jazz)
Una celebración del jazz clásico con interpretaciones excepcionales.

## Obras de Senza Fine

### [Senza Fine - Perdido en la Nostalgia](/obras/senza-fine-perdido-nostalgia)
Exploración de la melancolía y belleza de la nostalgia.

### [Senza Fine - Amor en Vida](/obras/senza-fine-amor-en-vida)
Celebración vibrante del amor como fuerza vital.

## Compositores Clásicos

### [Schubert Goulnara Galimchina](/obras/schubert-goulnara-galimchina)
Interpretaciones clásicas de las obras de Schubert.

## Álbumes Especiales

### [Capítulos, Virginia Ramirez](/obras/capitulos-virginia-ramirez)
Una serie de capítulos musicales que narran historias.

### [Feliz Día de la Madre](/obras/feliz-dia-de-la-madre)
Álbum especial dedicado a celebrar el amor maternal.

### [Music News](/obras/music-news)
Noticias y novedades musicales de DAG Classical.

### [Proyecto Enmanuel](/obras/proyecto-enmanuel)
Proyecto especial de música y desarrollo artístico.

## Estadísticas

- **Álbumes totales**: 36
- **Géneros**: Música Clásica, Jazz, Blues, Música Tradicional Venezolana, Música Barroca, Música Romántica
- **Artistas destacados**: Gerardo Gerulewicz, Marcela Roggeri, James Strauss, Jesús Aníbal Bello, Orquesta Académica de Moscú
- **Fecha de migración**: 2025-10-25

## Navegación

- [Inicio](/)
- [Sobre Nosotros](/sobre-nosotros)
- [Contactos](/contactos)
EOF

echo "✅ Página índice creada exitosamente!"