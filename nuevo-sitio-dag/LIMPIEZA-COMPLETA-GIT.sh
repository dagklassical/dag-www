#!/bin/bash

echo "🧹 LIMPIEZA COMPLETA DEL REPOSITORIO GIT"
echo "========================================"
echo ""

# PASO 1: Agregar todos los cambios al commit
echo "📦 Agregando todos los cambios al commit..."
git add .

echo ""
echo "✅ CAMBIOS A SER COMMITADOS:"
echo "   • Archivos modificados: $(git diff --name-only | wc -l)"
echo "   • Archivos borrados: $(git diff --name-status | grep '^D' | wc -l)"
echo "   • Archivos nuevos: $(git diff --name-status | grep '^A' | wc -l)"

# Mostrar resumen de cambios principales
echo ""
echo "📋 ARCHIVOS PRINCIPALES MODIFICADOS:"
git diff --name-only | grep -E "(layout|globals|Header|page|blockchain)" | head -10

# PASO 2: Hacer commit descriptivo
echo ""
echo "🔒 Haciendo commit con todos los cambios de refinamiento..."
git commit -m "feat: Refinamientos finales de diseño según especificaciones de Danilo

- Configurar tipografía Inter exclusiva con pesos sutiles (máximo 500)
- Remover iconos de navegación en header y hero section  
- Aplicar logo todo en color burgundy
- Reducir border radius a rounded-xl (0.5rem)
- Mantener iconos solo en tarjetas de contenido
- Arreglar error 'Unsupported Server Component' en /blockchain
- Eliminar páginas obsoletas (musica/*, nosotros/*, eventos, etc.)
- Limpiar archivos de backup y scripts temporales
- Configurar tailwind.config.js con colores DAG completos"

echo ""
echo "✅ COMMIT REALIZADO EXITOSAMENTE"

# PASO 3: Limpiar archivos sin seguimiento
echo ""
echo "🗑️ Limpiando archivos sin seguimiento..."
echo "   Archivos sin seguimiento encontrados:"

# Mostrar archivos sin seguimiento
if [ -d "../backup-estado-actual-052029" ]; then
    echo "   • ../backup-estado-actual-052029/ (directorio de backup)"
fi

if [ -f "../fix-404-pages.sh" ]; then
    echo "   • ../fix-404-pages.sh (script temporal)"
fi

if [ -f "SOLUCION-ERROR-BLOCKCHAIN.sh" ]; then
    echo "   • SOLUCION-ERROR-BLOCKCHAIN.sh (script temporal)"
fi

if [ -f "SOLUCION-RAPIDA-ERROR.sh" ]; then
    echo "   • SOLUCION-RAPIDA-ERROR.sh (script temporal)"
fi

if [ -f "src/app/blockchain/page.tsx.backup.$(date +%Y%m%d)*" ]; then
    echo "   • src/app/blockchain/page.tsx.backup.* (backup temporal)"
fi

echo ""
echo "¿Deseas eliminar estos archivos? (y/n)"
read -r respuesta

if [[ $respuesta =~ ^[Yy]$ ]]; then
    # Eliminar archivos temporales
    [ -d "../backup-estado-actual-052029" ] && rm -rf "../backup-estado-actual-052029"
    [ -f "../fix-404-pages.sh" ] && rm -f "../fix-404-pages.sh"
    [ -f "SOLUCION-ERROR-BLOCKCHAIN.sh" ] && rm -f "SOLUCION-ERROR-BLOCKCHAIN.sh"
    [ -f "SOLUCION-RAPIDA-ERROR.sh" ] && rm -f "SOLUCION-RAPIDA-ERROR.sh"
    rm -f src/app/blockchain/page.tsx.backup.*
    
    echo "✅ Archivos temporales eliminados"
else
    echo "ℹ️ Archivos temporales conservados"
fi

# PASO 4: Estado final
echo ""
echo "🎉 ESTADO FINAL DEL REPOSITORIO:"
echo "================================"
git status --porcelain

echo ""
echo "🚀 REPOSITORIO LIMPIO Y LISTO"
echo "💡 Para hacer push: git push origin migracion-nextjs-profesional"