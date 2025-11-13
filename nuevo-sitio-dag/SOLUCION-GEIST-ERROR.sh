#!/bin/bash

# SOLUCIÓN RÁPIDA - Eliminar archivos de backup conflictivos
# DAG Klassical - Build Error Geist
# Fecha: 2025-11-13 11:04:57

echo "🧹 ELIMINANDO ARCHIVOS CONFLICTIVOS"
echo "==================================="

# Verificar directorio
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json"
    exit 1
fi

echo "📍 Directorio: $(pwd)"
echo ""

# Paso 1: Eliminar directorio src-bak si existe
echo "🗑️  ELIMINANDO DIRECTORIO src-bak..."
if [ -d "src-bak" ]; then
    rm -rf src-bak
    echo "✅ src-bak eliminado"
else
    echo "✅ src-bak no existe"
fi
echo ""

# Paso 2: Eliminar otros directorios de backup
echo "🧹 LIMPIANDO OTROS BACKUPS..."
for dir in backup backups .bak .backup; do
    if [ -d "$dir" ]; then
        rm -rf "$dir"
        echo "✅ $dir eliminado"
    fi
done
echo ""

# Paso 3: Verificar que el archivo preventa está correcto
echo "🔍 VERIFICANDO ARCHIVO PREVENTA..."
if [ -f "src/app/musica/preventa/page.tsx" ]; then
    LINES=$(wc -l < src/app/musica/preventa/page.tsx)
    echo "✅ Archivo preventa existe: $LINES líneas"
    
    # Verificar que no hay referencias a Geist
    if grep -q "Geist" src/app/musica/preventa/page.tsx; then
        echo "❌ El archivo preventa tiene referencias a Geist (inconsistente)"
    else
        echo "✅ Archivo preventa limpio"
    fi
else
    echo "❌ Archivo preventa no encontrado"
fi
echo ""

# Paso 4: Build final
echo "🏗️  BUILD FINAL..."
npm run build

BUILD_RESULT=$?

echo ""
if [ $BUILD_RESULT -eq 0 ]; then
    echo "🎉 ¡BUILD EXITOSO!"
    echo "✅ Error JSX: RESUELTO"
    echo "✅ Error Geist: RESUELTO"
    echo ""
    echo "🚀 ESTADO: LISTO PARA VIRGINIA"
    echo "🎯 Próximo paso: Implementar Virginia en submenú"
else
    echo "❌ BUILD AÚN FALLA"
    echo "🔍 Revisar error específico arriba"
fi

echo ""
echo "📝 Log: $(date '+%Y-%m-%d %H:%M:%S')"