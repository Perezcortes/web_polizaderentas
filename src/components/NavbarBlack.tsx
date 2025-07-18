'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import './NavbarBlack.css'; 

export default function NavbarBlack() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header-full transparent ${menuOpen ? "menu-open" : ""}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              
              {/* Logo */}
              <div className="de-flex-col">
                <div id="logo">
                  <Link href="/">
                    <Image
                      src="/images/logo.png"
                      alt="logo"
                      width={143}
                      height={50}
                      className="logo-main"
                      priority
                    />
                  </Link>
                </div>
              </div>

              {/* Menu */}
              <div className="de-flex-col header-col-mid">
                <ul id="mainmenu" className={menuOpen ? "active" : ""}>
                  <li><Link href="/" className="menu-item" style={{ color: 'white' }}>Inicio</Link></li>
                  <li><Link href="/about" className="menu-item" style={{ color: 'white' }}>Nosotros</Link></li>
                  <li className="menu-item-has-children has-child">
                    <a className="menu-item" href="/services" style={{ color: 'white' }}>Servicios</a>
                    <ul className="sub-menu" style={{ backgroundColor: "#1E1E1E", borderColor: "#1E1E1E" }}>
                      <li><Link href="/services/investigacion_inquilinos" style={{ color: "white" }}>Investigación de Inquilinos</Link></li>
                      <li><Link href="/services/poliza_juridica" style={{ color: "white" }}>Póliza de Protección Jurídica</Link></li>
                      <li><Link href="/services/convenio_transaccion" style={{ color: "white" }}>Convenio de transacción</Link></li>
                      <li><Link href="/services/convenio_prevencion" style={{ color: "white" }}>Convenio de Prevención de Conflictos</Link></li>
                      <li><Link href="/services/firma_electronica" style={{ color: "white" }}>Firma Electrónica</Link></li>
                    </ul>
                  </li>
                  <li><Link href="/sucursales" className="menu-item" style={{ color: 'white' }}>Sucursales</Link></li>
                  <li><Link href="/blog" className="menu-item" style={{ color: 'white' }}>Blog</Link></li>
                  <li><Link href="/contacto" className="menu-item" style={{ color: 'white' }}>Contacto</Link></li>
                </ul>

                {/* Botón Hamburguesa */}
                <div className="menu_side_area">
                  <Link href="/franquicias" className="btn-main" style={{ color: 'white' }}>Franquicias</Link>
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
