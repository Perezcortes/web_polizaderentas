'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import '../blog-styles.css';

interface BlogPost {
  id: number;
  titulo: string;
  slug: string;
  contenido: string;
  url_img: string | null;
  created_at: string;
}

export default function PostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Configuración desde variables de entorno
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/posts';
  const apiKey = process.env.NEXT_PUBLIC_API_KEY || 'default-key';
  const cloudflareEndpoint = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT || 'https://default.endpoint.com';

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        setLoading(true);

        // Fetch post details
        const postResponse = await fetch(`${apiUrl}/${slug}`, {
          headers: { 'Authorization': `Bearer ${apiKey}` }
        });

        if (!postResponse.ok) throw new Error('Error al cargar el artículo');
        const postData = await postResponse.json();
        setPost(postData.data || postData);

        // Fetch recent posts
        const recentResponse = await fetch(`${apiUrl}?limit=5`, {
          headers: { 'Authorization': `Bearer ${apiKey}` }
        });

        if (!recentResponse.ok) throw new Error('Error al cargar artículos recientes');
        const recentData = await recentResponse.json();
        setRecentPosts(recentData.data || recentData);

        // Fetch related posts (next 2 posts)
        const allPostsResponse = await fetch(`${apiUrl}?limit=10&order=desc`, {
          headers: { 'Authorization': `Bearer ${apiKey}` }
        });

        if (!allPostsResponse.ok) throw new Error('Error al cargar artículos relacionados');
        const allPostsData = await allPostsResponse.json();
        const allPosts = allPostsData.data || allPostsData;

        // Find current post index
        let currentIndex = -1;
        for (let i = 0; i < allPosts.length; i++) {
          if (allPosts[i].slug === slug) {
            currentIndex = i;
            break;
          }
        }

        // Get next 2 posts
        if (currentIndex !== -1) {
          setRelatedPosts(allPosts.slice(currentIndex + 1, currentIndex + 3));
        } else {
          setRelatedPosts(allPosts.slice(0, 2));
        }

        setLoading(false);
      } catch (err) {
        console.error('Error fetching post data:', err);
        setError('Error al cargar el artículo. Por favor intenta más tarde.');
        setLoading(false);
      }
    };

    fetchPostData();
  }, [slug, apiUrl, apiKey]);

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

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-2">Cargando artículo...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center py-5">
        {error}
      </div>
    );
  }

  if (!post) {
    return (
      <div className="alert alert-warning text-center py-5">
        No se encontró el artículo solicitado.
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.titulo} - Póliza de Rentas</title>
        <meta name="description" content={truncateText(post.contenido.replace(/<[^>]*>/g, ''), 160)} />
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

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row gx-4">
                {/* Main Content */}
                <div className="col-lg-8 col-md-6 mb10">
                  {post.url_img && (
                    <Image
                      src={`${cloudflareEndpoint}/${post.url_img.replace(/^\//, '')}`}
                      alt={post.titulo}
                      width={800}
                      height={450}
                      className="img-fluid rounded shadow-sm"
                      style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
                    />
                  )}

                  <h3 className="wow fadeInUp mt-5 mb20 color-dor" data-wow-delay=".2s">{post.titulo}</h3>

                  <div className="post-meta mb-3">
                    <span className="text-muted">Póliza de Rentas - {formatDate(post.created_at)}</span>
                  </div>

                  <div
                    className="post-content wow fadeInUp"
                    dangerouslySetInnerHTML={{ __html: post.contenido }}
                  />

                  <hr className="my-4" />

                  {/* Related Posts */}
                  {relatedPosts.length > 0 && (
                    <div id="related-posts" className="row mt-4">
                      <h4 className="color-dor mb-4">Artículos relacionados</h4>
                      <div className="row">
                        {relatedPosts.map(relatedPost => {
                          const imageUrl = relatedPost.url_img
                            ? `${cloudflareEndpoint}/${relatedPost.url_img.replace(/^\//, '')}`
                            : '/images/default-blog.jpg';

                          return (
                            <div key={relatedPost.id} className="col-md-6 mb-4">
                              <div
                                className="card h-100 related-post-card"
                                onClick={() => window.location.href = `/blog/${relatedPost.slug}`}
                                style={{ cursor: 'pointer' }}
                              >
                                <Image
                                  src={imageUrl}
                                  width={400}
                                  height={200}
                                  className="related-post-img"
                                  alt={relatedPost.titulo}
                                />
                                <div className="card-body">
                                  <h5 className="card-title">{truncateText(relatedPost.titulo, 50)}</h5>
                                  <p className="card-text"><small className="text-muted">{formatDate(relatedPost.created_at)}</small></p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Sidebar */}
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

                        const imageUrl = recentPost.url_img
                          ? `${cloudflareEndpoint}/${recentPost.url_img.replace(/^\//, '')}`
                          : '/images/default-thumb.jpg';

                        return (
                          <div key={recentPost.id}>
                            <div
                              className="row mb-3 recent-post-item"
                              style={{ cursor: 'pointer' }}
                              onClick={() => window.location.href = `/blog/${recentPost.slug}`}
                            >
                              <div className="col-4">
                                <Image
                                  src={imageUrl}
                                  width={100}
                                  height={80}
                                  className="recent-post-image"
                                  alt={recentPost.titulo}
                                />
                              </div>
                              <div className="col-8">
                                <p className="recent-post-title">{truncateText(recentPost.titulo, 60)}</p>
                                <small className="recent-post-date">Póliza de Rentas - {formatDate(recentPost.created_at)}</small>
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