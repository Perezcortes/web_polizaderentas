'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import { useReInitVisualScripts } from '../../../hooks/useReInitVisualScripts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

export default function PolizaJuridicaPage() {
  useReInitVisualScripts();


  useEffect(() => {
    AOS.init({
      duration: 800, // duración de la animación
      once: true, // solo una vez al hacer scroll
    });
  }, []);

  return (
    <>
      <Head>
        <title>Póliza Jurídica - Póliza de Rentas</title>
        <meta name="description" content="Protección jurídica especializada en arrendamiento inmobiliario con cobertura nacional" />
        <link rel="icon" href="/images/icon.png" type="image/gif" sizes="16x16" />
      </Head>

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
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-5">
              <div className="subtitle s2 wow fadeInUp mb-3">Cómo funciona</div>
              <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">
                Protección Jurídica en Arrendamiento Inmobiliario
              </h2>
              <p>
                ¡Si deseas rentar tu inmueble, necesitas a Póliza de Rentas! Encontrar al inquilino ideal,
                un buen contrato y abstenerte de problemas jurídicos relacionados con las rentas es complicado.
                Por ello, nosotros nos encargamos de protegerte a ti como propietario y a tu inmueble.
              </p>
              <p>
                Más de 10 años de experiencia en servicios y en el mercado inmobiliario nos respaldan, teniendo presencia
                a nivel nacional, y ofreciendo a nuestros clientes una experiencia de confianza y calidad en el servicio,
                con la única finalidad de proteger su patrimonio en todo momento.
              </p>
              <a className="btn-main mb10 mt20" href="/sucursales">Sucursales</a>
              <div className="spacer-single"></div>
            </div>

            <div className="col-lg-5">
              <img
                src="/images/services/convenio-prevencion-conflictos/convenio-prevencion-conflictos-02.jpg"
                className="img-fluid rounded-30"
                alt="convenio"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Sección de características */}
      <section className="no-top">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInLeft">
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
                <div className="d-flex">
                  <Link className="btn-main me-1" href="/sucursales">
                    Sucursales
                  </Link>
                  <Link className="btn-main btn-line" href="/sucursales">
                    Ubica tu sucursal
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 wow fadeInRight">
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

            <div className="row gy-4 justify-content-center text-center">
              {/* Respaldo Legal */}
              <div className="col-lg-4">
                <div className="card-custom h-100" data-aos="fade-up">
                  <h2 className="card-title" data-aos="fade-up" data-aos-delay="100">
                    Respaldo Legal
                  </h2>
                  <p className="card-text">
                    Contarás con respaldo de abogados especialistas durante todo el periodo de arrendamiento.
                  </p>
                </div>
              </div>

              {/* Cobranza en Incumplimiento */}
              <div className="col-lg-4">
                <div className="card-custom h-100" data-aos="fade-up" data-aos-delay="100">
                  <h2 className="card-title" data-aos="fade-up" data-aos-delay="200">
                    Cobranza en <br /> Incumplimiento
                  </h2>
                  <p className="card-text">
                    Cobranza extrajudicial y por la vía judicial, hasta la recuperación de rentas vencidas y servicios no pagados.
                  </p>
                </div>
              </div>

              {/* Protegemos tu inmueble */}
              <div className="col-lg-4">
                <div className="card-custom h-100" data-aos="fade-up" data-aos-delay="200">
                  <h2 className="card-title" data-aos="fade-up" data-aos-delay="300">
                    Protegemos tu inmueble
                  </h2>
                  <p className="card-text">
                    Recuperación garantizada de tu inmueble y protección ante Extinción de Dominio.
                  </p>
                </div>
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