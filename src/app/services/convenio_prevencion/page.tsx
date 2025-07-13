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

export default function ConvenioPrevencionPage() {
  return (
    <>
      <Head>
        <title>Convenio de Prevención de Conflictos - Póliza de Rentas</title>
        <meta name="description" content="Nuestra tecnología revoluciona la protección jurídica en el arrendamiento inmobiliario. Forma parte del futuro de la seguridad para propietarios e inquilinos." />
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
                        <h1 className="slider-title">Convenio de prevención de conflictos</h1>
                        <Link className="btn-main mb10 mt20" href="#como-funciona">
                          Cómo funciona
                        </Link>
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
      <section id="como-funciona">
        <div className="container">
          <div className="row gx-5 justify-content-center align-items-center">
            <div className="col-lg-5">
              <div className="subtitle s2 mb-3">Cómo funciona</div>
              <h2 className="mb20">¿Cómo funciona?</h2>
              <p>Tu contrato de arrendamiento se perfecciona de manera judicial al celebrarlo mediante un convenido de mediación privada. Consecuentemente, si se incumple, podrás solicitar su ejecución de manera directa vía judicial, con un procedimiento más ágil que el tradicional, ya que en muchas ocasiones el sistema judicial no cuenta con la capacidad suficiente para dar celeridad a los procesos.</p>
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
                alt="Convenio de prevención de conflictos" 
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
                <h3>¿Ante quién se celebran?</h3>
                <p>Tu convenio de mediación Privada se deberá celebrar ante la presencia de un Mediador Privado Certificado por el Centro de Justicia Alternativa de la Ciudad de México.</p>
                <p><strong>Beneficios del convenio de mediación:</strong></p>
                <ul>
                  <li>Tu contrato de arrendamiento adquiere fuerza legal mediante la firma de un convenio de mediación.</li>
                  <li>Al momento que se incurre en incumplimiento, podrás solicitar de manera judicial inmediata:</li>
                  <ul>
                    <li>La desocupación y entrega del inmueble</li>
                    <li>Hacer efectiva la garantía</li>
                    <li>El pago de rentas</li>
                    <li>La rescisión de tu contrato</li>
                  </ul>
                  <li>No necesitas de tantos trámites costosos de investigaciones, ni el temer demasiada documentación.</li>
                </ul>
                <p><em>Tu convenio de mediación tendrá vigencia por el tiempo que dure tu contrato de arrendamiento.</em></p>
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
                <h3>Documentos necesarios para llevar acabo el trámite</h3>
                <ul>
                  <li>Identificaciones oficiales y vigentes de arrendador y arrendatario y del aval en caso de que lo haya.</li>
                  <li>Poder Notarial, con el que se acredite la personalidad en caso de que el contrato de arrendamiento se firme por medio de un Apoderado.</li>
                  <li>El Contrato de Arrendamiento.</li>
                </ul>
                <h4>¿Cómo se lleva a cabo el trámite?</h4>
                <p>Al momento de la firma de tu contrato de arrendamiento, se celebra también tu convenio de Mediación ante la presencia de un Mediador Privado Certificado, posteriormente se registra ante el Centro de Justicia Alternativa del Tribunal Superior de Justicia, lo que le da la fuerza Legal para que a su incumplimiento pueda solicitarse su ejecución en vía de apremio.</p>
                <h4>¿Qué sucede si se incumple mi contrato de arrendamiento, cómo funciona?</h4>
                <p>Al momento del incumplimiento por cualquiera de las causales que se estipulen en tu contrato de arrendamiento, podrás solicitar ante el C. Juez competente su ejecución en vía de apremio. Este solicitará a la otra parte que acredite el cumplimiento de las obligaciones pactadas y en caso de no hacerlo dentro del término legal concedido, se procederá a la desocupación y entrega del inmueble, así como también se podrá hacer efectiva la garantía.</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="padding60 sm-padding40 rounded-30 bg-color h-100 text-light">
                <h2 className="mb20">Refuerzo legal</h2>
                <p>Tu contrato de arrendamiento adquiere fuerza legal mediante la firma de un convenio de mediación mercantil.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="padding60 sm-padding40 rounded-30 bg-color h-100 text-light">
                <h2 className="mb20">Máxima confianza</h2>
                <p>El convenio se firma ante un Mediador Certificado y se inscribe en el Tribunal Superior de Justicia Alternativa.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="padding60 sm-padding40 rounded-30 bg-color h-100 text-light">
                <h2 className="mb20">Agiliza el proceso judicial</h2>
                <p>En caso de incumplimiento, el trámite judicial es mucho más ágil, lo que te permitirá recuperar tu inmueble rápidamente.</p>
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