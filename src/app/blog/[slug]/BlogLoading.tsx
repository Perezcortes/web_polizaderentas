export default function BlogLoading() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row gx-4">
              <div className="col-lg-8 col-md-6 mb10">
                {/* Skeleton para imagen */}
                <div 
                  className="bg-light rounded shadow-sm mb-4" 
                  style={{ 
                    width: '100%', 
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                </div>

                {/* Skeleton para título */}
                <div className="bg-light rounded mb-3" style={{ height: '2.5rem', width: '80%' }}></div>
                
                {/* Skeleton para meta */}
                <div className="bg-light rounded mb-4" style={{ height: '1rem', width: '40%' }}></div>

                {/* Skeleton para contenido */}
                <div className="space-y-3">
                  <div className="bg-light rounded" style={{ height: '1rem', width: '100%' }}></div>
                  <div className="bg-light rounded" style={{ height: '1rem', width: '95%' }}></div>
                  <div className="bg-light rounded" style={{ height: '1rem', width: '90%' }}></div>
                  <div className="bg-light rounded" style={{ height: '1rem', width: '85%' }}></div>
                </div>

                <div className="text-center mt-4">
                  <p className="text-muted">Cargando artículo...</p>
                </div>
              </div>

              {/* Sidebar skeleton */}
              <div className="col-lg-4 col-md-6">
                <div className="bg-dark py-2 ps-4">
                  <h3 className="text-white">Artículos recientes</h3>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}