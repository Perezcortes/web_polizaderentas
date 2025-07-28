import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { BlogPost } from '../../../types/blog-types';
import { VideoEmbedder } from '../../../components/VideoEmbedder';
import './styles.css';

export const dynamic = 'force-dynamic'; // Fuerza renderizado dinámico en Vercel

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/posts';
const apiKey = process.env.NEXT_PUBLIC_API_KEY || 'default-key';
const cloudflareEndpoint = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT || 'https://default.endpoint.com';

// === Fetch principal: Artículo ===
async function getPost(slug: string): Promise<BlogPost> {
  const res = await fetch(`${apiUrl}/${slug}`, {
    headers: { Authorization: `Bearer ${apiKey}` },
    cache: 'no-store' // Importante para datos dinámicos
  });

  if (!res.ok) throw new Error('Error al cargar el artículo');
  const data = await res.json();
  return data.data || data;
}

// === Artículos recientes ===
async function getRecentPosts(): Promise<BlogPost[]> {
  const res = await fetch(`${apiUrl}?limit=5`, {
    headers: { Authorization: `Bearer ${apiKey}` },
    cache: 'no-store'
  });

  if (!res.ok) throw new Error('Error al cargar artículos recientes');
  const data = await res.json();
  return data.data || data;
}

// === Todos los artículos (para relacionados) ===
async function getAllPosts(): Promise<BlogPost[]> {
  const res = await fetch(`${apiUrl}?limit=10&order=desc`, {
    headers: { Authorization: `Bearer ${apiKey}` },
    cache: 'no-store'
  });

  if (!res.ok) throw new Error('Error al cargar artículos relacionados');
  const data = await res.json();
  return data.data || data;
}

// === SEO Dinámico ===
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params;
  try {
    const post = await getPost(awaitedParams.slug);
    const description = post.meta_descripcion || truncateText(post.contenido.replace(/<[^>]*>/g, ''), 160);
    const imageUrl = post.url_img
      ? `${cloudflareEndpoint}/${post.url_img.replace(/^\//, '')}`
      : '/images/default-blog.jpg';

    return {
      title: `${post.meta_titulo || post.titulo} - Póliza de Rentas`,
      description,
      keywords: post.palabras_clave_ceo || 'blog, arrendamiento, inquilinos, propietarios',
      author: 'Póliza de Rentas',
      icons: {
        icon: '/images/icon.png'
      },
      openGraph: {
        title: post.titulo,
        description,
        type: 'article',
        url: `https://www.polizaderentas.com/blog/${post.slug}`,
        images: [{ url: imageUrl, width: 1200, height: 630, alt: post.titulo }],
        locale: 'es_ES',
        siteName: 'Póliza de Rentas',
      },
      twitter: {
        card: 'summary_large_image',
        title: post.titulo,
        description,
        // No hay cuenta oficial de Twitter listada, se omite el campo `site`
        images: [imageUrl],
      },
      metadataBase: new URL('https://www.polizaderentas.com'),
    };
  } catch (error) {
    return {
      title: 'Artículo - Póliza de Rentas',
      description: 'Blog sobre arrendamiento, inquilinos y propietarios',
      openGraph: {
        title: 'Blog - Póliza de Rentas',
        description: 'Artículos útiles para propietarios e inquilinos',
        type: 'website',
        url: 'https://www.polizaderentas.com/blog',
        images: ['/images/default-blog.jpg'],
        siteName: 'Póliza de Rentas',
      }
    };
  }
}

// === Helpers ===
function truncateText(text: string, maxLength: number) {
  return text && text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('es-ES', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

// === Página Principal ===
export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params;
  const slug = awaitedParams.slug;

  try {
    const [post, recentPosts, allPosts] = await Promise.all([
      getPost(slug),
      getRecentPosts(),
      getAllPosts()
    ]);

    const currentIndex = allPosts.findIndex((p) => p.slug === slug);
    const relatedPosts = currentIndex !== -1
      ? allPosts.slice(currentIndex + 1, currentIndex + 3)
      : allPosts.slice(0, 2);

    return (
      <>
        {/* Scripts externos */}
        <Script id="jquery-js" src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />

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

                    <h3 className="wow fadeInUp mt-5 mb20 color-dor" data-wow-delay=".2s">{post.titulo}</h3>

                    <div className="post-meta mb-3">
                      <span className="text-muted">Póliza de Rentas - {formatDate(post.created_at)}</span>
                    </div>

                    {/* Render dinámico con videos */}
                    <VideoEmbedder html={post.contenido} />

                    <hr className="my-4" />

                    {/* Artículos relacionados */}
                    {relatedPosts.length > 0 && (
                      <div id="related-posts" className="row mt-4">
                        <h4 className="color-dor mb-4">Artículos relacionados</h4>
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
                                    <h5 className="card-title">{truncateText(relatedPost.titulo, 50)}</h5>
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
                      <h3 className="text-white">Artículos recientes</h3>
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

        {/* Scripts personalizados */}
        <Script src="/js/plugins.js" strategy="afterInteractive" />
        <Script src="/js/designesia.js" strategy="afterInteractive" />
        <Script src="/js/swiper.js" strategy="afterInteractive" />
        <Script src="/js/custom-marquee.js" strategy="afterInteractive" />
        <Script src="/js/custom-swiper-1.js" strategy="afterInteractive" />
      </>
    );
  } catch (error) {
    notFound();
  }
}