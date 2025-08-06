'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import Head from 'next/head';
import Link from 'next/link';

export default function ConvenioTransaccionPage() {
  return (
    <>
      <Head>
        <title>Convenio de Transacción - Póliza de Rentas</title>
        <meta name="description" content="Contratos blindados con fuerza legal mediante convenios de transacción notariados" />
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
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-5">
              <div className="subtitle s2 wow fadeInUp mb-3">Cómo funciona</div>
              <h2 className="wow fadeInUp mb20" data-wow-delay=".2s">Convenio de Transacción</h2>
              <p>
                Requieres un contrato blindado, Póliza de Rentas puede apoyarte con un Convenio de Transacción firmado ante Notario Público.
                Gracias a este tipo de contratos, podremos firmar un acuerdo de desalojo anticipado, de tal forma que no requieras de un juicio para recuperar tu inmueble.
                La tranquilidad a la hora de rentar tu inmueble es importante, no lo dejes pasar y evita problemas judiciales.
              </p>
              <p>
                Este tipo de contratos sólo está disponible en algunos estados de la República Mexicana.
              </p>
              <p>Pregunta a tu abogado.</p>

              {/* Lista desactivada temporalmente
        <ul className="list-unstyled">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-lock-fill" viewBox="0 0 16 16">
              <path d="M7 7a1 1 0 0 1 2 0v1H7zM6 9.3c0-.042.02-.107.105-.175A.64.64 0 0 1 6.5 9h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.64.64 0 0 1 9.5 12h-3a.64.64 0 0 1-.395-.125C6.02 11.807 6 11.742 6 11.7z" />
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 1 1 4 0" />
            </svg>
            <br />
            Tu contrato de arrendamiento se perfecciona...
          </li>
        </ul>
        */}

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
                <h3>¿Que complementos deben existir para que se dé la transacción?</h3>
                <ol>
                  <li>La existencia de litigio pendiente o que se presente de manera eventual.</li>
                  <li>Que las partes intervinientes en el contrato decidan realizarse recíprocas concesiones, es decir, cambien un derecho por otro.</li>
                </ol>
                <h3>¿Cual es el objetivo del Contrato de Transacción?</h3>
                <p><em>Siempre tendrá como base la relación jurídica que existe entre las partes, sacrificando alguna de sus pretensiones contra algún derecho de la contraparte con la finalidad de poner fin a un litigio o prevenir el mismo.</em></p>
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
                <h3>Como se lleva a cabo el trámite</h3>
                <p><em>Al momento de la firma de tu contrato de arrendamiento, se celebra también la firma del contrato de transacción. Posteriormente se ratifica ante Notario Público , lo que le da la fuerza Legal para que a su incumplimiento pueda solicitarse su ejecución en vía de apremio.</em></p>
                <h3>¿Qué sucede si se incumple mi contrato de arrendamiento, cómo funciona?</h3>
                <p>Al momento del incumplimiento por cualquiera de las causales que se estipulen en tu contrato de arrendamiento, podrás solicitar ante el C. Juez competente su ejecución en vía de apremio. Este solicitará a la otra parte acredite el cumplimiento de las obligaciones pactadas y en caso de no hacerlo dentro del término legal concedido, se procederá a la desocupación y entrega del inmueble, así como también se podrá hacer efectiva la garantía.</p>
              </div>
            </div>

            <div className="col-lg-12 wow fadeInLeft">
              <div className="padding60 sm-padding40 rounded-30 bg-color h-100 text-light">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="mb20 wow fadeInUp" data-wow-delay=".2s">Beneficios del contrato de Transacción</h2>
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
          </div>
        </div>
      </section>
    </>
  );
}