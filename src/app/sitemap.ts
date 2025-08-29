import { MetadataRoute } from 'next'
import { getPosts } from '../lib/api'

const BASE_URL = 'https://polizaderentas.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Rutas estáticas
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/servicios`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/servicios/poliza_juridica`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/servicios/investigacion_inquilinos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/servicios/firma_electronica`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/servicios/convenio_prevencion`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/servicios/convenio_transaccion`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/franquicias`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/sucursales`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/aviso-de-privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terminos-y-condiciones`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  try {
    // Obtener posts dinámicamente
    const { posts } = await getPosts(1, 100) // Obtener hasta 100 posts
    
    const blogRoutes: MetadataRoute.Sitemap = posts.map((post: any) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.updated_at ? new Date(post.updated_at) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))

    return [...staticRoutes, ...blogRoutes]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    // Si falla la API, devolver solo rutas estáticas
    return staticRoutes
  }
}