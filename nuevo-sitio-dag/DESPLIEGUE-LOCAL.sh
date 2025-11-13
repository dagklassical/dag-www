#!/bin/bash

echo "🚀 DESPLEGANDO DESDE TU ZIP LOCAL"
echo "================================="

# Verificar que estamos en el directorio correcto y tenemos el ZIP
if [ ! -f "next-dag-classical.zip" ]; then
    echo "❌ Error: No encuentra next-dag-classical.zip"
    echo "Asegúrate de estar en: cd /home/apradoc/dev/gitlab/dagklassical/dag-www/nuevo-sitio-dag"
    exit 1
fi

echo "✅ ZIP encontrado en directorio actual"

# Extraer ZIP (sobrescribirá lo que esté)
echo "📦 Extrayendo ZIP..."
unzip -o next-dag-classical.zip

echo "✅ ZIP extraído completamente"

echo ""
echo "🎨 Aplicando cambios de Danilo..."

# Cambiar border radius en todos los archivos
find . -name "*.css" -exec sed -i 's/rounded-lg/rounded-xl/g' {} \;
find . -name "*.tsx" -exec sed -i 's/rounded-lg/rounded-xl/g' {} \;

echo "✅ Border radius actualizado"

echo ""
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
echo "🎉 ¡PROYECTO DESPLEGADO!"
echo "========================"
echo "Para iniciar servidor: npm run dev"
echo ""
echo "Para GitHub:"
echo "git add ."
echo "git commit -m \"DAG Classical: Deploy complete project from local zip\""
echo "git push origin migracion-nextjs-profesional"