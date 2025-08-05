'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { BlogPost, BlogSidebarProps } from '../../types/blog-types';
import Spinner from '../ui/Spinner';
import './BlogSidebar.css';

export default function BlogSidebar({
  apiUrl,
  apiKey,
  cloudflareEndpoint,
  excludeSlug // Nuevo prop para excluir el post actual
}: BlogSidebarProps) {
  const router = useRouter();
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const recentResponse = await fetch(
          `${apiUrl}?per_page=6`, // Pedimos 1 más por si hay que excluir uno
          { headers: { 'Authorization': `Bearer ${apiKey}` } }
        );

        if (!recentResponse.ok) throw new Error('Error al cargar publicaciones recientes');
        let recentData = await recentResponse.json();

        // Filtrar el post actual si existe excludeSlug
        if (excludeSlug) {
          recentData.data = recentData.data.filter((post: BlogPost) => post.slug !== excludeSlug);
        }

        // Tomar solo los primeros 5 posts después de filtrar
        setRecentPosts(recentData.data.slice(0, 5));
        setLoading(false);
      } catch (err) {
        console.error('Error fetching recent posts:', err);
        setLoading(false);
      }
    };

    fetchRecentPosts();
  }, [apiUrl, apiKey, excludeSlug]); // Añadir excludeSlug a las dependencias

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const truncateText = (text: string, maxLength: number) => {
    if (!text) return '';
    return text.length > maxLength
      ? text.substring(0, maxLength) + '...'
      : text;
  };

  return (
    <div className="col-lg-4 col-md-6 blog-sidebar-container">
      <div className="blog-sidebar-header">
        <h3>Artículos recientes</h3>
      </div>
      <div className="blog-sidebar-content">
        {loading ? (
          <Spinner message="Cargando publicaciones..." />) : recentPosts.length === 0 ? (
            <p className="blog-sidebar-error">No se pudieron cargar los artículos recientes</p>
          ) : (
          recentPosts.map((post, index) => {
            const imageUrl = post.url_img
              ? `${cloudflareEndpoint}/${post.url_img.replace(/^\//, '')}`
              : '/images/default-thumb.jpg';

            return (
              <div key={post.id}>
                <div
                  className="row recent-post-item"
                  onClick={() => router.push(`/blog/${post.slug}`)}
                >
                  <div className="col-4">
                    <Image
                      src={imageUrl}
                      alt={post.titulo}
                      width={100}
                      height={80}
                      className="recent-post-image"
                      priority={false}
                    />
                  </div>
                  <div className="col-8">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="post-title"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {truncateText(post.titulo, 60)}
                    </Link>
                    <small className="post-meta">Póliza de Rentas - {formatDate(post.created_at)}</small>
                  </div>
                </div>
                {index < recentPosts.length - 1 && <hr className="blog-sidebar-divider" />}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}