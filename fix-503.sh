#!/bin/bash

# =============================================================================
# Script de Recuperación Automática para Error 503
# =============================================================================
# Este script intenta recuperar automáticamente el servicio
# =============================================================================

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=========================================="
echo "  RECUPERACIÓN AUTOMÁTICA - ERROR 503"
echo "==========================================${NC}"
echo ""

# Función para verificar si el puerto está en uso
check_port() {
    if command -v lsof &> /dev/null; then
        lsof -i :3000 > /dev/null 2>&1
    elif command -v netstat &> /dev/null; then
        netstat -tlnp 2>/dev/null | grep :3000 > /dev/null 2>&1
    elif command -v ss &> /dev/null; then
        ss -tlnp 2>/dev/null | grep :3000 > /dev/null 2>&1
    else
        return 1
    fi
}

# Función para verificar si el servicio responde
check_service() {
    if command -v curl &> /dev/null; then
        HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 http://localhost:3000/health/check.json 2>/dev/null || echo "000")
        [ "$HTTP_CODE" = "200" ]
    else
        return 1
    fi
}

# Paso 1: Detener procesos existentes
echo -e "${BLUE}[1/5]${NC} Deteniendo procesos existentes..."

# Detener PM2 si está corriendo
if command -v pm2 &> /dev/null; then
    if pm2 list | grep -q "poliza-rentas"; then
        echo "Deteniendo aplicación en PM2..."
        pm2 stop poliza-rentas 2>/dev/null || true
        pm2 delete poliza-rentas 2>/dev/null || true
    fi
fi

# Detener procesos de Node.js en el puerto 3000
if check_port; then
    echo "Deteniendo procesos en el puerto 3000..."
    if command -v lsof &> /dev/null; then
        lsof -ti :3000 | xargs kill -9 2>/dev/null || true
    elif command -v fuser &> /dev/null; then
        fuser -k 3000/tcp 2>/dev/null || true
    fi
    sleep 2
fi

# Detener cualquier proceso de Next.js
pkill -f "next start" 2>/dev/null || true
pkill -f "node.*server.js" 2>/dev/null || true
sleep 2

echo -e "${GREEN}✅${NC} Procesos detenidos"
echo ""

# Paso 2: Verificar que el build existe
echo -e "${BLUE}[2/5]${NC} Verificando build..."
if [ ! -d ".next" ]; then
    echo -e "${YELLOW}⚠️${NC} No se encontró el directorio .next"
    echo "Ejecutando build..."
    
    if [ ! -f "package.json" ]; then
        echo -e "${RED}❌${NC} No se encontró package.json. Asegúrate de estar en el directorio correcto."
        exit 1
    fi
    
    export NODE_ENV=production
    npm run build
    
    if [ ! -d ".next" ]; then
        echo -e "${RED}❌${NC} El build falló. Revisa los errores arriba."
        exit 1
    fi
    echo -e "${GREEN}✅${NC} Build completado"
else
    echo -e "${GREEN}✅${NC} Build encontrado"
fi
echo ""

# Paso 3: Verificar variables de entorno
echo -e "${BLUE}[3/5]${NC} Verificando variables de entorno..."
if [ ! -f ".env.local" ]; then
    echo -e "${YELLOW}⚠️${NC} No se encontró .env.local"
    echo "Creando archivo .env.local básico..."
    cat > .env.local << EOF
NODE_ENV=production
PORT=3000
EOF
    echo -e "${YELLOW}⚠️${NC} Se creó .env.local básico. Configura las variables necesarias."
fi
echo -e "${GREEN}✅${NC} Variables de entorno verificadas"
echo ""

# Paso 4: Iniciar el servicio
echo -e "${BLUE}[4/5]${NC} Iniciando el servicio..."

export NODE_ENV=production
export PORT=${PORT:-3000}

# Intentar usar PM2 si está disponible
if command -v pm2 &> /dev/null; then
    echo "Iniciando con PM2..."
    pm2 start ecosystem.config.js
    pm2 save 2>/dev/null || true
    echo -e "${GREEN}✅${NC} Servicio iniciado con PM2"
    echo ""
    echo "Esperando a que el servicio esté listo..."
    sleep 5
else
    echo "PM2 no está disponible, iniciando en segundo plano..."
    nohup npm start > /tmp/poliza-rentas.log 2>&1 &
    echo $! > /tmp/poliza-rentas.pid
    echo -e "${GREEN}✅${NC} Servicio iniciado en segundo plano (PID: $(cat /tmp/poliza-rentas.pid))"
    echo ""
    echo "Esperando a que el servicio esté listo..."
    sleep 5
fi
echo ""

# Paso 5: Verificar que el servicio está funcionando
echo -e "${BLUE}[5/5]${NC} Verificando que el servicio está funcionando..."

MAX_RETRIES=5
RETRY_COUNT=0
SERVICE_UP=false

while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
    if check_port && check_service; then
        SERVICE_UP=true
        break
    fi
    RETRY_COUNT=$((RETRY_COUNT + 1))
    echo "Intento $RETRY_COUNT/$MAX_RETRIES - Esperando servicio..."
    sleep 3
done

echo ""

if [ "$SERVICE_UP" = true ]; then
    echo -e "${GREEN}=========================================="
    echo "  ✅ SERVICIO RECUPERADO EXITOSAMENTE"
    echo "==========================================${NC}"
    echo ""
    echo "El servicio está corriendo y respondiendo correctamente."
    echo ""
    echo "Información del servicio:"
    if command -v pm2 &> /dev/null; then
        pm2 list | grep -A 2 "poliza-rentas"
    else
        echo "PID: $(cat /tmp/poliza-rentas.pid 2>/dev/null || echo 'N/A')"
    fi
    echo ""
    echo "Verificar estado:"
    echo "  curl http://localhost:3000/health/check.json"
    echo ""
    echo "Ver logs:"
    if command -v pm2 &> /dev/null; then
        echo "  pm2 logs poliza-rentas"
    else
        echo "  tail -f /tmp/poliza-rentas.log"
    fi
else
    echo -e "${RED}=========================================="
    echo "  ❌ NO SE PUDO RECUPERAR EL SERVICIO"
    echo "==========================================${NC}"
    echo ""
    echo "El servicio no está respondiendo después de $MAX_RETRIES intentos."
    echo ""
    echo "Por favor, ejecuta el diagnóstico:"
    echo "  ./diagnose-503.sh"
    echo ""
    echo "Y revisa los logs:"
    if command -v pm2 &> /dev/null; then
        echo "  pm2 logs poliza-rentas --lines 50"
    else
        echo "  cat /tmp/poliza-rentas.log"
    fi
    exit 1
fi

