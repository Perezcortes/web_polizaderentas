/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-7d69744bfc94470c9f3257d29c3a67d3.r2.dev',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Configuración para mejorar estabilidad en rutas dinámicas
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
  // Evita problemas con dependencias externas (migrado desde experimental.serverComponentsExternalPackages)
  serverExternalPackages: [],
  // Configuración específica para evitar problemas de hidratación
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error']
    } : false,
  },
  // Configuración de headers para mejorar cache
  async headers() {
    return [
      {
        source: '/blog/:slug*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=1, stale-while-revalidate=59',
          },
        ],
      },
    ];
  },
  // Configuración de rewrites para asegurar rutas correctas
  async rewrites() {
    return [
      {
        source: '/blog/:slug',
        destination: '/blog/:slug',
      },
    ];
  },
};

module.exports = nextConfig;