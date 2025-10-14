# Setup GitHub Projects - DAG Klassical

> **Guía completa para configurar GitHub Projects y gestión de tareas**

---

## 📋 **1. CREAR PROYECTO EN GITHUB**

### Paso 1: Crear el proyecto

1. Ir a tu repositorio: `https://github.com/dagklassical/dag-www`
2. Click en pestaña **"Projects"**
3. Click **"New project"**
4. Seleccionar **"Table"** template
5. Nombre: **"DAG Klassical - Roadmap 2025"**
6. Descripción: **"Desarrollo completo de sitio web + marketplace blockchain"**

---

## 🏗️ **2. CONFIGURACIÓN DE COLUMNAS**

### Columnas del tablero (Board view)

```ascii
📝 Backlog          → Tareas planificadas pero no iniciadas
🚧 In Progress      → Tareas en desarrollo activo  
👀 Review          → Tareas completadas pendientes de revisión
✅ Done            → Tareas completamente terminadas
🚫 Blocked         → Tareas bloqueadas esperando dependencias
```

### Configuración en GitHub

1. Cambiar a **Board view**
2. **Settings** → **Fields** → Agregar **"Status"** field
3. Opciones del status:
   - `Backlog` (gris)
   - `In Progress` (azul)
   - `Review` (amarillo)
   - `Done` (verde)
   - `Blocked` (rojo)

---

## 🏷️ **3. SISTEMA DE LABELS**

### A. Labels por Fase

```ascii
🎯 fase-1-fundacion     → #2563eb (azul)
🎨 fase-2-sitio-base    → #10b981 (verde)  
🔗 fase-3-blockchain    → #f59e0b (amarillo)
⚡ fase-4-optimizacion  → #ef4444 (rojo)
```

### B. Labels por Tipo de Tarea

```ascii
📄 content        → #6b7280 (gris)
🎨 design         → #ec4899 (rosa)
💻 frontend       → #3b82f6 (azul)
⛓️ blockchain     → #8b5cf6 (púrpura)
📚 docs          → #10b981 (verde)
🐛 bug           → #ef4444 (rojo)
🧪 testing       → #f59e0b (amarillo)
```

### C. Labels por Prioridad

```ascii
🔥 priority-critical  → #dc2626 (rojo intenso)
⭐ priority-high     → #ea580c (naranja)
📌 priority-medium   → #ca8a04 (amarillo oscuro)
💡 priority-low      → #65a30d (verde oliva)
```

### D. Labels por Complejidad

```ascii
🟢 easy       → #16a34a (verde)
🟡 medium     → #ca8a04 (amarillo)
🔴 hard       → #dc2626 (rojo)
⚫ epic       → #1f2937 (negro)
```

### E. Labels Especiales

```ascii
🚀 quick-win        → #059669 (verde esmeralda)
⏳ waiting-external → #6b7280 (gris)
🎓 learning         → #7c3aed (púrpura)
💰 monetization     → #f59e0b (dorado)
```

---

## 📅 **4. MILESTONES**

### Milestone 1: Sitio Base Funcional

- **Fecha límite:** 18 de octubre, 2025 (4 días)
- **Descripción:** Sitio web completo con contenido base y diseño responsive

### Milestone 2: Blockchain Integrado  

- **Fecha límite:** 5 de noviembre, 2025 (18 días)
- **Descripción:** Marketplace NFT funcional con conexión a Polygon

### Milestone 3: Optimización y VPS

- **Fecha límite:** 13 de noviembre, 2025 (7 días)
- **Descripción:** Nodo propio y optimizaciones finales

### Milestone 4: Launch Production

- **Fecha límite:** 15 de noviembre, 2025 (2 días buffer)
- **Descripción:** Sitio completamente funcional en producción

---

## 📝 **5. ISSUE TEMPLATES**

### Template A: Feature Task

```markdown
---
name: 🎯 Feature Task
about: Nueva funcionalidad o mejora
title: '[FASE-X] Descripción breve de la tarea'
labels: ''
assignees: ''
---

## 📋 Descripción
Descripción clara de qué necesita ser implementado.

## 🎯 Criterios de Aceptación
 - [ ] Criterio 1
- [ ] Criterio 2  
- [ ] Criterio 3

## 🔗 Dependencias
- [ ] Tarea/Issue #X debe completarse antes
- [ ] Recurso Y debe estar disponible

## 📋 Checklist de Implementación
- [ ] Investigación/diseño
- [ ] Implementación core
- [ ] Testing
- [ ] Documentación
- [ ] Review de código

## 📊 Estimación
**Complejidad:** 🟢 Easy / 🟡 Medium / 🔴 Hard  
**Tiempo estimado:** X horas/días

## 📝 Notas adicionales
Cualquier información relevante, links, referencias, etc.
```

### Template B: Bug Report

```markdown
---
name: 🐛 Bug Report  
about: Reportar un error o problema
title: '[BUG] Descripción del problema'
labels: 'bug'
assignees: ''
---

## 🐛 Descripción del Bug
Descripción clara y concisa del problema.

## 🔄 Pasos para Reproducir
1. Ir a '...'
2. Click en '...'
3. Hacer scroll hasta '...'
4. Ver error

## ✅ Comportamiento Esperado
Qué debería haber pasado.

## ❌ Comportamiento Actual
Qué pasó en realidad.

## 📱 Entorno
- **Browser:** [ej. Chrome 118]
- **OS:** [ej. Windows 11]
- **Dispositivo:** [ej. Desktop, Mobile]
- **URL:** [donde ocurrió el problema]

## 📸 Screenshots
Si aplica, agregar screenshots del problema.

## 🔧 Posible Solución
Si tienes idea de cómo arreglarlo.
```

### Template C: Blockchain Task

```markdown
---
name: ⛓️ Blockchain Task
about: Tarea específica de blockchain/smart contracts
title: '[BLOCKCHAIN] Descripción de la tarea'
labels: 'blockchain, fase-3-blockchain'
assignees: ''
---

## ⛓️ Descripción de la Funcionalidad
Qué funcionalidad blockchain necesita implementarse.

## 🏗️ Contratos Involucrados
- [ ] MusicCardNFT.sol
- [ ] Marketplace.sol
- [ ] Otro: ___________

## 🔗 Funciones del Contrato
- `función1()` - Descripción
- `función2()` - Descripción

## 🎯 Criterios de Aceptación
- [ ] Conexión a contrato establecida
- [ ] Función X implementada correctamente
- [ ] Manejo de errores incluido
- [ ] Testing en testnet completado
- [ ] UI actualizada

## 🧪 Testing
- [ ] Testnet Mumbai
- [ ] Mainnet Polygon
- [ ] Casos edge cubiertos

## 📋 Checklist Técnico
- [ ] ABIs actualizados
- [ ] Variables de entorno configuradas
- [ ] Error handling implementado
- [ ] Loading states agregados
- [ ] Documentación actualizada

## ⛽ Gas Estimation
**Gas estimado:** XXX,XXX units  
**Costo aproximado:** ~$X USD
```

---

## 📊 **6. FIELDS PERSONALIZADOS**

### En GitHub Projects, agregar estos campos

#### A. Campo "Estimate" (Number)

- **Nombre:** Estimate
- **Descripción:** Horas estimadas para completar
- **Tipo:** Number
- **Valores típicos:** 1, 2, 4, 8, 16, 24

#### B. Campo "Phase" (Select)

- **Opciones:**
  - Fase 1: Fundación
  - Fase 2: Sitio Base
  - Fase 3: Blockchain
  - Fase 4: Optimización

#### C. Campo "Complexity" (Select)

- **Opciones:**
  - 🟢 Easy (1-2 horas)
  - 🟡 Medium (4-8 horas)  
  - 🔴 Hard (1-2 días)
  - ⚫ Epic (3+ días)

#### D. Campo "Area" (Select)

- **Opciones:**
  - Frontend
  - Blockchain
  - Content
  - Design
  - DevOps
  - Documentation

---

## 🔄 **7. WORKFLOWS AUTOMATIZADOS**

### A. Auto-assign Labels

```yaml
# .github/workflows/auto-label.yml
name: Auto Label Issues

on:
  issues:
    types: [opened]

jobs:
  label:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/github-script@v6
        with:
          script: |
            const title = context.payload.issue.title.toLowerCase();
            const labels = [];
            
            if (title.includes('[fase-1]')) labels.push('fase-1-fundacion');
            if (title.includes('[fase-2]')) labels.push('fase-2-sitio-base');
            if (title.includes('[fase-3]') || title.includes('[blockchain]')) {
              labels.push('fase-3-blockchain', 'blockchain');
            }
            if (title.includes('[fase-4]')) labels.push('fase-4-optimizacion');
            if (title.includes('[bug]')) labels.push('bug');
            
            if (labels.length > 0) {
              github.rest.issues.addLabels({
                issue_number: context.issue.number,
                owner: context.repo.owner,
                repo: context.repo.repo,
                labels: labels
              });
            }
```

### B. Auto-move to In Progress

```yaml
# .github/workflows/auto-move-assigned.yml
name: Auto Move Assigned Issues

on:
  issues:
    types: [assigned]

jobs:
  move-to-progress:
    runs-on: ubuntu-latest
    steps:
      - name: Move to In Progress
        uses: actions/github-script@v6
        with:
          script: |
            // Script para mover issue asignado a "In Progress"
            // (Requiere configuración adicional con Project ID)
```

---

## 📋 **8. PASO A PASO PARA CONFIGURAR**

### Configuración inicial (15 minutos)

1. **Crear proyecto** siguiendo paso 1
2. **Agregar campos personalizados** (Settings → Fields)
3. **Crear labels** (Repository → Issues → Labels)
4. **Crear milestones** (Repository → Issues → Milestones)
5. **Agregar issue templates** (Repository → Settings → Features → Issues → Set up templates)

### Importar tareas del plan (30 minutos)

1. **Crear issues para Fase 2** (12 issues aprox.)
2. **Crear issues para Fase 3** (20 issues aprox.)
3. **Crear issues para Fase 4** (8 issues aprox.)
4. **Asignar labels, milestones y estimates**

---

## 🎯 **9. EJEMPLOS DE ISSUES A CREAR**

### Fase 2 - Sitio Base

```ascii
[FASE-2] Crear página de inicio optimizada
[FASE-2] Implementar menú responsive  
[FASE-2] Agregar 3 álbumes de ejemplo
[FASE-2] Optimizar imágenes y lazy loading
[FASE-2] Configurar SEO básico
```

### Fase 3 - Blockchain

```ascii
[BLOCKCHAIN] Instalar dependencias ethers.js
[BLOCKCHAIN] Crear componente WalletConnect
[BLOCKCHAIN] Implementar función getUserNFTs()
[BLOCKCHAIN] Crear página /marketplace
[BLOCKCHAIN] Implementar compra de NFTs
```

---

## 📊 **10. MÉTRICAS Y REPORTING**

### Vistas recomendadas en GitHub Projects

1. **Board por Status** - Kanban principal
2. **Table por Phase** - Vista de todas las tareas agrupadas por fase
3. **Table por Assignee** - Qué está haciendo cada persona
4. **Roadmap por Milestones** - Vista temporal del progreso

### KPIs a trackear

- Issues cerrados por semana
- Tiempo promedio de resolución
- Burndown por milestone
- Distribución de complejidad

---

**¿Quieres que creemos algunos issues de ejemplo siguiendo esta estructura?**

Las plantillas están listas para copiar y pegar directamente en GitHub.
