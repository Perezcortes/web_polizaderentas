'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { BlogPost } from '../../types/blog-types';

interface BlogSidebarProps {
  apiUrl: string;
  apiKey: string;
  cloudflareEndpoint: string;
}

export default function BlogSidebar({
  apiUrl,
  apiKey,
  cloudflareEndpoint
}: BlogSidebarProps) {
  const router = useRouter();
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const recentResponse = await fetch(
          `${apiUrl}?per_page=5`,
          { headers: { 'Authorization': `Bearer ${apiKey}` } }
        );

        if (!recentResponse.ok) throw new Error('Error al cargar publicaciones recientes');
        const recentData = await recentResponse.json();
        setRecentPosts(recentData.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching recent posts:', err);
        setLoading(false);
      }
    };

    fetchRecentPosts();
  }, [apiUrl, apiKey]);

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
    <div className="col-lg-4 col-md-6">
      <div className="bg-dark py-2 ps-4">
        <h3 className="text-white">Artículos recientes</h3>
      </div>
      <div className="py-2 ps-4 borde">
        {loading ? (
          <div className="text-center py-3">
            <div
              className="spinner-border spinner-border-sm"
              style={{
                width: '1.5rem',
                height: '1.5rem',
                borderWidth: '0.2em',
                borderColor: '#bdad5d transparent #bdad5d transparent'
              }}
              role="status"
            >
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        ) : recentPosts.length === 0 ? (
          <p className="text-muted">No se pudieron cargar los artículos recientes</p>
        ) : (
          recentPosts.map((post, index) => {
            const imageUrl = post.url_img
              ? `${cloudflareEndpoint}/${post.url_img.replace(/^\//, '')}`
              : '/images/default-thumb.jpg';

            return (
              <div key={post.id}>
                <div
                  className="row mb-3 recent-post-item"
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.push(`/blog/${post.slug}`)}
                >
                  <div className="col-4">
                    <Image
                      src={imageUrl}
                      alt={post.titulo}
                      width={100}
                      height={80}
                      className="img-fluid rounded"
                      style={{ height: '80px', width: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="col-8">
                    <Link href={`/blog/${post.slug}`} style={{ color: 'rgb(101, 85, 36)' }}>
                      <p className="mb-1">{truncateText(post.titulo, 60)}</p>
                    </Link>
                    <small className="text-muted">Póliza de Rentas - {formatDate(post.created_at)}</small>
                  </div>
                </div>
                {index < recentPosts.length - 1 && <hr className="my-2" />}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}