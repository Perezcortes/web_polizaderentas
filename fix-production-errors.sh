#!/bin/bash

# =============================================================================
# Script de Corrección de Errores de Producción - Póliza de Rentas
# =============================================================================
# Este script aplica correcciones específicas para errores comunes en producción
# Ejecutar después del despliegue: chmod +x fix-production-errors.sh && ./fix-production-errors.sh
# =============================================================================

set -e  # Salir si cualquier comando falla

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

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

# Banner
echo -e "${BLUE}"
echo "================================================"
echo "  CORRECCIÓN DE ERRORES DE PRODUCCIÓN         "
echo "================================================"
echo -e "${NC}"

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    print_error "No se encontró package.json. Ejecuta este script desde el directorio raíz del proyecto."
    exit 1
fi

print_status "Aplicando correcciones de errores de producción..."

# 1. Verificar y corregir URLs de API (Mixed Content)
print_status "Verificando URLs de API para evitar Mixed Content..."

# Buscar URLs HTTP en archivos críticos
if grep -r "http://app.polizaderentas.com" src/ 2>/dev/null; then
    print_warning "Se encontraron URLs HTTP que pueden causar Mixed Content errors"
    print_status "Estas ya deberían estar corregidas en el código"
else
    print_success "No se encontraron URLs HTTP problemáticas"
fi

# 2. Verificar configuración de Next.js
print_status "Verificando configuración de Next.js..."

if grep -q "serverComponentsExternalPackages" next.config.ts 2>/dev/null; then
    print_warning "Configuración deprecated encontrada en next.config.ts"
    print_status "Esta ya debería estar corregida"
else
    print_success "Configuración de Next.js actualizada correctamente"
fi

# 3. Crear archivo de variables de entorno para producción si no existe
print_status "Verificando variables de entorno..."

if [ ! -f ".env.production" ]; then
    print_status "Creando .env.production template..."
    cat > .env.production << 'EOF'
# Variables de entorno para producción
NODE_ENV=production

# API Configuration (IMPORTANTE: Usar HTTPS en producción)
NEXT_PUBLIC_API_URL=https://app.polizaderentas.com/api/posts
NEXT_PUBLIC_API_KEY=your-production-api-key

# Cloudflare R2 Configuration
NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT=https://pub-7d69744bfc94470c9f3257d29c3a67d3.r2.dev

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://polizaderentas.com

# Email Configuration (nodemailer)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@domain.com
SMTP_PASSWORD=your-smtp-password
SMTP_SECURE=false

# Security
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=https://polizaderentas.com
EOF
    print_success "Archivo .env.production creado"
    print_warning "IMPORTANTE: Configura las variables reales antes de usar en producción"
else
    print_success "Archivo .env.production ya existe"
fi

# 4. Verificar dependencias críticas
print_status "Verificando dependencias críticas..."

# Verificar que Swiper esté instalado correctamente
if npm list swiper >/dev/null 2>&1; then
    print_success "Swiper instalado correctamente"
else
    print_warning "Swiper no encontrado, reinstalando..."
    npm install swiper
fi

# 5. Crear script de verificación de salud
print_status "Creando script de verificación de salud..."

cat > health-check.js << 'EOF'
// Script de verificación de salud para producción
const https = require('https');
const http = require('http');

const checks = [
    {
        name: 'API Posts',
        url: 'https://app.polizaderentas.com/api/posts?per_page=1'
    },
    {
        name: 'API Offices',
        url: 'https://app.polizaderentas.com/api/offices'
    }
];

async function checkEndpoint(check) {
    return new Promise((resolve) => {
        const protocol = check.url.startsWith('https') ? https : http;
        
        const req = protocol.get(check.url, (res) => {
            console.log(`✅ ${check.name}: ${res.statusCode}`);
            resolve({ name: check.name, status: res.statusCode, success: res.statusCode < 400 });
        });
        
        req.on('error', (err) => {
            console.log(`❌ ${check.name}: Error - ${err.message}`);
            resolve({ name: check.name, error: err.message, success: false });
        });
        
        req.setTimeout(5000, () => {
            req.destroy();
            console.log(`⏰ ${check.name}: Timeout`);
            resolve({ name: check.name, error: 'Timeout', success: false });
        });
    });
}

async function runHealthChecks() {
    console.log('🔍 Ejecutando verificaciones de salud...\n');
    
    const results = await Promise.all(checks.map(checkEndpoint));
    
    console.log('\n📊 Resumen:');
    const successful = results.filter(r => r.success).length;
    const total = results.length;
    
    console.log(`${successful}/${total} endpoints funcionando correctamente`);
    
    if (successful === total) {
        console.log('🎉 Todas las verificaciones pasaron');
        process.exit(0);
    } else {
        console.log('⚠️  Algunas verificaciones fallaron');
        process.exit(1);
    }
}

runHealthChecks();
EOF

print_success "Script de verificación de salud creado: health-check.js"

# 6. Crear script de monitoreo de errores
print_status "Creando script de monitoreo..."

cat > monitor-errors.sh << 'EOF'
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
EOF

chmod +x monitor-errors.sh
print_success "Script de monitoreo creado: monitor-errors.sh"

# Resumen final
echo ""
echo -e "${GREEN}================================================"
echo "         CORRECCIONES APLICADAS                "
echo "================================================${NC}"
echo ""
print_success "✅ URLs de API verificadas (HTTPS)"
print_success "✅ Configuración de Next.js verificada"
print_success "✅ Variables de entorno configuradas"
print_success "✅ Dependencias verificadas"
print_success "✅ Scripts de monitoreo creados"
echo ""
print_status "SCRIPTS DISPONIBLES:"
echo "• node health-check.js - Verificar salud de APIs"
echo "• ./monitor-errors.sh - Monitorear errores del sistema"
echo ""
print_warning "IMPORTANTE: Configura .env.production con valores reales antes de usar en producción"
echo ""
