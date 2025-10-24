#!/bin/bash

# Script para limpiar enlaces problemáticos y estructura correcta
# Ejecutar en el directorio raíz de tu proyecto

echo "🧹 LIMPIEZA COMPLETA - Enlaces y Estructura"
echo "=========================================="

echo ""
echo "🔍 PASO 1: Verificando estructura actual..."
echo "📁 Páginas principales encontradas:"
ls -la src/pages/*.astro | grep -E "(discografia|lanzamiento|preventa|enciclopedia)" || echo "   No se encontraron páginas principales"

echo ""
echo "📁 Carpetas de música encontradas:"
find src -type d -name "*musica*" 2>/dev/null || echo "   No se encontraron carpetas musica"

echo ""
echo "🔍 PASO 2: Revisando enlaces del Header actual..."
echo "Enlaces del menú Música en Header.astro:"
grep -A 6 -B 1 "getPath.*musica\|getPath.*discografia" src/components/Header.astro || echo "   No se encontraron enlaces de música"

echo ""
echo "🗑️ PASO 3: Eliminando backup problemático..."
if [ -d "src/pages/obras_backup_20251024_144526" ]; then
    echo "   🗑️ Eliminando: src/pages/obras_backup_20251024_144526/"
    rm -rf src/pages/obras_backup_20251024_144526
    echo "   ✅ Backup eliminado"
else
    echo "   ℹ️ No se encontró la carpeta de backup"
fi

echo ""
echo "🔧 PASO 4: Corrigiendo Header para enlaces correctos..."
# Asegurar que el Header tenga enlaces coherentes
if [ -f "src/components/Header.astro" ]; then
    # Crear backup del Header
    cp src/components/Header.astro src/components/Header.astro.backup.$(date +%Y%m%d_%H%M%S)
    
    # Verificar y corregir enlaces
    if grep -q "/musica/discografia" src/components/Header.astro; then
        echo "   ✅ El Header ya apunta a /musica/discografia"
    else
        echo "   🔧 Corrigiendo enlaces del Header..."
        sed -i 's|/discografia|/musica/discografia|g' src/components/Header.astro
    fi
    
    if grep -q "/musica/lanzamientos" src/components/Header.astro; then
        echo "   ✅ Los enlaces están coherentes con /musica/"
    else
        echo "   🔧 Corrigiendo otros enlaces..."
        sed -i 's|/lanzamientos|/musica/lanzamientos|g' src/components/Header.astro
        sed -i 's|/preventa|/musica/preventa|g' src/components/Header.astro  
        sed -i 's|/enciclopedia|/musica/enciclopedia|g' src/components/Header.astro
    fi
fi

echo ""
echo "🧹 PASO 5: Limpiando cache de Astro..."
rm -rf .astro/ .vercel/ .netlify/ dist/ 2>/dev/null || true

echo ""
echo "✅ LIMPIEZA COMPLETADA"
echo "=========================================="
echo ""
echo "🎯 ESTRUCTURA FINAL:"
echo "   • Menú Música > Discografía → /musica/discografia"
echo "   • Menú Música > Lanzamientos → /musica/lanzamientos" 
echo "   • Menú Música > Preventa → /musica/preventa"
echo "   • Menú Música > Enciclopedia → /musica/enciclopedia"
echo ""
echo "📁 BACKUPS ELIMINADOS:"
echo "   • src/pages/obras_backup_20251024_144526/ (eliminado)"
echo "   • src/components/Header.astro.backup.[timestamp] (creado)"
echo ""
echo "🚀 PRÓXIMOS PASOS:"
echo "1. npm run dev"
echo "2. Ir a 'Música' > 'Discografía'"
echo "3. Verificar que todos los enlaces funcionen"