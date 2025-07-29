export default function BlogLoading() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row gx-4">
              {/* Columna principal */}
              <div className="col-lg-8 col-md-6 mb10">
                <div
                  className="bg-light rounded shadow-sm mb-4"
                  style={{
                    width: '100%',
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    className="spinner-border"
                    style={{
                      width: '3rem',
                      height: '3rem',
                      borderWidth: '0.25em',
                      borderColor: '#bdad5d transparent #bdad5d transparent',
                    }}
                    role="status"
                  >
                    <span className="visually-hidden">Cargando artículo...</span>
                  </div>
                </div>

                <div className="bg-light rounded mb-3" style={{ height: '2.5rem', width: '80%' }}></div>
                <div className="bg-light rounded mb-4" style={{ height: '1rem', width: '40%' }}></div>

                <div className="space-y-3">
                  <div className="bg-light rounded" style={{ height: '1rem', width: '100%' }}></div>
                  <div className="bg-light rounded" style={{ height: '1rem', width: '95%' }}></div>
                  <div className="bg-light rounded" style={{ height: '1rem', width: '90%' }}></div>
                  <div className="bg-light rounded" style={{ height: '1rem', width: '85%' }}></div>
                </div>

                <div className="text-center mt-4">
                  <p style={{ color: '#bdad5d', fontSize: '1.25rem' }}>Cargando artículo...</p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4 col-md-6">
                <div className="bg-dark py-2 ps-4">
                  <h3 className="text-white mb-0">Artículos recientes</h3>
                </div>

                {/* Spinner centrado en sección */}
                <div
                  className="d-flex justify-content-center align-items-center py-4"
                >
                  <div
                    className="spinner-border"
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderWidth: '0.25em',
                      borderColor: '#bdad5d transparent #bdad5d transparent',
                    }}
                    role="status"
                  >
                    <span className="visually-hidden">Cargando artículos recientes...</span>
                  </div>
                </div>

                <div className="py-2 ps-4 borde">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="row mb-3">
                      <div className="col-4">
                        <div className="bg-light rounded" style={{ height: '80px', width: '100px' }}></div>
                      </div>
                      <div className="col-8">
                        <div className="bg-light rounded mb-2" style={{ height: '1rem', width: '90%' }}></div>
                        <div className="bg-light rounded" style={{ height: '0.8rem', width: '70%' }}></div>
                      </div>
                      {item < 5 && <hr className="my-2" />}
                    </div>
                  ))}
                </div>
              </div>
              {/* Fin Sidebar */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
