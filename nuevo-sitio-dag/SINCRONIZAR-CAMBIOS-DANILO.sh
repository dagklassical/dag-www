#!/bin/bash

echo "🔄 SINCRONIZANDO CAMBIOS DE DANILO AL PROYECTO LOCAL"
echo ""

LOCAL_PATH="$HOME/dev/gitlab/dagklassical/dag-www/nuevo-sitio-dag"

# Verificar directorio
if [ ! -d "$LOCAL_PATH" ]; then
    echo "❌ Directorio no encontrado: $LOCAL_PATH"
    echo "📁 Crear directorio manualmente o ajustar ruta"
    exit 1
fi

echo "📋 Archivos a sincronizar:"

# 1. Header con logo y sin navegación
echo "   ✅ src/components/Header.tsx (Logo + navegación limpia)"
cp /workspace/next-dag-classical/src/components/Header.tsx "$LOCAL_PATH/src/components/Header.tsx"

# 2. Página principal sin favicons en hero
echo "   ✅ src/app/page.tsx (Hero sin iconos)"
cp /workspace/next-dag-classical/src/app/page.tsx "$LOCAL_PATH/src/app/page.tsx"

# 3. Tipografía Inter
echo "   ✅ src/app/layout.tsx (Solo Inter)"
cp /workspace/next-dag-classical/src/app/layout.tsx "$LOCAL_PATH/src/app/layout.tsx"

# 4. Globales CSS con border radius reducidos
echo "   ✅ src/app/globals.css (Border radius + tipografía)"
cp /workspace/next-dag-classical/src/app/globals.css "$LOCAL_PATH/src/app/globals.css"

# 5. Tailwind con colores DAG
echo "   ✅ tailwind.config.js (Configuración completa)"
cp /workspace/next-dag-classical/tailwind.config.js "$LOCAL_PATH/tailwind.config.js"

echo ""
echo "🎯 CAMBIOS ESPECÍFICOS IMPLEMENTADOS:"
echo "   ❌ Favicons removidos de heros y títulos"
echo "   ✅ Favicons mantenidos en recuadros"
echo "   📐 Border radius: rounded-2xl → rounded-xl"
echo "   🎨 Logo todo en burgundy"
echo "   ✨ Tipografía solo Inter (pesos sutiles)"
echo ""
echo "🚀 EJECUTAR:"
echo "   cd $LOCAL_PATH"
echo "   npm run dev"
echo ""
echo "✨ ¡Listo para verificar los cambios de Danilo!"
