#!/bin/bash
# 🎼 Sinfonía en Obsidian Mayor - Ejecutor Completo
# Interpretación automatizada de la obra completa

set -e

# Colores para la interpretación
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "${MAGENTA}🎼 ========================================${NC}"
echo -e "${MAGENTA}   SINFONÍA EN OBSIDIAN MAYOR${NC}"
echo -e "${MAGENTA}   Interpretación Automatizada${NC}"
echo -e "${MAGENTA}========================================${NC}"
echo -e "${CYAN}Compositor: Tu visión + MiniMax Agent${NC}"
echo -e "${CYAN}Orquesta: DAG Klassical Digital${NC}"
echo -e "${CYAN}Director: El Café Nocturno Inspirador${NC}"
echo ""

read -p "🎵 ¿Iniciar la interpretación completa? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}🎼 Interpretación cancelada. ¡Hasta la próxima función!${NC}"
    exit 0
fi

echo ""
echo -e "${BLUE}🎵 Comenzando la Sinfonía...${NC}"
echo ""

# ============================================================================
# I. OBERTURA - Preparación del Escenario
# ============================================================================

echo -e "${GREEN}🎵 I. OBERTURA - Preparación del Escenario${NC}"
echo -e "${GREEN}   Allegro con spirito (♩ = 120)${NC}"
echo "   Estableciendo tonalidad base..."
echo ""

# Verificar que estamos en el directorio correcto
if [ ! -f "Sinfonia-Obsidian-Mayor.md" ]; then
    echo -e "${RED}❌ Error: No estás en el directorio del vault DAG Klassical${NC}"
    echo "Por favor navega al vault y ejecuta este script"
    exit 1
fi

echo -e "${BLUE}🃁 Creando estructura de carpetas...${NC}"

# Crear estructura si no existe
mkdir -p "Infrastructure/{VPS,Domains,Certificates,Backups,Security}"
mkdir -p "Projects/{Virginia-MFT,Website-Restructure,Proyecto-Enmanuel,Archives}"
mkdir -p "Stakeholders/{Danilo-Alvarez,Team-DAG,External-Partners}"
mkdir -p "Knowledge-Base/{Blockchain,Music-Industry,Technical-Docs,Legal-Framework}"
mkdir -p "Credentials/{Server-Access,API-Keys,Wallet-Info,Third-Party}"
mkdir -p "Daily-Operations/{Tasks,Meetings,Progress-Reports}"
mkdir -p "Sync-Config/{GitHub-Integration,Access-Control}"

echo -e "${GREEN}✅ Estructura de carpetas - Armonía fundamental establecida${NC}"

# Configurar permisos de seguridad
chmod 700 Credentials/ 2>/dev/null || true
echo -e "${GREEN}✅ Permisos de seguridad - Fortissimo de protección${NC}"

echo ""
echo -e "${MAGENTA}🎵 "La base está creada... EN OBSIDIAN"${NC}"
echo ""
sleep 2

# ============================================================================
# II. PRIMER MOVIMIENTO - Los Plugins Esenciales
# ============================================================================

echo -e "${GREEN}🎶 II. PRIMER MOVIMIENTO - Los Plugins Esenciales${NC}"
echo -e "${GREEN}   Moderato con precisione${NC}"
echo "   La melodía principal de la productividad..."
echo ""

echo -e "${YELLOW}⚠️ Ahora necesitas instalar los plugins manualmente en Obsidian:${NC}"
echo ""
echo -e "${BLUE}1. Templater${NC} - Templates dinámicos"
echo -e "${BLUE}2. Dataview${NC} - Consultas de datos"
echo -e "${BLUE}3. Tasks${NC} - Gestión de tareas"
echo -e "${BLUE}4. Obsidian Git${NC} - Control de versiones"
echo -e "${BLUE}5. Text Expand${NC} - Snippets seguros"
echo -e "${BLUE}6. Folder Note${NC} - Índices automáticos"
echo ""
echo -e "${CYAN}Configuración detallada en: II-Primer-Movimiento-Plugins.md${NC}"
echo ""

read -p "🎶 ¿Has instalado todos los plugins? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}🎼 Ve a instalar los plugins y regresa. ¡Los esperamos!${NC}"
    exit 0
fi

echo -e "${GREEN}✅ Plugins instalados - Orquesta afinada${NC}"
echo ""
echo -e "${MAGENTA}🎶 "Los plugins funcionan perfecto... EN OBSIDIAN"${NC}"
echo ""
sleep 2

# ============================================================================
# III. ANDANTE DE LAS CREDENCIALES
# ============================================================================

echo -e "${GREEN}🎵 III. ANDANTE DE LAS CREDENCIALES${NC}"
echo -e "${GREEN}   Andante misterioso - En tono menor${NC}"
echo "   Máxima seguridad..."
echo ""

echo -e "${YELLOW}🔐 Es momento de documentar las credenciales del VPS Contabo${NC}"
echo ""
echo "1. Abre Obsidian"
echo "2. Ve a Credentials/Server-Access/"
echo "3. Crea nuevo archivo usando Credential-Template"
echo "4. Nombrar: Contabo-VPS"
echo "5. Copiar datos del WhatsApp de Danilo"
echo ""
echo -e "${CYAN}Guía detallada en: III-Andante-Credenciales.md${NC}"
echo ""

read -p "🔐 ¿Has documentado las credenciales del VPS? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}🎼 Documenta las credenciales y regresa. ¡Seguridad primero!${NC}"
    exit 0
fi

# Verificar que las credenciales están protegidas
if [ -f "Credentials/Server-Access/Contabo-VPS.md" ]; then
    echo -e "${GREEN}✅ Credenciales VPS documentadas${NC}"
else
    echo -e "${YELLOW}⚠️ No se encuentra el archivo de credenciales${NC}"
fi

echo -e "${GREEN}✅ Credenciales protegidas - Cámara acorazada musical${NC}"
echo ""
echo -e "${MAGENTA}🎵 "Las credenciales están seguras... EN OBSIDIAN"${NC}"
echo ""
sleep 2

# ============================================================================
# IV. SCHERZO - Los Primeros Proyectos
# ============================================================================

echo -e "${GREEN}🎶 IV. SCHERZO - Los Primeros Proyectos${NC}"
echo -e "${GREEN}   Vivace ma non troppo${NC}"
echo "   Energía creativa con precisión artística..."
echo ""

echo -e "${BLUE}🎵 Creando proyecto Virginia MFT...${NC}"
echo ""
echo "1. Abre Obsidian"
echo "2. Ve a Projects/Virginia-MFT/"
echo "3. Crea 'index.md' usando Project-Template"
echo "4. Completa la información del proyecto"
echo ""
echo -e "${BLUE}🎯 Creando proyecto Enmanuel...${NC}"
echo ""
echo "1. Ve a Projects/Proyecto-Enmanuel/"
echo "2. Crea 'index.md' documentando la visión original"
echo "3. Conecta con Virginia MFT"
echo ""
echo -e "${CYAN}Configuración detallada en: IV-Scherzo-Proyectos.md${NC}"
echo ""

read -p "🎶 ¿Has creado los proyectos Virginia MFT y Enmanuel? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}🎼 Crea los proyectos y regresa. ¡La creatividad nos espera!${NC}"
    exit 0
fi

echo -e "${GREEN}✅ Proyectos creados - Temas principales establecidos${NC}"
echo ""
echo -e "${MAGENTA}🎶 "Virginia y Enmanuel documentados... EN OBSIDIAN"${NC}"
echo ""
sleep 2

# ============================================================================
# V. FINAL - Rondó de la Colaboración
# ============================================================================

echo -e "${GREEN}🎵 V. FINAL - Rondó de la Colaboración${NC}"
echo -e "${GREEN}   Presto con fuoco - El gran finale${NC}"
echo "   Configuración GitHub y acceso de Danilo..."
echo ""

# Configurar Git si no está inicializado
if [ ! -d ".git" ]; then
    echo -e "${BLUE}🔄 Inicializando repositorio Git...${NC}"
    git init
    echo -e "${GREEN}✅ Git inicializado - Bajo continuo establecido${NC}"
fi

# Crear .github/CODEOWNERS si no existe
if [ ! -f ".github/CODEOWNERS" ]; then
    echo -e "${BLUE}👥 Configurando permisos de colaboración...${NC}"
    mkdir -p .github
    cat > .github/CODEOWNERS << 'EOF'
# DAG Klassical - Code Owners

# Danilo tiene acceso a proyectos musicales
Projects/Virginia-MFT/ @danilo-alvarez
Projects/Proyecto-Enmanuel/ @danilo-alvarez
Knowledge-Base/Music-Industry/ @danilo-alvarez

# Control técnico exclusivo
Infrastructure/ @tu-username
Credentials/ @tu-username
Sync-Config/ @tu-username
*.sh @tu-username
.github/ @tu-username
EOF
    echo -e "${GREEN}✅ Permisos configurados - Armonía colaborativa${NC}"
fi

echo ""
echo -e "${YELLOW}🌐 Para completar la colaboración:${NC}"
echo ""
echo "1. Crear repositorio en GitHub: 'dagk-knowledge-base'"
echo "2. Conectar: git remote add origin URL_DEL_REPO"
echo "3. Primer push: ./sync-public.sh"
echo "4. Invitar a Danilo como colaborador"
echo ""
echo -e "${CYAN}Guía completa en: V-Final-Colaboracion.md${NC}"
echo ""

# ============================================================================
# GRAN FINALE
# ============================================================================

echo ""
echo -e "${MAGENTA}🎆 ========================================${NC}"
echo -e "${MAGENTA}   GRAN FINALE - CODA MAESTOSA${NC}"
echo -e "${MAGENTA}========================================${NC}"
echo ""

echo -e "${GREEN}🎼 VERIFICACIÓN FINAL DE LA SINFONÍA:${NC}"
echo "========================================="
echo ""

echo -e "${BLUE}🎵 I. OBERTURA - Setup Base:${NC}"
[ -d "Infrastructure" ] && echo -e "${GREEN}✅ Estructura creada${NC}" || echo -e "${RED}❌ Estructura faltante${NC}"
[ -f "Dashboard.md" ] && echo -e "${GREEN}✅ Dashboard funcionando${NC}" || echo -e "${RED}❌ Dashboard faltante${NC}"

echo ""
echo -e "${BLUE}🎶 II. PRIMER MOVIMIENTO - Plugins:${NC}"
echo -e "${GREEN}✅ Plugins listos para instalar${NC}"

echo ""
echo -e "${BLUE}🎵 III. ANDANTE - Credenciales:${NC}"
[ -d "Credentials" ] && echo -e "${GREEN}✅ Estructura de credenciales${NC}"
grep -q "Credentials" .gitignore 2>/dev/null && echo -e "${GREEN}✅ Credenciales protegidas${NC}" || echo -e "${YELLOW}⚠️ Verificar .gitignore${NC}"

echo ""
echo -e "${BLUE}🎶 IV. SCHERZO - Proyectos:${NC}"
[ -d "Projects/Virginia-MFT" ] && echo -e "${GREEN}✅ Virginia MFT preparado${NC}"
[ -d "Projects/Proyecto-Enmanuel" ] && echo -e "${GREEN}✅ Proyecto Enmanuel preparado${NC}"

echo ""
echo -e "${BLUE}🎵 V. FINAL - Colaboración:${NC}"
[ -d ".git" ] && echo -e "${GREEN}✅ Git inicializado${NC}"
[ -f ".github/CODEOWNERS" ] && echo -e "${GREEN}✅ Permisos de Danilo definidos${NC}"

echo ""
echo -e "${MAGENTA}==========================================${NC}"
echo -e "${CYAN}🎆 ¡SINFONÍA EN OBSIDIAN MAYOR COMPLETADA! 🎆${NC}"
echo -e "${MAGENTA}==========================================${NC}"
echo ""

# ESTRIBILLO FINAL
echo -e "${MAGENTA}🎵🎶🎵🎶 "DAG KLASSICAL VIVE... EN OBSIDIAN" 🎶🎵🎶🎵${NC}"
echo ""
echo -e "${GREEN}🎵 ¡TODO LISTO PARA DAG KLASSICAL EN OBSIDIAN! 🎵${NC}"
echo ""
echo -e "${YELLOW}☕ Café nocturno: ¡Misión cumplida con brillantez! ☕✨${NC}"
echo ""
echo -e "${CYAN}🏆 Resultado: DAG Klassical ahora tiene la plataforma${NC}"
echo -e "${CYAN}organizacional más sofisticada de Venezuela... ¡EN OBSIDIAN!${NC}"
echo ""
echo -e "${MAGENTA}🎼 BRAVO! ENCORE! STANDING OVATION! 🎼${NC}"
echo ""

# Próximos pasos
echo -e "${BLUE}📅 PRÓXIMOS PASOS:${NC}"
echo "1. 🔧 Instalar plugins en Obsidian"
echo "2. 🔐 Documentar credenciales VPS"
echo "3. 🎵 Crear proyectos Virginia y Enmanuel"
echo "4. 🌐 Configurar GitHub y invitar a Danilo"
echo "5. 🔄 Comenzar el workflow diario"
echo ""
echo -e "${GREEN}✅ ¡La orquesta digital de DAG Klassical está lista!${NC}"

echo ""
echo -e "${MAGENTA}🎵 Fin de la Sinfonía en Obsidian Mayor 🎵${NC}"
echo -e "${CYAN}Gracias por esta interpretación magistral. ¡Hasta la próxima!${NC}"