# 🚀 Guía de Inicio Rápido - DAG Klassical Vault

> **¡Comienza en 15 minutos!** Esta guía te llevará desde cero hasta un vault completamente funcional.

## ✅ Paso 1: Preparación Inicial (3 min)

### Crear el Vault
1. **Abrir Obsidian**
2. **Crear nuevo vault**: `DAG-Klassical-Vault`
3. **Ubicación recomendada**: `~/Documents/DAG-Klassical-Vault`

### Ejecutar Setup Automático
```bash
# Navegar al vault
cd ~/Documents/DAG-Klassical-Vault

# Copiar archivos de configuración (ajustar ruta según tu descarga)
cp -r /path/to/obsidian-dagk-config/* .

# Ejecutar setup automático
chmod +x setup-vault.sh
./setup-vault.sh
```

## 🔌 Paso 2: Plugins Esenciales (5 min)

### Instalación Rápida
1. **Settings** → **Community plugins** → **Turn on community plugins**
2. **Browse** → Buscar e instalar en este orden:

**🔥 CORE (instalar primero):**
- `Templater` - Templates dinámicos
- `Dataview` - Dashboards automáticos  
- `Tasks` - Gestión de tareas
- `Obsidian Git` - Sincronización GitHub

**🛡️ SEGURIDAD:**
- `Text Expand` - Snippets seguros
- `Folder Note` - Índices automáticos

**📊 VISUALIZACIÓN:**
- `Excalidraw` - Diagramas
- `Calendar` - Vista calendario

### Configuración Rápida de Templater
1. **Settings** → **Templater** → **Template folder location**: `Templates`
2. **✅ Activar**: "Trigger Templater on new file creation"

## 🔐 Paso 3: Seguridad y Credenciales (3 min)

### Configurar Credenciales del VPS
1. **Crear**: `Credentials/Server-Access/Contabo-VPS.md`
2. **Usar template**: `Templates/Credential-Template.md`
3. **Copiar datos** del mensaje de WhatsApp de Danilo:
   ```markdown
   **Usuario**: [datos del VPS]
   **Password**: [password del VPS]
   **Host**: [IP del servidor]
   **Puerto**: 22
   ```

### Verificar .gitignore
```bash
# Verificar que credenciales están protegidas
cat .gitignore | grep Credentials
# Debe mostrar: Credentials/
```

## 📊 Paso 4: Primer Uso del Dashboard (2 min)

### Abrir Dashboard Principal
1. **Abrir**: `Dashboard.md`
2. **Verificar que se cargan**:
   - ✅ Proyectos activos
   - ✅ Tareas pendientes  
   - ✅ Estado de infraestructura

### Si Dataview no funciona:
1. **Settings** → **Dataview** → **✅ Enable JavaScript Queries**
2. **Reiniciar Obsidian**

## 🎵 Paso 5: Crear Primer Proyecto (2 min)

### Proyecto Virginia MFT
1. **Command Palette** (`Ctrl+P`) → `Templater: Create new note from template`
2. **Seleccionar**: `Project-Template`
3. **Título**: `Virginia-MFT`
4. **Completar**:
   ```markdown
   # Proyecto: Virginia MFT
   
   **Estado actual**: active
   **Prioridad**: high
   **Stakeholders**: [[Danilo-Alvarez]]
   ```

## 🔄 Paso 6: Configuración GitHub (Opcional)

### Si quieres sincronización con GitHub:
```bash
# Inicializar repositorio
git init
git add Projects/ Knowledge-Base/ Templates/ Dashboard.md README.md
git commit -m "Initial DAG Klassical vault setup"

# Conectar con GitHub (crear repo primero en GitHub)
git remote add origin https://github.com/tu-usuario/dagk-knowledge-base.git
git push -u origin main
```

### Para sync futuro (SEGURO):
```bash
# Usar script seguro que excluye credenciales
./sync-public.sh
```

---

## 🎯 Verificación Final (1 min)

### ✅ Checklist de Funcionamiento
- [ ] Dashboard se carga sin errores
- [ ] Templates funcionan (crear nota de prueba)
- [ ] Carpeta Credentials/ existe y está protegida
- [ ] Plugin Dataview muestra datos dinámicos
- [ ] Tasks plugin detecta tareas con `- [ ]`

### 🚨 Si algo no funciona:
1. **Reiniciar Obsidian**
2. **Settings** → **Community plugins** → **Reload plugins**
3. **Verificar** que todos los plugins core están activados

---

## 🔥 Próximos Pasos Inmediatos

### 1. Documentar VPS (5 min)
- [ ] Crear `Infrastructure/VPS/Contabo-Setup.md`
- [ ] Documentar especificaciones del servidor
- [ ] Planificar configuración inicial

### 2. Actualizar Estado de Proyectos (5 min)
- [ ] Revisar `Projects/Virginia-MFT/index.md`
- [ ] Actualizar estado de website restructuring
- [ ] Definir próximas tareas

### 3. Planificar Reunión con Danilo (3 min)
- [ ] Usar `Templates/Meeting-Notes.md`
- [ ] Agendar review del progreso
- [ ] Preparar puntos de discusión

### 4. Configurar LLM Local (Opcional - 30 min)
- [ ] Seguir `llm-local-config.md`
- [ ] Instalar LM Studio
- [ ] Configurar contexto DAG Klassical

---

## 📱 Tips de Uso Diario

### 🔥 Comandos Más Usados
- `Ctrl+O` - Quick switcher (navegar archivos)
- `Ctrl+P` - Command palette (todas las acciones)
- `Ctrl+E` - Toggle edit/preview mode
- `Ctrl+Shift+F` - Búsqueda global
- `[[nombre]]` - Crear/enlazar notas

### 📊 Workflow Recomendado
1. **🌅 Mañana**: Abrir Dashboard, revisar tareas
2. **💼 Durante el día**: Actualizar proyectos, crear notas
3. **🌙 Noche**: Backup local, sync a GitHub (si aplica)

### 🔄 Mantenimiento Semanal
- [ ] **Lunes**: Backup completo (`./backup-vault.sh`)
- [ ] **Miércoles**: Sync público (`./sync-public.sh`)
- [ ] **Viernes**: Revisar y rotar credenciales

---

## 🆘 Soporte y Recursos

### 📚 Documentación Completa
- `vault-structure.md` - Organización detallada
- `essential-plugins.md` - Configuración de plugins
- `GitHub-Integration.md` - Sync avanzado
- `llm-local-config.md` - IA local

### 🔧 Scripts Útiles
- `setup-vault.sh` - Setup inicial completo
- `backup-vault.sh` - Backup local seguro
- `sync-public.sh` - Sincronización segura

### 💡 Tips de Productividad
- **Tags consistentes**: Usar siempre `#dagk/categoria`
- **Enlaces bidireccionales**: `[[nota]]` crea conexiones automáticas
- **Templates**: Crear templates para documentos repetitivos
- **Dataview queries**: Automatizar vistas de datos

---

> 🎉 **¡Felicidades!** Tienes un sistema completo de gestión para DAG Klassical
> 
> 🎯 **Siguiente**: Empezar a documentar y organizar todos los aspectos del proyecto
> 
> 🔐 **Recuerda**: Credenciales siempre locales, solo sync contenido público

## 🤝 ¿Necesitas Ayuda?

**Para configuración técnica:**
- Revisar logs en Settings → Community plugins
- Verificar permisos de archivos
- Reiniciar Obsidian si hay problemas

**Para uso diario:**
- Dashboard es tu punto central
- Templates aceleran la creación
- Tags ayudan a encontrar contenido

**Para colaboración:**
- GitHub solo para contenido público
- Danilo accede vía repository compartido
- Meetings y decisions siempre documentados

¡Estás listo para gestionar DAG Klassical de manera profesional! 🚀