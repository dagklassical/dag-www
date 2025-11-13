#!/bin/bash

# 🎯 SELECTOR DE OPCIONES DE NAVEGACIÓN - Virginia "Estreno"
# Autor: MiniMax Agent
# Fecha: $(date '+%Y-%m-%d %H:%M:%S')

echo "🎯 SELECTOR DE OPCIONES DE NAVEGACIÓN - Virginia 'Estreno'"
echo "============================================================="
echo ""

# Configuración
PROJECT_PATH="$HOME/dev/gitlab/dagklassical/dag-www/nuevo-sitio-dag"
HEADERS_DIR="/workspace"

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Función para mostrar mensajes
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

log_option() {
    echo -e "${PURPLE}[OPTION]${NC} $1"
}

# Verificar directorio del proyecto
log_info "Verificando directorio del proyecto..."
if [ ! -d "$PROJECT_PATH" ]; then
    log_error "❌ No se encontró el directorio del proyecto: $PROJECT_PATH"
    exit 1
fi

cd "$PROJECT_PATH"
log_success "✅ Directorio del proyecto encontrado"

echo ""
echo "📊 ANÁLISIS DEL PROBLEMA:"
echo "• Virginia Ramírez es un 'Estreno' (temporal)"
echo "• Necesita visibilidad pero no permanencia en menú"
echo "• Debe ser fácil de remover cuando pase el 'estreno'"
echo ""

echo "🚀 OPCIONES DISPONIBLES:"
echo ""
echo "1️⃣  CTA BUTTON TEMPORAL ⭐ (RECOMENDADA)"
echo "   • Virginia como botón llamativo entre menú y CTA"
echo "   • Fácil de remover (1 línea de código)"
echo "   • Visible en todas las vistas"
echo "   • Archivo: Header-Virginia-CTA-Temporal.tsx"
echo ""
echo "2️⃣  SUBMENÚ MÚSICA"
echo "   • Virginia dentro del submenú de Música"
echo "   • Más difícil de remover después"
echo "   • Archivo: Header-Corregido.tsx"
echo ""
echo "3️⃣  VERSIÓN FUTURA SIN VIRGINIA"
echo "   • Menú limpio sin Virginia"
echo "   • Para usar cuando pase el 'estreno'"
echo "   • Archivo: Header-Futuro-Sin-Virginia.tsx"
echo ""

# Solicitar selección
while true; do
    read -p "🎯 Selecciona una opción (1-3): " choice
    case $choice in
        1)
            HEADER_FILE="$HEADERS_DIR/Header-Virginia-CTA-Temporal.tsx"
            OPTION_NAME="CTA Button Temporal"
            break
            ;;
        2)
            HEADER_FILE="$HEADERS_DIR/Header-Corregido.tsx"
            OPTION_NAME="Submenú Música"
            break
            ;;
        3)
            HEADER_FILE="$HEADERS_DIR/Header-Futuro-Sin-Virginia.tsx"
            OPTION_NAME="Sin Virginia (Futuro)"
            break
            ;;
        *)
            log_error "❌ Opción inválida. Selecciona 1, 2 o 3."
            ;;
    esac
done

log_option "✅ Opción seleccionada: $OPTION_NAME"

# Verificar que el archivo existe
if [ ! -f "$HEADER_FILE" ]; then
    log_error "❌ No se encontró el archivo: $HEADER_FILE"
    exit 1
fi

# Crear backup
BACKUP_NAME="Header-backup-$(date +%Y%m%d-%H%M%S).tsx"
log_info "Creando backup del Header actual: $BACKUP_NAME"
if [ -f "src/components/Header.tsx" ]; then
    cp src/components/Header.tsx src/components/$BACKUP_NAME
    log_success "✅ Backup creado: src/components/$BACKUP_NAME"
else
    log_warning "⚠️  No se encontró Header actual para respaldar"
fi

# Instalar Header seleccionado
log_info "Instalando Header: $OPTION_NAME"
cp "$HEADER_FILE" src/components/Header.tsx
log_success "✅ Header instalado exitosamente"

# Agregar estilos CSS
CSS_FILE="$HEADERS_DIR/header-styles.css"
GLOBAL_CSS="src/app/globals.css"

if [ -f "$GLOBAL_CSS" ]; then
    log_info "Agregando estilos CSS a $GLOBAL_CSS..."
    
    # Verificar si los estilos ya están agregados
    if ! grep -q "text-burgundy" "$GLOBAL_CSS" 2>/dev/null; then
        echo "" >> "$GLOBAL_CSS"
        echo "/* ===== HEADER STYLES - VIRGINIA NAVIGATION ===== */" >> "$GLOBAL_CSS"
        cat "$CSS_FILE" >> "$GLOBAL_CSS"
        echo "/* ===== END HEADER STYLES ===== */" >> "$GLOBAL_CSS"
        log_success "✅ Estilos CSS agregados"
    else
        log_warning "⚠️  Los estilos ya están presentes"
    fi
else
    log_warning "⚠️  No se encontró $GLOBAL_CSS"
fi

# Verificar rutas necesarias
echo ""
log_info "Verificando rutas necesarias..."

ROUTES=(
    "src/app/artistas/page.tsx"
    "src/app/artistas/virginia-ramirez/page.tsx"
    "src/app/musica/preventa/page.tsx"
)

ALL_ROUTES_EXIST=true
for route in "${ROUTES[@]}"; do
    if [ ! -f "$route" ]; then
        log_warning "⚠️  $route no encontrado"
        ALL_ROUTES_EXIST=false
    fi
done

if [ "$ALL_ROUTES_EXIST" = true ]; then
    log_success "✅ Todas las rutas necesarias existen"
else
    log_warning "⚠️  Algunas rutas faltan - verifica la instalación"
fi

# Mostrar resumen
echo ""
echo "🎉 INSTALACIÓN COMPLETADA!"
echo "========================="
echo ""
echo "📋 RESUMEN:"
echo "  • Opción seleccionada: $OPTION_NAME"
echo "  • Header instalado: src/components/Header.tsx"
if [ -f "src/components/$BACKUP_NAME" ]; then
    echo "  • Backup creado: src/components/$BACKUP_NAME"
fi
echo ""

# Mostrar estructura según la opción
case $choice in
    1)
        echo "🎯 ESTRUCTURA DEL MENÚ (CTA Button):"
        echo "  • Inicio"
        echo "  • Música ▼"
        echo "    ├── Lanzamientos"
        echo "    ├── Preventa"
        echo "    ├── Artistas"
        echo "    └── Discografía"
        echo ""
        echo "  • [🔴 Virginia • Estreno] ⬅️ CTA Button temporal"
        echo "  • Blockchain"
        echo "  • Nosotros"
        echo "  • Noticias"
        echo "  • Contacto"
        ;;
    2)
        echo "🎯 ESTRUCTURA DEL MENÚ (Submenú):"
        echo "  • Inicio"
        echo "  • Música ▼"
        echo "    ├── Preventa NFTs"
        echo "    ├── Artistas"
        echo "    └── Virginia Ramírez ⬅️ Temporal"
        echo "  • Blockchain"
        echo "  • Nosotros"
        echo "  • Noticias"
        echo "  • Contacto"
        ;;
    3)
        echo "🎯 ESTRUCTURA DEL MENÚ (Sin Virginia):"
        echo "  • Inicio"
        echo "  • Música ▼"
        echo "    ├── Lanzamientos"
        echo "    ├── Preventa"
        echo "    ├── Artistas"
        echo "    └── Discografía"
        echo "  • Blockchain"
        echo "  • Nosotros"
        echo "  • Noticias"
        echo "  • Contacto"
        ;;
esac

echo ""
echo "🧪 PRÓXIMOS PASOS:"
echo "  1. npm run dev    (probar navegación)"
echo "  2. npm run build  (build de producción)"
echo "  3. git add . && git commit -m 'feat: Virginia navigation - $OPTION_NAME' && git push"
echo ""

if [ "$choice" = "1" ]; then
    echo "🔄 PARA REMOVER VIRGINIA EN EL FUTURO:"
    echo "  cp /workspace/Header-Futuro-Sin-Virginia.tsx src/components/Header.tsx"
    echo ""
fi

log_success "🚀 ¡Navegación estratégica implementada!"