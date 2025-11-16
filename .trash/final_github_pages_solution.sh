#!/bin/bash
# Solución definitiva para el problema de GitHub Pages
# Configurando GitHub Pages para servir desde la carpeta correcta

echo "🎯 SOLUCIÓN DEFINITIVA PARA GITHUB PAGES"
echo "========================================"
echo ""

cd /home/apradoc/dev/gitlab/dagklassical/dag-www

echo "📋 PROBLEMA CONFIRMADO:"
echo "======================"
echo "❌ Sitio sirve desde raíz: https://dagklassical.github.io/"
echo "❌ Assets buscan en: https://dagklassical.github.io/_next/static/"
echo "✅ Deberían estar en: https://dagklassical.github.io/dag-www/_next/static/"
echo ""

echo "🔧 PASO 1: Verificar estado actual del proyecto..."
echo "Rama: $(git branch --show-current)"
echo "Último commit: $(git log -1 --oneline)"
echo ""

echo "🔧 PASO 2: Verificando configuración de next.config.js..."
echo "Contenido actual:"
grep -A 10 -B 5 "basePath\|assetPrefix\|output:" next.config.js || echo "No se encontraron configuraciones basePath/assetPrefix"

echo ""
echo "🔧 PASO 3: Construyendo proyecto limpio..."

# Limpiar todo
rm -rf .next out node_modules/.cache
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build exitoso"
else
    echo "❌ Build falló. Revisar errores."
    exit 1
fi

echo ""
echo "📋 PASO 4: Verificando estructura generada..."
if [ -d "out" ]; then
    echo "✅ Directorio 'out' generado"
    echo "Archivos principales:"
    find out -maxdepth 2 -type f | head -10
    echo ""
    echo "Logos en out:"
    find out -name "*logo*" -type f
else
    echo "❌ No se generó directorio 'out'"
    exit 1
fi

echo ""
echo "🔧 PASO 5: Restaurando basePath para que funcione correctamente..."

# Crear configuración correcta
cp next.config.js next.config.js.no-basepath

cat > next.config.js << 'EOF'
// next.config.js - Configuración correcta para GitHub Pages
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: { 
    unoptimized: true 
  },
  // Configurar basePath para que coincida con GitHub Pages
  basePath: '/dag-www',
  assetPrefix: '/dag-www',
}

module.exports = nextConfig
EOF

echo "✅ basePath restaurado con /dag-www"

echo ""
echo "🏗️ PASO 6: Re-build con basePath corregido..."
rm -rf .next out
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build con basePath exitoso"
else
    echo "❌ Build con basePath falló"
    exit 1
fi

echo ""
echo "📝 PASO 7: Verificando URLs correctas en archivos generados..."
echo "Verificando index.html para basePath correcto:"
grep -o 'href="[^"]*"' out/index.html | grep -E "(css|js|images)" | head -5

echo ""
echo "📝 PASO 8: Commit y push de la configuración corregida..."
git add next.config.js
git commit -m "🔧 Fix: basePath restaurado para URLs correctas en GitHub Pages

- Reconfigurado basePath: /dag-www y assetPrefix: /dag-www  
- El sitio ahora generará URLs correctas para assets estáticos
- CSS, JS y logos buscarán en /dag-www/_next/static/ y /dag-www/images/
- Compatible con GitHub Pages que sirve desde /dag-www/

SOLUCIÓN COMPLETA:
1. GitHub Pages sirve desde la raíz del repositorio
2. El sitio se despliega en la raíz
3. basePath dirige todas las rutas a /dag-www/
4. Resultado: URLs correctas sin errores 404"

git push origin main

echo ""
echo "🎯 CONFIGURACIÓN FINAL NECESARIA"
echo "================================="
echo ""
echo "📋 IMPORTANTE: Después del push, configura GitHub Pages:"
echo ""
echo "Ve a: https://github.com/dagklassical/dag-www/settings/pages"
echo ""
echo "1. 'Source': Deploy from a branch"
echo "2. 'Branch': main"
echo "3. 'Folder': / (root) - ESTO ES CRUCIAL"
echo ""
echo "GitHub Actions generará el sitio en la raíz de main,"
echo "y el basePath dirigirá todas las rutas a /dag-www/"

echo ""
echo "⏰ TIEMPO DE ACTIVACIÓN:"
echo "========================"
echo "🔄 GitHub Actions: 1-2 minutos"
echo "🌐 Sitio disponible: 2-3 minutos"
echo "📱 URL final: https://dagklassical.github.io/dag-www/"
echo ""

echo "🎯 RESULTADO ESPERADO:"
echo "====================="
echo "✅ Header: Logo 002 en https://dagklassical.github.io/dag-www/images/"
echo "✅ Footer: Logo dorado en https://dagklassical.github.io/dag-www/images/"
echo "✅ CSS: https://dagklassical.github.io/dag-www/_next/static/css/..."
echo "✅ JS: https://dagklassical.github.io/dag-www/_next/static/chunks/..."
echo "✅ Sin errores 404"
echo "✅ Sitio completamente funcional"

echo ""
echo "🔍 VERIFICACIÓN:"
echo "================"
echo "1. Ve a: https://github.com/dagklassical/dag-www/actions"
echo "2. Espera que complete el workflow"
echo "3. Visita: https://dagklassical.github.io/dag-www/"
echo "4. Confirma que logos y estilos cargan correctamente"

echo ""
echo "💡 Si algo falla, revisa:"
echo "- Logs de GitHub Actions"
echo "- Console del navegador en dag-www/"
echo "- Que GitHub Pages esté configurado correctamente"

echo ""
echo "🏁 Proceso completado - El sitio debería funcionar en 2-3 minutos"