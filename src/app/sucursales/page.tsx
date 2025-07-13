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
import Mapa from '../../components/mapa';

interface Office {
  id: number;
  nombre_suc: string;
  calle: string;
  numExt: string;
  colonia: string;
  municipio: string;
  estado: string;
  cp: string;
  email_suc: string;
  telefono_suc: string;
  lat: string;
  lng: string;
}

export default function SucursalesPage() {
  const [offices, setOffices] = useState<Office[]>([]);
  const [uniqueStates, setUniqueStates] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState<string>('todos');
  const [showAll, setShowAll] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOffices = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://app.polizaderentas.com/api/offices');
        const data = await response.json();
        setOffices(data);

        // Get unique states and sort them
        const states = Array.from(new Set(data.map((office: Office) => office.estado))) as string[];
        states.sort((a, b) => a.localeCompare(b));
        setUniqueStates(states);
      } catch (error) {
        console.error('Error fetching offices:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOffices();
  }, []);

  const handleStateClick = (stateId: string) => {
    setSelectedState(stateId);
    setShowAll(false);
    
    // Scroll to branches section
    const branchesDiv = document.getElementById('branches');
    if (branchesDiv) {
      branchesDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
    setShowAll(false);
  };

  const filteredOffices = selectedState === 'todos' || showAll
    ? offices
    : offices.filter(office => 
        office.estado.toLowerCase().replace(/ /g, '-') === selectedState
      );

  return (
    <>
      <Head>
        <title>Sucursales - Póliza de Rentas</title>
        <meta name="description" content="Encuentra nuestras sucursales en toda la República Mexicana. La red legal más grande de México para protección jurídica en arrendamiento inmobiliario." />
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
            className="swiper"
          >
            <SwiperSlide>
              <div 
                className="swiper-inner" 
                style={{
                  backgroundImage: 'url(/images/slider/banner-sucursales.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '80vh'
                }}
              >
                <div className="sw-caption">
                  <div className="container">
                    <div className="row gx-5 align-items-center">
                      <div className="col-lg-10 mb-sm-30">
                        <h1 className="slider-title font-60">
                          La red legal más grande <br />
                          de México
                        </h1>
                      </div>
                      <div className="col-lg-12">
                        <div className="subtitle s2 mb-4">
                          <p>Póliza de Rentas cuenta con más de 50 sucursales alrededor <br />
                            de todo México, trabajando de la mano con las mejores <br />
                            inmobiliarias y asesores en la contratación de pólizas jurídicas
                            <br />
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="spacer-10"></div>
                        <Link className="btn-main mb10" href="#mapa">
                          Ubica tu sucursal
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
          <div className="swiper-scrollbar"></div>
        </div>
      </section>

      {/* Mapa y Filtros */}
      <section id="mapa">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Nuestras Sucursales</h2>
            </div>
            <div className="col-lg-4">
              <button 
                type="button" 
                className="subtitle s2 wow fadeInUp mb-3" 
                onClick={() => setShowAll(true)}
                style={{ display: showAll ? 'none' : 'block' }}
              >
                Ver todas las sucursales
              </button>
              <button 
                type="button" 
                className="subtitle s2 wow fadeInUp mb-3" 
                onClick={() => setShowAll(false)}
                style={{ display: showAll ? 'block' : 'none' }}
              >
                Filtrar por estado
              </button>
              <select 
                className="form-select" 
                aria-label="Filtrar por estado"
                id="filtroEstados"
                value={selectedState}
                onChange={handleStateChange}
                style={{ display: showAll ? 'none' : 'block' }}
              >
                <option value="todos">Mostrar todos</option>
                {uniqueStates.map(state => (
                  <option 
                    key={state} 
                    value={state.toLowerCase().replace(/ /g, '-')}
                  >
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Mapa de México */}
          <div className="row mt-5">
            <div className="col-12">
              {isLoading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                  <p className="mt-3">Cargando mapa...</p>
                </div>
              ) : (
                <Mapa offices={offices} onStateClick={handleStateClick} />
              )}
            </div>
          </div>
        </div>

        {/* Sección de sucursales */}
        <section id="branches" className="">
          <div className="container">
            <div className="row" id="officeContainer">
              {filteredOffices.length > 0 ? (
                filteredOffices.map(office => (
                  <div 
                    key={office.id} 
                    className="col-lg-4 col-md-6 mb-4 office-card"
                    data-estado={office.estado.toLowerCase().replace(/ /g, '-')}
                  >
                    <div className="card h-100">
                      <div className="card-body">
                        <iframe 
                          src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                            encodeURIComponent(parseFloat(office.lng) - 0.005)
                          }%2C${
                            encodeURIComponent(parseFloat(office.lat) - 0.005)
                          }%2C${
                            encodeURIComponent(parseFloat(office.lng) + 0.005)
                          }%2C${
                            encodeURIComponent(parseFloat(office.lat) + 0.005)
                          }&layer=mapnik&marker=${
                            encodeURIComponent(parseFloat(office.lat))
                          }%2C${
                            encodeURIComponent(parseFloat(office.lng))
                          }`} 
                          width="100%" 
                          height="300" 
                          style={{ border: 0 }} 
                          allowFullScreen 
                          loading="lazy"
                        />
                        <h5 className="card-title mt-3">{office.nombre_suc}</h5>
                        <p className="card-text">
                          <strong>Dirección:</strong> {office.calle} {office.numExt}, {office.colonia}, {office.municipio}, {office.estado}, CP {office.cp}<br />
                          <strong>Email:</strong> {office.email_suc}<br />
                          <strong>Teléfono:</strong> {office.telefono_suc}<br />
                        </p>
                        <Link 
                          className="btn-main mb10" 
                          href={`/sucursales/${office.id}`}
                          passHref
                        >
                          Ver más
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <h4>No se encontraron sucursales para este estado</h4>
                </div>
              )}
            </div>
          </div>
        </section>
      </section>

      {/* Sección Quiénes somos */}
      <section className="bg-dark-1 text-light">
        <div className="container">
          <div className="row align-items-center gx-5">
            <div className="col-lg-6 mb-sm-20 position-relative">
              <div className="images-deco-1">
                <Image 
                  src="/images/misc/1.png" 
                  className="d-img-1 wow zoomIn" 
                  data-wow-delay="0s" 
                  alt="quienes somos"
                  width={300}
                  height={300}
                />
                <Image 
                  src="/images/misc/2.png" 
                  className="d-img-2 wow zoomIn" 
                  data-wow-delay=".5s" 
                  data-jarallax-element="100" 
                  alt="logo"
                  width={200}
                  height={200}
                />
                <div className="d-img-3 bg-color wow zoomIn" data-wow-delay=".6s" data-jarallax-element="-50"></div>
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
              <Link className="btn-main mb10" href="/franquicias#conoce">
                Conoce más
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}