#!/usr/bin/env node

// Script de diagnóstico para verificar la configuración de la API
const https = require('https');

console.log('🔍 DIAGNÓSTICO DE API - Póliza de Rentas');
console.log('=====================================\n');

// Verificar variables de entorno
console.log('📋 Variables de entorno:');
console.log(`NEXT_PUBLIC_API_KEY: ${process.env.NEXT_PUBLIC_API_KEY ? '✅ Configurada' : '❌ No configurada'}`);
console.log(`NEXT_PUBLIC_API_URL: ${process.env.NEXT_PUBLIC_API_URL || 'No configurada (usará default)'}`);
console.log('');

// Función para probar endpoint
function testEndpoint(url, headers = {}) {
    return new Promise((resolve) => {
        const req = https.get(url, { headers }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                resolve({
                    status: res.statusCode,
                    headers: res.headers,
                    data: data.substring(0, 200) // Solo primeros 200 caracteres
                });
            });
        });
        
        req.on('error', (err) => {
            resolve({ error: err.message });
        });
        
        req.setTimeout(10000, () => {
            req.destroy();
            resolve({ error: 'Timeout' });
        });
    });
}

async function runDiagnostics() {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY || 'default-key';
    
    console.log('🧪 Probando endpoints...\n');
    
    // Test 1: Posts endpoint (para comparar)
    console.log('1️⃣ Testing Posts API:');
    const postsResult = await testEndpoint(
        'https://app.polizaderentas.com/api/posts?per_page=1',
        {
            'Authorization': `Bearer ${apiKey}`,
            'Accept': 'application/json'
        }
    );
    
    if (postsResult.error) {
        console.log(`   ❌ Error: ${postsResult.error}`);
    } else {
        console.log(`   📊 Status: ${postsResult.status}`);
        if (postsResult.status === 200) {
            console.log('   ✅ Posts API funciona correctamente');
        } else if (postsResult.status === 401) {
            console.log('   🔐 Posts API requiere autenticación válida');
        }
    }
    
    console.log('');
    
    // Test 2: Offices endpoint
    console.log('2️⃣ Testing Offices API:');
    const officesResult = await testEndpoint(
        'https://app.polizaderentas.com/api/offices',
        {
            'Authorization': `Bearer ${apiKey}`,
            'Accept': 'application/json'
        }
    );
    
    if (officesResult.error) {
        console.log(`   ❌ Error: ${officesResult.error}`);
    } else {
        console.log(`   📊 Status: ${officesResult.status}`);
        if (officesResult.status === 200) {
            console.log('   ✅ Offices API funciona correctamente');
            console.log(`   📄 Datos recibidos: ${officesResult.data.substring(0, 100)}...`);
        } else if (officesResult.status === 401) {
            console.log('   🔐 Offices API requiere autenticación válida');
            console.log(`   📄 Respuesta: ${officesResult.data}`);
        }
    }
    
    console.log('');
    
    // Test 3: Sin autenticación (para comparar)
    console.log('3️⃣ Testing Offices API sin autenticación:');
    const noAuthResult = await testEndpoint('https://app.polizaderentas.com/api/offices');
    
    if (noAuthResult.error) {
        console.log(`   ❌ Error: ${noAuthResult.error}`);
    } else {
        console.log(`   📊 Status: ${noAuthResult.status}`);
        console.log(`   📄 Respuesta: ${noAuthResult.data}`);
    }
    
    console.log('\n📋 RESUMEN Y RECOMENDACIONES:');
    console.log('================================');
    
    if (!process.env.NEXT_PUBLIC_API_KEY || process.env.NEXT_PUBLIC_API_KEY === 'default-key') {
        console.log('❌ PROBLEMA PRINCIPAL: API Key no configurada correctamente');
        console.log('');
        console.log('🔧 SOLUCIÓN:');
        console.log('1. Abre tu archivo .env.local');
        console.log('2. Agrega o actualiza la línea:');
        console.log('   NEXT_PUBLIC_API_KEY=tu-api-key-real-aqui');
        console.log('3. Reinicia el servidor de desarrollo');
        console.log('');
        console.log('💡 NOTA: Contacta al administrador de la API para obtener una API key válida');
    } else {
        if (officesResult.status === 401) {
            console.log('❌ La API key configurada no es válida para el endpoint de offices');
            console.log('🔧 Verifica que la API key sea correcta y tenga permisos para offices');
        } else if (officesResult.status === 200) {
            console.log('✅ Todo funciona correctamente');
        }
    }
}

runDiagnostics().catch(console.error);
