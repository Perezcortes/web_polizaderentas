'use client';

import { useEffect, useState } from 'react';
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
import { Office } from '../../../types/office';
import Swal from 'sweetalert2';

interface User {
  id: number;
  name: string;
  img_user: string | null;
}

export default function SucursalPage() {
  const [office, setOffice] = useState<Office | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    numero: '',
    type: 'Propietario',
    captcha: '',
    id: ''
  });

  useEffect(() => {
    // Get ID from URL
    const path = window.location.pathname.split('/');
    const id = path[path.length - 1];

    if (id) {
      setFormData(prev => ({ ...prev, id }));
      fetchOfficeData(id);
    }
  }, []);

  const fetchOfficeData = async (id: string) => {
    try {
      setLoading(true);
      const response = await fetch(`https://app.polizaderentas.com/api/offices/find-by-id/${id}`);
      const data = await response.json();

      if (data.office && data.office.length > 0) {
        setOffice(data.office[0]);
      }

      if (data.users) {
        setUsers(data.users);
      }
    } catch (error) {
      console.error('Error fetching office data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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

      const result = await response.json();

      if (result.status === 'success') {
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: result.message,
          confirmButtonText: 'OK',
        });

        // Reset form
        setFormData({
          nombre: '',
          apellido: '',
          email: '',
          numero: '',
          type: 'Propietario',
          captcha: '',
          id: formData.id
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema con el envío. Por favor, intenta nuevamente.',
          confirmButtonText: 'OK',
        });
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

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (!office) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <h4>No se encontró la sucursal</h4>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Póliza de Rentas - {office.nombre_suc}</title>
        <link rel="icon" href="/images/icon.png" type="image/gif" sizes="16x16" />
        <meta name="description" content="Nuestra tecnología revoluciona la protección jurídica en el arrendamiento inmobiliario. Forma parte del futuro de la seguridad para propietarios e inquilinos." />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
      </Head>

      {/* Meta Pixel Code */}
      <Script id="fb-pixel">
        {`
          !function(f,b,e,v,n,t,s){
            if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '217583817249537');
            fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img height="1" width="1" style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=217583817249537&ev=PageView&noscript=1"
        />
      </noscript>

      {/* Google tag (gtag.js) */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-3HT5BR97DT" strategy="afterInteractive" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3HT5BR97DT');
        `}
      </Script>

      <div id="wrapper">
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>

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
                className="swiper"
              >
                <SwiperSlide>
                  <div
                    className="swiper-slide"
                    data-jarallax-element="150"
                  >
                    <div
                      className="swiper-inner"
                      style={{
                        backgroundImage: 'url(/images/slider/sucursal.png)',
                        backgroundSize: 'cover',
                        backgroundPosition:  '1% center',
                        minHeight: '80vh', // o usa minHeight si quieres que crezca dinámicamente
                      }}
                    >
                      <div className="sw-caption">
                        <div className="container">
                          <div className="row gx-5 align-items-center">
                            <div className="col-lg-7 mb-sm-30 offset-lg-1">
                              <h1 className="slider-title font-50">{office.nombre_suc}</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sw-overlay s2"></div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="swiper-pagination"></div>
              <div className="swiper-scrollbar"></div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="row gx-5 justify-content-center">
                <div className="col-lg-7">
                  <div dangerouslySetInnerHTML={{ __html: office.descripcion_suc }} />
                  <div className="row mt-5">
                    {users.map((user, index) => (
                      <div key={user.id} className="col-lg-3">
                        <img
                          src={user.img_user
                            ? `https://pub-7d69744bfc94470c9f3257d29c3a67d3.r2.dev/${user.img_user}`
                            : '/images/storage/default.jpg'}
                          alt={user.name}
                          className="img-fluid"
                        />
                        <p>{user.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="p-4 pb-2 bg-grey">
                    <div
                      className="d-inline-block px-3 py-1 mb-3"
                      style={{
                        backgroundColor: 'grey',
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                        borderRadius: '8px', // hace que sea un "pill"
                      }}
                    >
                      {office.estado}
                    </div>

                    <h4>{office.nombre_suc}</h4>
                    <hr className="s2" />
                    <p>{`${office.calle} No. ${office.numExt}, ${office.municipio}, ${office.estado}`}</p>
                    <p>{office.telefono_suc}</p>
                    <p>{office.email_suc}</p>
                  </div>
                  <br />

                  <div className="p-4 pb-2 bg-grey">
                    <h4>Envía tus datos y un agente de Póliza de Rentas se pondrá en contacto contigo</h4>

                    <form className="formulario-informes" onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input
                          type="text"
                          name="nombre"
                          className="form-control"
                          value={formData.nombre}
                          onChange={handleInputChange}
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
                          onChange={handleInputChange}
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
                          onChange={handleInputChange}
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
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="type" className="form-label">Soy un</label>
                        <select
                          name="type"
                          className="form-control"
                          value={formData.type}
                          onChange={handleInputChange}
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
                  <br />

                  <iframe
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(parseFloat(office.lng) - 0.005)
                      }%2C${encodeURIComponent(parseFloat(office.lat) - 0.005)
                      }%2C${encodeURIComponent(parseFloat(office.lng) + 0.005)
                      }%2C${encodeURIComponent(parseFloat(office.lat) + 0.005)
                      }&layer=mapnik&marker=${encodeURIComponent(parseFloat(office.lat))
                      }%2C${encodeURIComponent(parseFloat(office.lng))}`}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}