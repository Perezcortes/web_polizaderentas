'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { formatDate } from '../../lib/utils';
import { getPosts } from '../../lib/api';

export const metadata: Metadata = {
  title: 'Blog - Póliza de Rentas',
  description: 'Artículos y noticias sobre arrendamiento inmobiliario',
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const postsPerPage = 5;
  
  const { posts, totalPosts } = await getPosts(currentPage, postsPerPage);
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <>
      <BlogHero />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row gx-4">
              <div className="col-lg-8 col-md-6 mb10">
                <BlogList posts={posts} />
                <Pagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                />
              </div>
              <div className="col-lg-4 col-md-6">
                <RecentPostsSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Componentes auxiliares
function BlogHero() {
  return (
    <section className="text-light no-top no-bottom position-relative z-1000">
      <div className="v-center">
        <div className="swiper">
          <div className="swiper-wrapper">
            {/* Sliders aquí - puedes mover el contenido del PHP */}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev d-block d-lg-none mt-60"></div>
          <div className="swiper-button-next d-block d-lg-none mt-60"></div>
          <div className="swiper-button-prev d-none d-lg-block"></div>
          <div className="swiper-button-next d-none d-lg-block"></div>
          <div className="swiper-scrollbar"></div>
        </div>
      </div>
    </section>
  );
}

function BlogList({ posts }: { posts: any[] }) {
  return (
    <>
      {posts.length === 0 ? (
        <div className="text-center py-5">
          <p>No hay publicaciones disponibles en este momento.</p>
        </div>
      ) : (
        posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))
      )}
    </>
  );
}

function BlogPostCard({ post }: { post: any }) {
  return (
    <div className="mb-5 post-item wow fadeInUp">
      <img
        src={post.url_img ? `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/${post.url_img.replace(/^\//, '')}` : '/images/default-blog.jpg'}
        alt={post.titulo}
        className="img-fluid rounded shadow-sm"
        style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
      />
      
      <h3 className="mt-4 mb-20 enlace-blog" data-wow-delay=".2s">
        <Link href={`/blog/${post.slug}`} style={{ color: 'rgba(187,161,85)' }}>
          {post.titulo}
        </Link>
      </h3>
      
      <div className="post-meta mb-3">
        <span className="text-muted">Póliza de Rentas - {formatDate(post.created_at)}</span>
      </div>
      
      <div className="post-content">
        <div dangerouslySetInnerHTML={{ __html: post.contenido }} />
      </div>
      
      <button className="read-more-btn mt-2">
        LEER MÁS <FaChevronDown />
      </button>
      <hr className="my-4" />
    </div>
  );
}

function Pagination({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      {currentPage > 1 ? (
        <Link href={`/blog?page=${currentPage - 1}`}>&laquo; Anterior</Link>
      ) : (
        <span className="disabled">&laquo; Anterior</span>
      )}
      
      {/* Lógica de números de página */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={`/blog?page=${page}`}
          className={page === currentPage ? 'active' : ''}
        >
          {page}
        </Link>
      ))}
      
      {currentPage < totalPages ? (
        <Link href={`/blog?page=${currentPage + 1}`}>Siguiente &raquo;</Link>
      ) : (
        <span className="disabled">Siguiente &raquo;</span>
      )}
    </div>
  );
}

async function RecentPostsSidebar() {
  const { posts } = await getPosts(1, 5);
  
  return (
    <>
      <div className="bg-dark py-2 ps-4">
        <h3 className="text-white">Artículos recientes</h3>
      </div>
      <div className="py-2 ps-4 borde">
        {posts.length === 0 ? (
          <p className="text-muted">No hay artículos recientes</p>
        ) : (
          posts.map((post: any) => (
            <RecentPostItem key={post.id} post={post} />
          ))
        )}
      </div>
    </>
  );
}

function RecentPostItem({ post }: { post: any }) {
  return (
    <div 
      className="row mb-3 recent-post-item" 
      style={{ cursor: 'pointer' }}
      onClick={() => window.location.href = `/blog/${post.slug}`}
    >
      <div className="col-4">
        <img
          src={post.url_img ? `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/${post.url_img.replace(/^\//, '')}` : '/images/default-thumb.jpg'}
          alt={post.titulo}
          className="img-fluid rounded"
          style={{ height: '80px', width: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="col-8">
        <Link href={`/blog/${post.slug}`} style={{ color: 'rgb(101, 85, 36)' }}>
          <p className="mb-1">{post.titulo.length > 60 ? `${post.titulo.substring(0, 60)}...` : post.titulo}</p>
        </Link>
        <small className="text-muted">Póliza de Rentas - {formatDate(post.created_at)}</small>
      </div>
    </div>
  );
}