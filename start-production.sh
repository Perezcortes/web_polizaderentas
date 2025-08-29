#!/bin/bash
# Script para iniciar la aplicación en producción

export NODE_ENV=production
export PORT=${PORT:-3000}

echo "Iniciando Póliza de Rentas en modo producción..."
echo "Puerto: $PORT"
echo "Entorno: $NODE_ENV"

npm start
