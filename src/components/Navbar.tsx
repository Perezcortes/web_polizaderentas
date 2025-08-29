export default function Navbar() {
  return (
    <header className="header-full transparent">
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
                        width="143"
                      />
                      <img
                        className="logo-mobile"
                        src="/images/logo.png"
                        alt="logo"
                        width="100"
                      />
                    </a>
                  </div>
                  {/* logo close */}
                </div>
              </div>

              <div className="de-flex-col header-col-mid">
                <ul id="mainmenu">
                  <li><a className="menu-item" href="/">Inicio</a></li>
                  <li><a className="menu-item" href="/about">Nosotros</a></li>
                  <li>
                    <a className="menu-item" href="/servicios">Servicios</a>
                    <ul className="sub-menu" style={{ backgroundColor: '#1E1E1E', borderColor: '#1E1E1E' }}>
                      <li><a style={{ color: 'white' }} href="/servicios/investigacion_inquilinos">Investigación de Inquilinos</a></li>
                      <li><a style={{ color: 'white' }} href="/servicios/poliza_juridica">Póliza de Protección Jurídica</a></li>
                      <li><a style={{ color: 'white' }} href="/servicios/convenio_transaccion">Convenio de transacción</a></li>
                      <li><a style={{ color: 'white' }} href="/servicios/convenio_prevencion">Convenio de Prevención de Conflictos</a></li>
                      <li><a style={{ color: 'white' }} href="/servicios/firma_electronica">Firma Electrónica</a></li>
                    </ul>
                  </li>
                  <li><a className="menu-item" href="/sucursales">Sucursales</a></li>
                  <li><a className="menu-item" href="/blog">Blog</a></li>
                  <li><a className="menu-item" href="/contacto">Contacto</a></li>
                </ul>
                <div className="menu_side_area">
                  <a href="/franquicias" className="btn-main">Franquicias</a>
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
