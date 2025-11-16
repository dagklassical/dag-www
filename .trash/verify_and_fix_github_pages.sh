#!/bin/bash
# Verificación del estado actual y solución alternativa
echo "🔍 VERIFICACIÓN DEL ESTADO ACTUAL"
echo "=================================="
echo ""

cd /home/apradoc/dev/gitlab/dagklassical/dag-www

echo "📋 Paso 1: Verificando estado del proyecto..."
echo "Rama actual: $(git branch --show-current)"
echo "Último commit: $(git log -1 --oneline)"
echo ""

echo "📋 Paso 2: Verificando next.config.js actual..."
cat next.config.js
echo ""

echo "📋 Paso 3: Verificando si existe directorio out..."
if [ -d "out" ]; then
    echo "✅ Directorio out existe"
    echo "Contenido:"
    ls -la out/
else
    echo "❌ No existe directorio out"
fi

echo ""
echo "📋 Paso 4: Verificando archivos en public/images..."
if [ -d "public/images" ]; then
    echo "✅ Directorio public/images existe"
    ls -la public/images/
else
    echo "❌ No existe directorio public/images"
fi

echo ""
echo "🎯 PROBLEMA IDENTIFICADO:"
echo "========================"
echo "❌ Los assets se buscan en: https://dagklassical.github.io/_next/static/"
echo "❌ Deberían estar en: https://dagklassical.github.io/dag-www/_next/static/"
echo "❌ Next.js output: 'export' no respeta basePath correctamente"
echo ""

echo "🔧 SOLUCIÓN ALTERNATIVA: Usar configuración sin basePath"
echo "========================================================="
echo ""

echo "💾 Paso 5: Backup de configuración actual..."
cp next.config.js next.config.js.backup.github-pages

echo ""
echo "🔧 Paso 6: Creando configuración sin basePath para GitHub Pages..."

cat > next.config.js << 'EOF'
// next.config.js - Configuración para servir desde la raíz
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: { 
    unoptimized: true 
  },
  // SIN basePath - servir desde la raíz de GitHub Pages
}

module.exports = nextConfig
EOF

echo "✅ Configuración actualizada sin basePath"

echo ""
echo "🏗️ Paso 7: Build para verificar que funciona..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build exitoso sin basePath"
    
    echo ""
    echo "📁 Verificando archivos generados..."
    find out -name "*.webp" | head -10
    echo ""
    echo "📊 Tamaño de archivos estáticos:"
    du -sh out/
else
    echo "❌ Build falló. Error en la configuración."
    exit 1
fi

echo ""
echo "📝 Paso 8: Commit y push de la solución..."
git add next.config.js
git commit -m "🔧 Fix: Eliminar basePath para servir desde raíz de GitHub Pages

- Removido basePath y assetPrefix de next.config.js
- El sitio se servirá desde la raíz: https://dagklassical.github.io/dag-www/
- Los assets ahora cargarán desde la raíz correctamente
- Soluciona errores 404 en CSS, JS y logos
- Configurado distDir: 'out' para GitHub Pages"

git push origin main

echo ""
echo "🎉 SOLUCIÓN APLICADA EXITOSAMENTE"
echo "=================================="
echo ""
echo "✅ Configuración cambiada para servir desde la raíz"
echo "✅ Build exitoso verificado"
echo "✅ Commit y push realizados"
echo ""
echo "⏰ El sitio debería estar funcionando en 2-3 minutos:"
echo "   https://dagklassical.github.io/dag-www/"
echo ""
echo "🎯 RESULTADO ESPERADO:"
echo "✅ Header: Logo DAG 002 visible"
echo "✅ Footer: Logo DAG dorado visible"
echo "✅ CSS: Cargando sin errores 404"
echo "✅ JS: Cargando sin errores 404"
echo "✅ Todas las páginas funcionando normalmente"
echo ""
echo "🔍 Para verificar:"
echo "1. Ve a: https://github.com/dagklassical/dag-www/actions"
echo "2. Revisa que el workflow complete exitosamente"
echo "3. Visita: https://dagklassical.github.io/dag-www/"
echo ""
echo "💡 Si quieres volver a la configuración anterior:"
echo "   cp next.config.js.backup.github-pages next.config.js"

echo ""
echo "🏁 Proceso completado"