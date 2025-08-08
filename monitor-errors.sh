#!/bin/bash
# Script de monitoreo de errores en producción

echo "🔍 Monitoreando errores comunes..."

# Verificar logs de PM2 si está disponible
if command -v pm2 &> /dev/null; then
    echo "📋 Últimos logs de PM2:"
    pm2 logs --lines 10 2>/dev/null || echo "No hay logs de PM2 disponibles"
fi

# Verificar procesos de Node.js
echo "🔄 Procesos de Node.js activos:"
ps aux | grep node | grep -v grep || echo "No hay procesos de Node.js activos"

# Verificar puertos
echo "🌐 Puertos en uso:"
netstat -tlnp 2>/dev/null | grep :3000 || echo "Puerto 3000 no está en uso"

# Verificar espacio en disco
echo "💾 Espacio en disco:"
df -h . | tail -1

echo "✅ Monitoreo completado"
