'use client';

import React, { useEffect, useState } from 'react';
import './NavbarBlack.css';

export default function NavbarBlack() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  useEffect(() => {
    const header = document.querySelector('.header-black-full');

    const handleScroll = () => {
      if (window.scrollY > 30) {
        header?.classList.add('smaller');
      } else {
        header?.classList.remove('smaller');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  interface ArrowClickEvent extends React.MouseEvent<HTMLSpanElement, MouseEvent> {}

  const handleArrowClick = (e: ArrowClickEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <header className="header-black-full">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                <div id="logo-black">
                  <a href="/">
                    <img className="logo-black-main" src="/images/logo.png" alt="logo" width="143" />
                    <img className="logo-black-mobile" src="/images/logo.png" alt="logo" width="100" />
                  </a>
                </div>
              </div>

              <div className="de-flex-col header-col-mid">
                <ul id="mainmenu-black" className={menuOpen ? 'mobile-visible' : ''}>
                  <li><a className="menu-item-black" href="/">Inicio</a></li>
                  <li><a className="menu-item-black" href="/nosotros">Nosotros</a></li>
                  <li className={submenuOpen ? 'active' : ''}>
                    <div className="menu-item-wrapper">
                      <a href="/servicios" className="menu-item-black">
                        Servicios
                      </a>
                      <span 
                        className={`submenu-toggle ${submenuOpen ? 'rotated' : ''}`}
                        onClick={handleArrowClick}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-chevron-down"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </div>
                    <ul className="sub-menu-black">
                      <li><a href="/servicios/investigacion_inquilinos">Investigación de Inquilinos</a></li>
                      <li><a href="/servicios/poliza_juridica">Póliza de Protección Jurídica</a></li>
                      <li><a href="/servicios/convenio_transaccion">Convenio de transacción</a></li>
                      <li><a href="/servicios/convenio_prevencion">Convenio de Prevención de Conflictos</a></li>
                      <li><a href="/servicios/firma_electronica">Firma Electrónica</a></li>
                    </ul>
                  </li>
                  <li><a className="menu-item-black" href="/sucursales">Sucursales</a></li>
                  <li><a className="menu-item-black" href="/blog">Blog</a></li>
                  <li><a className="menu-item-black" href="/contacto">Contacto</a></li>
                </ul>

                <div className="menu_side_area_black">
                  <a href="/franquicias" className="btn-main">Franquicias</a>
                  <div
                    id="menu-btn-black"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={menuOpen ? 'active' : ''}
                  >
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}