'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import Head from 'next/head';
import Link from 'next/link';
import Mapa from '../../components/sucursales/mapa';
import RecentPosts from '../../components/blog/RecentPosts';
import Spinner from '../../components/ui/Spinner';
import { Office } from '../../types/office';
import './styles.css';

declare global {
  interface Window {
    jQuery?: any;
    $?: any;
  }
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
        const token = process.env.NEXT_PUBLIC_API_KEY;
        if (!token) {
          throw new Error('API key no configurada');
        }
        const response = await fetch('https://app.polizaderentas.com/api/offices', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          //console.error('API Error:', errorData);
          throw new Error(`HTTP error! status: ${response.status} - ${errorData.message || ''}`);
        }
        
        const data = await response.json();
        //console.log('API Response:', data); // Debug log
        
        // Handle different response formats
        let officesArray = data;
        if (data.data && Array.isArray(data.data)) {
          officesArray = data.data;
        } else if (data.offices && Array.isArray(data.offices)) {
          officesArray = data.offices;
        } else if (!Array.isArray(data)) {
          console.error('API response is not an array:', data);
          officesArray = [];
        }
        
        setOffices(officesArray);

        // Get unique states and sort them - only if we have valid data
        if (Array.isArray(officesArray) && officesArray.length > 0) {
          const states = Array.from(new Set(officesArray.map((office: Office) => office.estado).filter(Boolean))) as string[];
          states.sort((a, b) => a.localeCompare(b));
          setUniqueStates(states);
        } else {
          setUniqueStates([]);
        }
      } catch (error) {
        //console.error('Error fetching offices:', error);
        setOffices([]);
        setUniqueStates([]);
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

  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // Aplica filtro
  const filteredOffices = selectedState === 'todos' || showAll
    ? offices
    : offices.filter(office =>
      office.estado.toLowerCase().replace(/ /g, '-') === selectedState
    );

  // ⚠️ El total de páginas debe depender de los resultados filtrados
  const totalPages = Math.ceil(filteredOffices.length / ITEMS_PER_PAGE);

  // Obtén los elementos de la página actual
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredOffices.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Cambia de página
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const paginatedOffices = filteredOffices.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedState, showAll]);



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
            loop={false} // Disabled because there's only one slide
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

            {/* Columna izquierda: Título y filtros */}
            <div className="col-lg-5 mb-4">
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Nuestras Sucursales</h2>

              <button
                type="button"
                className="subtitle s2 wow fadeInUp mb-3"
                onClick={() => setShowAll(true)}
                style={{ display: showAll ? 'none' : 'block' }}
              >
                Ver todas las sucursales
              </button>

              <select
                className="form-select"
                aria-label="Filtrar por estado"
                id="filtroEstados"
                value={selectedState}
                onChange={handleStateChange}
                style={{ display: 'block' }}
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

            {/* Columna derecha: Mapa */}
            <div className="col-lg-7">
              {isLoading ? (
                <Spinner message="Cargando mapa..." size="3rem" />
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
              {paginatedOffices.length > 0 ? (
                paginatedOffices.map((office) => (
                  <div
                    key={office.id}
                    className="col-lg-4 col-md-6 mb-4 office-card"
                    data-estado={office.estado.toLowerCase().replace(/ /g, '-')}
                  >
                    <div className="card h-100">
                      <div className="card-body">
                        <iframe
                          src={`https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(parseFloat(office.lng) - 0.005)
                            }%2C${encodeURIComponent(parseFloat(office.lat) - 0.005)
                            }%2C${encodeURIComponent(parseFloat(office.lng) + 0.005)
                            }%2C${encodeURIComponent(parseFloat(office.lat) + 0.005)
                            }&layer=mapnik&marker=${encodeURIComponent(parseFloat(office.lat))
                            }%2C${encodeURIComponent(parseFloat(office.lng))}`}
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
                        <Link className="btn-main mb10" href={`/sucursales/${office.nombre_suc.toLowerCase().replace(/\s+/g, '-').replace(/[áàäâ]/g, 'a').replace(/[éèëê]/g, 'e').replace(/[íìïî]/g, 'i').replace(/[óòöô]/g, 'o').replace(/[úùüû]/g, 'u').replace(/ñ/g, 'n')}`} passHref>
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

            {/* Paginación */}
            {totalPages >= 1 && (
              <div className="pagination">
                {/* Botón Anterior */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage <= 1}
                  className={currentPage <= 1 ? 'disabled' : ''}
                >
                  « Anterior
                </button>

                {/* Mostrar siempre la primera página */}
                <button
                  onClick={() => handlePageChange(1)}
                  className={currentPage === 1 ? 'active' : ''}
                >
                  1
                </button>

                {/* Mostrar puntos suspensivos si hay páginas ocultas al inicio */}
                {currentPage > 3 && <span className="ellipsis">...</span>}

                {/* Mostrar página anterior si no es la primera */}
                {currentPage > 2 && currentPage - 1 <= totalPages && (
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    {currentPage - 1}
                  </button>
                )}

                {/* Mostrar página actual si no es la primera ni la última */}
                {currentPage !== 1 && currentPage !== totalPages && (
                  <button
                    onClick={() => handlePageChange(currentPage)}
                    className="active"
                  >
                    {currentPage}
                  </button>
                )}

                {/* Mostrar página siguiente si no es la última */}
                {currentPage < totalPages - 1 && (
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    {currentPage + 1}
                  </button>
                )}

                {/* Mostrar puntos suspensivos si hay páginas ocultas al final */}
                {currentPage < totalPages - 2 && <span className="ellipsis">...</span>}

                {/* Mostrar siempre la última página si hay más de 1 página */}
                {totalPages > 1 && (
                  <button
                    onClick={() => handlePageChange(totalPages)}
                    className={currentPage === totalPages ? 'active' : ''}
                  >
                    {totalPages}
                  </button>
                )}

                {/* Botón Siguiente */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                  className={currentPage >= totalPages ? 'disabled' : ''}
                >
                  Siguiente »
                </button>
              </div>
            )}
          </div>
        </section>
      </section>

      {/* Sección Quiénes somos */}
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
                  data-jarallax-element="100"
                  alt="logo"
                />
                <div
                  className="d-img-3 bg-color wow zoomIn"
                  data-wow-delay=".6s"
                  data-jarallax-element="-50"
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
                nuestros servicios están destinados a propietarios, inmobiliarias o administradores de
                inmuebles que buscan dar sus propiedades en arrendamiento.
              </p>
              <hr className="s2" />
              <div className="spacer-10"></div>
              <a className="btn-main mb10" href="/franquicias#conoce">
                Conoce más
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Blog */}
      <section className="bo-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="subtitle wow fadeInUp mb-3">Blog</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Blog y noticias</h2>
            </div>
          </div>
        </div>

        {/* Componente de posts recientes - Mantiene los estilos originales */}
        <RecentPosts />
      </section>
    </>
  );
}