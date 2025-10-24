#!/bin/bash

# Script para corregir los enlaces de navegación de Música
# Ejecutar en el directorio raíz de tu proyecto

echo "🔧 Corrigiendo enlaces de navegación del menú Música..."

# Crear backup del archivo Header
if [ -f "src/components/Header.astro" ]; then
    cp src/components/Header.astro src/components/Header.astro.backup.$(date +%Y%m%d_%H%M%S)
    echo "✅ Backup del Header creado"
fi

# Aplicar todas las correcciones de enlaces
echo "🔍 Aplicando correcciones..."

# 1. Artistas -> Discografía (ya que no existe página de artistas)
sed -i 's|/musica/artistas|/discografia|g' src/components/Header.astro

# 2. Discografía (ya estaba corregido, pero confirmamos)
sed -i 's|/musica/discografia|/discografia|g' src/components/Header.astro

# 3. Lanzamientos
sed -i 's|/musica/lanzamientos|/lanzamientos|g' src/components/Header.astro

# 4. Preventa
sed -i 's|/musica/preventa|/preventa|g' src/components/Header.astro

# 5. Enciclopedia
sed -i 's|/musica/enciclopedia|/enciclopedia|g' src/components/Header.astro

# Verificar los cambios
echo ""
echo "🔍 Enlaces corregidos:"
grep -n "getPath.*discografia\|getPath.*lanzamientos\|getPath.*preventa\|getPath.*enciclopedia" src/components/Header.astro

echo ""
echo "✅ Todos los enlaces del menú Música han sido corregidos!"
echo ""
echo "📍 Los enlaces ahora apuntan correctamente a:"
echo "   • Música > Artistas    → /discografia"
echo "   • Música > Discografía → /discografia" 
echo "   • Música > Lanzamientos → /lanzamientos"
echo "   • Música > Preventa     → /preventa"
echo "   • Música > Enciclopedia → /enciclopedia"
echo ""
echo "🚀 Para ver los cambios:"
echo "1. npm run dev"
echo "2. Ve a 'Música' y verifica que todos los enlaces funcionen"
echo ""
echo "📝 Archivo de backup guardado como:"
echo "src/components/Header.astro.backup.[timestamp]"