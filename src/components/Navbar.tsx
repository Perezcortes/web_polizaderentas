"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  // Cerrar menú al navegar
  useEffect(() => {
    setMenuOpen(false);
    setSubmenuOpen(false);
  }, [pathname]);

  // Fondo oscuro al hacer scroll (clase "smaller")
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".header-full");
    if (!header) return;
    const onScroll = () => {
      if (window.scrollY > 30) {
        header.classList.add("smaller");
      } else {
        header.classList.remove("smaller");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="header-full transparent">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              {/* Logo */}
              <div className="de-flex-col">
                <div id="logo">
                  <a href="/">
                    <img className="logo-main"   src="/images/logo.png" alt="logo" width="143" />
                    <img className="logo-mobile" src="/images/logo.png" alt="logo" width="100" />
                  </a>
                </div>
              </div>

              {/* Menú + botón Franquicias + hamburguesa */}
              <div className="de-flex-col header-col-mid">
                <ul id="mainmenu" className={menuOpen ? "mobile-visible" : ""}>
                  <li><a className="menu-item" href="/">Inicio</a></li>
                  <li><a className="menu-item" href="/about">Nosotros</a></li>

                  {/* Servicios con sub-menú */}
                  <li className={submenuOpen ? "active" : ""}>
                    <div className="menu-item-wrapper">
                      <a className="menu-item" href="/servicios">Servicios</a>
                      <button
                        type="button"
                        className={`submenu-toggle${submenuOpen ? " rotated" : ""}`}
                        aria-expanded={submenuOpen}
                        aria-label="Desplegar servicios"
                        onClick={(e) => { e.stopPropagation(); setSubmenuOpen((v) => !v); }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                          viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                    </div>
                    <ul className="sub-menu" style={{ backgroundColor: "#1E1E1E", borderColor: "#1E1E1E" }}>
                      <li><a style={{ color: "white" }} href="/servicios/investigacion_inquilinos">Investigación de Inquilinos</a></li>
                      <li><a style={{ color: "white" }} href="/servicios/poliza_juridica">Póliza de Protección Jurídica</a></li>
                      <li><a style={{ color: "white" }} href="/servicios/convenio_transaccion">Convenio de transacción</a></li>
                      <li><a style={{ color: "white" }} href="/servicios/convenio_prevencion">Convenio de Prevención de Conflictos</a></li>
                      <li><a style={{ color: "white" }} href="/servicios/firma_electronica">Firma Electrónica</a></li>
                    </ul>
                  </li>

                  <li><a className="menu-item" href="/sucursales">Sucursales</a></li>
                  <li><a className="menu-item" href="/blog">Blog</a></li>
                  <li><a className="menu-item" href="/contacto">Contacto</a></li>
                </ul>

                <div className="menu_side_area">
                  <a href="/franquicias" className="btn-main">Franquicias</a>
                  <button
                    type="button"
                    className={`nav-mobile-toggle${menuOpen ? " active" : ""}`}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((v) => !v)}
                  >
                    <span className="nav-mobile-toggle-bar" />
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
