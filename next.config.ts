/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'pub-7d69744bfc94470c9f3257d29c3a67d3.r2.dev', // Tu dominio de Cloudflare R2
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Evita que los errores ESLint bloqueen el build
  },
};

module.exports = nextConfig;
