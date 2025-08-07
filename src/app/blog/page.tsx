'use client';

import { Suspense } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import BlogContent from '../../components/blog/BlogContent';
import BlogSidebar from '../../components/blog/BlogSidebar';
import './blog-styles.css';

export default function BlogPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/posts';
  const apiKey = process.env.NEXT_PUBLIC_API_KEY || 'default-key';
  const cloudflareEndpoint = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT || 'https://default.endpoint.com';
  const postsPerPage = 5;

  return (
    <>
      <Head>
        {/* Título y descripción básica */}
        <title>Blog - Póliza de Rentas</title>
        <meta
          name="description"
          content="Artículos y noticias sobre arrendamiento inmobiliario. Mantente informado con Póliza de Rentas."
        />
        <meta
          name="keywords"
          content="blog, arrendamiento, inquilinos, propietarios, noticias inmobiliarias, renta segura"
        />
        <meta name="author" content="Póliza de Rentas" />

        {/* Canonical */}
        <link rel="canonical" href="https://polizaderentas.com/blog" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Blog - Póliza de Rentas" />
        <meta
          property="og:description"
          content="Artículos y noticias sobre arrendamiento inmobiliario. Mantente informado con Póliza de Rentas."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://polizaderentas.com/blog" />
        <meta
          property="og:image"
          content="https://polizaderentas.com/images/blog-banner.jpg"
        />
        <meta property="og:locale" content="es_MX" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Póliza de Rentas" />
        <meta
          name="twitter:description"
          content="Artículos y noticias sobre arrendamiento inmobiliario."
        />
        <meta
          name="twitter:image"
          content="https://polizaderentas.com/images/blog-banner.jpg"
        />

        {/* Icono */}
        <link rel="icon" href="/images/icon.png" type="image/png" sizes="32x32" />
      </Head>

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
        <div className="container" id="ir-a-blog">
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
    </>
  );
}