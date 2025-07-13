'use client';

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Swal from 'sweetalert2';
import '../contacto/style.css';

// Extiende la interfaz Window para incluir jQuery y $
declare global {
    interface Window {
        jQuery?: any;
        $?: any;
    }
}

export default function ContactPage() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        numero: '',
        type: 'Propietario',
        captcha: '',
        id: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('https://app.polizaderentas.com/api/offices/contacto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData as any).toString()
            });

            const data = await response.json();

            if (data.status === 'success') {
                Swal.fire({
                    icon: 'success',
                    title: '¡Éxito!',
                    text: data.message,
                    confirmButtonText: 'OK',
                });
                // Reset form after successful submission
                setFormData({
                    nombre: '',
                    apellido: '',
                    email: '',
                    numero: '',
                    type: 'Propietario',
                    captcha: '',
                    id: ''
                });
            } else {
                throw new Error(data.message || 'Error en el envío');
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema con el envío. Por favor, intenta nuevamente.',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <>
            <Head>
                <title>Contacto - Póliza de Rentas</title>
                <meta name="description" content="Contáctanos para proteger tu patrimonio con nuestros servicios jurídicos especializados en arrendamiento" />
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
                    <img height="1" width="1" style={{ display: 'none' }}
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

            {/* Script de SweetAlert2 */}
            <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" strategy="lazyOnload" />

            {/* Banner superior */}
            <section className="text-light jarallax">
                <Image
                    src="/images/slider/banner3.jpg"
                    alt="Banner de contacto"
                    width={1920}
                    height={600}
                    className="jarallax-img custom-banner-img"
                />

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
                            {/* Formulario de contacto */}
                            <div className="col-lg-6 p-4 pb-2 bg-grey">
                                <h4>Envía tus datos y un agente de Póliza de Rentas se pondrá en contacto contigo</h4>

                                <form className="formulario-informes" id="contactoForm" onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="nombre" className="form-label">Nombre</label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            className="form-control"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="apellido" className="form-label">Primer Apellido</label>
                                        <input
                                            type="text"
                                            name="apellido"
                                            className="form-control"
                                            value={formData.apellido}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="numero" className="form-label">WhatsApp</label>
                                        <input
                                            type="number"
                                            name="numero"
                                            className="form-control"
                                            value={formData.numero}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="mensaje" className="form-label">Soy un</label>
                                        <select
                                            name="type"
                                            className="form-control"
                                            value={formData.type}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="Propietario">Propietario</option>
                                            <option value="Inquilino">Inquilino</option>
                                            <option value="Asesor Inmobiliario">Asesor Inmobiliario</option>
                                            <option value="Director Inmobiliario">Director Inmobiliario</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input type="hidden" name="captcha" value={formData.captcha} />
                                        <input type="hidden" name="id" value={formData.id} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Enviar</button>
                                </form>
                            </div>

                            <br /><br />

                            {/* Mapa */}
                            <div className="col-lg-6">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.4002200013833!2d-99.2094382889982!3d19.43830404042254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2021965d6cd41%3A0xbae0eb331a021324!2sSears%20Polanco!5e0!3m2!1ses-419!2smx!4v1711477157778!5m2!1ses-419!2smx"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ubicación de Póliza de Rentas"
                                ></iframe>
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
                                <Image
                                    src="/images/misc/1.png"
                                    width={500}
                                    height={300}
                                    className="d-img-1 wow zoomIn"
                                    data-wow-delay="0s"
                                    alt="quienes somos"
                                />
                                <Image
                                    src="/images/misc/2.png"
                                    width={200}
                                    height={100}
                                    className="d-img-2 wow zoomIn"
                                    data-wow-delay=".5s"
                                    alt="logo"
                                />
                                <div className="d-img-3 bg-color wow zoomIn" data-wow-delay=".6s"></div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="subtitle s2 wow fadeInUp mb-3">Quiénes somos</div>
                            <h2 className="wow fadeInUp" data-wow-delay=".2s">Acerca de <br /> Póliza de Rentas</h2>
                            <p className="wow fadeInUp">Somos una empresa dedicada a proteger el patrimonio de las personas,
                                nuestros servicios están destinados a propietarios, inmobiliarias o administradores de
                                inmuebles que buscan dar sus propiedades en arrendamiento.</p>
                            <hr className="s2" />
                            <div className="spacer-10"></div>
                            <a className="btn-main mb10" href="/franquicias#conoce">Conoce más</a>
                            <a className="btn-main mb10" href="/sucursales">Nuestras sucursales</a>
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