'use client';

// Extiende la interfaz Window para incluir jQuery y $
declare global {
  interface Window {
    jQuery?: any;
    $?: any;
  }
}

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
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FranchisesPage() {

  return (
    <>
      <Head>
        <title>Franquicias - Póliza de Rentas</title>
        <meta name="description" content="Invierte en el servicio jurídico de mayor crecimiento en México con nuestras franquicias" />
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
        <link rel="stylesheet" href="/css/estilos.css" />
        <link rel="stylesheet" href="/css/colors/scheme-01.css" />

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

      {/* Hero Slider */}
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
            className="swiper"
          >
            <SwiperSlide>
              {/* Versión desktop */}
              <div className="swiper-inner d-none d-sm-block" style={{
                backgroundImage: 'url(/images/slider/franquicias.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '80vh'
              }}>
                <div className="sw-caption">
                  <div className="container">
                    <div className="row gx-5 align-items-center">
                      <div className="col-lg-7 mb-sm-30">
                        <h1 className="slider-title">Invierte en el servicio jurídico de mayor crecimiento en México.</h1>
                        <p className="fs-4 wow fadeInRight">
                          Agenda una sesión Informativa personalizada con nuestro Director de Expansión y conoce los detalles de nuestro modelo de negocio.
                        </p>
                        <div className="d-flex">
                          <a className="btn-main me-1" href="https://formulario.franquicias.polizaderentas.com/" target="_blank" rel="noopener noreferrer">
                            Inicia tu proceso
                          </a>
                          <Link className="btn-line" href="#conoce">Conoce más</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sw-overlay s2"></div>
              </div>

              {/* Versión móvil */}
              <div className="swiper-inner d-block d-sm-none" style={{
                backgroundImage: 'url(/images/slider/franquicias-movil.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '80vh'
              }}>
                <div className="sw-caption">
                  <div className="container">
                    <div className="row gx-5 align-items-center">
                      <div className="col-lg-7 mb-sm-30">
                        <h1 className="slider-title">Invierte en el servicio jurídico de mayor crecimiento en México.</h1>
                        <p className="fs-4 wow fadeInRight">
                          Agenda una sesión Informativa personalizada con nuestro Director de Expansión y conoce los detalles de nuestro modelo de negocio.
                        </p>
                        <a className="btn-main mt20 me-1" href="https://formulario.franquicias.polizaderentas.com/" target="_blank" rel="noopener noreferrer">
                          Inicia tu proceso
                        </a>
                        <Link className="btn-line mt20" href="#conoce">
                          Conoce más
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sw-overlay s2"></div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="swiper-pagination"></div>
          <div className="swiper-scrollbar"></div>
        </div>
      </section>

      {/* Sección Qué es */}
      <section className="no-top mt-5" id="conoce">
        <div className="container">
          <div className="row align-items-center">
            {/* Texto */}
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5" style={{ textAlign: 'justify' }}>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                  lineHeight: '1.2',
                  marginBottom: '1rem',
                }}
              >
                ¿Qué es una Póliza Jurídica?
              </h2>
              <p>
                Es un contrato de prestación de servicios jurídicos que protege a un propietario e
                inquilino en un proceso de arrendamiento.
              </p>
              <p>
                Contamos con presencia en todo el país. Regístrate para conocer los detalles sobre
                nuestras franquicias y únete hoy mismo.
              </p>
              <a
                className="btn-main mb10 mt20"
                href="https://formulario.franquicias.polizaderentas.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inicia tu proceso
              </a>
            </div>

            {/* Imagen */}
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <img
                src="/images/franquicias/img-1.png"
                alt="franquicias"
                className="img-fluid"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>


      {/* Sección Modelo de negocio */}
      <section className="no-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12 mt-5 text-center">
              <h2>¿Porqué es un modelo de negocio de crecimiento exponencial?</h2>
              <Image
                src="/images/franquicias/img-2.png"
                alt="franquicias"
                width={1160}
                height={484}
                className="img-fluid"
              />
              <a
                className="btn-main mb10 mt20"
                href="https://formulario.franquicias.polizaderentas.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inicia tu proceso
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Qué incluye */}
      <section className="bg-dark-1 text-light">
        <div className="container">
          <div className="row align-items-center gx-5">
            <div className="col-lg-6">
              <h2 className="wow fadeInUp" data-wow-delay=".2s">
                ¿Qué incluye la <br /> franquicia?
              </h2>
              <ul>
                <li>Licenciamiento de la Marca</li>
                <li>
                  Acceso a la plataforma de gestión para todos tus colaboradores, clientes e inmobiliarias.
                </li>
                <li>
                  Micrositio de la sucursal y de todos tus colaboradores.
                </li>
                <li>Manuales y políticas por escrito.</li>
                <li>
                  Estrategias de Marketing a nivel nacional. Webinars, Blogs, Contenido en Redes Sociales.
                </li>
                <li>Capacitación y seguimiento constante a todos sus ejecutivos.</li>
                <li>
                  Capacitación y asesoría permanente en materia comercial, jurídica y de marketing.
                </li>
                <li>Reportes y evaluación de tu sucursal.</li>
              </ul>

              {/* <hr className="s2" /> */}
              <div className="spacer-10"></div>
              <a
                className="btn-main mb10 mt20"
                href="https://formulario.franquicias.polizaderentas.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inicia tu proceso
              </a>
            </div>

            <div className="col-lg-6 mb-sm-20 position-relative">
              <div className="images-deco-1">
                <img
                  src="/images/misc/img-3.png"
                  className="d-img-1 wow zoomIn img-fluid"
                  data-wow-delay="0s"
                  alt="franquicias"
                />
                <img
                  src="/images/misc/2.png"
                  className="d-img-2 wow zoomIn"
                  data-wow-delay=".5s"
                  data-jarallax-element="100"
                  alt="logo"
                />
                <div
                  className="d-img-3 bg-color wow zoomIn"
                  data-wow-delay=".6s"
                  data-jarallax-element="-50"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Cuánto ganar */}
      <section className="no-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 mt-5 text-center">
              <h2>
                ¿Cuánto puedo ganar con <br /> mi franquicia de Póliza de Rentas?
              </h2>
              <img
                src="images/franquicias/img-4.png"
                alt="franquicias"
                className="img-fluid"
              />
            </div>

            <div className="row col-lg-12 col-md-12 col-sm-12 mt-5 text-justify">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <h2>
                  Tecnología para crear una experiencia única para todos tus clientes,
                  inmobiliarias, propietarios e inquilinos
                </h2>
                <p>
                  Digitalización de todos nuestros procesos. <br />
                  Aplicación digital para las inmobiliarias <br />
                  Herramientas digitales para investigación de <br />
                  inquilinos.
                </p>
                <a
                  className="btn-main mb10 mt20"
                  href="https://formulario.franquicias.polizaderentas.com/"
                >
                  Inicia tu proceso
                </a>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <img
                  src="images/franquicias/img-5.png"
                  alt="franquicias"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección final con CTA */}
      <div className="row container-fluid" style={{ backgroundColor: '#595959' }}>
        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Image
              src="/images/franquicias/img-6.png"
              alt="franquicias"
              width={912}
              height={503}
              className="img-fluid"
            />
            <a
              className="btn-main mb10 mt20"
              href="https://formulario.franquicias.polizaderentas.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: '80%',
                left: '80%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              Inicia tu proceso
            </a>
          </div>
        </div>
      </div>

      {/* Scripts adicionales */}
      <Script src="/js/plugins.js" strategy="afterInteractive" />
      <Script src="/js/designesia.js" strategy="afterInteractive" />
      <Script src="/js/custom-marquee.js" strategy="afterInteractive" />
    </>
  );
}