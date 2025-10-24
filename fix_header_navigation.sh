#!/bin/bash

# Script para corregir el enlace de navegación de Discografía
# Ejecutar en el directorio raíz de tu proyecto

echo "🔧 Corrigiendo navegación de Discografía..."

# Crear backup del archivo original
if [ -f "src/components/Header.astro" ]; then
    cp src/components/Header.astro src/components/Header.astro.backup.$(date +%Y%m%d_%H%M%S)
    echo "✅ Backup creado"
fi

# Aplicar la corrección (cambiar /musica/discografia por /obras)
sed -i 's|/musica/discografia|/obras|g' src/components/Header.astro

# Verificar el cambio
echo "🔍 Verificando el cambio..."
grep -n "Discografía" src/components/Header.astro

echo "✅ Navegación corregida!"
echo "📍 El enlace 'Música → Discografía' ahora apunta a /obras"
echo ""
echo "🚀 Para ver los cambios:"
echo "1. npm run dev"
echo "2. Ir a 'Música' > 'Discografía'"
echo ""
echo "📝 El archivo de backup se guardó como:"
echo "src/components/Header.astro.backup.[timestamp]"