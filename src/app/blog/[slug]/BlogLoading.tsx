import Spinner from '../../../components/ui/Spinner';

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
                  <Spinner message="Cargando artículo..." />
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

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
