'use client';

// Extiende la interfaz Window para incluir WOW
declare global {
    interface Window {
        WOW?: any;
    }
}

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';

export default function NosotrosPage() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const scripts = [
                '/js/plugins.js',
                '/js/designesia.js',
                '/js/custom-marquee.js',
                '/js/wow.min.js'
            ];

            scripts.forEach(src => {
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

    const handleWOWLoad = () => {
        if (window.WOW) {
            new window.WOW().init();
        }
    };

    return (
        <>
            <Head>
                <title>Nosotros - Póliza de Rentas</title>
                <meta
                    name="description"
                    content="Conoce nuestro equipo de abogados especializados en protección jurídica inmobiliaria"
                />
            </Head>

            {/* Hero / Slider */}
            <section className="text-light no-top no-bottom position-relative z-1000">
                <div className="v-center">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, Parallax]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        direction="horizontal"
                        loop={true}
                        speed={1200}
                        parallax={true}
                        pagination={{ clickable: true }}
                        navigation={true}
                        className="swiper"
                    >
                        <SwiperSlide>
                            <div
                                className="swiper-inner"
                                style={{
                                    backgroundImage: 'url(/images/slider/banner-nosotros.jpg)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    minHeight: '80vh'
                                }}
                            >
                                <div className="sw-caption">
                                    <div className="container">
                                        <div className="row gx-5 align-items-center">
                                            <div className="col-lg-8 mb-sm-20">
                                                <div className="subtitle s2 mb-4">PÓLIZA DE RENTAS</div>
                                                <h1 className="slider-title">
                                                    Expertos en protección jurídica inmobiliaria.
                                                </h1>
                                            </div>
                                            <div className="col-lg-6">
                                                <p className="slider-teaser">
                                                    Protegemos tu propiedad, cuidamos lo que más importa
                                                </p>
                                                <hr className="s2" />
                                                <div className="spacer-10"></div>
                                                <Link className="btn-main mb10" href="/#acerca-de">
                                                    Conócenos
                                                </Link>
                                                &nbsp;
                                                <Link className="btn-line mb10" href="/sucursales">
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

                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>

            {/* Servicios */}
            <section className="no-top">
                <div className="container">
                    <div className="row g-4 mt-100 sm-mt-0 z-1000 justify-content-center">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="col-lg-3 col-xs-12 wow fadeInUp" data-wow-delay={`${i * 0.2}s`}>
                                <div>
                                    <Image
                                        src={`/images/services/nosotros-0${i}.jpg`}
                                        width={400}
                                        height={300}
                                        className="img-fullwidth rounded-20 mb20"
                                        alt={`nosotros-${i}`}
                                        loading="lazy"
                                    />
                                    <h4>
                                        {i === 1 && 'Abogados Calificados'}
                                        {i === 2 && 'Protección Jurídica Inmobiliaria'}
                                        {i === 3 && 'Los Mejores Resultados'}
                                    </h4>
                                    <hr className="s2" />
                                    <p>
                                        {i === 1 &&
                                            'Contamos con un equipo de abogados especializados en Derecho Inmobiliario, certificados y respaldados por una amplia experiencia. Nuestro equipo en oficinas centrales se encarga de brindar asesoría legal profesional en arrendamientos inmobiliarios en México, asegurando que cada contrato esté jurídicamente blindado.'}
                                        {i === 2 &&
                                            'En Póliza de Rentas, nuestra prioridad es la seguridad de nuestros propietarios. Realizamos investigaciones exhaustivas de cada inquilino, garantizando una experiencia de arrendamiento segura y libre de preocupaciones. Nuestro enfoque en protección jurídica inmobiliaria te asegura un respaldo sólido desde el inicio.'}
                                        {i === 3 &&
                                            'Gracias a nuestros procesos de perfilamiento de inquilinos y protección jurídica, logramos mantener una incidencia de reclamaciones menor al 2%. Esta baja tasa refleja la seguridad de nuestras pólizas jurídicas y la tranquilidad que ofrecemos a propietarios que buscan arrendar sus inmuebles.'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nuestro objetivo */}
            <section className="jarallax text-light">
                <Image
                    src="/images/services/nosotros-04.jpg"
                    alt="Nuestro objetivo"
                    className="jarallax-img"
                    fill // o especifica width y height
                    style={{ objectFit: 'cover' }}
                />
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-6">
                            <div className="subtitle s2 wow fadeInUp mb-3">Nuestro objetivo</div>
                            <h2 className="mb20 wow fadeInUp" data-wow-delay=".2s">
                                La mejor experiencia en la renta de inmuebles con Póliza de Rentas
                            </h2>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <p className="mb20 wow fadeInUp" data-wow-delay=".2s">
                                Garantizamos la <b>mejor experiencia en el arrendamiento</b> de inmuebles,
                                mediante un <b>perfilamiento exhaustivo de inquilinos</b> y una sólida <b>protección jurídica.</b>
                                Nuestro objetivo es que los propietarios disfruten de una renta segura y sin complicaciones,
                                mientras que los inquilinos reciben un <b>trato justo y adecuado</b> por parte de los arrendadores.
                            </p>
                        </div>

                        <div className="col-lg-4">
                            <ul className="list-unstyled">
                                <li className="mb20 wow fadeInUp" data-wow-delay=".3s">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                                    </svg>
                                    <b>Confía en nuestros abogados expertos en arrendamiento inmobiliario</b>
                                </li>

                                <li className="mb20 wow fadeInUp" data-wow-delay=".4s">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                                    </svg>
                                    Tu patrimonio en nuestras manos estará bien protegido.
                                </li>

                                <li className="mb20 wow fadeInUp" data-wow-delay=".5s">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                                    </svg>
                                    La <b>protección jurídica más completa</b> del mercado, con una inversión accesible para garantizar la seguridad de tu propiedad.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row text-center justify-content-center">
                        <div className="col-lg-8 mb20 wow fadeInUp" data-wow-delay=".3s">
                            <a className="btn-line mb10" href="/sucursales">Sucursales</a>&nbsp;
                            <a className="btn-main mb10" href="/servicios">Adquiere una franquicia</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nuestro equipo */}
            <section className="bg-dark-1 text-light">
                <div className="container">
                    <div className="row align-items-center gx-5">

                        <div className="col-lg-6 mb-sm-20">
                            <div className="subtitle wow fadeInUp mb-3">Nuestro equipo</div>
                            <h2 className="wow fadeInUp" data-wow-delay=".2s">Sólo los mejores abogados</h2>
                            <p className="wow fadeInUp">
                                Nuestra visión es ofrecer experiencias positivas de protección jurídica en toda la República Mexicana,
                                a través de nuestras sucursales encabezadas por socios representantes especializados en arrendamiento.
                            </p>
                            <p>
                                Cada uno de nuestros abogados en arrendamiento inmobiliario es evaluado y recibe retroalimentación por parte
                                de propietarios e inquilinos, lo que garantiza un servicio de alta calidad y confianza en la protección legal de inmuebles.
                            </p>
                            <hr className="s2" />
                            <div className="spacer-10"></div>
                            <a className="btn-line mb10" href="/sucursales">Ubica tu sucursal</a>
                        </div>

                        <div className="col-lg-6 position-relative">
                            <div className="images-deco-1">
                                <img
                                    src="images/services/nosotros-05.jpg"
                                    className="d-img-1 wow zoomIn"
                                    data-wow-delay="0s"
                                    alt="nosotros"
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

                    </div>
                </div>
            </section>
        </>
    );
}
