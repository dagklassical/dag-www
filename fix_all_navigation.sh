#!/bin/bash

# Script maestro para corregir navegación y limpiar sitio
# Ejecutar en el directorio raíz de tu proyecto

echo "🎯 DAG Klassical - Corrección de Navegación"
echo "============================================="

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json"
    echo "   Asegúrate de ejecutar este script desde la raíz del proyecto Astro"
    exit 1
fi

echo ""
echo "🔧 Paso 1: Corrigiendo enlaces de navegación..."
bash fix_navigation_links.sh

echo ""
echo "🧹 Paso 2: Limpiando páginas innecesarias..."
bash cleanup_obras_folder.sh

echo ""
echo "✅ ¡Corrección completada!"
echo "============================================="
echo ""
echo "🚀 Para verificar los cambios:"
echo "1. npm run dev"
echo "2. Ve a 'Música' en el menú principal"
echo "3. Verifica que todos los enlaces funcionen:"
echo "   • Artistas → te lleva a Discografía"
echo "   • Discografía → página principal de obras"
echo "   • Lanzamientos → página de lanzamientos"
echo "   • Preventa → página de preventa"
echo "   • Enciclopedia → página de enciclopedia"
echo ""
echo "🔍 Para ver la página de discografía:"
echo "   Ve a: http://localhost:4321/discografia"
echo "   O desde el menú: Música > Discografía"
echo ""
echo "📝 Backups creados:"
echo "   • src/components/Header.astro.backup.[timestamp]"
echo "   • src/pages/obras_backup_[timestamp]/"