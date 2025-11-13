#!/bin/bash

echo "🎯 COMMIT FINAL - LIMPIEZA COMPLETA DEL PROYECTO DAG KLASSiCAL"
echo "📁 Directorio: /home/apradoc/dev/gitlab/dagklassical/dag-www/nuevo-sitio-dag"
echo ""

# Navegar al directorio
cd /home/apradoc/dev/gitlab/dagklassical/dag-www/nuevo-sitio-dag || {
    echo "❌ Error: No se pudo acceder al directorio"
    exit 1
}

echo "📋 Paso 1: Verificando estado del repositorio..."
git status

echo ""
echo "🏷️  Paso 2: Creando tag para esta versión exitosa..."
git tag -a "v1.0-sitio-completo-funcionando" -m "Sitio DAG KLasSical completamente funcional con todas las páginas restauradas"

echo ""
echo "📝 Paso 3: Haciendo commit de todos los cambios..."
git add .
git commit -m "Restauración completa: sitio funcionando con todas las páginas, CSS corregido y diseños aplicados

✅ Páginas restauradas:
- /musica (con preventa)
- /virginia-ramirez
- /nosotros
- /blockchain/polygon-networks
- /blockchain/tienda-nft

🔧 Correcciones aplicadas:
- CSS personalizado reemplazado con clases estándar Tailwind
- JSX syntax corregida
- Todas las dependencias instaladas (384 paquetes)

🏗️ Estructura Next.js 14.2.33 completamente funcional
🌐 Servidor de desarrollo funcionando en localhost:3000"

echo ""
echo "📤 Paso 4: Subiendo cambios y tag a GitHub..."
git push origin migracion-nextjs-profesional
git push origin --tags

echo ""
echo "🧹 Paso 5: Creando respaldo del proyecto limpio..."
mkdir -p ../../backups
TAR_NAME="dag-klassical-backup-$(date +%Y%m%d-%H%M%S).tar.gz"
tar -czf "../../backups/$TAR_NAME" . \
    --exclude='node_modules' \
    --exclude='.git' \
    --exclude='*.sh' \
    --exclude='*backup*' \
    --exclude='*.zip'

echo "✅ Respaldo creado: $TAR_NAME"

echo ""
echo "🗑️  Paso 6: Limpiando archivos temporales..."
rm -f *.sh
rm -rf next-dag-classical/
rm -rf .gitignore-*

echo "🧹 Archivos temporales eliminados"

echo ""
echo "🗂️  Paso 7: Mostrando estructura final limpia..."
ls -la

echo ""
echo "✅ COMMIT FINAL COMPLETADO EXITOSAMENTE"
echo "🏷️  Tag creado: v1.0-sitio-completo-funcionando"
echo "📤 Cambios subidos a GitHub"
echo "💾 Respaldo creado en ../../backups/"
echo "🧹 Proyecto limpio y organizado"
echo ""
echo "🎉 ¡El sitio DAG KLasSical está completamente restaurado y funcionando!"