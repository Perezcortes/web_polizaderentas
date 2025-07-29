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
  // Configuración para mejorar estabilidad
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
};

module.exports = nextConfig;