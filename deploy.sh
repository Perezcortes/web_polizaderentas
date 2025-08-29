#!/bin/bash

# =============================================================================
# Script de Despliegue Automatizado - Póliza de Rentas
# =============================================================================
# Este script automatiza el proceso completo de despliegue en producción
# Ejecutar después de clonar el repositorio: chmod +x deploy.sh && ./deploy.sh
# =============================================================================

set -e  # Salir si cualquier comando falla

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para imprimir mensajes con colores
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Banner de inicio
echo -e "${BLUE}"
echo "=========================================="
echo "  DESPLIEGUE AUTOMÁTICO - PÓLIZA RENTAS  "
echo "=========================================="
echo -e "${NC}"

# Verificar si Node.js está instalado
print_status "Verificando Node.js..."
if ! command -v node &> /dev/null; then
    print_error "Node.js no está instalado. Por favor instala Node.js 18+ antes de continuar."
    exit 1
fi

NODE_VERSION=$(node --version)
print_success "Node.js encontrado: $NODE_VERSION"

# Verificar si npm está instalado
print_status "Verificando npm..."
if ! command -v npm &> /dev/null; then
    print_error "npm no está instalado."
    exit 1
fi

NPM_VERSION=$(npm --version)
print_success "npm encontrado: $NPM_VERSION"

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    print_error "No se encontró package.json. Asegúrate de estar en el directorio raíz del proyecto."
    exit 1
fi

# Verificar que sea el proyecto correcto
if ! grep -q "web_polizaderentas" package.json; then
    print_warning "El nombre del proyecto en package.json no coincide. ¿Continuar? (y/n)"
    read -r response
    if [[ ! "$response" =~ ^[Yy]$ ]]; then
        print_error "Despliegue cancelado por el usuario."
        exit 1
    fi
fi

print_success "Proyecto verificado: Póliza de Rentas"

# Limpiar instalaciones previas si existen
print_status "Limpiando instalaciones previas..."
if [ -d "node_modules" ]; then
    rm -rf node_modules
    print_success "node_modules eliminado"
fi

if [ -d ".next" ]; then
    rm -rf .next
    print_success "Build cache eliminado"
fi

# Instalar dependencias
print_status "Instalando dependencias de producción..."
npm ci --only=production --silent
print_success "Dependencias instaladas correctamente"

# Instalar dependencias de desarrollo (necesarias para el build)
print_status "Instalando dependencias de desarrollo para el build..."
npm ci --silent
print_success "Todas las dependencias instaladas"

# Configurar variables de entorno para producción
print_status "Configurando variables de entorno..."
export NODE_ENV=production

# Crear archivo .env.local si no existe (template)
if [ ! -f ".env.local" ]; then
    print_warning "No se encontró .env.local. Creando template..."
    cat > .env.local << EOF
# Variables de entorno para producción
NODE_ENV=production

# Configuración de email (nodemailer)
# SMTP_HOST=tu-servidor-smtp
# SMTP_PORT=587
# SMTP_USER=tu-email@dominio.com
# SMTP_PASSWORD=tu-password

# URLs y configuraciones específicas
# NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
EOF
    print_warning "Se creó .env.local template. Configura las variables necesarias antes del primer uso."
fi

# Build del proyecto
print_status "Construyendo el proyecto para producción..."
npm run build
print_success "Build completado exitosamente"

# Verificar que el build fue exitoso
if [ ! -d ".next" ]; then
    print_error "El build falló. No se encontró el directorio .next"
    exit 1
fi

# Crear script de inicio para producción
print_status "Creando script de inicio..."
cat > start-production.sh << 'EOF'
#!/bin/bash
# Script para iniciar la aplicación en producción

export NODE_ENV=production
export PORT=${PORT:-3000}

echo "Iniciando Póliza de Rentas en modo producción..."
echo "Puerto: $PORT"
echo "Entorno: $NODE_ENV"

npm start
EOF

chmod +x start-production.sh
print_success "Script de inicio creado: start-production.sh"

# Crear script de PM2 (opcional)
print_status "Creando configuración PM2..."
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'poliza-rentas',
    script: 'npm',
    args: 'start',
    cwd: './',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
EOF
print_success "Configuración PM2 creada: ecosystem.config.js"

# Crear archivo de salud del sistema
print_status "Creando endpoint de salud..."
mkdir -p public/health
echo '{"status":"ok","timestamp":"'$(date -u +%Y-%m-%dT%H:%M:%SZ)'"}' > public/health/check.json
print_success "Endpoint de salud creado en /health/check.json"

# Resumen final
echo ""
echo -e "${GREEN}=========================================="
echo "         DESPLIEGUE COMPLETADO           "
echo "==========================================${NC}"
echo ""
print_success "✅ Dependencias instaladas"
print_success "✅ Proyecto construido para producción"
print_success "✅ Scripts de inicio creados"
print_success "✅ Configuración PM2 lista"
print_success "✅ Variables de entorno configuradas"
echo ""
print_status "PRÓXIMOS PASOS:"
echo "1. Configura las variables en .env.local"
echo "2. Para iniciar manualmente: ./start-production.sh"
echo "3. Para usar PM2: pm2 start ecosystem.config.js"
echo "4. Para verificar salud: curl http://localhost:3000/health/check.json"
echo ""
print_warning "IMPORTANTE: Revisa y configura .env.local antes del primer uso"
echo ""
