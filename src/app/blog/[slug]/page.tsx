import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getRecentPosts, getRelatedPosts } from '../../../lib/api';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Póliza de Rentas',
    };
  }

  return {
    title: post.titulo,
    description: post.descripcion || 'Artículo de Póliza de Rentas',
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return notFound();
  }

  const recentPosts = await getRecentPosts();

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top" className="bg-dark-1" style={{ height: '80px' }}></div>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row gx-4">
                  <div className="col-lg-8 col-md-6 mb10">
                    <img
                      src={post.url_img ? `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/${post.url_img.replace(/^\//, '')}` : '/images/default-blog.jpg'}
                      alt={post.titulo}
                      className="img-fluid rounded shadow-sm"
                      style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
                    />

                    <h3 className="wow fadeInUp mt-5 mb20 color-dor" data-wow-delay=".2s">
                      {post.titulo}
                    </h3>
                    
                    <div className="post-meta mb-3">
                      <span className="text-muted">
                        Póliza de Rentas - {new Date(post.created_at).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    
                    <div className="post-content wow fadeInUp" dangerouslySetInnerHTML={{ __html: post.contenido }} />
                    
                    <hr />
                    
                    <RelatedPosts currentSlug={params.slug} />
                  </div>
                  
                  <div className="col-lg-4 col-md-6">
                    <div className="bg-dark py-2 ps-4">
                      <h3 style={{ color: 'white' }}>Artículos recientes</h3>
                    </div>
                    <div className="py-2 ps-4 borde">
                      {recentPosts.length === 0 ? (
                        <p className="text-muted">No hay artículos recientes</p>
                      ) : (
                        recentPosts.map((post: any) => (
                          <RecentPostItem key={post.id} post={post} />
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Define the RelatedPost type according to your data structure
type RelatedPost = {
  id: string | number;
  slug: string;
  titulo: string;
  url_img?: string;
  created_at: string;
};

async function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const relatedPosts = await getRelatedPosts(currentSlug);
  
  return (
    <div id="related-posts" className="row mt-4">
      <h4 className="color-dor mb-4">Artículos relacionados</h4>
      <div className="row">
        {relatedPosts.length === 0 ? (
          <div className="col-12">
            <p className="text-muted">No hay artículos relacionados</p>
          </div>
        ) : (
          relatedPosts.map((post: RelatedPost) => (
            <div key={post.id} className="col-md-6 mb-4">
              <div 
            className="card h-100 related-post-card" 
            style={{ cursor: 'pointer' }}
            onClick={() => window.location.href = `/blog/${post.slug}`}
              >
            <img
              src={post.url_img ? `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/${post.url_img.replace(/^\//, '')}` : '/images/default-blog.jpg'}
              className="related-post-img"
              alt={post.titulo}
            />
            <div className="card-body">
              <h5 className="card-title">
                {post.titulo.length > 50 ? `${post.titulo.substring(0, 50)}...` : post.titulo}
              </h5>
              <p className="card-text">
                <small className="text-muted">
                  {new Date(post.created_at).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                  })}
                </small>
              </p>
            </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function RecentPostItem({ post }: { post: any }) {
  return (
    <div 
      className="recent-post-item" 
      style={{ cursor: 'pointer', marginBottom: '15px' }}
      onClick={() => window.location.href = `/blog/${post.slug}`}
    >
      <div className="row">
        <div className="col-4">
          <img
            src={post.url_img ? `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/${post.url_img.replace(/^\//, '')}` : '/images/default-thumb.jpg'}
            alt={post.titulo}
            className="recent-post-image"
          />
        </div>
        <div className="col-8 recent-post-content">
          <p className="recent-post-title">
            {post.titulo.length > 60 ? `${post.titulo.substring(0, 60)}...` : post.titulo}
          </p>
          <small className="recent-post-date">
            Póliza de Rentas - {new Date(post.created_at).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </small>
        </div>
      </div>
    </div>
  );
}