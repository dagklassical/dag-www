#!/bin/bash
# Solución inmediata para que los logos aparezcan
# Modificando next.config.js para eliminar basePath y servir desde la raíz

echo "🚀 SOLUCIONANDO APARICIÓN DE LOGOS - ELIMINANDO BASEPATH"
echo "========================================================="
echo ""

cd /home/apradoc/dev/gitlab/dagklassical/dag-www

echo "💾 Paso 1: Creando backup de next.config.js..."
cp next.config.js next.config.js.backup
echo "✅ Backup creado: next.config.js.backup"

echo ""
echo "🔧 Paso 2: Modificando next.config.js para servir desde la raíz..."
echo ""

# Crear el nuevo next.config.js
cat > next.config.js << 'EOF'
// next.config.js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { 
    unoptimized: true 
  },
  // BasePath y assetPrefix eliminados para servir desde la raíz
}
module.exports = nextConfig
EOF

echo "✅ next.config.js actualizado - BasePath eliminado"

echo ""
echo "📋 Cambio realizado:"
echo "ANTES:"
echo "  basePath: process.env.NODE_ENV === 'production' ? '/dag-www' : '',"
echo "  assetPrefix: process.env.NODE_ENV === 'production' ? '/dag-www' : '',"
echo ""
echo "DESPUÉS:"
echo "  // BasePath y assetPrefix eliminados para servir desde la raíz"

echo ""
echo "🏗️ Paso 3: Construyendo proyecto localmente para verificar..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build local exitoso"
    echo "📁 Verificando directorio out:"
    ls -la out/
else
    echo "❌ Error en build local"
    echo "🔄 Restaurando backup..."
    cp next.config.js.backup next.config.js
    echo "✅ Backup restaurado"
    exit 1
fi

echo ""
echo "📝 Paso 4: Haciendo commit del cambio..."
git add next.config.js
git commit -m "🔧 Fix: Eliminar basePath para servir desde raíz en GitHub Pages

- Removido basePath y assetPrefix de next.config.js
- El sitio ahora se servirá desde la raíz, no desde /dag-www/
- Los logos y assets deberían cargar correctamente
- GitHub Actions deployará automáticamente desde main"

echo ""
echo "🚀 Paso 5: Push para activar GitHub Actions..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 ¡CAMBIO SUBIDO EXITOSAMENTE!"
    echo "==============================="
    echo ""
    echo "📋 Lo que ocurrió:"
    echo "✅ next.config.js modificado para servir desde la raíz"
    echo "✅ Build local verificado - funciona correctamente"
    echo "✅ Commit realizado con mensaje descriptivo"
    echo "✅ Push a main para activar GitHub Actions"
    echo ""
    echo "⏰ Tiempo de activación: 2-3 minutos"
    echo "🌐 Verifica el sitio en: https://dagklassical.github.io/dag-www/"
    echo ""
    echo "🎯 RESULTADO ESPERADO:"
    echo "✅ Header: Logo DAG 002 debería aparecer"
    echo "✅ Footer: Logo DAG dorado debería aparecer"
    echo "✅ Todas las páginas deberían cargar normalmente"
    echo "✅ Sin errores 404 o de assets"
    echo ""
    echo "🔍 Para verificar:"
    echo "1. Ve a: https://github.com/dagklassical/dag-www/actions"
    echo "2. Revisa que el workflow se ejecute correctamente"
    echo "3. Ve a: https://dagklassical.github.io/dag-www/ para ver los logos"
    echo ""
    echo "🔄 Si algo sale mal, ejecuta:"
    echo "   cp next.config.js.backup next.config.js"
    echo "   git add next.config.js && git commit -m 'Rollback next.config.js'"
    echo "   git push origin main"
else
    echo ""
    echo "❌ Error en el push. Revisa las credenciales de git."
    echo "🔄 Restaurando backup como medida de seguridad..."
    cp next.config.js.backup next.config.js
    echo "✅ Backup restaurado automáticamente"
fi

echo ""
echo "🏁 Proceso completado"