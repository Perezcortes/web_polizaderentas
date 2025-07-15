'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { useRouter, useSearchParams } from 'next/navigation';
import './blog-styles.css';

// Extiende la interfaz Window para incluir jQuery y $
declare global {
  interface Window {
    jQuery?: any;
    $?: any;
  }
}

interface BlogPost {
  id: number;
  titulo: string;
  slug: string;
  contenido: string;
  url_img: string | null;
  created_at: string;
}

export default function BlogPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1');
  const postsPerPage = 5;

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [error, setError] = useState<string | null>(null);

  // Configuración desde variables de entorno
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/posts';
  const apiKey = process.env.NEXT_PUBLIC_API_KEY || 'default-key';
  const cloudflareEndpoint = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT || 'https://default.endpoint.com';

  const truncateHtml = (html: string, maxLength: number) => {
    if (!html) return '';

    // Primero, elimina las etiquetas HTML para calcular la longitud del texto real
    const textContent = html.replace(/<[^>]*>/g, '');
    if (textContent.length <= maxLength) return html;

    // Ahora procesa el HTML para truncarlo correctamente
    let result = '';
    let textCount = 0;
    let inTag = false;
    let tagBuffer = '';
    let openTags: string[] = [];

    for (let i = 0; i < html.length && textCount < maxLength; i++) {
      const char = html[i];

      if (char === '<') {
        inTag = true;
        tagBuffer = char;
        continue;
      }

      if (inTag) {
        tagBuffer += char;
        if (char === '>') {
          inTag = false;
          result += tagBuffer;

          // Manejo de etiquetas
          const isClosing = tagBuffer.startsWith('</');
          const tagNameMatch = tagBuffer.match(/<\/?([^\s>]+)/);
          if (tagNameMatch) {
            const tagName = tagNameMatch[1].toLowerCase();
            if (isClosing) {
              // Cerrar la última etiqueta abierta correspondiente
              const lastOpenTag = openTags.pop();
              if (lastOpenTag !== tagName) {
                // Esto indica HTML mal formado, pero lo manejamos
                openTags = openTags.filter(t => t !== tagName);
              }
            } else if (!tagBuffer.endsWith('/>')) {
              // Es una etiqueta de apertura (no auto-cerrada)
              openTags.push(tagName);
            }
          }
        }
        continue;
      }

      // Contenido de texto
      result += char;
      textCount++;
    }

    // Añade el indicador de truncado
    result += ' [...]';

    // Cierra las etiquetas que quedaron abiertas
    while (openTags.length > 0) {
      result += `</${openTags.pop()}>`;
    }

    return result;
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        // Fetch main posts with pagination
        const postsResponse = await fetch(
          `${apiUrl}?page=${currentPage}&per_page=${postsPerPage}`,
          {
            headers: { 'Authorization': `Bearer ${apiKey}` }
          }
        );

        if (!postsResponse.ok) throw new Error('Error al cargar publicaciones');
        const postsData = await postsResponse.json();
        setPosts(postsData.data);
        setTotalPosts(postsData.total);

        // Fetch recent posts
        const recentResponse = await fetch(
          `${apiUrl}?per_page=5`,
          {
            headers: { 'Authorization': `Bearer ${apiKey}` }
          }
        );

        if (!recentResponse.ok) throw new Error('Error al cargar publicaciones recientes');
        const recentData = await recentResponse.json();
        setRecentPosts(recentData.data);

        setLoading(false);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Error al cargar las publicaciones. Por favor intenta más tarde.');
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage, apiUrl, apiKey]);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const truncateText = (text: string, maxLength: number) => {
    if (!text) return '';
    return text.length > maxLength
      ? text.substring(0, maxLength) + '...'
      : text;
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    if (totalPages <= 1) return null;

    const handlePageChange = (page: number) => {
      router.push(`/blog?page=${page}`);
    };

    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    return (
      <div className="pagination">
        {/* Botón Anterior */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className={currentPage <= 1 ? 'disabled' : ''}
        >
          &laquo; Anterior
        </button>

        {/* Primera página y elipsis si es necesario */}
        {startPage > 1 && (
          <>
            <button onClick={() => handlePageChange(1)}>1</button>
            {startPage > 2 && <span className="ellipsis">...</span>}
          </>
        )}

        {/* Números de página visibles */}
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(page => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}

        {/* Última página y elipsis si es necesario */}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="ellipsis">...</span>}
            <button onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
          </>
        )}

        {/* Botón Siguiente */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className={currentPage >= totalPages ? 'disabled' : ''}
        >
          Siguiente &raquo;
        </button>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Blog - Póliza de Rentas</title>
        <meta name="description" content="Artículos y noticias sobre arrendamiento inmobiliario. Mantente informado con Póliza de Rentas." />
        <meta name="keywords" content="blog, arrendamiento, inquilinos, propietarios, noticias inmobiliarias" />
        <meta name="author" content="Póliza de Rentas" />
        <link rel="icon" href="/images/icon.png" type="image/gif" sizes="16x16" />

        {/* Preload de recursos críticos */}
        <link rel="preload" href="https://code.jquery.com/jquery-3.6.0.min.js" as="script" />
        <link rel="preload" href="/css/bootstrap.min.css" as="style" />
        <link rel="preload" href="/css/style.css" as="style" />

        {/* Hojas de estilo */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/plugins.css" />
        <link rel="stylesheet" href="/css/swiper.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/coloring.css" />
        <link rel="stylesheet" href="/css/colors/scheme-01.css" />

        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

        {/* Meta Pixel Code */}
        <script dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;
              n=f.fbq=function(){
                n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)
              };
              if(!f._fbq)f._fbq=n;
              n.push=n;
              n.loaded=!0;
              n.version='2.0';
              n.queue=[];
              t=b.createElement(e);
              t.async=!0;
              t.src=v;
              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '217583817249537');
            fbq('track', 'PageView');
          `
        }} />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=217583817249537&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3HT5BR97DT"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3HT5BR97DT');
          `
        }} />
      </Head>

      {/* Cargar jQuery con mayor control */}
      <Script
        id="jquery-js"
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.jQuery && !window.$) {
            window.$ = window.jQuery;
          }
        }}
      />

      {/* Hero Slider con paginación numérica */}
      <section className="text-light no-top no-bottom position-relative z-1000">
        <div className="v-center">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, Parallax]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            direction="horizontal"
            loop={true}
            speed={1200}
            parallax={true}
            pagination={{
              el: '.swiper-pagination',
              type: 'fraction', // Cambiado a tipo 'fraction' para mostrar números
              clickable: true
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            className="swiper"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="swiper-inner" style={{
                backgroundImage: 'url(/images/slider/banner-1.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '80vh'
              }}>
                <div className="sw-caption">
                  <div className="container">
                    <div className="row gx-5 align-items-center">
                      <div className="col-lg-7 mb-sm-30">
                        <h1 className="slider-title">Blog</h1>
                        <p className="fs-4 wow fadeInRight">
                          Artículos y noticias sobre arrendamiento inmobiliario
                        </p>
                        <Link className="btn-main mb10 mt20" href="/sucursales">Sucursales</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sw-overlay s2"></div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="swiper-inner" style={{
                backgroundImage: 'url(/images/slider/banner-4.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '80vh'
              }}>
                <div className="sw-caption">
                  <div className="container">
                    <div className="row gx-5 align-items-center">
                      <div className="col-lg-7 mb-sm-30">
                        <h2 className="slider-title">Únete a Nuestra Red de Franquicias</h2>
                        <p className="fs-4 wow fadeInRight">
                          Conviértete en parte de una marca líder en protección de
                          patrimonios. Descubre las ventajas de ser franquiciado de Póliza
                          de Rentas.
                        </p>
                        <Link className="btn-main mb10" href="/franquicias">Conoce el programa de Franquicias</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sw-overlay s2"></div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="swiper-inner" style={{
                backgroundImage: 'url(/images/slider/banner-5.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '80vh'
              }}>
                <div className="sw-caption">
                  <div className="container">
                    <div className="row gx-5 align-items-center">
                      <div className="col-lg-7 mb-sm-30">
                        <h2 className="slider-title">Confía en Nuestra Experiencia</h2>
                        <p className="fs-4 wow fadeInRight">
                          Nuestros clientes confían en nosotros para asegurar su
                          tranquilidad. Descubre por qué somos la opción de confianza.
                        </p>
                        <Link className="btn-main mb10 mt20" href="/sucursales">Sucursales</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sw-overlay s2"></div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev d-block d-lg-none mt-60"></div>
          <div className="swiper-button-next d-block d-lg-none mt-60"></div>
          <div className="swiper-button-prev d-none d-lg-block"></div>
          <div className="swiper-button-next d-none d-lg-block"></div>
          <div className="swiper-scrollbar"></div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row gx-4">
                {/* Main Blog Content */}
                <div className="col-lg-8 col-md-6 mb10">
                  {loading && (
                    <div className="text-center py-5">
                      <div
                        className="spinner-border"
                        style={{
                          width: '3rem',
                          height: '3rem',
                          borderWidth: '0.25em',
                          borderColor: '#bdad5d transparent #bdad5d transparent'
                        }}
                        role="status"
                      >
                        <span className="visually-hidden">Cargando...</span>
                      </div>
                      <p className="mt-2" style={{ color: '#bdad5d' }}>Cargando publicaciones...</p>
                    </div>
                  )}

                  {error && (
                    <div className="text-center py-5">
                      <p className="text-danger">{error}</p>
                    </div>
                  )}

                  {!loading && !error && posts.length === 0 && (
                    <div className="text-center py-5">
                      <p>No hay publicaciones disponibles en este momento.</p>
                    </div>
                  )}

                  {posts.map((post) => {
                    const imageUrl = post.url_img
                      ? `${cloudflareEndpoint}/${post.url_img.replace(/^\//, '')}`
                      : '/images/default-blog.jpg';

                    return (
                      <div key={post.id} className="mb-5 post-item wow fadeInUp">
                        <Image
                          src={imageUrl}
                          alt={post.titulo}
                          width={800}
                          height={450}
                          className="img-fluid rounded shadow-sm"
                          style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
                        />

                        <h3 className="mt-4 mb-20 enlace-blog" data-wow-delay=".2s">
                          <Link href={`/blog/${post.slug}`} style={{ color: 'rgba(187,161,85)' }}>
                            {post.titulo}
                          </Link>
                        </h3>

                        <div className="post-meta mb-3">
                          <span className="text-muted">Póliza de Rentas - {formatDate(post.created_at)}</span>
                        </div>

                        <div
                          className="post-content"
                          dangerouslySetInnerHTML={{ __html: truncateHtml(post.contenido, 200) }}
                        />

                        <Link href={`/blog/${post.slug}`} className="read-more-btn mt-2">
                          LEER MÁS
                        </Link>
                        <hr className="my-4" />
                      </div>
                    );
                  })}

                  {renderPagination()}
                </div>

                {/* Sidebar */}
                <div className="col-lg-4 col-md-6">
                  <div className="bg-dark py-2 ps-4">
                    <h3 className="text-white">Artículos recientes</h3>
                  </div>
                  <div className="py-2 ps-4 borde">
                    {loading ? (
                      <div className="text-center py-3">
                        <div
                          className="spinner-border spinner-border-sm"
                          style={{
                            width: '1.5rem',
                            height: '1.5rem',
                            borderWidth: '0.2em',
                            borderColor: '#bdad5d transparent #bdad5d transparent'
                          }}
                          role="status"
                        >
                          <span className="visually-hidden">Cargando...</span>
                        </div>
                      </div>
                    ) : recentPosts.length === 0 ? (
                      <p className="text-muted">No se pudieron cargar los artículos recientes</p>
                    ) : (
                      recentPosts.map((post, index) => {
                        const imageUrl = post.url_img
                          ? `${cloudflareEndpoint}/${post.url_img.replace(/^\//, '')}`
                          : '/images/default-thumb.jpg';

                        return (
                          <div key={post.id}>
                            <div
                              className="row mb-3 recent-post-item"
                              style={{ cursor: 'pointer' }}
                              onClick={() => router.push(`/blog/${post.slug}`)}
                            >
                              <div className="col-4">
                                <Image
                                  src={imageUrl}
                                  alt={post.titulo}
                                  width={100}
                                  height={80}
                                  className="img-fluid rounded"
                                  style={{ height: '80px', width: '100%', objectFit: 'cover' }}
                                />
                              </div>
                              <div className="col-8">
                                <Link href={`/blog/${post.slug}`} style={{ color: 'rgb(101, 85, 36)' }}>
                                  <p className="mb-1">{truncateText(post.titulo, 60)}</p>
                                </Link>
                                <small className="text-muted">Póliza de Rentas - {formatDate(post.created_at)}</small>
                              </div>
                            </div>
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

      {/* Scripts adicionales */}
      <Script src="/js/plugins.js" strategy="afterInteractive" />
      <Script src="/js/designesia.js" strategy="afterInteractive" />
      <Script src="/js/swiper.js" strategy="afterInteractive" />
      <Script src="/js/custom-marquee.js" strategy="afterInteractive" />
      <Script src="/js/custom-swiper-1.js" strategy="afterInteractive" />
    </>
  );
}