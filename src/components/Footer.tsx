"use client";

import React from "react";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-4 col-sm-6">
            <img src="/images/logo.png" alt="logo" width={143} />
            <div className="spacer-20"></div>
            <p><b>Protección total para tu patrimonio con Póliza de Rentas</b></p>
            <p><b>
              Nos especializamos en proteger el patrimonio inmobiliario de propietarios, inmobiliarias y administradores de inmuebles que buscan arrendar sus propiedades. Ofrecemos soluciones jurídicas personalizadas que garantizan la seguridad en el arrendamiento, brindando respaldo y tranquilidad en todo el proceso de renta.
            </b></p>

            <div className="widget">
              <h5>Síguenos</h5>
              <div className="social-icons">
                <a href="https://www.facebook.com/polizaderentas" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/poliza.de.rentas?igsh=emN0aXA2b3dsNmg4" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://youtube.com/@polizaderentas?si=SICLjfgJoRsIahnX" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="https://www.linkedin.com/company/poliza-de-rentas/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
              <div className="mt-4">
                <a href="/franquicias" className="btn-main">Adquiere tus franquicias</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 order-lg-1 order-sm-2">
            <div className="row">
              <div className="col-lg-8 col-sm-8">
                <div className="widget">
                  <h5>Enlaces</h5>
                  <ul>
                    <li><a href="/about">Nosotros</a></li>
                    <li><a href="/services">Servicios Jurídicos</a></li>
                    <li><a href="/services/poliza_juridica">Póliza Jurídica</a></li>
                    <li><a href="/services/convenio_prevencion">Convenio de Prevención de Conflictos</a></li>
                    <li><a href="/services/convenio_transaccion">Convenio de Transacción</a></li>
                    <li><a href="/services/investigacion_inquilinos">Investigación de Inquilinos</a></li>
                    <li><a href="/sucursales">Sucursales</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 order-lg-2 order-sm-1">
            <h5>Contacto</h5>
            <div className="widget">
              <div className="de-icon-text">
                <img src="/images/svg/email-address-svgrepo-com-white.svg" alt="email" />
                <div className="d-text">
                  Montes Urales 755 piso 5, oficina 5631, Lomas de Chapultepec, Miguel Hidalgo, CDMX, 11000
                </div>
              </div>

              <br />

              <div className="de-icon-text mb20">
                <img src="/images/svg/phone-svgrepo-com-white.svg" alt="phone" />
                <div className="d-text">
                  <h4>Teléfono</h4>
                  +52 5589469764
                </div>
              </div>

              <br />

              <div className="de-icon-text mb20">
                <img src="/images/svg/map-pin-svgrepo-com-white.svg" alt="map" />
                <div className="d-text">
                  <h4>Email</h4>
                  info@polizaderentas.com
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-sm-6 order-lg-2 order-sm-1 offset-lg-4">
            <h5>Accesos</h5>
            <div className="row">
              <div className="col-lg-4">
                <div className="btn-access-group">
                  <a className="btn-main" href="/sucursales">Sucursales</a>
                  <a className="btn-main" href="/services/poliza_juridica">Sistema Pólizas</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 subfooter-content">
        <div className="footer-line">
          <span>&copy; {new Date().getFullYear()} Póliza de rentas.</span>
        </div>
        <div className="footer-links">
          <span>Todos los derechos reservados.</span>
          <span className="separator">|</span>
          <a href="/aviso-de-privacidad">Aviso de privacidad</a>
          <span className="separator">|</span>
          <a href="/terminos-y-condiciones">Términos y condiciones</a>
        </div>
      </div>

    </footer>
  );
}
