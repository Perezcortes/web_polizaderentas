# 🏠 Póliza de Rentas - Web Application

## 🛠️ Stack Tecnológico

<div align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="Next.js" width="50" style="margin: 0 10px;"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="50" style="margin: 0 10px;"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" width="50" style="margin: 0 10px;"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" width="50" style="margin: 0 10px;"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="TailwindCSS" width="50" style="margin: 0 10px;"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" width="50" style="margin: 0 10px;"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" width="50" style="margin: 0 10px;"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" width="50" style="margin: 0 10px;"/>
</div>

## 📋 Descripción Técnica

Aplicación web desarrollada en Next.js 15.3.5 con App Router, TypeScript y React 19. El proyecto implementa una arquitectura moderna con componentes server-side rendering (SSR), static generation (SSG) y client-side rendering (CSR) según las necesidades de cada página.

**Dominio**: Sitio corporativo para empresa de servicios jurídicos inmobiliarios en México.

## 🏗️ Arquitectura del Proyecto

```
src/
├── app/                          # App Router (Next.js 13+)
│   ├── globals.css              # Estilos globales
│   ├── layout.tsx               # Layout principal con providers
│   ├── page.tsx                 # Homepage (Client Component)
│   ├── not-found.tsx           # Página 404 personalizada
│   ├── styles.css              # Estilos específicos de homepage
│   │
│   ├── about/                  # Página estática "Nosotros"
│   │   └── page.tsx
│   │
│   ├── api/                    # API Routes (Server-side)
│   │   └── contact/
│   │       └── route.ts        # POST endpoint para formulario
│   │
│   ├── aviso-de-privacidad/    # Página legal con layout personalizado
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── blog/                   # Sistema de blog con API externa
│   │   ├── blog-styles.css     # Estilos específicos del blog
│   │   ├── page.tsx            # Lista de posts (SSG)
│   │   └── [slug]/             # Dynamic routing para posts
│   │       ├── BlogLoading.tsx # Loading component
│   │       ├── BlogPostClient.tsx # Cliente para hidratación
│   │       ├── layout.tsx      # Layout específico para posts
│   │       ├── loading.tsx     # Loading UI
│   │       ├── page.tsx        # Post individual (SSG)
│   │       └── styles.css
│   │
│   ├── contacto/               # Formulario de contacto
│   │   ├── page.tsx           # Página con form y reCAPTCHA
│   │   └── style.css
│   │
│   ├── franquicias/           # Página de franquicias
│   │   ├── franquicias.module.css # CSS Modules
│   │   └── page.tsx
│   │
│   ├── services/              # Servicios con layout compartido
│   │   ├── layout.tsx         # Layout común para servicios
│   │   ├── page.tsx           # Página principal de servicios
│   │   ├── convenio_prevencion/
│   │   ├── convenio_transaccion/
│   │   ├── firma_electronica/
│   │   ├── investigacion_inquilinos/
│   │   └── poliza_juridica/
│   │
│   ├── sucursales/            # Sistema de ubicaciones
│   │   ├── page.tsx          # Lista de sucursales con mapa
│   │   ├── styles.css
│   │   └── [slug]/           # Páginas dinámicas por sucursal
│   │       └── page.tsx
│   │
│   └── terminos-y-condiciones/ # Página legal
│       ├── layout.tsx
│       └── page.tsx
│
├── components/                 # Componentes reutilizables
│   ├── Footer.tsx             # Footer global
│   ├── footer.css
│   ├── Navbar.tsx             # Navbar principal
│   ├── Navbar.css
│   ├── NavbarBlack.tsx        # Variante navbar oscuro
│   ├── NavbarBlack.css
│   ├── NavbarWrapper.tsx      # HOC para manejo de navbar
│   ├── PostMetadata.tsx       # Metadatos para posts
│   │
│   ├── blog/                  # Componentes específicos del blog
│   │   ├── BlogContent.tsx    # Renderizador de contenido
│   │   ├── BlogSearchBar.tsx  # Buscador de posts
│   │   ├── BlogSearchBar.css
│   │   ├── BlogSidebar.tsx    # Sidebar con filtros
│   │   ├── BlogSidebar.css
│   │   ├── RecentPosts.tsx    # Posts recientes
│   │   ├── RecentPosts.css
│   │   └── VideoEmbedder.tsx  # Embebido de videos
│   │
│   ├── contacto/
│   │   └── ContactForm.tsx    # Formulario con validación
│   │
│   ├── sucursales/
│   │   └── Mapa.module.css    # Estilos para mapas
│   │
│   └── ui/
│       └── Spinner.tsx        # Loading spinner reutilizable
│
├── hooks/                     # Custom React Hooks
│   ├── useHasMounted.ts      # Hook para hidratación
│   └── useReInitVisualScripts.ts # Re-inicialización de scripts
│
├── lib/                       # Utilidades y configuraciones
│   ├── api.ts                # Cliente API para blog
│   ├── utils.ts              # Utilidades generales
│   └── validateRecaptcha.ts  # Validación server-side reCAPTCHA
│
└── types/                     # Definiciones TypeScript
    ├── blog-types.ts         # Tipos para sistema de blog
    ├── office.ts             # Tipos para sucursales
    └── wowjs.d.ts           # Declaraciones para WOW.js
```

## 🔧 Dependencias Principales

### Core Framework
```json
{
  "next": "15.3.5",           // Framework React con App Router
  "react": "^19.0.0",         // Biblioteca UI con Concurrent Features
  "react-dom": "^19.0.0",     // DOM renderer
  "typescript": "^5"          // Superset tipado de JavaScript
}
```

### UI & Styling
```json
{
  "bootstrap": "^5.3.7",      // CSS framework responsivo
  "tailwindcss": "^4",        // Utility-first CSS (PostCSS)
  "swiper": "^11.2.10",       // Carruseles y sliders modernos
  "lucide-react": "^0.534.0", // Iconos SVG optimizados
  "react-icons": "^5.5.0"     // Colección de iconos
}
```

### Animation & Effects
```json
{
  "aos": "^2.3.4",           // Animate On Scroll
  "wowjs": "^1.1.3",         // Animaciones al hacer scroll
  "jarallax": "^2.2.1"       // Efectos parallax
}
```

### Forms & Validation
```json
{
  "zod": "^4.0.2",           // Schema validation TypeScript-first
  "sweetalert2": "^11.22.2", // Modales y alertas elegantes
  "react-countdown": "^2.3.6" // Componente countdown
}
```

### Backend & API
```json
{
  "nodemailer": "^7.0.5"     // Envío de correos SMTP
}
```

### Performance & Analytics
```json
{
  "@vercel/speed-insights": "^1.2.0" // Métricas de rendimiento
}
```

## ⚙️ Configuración Técnica

### Next.js Configuration (`next.config.ts`)

```typescript
const nextConfig = {
  // Optimización de imágenes externas
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-7d69744bfc94470c9f3257d29c3a67d3.r2.dev',
      },
    ],
  },
  
  // Ignorar ESLint en build (configurado para CI/CD)
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Features experimentales
  experimental: {
    optimizePackageImports: ['react-icons'], // Tree-shaking automático
    serverComponentsExternalPackages: [],    // Evita problemas SSR
  },
  
  // Compilador optimizado
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error'] // Mantener console.error en prod
    } : false,
  },
  
  // Headers de cache para blog
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
  
  // Rewrites para asegurar rutas correctas
  async rewrites() {
    return [
      {
        source: '/blog/:slug',
        destination: '/blog/:slug',
      },
    ];
  },
};
```

### TypeScript Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node.modules"]
}
```

## 🛠️ Setup de Desarrollo

### Prerrequisitos Técnicos
- **Node.js**: >= 18.17.0
- **npm**: >= 9.0.0 (o yarn/pnpm equivalente)
- **Git**: Para control de versiones

### Instalación

```bash
# 1. Clonar repositorio
git clone [repository-url]
cd perezcortes-web_polizaderentas

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local
```

### Variables de Entorno Requeridas

```bash
# API External Blog System
NEXT_PUBLIC_API_URL=http://localhost:8000/api/posts
NEXT_PUBLIC_API_KEY=your-api-key-here
NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT=https://pub-7d69744bfc94470c9f3257d29c3a67d3.r2.dev

# SMTP Configuration (Contact Form)
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=contacto@polizaderentas.com

# reCAPTCHA (Google)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-site-key
RECAPTCHA_SECRET_KEY=your-secret-key

# Analytics (Optional)
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=123456789
```

### Scripts de Desarrollo

```bash
# Desarrollo con Turbopack (recomendado)
npm run dev

# Desarrollo estándar
npm run dev -- --turbo=false

# Build de producción
npm run build

# Preview del build
npm run start

# Linting
npm run lint

# Linting con fix automático
npm run lint -- --fix
```

## 🔄 Sistema de Routing

### App Router Structure

El proyecto utiliza **App Router de Next.js 13+** con las siguientes características:

#### Páginas Estáticas (SSG)
- `/` - Homepage con slider y secciones informativas
- `/about` - Página corporativa
- `/services/*` - Páginas de servicios
- `/franquicias` - Información de franquicias

#### Páginas Dinámicas (SSG + ISR)
- `/blog` - Lista de posts con paginación
- `/blog/[slug]` - Posts individuales con ISR (60s revalidation)
- `/sucursales/[slug]` - Páginas dinámicas por sucursal

#### API Routes (Server-side)
- `/api/contact` - POST endpoint para formulario de contacto

#### Layouts Especiales
```typescript
// app/layout.tsx - Root Layout
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Configuración global: fonts, scripts, providers
}

// app/blog/[slug]/layout.tsx - Blog Layout
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Layout específico para posts
}
```

## 🎨 Arquitectura de Estilos

### Estrategia CSS Híbrida

1. **Global Styles** (`globals.css`)
   - Reset CSS y variables globales
   - Tipografía base
   - Utilidades generales

2. **Bootstrap 5.3.7**
   - Grid system responsivo
   - Componentes base
   - Utilities classes

3. **TailwindCSS 4**
   - Utility-first approach
   - Custom design tokens
   - Responsive breakpoints

4. **CSS Modules**
   - Componentes específicos
   - Encapsulación de estilos
   - Ej: `franquicias.module.css`

5. **Component Styles**
   - Estilos acoplados a componentes
   - Ej: `Navbar.css`, `footer.css`

### Organización de Assets

```
public/
├── css/                    # Estilos globales y librerías
│   ├── bootstrap.min.css   # Framework CSS
│   ├── style.css          # Estilos principales del tema
│   ├── estilos.css        # Estilos personalizados
│   └── colors/            # Esquemas de color
├── fonts/                 # Fuentes personalizadas
│   ├── fontawesome4/      # Icons v4 (legacy)
│   ├── fontawesome6/      # Icons v6 (current)
│   └── elegant_font/      # Fuente custom
├── images/               # Assets de imágenes
└── js/                   # Scripts legacy y plugins
    ├── plugins.js        # Plugins jQuery
    ├── designesia.js     # Tema base
    └── custom-*.js       # Scripts personalizados
```

## 🔌 Integración de APIs

### Blog System API

```typescript
// lib/api.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function getPosts(page = 1, perPage = 5) {
  const response = await fetch(`${API_URL}?page=${page}&per_page=${perPage}`, {
    headers: { 'Authorization': `Bearer ${API_KEY}` },
    next: { revalidate: 60 } // ISR cada 60 segundos
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  const result = await response.json();
  return {
    posts: result.data || result,
    totalPosts: result.total || result.length,
  };
}
```

### Contact Form API

```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const ContactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(5),
  'g-recaptcha-response': z.string().min(1),
})

export async function POST(req: NextRequest) {
  // Validación con Zod
  // reCAPTCHA validation
  // Envío de email con Nodemailer
  // Error handling
}
```

## 🎯 Componentes Clave

### Homepage Component (`app/page.tsx`)

```typescript
'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import { useReInitVisualScripts } from '../hooks/useReInitVisualScripts';

export default function Home() {
  useReInitVisualScripts(); // Re-init scripts jQuery legacy
  
  return (
    <>
      {/* Hero Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Parallax]}
        autoplay={{ delay: 3000 }}
        parallax={true}
        // ... configuración
      >
        {/* Slides */}
      </Swiper>
      
      {/* Secciones estáticas */}
      {/* Blog recientes */}
    </>
  );
}
```

### Custom Hooks

#### `useReInitVisualScripts.ts`
```typescript
// Hook para re-inicializar scripts jQuery legacy
export function useReInitVisualScripts() {
  useEffect(() => {
    // Re-init WOW.js animations
    // Re-init jQuery plugins
    // Re-init custom scripts
  }, []);
}
```

#### `useHasMounted.ts`
```typescript
// Hook para evitar problemas de hidratación
export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  
  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  return hasMounted;
}
```

## 📊 Performance & SEO

### Core Web Vitals Optimization

1. **Image Optimization**
   - Next.js `<Image>` component
   - WebP format prioritized
   - Lazy loading automático
   - Placeholder blur

2. **Font Optimization**
   - Google Fonts con `next/font`
   - Preload de fuentes críticas
   - Variable fonts para menor peso

3. **JavaScript Optimization**
   - Code splitting automático
   - Dynamic imports para componentes pesados
   - Tree shaking configurado

4. **CSS Optimization**
   - Critical CSS inline
   - PostCSS con autoprefixer
   - Purge de CSS no utilizado

### SEO Configuration

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: "Póliza de Rentas",
  description: "Nuestra tecnología revoluciona la protección jurídica...",
  metadataBase: new URL("https://polizaderentas.com"),
  openGraph: {
    images: "/almacenamiento/images/og.jpg",
    url: "https://polizaderentas.com/",
    type: "website",
  },
  keywords: "",
  authors: [],
};
```

## 🔒 Validación y Seguridad

### Form Validation con Zod

```typescript
const ContactFormSchema = z.object({
  name: z.string().min(1, "Nombre requerido"),
  email: z.string().email("Email inválido"),
  message: z.string().min(5, "Mensaje muy corto"),
  'g-recaptcha-response': z.string().min(1, "Captcha requerido"),
})
```

### reCAPTCHA Integration

```typescript
// lib/validateRecaptcha.ts
export async function validateRecaptcha(token: string, remoteip?: string) {
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY!,
      response: token,
      remoteip: remoteip || '',
    }),
  });
  
  const result = await response.json();
  return result.success && result.score > 0.5;
}
```

## 🚀 Deployment & CI/CD

### Vercel Configuration

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

### Environment Variables para Producción

```bash
# Build-time variables
NEXT_PUBLIC_API_URL=https://api.polizaderentas.com/api/posts
NEXT_PUBLIC_API_KEY=prod-api-key
NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT=https://pub-7d69744bfc94470c9f3257d29c3a67d3.r2.dev

# Runtime variables
SMTP_HOST=smtp.gmail.com
SMTP_USER=noreply@polizaderentas.com
SMTP_PASS=production-password
CONTACT_EMAIL=contacto@polizaderentas.com
RECAPTCHA_SECRET_KEY=production-secret-key
```

### Build Optimization

```bash
# Análisis del bundle
npm run build -- --analyze

# Build con información detallada
npm run build -- --debug

# Verificar tipos TypeScript
npx tsc --noEmit
```

## 🧪 Testing Strategy

### Recomendaciones para Testing

```bash
# Instalar dependencias de testing
npm install --save-dev @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom

# Configuración Jest
# jest.config.js
const nextJest = require('next/jest')
const createJestConfig = nextJest({
  dir: './',
})
```

## 🔍 Debugging & Troubleshooting

### Issues Comunes

1. **Hydration Mismatch**
   - Usar `useHasMounted()` hook
   - Verificar diferencias SSR vs CSR

2. **Scripts Legacy jQuery**
   - Usar `useReInitVisualScripts()` en componentes cliente
   - Verificar orden de carga de scripts

3. **Image Optimization**
   - Configurar dominios en `next.config.ts`
   - Verificar formatos soportados

4. **API Rate Limiting**
   - Implementar cache en `lib/api.ts`
   - Usar ISR para reducir llamadas

### Development Tools

```bash
# Logs detallados
DEBUG=next:* npm run dev

# Análisis de rendimiento
npm run build && npm run start -- --inspect

# Verificar rutas
npx next info
```

## 📚 Convenciones de Código

### Estructura de Archivos
- **PascalCase**: Componentes React (`ContactForm.tsx`)
- **camelCase**: Utilities y hooks (`useHasMounted.ts`)
- **kebab-case**: Páginas y carpetas (`aviso-de-privacidad/`)
- **UPPERCASE**: Constants (`API_URL`)

### Import Order
```typescript
// 1. React y Next.js
import React from 'react';
import { NextPage } from 'next';

// 2. Librerías externas
import { Swiper, SwiperSlide } from 'swiper/react';

// 3. Componentes internos
import Navbar from '@/components/Navbar';

// 4. Hooks y utilities
import { useReInitVisualScripts } from '@/hooks/useReInitVisualScripts';

// 5. Tipos
import type { BlogPost } from '@/types/blog-types';

// 6. Estilos
import './styles.css';
```

### TypeScript Guidelines
```typescript
// Usar interfaces para props
interface ComponentProps {
  title: string;
  isVisible?: boolean;
}

// Usar types para uniones
type Status = 'loading' | 'success' | 'error';

// Exportar tipos con componentes
export default Component;
export type { ComponentProps };
```

## 🤝 Contributing

### Workflow de Desarrollo

1. **Crear branch** desde `main`
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

2. **Desarrollar** con linting
   ```bash
   npm run lint -- --fix
   ```

3. **Testing** local
   ```bash
   npm run build
   npm run start
   ```

4. **Commit** con mensaje descriptivo
   ```bash
   git commit -m "feat: agregar componente ContactForm con validación"
   ```

5. **Push** y crear PR
   ```bash
   git push origin feature/nueva-funcionalidad
   ```

### Code Review Checklist

- [ ] TypeScript sin errores (`npx tsc --noEmit`)
- [ ] ESLint sin warnings (`npm run lint`)
- [ ] Build exitoso (`npm run build`)
- [ ] Performance no degradado
- [ ] Responsive design verificado
- [ ] SEO metadata actualizado si aplica

---

## 📞 Soporte Técnico

Para dudas técnicas sobre el código base:
- Revisar documentación de Next.js 13+ App Router
- Consultar TypeScript 5.x documentation
- Verificar compatibilidad de librerías en package.json

**⚡ Desarrollado con Next.js + TypeScript + React 19**
