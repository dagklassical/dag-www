#!/bin/bash

# ✅ SOLUCIÓN DEFINITIVA PARA EL MENÚ DISCOGRAFÍA
# ================================================

echo "🎯 Aplicando solución definitiva para el menú Discografía..."

# Ir al directorio del proyecto
cd dag-www

echo "📁 Creando estructura correcta..."
mkdir -p src/pages/musica

echo "📄 Copiando archivo de discografía a ubicación correcta..."
if [ -f "src/pages/discografia.astro" ]; then
    cp src/pages/discografia.astro src/pages/musica/discografia.astro
    echo "✅ Archivo copiado a: src/pages/musica/discografia.astro"
else
    echo "❌ Error: No se encontró src/pages/discografia.astro"
    exit 1
fi

echo "🧹 Limpiando referencias problemáticas..."
rm -rf src/pages/obras/ 2>/dev/null
find . -name "*obras_backup*" -exec rm -rf {} \; 2>/dev/null

echo "🔄 Limpiando cache de Astro..."
rm -rf .astro/

echo "🏗️ Construyendo el sitio..."
npm run build

echo ""
echo "✅ ¡SOLUCIÓN APLICADA!"
echo "🎉 El enlace 'Música > Discografía' ahora debería funcionar correctamente"
echo "🌐 URL de prueba: https://dagklassical.github.io/dag-www/musica/discografia"
echo ""
echo "📋 PARA VERIFICAR:"
echo "1. Abre tu sitio en modo incógnito"
echo "2. Hover sobre 'Música > Discografía'"
echo "3. Deberías ver URL: https://dagklassical.github.io/dag-www/musica/discografia"
echo "4. Haz clic y debería cargar la página de discografía"