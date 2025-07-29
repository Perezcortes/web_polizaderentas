import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '../../../types/blog-types';
import { VideoEmbedder } from '../../../components/VideoEmbedder';
import BlogPostClient from './BlogPostClient';
import './styles.css';

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/posts';
const apiKey = process.env.NEXT_PUBLIC_API_KEY || 'default-key';
const cloudflareEndpoint = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT || 'https://pub-7d69744bfc94470c9f3257d29c3a67d3.r2.dev';

// === Helpers ===
function truncateText(text: string, maxLength: number) {
  return text && text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('es-ES', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

// Función para obtener el post (servidor)
async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${apiUrl}/${slug}`, {
      headers: { 
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.data || data;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// Función para obtener posts recientes
async function getRecentPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${apiUrl}?limit=5`, {
      headers: { Authorization: `Bearer ${apiKey}` },
      cache: 'no-store'
    });

    if (!response.ok) return [];

    const data = await response.json();
    return data.data || data || [];
  } catch (error) {
    console.error('Error fetching recent posts:', error);
    return [];
  }
}

// Función para obtener posts relacionados
async function getRelatedPosts(slug: string): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${apiUrl}?limit=10&order=desc`, {
      headers: { Authorization: `Bearer ${apiKey}` },
      cache: 'no-store'
    });

    if (!response.ok) return [];

    const data = await response.json();
    const allPosts = data.data || data || [];
    const currentIndex = allPosts.findIndex((p: BlogPost) => p.slug === slug);
    return currentIndex !== -1
      ? allPosts.slice(currentIndex + 1, currentIndex + 3)
      : allPosts.slice(0, 2);
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}

// Generar metadatos dinámicos
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Artículo no encontrado - Póliza de Rentas',
      description: 'El artículo que buscas no está disponible.',
    };
  }

  const title = post.meta_titulo || post.titulo;
  const description = post.meta_descripcion || truncateText(post.contenido.replace(/<[^>]*>/g, ''), 160);
  const keywords = post.palabras_clave_ceo || 'blog, arrendamiento, inquilinos, propietarios, renta segura';
  const imageUrl = post.url_img 
    ? `${cloudflareEndpoint}/${post.url_img.replace(/^\//, '')}`
    : 'https://polizaderentas.com/images/blog-banner.jpg';
  const url = `https://polizaderentas.com/blog/${post.slug}`;

  return {
    title: `${title} - Póliza de Rentas`,
    description,
    keywords,
    authors: [{ name: 'Póliza de Rentas' }],
    
    // Open Graph (Facebook, WhatsApp)
    openGraph: {
      title: `${title} - Póliza de Rentas`,
      description,
      url,
      siteName: 'Póliza de Rentas',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      locale: 'es_MX',
      type: 'article',
      publishedTime: post.created_at,
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: `${title} - Póliza de Rentas`,
      description,
      images: [imageUrl],
      creator: '@polizaderentas',
    },

    // Metadatos adicionales
    alternates: {
      canonical: url,
    },
    
    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Obtener datos en paralelo
  const [post, recentPosts, relatedPosts] = await Promise.all([
    getPost(slug),
    getRecentPosts(),
    getRelatedPosts(slug)
  ]);

  // Si no se encuentra el post, mostrar 404
  if (!post) {
    notFound();
  }

  return (
    <>
      {/* JSON-LD para SEO estructurado */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.titulo,
            "description": post.meta_descripcion || truncateText(post.contenido.replace(/<[^>]*>/g, ''), 160),
            "image": post.url_img ? `${cloudflareEndpoint}/${post.url_img.replace(/^\//, '')}` : null,
            "author": {
              "@type": "Organization",
              "name": "Póliza de Rentas"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Póliza de Rentas",
              "logo": {
                "@type": "ImageObject",
                "url": "https://polizaderentas.com/images/logo.png"
              }
            },
            "datePublished": post.created_at,
            "dateModified": post.created_at,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://polizaderentas.com/blog/${post.slug}`
            }
          })
        }}
      />

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row gx-4">
                {/* Contenido principal */}
                <div className="col-lg-8 col-md-6 mb10">
                  {post.url_img && (
                    <Image
                      src={`${cloudflareEndpoint}/${post.url_img.replace(/^\//, '')}`}
                      alt={post.titulo}
                      width={800}
                      height={450}
                      className="img-fluid rounded shadow-sm"
                      style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
                      priority
                    />
                  )}

                  <h2 className="wow fadeInUp mt-5 mb20 color-dor" data-wow-delay=".2s">{post.titulo}</h2>

                  <div className="post-meta mb-3">
                    <span className="text-muted">Póliza de Rentas - {formatDate(post.created_at)}</span>
                  </div>

                  {/* Render dinámico con videos */}
                  <VideoEmbedder html={post.contenido} />

                  <hr className="my-4" />

                  {/* Artículos relacionados */}
                  {relatedPosts.length > 0 && (
                    <div id="related-posts" className="row mt-4">
                      <h2 className="color-dor mb-4">Artículos relacionados</h2>
                      <div className="row">
                        {relatedPosts.map(relatedPost => (
                          <div key={relatedPost.id} className="col-md-6 mb-4">
                            <Link href={`/blog/${relatedPost.slug}`}>
                              <div className="card h-100 related-post-card" style={{ cursor: 'pointer' }}>
                                <Image
                                  src={relatedPost.url_img
                                    ? `${cloudflareEndpoint}/${relatedPost.url_img.replace(/^\//, '')}`
                                    : '/images/default-blog.jpg'}
                                  width={400}
                                  height={200}
                                  className="card-img-top related-post-img"
                                  alt={relatedPost.titulo}
                                />
                                <div className="card-body">
                                  <h3 className="card-title h5">{truncateText(relatedPost.titulo, 50)}</h3>
                                  <p className="card-text"><small className="text-muted">{formatDate(relatedPost.created_at)}</small></p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Sidebar artículos recientes */}
                <div className="col-lg-4 col-md-6">
                  <div className="bg-dark py-2 ps-4">
                    <h2 className="text-white h3">Artículos recientes</h2>
                  </div>
                  <div className="py-2 ps-4 borde">
                    {recentPosts.length === 0 ? (
                      <p className="text-muted">No hay artículos recientes</p>
                    ) : (
                      recentPosts.map((recentPost, index) => {
                        if (recentPost.slug === slug) return null;

                        return (
                          <div key={recentPost.id}>
                            <Link
                              href={`/blog/${recentPost.slug}`}
                              className="row mb-3 recent-post-item"
                              style={{ cursor: 'pointer' }}
                            >
                              <div className="col-4">
                                <Image
                                  src={recentPost.url_img
                                    ? `${cloudflareEndpoint}/${recentPost.url_img.replace(/^\//, '')}`
                                    : '/images/default-thumb.jpg'}
                                  width={100}
                                  height={80}
                                  className="recent-post-image"
                                  alt={recentPost.titulo}
                                />
                              </div>
                              <div className="col-8">
                                <p className="recent-post-title">{truncateText(recentPost.titulo, 60)}</p>
                                <small className="recent-post-date">
                                  Póliza de Rentas - {formatDate(recentPost.created_at)}
                                </small>
                              </div>
                            </Link>
                            {index < recentPosts.length - 1 && <hr className="my-2" />}
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Componente cliente para scripts */}
      <BlogPostClient />
    </>
  );
}