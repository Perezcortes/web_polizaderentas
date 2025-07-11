'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/scrollbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Póliza de Rentas</title>
        <link rel="icon" href="/images/icon.png" type="image/gif" sizes="16x16" />
        <meta content="text/html;charset=utf-8" http-equiv="Content-Type" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Nuestra tecnología revoluciona la protección jurídica en el arrendamiento inmobiliario. Forma parte del futuro de la seguridad para propietarios e inquilinos." name="description" />
        <meta content="" name="keywords" />
        <meta content="" name="author" />
        {/* Open Graph Meta Tags */}
        <meta property="og:image" content="https://polizaderentas.com/almacenamiento/images/og.jpg" />
        <meta property="og:url" content="https://polizaderentas.com/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://polizaderentas.com/" />

        {/* CSS Files */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap" />
        <link href="/css/plugins.css" rel="stylesheet" type="text/css" />
        <link href="/css/swiper.css" rel="stylesheet" type="text/css" />
        <link href="/css/style.css" rel="stylesheet" type="text/css" />
        <link href="/css/coloring.css" rel="stylesheet" type="text/css" />
        <link href="/css/estilos.css" rel="stylesheet" type="text/css" />
        {/* color scheme */}
        <link id="colors" href="/css/colors/scheme-01.css" rel="stylesheet" type="text/css" />
      </Head>

      <div id="wrapper">
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>

          {/* Hero Slider - Convertido a React Swiper */}
          <section className="text-light no-top no-bottom position-relative z-1000">
            <div className="v-center">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, Parallax]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                direction="horizontal"
                loop={true}
                speed={1200}
                parallax={true}
                pagination={{ el: '.swiper-pagination', type: 'fraction', clickable: true }}
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
                      backgroundImage: 'url(/images/slider/banner-1.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="sw-caption">
                      <div className="container">
                        <div className="row gx-5 align-items-center">
                          <div className="col-lg-7 mb-sm-30 offset-lg-1">
                            <h1 className="slider-title font-50 d-none d-sm-block">Póliza de Rentas</h1>
                            <h2 className="slider-title font-40 d-block d-sm-none">Póliza de Rentas</h2>
                            <p className="fs-4 wow fadeInRight">
                              ¡Prevenir problemas, preveer riesgos y proteger a nuestros clientes! Descubre cómo convertimos la <b>seguridad de tus rentas</b> en una experiencia excepcional para ti.
                            </p>
                            <Link className="btn-main mb10 mt20" href="/poliza_juridica">Conoce más</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sw-overlay s2"></div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div 
                    className="swiper-inner"
                    style={{
                      backgroundImage: 'url(/images/slider/banner-4.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="sw-caption">
                      <div className="container">
                        <div className="row gx-5 align-items-center">
                          <div className="col-lg-7 mb-sm-30 offset-lg-1">
                            <h2 className="slider-title font-50 d-none d-sm-block">La Red de Abogados más GRANDE de México</h2>
                            <h2 className="slider-title font-40 d-block d-sm-none">La Red de Abogados más GRANDE de México</h2>
                            <p className="fs-4 wow fadeInRight">
                              Investigación profesional al inquilino, contrato de arrendamiento profesional y acompañamiento desde la firma y en toda la vigencia del contrato.
                              <br />
                              <br />
                              ¡Encuentra tu sucursal más cercana y haz de tus rentas un negocio tranquilo!
                            </p>
                            <Link className="btn-main mb10" href="/sucursales">Ubica tu sucursal</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sw-overlay s2"></div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div 
                    className="swiper-inner"
                    style={{
                      backgroundImage: 'url(/images/slider/banner-5.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="sw-caption">
                      <div className="container">
                        <div className="row gx-5 align-items-center">
                          <div className="col-lg-7 mb-sm-30 offset-lg-1">
                            <h2 className="slider-title font-50 d-none d-sm-block">¡Únete a nuestro éxito y haz crecer tu negocio con una franquicia de Póliza de Rentas!</h2>
                            <h2 className="slider-title font-40 d-block d-sm-none">¡Únete a nuestro éxito y haz crecer tu negocio con una franquicia de Póliza de Rentas!</h2>
                            <p className="fs-4 wow fadeInRight">
                              Se líder en protección jurídico inmobiliaria en tu Ciudad, genera ingresos con un negocio probado y exitoso en todo México
                            </p>
                            <Link className="btn-main mb10" href="/sucursales">Sucursales</Link>
                            <Link className="btn-line mb10" href="/franquicias#conoce">Conoce más</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sw-overlay s2"></div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="swiper-button-prev d-block d-lg-none mt-60"></div>
              <div className="swiper-button-next d-block d-lg-none mt-60"></div>
              <div className="swiper-button-prev d-none d-lg-block"></div>
              <div className="swiper-button-next d-none d-lg-block"></div>
              <div className="swiper-pagination"></div>
              <div className="swiper-scrollbar"></div>
            </div>
          </section>

          {/* Resto del contenido se mantiene igual */}
          <section className="text-light bg-dark-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="subtitle s2 wow fadeInUp mb-3 bg-gris">Conoce más</div>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">¿Cómo me protege Póliza de Rentas?</h2>
                </div>

                <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay="0s">
                  <div>
                    <Image src="/images/svg/collaboration-svgrepo-com.svg" width={80} height={80} className="mb20" alt="Prevenir problemas" />
                    <h4>Prevenir problemas</h4>
                    <hr className="s2" />
                    <p>La prevención es clave para asegurar un arrendamiento confiable y seguro en México. En Póliza de Rentas, ofrecemos la investigación de inquilinos más completa a nivel nacional, garantizando la seguridad jurídica y confianza en cada contrato de arrendamiento.</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay=".2s">
                  <div>
                    <Image src="/images/svg/embedded-live-content-svgrepo-com.svg" width={80} height={80} className="mb20" alt="prever riesgos" />
                    <h4>Preveer riesgos</h4>
                    <hr className="s2" />
                    <p>Nuestro avanzado sistema de evaluación de riesgo legal nos permite proteger jurídicamente a los propietarios en todo México. Nuestras pólizas jurídicas de arrendamiento también incluyen protección contra la Ley de Extinción de Dominio, asegurando que tu propiedad esté legalmente resguardada.</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 wow fadeInRight" data-wow-delay=".4s">
                  <div>
                    <Image src="/images/svg/lock-svgrepo-com.svg" width={80} height={80} className="mb20" alt="proteger la inversión" />
                    <h4>Proteger la inversión</h4>
                    <hr className="s2" />
                    <p>Te brindamos acompañamiento legal desde la firma del contrato de arrendamiento y durante toda la vigencia del mismo, protegiendo tu patrimonio con cobertura 24/7 a través de nuestra app. Con Póliza de Rentas, tu propiedad y tu inversión están siempre seguras.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-sm-20 position-relative">
                  <div className="de_count wow fadeInUp">
                    <h3>+<span className="timer" data-to="300" data-speed="3000"></span>%</h3>
                    <h4>De crecimiento anual</h4>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20 position-relative">
                  <div className="de_count wow fadeInUp">
                    <h3><span className="timer" data-to="60" data-speed="3000"></span>+</h3>
                    <h4>Sucursales</h4>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20 position-relative">
                  <div className="de_count wow fadeInUp">
                    <h3><span className="timer" data-to="27" data-speed="3000"></span></h3>
                    <h4>Estados donde tenemos presencia</h4>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20 position-relative">
                  <div className="de_count wow fadeInUp">
                    <h3><span className="timer" data-to="0" data-speed="3000"></span> . <span className="timer" data-to="015" data-speed="3000"></span></h3>
                    <h4>Incidencia de juicios</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="no-top no-bottom">
            <div className="container">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="subtitle wow fadeInUp mb-3">Cómo contratar</div>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">Contrata tu Póliza de Rentas en 3 pasos</h2>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 col-sm-6 mb-sm-20 wow fadeInRight" data-wow-delay=".2s">
                  <div className="de-step-s1 text-dark">
                    <div className="d-number wow rotateIn font-50" data-wow-delay=".2s">1</div>
                    <h4>Ubica tu sucursal</h4>
                    <p className="">Contamos con una amplia red de Abogados Especialistas en todo el país.
                      Encuentra tu sucursal más cercana.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-sm-20 wow fadeInRight" data-wow-delay=".4s">
                  <div className="de-step-s1 text-dark">
                    <div className="d-number wow rotateIn font-50" data-wow-delay=".4s">2</div>
                    <h4>Selecciona tu Póliza</h4>
                    <p className="">Selecciona entre nuestras Pólizas la que más se adapte a tus necesidades.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-sm-20 wow fadeInRight" data-wow-delay=".6s">
                  <div className="de-step-s1 text-dark">
                    <div className="d-number wow rotateIn font-50" data-wow-delay=".6s">3</div>
                    <h4>Genera tu Póliza</h4>
                    <p className="">Envía los documentos, espera el resultado de la investigación y listo.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 d-flex justify-content-center">
                <Link className="btn-main mb10 mt20" href="/sucursales">Sucursales</Link>
              </div>
            </div>
          </section>

          <section className="bg-dark-1 text-light">
            <div className="container">
              <div className="row align-items-center gx-5">
                <div className="col-lg-6 mb-sm-20 position-relative">
                  <div className="images-deco-1">
                    <Image src="/images/misc/1.jpg" width={500} height={300} className="d-img-1 wow zoomIn" data-wow-delay="0s" alt="Quienes somos" />
                    <Image src="/images/misc/2.png" width={200} height={100} className="shadow-sm d-img-2 wow zoomIn" data-wow-delay=".5s" data-jarallax-element="100" alt="logo" />
                    <div className="d-img-3 bg-color wow zoomIn" data-wow-delay=".6s" data-jarallax-element="-50"></div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="subtitle s2 wow fadeInUp mb-3">Quiénes somos</div>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">Acerca de <br /> Póliza de Rentas</h2>
                  <p className="wow fadeInUp">Somos la empresa líder en México dedicada a proteger inmuebles en arrendamiento. Nuestros servicios de pólizas jurídicas para arrendamiento garantizan una protección integral en cada contrato, brindando tranquilidad y respaldo legal tanto a propietarios como a inquilinos.</p>
                  <p><b>¿Eres asesor inmobiliario?</b> Trabajamos contigo para asegurar el éxito de tus operaciones de arrendamiento. Con nuestro apoyo, no solo ofrecerás un servicio más profesional y de mejor calidad a tus clientes, sino que también simplificará tus actividades diarias al contar con el respaldo de un equipo experto en prevención y resolución de conflictos.</p>
                  <hr className="s2" />
                  <div className="spacer-10"></div>
                  <Link className="btn-main mb10" href="/nosotros">Conoce más</Link>
                  <Link className="btn-main mb10" href="/sucursales">Nuestras sucursales</Link>
                </div>
              </div>
            </div>
          </section>

          <section className="bo-bottom">
            <div className="container">
              <div className="row align-items-center gx-5">
                <div className="col-lg-6">
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">PREGUNTAS <br /> FRECUENTES</h2>
                  <div className="contenedor-preguntas">
                    <details>
                      <summary className="wow fadeInUp"><strong>¿Qué es una Póliza Jurídica?</strong></summary><br />
                      Es un contrato de prestación de servicios legales diseñado para brindarte protección durante todo el periodo de arrendamiento de tu inmueble. Es fundamental para garantizar que tu propiedad esté respaldada legalmente frente a cualquier eventualidad, asegurando una experiencia de arrendamiento segura en México.
                    </details>
                    <details>
                      <summary className="wow fadeInUp"><strong>¿Por qué es importante contratar <br /> una Póliza Jurídica?</strong></summary><br />
                      Es esencial para proteger tu propiedad con el respaldo de nuestros abogados especializados en arrendamiento inmobiliario. Esta protección te permitirá prevenir o resolver conflictos con tu inquilino de manera efectiva, garantizando que tu inversión esté segura y que cualquier problema relacionado con el arrendamiento pueda ser gestionado por expertos.
                    </details>
                    <details>
                      <summary className="wow fadeInUp"><strong>¿Qué tipo de protección jurídica debo elegir?</strong></summary><br />
                      Todas nuestras coberturas incluyen:
                      <ul>
                        <li>Investigación de inquilino</li>
                        <li>Perfilamiento del inquilino</li>
                        <li>Contrato profesional</li>
                        <li>Asesoramiento Jurídico</li>
                        <li>Resolución de conflictos</li>
                        <li>Recuperación de rentas vencidas Contáctanos para encontrar la protección jurídica ideal para ti.</li>
                      </ul>
                    </details>
                    <details>
                      <summary className="wow fadeInUp"><strong>¿Es necesario investigar a mi futuro inquilino?</strong></summary><br />
                      Sí, investigar a tu futuro inquilino es crucial. Este proceso te permite evaluar su capacidad para cumplir con el pago de la renta, además de revisar su historial, estabilidad y referencias. Realizar una investigación de tu inquilino completa te asegura que estés arrendando tu inmueble a una persona confiable, lo que reduce los riesgos y te brinda tranquilidad.
                    </details>
                    <details>
                      <summary className="wow fadeInUp"><strong>¿Cómo arrendatario obtengo algún beneficio al <br /> contratar una póliza jurídica?</strong></summary><br />
                      ¡Claro que sí! Al contratar una póliza jurídica, como arrendatario estarás protegido legalmente durante todo el periodo de arrendamiento. Esto garantiza que tus derechos como inquilino estarán respaldados, brindándote seguridad y confianza en el contrato de arrendamiento, y asegurando una experiencia de renta justa y transparente. Además, una Póliza Jurídica sirve como garantía en caso de no contar con un fiador.
                    </details>
                  </div>
                </div>
                <div className="col-lg-6 mb-sm-20 position-relative">
                  <div className="content">
                    <Image src="/images/services/convenio-prevencion-conflictos/preguntas.png" width={600} height={400} className="img-fluid posicion-imagen" alt="sucursales" />
                    <Link className="btn-main mb10 bg-gris posicion-boton" href="/sucursales">Sucursales</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bo-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="subtitle wow fadeInUp mb-3">Blog</div>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">Blog y noticias</h2>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row sequence">
                <div className="col-lg-4 col-sm-6 mb-sm-20 gallery-item">
                  <div className="de-item wow jarallax">
                    <div className="d-overlay">
                      <div className="d-label"></div>
                      <div className="d-text">
                        <h4>Arrendamiento Inmobiliario en México: Navegando con Éxito la Ley de Extinción de Dominio</h4>
                        <Link className="btn-main btn-fullwidth btn-white" href="/arrendamiento">Ver más</Link>
                      </div>
                    </div>
                    <Image src="/images/study-case/card1.png" width={400} height={300} className="img-fluid" alt="Arrendamiento" />
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6 mb-sm-20 gallery-item">
                  <div className="de-item wow">
                    <div className="d-overlay">
                      <div className="d-label"></div>
                      <div className="d-text">
                        <h4>Protege tu Inversión: Estafas Comunes en el Arrendamiento Inmobiliario y Cómo Resguardarte con Pólizas Jurídicas de Arrendamiento</h4>
                        <Link className="btn-main btn-fullwidth btn-white" href="/protege">Ver más</Link>
                      </div>
                    </div>
                    <Image src="/images/study-case/card2.png" width={400} height={300} className="img-fluid" alt="Protege" />
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6 mb-sm-20 gallery-item">
                  <div className="de-item wow">
                    <div className="d-overlay">
                      <div className="d-label"></div>
                      <div className="d-text">
                        <h4>Contrato de exclusividad inmobiliaria-¿Qué debe incluir?¿Cuáles son las obligaciones y derechos del asesor?</h4>
                        <Link className="btn-main btn-fullwidth btn-white" href="/contrato-exclusividad">Ver más</Link>
                      </div>
                    </div>
                    <Image src="/images/study-case/card3.png" width={400} height={300} className="img-fluid" alt="Contrato" />
                  </div>
                </div>
                <div className="col-lg-12 d-flex justify-content-center">
                  <Link className="btn-main mt-5" href="/blog">Ver más artículos</Link>
                </div>
              </div>
            </div>
          </section>

          <section className="no-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="padding60 sm-padding40 rounded-30 jarallax text-light">
                    <Image src="/images/background/banner.jpg" width={1200} height={400} className="jarallax-img" alt="como lo hacemos" />
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="subtitle s2 wow fadeInUp mb-3">Cómo lo hacemos</div>
                        <h2 className="mb20 wow fadeInUp" data-wow-delay=".2s">CONTRATA CON PÓLIZA DE RENTAS SOMOS LA MEJOR OPCIÓN EN EL MERCADO NACIONAL</h2>

                        <div className="s2 mb-4">
                          Con <b>Póliza de Rentas</b>, obtienes la máxima protección para tu propiedad. Nuestro exclusivo <b>Triángulo de la Seguridad</b> —basado en <b>prevenir, prever y proteger</b>— te brinda las herramientas necesarias para asegurar un <b>negocio inmobiliario sólido y rentable</b>. Además, gracias a nuestra rigurosa <b>investigación de inquilinos,</b> garantizamos la <b>prevención de problemas</b> y ofrecemos total <b>tranquilidad</b> gracias a nuestras pólizas jurídicas.
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <iframe width="100%" className="wow fadeInUp rounded-4 my-4 border-16" height="300" src="https://www.youtube.com/embed/e6nYd5wZ5dQ?si=pAGgv95KUX39kEQZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Javascript Files */}
      <script src="/js/plugins.js"></script>
      <script src="/js/designesia.js"></script>
      <script src="/js/custom-marquee.js"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          function loadScript(a){
            var b=document.getElementsByTagName("head")[0],
            c=document.createElement("script");
            c.type="text/javascript",
            c.src="https://tracker.metricool.com/resources/be.js",
            c.onreadystatechange=a,
            c.onload=a,
            b.appendChild(c)
          }
          loadScript(function(){
            beTracker.t({hash:"e7b9beb5ef17e78a4fad2f402d03de0f"})
          });
        `
      }} />
    </>
  );
}