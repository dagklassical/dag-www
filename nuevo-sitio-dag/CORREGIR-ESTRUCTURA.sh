#!/bin/bash

echo "🔧 CORRIGIENDO ESTRUCTURA - MOVIENDO ARCHIVOS A RAÍZ"
echo "=================================================="

# Verificar que estamos en el directorio correcto
if [ ! -d "next-dag-classical" ]; then
    echo "❌ Error: No encuentra carpeta next-dag-classical"
    echo "Ve a: cd /home/apradoc/dev/gitlab/dagklassical/dag-www/nuevo-sitio-dag"
    exit 1
fi

echo "✅ Carpeta next-dag-classical encontrada"

# Mover TODOS los archivos desde la subcarpeta al directorio actual
echo "📦 Moviendo archivos a raíz..."

# Mover archivos de configuración
mv next-dag-classical/package.json . 2>/dev/null || true
mv next-dag-classical/next.config.js . 2>/dev/null || true
mv next-dag-classical/tailwind.config.js . 2>/dev/null || true
mv next-dag-classical/tsconfig.json . 2>/dev/null || true
mv next-dag-classical/postcss.config.js . 2>/dev/null || true
mv next-dag-classical/.eslintrc.json . 2>/dev/null || true

# Mover carpetas completas
mv next-dag-classical/src/ . 2>/dev/null || true
mv next-dag-classical/public/ . 2>/dev/null || true

# Limpiar subcarpeta vacía
rmdir next-dag-classical 2>/dev/null || true

echo "✅ Archivos movidos a raíz"

# Aplicar cambios de Danilo
echo "🎨 Aplicando cambios de Danilo..."
find . -name "*.css" -exec sed -i 's/rounded-lg/rounded-xl/g' {} \;
find . -name "*.tsx" -exec sed -i 's/rounded-lg/rounded-xl/g' {} \;

echo "✅ Border radius actualizado"

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

echo ""
echo "🧪 VERIFICANDO PÁGINAS..."
echo "Páginas que deben existir:"
echo "- /musica: $([ -f "src/app/musica/page.tsx" ] && echo "✅" || echo "❌")"
echo "- /virginia-ramirez: $([ -f "src/app/virginia-ramirez/page.tsx" ] && echo "✅" || echo "❌")"
echo "- /nosotros: $([ -d "src/app/nosotros" ] && echo "✅" || echo "❌")"
echo "- /blockchain/polygon-networks: $([ -f "src/app/blockchain/polygon-networks/page.tsx" ] && echo "✅" || echo "❌")"
echo "- /blockchain/tienda-nft: $([ -f "src/app/blockchain/tienda-nft/page.tsx" ] && echo "✅" || echo "❌")"
echo "- Logo: $([ -f "public/logo-dag-klassical-003.png" ] && echo "✅" || echo "❌")"

echo ""
echo "🎉 ¡PROYECTO CORREGIDO Y LISTO!"
echo "=============================="
echo "Para iniciar servidor: npm run dev"
echo ""
echo "Para GitHub:"
echo "git add ."
echo "git commit -m \"DAG Classical: Fixed structure from zip extraction\""
echo "git push origin migracion-nextjs-profesional"