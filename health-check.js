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
