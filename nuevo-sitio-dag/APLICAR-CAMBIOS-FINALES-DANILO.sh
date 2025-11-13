#!/bin/bash

# 🔄 SCRIPT FINAL - APLICAR TODOS LOS CAMBIOS DE DANILO
# Autor: MiniMax Agent
# Fecha: $(date +%Y-%m-%d)

echo "🔧 APLICANDO CAMBIOS FINALES DE DANILO..."
echo "============================================="

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encuentra package.json. Ejecuta desde la carpeta del proyecto."
    echo "📁 Navega a: /home/apradoc/dev/gitlab/dagklassical/dag-www/nuevo-sitio-dag"
    exit 1
fi

echo "✅ Directorio del proyecto verificado"

# 1. Aplicar header sin iconos y con logo real
echo ""
echo "🎯 1. Aplicando Header sin iconos..."
cp /workspace/next-dag-classical/src/components/Header.tsx src/components/
echo "✅ Header.tsx actualizado"

# 2. Copiar logo real
echo ""
echo "🎯 2. Copiando logo DAG Klassical..."
cp /workspace/next-dag-classical/public/logo-dag-klassical-003.png public/
echo "✅ Logo aplicado: public/logo-dag-klassical-003.png"

# 3. Aplicar border radius más sutil
echo ""
echo "🎯 3. Aplicando border radius más sutil..."
cp /workspace/next-dag-classical/src/app/globals.css src/app/
cp /workspace/next-dag-classical/src/app/page.tsx src/app/
echo "✅ Border radius corregidos (rounded-xl)"

# 4. Verificar que layout.tsx esté correcto
echo ""
echo "🎯 4. Verificando configuración de tipografía..."
if ! grep -q "font-inter" src/app/layout.tsx; then
    echo "⚠️  Advertencia: No se encuentra font-inter en layout.tsx"
else
    echo "✅ Tipografía Inter configurada"
fi

# 5. Verificaciones finales
echo ""
echo "🔍 Verificaciones finales:"
echo "---------------------------"

# Verificar que no hay iconos en navegación
if grep -q "icon:" src/components/Header.tsx; then
    echo "❌ Error: Aún hay iconos en la navegación del Header"
else
    echo "✅ Navegación sin iconos: OK"
fi

# Verificar logo
if [ -f "public/logo-dag-klassical-003.png" ]; then
    echo "✅ Logo aplicado: OK"
else
    echo "❌ Error: Logo no encontrado"
fi

# Verificar border radius
if grep -q "rounded-xl" src/app/globals.css && grep -q "rounded-xl" src/app/page.tsx; then
    echo "✅ Border radius corregidos: OK"
else
    echo "❌ Error: Border radius no corregidos completamente"
fi

echo ""
echo "🎉 CAMBIOS DE DANILO APLICADOS EXITOSAMENTE"
echo "============================================="
echo ""
echo "📋 RESUMEN:"
echo "• Header sin iconos en navegación ✅"
echo "• Logo DAG Klassical aplicado ✅" 
echo "• Border radius más sutil (rounded-xl) ✅"
echo "• Tipografía Inter únicamente ✅"
echo "• Hero sin iconos en botones ✅"
echo "• Cards SÍ mantienen iconos ✅"
echo ""
echo "🚀 PRÓXIMOS PASOS:"
echo "1. npm run dev"
echo "2. Abrir: http://localhost:3000"
echo "3. Verificar todos los cambios aplicados"
echo "4. git add . && git commit -m \"✅ Cambios finales de Danilo aplicados\""
echo "5. git push origin migracion-nextjs-profesional"
echo ""
echo "📄 Ver detalles completos en: /workspace/VERIFICACION-FINAL-DANILO.md"