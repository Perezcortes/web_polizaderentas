#!/bin/bash

# =============================================================================
# Script de Diagnóstico para Error 503 - Service Unavailable
# =============================================================================

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=========================================="
echo "  DIAGNÓSTICO ERROR 503 - SERVICE UNAVAILABLE"
echo "==========================================${NC}"
echo ""

# 1. Verificar si el proceso de Next.js está corriendo
echo -e "${BLUE}[1/6]${NC} Verificando procesos de Node.js/Next.js..."
NODE_PROCESSES=$(ps aux | grep -E "node|next" | grep -v grep | wc -l)
if [ "$NODE_PROCESSES" -gt 0 ]; then
    echo -e "${GREEN}✅${NC} Procesos de Node.js encontrados:"
    ps aux | grep -E "node|next" | grep -v grep | head -5
else
    echo -e "${RED}❌${NC} No se encontraron procesos de Node.js/Next.js corriendo"
fi
echo ""

# 2. Verificar si PM2 está corriendo
echo -e "${BLUE}[2/6]${NC} Verificando estado de PM2..."
if command -v pm2 &> /dev/null; then
    PM2_STATUS=$(pm2 list 2>/dev/null | grep "poliza-rentas" || echo "")
    if [ -n "$PM2_STATUS" ]; then
        echo -e "${GREEN}✅${NC} PM2 está instalado. Estado de la aplicación:"
        pm2 list | grep -A 2 "poliza-rentas" || echo "Aplicación no encontrada en PM2"
    else
        echo -e "${YELLOW}⚠️${NC} PM2 está instalado pero la aplicación 'poliza-rentas' no está corriendo"
    fi
else
    echo -e "${YELLOW}⚠️${NC} PM2 no está instalado"
fi
echo ""

# 3. Verificar si el puerto 3000 está en uso
echo -e "${BLUE}[3/6]${NC} Verificando puerto 3000..."
if command -v netstat &> /dev/null; then
    PORT_STATUS=$(netstat -tlnp 2>/dev/null | grep :3000 || echo "")
elif command -v ss &> /dev/null; then
    PORT_STATUS=$(ss -tlnp 2>/dev/null | grep :3000 || echo "")
elif command -v lsof &> /dev/null; then
    PORT_STATUS=$(lsof -i :3000 2>/dev/null || echo "")
else
    PORT_STATUS=""
fi

if [ -n "$PORT_STATUS" ]; then
    echo -e "${GREEN}✅${NC} Puerto 3000 está en uso:"
    echo "$PORT_STATUS"
else
    echo -e "${RED}❌${NC} Puerto 3000 NO está en uso - Next.js no está escuchando"
fi
echo ""

# 4. Verificar si el servicio responde localmente
echo -e "${BLUE}[4/6]${NC} Verificando respuesta del servicio en localhost:3000..."
if command -v curl &> /dev/null; then
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 http://localhost:3000/health/check.json 2>/dev/null || echo "000")
    if [ "$HTTP_CODE" = "200" ]; then
        echo -e "${GREEN}✅${NC} El servicio responde correctamente (HTTP $HTTP_CODE)"
        curl -s http://localhost:3000/health/check.json | head -1
    elif [ "$HTTP_CODE" = "000" ]; then
        echo -e "${RED}❌${NC} No se pudo conectar al servicio (timeout o conexión rechazada)"
    else
        echo -e "${YELLOW}⚠️${NC} El servicio responde pero con código HTTP $HTTP_CODE"
    fi
else
    echo -e "${YELLOW}⚠️${NC} curl no está instalado, no se puede verificar la respuesta HTTP"
fi
echo ""

# 5. Verificar configuración de Apache (si existe)
echo -e "${BLUE}[5/6]${NC} Verificando configuración de Apache..."
if [ -d "/etc/apache2" ] || [ -d "/etc/httpd" ]; then
    APACHE_DIR="/etc/apache2"
    [ -d "/etc/httpd" ] && APACHE_DIR="/etc/httpd"
    
    echo "Buscando configuración del sitio..."
    if [ -f "$APACHE_DIR/sites-available/polizaderentas.com.conf" ] || [ -f "$APACHE_DIR/sites-available/000-default.conf" ]; then
        echo -e "${GREEN}✅${NC} Archivo de configuración encontrado"
        echo "Revisando proxy_pass..."
        grep -n "proxy_pass\|ProxyPass" "$APACHE_DIR/sites-available"/*.conf 2>/dev/null | head -5 || echo "No se encontró configuración de proxy"
    else
        echo -e "${YELLOW}⚠️${NC} No se encontró configuración específica del sitio"
    fi
    
    # Verificar si Apache está corriendo
    if systemctl is-active --quiet apache2 2>/dev/null || systemctl is-active --quiet httpd 2>/dev/null; then
        echo -e "${GREEN}✅${NC} Apache está corriendo"
    else
        echo -e "${RED}❌${NC} Apache NO está corriendo"
    fi
else
    echo -e "${YELLOW}⚠️${NC} Directorio de Apache no encontrado (puede estar en otra ubicación)"
fi
echo ""

# 6. Verificar archivos de build
echo -e "${BLUE}[6/6]${NC} Verificando archivos de build..."
if [ -d ".next" ]; then
    echo -e "${GREEN}✅${NC} Directorio .next existe"
    if [ -f ".next/standalone/server.js" ] || [ -f "server.js" ]; then
        echo -e "${GREEN}✅${NC} Archivo server.js encontrado"
    else
        echo -e "${YELLOW}⚠️${NC} Archivo server.js no encontrado (puede necesitar rebuild)"
    fi
else
    echo -e "${RED}❌${NC} Directorio .next NO existe - necesita hacer build"
fi
echo ""

# Resumen y recomendaciones
echo -e "${BLUE}=========================================="
echo "  RESUMEN Y RECOMENDACIONES"
echo "==========================================${NC}"
echo ""

if [ "$NODE_PROCESSES" -eq 0 ] || [ -z "$PORT_STATUS" ]; then
    echo -e "${RED}🔴 PROBLEMA DETECTADO:${NC} Next.js no está corriendo"
    echo ""
    echo "SOLUCIÓN:"
    echo "1. Si usas PM2:"
    echo "   pm2 start ecosystem.config.js"
    echo "   pm2 save"
    echo ""
    echo "2. Si no usas PM2:"
    echo "   ./start-production.sh"
    echo ""
    echo "3. Si necesitas hacer build primero:"
    echo "   npm run build"
    echo "   npm start"
    echo ""
elif [ "$HTTP_CODE" != "200" ]; then
    echo -e "${YELLOW}🟡 PROBLEMA DETECTADO:${NC} El servicio no responde correctamente"
    echo ""
    echo "SOLUCIÓN:"
    echo "1. Reiniciar el servicio:"
    echo "   pm2 restart poliza-rentas"
    echo "   # o"
    echo "   pkill -f 'next start' && ./start-production.sh"
    echo ""
    echo "2. Verificar logs:"
    echo "   pm2 logs poliza-rentas"
    echo ""
else
    echo -e "${GREEN}🟢 TODO PARECE ESTAR BIEN:${NC}"
    echo "El servicio está corriendo y respondiendo correctamente."
    echo "Si aún ves el error 503, el problema puede estar en:"
    echo "1. Configuración de Apache (proxy reverso)"
    echo "2. Firewall bloqueando el puerto 3000"
    echo "3. Problemas de red entre Apache y Next.js"
    echo ""
fi

echo "Para más información, ejecuta:"
echo "  ./monitor-errors.sh"
echo ""

