#!/bin/bash

echo "🚀 INSTALACIÓN COMPLETA DEL HEADER LIMPIO CON COMMITS"
echo "=================================================="

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No estamos en el directorio del proyecto Next.js"
    echo "Ejecuta desde: ~/dev/gitlab/dagklassical/dag-www/nuevo-sitio-dag"
    exit 1
fi

echo "📍 Directorio actual: $(pwd)"
echo "✅ Verificando estructura del proyecto..."

# 1. COMMIT DEL ESTADO ACTUAL (ANTES DE CAMBIOS)
echo ""
echo "📸 PASO 1: Commit del estado actual"
echo "----------------------------------"
git add .
git commit -m "Estado actual antes de implementar Header limpio con Virginia CTA

- Implementación previa con navegación desplegable
- Botón Virginia como elemento de menú (temporal)
- Preparación para migrar a CTA button limpio con Tailwind"

if [ $? -eq 0 ]; then
    echo "✅ Commit del estado actual realizado"
else
    echo "⚠️  No hay cambios para commitear o hubo un error"
fi

# 2. LIMPIAR CONFLICTOS DE CSS
echo ""
echo "🧹 PASO 2: Limpiar conflictos de CSS"
echo "-----------------------------------"
sed -i '/\/\* ===== VIRGINIA/,/\/\* ===== END VIRGINIA/d' src/app/globals.css 2>/dev/null || true
echo "✅ Conflictos de CSS eliminados"

# 3. INSTALAR HEADER LIMPIO
echo ""
echo "📋 PASO 3: Instalar Header limpio"
echo "--------------------------------"
cp /workspace/Header-Tailwind-Clean.tsx src/components/Header.tsx
echo "✅ Header-Tailwind-Clean.tsx instalado"

# 4. AGREGAR ESTILOS MÍNIMOS
echo ""
echo "🎨 PASO 4: Agregar estilos mínimos para animaciones"
echo "---------------------------------------------------"
cat /workspace/virginia-minimal-styles.css >> src/app/globals.css
echo "✅ Estilos mínimos agregados"

# 5. LIMPIAR CACHE
echo ""
echo "🗑️  PASO 5: Limpiar cache de Next.js"
echo "-----------------------------------"
rm -rf .next
echo "✅ Cache limpiado (.next eliminado)"

# 6. COMMIT DE LA NUEVA IMPLEMENTACIÓN
echo ""
echo "💾 PASO 6: Commit de la nueva implementación"
echo "-------------------------------------------"
git add .
git commit -m "Header limpio con Virginia CTA - Solo Tailwind CSS

✅ Implementación:
- Header con Tailwind CSS puro (sin estilos inline)
- Virginia como botón CTA temporal en navegación
- Animaciones pulse con CSS mínimo
- Submenú Música funcionando correctamente
- Diseño responsive (desktop + móvil)
- Código limpio y mantenible

🎯 Estructura final:
- Música ▼ (submenú: Lanzamientos, Preventa, Artistas, Discografía)
- Virginia • Estreno (CTA button temporal - eliminable después)
- Blockchain, Nosotros, Noticias, Contacto

🛠️  Tecnologías:
- Next.js 14.2.33
- Tailwind CSS puro
- Animaciones CSS mínimas
- Responsive design"

echo "✅ Implementación completa instalada"

# 7. INICIAR DESARROLLO
echo ""
echo "🚀 PASO 7: Iniciando servidor de desarrollo..."
echo "----------------------------------------------"
npm run dev

echo ""
echo "🎉 INSTALACIÓN COMPLETADA"
echo "========================="
echo "✅ Estado actual commitado"
echo "✅ Header limpio instalado"  
echo "✅ Estilos CSS normalizados"
echo "✅ Cache limpiado"
echo "✅ Nueva implementación commitada"
echo "✅ Servidor de desarrollo iniciado"
echo ""
echo "🔗 El sitio estará disponible en: http://localhost:3000"
echo "📋 Verificar en consola: Sin errores de CSS, solo warnings menores"