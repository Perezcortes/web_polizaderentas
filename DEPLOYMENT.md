# Guía de Despliegue - Póliza de Rentas

## 🚀 Despliegue Automático

### Opción 1: Script Automático (Recomendado)
```bash
# Después de clonar el repositorio
chmod +x deploy.sh
./deploy.sh
```

Este script se encarga de:
- ✅ Verificar dependencias del sistema
- ✅ Limpiar instalaciones previas
- ✅ Instalar dependencias
- ✅ Construir el proyecto para producción
- ✅ Crear scripts de inicio
- ✅ Configurar PM2
- ✅ Generar template de variables de entorno

### Opción 2: Comandos Manuales
```bash
# 1. Instalar dependencias
npm ci

# 2. Configurar variables de entorno
cp .env.example .env.local  # Editar según necesidades

# 3. Build para producción
npm run build

# 4. Iniciar en producción
npm start
```

## 🐳 Despliegue con Docker

### Build y ejecución
```bash
# Build de la imagen
docker build -t poliza-rentas .

# Ejecutar con docker-compose
docker-compose up -d
```

### Variables de entorno requeridas
Crear archivo `.env.local`:
```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com

# Configuración SMTP para nodemailer
SMTP_HOST=tu-servidor-smtp
SMTP_PORT=587
SMTP_USER=tu-email@dominio.com
SMTP_PASSWORD=tu-password
```

## 📊 Monitoreo y Gestión

### Con PM2
```bash
# Iniciar con PM2
pm2 start ecosystem.config.js

# Ver logs
pm2 logs poliza-rentas

# Reiniciar
pm2 restart poliza-rentas

# Detener
pm2 stop poliza-rentas
```

### Verificación de salud
```bash
curl http://localhost:3000/health/check.json
```

## 🔧 Configuración de Servidor

### Nginx (Proxy Reverso)
```nginx
server {
    listen 80;
    server_name tu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### SSL con Certbot
```bash
sudo certbot --nginx -d tu-dominio.com
```

## 📝 Notas Importantes

1. **Variables de entorno**: Configura `.env.local` antes del primer uso
2. **Puerto**: Por defecto usa el puerto 3000
3. **Logs**: Revisa los logs en caso de errores
4. **Actualizaciones**: Para actualizar, ejecuta `git pull` y vuelve a ejecutar `./deploy.sh`

## 🔍 Solución de Problemas

### Error 503 - Service Unavailable

Este error indica que Apache no puede conectarse al backend de Next.js. Solución rápida:

```bash
# Opción 1: Diagnóstico automático
./diagnose-503.sh

# Opción 2: Recuperación automática
./fix-503.sh

# Opción 3: Manual
# Verificar si el servicio está corriendo
pm2 list
# o
ps aux | grep node

# Si no está corriendo, iniciarlo
pm2 start ecosystem.config.js
# o
./start-production.sh
```

**Causas comunes:**
- El proceso de Next.js se detuvo
- El puerto 3000 no está escuchando
- Problemas de memoria (PM2 reinicia automáticamente)
- El build está corrupto o desactualizado

**Verificación rápida:**
```bash
# Verificar si el puerto está en uso
lsof -i :3000
# o
netstat -tlnp | grep 3000

# Verificar respuesta del servicio
curl http://localhost:3000/health/check.json
```

### Error de build
```bash
# Limpiar cache y reinstalar
rm -rf node_modules .next
npm ci
npm run build
```

### Error de permisos
```bash
chmod +x deploy.sh
chmod +x start-production.sh
chmod +x diagnose-503.sh
chmod +x fix-503.sh
```

### Puerto ocupado
```bash
# Cambiar puerto en .env.local
PORT=3001
# Y actualizar la configuración de Apache para apuntar al nuevo puerto
```

### El servicio se detiene frecuentemente
```bash
# Verificar logs
pm2 logs poliza-rentas --lines 100

# Verificar uso de memoria
pm2 monit

# Aumentar límite de memoria en ecosystem.config.js
max_memory_restart: '2G'
```
