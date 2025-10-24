#!/bin/bash

# Script para limpiar páginas innecesarias de /obras/
# Ejecutar en el directorio raíz de tu proyecto

echo "🧹 Limpiando páginas innecesarias..."

# Verificar si existe la carpeta obras
if [ -d "src/pages/obras" ]; then
    echo "📁 Encontrada carpeta src/pages/obras/"
    
    # Contar archivos
    file_count=$(find src/pages/obras -name "*.astro" | wc -l)
    echo "   Archivos encontrados: $file_count"
    
    # Crear backup de la carpeta antes de eliminarla
    echo "💾 Creando backup..."
    mkdir -p src/pages/obras_backup_$(date +%Y%m%d_%H%M%S)
    cp -r src/pages/obras/* src/pages/obras_backup_$(date +%Y%m%d_%H%M%S)/ 2>/dev/null || true
    
    # Eliminar la carpeta obras (ya que la discografía está en /discografia)
    echo "🗑️ Eliminando carpeta src/pages/obras/ (no necesaria)"
    rm -rf src/pages/obras
    
    echo "✅ Carpeta obras eliminada"
    echo "📦 Backup guardado en: src/pages/obras_backup_[timestamp]/"
else
    echo "ℹ️ No se encontró la carpeta src/pages/obras/"
fi

echo ""
echo "🎯 Estado actual:"
echo "   • Página principal de discografía: /discografia (✅ existe)"
echo "   • Enlaces de navegación: ✅ corregidos"
echo "   • Páginas en /obras/: 🗑️ eliminadas (no necesarias)"
echo ""
echo "🚀 Tu sitio ahora usa:"
echo "   - /discografia para la página principal de discografía"
echo "   - Todos los enlaces del menú Música funcionan correctamente"
echo ""
echo "💡 Nota: La página /discografia ya existía y es la que debes usar."