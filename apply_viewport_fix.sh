#!/bin/bash
# Script para aplicar viewport fix en DAG Classical
# Ejecutar desde ~/dev/gitlab/dagklassical/dag-www/

echo "🚀 APLICANDO VIEWPORT FIX - DAG Classical"
echo "📍 Ubicación: $(pwd)"
echo ""

# 1. Verificar estado actual
echo "📊 Verificando estado actual..."
git status

echo ""
echo "📋 Últimos commits:"
git log --oneline -3

# 2. Verificar si el fix ya está aplicado
echo ""
echo "🔍 Verificando si el viewport está separado..."

if grep -q "export const viewport" src/app/layout.tsx; then
    echo "✅ ¡El fix del viewport ya está aplicado!"
    echo ""
    echo "📋 Commit y push automático:"
    
    # Hacer commit si hay cambios
    if [ -n "$(git status --porcelain)" ]; then
        git add .
        git commit -m "🔧 Fix: Separar viewport de metadata en layout.tsx - Next.js 13+ formato correcto"
        echo "✅ Commit realizado"
    else
        echo "ℹ️  No hay cambios nuevos para commitear"
    fi
    
    echo ""
    echo "🌐 Haciendo push al repositorio remoto..."
    git push origin main
    
    if [ $? -eq 0 ]; then
        echo "✅ ¡Push exitoso!"
        echo ""
        echo "🎉 ¡FIX COMPLETADO!"
        echo "   - Viewport corregido para Next.js 13+"
        echo "   - Cambios subidos al repositorio remoto"
        echo "   - Listo para próxima sesión de trabajo"
    else
        echo "❌ Error en el push - verificar credenciales"
    fi
    
else
    echo "❌ El fix del viewport NO está aplicado"
    echo ""
    echo "🔧 Aplicando fix manualmente..."
    
    # Crear backup del archivo original
    cp src/app/layout.tsx src/app/layout.tsx.backup
    
    # Aplicar el fix usando sed
    echo "📝 Modificando layout.tsx..."
    
    # Remover línea del viewport del metadata
    sed -i '/^\s*viewport:/d' src/app/layout.tsx
    
    # Agregar viewport separado al final del archivo (antes del export default)
    sed -i '/export default function RootLayout/i\
\
// Viewport separado siguiendo Next.js 13+ formato correcto\
export const viewport = {\
  width: "device-width",\
  initialScale: 1,\
  maximumScale: 5,\
  userScalable: true,\
}' src/app/layout.tsx
    
    echo "✅ Fix aplicado"
    
    # Verificar que el fix se aplicó correctamente
    if grep -q "export const viewport" src/app/layout.tsx; then
        echo "✅ Verificación exitosa - viewport separado"
        
        # Hacer commit y push
        echo ""
        echo "📋 Haciendo commit del fix..."
        git add .
        git commit -m "🔧 Fix: Separar viewport de metadata en layout.tsx - Next.js 13+ formato correcto"
        
        echo "🌐 Haciendo push al repositorio remoto..."
        git push origin main
        
        if [ $? -eq 0 ]; then
            echo "✅ ¡Push exitoso!"
            echo ""
            echo "🎉 ¡FIX COMPLETADO!"
            echo "   - Viewport corregido para Next.js 13+"
            echo "   - Cambios subidos al repositorio remoto"
        else
            echo "❌ Error en el push - verificar credenciales"
        fi
    else
        echo "❌ Error aplicando el fix - revisa manualmente"
        echo "💡 Backup disponible: src/app/layout.tsx.backup"
    fi
fi

echo ""
echo "🧪 Verificando build final..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ ¡Build exitoso sin errores!"
else
    echo "⚠️ Build falló - puede necesitar npm install"
fi

echo ""
echo "📊 Estado final:"
git status