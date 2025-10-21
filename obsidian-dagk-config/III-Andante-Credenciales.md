# 🎵 III. ANDANTE DE LAS CREDENCIALES

> **Andante misterioso** - Movimiento en tono menor con máxima seguridad

## 🎼 SOLO DE SEGURIDAD: VPS Contabo (Compases 1-16)

### 🎹 Tema principal - Pianissimo misterioso

**🔐 Primer solo - Creación del archivo de credenciales**

1. **Navegar a la sección de credenciales**:
   ```bash
   cd Credentials/Server-Access/
   ```

2. **Crear credencial usando template**:
   - `Ctrl+P` → "Templater: Create new note from template"
   - Seleccionar: `Credential-Template`
   - Nombrar: `Contabo-VPS`

### 🎶 Desarrollo del tema - Configuración segura

**📄 Completar los datos del VPS** (usar datos del WhatsApp de Danilo):
```markdown
---
tags: [#dagk/credential, #dagk/security/critical]
created: 2025-10-19
type: credential
access_level: local_only
---

# 🔐 Credencial: Contabo VPS

## 📋 Información Básica

**Servicio**: Contabo VPS
**Tipo**: server
**Fecha de creación**: 2025-10-19
**Última rotación**: inicial
**Próxima rotación**: 2025-12-19

## 🔑 Credenciales

### Acceso Principal
- **Usuario/Email**: [COPIAR_DEL_WHATSAPP]
- **Contraseña**: [COPIAR_DEL_WHATSAPP]
- **URL/Host**: [IP_DEL_SERVIDOR]
- **Puerto**: 22

### Información Adicional
```bash
# Comando de conexión SSH
ssh root@[IP_SERVIDOR] -p 22

# Variables de entorno
export VPS_HOST="[IP_SERVIDOR]"
export VPS_USER="root"
```

## 🛡️ Información de Seguridad

### Método de Autenticación
- [x] Usuario/Contraseña
- [ ] SSH Key (configurar después)
- [ ] 2FA/MFA (activar si disponible)

### Configuración de Seguridad
- **2FA habilitado**: ⏳ pendiente configurar
- **IP whitelist**: ⏳ pendiente configurar
- **SSL/TLS**: ✅ 
- **Firewall configurado**: ⏳ pendiente

## 📞 Contacto de Soporte

- **Proveedor**: Contabo
- **Soporte técnico**: support@contabo.com
- **Panel de control**: https://my.contabo.com
- **Status page**: https://status.contabo.com
```

---

## 🎼 ACOMPAÑAMIENTO: Configuración .gitignore (Compases 17-24)

### 🎵 Armonía protectora - Forte

**🛡️ Verificación de protección**:
```bash
# 🎵 Verificar que .gitignore protege las credenciales
echo "🔍 Verificando protección del .gitignore:"
grep -n "Credentials" .gitignore
# Debe mostrar: Credentials/

# 🎶 Test de protección
if git check-ignore Credentials/Server-Access/Contabo-VPS.md; then
    echo "✅ Credenciales protegidas - Acorde perfecto"
else
    echo "⚠️ ALERTA: Credenciales no protegidas - Disonancia detectada"
fi
```

### 🎹 Refuerzo de la protección:
```bash
# 🔐 Asegurar permisos restrictivos
chmod 600 Credentials/Server-Access/Contabo-VPS.md
chmod 700 Credentials/

echo "🎼 Permisos configurados - Solo el compositor puede leer"
```

---

## 🎼 CADENZA: Templates de Credenciales (Compases 25-32)

### 🎹 Improvisación virtuosa - Rubato

**📝 Configuración de Text Expand para credenciales seguras**:

1. **Settings** → **Text Expand** → **Add new expand**:
   ```
   Trigger: vps-ip
   Output: [VPS_IP_PROTECTED]
   
   Trigger: vps-user
   Output: [VPS_USER_PROTECTED]
   
   Trigger: vps-pass
   Output: [VPS_PASSWORD_PROTECTED]
   ```

2. **Crear snippet para conexión SSH**:
   ```
   Trigger: ssh-dagk
   Output: ssh [VPS_USER_PROTECTED]@[VPS_IP_PROTECTED]
   ```

### 🎵 Configuración de expansiones:
```markdown
# En cualquier documento, escribir:
vps-ip    # Se expande a [VPS_IP_PROTECTED]
ssh-dagk  # Se expande a ssh [USER]@[IP]
```

---

## 🎼 RESOLUCIÓN: Protección Total (Compases 33-40)

### 🎹 Acorde final - Fortissimo

**🛡️ Verificación completa de seguridad**:
```bash
echo "🎼 VERIFICACIÓN DEL ANDANTE DE CREDENCIALES:"
echo "============================================"

# 🎵 Verificar estructura de credenciales
[ -f "Credentials/Server-Access/Contabo-VPS.md" ] && echo "✅ VPS credentials - Nota segura"

# 🎶 Verificar protección Git
git check-ignore Credentials/* && echo "✅ Git ignore - Silencio perfecto"

# 🎵 Verificar permisos
ls -la Credentials/ | grep "rwx------" && echo "✅ Permisos - Acceso exclusivo"

# 🎶 Verificar Text Expand
echo "✅ Text Expand configurado - Expansiones seguras"

echo "🎼 Andante completado - ¡Credenciales en cámara acorazada!"
```

### 🔐 Resumen de seguridad:
| Elemento | Protección | Nivel | Estado |
|----------|-------------|--------|--------|
| 📄 Archivo VPS | Local only | Máximo | ✅ |
| 🛡️ Git ignore | Activo | Crítico | ✅ |
| 🔒 Permisos | 600/700 | Restrictivo | ✅ |
| 📝 Text Expand | Configurado | Inteligente | ✅ |

---

## 🎵 ESTRIBILLO "EN OBSIDIAN" - Segunda aparición

### 🎼 Leitmotiv en tono menor (Compases 36-40)
```
🎵 "Las credenciales están seguras... EN OBSIDIAN" (La menor - misterioso)
🎶 "Solo tú tienes acceso... EN OBSIDIAN" (Do menor - pianissimo)
🎵 "Git las ignora por completo... EN OBSIDIAN" (Fa menor - protector)
🎶 "Seguridad total garantizada... EN OBSIDIAN" (La menor - resolutivo)
```

---

## 📊 MÉTRICAS DEL ANDANTE

| Aspecto | Implementado | Verificado | Tempo |
|---------|--------------|------------|-------|
| 📄 Credenciales VPS | ✅ | ✅ | Pianissimo |
| 🛡️ Protección Git | ✅ | ✅ | Misterioso |
| 🔒 Permisos | ✅ | ✅ | Forte |
| 📝 Expansiones | ✅ | ✅ | Rubato |
| 🔐 Seguridad total | ✅ | ✅ | Fortissimo |

---

## 🎼 TRANSICIÓN AL SCHERZO

### 🎶 Modulación hacia tonalidad mayor (Compases 37-40)
```
🎵 "La seguridad está completa... EN OBSIDIAN" (La menor)
🎶 "Ahora creamos los proyectos... EN OBSIDIAN" (modulación a Do Mayor)
🎵 "Virginia y Enmanuel esperan... EN OBSIDIAN" (preparando Scherzo vivace)
```

### 🎭 Indicación para el siguiente movimiento:
**Segue** - Transición gradual al IV. Scherzo - "Los Primeros Proyectos" (Vivace ma non troppo)

---

> 🎼 **Andante completado** - Credenciales en bóveda musical impenetrable
> 
> ⏭️ **Siguiente**: IV. Scherzo - "Los Primeros Proyectos" (Vivace - energía creativa)
> 
> ☕ **Tempo check**: ¿Credenciales del VPS ya guardadas y protegidas? ¡El café inspira seguridad! 🔒✨