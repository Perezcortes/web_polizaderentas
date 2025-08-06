'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {

  const services = [
    {
      icon: '/images/svg/collaboration-svgrepo-com.svg',
      title: 'Póliza Jurídica',
      desc: 'Nos encargamos de protegerte como propietario y garantizar la seguridad de tu inmueble durante todo el arrendamiento.',
      link: '/services/poliza_juridica'
    },
    {
      icon: '/images/svg/embedded-live-content-svgrepo-com.svg',
      title: 'Convenio de Prevención de Conflictos',
      desc: 'Asegura que tu contrato de arrendamiento tenga validez legal mediante un convenio de mediación privada, evitando conflictos antes de que sucedan.',
      link: '/services/convenio_prevencion'
    },
    {
      icon: '/images/svg/lock-svgrepo-com.svg',
      title: 'Convenio de Transacción',
      desc: 'Te apoyamos con un Convenio de Transacción firmado ante Notario Público, brindándote máxima seguridad jurídica.',
      link: '/services/convenio_transaccion'
    },
    {
      icon: '/images/svg/search.svg',
      title: 'Investigación de inquilinos',
      desc: 'Evaluamos la solvencia de cada persona asegurando su capacidad de pago mensual, brindando tranquilidad y seguridad.',
      link: '/services/investigacion_inquilinos'
    },
    {
      icon: '/images/svg/firma.svg',
      title: 'Firma electrónica',
      desc: 'Usamos Firma Electrónica Avanzada certificada para contratos de arrendamiento válidos ante la Secretaría de Economía.',
      link: '/services/firma_electronica'
    }
  ];

  return (
    <>
      <Head>
        <title>Servicios - Póliza de Rentas</title>
        <meta name="description" content="Conoce nuestros servicios para propietarios e inquilinos." />
      </Head>

      <section className="text-light no-top no-bottom position-relative z-1000">
        <div className="v-center">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, Parallax]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            speed={1200}
            parallax
            pagination={{ clickable: true }}
            navigation
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
                        <h1 className="slider-title">Servicios</h1>
                        <p className="fs-4">
                          Nuestro equipo de abogados ha diseñado cinco soluciones para garantizar la seguridad de tu patrimonio.
                        </p>
                        <Link className="btn-main mt20 me-1" href="#todos-los-servicios">Ver todos los servicios</Link>
                        <Link className="btn-main mt20" href="/sucursales">Sucursales</Link>
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
          <div className="swiper-scrollbar"></div>
        </div>
      </section>

      <section id="todos-los-servicios">
        <div className="container">
          <div className="row g-3">
            {services.map((s, index) => (
              <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                <div className="p-4 pb-2 bg-grey h-100">
                  <Image src={s.icon} width={80} height={80} alt={s.title} className="mb20" />
                  <h4>{s.title}</h4>
                  <hr className="s2" />
                  <p>{s.desc}</p>
                  <Link className="btn-main mt20" href={s.link}>Ver más</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
