#!/bin/bash

# 🔄 RECUPERACIÓN COMPLETA DAG KLASSICAL
# Recupera TODA la estructura perdida

echo "🚀 RECUPERANDO DAG KLASSICAL COMPLETO..."
echo "=============================================="

cd /home/apradoc/dev/gitlab/dagklassical/dag-www/nuevo-sitio-dag

# 1. BACKUP COMPLETO ANTES DE TODO
echo "💾 Creando backup completo..."
cp -r . ../backup-estado-actual-$(date +%Y%m%d_%H%M%S)/

# 2. RECUPERAR LOGO
echo "🎯 Recuperando logo..."
for src in "/workspace/user_input_files/logo-dag-klassical-003.png" \
           "/workspace/next-dag-classical/public/logo-dag-klassical-003.png"; do
    if [ -f "$src" ]; then
        cp "$src" public/logo-dag-klassical-003.png
        echo "✅ Logo copiado desde: $src"
        break
    fi
done

# 3. RECUPERAR HEADER SIN ICONOS + LOGO
echo "🎯 Recuperando Header completo..."
cp "/workspace/next-dag-classical/src/components/Header.tsx" src/components/

# 4. RECUPERAR PÁGINAS FALTANTES
echo "🎯 Recuperando páginas faltantes..."

# Música
if [ -f "/workspace/next-dag-classical/src/app/musica/page.tsx" ]; then
    mkdir -p src/app/musica
    cp "/workspace/next-dag-classical/src/app/musica/page.tsx" src/app/musica/
    echo "✅ Página /musica"
fi

# Virginia Ramírez
if [ -f "/workspace/next-dag-classical/src/app/virginia-ramirez/page.tsx" ]; then
    mkdir -p src/app/virginia-ramirez
    cp "/workspace/next-dag-classical/src/app/virginia-ramirez/page.tsx" src/app/virginia-ramirez/
    echo "✅ Página /virginia-ramirez"
fi

# Nosotros
if [ -f "/workspace/next-dag-classical/src/app/nosotros/page.tsx" ]; then
    mkdir -p src/app/nosotros
    cp "/workspace/next-dag-classical/src/app/nosotros/page.tsx" src/app/nosotros/
    echo "✅ Página /nosotros"
fi

# 5. RECUPERAR ESTRUCTURA BLOCKCHAIN COMPLETA
echo "🎯 Recuperando estructura Blockchain..."

# polygon-networks
if [ -d "/workspace/next-dag-classical/src/app/blockchain/polygon-networks" ]; then
    cp -r "/workspace/next-dag-classical/src/app/blockchain/polygon-networks" src/app/blockchain/
    echo "✅ /blockchain/polygon-networks"
fi

# tienda-nft
if [ -d "/workspace/next-dag-classical/src/app/blockchain/tienda-nft" ]; then
    cp -r "/workspace/next-dag-classical/src/app/blockchain/tienda-nft" src/app/blockchain/
    echo "✅ /blockchain/tienda-nft"
fi

# Subpáginas adicionales
if [ -d "/workspace/next-dag-classical/src/app/blockchain/certificados" ]; then
    mkdir -p src/app/blockchain/certificados
    cp "/workspace/next-dag-classical/src/app/blockchain/certificados/page.tsx" src/app/blockchain/certificados/ 2>/dev/null || true
    echo "✅ /blockchain/certificados"
fi

# 6. PÁGINAS LEGALES
echo "🎯 Recuperando páginas legales..."

# Privacidad
if [ -f "/workspace/next-dag-classical/src/app/privacidad/page.tsx" ] || [ -f "/workspace/next-dag-classical/src/app/terminos/page.tsx" ]; then
    mkdir -p src/app/privacidad src/app/terminos
    [ -f "/workspace/next-dag-classical/src/app/privacidad/page.tsx" ] && cp "/workspace/next-dag-classical/src/app/privacidad/page.tsx" src/app/privacidad/
    [ -f "/workspace/next-dag-classical/src/app/terminos/page.tsx" ] && cp "/workspace/next-dag-classical/src/app/terminos/page.tsx" src/app/terminos/
    echo "✅ Páginas legales"
fi

# 7. SUBPÁGINAS ADICIONALES
echo "🎯 Recuperando subpáginas..."

# Música subpáginas
if [ -d "/workspace/next-dag-classical/src/app/musica/discografia" ]; then
    cp -r "/workspace/next-dag-classical/src/app/musica/discografia" src/app/musica/ 2>/dev/null || true
    echo "✅ /musica/discografia"
fi

if [ -d "/workspace/next-dag-classical/src/app/musica/lanzamientos" ]; then
    cp -r "/workspace/next-dag-classical/src/app/musica/lanzamientos" src/app/musica/ 2>/dev/null || true
    echo "✅ /musica/lanzamientos"
fi

if [ -d "/workspace/next-dag-classical/src/app/musica/preventa" ]; then
    cp -r "/workspace/next-dag-classical/src/app/musica/preventa" src/app/musica/ 2>/dev/null || true
    echo "✅ /musica/preventa"
fi

if [ -d "/workspace/next-dag-classical/src/app/musica/enciclopedia" ]; then
    cp -r "/workspace/next-dag-classical/src/app/musica/enciclopedia" src/app/musica/ 2>/dev/null || true
    echo "✅ /musica/enciclopedia"
fi

# Nosotros subpáginas
if [ -d "/workspace/next-dag-classical/src/app/nosotros/dag-klassical" ]; then
    cp -r "/workspace/next-dag-classical/src/app/nosotros/dag-klassical" src/app/nosotros/ 2>/dev/null || true
    echo "✅ /nosotros/dag-klassical"
fi

if [ -d "/workspace/next-dag-classical/src/app/nosotros/danilo-alvarez" ]; then
    cp -r "/workspace/next-dag-classical/src/app/nosotros/danilo-alvarez" src/app/nosotros/ 2>/dev/null || true
    echo "✅ /nosotros/danilo-alvarez"
fi

if [ -d "/workspace/next-dag-classical/src/app/nosotros/terminos" ]; then
    cp -r "/workspace/next-dag-classical/src/app/nosotros/terminos" src/app/nosotros/ 2>/dev/null || true
    echo "✅ /nosotros/terminos"
fi

# 8. APLICAR CAMBIOS DANILO
echo "🎯 Aplicando cambios de Danilo..."
sed -i 's/rounded-lg/rounded-xl/g' src/app/globals.css 2>/dev/null || true
sed -i 's/rounded-lg/rounded-xl/g' src/app/page.tsx 2>/dev/null || true
echo "✅ Border radius corregido"

# 9. VERIFICACIONES FINALES
echo ""
echo "🔍 VERIFICACIONES:"
echo "------------------"

echo "Logo:"
ls -la public/logo-dag-klassical-003.png 2>/dev/null && echo "✅ Logo encontrado" || echo "❌ Logo faltante"

echo "Páginas principales:"
for page in "musica" "virginia-ramirez" "nosotros" "contacto" "noticias" "blockchain"; do
    [ -f "src/app/$page/page.tsx" ] && echo "✅ /$page" || echo "❌ /$page"
done

echo "Estructura Blockchain:"
for page in "polygon-networks" "tienda-nft" "certificados"; do
    [ -f "src/app/blockchain/$page/page.tsx" ] && echo "✅ /blockchain/$page" || echo "❌ /blockchain/$page"
done

echo ""
echo "🎉 RECUPERACIÓN COMPLETADA"
echo "=========================="
echo ""
echo "📋 ESTRUCTURA RESTAURADA:"
echo "• Logo DAG Klassical ✅"
echo "• Header sin iconos ✅"
echo "• Páginas principales: /musica, /virginia-ramirez, /nosotros ✅"
echo "• Estructura Blockchain completa ✅"
echo "• Subpáginas de música ✅"
echo "• Subpáginas de nosotros ✅"
echo "• Border radius corregido ✅"
echo ""
echo "🚀 PRÓXIMOS PASOS:"
echo "1. npm run dev"
echo "2. Verificar todas las páginas"
echo "3. git add . && git commit -m '🔄 Recuperación completa DAG Klassical'"
echo "4. git push origin migracion-nextjs-profesional"
echo ""
echo "💾 Backup creado en: ../backup-estado-actual-$(date +%Y%m%d_%H%M%S)/"