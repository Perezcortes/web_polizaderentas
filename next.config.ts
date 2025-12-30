import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-7d69744bfc94470c9f3257d29c3a67d3.r2.dev",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      
      {
        protocol: "https",
        hostname: "app.polizaderentas.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
  serverExternalPackages: [],
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error"],
          }
        : false,
  },
  async headers() {
    // CORRECCIÓN AQUI ABAJO EN frame-src
    const cspHeader = `
      default-src 'self';
      
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google-analytics.com https://www.googletagmanager.com https://connect.facebook.net https://code.jquery.com https://tracker.metricool.com https://www.google.com https://www.gstatic.com https://va.vercel-scripts.com;
      
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      
      img-src 'self' blob: data: https://*.r2.dev https://www.facebook.com https://placehold.co https://app.polizaderentas.com https://tracker.metricool.com https://*.google.com https://*.google.com.mx https://www.google-analytics.com;
      
      font-src 'self' data: https://fonts.gstatic.com;
      
      connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://tracker.metricool.com https://app.polizaderentas.com https://www.google.com https://vitals.vercel-insights.com;
      
      frame-src 'self' https://www.google.com https://www.youtube.com https://www.openstreetmap.org;
      
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      upgrade-insecure-requests;
    `;

    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\s{2,}/g, " ").trim(),
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/blog/:slug*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=1, stale-while-revalidate=59",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/blog/:slug",
        destination: "/blog/:slug",
      },
    ];
  },
};

export default nextConfig;