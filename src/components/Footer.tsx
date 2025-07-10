// components/Footer.tsx
import React from "react";

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
                <a href="franquicias.php" className="btn-main">Adquiere tus franquicias</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 order-lg-1 order-sm-2">
            <div className="row">
              <div className="col-lg-8 col-sm-8">
                <div className="widget">
                  <h5>Enlaces</h5>
                  <ul>
                    <li><a href="nosotros.php">Nosotros</a></li>
                    <li><a href="servicios.php">Servicios Jurídicos</a></li>
                    <li><a href="poliza_juridica.php">Póliza Jurídica</a></li>
                    <li><a href="convenio_prevencion.php">Convenio de Prevención de Conflictos</a></li>
                    <li><a href="convenio_transaccion.php">Convenio de Transacción</a></li>
                    <li><a href="investigacion_inquilinos.php">Investigación de Inquilinos</a></li>
                    <li><a href="sucursales.php">Sucursales</a></li>
                    <li><a href="blog.php">Blog</a></li>
                    <li><a href="contacto.php">Contacto</a></li>
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
                <a className="btn-main mb10 mt20" href="sucursales.php">Sucursales</a>
                <a className="btn-main mb10" href="poliza_juridica.php">Sistema Polizas</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              &copy; {new Date().getFullYear()} Póliza de rentas. Todos los derechos reservados. |{" "}
              <a href="https://polizaderentas.com/aviso_privacidad.php" className="mx-1">Aviso de privacidad</a> |{" "}
              <a href="https://polizaderentas.com/terminos_y_condiciones.php" className="mx-1">Términos y condiciones</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
