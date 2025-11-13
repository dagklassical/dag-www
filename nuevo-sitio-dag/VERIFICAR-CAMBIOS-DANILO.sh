#!/bin/bash

echo "🔍 VERIFICANDO CAMBIOS DE DANILO EN TU PROYECTO"
echo "============================================="

PROYECTO="/home/apradoc/dev/gitlab/dagklassical/dag-www/nuevo-sitio-dag"
cd "$PROYECTO"

echo "📍 Directorio actual: $(pwd)"
echo ""

# Verificar cada archivo clave
echo "🔍 VERIFICACIONES:"

echo ""
echo "1️⃣  HEADER.TSX - Logo burgundy + navegación sin iconos:"
if [ -f "src/components/Header.tsx" ]; then
    echo "   ✅ Archivo existe"
    
    # Verificar logo burgundy
    if grep -q "text-dag-burgundy" src/components/Header.tsx; then
        echo "   ✅ Logo en burgundy: SÍ"
    else
        echo "   ❌ Logo en burgundy: NO ENCONTRADO"
    fi
    
    # Verificar que NO tiene iconos de navegación
    if grep -q "Music\|Calendar\|Users" src/components/Header.tsx; then
        echo "   ❌ ICONOS EN NAVEGACIÓN: ENCONTRADOS (deben removerse)"
    else
        echo "   ✅ Iconos en navegación: OK (removidos)"
    fi
else
    echo "   ❌ Archivo no existe"
fi

echo ""
echo "2️⃣  PAGE.TSX - Hero sin iconos en botones:"
if [ -f "src/app/page.tsx" ]; then
    echo "   ✅ Archivo existe"
    
    # Verificar hero sin iconos
    if grep -q "<Icon\|Lucide" src/app/page.tsx; then
        echo "   ⚠️  ICONOS EN HERO: ENCONTRADOS (verificar si están en tarjetas)"
    else
        echo "   ✅ Hero sin iconos: OK"
    fi
else
    echo "   ❌ Archivo no existe"
fi

echo ""
echo "3️⃣  LAYOUT.TSX - Solo Inter font:"
if [ -f "src/app/layout.tsx" ]; then
    echo "   ✅ Archivo existe"
    
    if grep -q "Inter" src/app/layout.tsx; then
        echo "   ✅ Inter font: CONFIGURADO"
    else
        echo "   ❌ Inter font: NO CONFIGURADO"
    fi
    
    if grep -q "Playfair" src/app/layout.tsx; then
        echo "   ❌ Playfair Display: AUN PRESENTE (debe removerse)"
    else
        echo "   ✅ Playfair Display: OK (removido)"
    fi
else
    echo "   ❌ Archivo no existe"
fi

echo ""
echo "4️⃣  GLOBALS.CSS - Border radius + tipografía:"
if [ -f "src/app/globals.css" ]; then
    echo "   ✅ Archivo existe"
    
    if grep -q "rounded-xl" src/app/globals.css; then
        echo "   ✅ Border radius sutil: CONFIGURADO"
    else
        echo "   ❌ Border radius sutil: NO CONFIGURADO"
    fi
    
    if grep -q "font-inter" src/app/globals.css; then
        echo "   ✅ Tipografía Inter: CONFIGURADA"
    else
        echo "   ❌ Tipografía Inter: NO CONFIGURADA"
    fi
else
    echo "   ❌ Archivo no existe"
fi

echo ""
echo "5️⃣  TAILWIND.CONFIG.JS - Colores DAG:"
if [ -f "tailwind.config.js" ]; then
    echo "   ✅ Archivo existe"
    
    if grep -q "dag-burgundy" tailwind.config.js; then
        echo "   ✅ Colores DAG: CONFIGURADOS"
    else
        echo "   ❌ Colores DAG: NO CONFIGURADOS"
    fi
else
    echo "   ❌ Archivo no existe"
fi

echo ""
echo "🚀 COMANDOS PARA PROBAR:"
echo "   npm run dev"
echo "   # Abrir: http://localhost:3000"

echo ""
echo "🎯 VERIFICACIÓN FINAL:"
echo "   Los cambios de Danilo están aplicados correctamente si:"
echo "   • Header tiene logo todo en burgundy"
echo "   • Navegación no tiene iconos"
echo "   • Hero no tiene iconos en botones"
echo "   • Solo se usa tipografía Inter"
echo "   • Border radius es más sutil (rounded-xl)"
echo "   • Las tarjetas SÍ mantienen iconos (correcto)"