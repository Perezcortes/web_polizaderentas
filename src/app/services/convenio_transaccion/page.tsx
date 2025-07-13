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

export default function ConvenioTransaccionPage() {
  return (
    <>
      <Head>
        <title>Convenio de Transacción - Póliza de Rentas</title>
        <meta name="description" content="Contratos blindados con fuerza legal mediante convenios de transacción notariados" />
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
                        <h1 className="slider-title">Convenio de transacción</h1>
                        <p className="fs-4">
                          Nosotros te ayudamos a crear un convenio de transacción. Este acuerdo es firmado ante un mediar certificado con fé pública y se inscribe en el Tribunal Superior de Justicia Alternativa.
                        </p>
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
              <h2 className="mb20">Convenio de Transacción</h2>
              <p>
                Requieres un contrato blindado, Póliza de Rentas puede apoyarte con un Convenio de Transacción firmado ante Notario Público. Gracias a este tipo de contratos, podremos firmar un acuerdo de desalojo anticipado, de tal forma que no requieras de un juicio para recuperar tu inmueble. La tranquilidad a la hora de rentar tu inmueble es importante, no lo dejes pasar y evita problemas judiciales.
              </p>
              <p>
                Este tipo de contratos sólo está disponible en algunos estados de la República Mexicana. Pregunta a tu abogado.
              </p>
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
                alt="Convenio de transacción" 
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
                <h3>¿Qué complementos deben existir para que se dé la transacción?</h3>
                <ol>
                  <li>La existencia de litigio pendiente o que se presente de manera eventual.</li>
                  <li>Que las partes intervinientes en el contrato decidan realizarse recíprocas concesiones, es decir, cambien un derecho por otro.</li>
                </ol>
                <h3>¿Cuál es el objetivo del Contrato de Transacción?</h3>
                <p><em>Siempre tendrá como base la relación jurídica que existe entre las partes, sacrificando alguna de sus pretensiones contra algún derecho de la contraparte con la finalidad de poner fin a un litigio o prevenir el mismo.</em></p>
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
                <h3>Como se lleva a cabo el trámite</h3>
                <p><em>Al momento de la firma de tu contrato de arrendamiento, se celebra también la firma del contrato de transacción. Posteriormente se ratifica ante Notario Público, lo que le da la fuerza Legal para que a su incumplimiento pueda solicitarse su ejecución en vía de apremio.</em></p>
                <h3>¿Qué sucede si se incumple mi contrato de arrendamiento, cómo funciona?</h3>
                <p>Al momento del incumplimiento por cualquiera de las causales que se estipulen en tu contrato de arrendamiento, podrás solicitar ante el C. Juez competente su ejecución en vía de apremio. Este solicitará a la otra parte acredite el cumplimiento de las obligaciones pactadas y en caso de no hacerlo dentro del término legal concedido, se procederá a la desocupación y entrega del inmueble, así como también se podrá hacer efectiva la garantía.</p>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="padding60 sm-padding40 rounded-30 bg-color h-100 text-light">
                <h2 className="mb20">Beneficios del contrato de Transacción</h2>
                <p>El contrato de arrendamiento adquiere mayor fuerza legal, respaldado por el contrato de transacción.</p>
                <p>Al presentarse un incumplimiento puede ejecutarse de manera inmediata el contrato de transacción.</p>
                <p>Al momento de solicitar la ejecución del contrato, de manera judicial podrás solicitar de forma inmediata:</p>
                <ul>
                  <li>La desocupación y entrega del inmueble.</li>
                  <li>El pago de rentas vencidas.</li>
                  <li>La rescisión del contrato de arrendamiento.</li>
                </ul>
                <p>No se requiere de la presencia de algún tercero para poder celebrar el contrato de transacción.</p>
                <p>Si deseas puedes ratificarlo ante un Notario Público.</p>
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