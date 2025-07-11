'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function InvestigacionInquilinosPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scripts = [
        '/js/plugins.js',
        '/js/designesia.js',
        '/js/swiper.js',
        '/js/custom-marquee.js',
        '/js/custom-swiper-1.js',
        '/js/wow.min.js'
      ];

      scripts.forEach((src) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
      });

      setTimeout(() => {
        if (window.WOW) new window.WOW().init();
      }, 500);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Investigación de Inquilinos - Póliza de Rentas</title>
        <meta name="description" content="Conoce nuestro proceso de investigación de inquilinos para garantizar tu seguridad." />
      </Head>

      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section className="text-light no-top no-bottom position-relative z-1000">
          <div className="v-center">
            <div className="swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide" data-jarallax-element="150">
                  <div
                    className="swiper-inner"
                    style={{
                      backgroundImage:
                        'url(/images/services/convenio-prevencion-conflictos/convenio-prevencion-conflictos-01.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      minHeight: '80vh'
                    }}
                  >
                    <div className="sw-caption">
                      <div className="container">
                        <div className="row gx-5 align-items-center">
                          <div className="col-lg-7 mb-sm-30">
                            <div className="subtitle s2 wow fadeInUp mb-3">Nuestros Servicios</div>
                            <h1 className="slider-title">Investigación de inquilinos</h1>
                            <Link className="btn-main mb10 mt20" href="/sucursales">
                              Sucursales
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sw-overlay s2"></div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
              <div className="swiper-scrollbar"></div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-5">
                <div className="subtitle s2 wow fadeInUp mb-3">Cómo funciona</div>
                <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">
                  Investigación de Inquilinos
                </h2>
                <p>
                  En Póliza de Rentas, tu tranquilidad es nuestra prioridad. Por eso, nuestros procesos de investigación de inquilinos están diseñados para evaluar detalladamente el grado de confianza y solvencia de cada persona, asegurando su capacidad para cumplir con el pago mensual de la renta.
                </p>
                <p>
                  Confía en nuestra investigación especializada para proteger tu propiedad y evitar futuros problemas.
                </p>
                <h3 className="wow fadeInUp mb20" data-wow-delay=".2s">
                  Cada uno de nuestros inquilinos es evaluando con tres tipos de investigación.
                </h3>
                <ol>
                  <li>
                    <h4>Investigación Paramétrica</h4>
                    En Póliza de Rentas diseñamos un algoritmo que nos emite un “score” para cada uno de nuestros inquilinos, lo que nos permite medir el grado de estabilidad y confianza de una persona de acuerdo a su forma de vida, así como a la procedencia y nivel de sus ingresos.
                  </li>
                  <br />
                  <li>
                    <h4>Buró de Crédito</h4>
                    Consultar el buró de crédito de nuestros inquilinos nos permite conocer cual es su historial de pagos, y si nivel de endeudamiento. De esta forma, podemos conocer la forma de conducirse y afrontar sus compromisos de pago.
                  </li>
                  <br />
                  <li>
                    <h4>Buró de Incidencias Legales</h4>
                    Consultamos al inquilino en más de 100 bases de datos nacionales e internacionales. Saber si cuenta con juicios mercantiles, de arrendamiento, o de cualquier otro tipo de problema legal es fundamental para tomar una correcta decisión sobre la persona a la que se le dará posesión del patrimonio de nuestros clientes.
                  </li>
                </ol>
                <h3 className="wow fadeInUp mb20" data-wow-delay=".2s">
                  ¡Con Póliza de Rentas sabrás exactamente en manos de quién estás dejando tu propiedad!
                </h3>
                <h3 className="wow fadeInUp mb20" data-wow-delay=".2s">
                  Nuestro exhaustivo proceso de investigación te ayuda a conocer a fondo a tu inquilino, garantizando un arrendamiento seguro y libre de sorpresas.
                </h3>
                <h3 className="wow fadeInUp mb20" data-wow-delay=".2s">
                  No pongas en riesgo tu patrimonio, asegúralo con la mejor protección jurídica en México.
                </h3>
                <Link className="btn-main mb10 mt20" href="/sucursales">
                  Sucursales
                </Link>
                <div className="spacer-single"></div>
              </div>

              <div className="col-lg-5">
                <Image
                  src="/images/services/convenio-prevencion-conflictos/convenio-prevencion-conflictos-02.jpg"
                  className="img-fluid rounded-30"
                  alt="convenio"
                  width={600}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
