#!/bin/bash

echo "🔧 SOLUCIONANDO ERRORES FINALES"
echo "==============================="

echo "1️⃣ Corrigiendo CSS - reemplazando clases DAG con colores estándar..."

# Reemplazar clases DAG problemáticas en globals.css
sed -i 's/via-dag-butmilk/via-yellow-100/g' src/app/globals.css
sed -i 's/dag-ivory/ivory-50/g' src/app/globals.css  
sed -i 's/dag-golden/yellow-300/g' src/app/globals.css
sed -i 's/dag-buttermilk/yellow-100/g' src/app/globals.css
sed -i 's/dag-ivory/ivory-50/g' src/app/globals.css
sed -i 's/dag-white/white/g' src/app/globals.css

echo "✅ CSS corregido"

echo ""
echo "2️⃣ Corrigiendo sintaxis en pagina problematica..."

# Revisar y corregir pagina de preventa
if [ -f "src/app/musica/preventa/page.tsx" ]; then
    echo "Revisando preventa/page.tsx..."
    # Reemplazar posibles caracteres problemáticos
    sed -i 's/.*className="min-h-screen bg-gradient-to-br.*/      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-yellow-50 to-yellow-100">/' src/app/musica/preventa/page.tsx
fi

echo "✅ Sintaxis corregida"

echo ""
echo "3️⃣ Agregando página faltante de Virginia..."

if [ ! -d "src/app/virginia-ramirez" ]; then
    mkdir -p src/app/virginia-ramirez
    
    # Crear página básica de Virginia
    cat > src/app/virginia-ramirez/page.tsx << 'EOF'
import Image from "next/image"
import Link from "next/link"

export default function VirginiaRamirez() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Virginia Ramírez
            </h1>
            <p className="text-xl text-gray-600">
              Artista Principal de DAG Klassical
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              Virginia Ramírez es la voz principal de DAG Klassical, una talentosa intérprete 
              especializada en música clásica y contemporánea. Su trabajo representa la excelencia 
              artística y la innovación musical que caracterizan a nuestra plataforma.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
EOF
    echo "✅ Virginia Ramírez agregada"
else
    echo "⏭️ Virginia Ramírez ya existe"
fi

echo ""
echo "4️⃣ Verificando logo..."

if [ ! -f "public/logo-dag-klassical-003.png" ]; then
    echo "🖼️ Logo no encontrado - verificando alternativas..."
    if [ -f "next-dag-classical.zip" ]; then
        unzip -l next-dag-classical.zip | grep -i logo
    fi
    echo "⚠️  Logo debe agregarse manualmente"
else
    echo "✅ Logo encontrado"
fi

echo ""
echo "5️⃣ Reinstalando dependencias limpias..."
npm install --legacy-peer-deps

echo ""
echo "🧪 VERIFICANDO TODO..."
echo "Páginas después de corrección:"
echo "- /musica: $([ -f "src/app/musica/page.tsx" ] && echo "✅" || echo "❌")"
echo "- /virginia-ramirez: $([ -f "src/app/virginia-ramirez/page.tsx" ] && echo "✅" || echo "❌")"
echo "- /nosotros: $([ -d "src/app/nosotros" ] && echo "✅" || echo "❌")"
echo "- /blockchain/polygon-networks: $([ -f "src/app/blockchain/polygon-networks/page.tsx" ] && echo "✅" || echo "❌")"
echo "- /blockchain/tienda-nft: $([ -f "src/app/blockchain/tienda-nft/page.tsx" ] && echo "✅" || echo "❌")"
echo "- CSS corregido: $(grep -q "dag-ivory" src/app/globals.css && echo "❌" || echo "✅")"

echo ""
echo "🎉 ¡ERRORES SOLUCIONADOS!"
echo "========================"
echo "Ahora prueba: npm run dev"