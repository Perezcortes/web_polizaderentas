// src/app/not-found.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div id="wrapper">
      <header className="header-full transparent">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex sm-pt10">
                <div className="de-flex-col">{/* logo aquí si quieres */}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="no-bottom no-top" id="content">
        <section className="text-light no-top no-bottom position-relative z-1000">
          <div className="v-center">
            <div className="swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide" data-jarallax-element="150">
                  <div className="sw-caption">
                    <div className="container">
                      <div className="row gx-5 align-items-center">
                        <h1 className="text-center dorado">404 Error</h1>
                        <p className="zoom-area dorado text-center">Página no encontrada</p>
                        <section className="error-container">
                          <span>4</span>
                          <span><span className="screen-reader-text">0</span></span>
                          <span>4</span>
                        </section>
                        <div className="link-container text-center">
                          <Link href="/" className="more-link">
                            <Image
                              className="logo-mobile"
                              src="/images/logo.png"
                              alt="logo"
                              width={200}
                              height={60}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sw-overlay s2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
