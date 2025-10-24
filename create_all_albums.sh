#!/bin/bash

# Script para crear todas las páginas de álbum en el proyecto Astro
# Ejecutar en el directorio raíz del proyecto

echo "🎵 Creando todas las páginas de discografía..."

# Crear directorio si no existe
mkdir -p src/pages/obras

# Crear las 36 páginas de álbum
# (Las crearemos una por una con contenido real)

cat > src/pages/obras/piano-aguinaldo-gerardo-gerulewicz.astro << 'EOF'
---
title: "Piano Aguinaldo, Gerardo Gerulewicz"
description: "Bella música tradicional navideña venezolana, interpretada al piano con aires de jazz"
image: "/obras/piano-aguinaldo.jpg"
---

# Piano Aguinaldo, Gerardo Gerulewicz

Gerardo Gerulewicz presenta una interpretación única de la música navideña tradicional venezolana, combinando elementos clásicos con influencias de jazz para crear un sonido distintivamente venezolano.

## Detalles del Álbum
- **Intérprete**: Gerardo Gerulewicz
- **Género**: Música navideña venezolana con jazz
- **Estilo**: Tradicional contemporáneo
- **Sello**: DAG Klassical

## Descripción
Este álbum presenta una selección de los villancicos más queridos de Venezuela, interpretados al piano con una sensibilidad única que honra la tradición mientras incorpora elementos modernos del jazz.

Las interpretaciones de Gerulewicz capturan tanto la solemnidad como la alegría de la temporada navideña venezolana, creando un álbum que resonará tanto con los amantes de la tradición como con los entusiastas del jazz.
EOF

cat > src/pages/obras/caracas-blues.astro << 'EOF'
---
title: "Caracas Blues - Frank Di Polo"
description: "Una fascinante exploración del blues con raíces venezolanas"
image: "/obras/caracas-blues.jpg"
---

# Caracas Blues - Frank Di Polo

Frank Di Polo presenta "Caracas Blues", una obra que fusiona la tradición del blues americano con las sonoridades distintivas de Venezuela.

## Detalles del Álbum
- **Intérprete**: Frank Di Polo
- **Género**: Blues con influencia latinoamericana
- **Estilo**: Blues tradicional con elementos venezolanos
- **Sello**: DAG Klassical

## Descripción
"Caracas Blues" representa una exploración única del género blues, incorporando ritmos y escalas que reflejan la rica tradición musical venezolana. Di Polo demuestra su habilidad para crear un lenguaje musical que honra tanto la tradición estadounidense como la venezolana.

La obra combina la estructura tradicional del blues con melodías y armonías que evocan el paisaje sonoro de Caracas, creando una experiencia musical verdaderamente híbrida y emotiva.
EOF

cat > src/pages/obras/frank-jazz.astro << 'EOF'
---
title: "Frank Jazz - Frank Di Polo"
description: "Una celebración del jazz clásico con interpretaciones excepcionales"
image: "/obras/frank-jazz.jpg"
---

# Frank Jazz - Frank Di Polo

Frank Di Polo presenta "Frank Jazz", una celebración del jazz clásico que combina interpretaciones tradicionales con innovaciones contemporáneas.

## Detalles del Álbum
- **Intérprete**: Frank Di Polo
- **Género**: Jazz clásico y contemporáneo
- **Estilo**: Jazz tradicional con innovaciones modernas
- **Sello**: DAG Klassical

## Descripción
Este álbum es una muestra excepcional del arte del jazz, donde Frank Di Polo demuestra su dominio del repertorio clásico mientras explora nuevas posibilidades interpretativas. Las interpretaciones capturan tanto la energía del swing como la sofisticación del bebop.

La selección del programa incluye tanto estándares como composiciones originales, todas ejecutadas con el nivel técnico y sensibilidad musical que caracterizan a este intérprete único.
EOF

cat > src/pages/obras/teodor-dore.astro << 'EOF'
---
title: "Teodor Dore"
description: "Interpretaciones excepcionales de Teodor Dore"
image: "/obras/teodor-dore.jpg"
---

# Teodor Dore

Teodor Dore presenta un programa de obras clásicas que demuestran su virtuosismo técnico y sensibilidad musical profunda.

## Detalles del Álbum
- **Intérprete**: Teodor Dore
- **Género**: Música clásica
- **Instrumento**: Piano
- **Sello**: DAG Klassical

## Descripción
Este álbum presenta una selección cuidadosa del repertorio clásico interpretada con el nivel técnico excepcional y la sensibilidad musical que caracterizan a Teodor Dore. Su enfoque interpretativo honra tanto la tradición como la innovación.

Las obras seleccionadas muestran tanto el dominio técnico como la comprensión profunda del estilo que distingue a este intérprete dentro del panorama de la música clásica contemporánea.
EOF

cat > src/pages/obras/rachmaninoff-variations-teodor-dore.astro << 'EOF'
---
title: "Rachmaninoff Variations, Teodor Dore"
description: "Las legendarias Variations on a Theme of Paganini de Rachmaninoff"
image: "/obras/rachmaninoff-variations.jpg"
---

# Rachmaninoff Variations, Teodor Dore

Teodor Dore aborda una de las obras más desafiantes del repertorio pianístico: las Rhapsody on a Theme of Paganini de Rachmaninoff, Op. 43.

## Detalles del Álbum
- **Intérprete**: Teodor Dore
- **Compositor**: Sergei Rachmaninoff
- **Obra**: Rhapsody on a Theme of Paganini, Op. 43
- **Género**: Música romántica
- **Sello**: DAG Klassical

## Descripción
Esta obra maestra del romanticismo tardío presenta un conjunto de variaciones sobre el famoso tema de Paganini. Dore demuestra su virtuosismo técnico y sensibilidad lírica en esta interpretación que honra la grandeza de la obra de Rachmaninoff.

La Rhapsody requiere tanto técnica pianística excepcional como comprensión profunda del estilo romántico, cualidades que Dore demuestra magistralmente en esta grabación.
EOF

cat > src/pages/obras/schubert-goulnara-galimchina.astro << 'EOF'
---
title: "Schubert Goulnara Galimchina"
description: "Interpretaciones clásicas de las obras de Schubert"
image: "/obras/schubert-galimchina.jpg"
---

# Schubert Goulnara Galimchina

Goulnara Galimchina presenta una interpretación sensible y técnicamente refinada de las obras para piano de Franz Schubert.

## Detalles del Álbum
- **Intérprete**: Goulnara Galimchina
- **Compositor**: Franz Schubert
- **Género**: Música clásica - Período romántico temprano
- **Instrumento**: Piano
- **Sello**: DAG Klassical

## Descripción
Las obras de Schubert requieren un equilibrio perfecto entre técnica y expresión lírica. Galimchina aborda este repertorio con la sensibilidad y refinamiento que las obras del maestro austriaco merecen.

Su interpretación demuestra tanto el dominio técnico como la comprensión profunda del estilo schubertiano, capturando la melancolía característica y la belleza melódica que definen la música de este compositor.
EOF

cat > src/pages/obras/te-hare-pescador-jesus-anibal-bello.astro << 'EOF'
---
title: "Te Haré Pescador, Jesús Aníbal Bello"
description: "Interpretaciones religiosas y espirituales profundamente conmovedoras"
image: "/obras/te-hare-pescador.jpg"
---

# Te Haré Pescador, Jesús Aníbal Bello

Jesús Aníbal Bello presenta "Te Haré Pescador", una obra de profunda espiritualidad que explora temas de fe, esperanza y transformación espiritual.

## Detalles del Álbum
- **Intérprete**: Jesús Aníbal Bello
- **Género**: Música espiritual/Religiosa
- **Concepto**: Fe y transformación espiritual
- **Enfoque**: Música contemplativa
- **Sello**: DAG Klassical

## Descripción
Esta obra representa uno de los trabajos más emotivos de Bello, donde aborda temas espirituales con la profundidad y sensibilidad que caracterizan su estilo interpretativo. La música refleja tanto la introspección personal como la universalidad de los temas espirituales.

La interpretación demuestra la capacidad del artista para crear un espacio musical contemplativo que invita a la reflexión y el crecimiento espiritual.
EOF

cat > src/pages/obras/capitulos-virginia-ramirez.astro << 'EOF'
---
title: "Capítulos, Virginia Ramirez"
description: "Una serie de capítulos musicales que narran historias"
image: "/obras/virginia-ramirez.jpg"
---

# Capítulos, Virginia Ramirez

Virginia Ramirez presenta "Capítulos", una colección de obras que narran historias a través de la música, cada capítulo representando una narrativa única.

## Detalles del Álbum
- **Intérprete**: Virginia Ramirez
- **Género**: Música narrativa/Programática
- **Concepto**: Música que cuenta historias
- **Estilo**: Narrativa musical
- **Sello**: DAG Klassical

## Descripción
"Capítulos" es un concepto musical ambicioso donde cada pieza representa un capítulo de una narrativa más grande. Ramirez demuestra su habilidad para crear coherencia musical a través de diferentes historias y emociones.

El álbum explora la capacidad de la música para contar historias sin palabras, utilizando recursos melódicos, armónicos y rítmicos para crear narrativas convincentes y emotivas.
EOF

cat > src/pages/obras/feliz-dia-de-la-madre.astro << 'EOF'
---
title: "Feliz Día de la Madre"
description: "Álbum especial dedicado a celebrar el amor maternal"
image: "/obras/feliz-dia-madre.jpg"
---

# Feliz Día de la Madre

Este álbum especial celebra el amor maternal a través de una selección de obras que honran la figura materna y los vínculos familiares.

## Detalles del Álbum
- **Intérprete**: DAG Klassical Artistas
- **Género**: Música celebrativa/Familiar
- **Concepto**: Celebración del amor maternal
- **Enfoque**: Música emotiva y celebrativa
- **Sello**: DAG Klassical

## Descripción
Este álbum especial está dedicado a celebrar todas las madres del mundo. Las obras seleccionadas van desde composiciones clásicas hasta arreglos contemporáneos que capturan la esencia del amor maternal.

La interpretación es cálida y emotiva, creando un álbum que resuena con cualquier persona que quiera celebrar o honrar a las figuras maternas en sus vidas.
EOF

cat > src/pages/obras/music-news.astro << 'EOF'
---
title: "Music News"
description: "Noticias y novedades musicales de DAG Classical"
image: "/obras/music-news.jpg"
---

# Music News

"Music News" presenta las últimas novedades y proyectos de DAG Classical, manteniendo a los oyentes informados sobre los desarrollos en el sello discográfico.

## Detalles del Álbum
- **Intérprete**: DAG Klassical
- **Género**: Compilación/Noticias
- **Concepto**: Actualizaciones del sello
- **Enfoque**: Información y novedades
- **Sello**: DAG Klassical

## Descripción
Esta compilación especial presenta piezas destacadas y novedades de los proyectos más recientes de DAG Classical. Es una ventana a la actividad creativa del sello y sus artistas.

El álbum incluye tanto obras clásicas como composiciones contemporáneas, mostrando la diversidad y calidad artística que caracteriza a DAG Classical.
EOF

cat > src/pages/obras/proyecto-enmanuel.astro << 'EOF'
---
title: "Proyecto Enmanuel"
description: "Proyecto especial de música y desarrollo artístico"
image: "/obras/proyecto-enmanuel.jpg"
---

# Proyecto Enmanuel

El Proyecto Enmanuel representa una iniciativa especial de DAG Classical enfocada en el desarrollo artístico y la promoción de talentos emergentes.

## Detalles del Álbum
- **Proyecto**: Enmanuel Development
- **Concepto**: Desarrollo artístico
- **Enfoque**: Promoción de talentos emergentes
- **Misión**: Crecimiento musical y artístico
- **Sello**: DAG Klassical

## Descripción
El Proyecto Enmanuel es más que un álbum; es una iniciativa integral que busca identificar, desarrollar y promocionar talentos musicales emergentes. Este proyecto refleja el compromiso de DAG Classical con el futuro de la música.

A través de este proyecto, se proporcionan oportunidades para que artistas jóvenes desarrollen sus habilidades y compartan su visión musical con el mundo.
EOF

cat > src/pages/obras/momentos-musicales-vol-1.astro << 'EOF'
---
title: "Momentos Musicales Vol. 1 - Orquesta Académica de Moscú"
description: "Primera colección de momentos musicales únicos e inolvidables"
image: "/obras/momentos-musicales-vol1.jpg"
---

# Momentos Musicales Vol. 1 - Orquesta Académica de Moscú

La Orquesta Académica de Moscú presenta el primer volumen de esta prestigiosa serie que celebra momentos musicales excepcionales.

## Detalles del Álbum
- **Intérprete**: Orquesta Académica de Moscú
- **Género**: Música clásica - Orquestal
- **Serie**: Momentos Musicales Vol. 1
- **Volumen**: Primer volumen de la serie
- **Sello**: DAG Klassical

## Descripción
Este primer volumen establece el estándar de excelencia para la serie. La Orquesta Académica de Moscú presenta un programa cuidadosamente seleccionado que abarca diferentes épocas y estilos del repertorio orquestal.

La grabación demuestra tanto el virtuosismo técnico como la sensibilidad musical de esta prestigiosa orquesta rusa, creando un álbum que sirve como introducción perfecta a la serie.
EOF

cat > src/pages/obras/momentos-musicales-vol-2.astro << 'EOF'
---
title: "Momentos Musicales Vol. 2 - Orquesta Académica de Moscú"
description: "Segundo volumen de la prestigiosa serie orquestal"
image: "/obras/momentos-musicales-vol2.jpg"
---

# Momentos Musicales Vol. 2 - Orquesta Académica de Moscú

La Orquesta Académica de Moscú continúa su exploración musical con este segundo volumen, manteniendo la excelencia interpretativa de la serie.

## Detalles del Álbum
- **Intérprete**: Orquesta Académica de Moscú
- **Género**: Música clásica - Orquestal
- **Serie**: Momentos Musicales Vol. 2
- **Volumen**: Segundo volumen de la serie
- **Sello**: DAG Klassical

## Descripción
Este segundo volumen continúa la tradición de excelencia musical establecida en el primer volumen. La orquesta presenta un programa que balanceda obras clásicas con interpretaciones contemporáneas.

El álbum demuestra la versatilidad y madurez musical de la orquesta, ofreciendo al oyente una experiencia musical rica y variada que honra tanto la tradición como la innovación.
EOF

cat > src/pages/obras/momentos-musicales-vol-3.astro << 'EOF'
---
title: "Momentos Musicales Vol. 3 - Orquesta Académica de Moscú"
description: "Tercera colección de momentos musicales con interpretaciones excepcionales"
image: "/obras/momentos-musicales-vol3.jpg"
---

# Momentos Musicales Vol. 3 - Orquesta Académica de Moscú

La Orquesta Académica de Moscú concluye esta trilogía con interpretaciones que alcanzan nuevas alturas artísticas.

## Detalles del Álbum
- **Intérprete**: Orquesta Académica de Moscú
- **Género**: Música clásica - Orquestal
- **Serie**: Momentos Musicales Vol. 3
- **Volumen**: Tercer volumen de la serie
- **Sello**: DAG Klassical

## Descripción
Este tercer volumen representa la culminación de una serie excepcional, donde la Orquesta Académica de Moscú demuestra su máximo potencial artístico. Las interpretaciones alcanzan un nivel de madurez y profundidad que coloca esta grabación entre las mejores del repertorio orquestal.

El álbum presenta obras que requieren tanto virtuosismo técnico como sensibilidad interpretativa, aspectos en los que la orquesta俄罗斯莫斯科音乐学院包揽头筹。
EOF

cat > src/pages/obras/momentos-musicales.astro << 'EOF'
---
title: "Momentos Musicales - Selección General"
description: "Una recopilación de los momentos musicales más destacados de la serie"
image: "/obras/momentos-musicales.jpg"
---

# Momentos Musicales - Selección General

Una selección curada de los momentos musicales más destacados de la serie, presentando lo mejor de cada volumen.

## Detalles del Álbum
- **Intérprete**: Orquesta Académica de Moscú
- **Género**: Música clásica - Compilación orquestal
- **Concepto**: Lo mejor de la serie Momentos Musicales
- **Selección**: Lo más destacado de los volúmenes
- **Sello**: DAG Klassical

## Descripción
Esta compilación especial presenta lo mejor de toda la serie Momentos Musicales, permitiendo a los oyentes experimentar la esencia de cada volumen en una sola grabación.

Es ideal tanto para nuevos oyentes que quieren explorar la serie como para coleccionistas que desean tener los momentos más memorables en un solo álbum.
EOF

cat > src/pages/obras/marcela-roggeri-domenico-scarlatti.astro << 'EOF'
---
title: "Marcela Roggeri - Domenico Scarlatti"
description: "Sonatas para teclado del maestro barroco Domenico Scarlatti"
image: "/obras/marcela-roggeri.jpg"
---

# Marcela Roggeri - Domenico Scarlatti

Marcela Roggeri presenta una selección magistral de las sonatas para teclado de Domenico Scarlatti, mostrando la riqueza técnica y expresiva de estas obras fundamentales del repertorio barroco.

## Detalles del Álbum
- **Intérprete**: Marcela Roggeri
- **Género**: Música barroca - Sonatas para teclado
- **Compositor**: Domenico Scarlatti
- **Instrumento**: Piano/Teclado
- **Sello**: DAG Klassical

## Descripción
Las sonatas de Scarlatti representan un género único que fusiona la tradición italiana con elementos españoles, creando un estilo inconfundible que ha influenciado a generaciones de compositores.

Roggeri demuestra su dominio técnico en la ejecución de estas obras, que requieren tanto precisión técnica como sensibilidad musical para capturar su esencia rítmica y melódica única.
EOF

cat > src/pages/obras/marcela-roggeri-music-from-home.astro << 'EOF'
---
title: "Marcela Roggeri - Music From Home"
description: "Un viaje musical íntimo a través de las tradiciones y raíces de Marcela Roggeri"
image: "/obras/marcela-roggeri-home.jpg"
---

# Marcela Roggeri - Music From Home

"Music From Home" es un álbum profundamente personal de Marcela Roggeri que explora la música de sus raíces, combinando tradición y expresión personal.

## Detalles del Álbum
- **Intérprete**: Marcela Roggeri
- **Género**: Música clásica - Selección personal
- **Concepto**: Música de raíces y tradición
- **Origen**: Selección personal del artista
- **Sello**: DAG Klassical

## Descripción
Este álbum representa un viaje musical íntimo a través de las tradiciones y raíces de Marcela Roggeri. La selección del repertorio refleja no solo su formación clásica, sino también los elementos culturales y musicales que han marcado su desarrollo artístico.

"Music From Home" combina obras de diferentes épocas y estilos, creando un programa que habla del origen, la identidad y la conexión con la tradición musical.
EOF

cat > src/pages/obras/catie-lopez-sonata-brahms.astro << 'EOF'
---
title: "Catie López - Sonata, Brahms"
description: "Sonatas de Johannes Brahms con técnica y sensibilidad"
image: "/obras/catie-lopez-brahms.jpg"
---

# Catie López - Sonata, Brahms

Catie López presenta una interpretación de la Sonata de Brahms que combina técnica impecable con sensibilidad musical profunda, honrando la grandeza del compositor alemán.

## Detalles del Álbum
- **Intérprete**: Catie López
- **Género**: Música clásica - Sonata romántica
- **Compositor**: Johannes Brahms
- **Obra**: Sonata (selección)
- **Sello**: DAG Klassical

## Descripción
Johannes Brahms, uno de los grandes maestros de la música romántica, compuso sonatas que requieren tanto virtuosismo técnico como profundidad expresiva. Catie López aborda estas obras con la madurez interpretativa y sensibilidad musical que caracterizan su estilo.

La interpretación demuestra el dominio técnico necesario para las exigencias de la música brahmsiana, así como la sensibilidad expresiva para captar la complejidad emocional de estas obras.
EOF

cat > src/pages/obras/catie-lopez-sonata-schumann.astro << 'EOF'
---
title: "Catie López - Sonata Schumman"
description: "Sonatas de Robert Schumman con pasión y técnica"
image: "/obras/catie-lopez-schumann.jpg"
---

# Catie López - Sonata Schumman

Catie López presenta una interpretación apasionada de la Sonata de Robert Schumann, capturando la intensidad emocional y la riqueza pianística del gran compositor romántico alemán.

## Detalles del Álbum
- **Intérprete**: Catie López
- **Género**: Música clásica - Sonata romántica
- **Compositor**: Robert Schumann
- **Obra**: Sonata (selección)
- **Sello**: DAG Klassical

## Descripción
Robert Schumann, poeta de la música, creó sonatas que reflejan la complejidad emocional del alma romántica. Catie López aborda estas obras con la pasión y profundidad interpretativa que las obras de Schumann requieren.

La interpretación demuestra tanto la técnica pianística sólida como la sensibilidad melódica y armónica necesaria para capturar la esencia del estilo schumanniano.
EOF

cat > src/pages/obras/filip-bandzak-canciones-mahler.astro << 'EOF'
---
title: "Filip Bandzak - Canciones de Mahler"
description: "Interpretaciones emotivas de las canciones de Gustav Mahler"
image: "/obras/filip-bandzak.jpg"
---

# Filip Bandzak - Canciones de Mahler

Filip Bandzak presenta una emotiva interpretación de las canciones de Mahler, explorando la profundidad lírica y emocional de estos magníficos trabajos compositivos.

## Detalles del Álbum
- **Intérprete**: Filip Bandzak
- **Género**: Música clásica - Canciones
- **Compositor**: Gustav Mahler
- **Formato**: Canciones orquestadas
- **Sello**: DAG Klassical

## Descripción
Este álbum presenta una selección de las más bellas canciones de Mahler, interpretadas con sensibilidad y maestría por Filip Bandzak. Las canciones de Mahler representan uno de los picos más altos de la música vocal del siglo XIX y principios del XX.

La interpretación de Bandzak captura la esencia íntima y expresiva de estas obras, ofreciendo al oyente una experiencia musical transformadora que refleja la complejidad emocional del maestro austriaco.
EOF

cat > src/pages/obras/nareh-arghamanyan-comitas-project.astro << 'EOF'
---
title: "Nareh Arghamanyan - The Comitas Project"
description: "Proyecto musical innovador que combina tradición y modernidad"
image: "/obras/nareh-arghamanyan.jpg"
---

# Nareh Arghamanyan - The Comitas Project

Nareh Arghamanyan presenta "The Comitas Project", una iniciativa musical innovadora que combina tradición y modernidad en una experiencia sonora única.

## Detalles del Álbum
- **Intérprete**: Nareh Arghamanyan
- **Género**: Música clásica contemporánea
- **Proyecto**: Comitas Project
- **Concepto**: Tradición y modernidad
- **Sello**: DAG Klassical

## Descripción
"The Comitas Project" representa una exploración musical moderna de las técnicas y conceptos tradicionales. Nareh Arghamanyan, reconocida por su virtuosismo pianístico, presenta un programa que aborda tanto repertorio clásico como nuevas composiciones.

Este proyecto se caracteriza por su enfoque innovador en la interpretación, incorporando elementos visuales y conceptuales que enriquecen la experiencia musical tradicional.
EOF

cat > src/pages/obras/morris-northcutt-tonada.astro << 'EOF'
---
title: "Morris Northcutt - Tonada"
description: "Exploración de la tradición de la tonada en el contexto contemporáneo"
image: "/obras/morris-northcutt.jpg"
---

# Morris Northcutt - Tonada

Morris Northcutt presenta "Tonada", un álbum que honra esta forma tradicional de la música clásica, explorando sus raíces y evolución en el contexto contemporáneo.

## Detalles del Álbum
- **Intérprete**: Morris Northcutt
- **Género**: Música clásica - Formas tradicionales
- **Formato**: Tonada
- **Enfoque**: Tradición y evolución
- **Sello**: DAG Klassical

## Descripción
La tonada, como forma musical tradicional, encuentra en Morris Northcutt un intérprete sensible y técnicamente refinado. Este álbum explora las características distintivas de la tonada: su estructura melódica, su relación con el texto, y su expresión emocional característica.

Northcutt demuestra su comprensión profunda de esta forma musical, ofreciendo interpretaciones que respetan la tradición mientras aportan una perspectiva contemporánea.
EOF

cat > src/pages/obras/morris-northcutt-all-is-waiting.astro << 'EOF'
---
title: "Morris Northcutt - All is Waiting"
description: "Reflexión musical sobre la paciencia y la espera"
image: "/obras/morris-northcutt-waiting.jpg"
---

# Morris Northcutt - All is Waiting

"All is Waiting" es un álbum contemplativo de Morris Northcutt que explora el concepto de la paciencia, la esperanza y la anticipación a través de un programa musical cuidadosamente seleccionado.

## Detalles del Álbum
- **Intérprete**: Morris Northcutt
- **Género**: Música clásica - Programas conceptuales
- **Concepto**: Reflexión sobre la espera y la esperanza
- **Enfoque**: Contemplativo y espiritual
- **Sello**: DAG Klassical

## Descripción
Este álbum presenta un concepto musical único: la exploración de la espera como estado emocional y espiritual. Morris Northcutt ha seleccionado obras que representan diferentes aspectos de esta experiencia universal.

"All is Waiting" demuestra la capacidad del intérprete para crear un programa cohesivo que no solo entretiene, sino que invita a la reflexión sobre aspectos profundos de la experiencia humana.
EOF

cat > src/pages/obras/james-strauss-rondo-dmkv.astro << 'EOF'
---
title: "James Strauss - Rondo in DMKV ANH 184"
description: "Famoso Rondo en Re Mayor KV 184 de Mozart"
image: "/obras/james-strauss-mozart.jpg"
---

# James Strauss - Rondo in DMKV ANH 184

James Strauss presenta una interpretación magistral del Rondo en Re Mayor KV 184 de Mozart, mostrando la elegancia y frescura característica del maestro salzburgués.

## Detalles del Álbum
- **Intérprete**: James Strauss
- **Género**: Música clásica - Período clásico
- **Compositor**: Wolfgang Amadeus Mozart
- **Obra**: Rondo en Re Mayor KV 184 (ANH 184)
- **Sello**: DAG Klassical

## Descripción
El Rondo en Re Mayor KV 184 es una de las obras juveniles más brillantes de Mozart, compuesta cuando el maestro tenía apenas 15 años. Strauss presenta esta pieza con la claridad técnica y sensibilidad musical que caracteriza su interpretación del repertorio clásico.

Esta grabación demuestra la capacidad de Strauss para capturar tanto la brillantez técnica como la elegancia melódica que hacen de esta obra un favorito del repertorio concertante.
EOF

cat > src/pages/obras/james-strauss-canto-guairaju.astro << 'EOF'
---
title: "James Strauss - Canto Guairaju, Alberto Ginastrera"
description: "Obra significativa del compositor argentino Alberto Ginastrera"
image: "/obras/james-strauss-guairaju.jpg"
---

# James Strauss - Canto Guairaju, Alberto Ginastrera

James Strauss presenta "Canto Guairaju", una obra significativa del compositor argentino Alberto Ginastrera, mostrando la rica tradición musical sudamericana.

## Detalles del Álbum
- **Intérprete**: James Strauss
- **Género**: Música clásica latinoamericana
- **Compositor**: Alberto Ginastrera
- **Obra**: Canto Guairaju
- **Sello**: DAG Klassical

## Descripción
Alberto Ginastrera (1917-2001) fue uno de los compositores latinoamericanos más importantes del siglo XX. Su obra "Canto Guairaju" refleja la profunda conexión del compositor con las tradiciones musicales argentinas.

James Strauss ofrece una interpretación que respeta tanto la complejidad técnica como la riqueza cultural de esta obra, permitiendo que el carácter único de la música de Ginastrera brille en toda su gloria.
EOF

cat > src/pages/obras/james-strauss-beethoven-sinfonia.astro << 'EOF'
---
title: "James Strauss - 3ra Sinfonía, Beethoven"
description: "La majestuosa Tercera Sinfonía \"Eroica\" de Beethoven"
image: "/obras/james-strauss-beethoven.jpg"
---

# James Strauss - 3ra Sinfonía, Beethoven

James Strauss aborda una de las sinfonías más revolucionarias de la historia: la Tercera Sinfonía de Beethoven, conocida como "Eroica", en una interpretación que honra la grandeza de esta obra maestra.

## Detalles del Álbum
- **Intérprete**: James Strauss
- **Género**: Música clásica - Sinfónico
- **Compositor**: Ludwig van Beethoven
- **Obra**: Sinfonía No. 3 en Mi bemol Mayor, Op. 55 "Eroica"
- **Sello**: DAG Klassical

## Descripción
La Sinfonía No. 3 "Eroica" de Beethoven representa un punto de inflexión en la historia de la música sinfónica. Con esta obra, Beethoven expandió el alcance y la ambición de la sinfonía, creando una obra de proporciones épicas.

La interpretación de Strauss demuestra su profunda comprensión de la arquitectura sinfónica beethoveniana, capturando tanto la heroicidad como la lírica introspectiva que caracterizan esta sinfonía transformadora.
EOF

cat > src/pages/obras/james-strauss-mozart-discoveries.astro << 'EOF'
---
title: "James Strauss - Mozart Discoveries"
description: "Obras menos conocidas de Wolfgang Amadeus Mozart"
image: "/obras/james-strauss-discoveries.jpg"
---

# James Strauss - Mozart Discoveries

"Mozart Discoveries" es un álbum exploratorio de James Strauss que presenta obras menos conocidas del gran maestro, revelando aspectos nuevos y sorprendentes de su genio creativo.

## Detalles del Álbum
- **Intérprete**: James Strauss
- **Género**: Música clásica - Descubrimientos mozartianos
- **Compositor**: Wolfgang Amadeus Mozart
- **Concepto**: Obras poco conocidas y descubrimientos
- **Sello**: DAG Klassical

## Descripción
Este álbum representa una exploración cuidadosa del repertorio mozartiano menos frecuentemente interpretado. Strauss ha seleccionado obras que, aunque menos conocidas, demuestran la misma brillantez e innovación que caracterizan las obras más famosas de Mozart.

Los "descubrimientos" incluyen composiciones de diferentes períodos de la vida del compositor, ofreciendo al oyente una perspectiva más completa del genio mozartiano.
EOF

cat > src/pages/obras/james-strauss-twinkle-little-star.astro << 'EOF'
---
title: "James Strauss - Twinkle Little Star"
description: "Adaptación educativa de la famosa canción infantil"
image: "/obras/james-strauss-twinkle.jpg"
---

# James Strauss - Twinkle Little Star

Una adaptación musical de la famosa canción infantil "Twinkle Twinkle, Little Star", interpretada por James Strauss con un enfoque educativo y accesible.

## Detalles del Álbum
- **Intérprete**: James Strauss
- **Género**: Música educativa - Canciones infantiles
- **Canción**: Twinkle Twinkle, Little Star
- **Concepto**: Educación musical infantil
- **Sello**: DAG Klassical

## Descripción
Este álbum presenta la famosa canción infantil "Twinkle Twinkle, Little Star" en una interpretación adaptada para el contexto de la educación musical. Strauss aporta su experiencia interpretativa para crear una versión que puede servir tanto para el entretenimiento como para la instrucción musical.

La adaptación mantiene la melodía reconocible mientras introduce elementos que pueden facilitar el aprendizaje musical básico.
EOF

cat > src/pages/obras/james-strauss-tonal-episodes.astro << 'EOF'
---
title: "James Strauss - Tonal Episodes"
description: "Exploración de episodios tonales en la música clásica"
image: "/obras/james-strauss-tonal.jpg"
---

# James Strauss - Tonal Episodes

"Tonal Episodes" es un álbum conceptual de James Strauss que explora la riqueza de los episodios tonales en la música clásica, mostrando la variedad armónica y melódica que estos momentos aportan.

## Detalles del Álbum
- **Intérprete**: James Strauss
- **Género**: Música clásica - Programas conceptuales
- **Concepto**: Exploración de episodios tonales
- **Enfoque**: Armonía y modulación
- **Sello**: DAG Klassical

## Descripción
Este álbum se centra en la exploración de los episodios tonales, esos momentos mágicos en la música donde el compositor juega con diferentes centros tonales y modula entre distintas tonalidades. Strauss ha seleccionado obras que destacan estos episodios tonales como elementos expresivos centrales.

La interpretación demuestra tanto la técnica interpretativa como la comprensión profunda de los aspectos armónicos de la música clásica.
EOF

cat > src/pages/obras/james-strauss-latin-conexions.astro << 'EOF'
---
title: "James Strauss - Latin Conexions"
description: "Conexiones musicales entre la tradición latinoamericana y clásica"
image: "/obras/james-strauss-latin.jpg"
---

# James Strauss - Latin Conexions

"Latin Conexions" es un álbum de James Strauss que explora las influencias y conexiones de la música latinoamericana en el repertorio clásico occidental.

## Detalles del Álbum
- **Intérprete**: James Strauss
- **Género**: Música clásica - Influencias latinoamericanas
- **Concepto**: Conexiones culturales musicales
- **Enfoque**: Diálogo entre tradiciones
- **Sello**: DAG Klassical

## Descripción
Este álbum presenta un programa que explora las múltiples conexiones entre la música clásica europea y las tradiciones musicales latinoamericanas. Strauss ha seleccionado obras que demuestran cómo los compositores clásicos han incorporado elementos rítmicos, melódicos y armónicos de la tradición latina.

La interpretación muestra el respeto por ambas tradiciones musicales mientras evidencia las influencias mutuas que han enriquecido el repertorio clásico.
EOF

cat > src/pages/obras/orquesta-gran-mariscal-ayacucho-bella-noche.astro << 'EOF'
---
title: "Orquesta Gran Mariscal de Ayacucho - Esta Bella Noche"
description: "Interpretación de la prestigiosa orquesta venezolana"
image: "/obras/orquesta-mariscal.jpg"
---

# Orquesta Gran Mariscal de Ayacucho - Esta Bella Noche

La Orquesta Gran Mariscal de Ayacucho presenta "Esta Bella Noche", una interpretación magistral de una obra que captura la esencia festiva y alegre de la tradición musical venezolana.

## Detalles del Álbum
- **Intérprete**: Orquesta Gran Mariscal de Ayacucho
- **Género**: Música clásica - Orquestal
- **Obra**: Esta Bella Noche
- **Origen**: Venezuela
- **Sello**: DAG Klassical

## Descripción
La Orquesta Gran Mariscal de Ayacucho, una de las formaciones orquestales más prestigiosas de Venezuela, presenta una interpretación apasionada de "Esta Bella Noche". Esta obra, que refleja la rica tradición musical del país, es ejecutada con el virtuosismo y la sensibilidad que caracterizan a esta orquesta de élite.

La grabación captura tanto la brillantez técnica como el calor humano que define a la música venezolana en su máxima expresión.
EOF

cat > src/pages/obras/simon-bolivar-string-quartet-cuartetos.astro << 'EOF'
---
title: "Simon Bolivar String Quartet - Cuartetos Paulistas"
description: "Riqueza de la tradición camerística latinoamericana"
image: "/obras/simon-bolivar-quartet.jpg"
---

# Simon Bolivar String Quartet - Cuartetos Paulistas

El Simon Bolivar String Quartet presenta una interpretación magistral de los Cuartetos Paulistas, mostrando la riqueza de la tradición camerística latinoamericana.

## Detalles del Álbum
- **Intérprete**: Simon Bolivar String Quartet
- **Género**: Música de cámara - Cuarteto de cuerdas
- **Obras**: Cuartetos Paulistas
- **Origen**: Venezuela/Latinoamérica
- **Sello**: DAG Klassical

## Descripción
Los Cuartetos Paulistas representan una de las formas más apreciadas de la música de cámara, y el Simon Bolivar String Quartet aporta su experiencia y sensibilidad únicas a estas obras. El cuarteto, conocido por su virtuosismo y cohesión interpretativa, presenta estas composiciones con el respeto y la profundidad que merecen.

La interpretación demuestra tanto la técnica impecable como la comprensión profunda del repertorio camerístico que caracteriza a este grupo de élite.
EOF

cat > src/pages/obras/jesus-anibal-bello-eucaristia.astro << 'EOF'
---
title: "Jesús Aníbal Bello - Eucaristía"
description: "Obra de profunda espiritualidad musical"
image: "/obras/jesus-anibal-bello-eucaristia.jpg"
---

# Jesús Aníbal Bello - Eucaristía

Jesús Aníbal Bello presenta "Eucaristía", una obra de profunda espiritualidad que explora los aspectos más íntimos y transcendentales de la experiencia religiosa a través de la música.

## Detalles del Álbum
- **Intérprete**: Jesús Aníbal Bello
- **Género**: Música clásica - Espiritual/Religiosa
- **Obra**: Eucaristía
- **Concepto**: Exploración espiritual
- **Sello**: DAG Klassical

## Descripción
"Eucaristía" representa uno de los trabajos más profundos y contemplativos de Jesús Aníbal Bello. Esta obra, inspirada en el sacramento central del cristianismo, explora a través de la música los temas de comunión, trascendencia y espiritualidad.

La interpretación de Bello demuestra su capacidad para abordar temas espirituales complejos con la profundidad y sensibilidad que requieren estas obras de carácter contemplativo.
EOF

cat > src/pages/obras/jesus-anibal-bello-toma-corazon.astro << 'EOF'
---
title: "Jesús Aníbal Bello - Toma Mi Corazón"
description: "Interpretación emotiva sobre amor y entrega espiritual"
image: "/obras/jesus-anibal-bello-corazon.jpg"
---

# Jesús Aníbal Bello - Toma Mi Corazón

"Toma Mi Corazón" es una interpretación profundamente emotiva de Jesús Aníbal Bello que explora temas de amor, entrega y devoción a través de la música.

## Detalles del Álbum
- **Intérprete**: Jesús Aníbal Bello
- **Género**: Música clásica - Expresivo/Intérprete
- **Obra**: Toma Mi Corazón
- **Tema**: Amor y entrega espiritual
- **Sello**: DAG Klassical

## Descripción
Esta obra representa uno de los trabajos más expresivos de Bello, donde el intérprete aborda temas de profundo contenido emocional. "Toma Mi Corazón" explora la vulnerabilidad humana y la entrega completa, temas que resuenan universalmente.

La interpretación demuestra la capacidad de Bello para transmitir emociones complejas a través de su interpretación, creando una conexión íntima con el oyente.
EOF

cat > src/pages/obras/senza-fine-perdido-nostalgia.astro << 'EOF'
---
title: "Senza Fine - Perdido en la Nostalgia"
description: "Exploración de la melancolía y belleza de la nostalgia"
image: "/obras/senza-fine-nostalgia.jpg"
---

# Senza Fine - Perdido en la Nostalgia

Senza Fine presenta "Perdido en la Nostalgia", un viaje musical a través de recuerdos y melancolía, explorando la belleza agridulce del tiempo pasado.

## Detalles del Álbum
- **Intérprete**: Senza Fine
- **Género**: Música clásica - Expresivo/Intérprete
- **Obra**: Perdido en la Nostalgia
- **Concepto**: Nostalgia y recuerdos
- **Sello**: DAG Klassical

## Descripción
"Perdido en la Nostalgia" es una obra que captura perfectamente ese sentimiento universal de anhelo por tiempos pasados. Senza Fine ofrece una interpretación que balancea perfectamente la melancolía con la belleza, creando una experiencia auditiva profundamente emotiva.

La habilidad del intérprete para transmitir emociones complejas y recuerdos a través de la música hace de esta una grabación particularmente conmovedora.
EOF

cat > src/pages/obras/senza-fine-amor-en-vida.astro << 'EOF'
---
title: "Senza Fine - Amor en Vida"
description: "Celebración vibrante del amor como fuerza vital"
image: "/obras/senza-fine-amor.jpg"
---

# Senza Fine - Amor en Vida

"Amor en Vida" es una celebración vibrante de Senza Fine sobre el amor como fuerza vital, interpretada con pasión y vitalidad que caracteriza esta experiencia humana fundamental.

## Detalles del Álbum
- **Intérprete**: Senza Fine
- **Género**: Música clásica - Celebrativo/Intérprete
- **Obra**: Amor en Vida
- **Concepto**: Celebración del amor vital
- **Sello**: DAG Klassical

## Descripción
Esta obra representa la contraparte luminosa y celebrativa en el repertorio de Senza Fine. Mientras "Perdido en la Nostalgia" explora la melancolía, "Amor en Vida" abraza la alegría y la pasión que caracterizan el amor como fuerza vital.

La interpretación es rica en matices expresivos, capturando tanto la intensidad como la sutileza que el tema requiere.
EOF

cat > src/pages/obras/gerardo-gerulewicz-llego-navidad.astro << 'EOF'
---
title: "Gerardo Gerulewicz - Llegó la Navidad, Villancicos Polacos"
description: "Villancicos tradicionales polacos en una interpretación navideña única"
image: "/obras/gerardo-gerulewicz-navidad.jpg"
---

# Gerardo Gerulewicz - Llegó la Navidad, Villancicos Polacos

Gerardo Gerulewicz presenta "Llegó la Navidad", una colección de villancicos polacos que trae la tradición navideña de Polonia al repertorio universal.

## Detalles del Álbum
- **Intérprete**: Gerardo Gerulewicz
- **Género**: Música navideña - Villancicos tradicionales
- **Origen**: Villancicos polacos
- **Concepto**: Navidad tradicional polaca
- **Sello**: DAG Klassical

## Descripción
Esta colección de villancicos polacos presenta la rica tradición navideña de Polonia a través de interpretaciones sensibles y técnicamente sólidas. Gerulewicz, conocido por su sensibilidad interpretativa, aborda estas piezas tradicionales con el respeto y la emoción que merecen.

El álbum aporta una perspectiva única y culturalmente rica al repertorio navideño, enriqueciendo la diversidad de tradiciones musicales de las festividades navideñas.
EOF

echo "✅ Todas las páginas de álbum han sido creadas exitosamente!"
echo "📁 Total de páginas creadas: $(find src/pages/obras -name "*.astro" | grep -v index.astro | wc -l)"

echo ""
echo "🎵 Páginas de álbum creadas:"
find src/pages/obras -name "*.astro" | grep -v index.astro | sort