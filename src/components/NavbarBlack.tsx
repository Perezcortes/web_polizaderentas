'use client';

import React, { useEffect, useState } from 'react';
import './NavbarBlack.css';

export default function NavbarBlack() {
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <header className="header-black-full ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                <div className="de-flex-col">
                  <div id="logo-black">
                    <a href="/">
                      <img
                        className="logo-black-main"
                        src="/images/logo.png"
                        alt="logo"
                        width="143"
                      />
                      <img
                        className="logo-black-mobile"
                        src="/images/logo.png"
                        alt="logo"
                        width="100"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="de-flex-col header-col-mid">
                <ul
                  id="mainmenu-black"
                  className={menuOpen ? 'mobile-visible' : ''}
                >
                  <li><a className="menu-item-black" href="/">Inicio</a></li>
                  <li><a className="menu-item-black" href="/nosotros">Nosotros</a></li>
                  <li>
                    <a className="menu-item-black" href="/services">Servicios</a>
                    <ul className="sub-menu-black" style={{ backgroundColor: '#1E1E1E', borderColor: '#1E1E1E' }}>
                      <li><a style={{ color: 'white' }} href="/services/investigacion_inquilinos">Investigación de Inquilinos</a></li>
                      <li><a style={{ color: 'white' }} href="/services/poliza_juridica">Póliza de Protección Jurídica</a></li>
                      <li><a style={{ color: 'white' }} href="/services/convenio_transaccion">Convenio de transacción</a></li>
                      <li><a style={{ color: 'white' }} href="/services/convenio_prevencion">Convenio de Prevención de Conflictos</a></li>
                      <li><a style={{ color: 'white' }} href="/services/firma_electronica">Firma Electrónica</a></li>
                    </ul>
                  </li>
                  <li><a className="menu-item-black" href="/sucursales">Sucursales</a></li>
                  <li><a className="menu-item-black" href="/blog">Blog</a></li>
                  <li><a className="menu-item-black" href="/contacto">Contacto</a></li>
                </ul>
                <div className="menu_side_area_black">
                  <a href="/franquicias" className="btn-main">Franquicias</a>
                  <span
                    id="menu-btn-black"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={menuOpen ? 'active' : ''}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
