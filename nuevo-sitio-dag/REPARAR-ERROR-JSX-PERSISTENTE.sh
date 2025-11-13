#!/bin/bash

# Comando específico para resolver error JSX persistente
# DAG Klassical - Virginia Ramírez Implementation
# Fecha: 2025-11-13 09:17:55

echo "🛠️  SOLUCIONANDO ERROR JSX PERSISTENTE"
echo "========================================"

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json. Ejecuta desde el directorio raíz del proyecto Next.js"
    exit 1
fi

echo "📍 Directorio actual: $(pwd)"
echo "📦 Node version: $(node --version)"
echo "📦 npm version: $(npm --version)"
echo ""

# Paso 1: Limpieza completa de caches
echo "🧹 LIMPIANDO CACHES COMPLETOS..."
rm -rf .next
rm -rf node_modules
rm -rf package-lock.json
rm -rf .tsbuildinfo
rm -rf .vercel
npm cache clean --force

echo "✅ Caches limpiados"
echo ""

# Paso 2: Verificar integridad del archivo problemático
echo "🔍 VERIFICANDO ARCHIVO PROBLEMÁTICO..."
if [ -f "src/app/musica/preventa/page.tsx" ]; then
    echo "📄 Archivo encontrado: src/app/musica/preventa/page.tsx"
    
    # Verificar encoding
    ENCODING=$(file src/app/musica/preventa/page.tsx)
    echo "🔍 Encoding: $ENCODING"
    
    # Crear backup de seguridad
    cp src/app/musica/preventa/page.tsx src/app/musica/preventa/page.tsx.backup-$(date +%Y%m%d_%H%M%S)
    echo "💾 Backup creado"
else
    echo "❌ Archivo no encontrado"
fi
echo ""

# Paso 3: Reinstalación completa
echo "📥 REINSTALANDO DEPENDENCIAS..."
npm install --force

echo "✅ Dependencias reinstaladas"
echo ""

# Paso 4: Build de prueba
echo "🏗️  PROBANDO BUILD..."
npm run build

BUILD_RESULT=$?
echo ""

if [ $BUILD_RESULT -eq 0 ]; then
    echo "🎉 ¡ÉXITO! Build completado sin errores"
    echo ""
    echo "✅ Estado: LISTO PARA CONTINUAR"
    echo "🎯 Próximo paso: Implementar Virginia en submenú"
    echo ""
    echo "📋 Archivos preparados:"
    echo "   - virginia-artista-page.tsx"
    echo "   - artistas-lista-page.tsx"
    echo "   - REPARACION-COMPLETA-TODO.md"
else
    echo "❌ BUILD FALLÓ"
    echo "🔍 Revisa el error específico arriba"
    echo "💡 Posibles soluciones:"
    echo "   - Verificar TypeScript config"
    echo "   - Revisar dependencias"
    echo "   - Contactar soporte técnico"
fi

echo ""
echo "📝 Log generado en: $(date '+%Y-%m-%d %H:%M:%S')"