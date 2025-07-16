'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import type { BlogPost } from '../types/blog-types';

interface BlogContentProps {
  postsPerPage: number;
  apiUrl: string;
  apiKey: string;
  cloudflareEndpoint: string;
}

export default function BlogContent({
  postsPerPage,
  apiUrl,
  apiKey,
  cloudflareEndpoint
}: BlogContentProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1');

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const truncateHtml = (html: string, maxLength: number) => {
    if (!html) return '';
    const textContent = html.replace(/<[^>]*>/g, '');
    if (textContent.length <= maxLength) return html;

    let result = '';
    let textCount = 0;
    let inTag = false;
    let tagBuffer = '';
    let openTags: string[] = [];

    for (let i = 0; i < html.length && textCount < maxLength; i++) {
      const char = html[i];

      if (char === '<') {
        inTag = true;
        tagBuffer = char;
        continue;
      }

      if (inTag) {
        tagBuffer += char;
        if (char === '>') {
          inTag = false;
          result += tagBuffer;

          const isClosing = tagBuffer.startsWith('</');
          const tagNameMatch = tagBuffer.match(/<\/?([^\s>]+)/);
          if (tagNameMatch) {
            const tagName = tagNameMatch[1].toLowerCase();
            if (isClosing) {
              openTags = openTags.filter(t => t !== tagName);
            } else if (!tagBuffer.endsWith('/>')) {
              openTags.push(tagName);
            }
          }
        }
        continue;
      }

      result += char;
      textCount++;
    }

    result += ' [...]';
    while (openTags.length > 0) {
      result += `</${openTags.pop()}>`;
    }

    return result;
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const postsResponse = await fetch(
          `${apiUrl}?page=${currentPage}&per_page=${postsPerPage}`,
          { headers: { 'Authorization': `Bearer ${apiKey}` } }
        );

        if (!postsResponse.ok) throw new Error('Error al cargar publicaciones');
        const postsData = await postsResponse.json();
        setPosts(postsData.data);
        setTotalPosts(postsData.total);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Error al cargar las publicaciones. Por favor intenta más tarde.');
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage, apiUrl, apiKey, postsPerPage]);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    if (totalPages <= 1) return null;

    const handlePageChange = (page: number) => {
      router.push(`/blog?page=${page}`);
    };

    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    return (
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className={currentPage <= 1 ? 'disabled' : ''}
        >
          &laquo; Anterior
        </button>

        {startPage > 1 && (
          <>
            <button onClick={() => handlePageChange(1)}>1</button>
            {startPage > 2 && <span className="ellipsis">...</span>}
          </>
        )}

        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(page => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="ellipsis">...</span>}
            <button onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
          </>
        )}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className={currentPage >= totalPages ? 'disabled' : ''}
        >
          Siguiente &raquo;
        </button>
      </div>
    );
  };

  return (
    <div className="col-lg-8 col-md-6 mb10">
      {loading && (
        <div className="text-center py-5">
          <div
            className="spinner-border"
            style={{
              width: '3rem',
              height: '3rem',
              borderWidth: '0.25em',
              borderColor: '#bdad5d transparent #bdad5d transparent'
            }}
            role="status"
          >
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-2" style={{ color: '#bdad5d' }}>Cargando publicaciones...</p>
        </div>
      )}

      {error && (
        <div className="text-center py-5">
          <p className="text-danger">{error}</p>
        </div>
      )}

      {!loading && !error && posts.length === 0 && (
        <div className="text-center py-5">
          <p>No hay publicaciones disponibles en este momento.</p>
        </div>
      )}

      {posts.map((post) => {
        const imageUrl = post.url_img
          ? `${cloudflareEndpoint}/${post.url_img.replace(/^\//, '')}`
          : '/images/default-blog.jpg';

        return (
          <div key={post.id} className="mb-5 post-item wow fadeInUp">
            <Image
              src={imageUrl}
              alt={post.titulo}
              width={800}
              height={450}
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

            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: truncateHtml(post.contenido, 200) }}
            />

            <Link href={`/blog/${post.slug}`} className="read-more-btn mt-2">
              LEER MÁS
            </Link>
            <hr className="my-4" />
          </div>
        );
      })}

      {renderPagination()}
    </div>
  );
}