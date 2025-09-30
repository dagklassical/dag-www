# 🔐 Solución para "HTTP Basic Access denied" en GitLab

## Problema
GitLab ya no acepta contraseñas para autenticación Git. Necesitas usar un Personal Access Token.

## Solución paso a paso

### 1. Crear Personal Access Token en GitLab
1. Ve a GitLab → **Settings** → **Access Tokens**
2. Crea un nuevo token con:
   - **Token name**: `DAG Website Deploy`
   - **Expiration date**: 1 año (o el que prefieras)
   - **Scopes**: 
     - ✅ `write_repository`
     - ✅ `read_repository`
3. **Copia el token** (solo se muestra una vez)

### 2. Configurar Git con el token

**Opción A - Cambiar URL del remote (recomendado):**
```bash
git remote set-url origin https://tu-username:tu-token@gitlab.com/aprado4/dag-www.git
```

**Opción B - Usar credenciales temporales:**
```bash
git push origin main
# Cuando pida username: tu-username
# Cuando pida password: tu-token (NO tu contraseña)
```

### 3. Verificar configuración
```bash
git remote -v
# Debería mostrar la URL con tu token
```

### 4. Hacer push
```bash
git add .
git commit -m "fix: Decap CMS admin interface corregida"
git push origin main
```

## Notas de seguridad
- **NUNCA** compartas el token públicamente
- Si el repositorio es público, considera usar SSH en lugar de HTTPS
- Puedes revocar el token en cualquier momento desde GitLab

## Configuración SSH (alternativa más segura)
Si prefieres usar SSH:
```bash
git remote set-url origin git@gitlab.com:aprado4/dag-www.git
```
Necesitarás configurar una SSH key en tu perfil de GitLab.