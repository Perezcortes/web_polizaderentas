'use client';
import { useEffect, useState } from "react";
import "./NavbarBlack.css";

export default function NavbarBlack() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let timeoutId: number | undefined;
    const navbar = document.querySelector(
      ".navbar-black.header-full"
    ) as HTMLElement | null;

    if (!navbar) return;

    // El navbar empieza con color sólido
    navbar.classList.add("solid-bg");

    const onScroll = () => {
      if (!navbar) return;

      if (window.scrollY > 50) {
        // Aplica semitransparencia con blur al hacer scroll
        navbar.classList.add("transparent-scroll");

        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = window.setTimeout(() => {
          // Luego de 1.2s, quitar efecto para volver a color sólido
          navbar.classList.remove("transparent-scroll");
        }, 1200);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="navbar-black header-full">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                <div className="de-flex-col">
                  {/* logo begin */}
                  <div id="logo">
                    <a href="/">
                      <img
                        className="logo-main"
                        src="/images/logo.png"
                        alt="logo"
                        width={143}
                      />
                      <img
                        className="logo-mobile"
                        src="/images/logo.png"
                        alt="logo"
                        width={100}
                      />
                    </a>
                  </div>
                  {/* logo close */}
                </div>
              </div>

              <div className="de-flex-col header-col-mid">
                <ul id="mainmenu" className={menuOpen ? "active" : ""}>
                  <li><a className="menu-item" href="/">Inicio</a></li>
                  <li><a className="menu-item" href="/about">Nosotros</a></li>
                  <li>
                    <a className="menu-item" href="/services">Servicios</a>
                    <ul className="sub-menu" style={{ backgroundColor: '#1E1E1E', borderColor: '#1E1E1E' }}>
                      <li><a style={{ color: 'white' }} href="/services/investigacion_inquilinos">Investigación de Inquilinos</a></li>
                      <li><a style={{ color: 'white' }} href="/services/poliza_juridica">Póliza de Protección Jurídica</a></li>
                      <li><a style={{ color: 'white' }} href="/services/convenio_transaccion">Convenio de transacción</a></li>
                      <li><a style={{ color: 'white' }} href="/services/convenio_prevencion">Convenio de Prevención de Conflictos</a></li>
                      <li><a style={{ color: 'white' }} href="/services/firma_electronica">Firma Electrónica</a></li>
                    </ul>
                  </li>
                  <li><a className="menu-item" href="/sucursales">Sucursales</a></li>
                  <li><a className="menu-item" href="/blog">Blog</a></li>
                  <li><a className="menu-item" href="/contacto">Contacto</a></li>
                </ul>
                <div className="menu_side_area">
                  <a href="/franquicias" className="btn-main">Franquicias</a>
                  <button
                    id="menu-btn"
                    className={menuOpen ? "open" : ""}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                  >
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}