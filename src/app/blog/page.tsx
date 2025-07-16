'use client';

import { Suspense } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import BlogContent from '../../components/BlogContent';
import BlogSidebar from '../../components/BlogSidebar';
import './blog-styles.css';

export default function BlogPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/posts';
  const apiKey = process.env.NEXT_PUBLIC_API_KEY || 'default-key';
  const cloudflareEndpoint = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT || 'https://default.endpoint.com';
  const postsPerPage = 5;

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
              type: 'fraction',
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
                <Suspense fallback={<div className="col-lg-8 col-md-6 mb10">Cargando contenido del blog...</div>}>
                  <BlogContent
                    postsPerPage={postsPerPage}
                    apiUrl={apiUrl}
                    apiKey={apiKey}
                    cloudflareEndpoint={cloudflareEndpoint}
                  />
                </Suspense>

                <BlogSidebar
                  apiUrl={apiUrl}
                  apiKey={apiKey}
                  cloudflareEndpoint={cloudflareEndpoint}
                />
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