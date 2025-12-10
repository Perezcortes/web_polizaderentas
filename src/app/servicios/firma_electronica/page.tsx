'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import Head from 'next/head';
import Link from 'next/link';
import './styles.css';

export default function FirmaElectronicaPage() {
  return (
    <>
      <Head>
        <title>Firma Electrónica - Póliza de Rentas</title>
        <meta name="description" content="Nuestra tecnología revoluciona la protección jurídica en el arrendamiento inmobiliario con firma electrónica avanzada." />
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
                        <h1 className="slider-title">Firma electrónica</h1>
                        <div className="d-flex">
                          <Link className="btn-main me-1" href="#como-funciona">
                            Cómo funciona
                          </Link>
                          <Link className="btn-main btn-line" href="/sucursales">
                            Sucursales
                          </Link>
                        </div>
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
          <div className="row gx-5 justify-content-center"  id="como-funciona">
            <div className="col-lg-5">
              <div className="subtitle s2 wow fadeInUp mb-3">Cómo funciona</div>
              <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">
                Firma Electrónica Avanzada para Contratos de Arrendamiento
              </h2>
              <p>
                En Póliza de Rentas, contamos con la tecnología más avanzada para la firma de contratos de arrendamiento, utilizando la Firma Electrónica Avanzada a través de una entidad de certificación autorizada por la Secretaría de Economía. Nuestra solución cumple con los más altos estándares, incluyendo la NOM-151 y certificaciones reconocidas como Firma Digital, Firma Electrónica Simple, e.firma (FIEL), y Firma Biométrica Avanzada.
              </p>
              <a className="btn-main mb10 mt20" href="/sucursales">
                Sucursales
              </a>
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

      {/* Sección de características y FAQ */}
      <section className="no-top">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12 wow fadeInLeft">
              <div className="padding40 bg-color-2 rounded-30 h-100">
                <h3>Ventajas de nuestra Firma Electrónica Avanzada:</h3>
                <p>En Póliza de Rentas solo pagarás por los servicios que requieras.</p>
                <ul>
                  <li>Consentimiento Legal y Seguro: Aseguramos un consentimiento indubitable que tiene una validez legal, que brinda más certeza que una firma tradicional. </li>
                  <li>Identidad del Firmante Verificada en Tiempo Real: Validamos la identidad del firmante mediante un proceso biométrico facial con prueba de vida, asegurando que quien firma es quien dice ser.</li>
                  <li>Registro de consentimiento electrónico: Nuestro sistema registra cada paso del proceso de firma, generando un rastro digital que da fe del consentimiento de todas las partes involucradas. Este registro cumple con los más altos estándares legales, proporcionando evidencia fehaciente y comprobable en caso de disputas legales.</li>
                </ul>
                <p><em><b>Protección y Confidencialidad con Tecnología Blockchain En colaboración con Weetrust, tus documentos están encriptados y almacenados en una blockchain privada, garantizando su seguridad y confidencialidad. Este proceso asegura que toda la información sensible permanezca protegida contra alteraciones y accesos no autorizados.</b></em></p>
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

            <div className="col-lg-12 wow fadeInRight">
              <div className="padding40 bg-grey rounded-30 h-100">
                <h2 className="wow fadeInUp" data-wow-delay=".2s">Preguntas Frecuentes sobre la Firma Electrónica en Contratos de Arrendamiento</h2>
                <details>
                  <summary className="wow fadeInUp">
                    <strong>¿Qué es la firma electrónica avanzada y cómo se aplica en los contratos de arrendamiento?</strong>
                  </summary>
                  <br />
                  La firma electrónica avanzada es un tipo de firma digital que garantiza la identidad del firmante y la integridad del documento firmado. En Póliza de Rentas, utilizamos firma electrónica avanzada para los contratos de arrendamiento, lo que permite a ambas partes firmar de manera digital con la misma validez legal que una firma autógrafa. Esta tecnología está certificada por una entidad autorizada por la Secretaría de Economía y cumple con la Norma Oficial Mexicana (NOM-151).
                </details>

                <details>
                  <summary className="wow fadeInUp"><strong>¿Puedo firmar un contrato de arrendamiento electrónicamente desde cualquier parte de la República Mexicana?</strong></summary><br />

                  Sí, nuestra plataforma permite firmar contratos de arrendamiento electrónicamente en cualquier lugar de México. La firma electrónica avanzada tiene validez legal en todo el territorio nacional y está regulada por la Ley de Firma Electrónica Avanzada, lo que facilita el proceso sin importar la ubicación de las partes.
                </details>
                <details>
                  <summary className="wow fadeInUp"><strong>¿La firma electrónica tiene la misma validez legal que una firma en papel?</strong></summary><br />

                  Sí, la firma electrónica avanzada tiene la misma validez y efectos legales que una firma en papel, siempre y cuando cumpla con los requisitos establecidos por la Ley de Firma Electrónica Avanzada y la NOM-151, el Código de Comercio, los Códigos Civiles y la Ley General de Títulos y Operaciones de Crédito. En Póliza de Rentas, garantizamos que nuestras firmas cumplen con estos estándares, asegurando la autenticidad y seguridad del documento.
                </details>
                <details>
                  <summary className="wow fadeInUp"><strong> ¿Cómo se asegura la identidad del firmante en un contrato firmado electrónicamente?</strong></summary><br />

                  Utilizamos una combinación de validación de documentos de identidad y biometría facial con prueba de vida. Este proceso verifica que la persona que firma es quien dice ser, reduciendo el riesgo de suplantación de identidad y asegurando la autenticidad del firmante en tiempo real.
                </details>
                <details>
                  <summary className="wow fadeInUp"><strong>¿Qué tipo de certificaciones tiene Póliza de Rentas para el uso de firma electrónica avanzada?</strong></summary><br />

                  En Póliza de Rentas, contamos con una alianza estratégica con Weetrust y Advantage Security, S de RL de CV como Prestador de Servicios de Certificación autorizado por la Secretaría de Economía en cumplimiento a la NOM 151-SCFI-2016, que regula la seguridad y autenticidad de las firmas electrónicas. Además, utilizamos tecnología Blockchain para asegurar que cada documento firmado sea inalterable y único, ofreciendo una capa adicional de protección.
                </details>
                <details>
                  <summary className="wow fadeInUp"><strong>¿Qué beneficios tiene utilizar la firma electrónica en los contratos de arrendamiento?</strong></summary><br />

                  La firma electrónica avanzada ofrece múltiples beneficios, como la rapidez y facilidad en la formalización de contratos, ahorro en costos de traslado y papel, y seguridad en la integridad de los documentos. También permite la formalización de contratos sin necesidad de reunirse físicamente, lo que hace más ágil y eficiente el proceso de arrendamiento.
                </details>
                <details>
                  <summary className="wow fadeInUp"><strong> ¿Es posible acceder a un registro de consentimiento electrónico para verificar el acuerdo de las partes?</strong></summary><br />

                  Sí, cada paso del proceso de firma electrónica en Póliza de Rentas queda registrado en un sistema de consentimiento electrónico. Este registro genera un rastro digital que verifica el consentimiento de ambas partes, brindando una prueba legal en caso de disputas.
                </details>
                <details>
                  <summary className="wow fadeInUp"><strong> ¿Qué marco legal regula el uso de la firma electrónica en México?</strong></summary><br />

                  La firma electrónica avanzada en México está regulada por la Ley de Firma Electrónica Avanzada (LFEA), el Código de Comercio (que reconoce la firma electrónica para actos mercantiles) y la NOM-151-SCFI-2016 (que regula los requisitos para la conservación y autenticidad de los documentos electrónicos). Estas normativas permiten que la firma electrónica tenga validez legal en diversos actos civiles, mercantiles y administrativos.
                </details>
                <details>
                  <summary className="wow fadeInUp"><strong> ¿Qué seguridad ofrece la tecnología Blockchain en los contratos firmados electrónicamente?</strong></summary><br />

                  La tecnología Blockchain asegura que cada documento firmado sea inalterable, único y seguro. Al encriptar y almacenar los documentos en una blockchain privada, garantizamos que la información sensible esté protegida contra alteraciones y accesos no autorizados, preservando su integridad y confidencialidad.
                </details>
                <details>
                  <summary className="wow fadeInUp"><strong> ¿La firma electrónica es válida para contratos en el ámbito civil en todas las entidades federativas?</strong></summary><br />

                  La aplicación de la firma electrónica en contratos civiles depende de la legislación de cada estado en México, ya que algunos códigos civiles tienen disposiciones específicas para el uso de firmas electrónicas y consentimiento digital. Sin embargo, en Póliza de Rentas nos aseguramos de que nuestros contratos de arrendamiento estén diseñados para cumplir con los requisitos locales, garantizando su validez en todas las entidades federativas.
                </details>
                <details>
                  <summary className="wow fadeInUp"><strong> ¿Qué pasa si hay una disputa legal respecto al contrato firmado electrónicamente?</strong></summary><br />

                  Gracias a los altos estándares de seguridad y el registro de consentimiento electrónico, los contratos firmados electrónicamente en Póliza de Rentas cuentan con pruebas verificables de la identidad del firmante y del acuerdo de ambas partes. Esto proporciona una base legal sólida para resolver disputas, ya que toda la evidencia digital puede ser presentada ante las autoridades.
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}