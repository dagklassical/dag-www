#!/bin/bash

echo "=== DIAGNÓSTICO SEGURO LOGO 404 ==="
echo ""

echo "1. Estado actual del sitio:"
git log --oneline -3
echo "Rama actual: $(git branch --show-current)"
echo ""

echo "2. Backup del next.config.js actual:"
if [ ! -f next.config.js.backup.safe ]; then
    cp next.config.js next.config.js.backup.safe
    echo "✅ Backup creado: next.config.js.backup.safe"
else
    echo "⚠️  Backup ya existe: next.config.js.backup.safe"
fi
echo ""

echo "3. Contenido actual del next.config.js:"
cat next.config.js
echo ""

echo "4. Crear next.config.js corregido (NO aplicado):"
cat > next.config.js.temp << 'EOF'
// next.config.js - VERSIÓN SIN BASE PATH
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { 
    unoptimized: true 
  },
  // basePath y assetPrefix eliminados para servir desde raíz
}
module.exports = nextConfig
EOF
echo "✅ Archivo temporal creado: next.config.js.temp"
echo ""

echo "5. Comparar configuraciones:"
echo "ORIGINAL:"
head -10 next.config.js
echo ""
echo "PROPUESTA:"
head -10 next.config.js.temp
echo ""

echo "6. Test build con configuración original:"
echo "Ejecutando 'npm run build' (config actual)..."
npm run build
echo ""

echo "7. Verificar logos en build actual:"
echo "Contenido de out/images/:"
ls -la out/images/ 2>/dev/null | grep logo || echo "❌ No hay logos en build"
echo ""

echo "8. Test build con configuración corregida:"
echo "Copiando configuración temporal..."
cp next.config.js.temp next.config.js.test
echo "Ejecutando 'npm run build' (config sin basePath)..."
npm run build
echo ""

echo "9. Verificar logos en build corregido:"
echo "Contenido de out/images/:"
ls -la out/images/ | grep logo || echo "❌ Los logos tampoco aparecen con esta config"
echo ""

echo "=== OPCIONES PARA TI ==="
echo "Opción A - Aplicar configuración sin basePath:"
echo "  cp next.config.js.temp next.config.js"
echo ""
echo "Opción B - Restaurar original:"
echo "  cp next.config.js.backup.safe next.config.js"
echo ""
echo "Opción C - Investigar otra causa del 404"
echo ""
echo "✅ No se ha aplicado ningún cambio todavía."
echo "✅ Todos los archivos están disponibles para decisión manual."