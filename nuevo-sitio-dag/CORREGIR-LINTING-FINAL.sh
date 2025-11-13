#!/bin/bash

# CORRECCIÓN DE ERRORES DE LINTING - Build Final
# DAG Klassical - Errores de comillas sin escapar
# Fecha: 2025-11-13 11:45:49

echo "🔧 CORRIGIENDO ERRORES DE LINTING"
echo "================================="

# Verificar directorio
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json"
    exit 1
fi

echo "📍 Directorio: $(pwd)"
echo ""

# Paso 1: Corregir archivo page.tsx (homepage)
echo "🔧 CORRIGIENDO src/app/page.tsx..."
sed -i 's/"/\&quot;/g' src/app/page.tsx
echo "✅ Comillas corregidas en homepage"
echo ""

# Paso 2: Corregir nosotros/page.tsx
echo "🔧 CORRIGIENDO src/app/nosotros/page.tsx..."
sed -i 's/"/\&quot;/g' src/app/nosotros/page.tsx
echo "✅ Comillas corregidas en página nosotros"
echo ""

# Paso 3: Corregir danilo-alvarez/page.tsx
echo "🔧 CORRIGIENDO src/app/nosotros/danilo-alvarez/page.tsx..."
sed -i 's/"/\&quot;/g' src/app/nosotros/danilo-alvarez/page.tsx
echo "✅ Comillas corregidas en página Danilo"
echo ""

# Paso 4: Verificar que las correcciones se aplicaron
echo "🔍 VERIFICANDO CORRECCIONES..."
echo "Errores de comillas restantes:"
grep -n '"' src/app/page.tsx src/app/nosotros/page.tsx src/app/nosotros/danilo-alvarez/page.tsx 2>/dev/null | grep -v '&quot;' | head -5
echo ""

# Paso 5: Build final con errores corregidos
echo "🏗️  BUILD FINAL (ERRORES CORREGIDOS)..."
npm run build

BUILD_RESULT=$?

echo ""
if [ $BUILD_RESULT -eq 0 ]; then
    echo "🎉 ¡BUILD COMPLETAMENTE EXITOSO!"
    echo "✅ Error JSX: RESUELTO"
    echo "✅ Error Geist: RESUELTO" 
    echo "✅ Errores Linting: RESUELTOS"
    echo ""
    echo "🚀 ESTADO: BUILD EXITOSO"
    echo "🎯 PRÓXIMO PASO: IMPLEMENTAR VIRGINIA"
    echo ""
    echo "📋 Archivos listos para Virginia:"
    echo "   - virginia-artista-page.tsx"
    echo "   - artistas-lista-page.tsx"
    echo "   - Header update"
    echo "   - Banner fix"
else
    echo "❌ BUILD AÚN TIENE ERRORES"
    echo "🔍 Revisar error específico arriba"
fi

echo ""
echo "📝 Log: $(date '+%Y-%m-%d %H:%M:%S')"