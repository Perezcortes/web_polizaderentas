'use client';

import Head from 'next/head';
import Script from 'next/script';
import ContactForm from '../../components/contacto/ContactForm';
import './style.css';

declare global {
  interface Window {
    jQuery?: any;
    $?: any;
  }
}

export default function ContactPage() {
  //useReInitVisualScripts();

  return (
    <>
      <Head>
        <title>Contacto - Póliza de Rentas</title>
        <meta name="description" content="Contáctanos para proteger tu patrimonio con nuestros servicios jurídicos especializados en arrendamiento" />
        <link rel="icon" href="/images/icon.png" type="image/gif" sizes="16x16" />
      </Head>

      {/* Script de SweetAlert2 */}
      <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" strategy="lazyOnload" />

      {/* Banner superior */}
      <section id="poliza" className="text-light jarallax">
        <img src="/images/slider/banner3.jpg" className="jarallax-img" alt="banner3" />
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="wow fadeInUp mb20" data-wow-delay=".2s">Contacto</h1>
              <br /><br />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de formulario y mapa */}
      <section>
        <div className="container">
          <div className="row">
            <div className="row col-lg-12 col-md-6" data-wow-delay="0s">
              {/* Formulario */}
              <div className="col-lg-6 p-4 pb-2 bg-grey">
                <h4>Envía tus datos y un agente de Póliza de Rentas se pondrá en contacto contigo</h4>
                <ContactForm />
              </div>

              {/* Espacio */}
              <br /><br />

              {/* Mapa */}
              <div className="col-lg-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.1845985127593!2d-99.63849741881567!3d19.274336935486314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8a29d080d017%3A0x44d4601337583361!2sCalle%20Prol.%205%20de%20Mayo%202%20Ote.%201567%2C%20Comisi%C3%B3n%20Federal%20de%20Electricidad%2C%2050150%20Toluca%20de%20Lerdo%2C%20M%C3%A9x.!5e0!3m2!1ses!2smx!4v1775755300730!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección "Quiénes somos" */}
      <section className="bg-dark-1 text-light">
        <div className="container">
          <div className="row align-items-center gx-5">
            <div className="col-lg-6 mb-sm-20 position-relative">
              <div className="images-deco-1">
                <img
                  src="images/misc/1.png"
                  className="d-img-1 wow zoomIn"
                  data-wow-delay="0s"
                  alt="quienes somos"
                />
                <img
                  src="images/misc/2.png"
                  className="d-img-2 wow zoomIn"
                  data-wow-delay=".5s"
                  alt="logo"
                />
                <div
                  className="d-img-3 bg-color wow zoomIn"
                  data-wow-delay=".6s"
                ></div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="subtitle s2 wow fadeInUp mb-3">Quiénes somos</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">
                Acerca de <br /> Póliza de Rentas
              </h2>
              <p className="wow fadeInUp">
                Somos una empresa dedicada a proteger el patrimonio de las personas,
                nuestros servicios están destinados a propietarios, inmobiliarias o
                administradores de inmuebles que buscan dar sus propiedades en arrendamiento.
              </p>
              <hr className="s2" />
              <div className="spacer-10"></div>
              <div className="d-flex">
                <a className="btn-main me-1" href="/franquicias#conoce">
                  Conoce más
                </a>
                <a className="btn-main btn-line" href="/sucursales">
                  Nuestras sucursales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
