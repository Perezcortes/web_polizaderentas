"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Marca que ya estamos en cliente

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Checa el scroll inicial (ej. refresco con scroll)
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hasta que no montamos en cliente, renderiza siempre sin clase 'smaller'
  if (!mounted) {
    return (
      <header className="header-full transparent">
        {/* Aquí puedes copiar el contenido estático del header para SSR */}
        <div className="container-fluid">
          {/* resto igual */}
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex sm-pt10">
                <div className="de-flex-col">
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
                        <Image
                          src="/images/logo.png"
                          alt="logo"
                          width={100}
                          height={35}
                          className="logo-mobile"
                          priority
                        />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="de-flex-col header-col-mid">
                  <ul id="mainmenu">
                    <li>
                      <Link href="/" className="menu-item">
                        Inicio
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="menu-item">
                        Nosotros
                      </Link>
                    </li>
                    <li className="menu-item-has-children has-child">
                      <a className="menu-item" href="#">
                        Servicios
                      </a>
                      <ul
                        className="sub-menu"
                        style={{ backgroundColor: "#1E1E1E", borderColor: "#1E1E1E" }}
                      >
                        <li>
                          <Link href="/investigacion_inquilinos" style={{ color: "white" }}>
                            Investigación de Inquilinos
                          </Link>
                        </li>
                        <li>
                          <Link href="/poliza_juridica" style={{ color: "white" }}>
                            Póliza de Protección Jurídica
                          </Link>
                        </li>
                        <li>
                          <Link href="/convenio_transaccion" style={{ color: "white" }}>
                            Convenio de transacción
                          </Link>
                        </li>
                        <li>
                          <Link href="/convenio_prevencion" style={{ color: "white" }}>
                            Convenio de Prevención de Conflictos
                          </Link>
                        </li>
                        <li>
                          <Link href="/firma_electronica" style={{ color: "white" }}>
                            Firma Electrónica
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/sucursales" className="menu-item">
                        Sucursales
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="menu-item">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/contacto" className="menu-item">
                        Contacto
                      </Link>
                    </li>
                  </ul>

                  <div className="menu_side_area">
                    <Link href="/franquicias" className="btn-main">
                      Franquicias
                    </Link>
                    <span id="menu-btn"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // Ya montados, renderizamos con la clase scrolled
  return (
    <header className={`header-full transparent ${scrolled ? "smaller" : ""}`}>
      {/* el mismo contenido que arriba */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
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
                      <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={100}
                        height={35}
                        className="logo-mobile"
                        priority
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="de-flex-col header-col-mid">
                <ul id="mainmenu">
                  <li>
                    <Link href="/" className="menu-item">
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="menu-item">
                      Nosotros
                    </Link>
                  </li>
                  <li className="menu-item-has-children has-child">
                    <a className="menu-item" href="/services">
                      Servicios
                    </a>
                    <ul
                      className="sub-menu"
                      style={{ backgroundColor: "#1E1E1E", borderColor: "#1E1E1E" }}
                    >
                      <li>
                        <Link href="/services/investigacion_inquilinos" style={{ color: "white" }}>
                          Investigación de Inquilinos
                        </Link>
                      </li>
                      <li>
                        <Link href="/poliza_juridica" style={{ color: "white" }}>
                          Póliza de Protección Jurídica
                        </Link>
                      </li>
                      <li>
                        <Link href="/convenio_transaccion" style={{ color: "white" }}>
                          Convenio de transacción
                        </Link>
                      </li>
                      <li>
                        <Link href="/convenio_prevencion" style={{ color: "white" }}>
                          Convenio de Prevención de Conflictos
                        </Link>
                      </li>
                      <li>
                        <Link href="/firma_electronica" style={{ color: "white" }}>
                          Firma Electrónica
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/sucursales" className="menu-item">
                      Sucursales
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="menu-item">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contacto" className="menu-item">
                      Contacto
                    </Link>
                  </li>
                </ul>

                <div className="menu_side_area">
                  <Link href="/franchises" className="btn-main">
                    Franquicias
                  </Link>
                  <span id="menu-btn"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
