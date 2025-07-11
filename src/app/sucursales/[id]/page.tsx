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
import { useParams } from 'next/navigation';
import Swal from 'sweetalert2';

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
  descripcion_suc: string;
}

interface User {
  id: number;
  name: string;
  img_user: string | null;
}

interface OfficeData {
  office: Office[];
  users: User[];
}

export default function SucursalDetailPage() {
  const params = useParams();
  const idSucursal = params.id as string;
  const [officeData, setOfficeData] = useState<OfficeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    numero: '',
    type: 'Propietario',
    id: idSucursal
  });

  useEffect(() => {
    const fetchOfficeData = async () => {
      try {
        const response = await fetch(`https://app.polizaderentas.com/api/offices/find-by-id/${idSucursal}`);
        const data = await response.json();
        setOfficeData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching office data:', error);
        setLoading(false);
      }
    };

    fetchOfficeData();
  }, [idSucursal]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
          id: idSucursal
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
      console.error('Error submitting form:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema con el envío. Por favor, intenta nuevamente.',
        confirmButtonText: 'OK',
      });
    }
  };

  if (loading) {
    return <div className="text-center py-5">Cargando...</div>;
  }

  if (!officeData || officeData.office.length === 0) {
    return <div className="text-center py-5">No se encontró la sucursal</div>;
  }

  const office = officeData.office[0];
  const lat = parseFloat(office.lat);
  const lng = parseFloat(office.lng);
  const iframeUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(lng - 0.005)}%2C${encodeURIComponent(lat - 0.005)}%2C${encodeURIComponent(lng + 0.005)}%2C${encodeURIComponent(lat + 0.005)}&layer=mapnik&marker=${encodeURIComponent(lat)}%2C${encodeURIComponent(lng)}`;

  return (
    <>
      <Head>
        <title>{office.nombre_suc} - Póliza de Rentas</title>
        <meta name="description" content={`Información de contacto y detalles de la sucursal ${office.nombre_suc} de Póliza de Rentas`} />
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
                  backgroundImage: 'url(/images/slider/sucursal.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '80vh'
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
            </SwiperSlide>
          </Swiper>

          <div className="swiper-pagination"></div>
          <div className="swiper-scrollbar"></div>
        </div>
      </section>

      {/* Detalle de sucursal */}
      <section>
        <div className="container">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-7">
              <div dangerouslySetInnerHTML={{ __html: office.descripcion_suc }} />
              
              <div className="row mt-5">
                {officeData.users.map((user, index) => (
                  <div key={user.id} className="col-lg-3 mb-4">
                    <Image 
                      src={user.img_user 
                        ? `https://pub-7d69744bfc94470c9f3257d29c3a67d3.r2.dev/${user.img_user}`
                        : '/images/storage/default.jpg'} 
                      alt={user.name}
                      width={150}
                      height={150}
                      className="img-fluid rounded-circle"
                    />
                    <p className="text-center mt-2">{user.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-5">
              <div className="p-4 pb-2 bg-grey mb-4">
                <div className="subtitle wow fadeInUp mb-3" style={{ backgroundColor: 'grey', color: 'white' }}>
                  {office.estado}
                </div>
                <h4>{office.nombre_suc}</h4>
                <hr className="s2" />
                <p>
                  <strong>Dirección:</strong> {office.calle} No. {office.numExt}, {office.municipio}, {office.estado}
                </p>
                <p>
                  <strong>Teléfono:</strong> {office.telefono_suc}
                </p>
                <p>
                  <strong>Email:</strong> {office.email_suc}
                </p>
              </div>

              <div className="p-4 pb-2 bg-grey mb-4">
                <h4>Envía tus datos y un agente de Póliza de Rentas se pondrá en contacto contigo</h4>

                <form onSubmit={handleSubmit} className="formulario-informes">
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
                  <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
              </div>

              <iframe 
                src={iframeUrl}
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title={`Mapa de ${office.nombre_suc}`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}