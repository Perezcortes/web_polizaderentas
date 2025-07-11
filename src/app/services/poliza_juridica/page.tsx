'use client';

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

export default function PolizaJuridicaPage() {
  return (
    <>
      <Head>
        <title>Póliza Jurídica - Póliza de Rentas</title>
        <meta name="description" content="Protección jurídica especializada en arrendamiento inmobiliario con cobertura nacional" />
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
          <img height="1" width="1" style={{display:'none'}} 
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
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            className="swiper"
          >
            <SwiperSlide>
              <div 
                className="swiper-inner" 
                style={{
                  backgroundImage: 'url(/images/services/convenio-prevencion-conflictos/convenio-prevencion-conflictos-01.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '80vh'
                }}
              >
                <div className="sw-caption">
                  <div className="container">
                    <div className="row gx-5 align-items-center">
                      <div className="col-lg-7 mb-sm-30">
                        <div className="subtitle s2 mb-3">Nuestros Servicios</div>
                        <h1 className="slider-title">Póliza jurídica</h1>
                        <Link className="btn-main mb10 mt20" href="/sucursales">
                          Sucursales
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
          <div className="swiper-button-prev d-block d-lg-none" style={{ marginTop: '60%' }}></div>
          <div className="swiper-button-next d-block d-lg-none" style={{ marginTop: '60%' }}></div>
          <div className="swiper-button-prev d-none d-lg-block"></div>
          <div className="swiper-button-next d-none d-lg-block"></div>
          <div className="swiper-scrollbar"></div>
        </div>
      </section>

      {/* Sección Cómo funciona */}
      <section>
        <div className="container">
          <div className="row gx-5 justify-content-center align-items-center">
            <div className="col-lg-5">
              <div className="subtitle s2 mb-3">Cómo funciona</div>
              <h2 className="mb20">Protección Jurídica en Arrendamiento Inmobiliario</h2>
              <p>¡Si deseas rentar tu inmueble, necesitas a Póliza de Rentas! Encontrar al inquilino ideal, un buen contrato y abstenerte de problemas jurídicos relacionados con las rentas es complicado. Por ello, nosotros nos encargamos de protegerte a tí como propietario y a tu inmueble.</p>
              <p>Más de 10 años de experiencia en servicios y en el mercado inmobiliario nos respaldan, teniendo presencia a nivel nacional, y ofreciendo a nuestros clientes una experiencia de confianza y calidad en el servicio, con la única finalidad de proteger su patrimonio en todo momento.</p>
              <Link className="btn-main mb10 mt20" href="/sucursales">
                Sucursales
              </Link>
              <div className="spacer-single"></div>
            </div>

            <div className="col-lg-5">
              <Image 
                src="/images/services/convenio-prevencion-conflictos/convenio-prevencion-conflictos-02.jpg" 
                width={600} 
                height={400}
                className="img-fluid rounded-30" 
                alt="Protección jurídica en arrendamiento" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de características */}
      <section className="no-top">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="padding40 bg-grey rounded-30 h-100">
                <h3>La mejor protección jurídica del mercado a un único precio.</h3>
                <p>En Póliza de Rentas solo pagarás por los servicios que requieras.</p>
                <ul>
                  <li>Perfilamiento del inquilino.</li>
                  <li>Investigación del inquilino.</li>
                  <li>Recuperación del inmueble de forma judicial.</li>
                  <li>Protección hasta la entrega del inmueble.</li>
                  <li>Protección ante lavado de dinero.</li>
                  <li>Cobranza extrajudicial.</li>
                </ul>
                <p><em><b>Opción de pago a meses sin intereses*.</b></em></p>
                <p><em>*Aplica comisión bancaria</em></p>
                <Link className="btn-main mb10 mt20" href="/sucursales">
                  Sucursales
                </Link>
                <Link className="btn-main mb10 mt20" href="/sucursales">
                  Ubica tu sucursal
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="padding40 bg-color-2 rounded-30 h-100">
                <h3>¿Que incluye nuestro servicio?</h3>
                <ul>
                  <li>Investigación del inquilino y del fiador en su caso.</li>
                  <li>Investigación paramétrica del inquilino.</li>
                  <li>Investigación en el buró de crédito.</li>
                  <li>Investigación en el buró legal.</li>
                  <li>Elaboración del contrato de arrendamiento.</li>
                  <li>Asistencia a la firma del contrato.</li>
                  <li>Seguimiento a incumplimientos durante la vigencia del contrato.</li>
                  <li>Recuperación del inmueble (ya sea por la vía judicial o extrajudicial)</li>
                  <li>Protección al arrendador hasta la entrega del inmueble.</li>
                  <li>Protección ante extinción de dominio.</li>
                </ul>
                <h4>¿Porqué elegir Póliza de Rentas?</h4>
                <ul>
                  <li>Asesorías antes de rentar sin costo.</li>
                  <li>Atención personalizada a nuestros clientes.</li>
                  <li>Solo pagarás por los servicios que requieres.</li>
                  <li>Cobertura a nivel Nacional.</li>
                  <li>Más de 10 años de experiencia en el mercado.</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="padding60 sm-padding40 rounded-30 bg-color h-100 text-light">
                <h2 className="mb20">Respaldo Legal</h2>
                <p>Contarás con respaldo de abogados especialistas durante todo el periodo de arrendamiento.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="padding60 sm-padding40 rounded-30 bg-color h-100 text-light">
                <h2 className="mb20">Cobranza en Incumplimiento</h2>
                <p>Cobranza extrajudicial y por la vía judicial, hasta la recuperación de rentas vencidas y servicios no pagados</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="padding60 sm-padding40 rounded-30 bg-color h-100 text-light">
                <h2 className="mb20">Protegemos tu inmueble</h2>
                <p>Recuperación garantizada de tu inmueble y protección ante Extinción de Dominio.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scripts adicionales */}
      <Script src="/js/plugins.js" strategy="afterInteractive" />
      <Script src="/js/designesia.js" strategy="afterInteractive" />
      <Script src="/js/custom-marquee.js" strategy="afterInteractive" />
    </>
  );
}