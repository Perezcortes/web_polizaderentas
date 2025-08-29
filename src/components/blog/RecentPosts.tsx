'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '../../types/blog-types';
import './RecentPosts.css';

/*
 * Componente para mostrar las publicaciones recientes del blog.
 * Obtiene los datos de la API y los muestra en un formato de tarjetas.
 */
export default function RecentPosts() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);

                const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://app.polizaderentas.com/api/posts';
                const apiKey = process.env.NEXT_PUBLIC_API_KEY || 'default-key';

                const response = await fetch(
                    `${apiUrl}?per_page=3`,
                    {
                        headers: { 'Authorization': `Bearer ${apiKey}` }
                    }
                );

                if (!response.ok) throw new Error('Error al cargar publicaciones');
                const data = await response.json();
                setPosts(data.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching posts:', err);
                setError('Error al cargar las publicaciones. Por favor intenta más tarde.');
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const cloudflareEndpoint = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT || 'https://default.endpoint.com';

    if (loading) {
        return (
            <div className="container">
                <div className="row sequence">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="col-lg-4 col-sm-6 mb-sm-20 gallery-item">
                            <div className={`de-item wow ${i === 1 ? 'jarallax' : ''}`}>
                                <div className="d-overlay">
                                    <div className="d-label"></div>
                                    <div className="d-text">
                                        <h4 className="loading-text">Cargando...</h4>
                                        <Link className="btn-main btn-fullwidth btn-white" href="#">
                                            Ver más
                                        </Link>
                                    </div>
                                </div>
                                <div className="placeholder"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container">
                <div className="alert alert-warning">{error}</div>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="container">
                <div className="alert alert-info">No hay publicaciones recientes</div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row sequence">
                {posts.map((post, index) => {
                    const imageUrl = post.url_img
                        ? `${cloudflareEndpoint}/${post.url_img.replace(/^\//, '')}`
                        : '/images/study-case/default-blog.jpg';

                    return (
                        <div key={post.id} className="col-lg-4 col-sm-6 mb-sm-20 gallery-item">
                            <div className={`de-item wow ${index === 0 ? 'jarallax' : ''}`}>
                                <div className="d-overlay">
                                    <div className="d-label"></div>
                                    <div className="d-text">
                                        <div className="overlay-text">
                                            <h4 className="recent-post-title-home">{post.titulo}</h4>
                                        </div>
                                        <Link
                                            className="btn-main btn-fullwidth btn-dorado"
                                            href={{
                                                pathname: '/blog/[slug]',
                                                query: { slug: post.slug }
                                            }}
                                            as={`/blog/${post.slug}`}
                                        >
                                            Ver más
                                        </Link>
                                    </div>
                                </div>
                                <Image
                                    src={imageUrl}
                                    width={400}
                                    height={300}
                                    className="img-fluid"
                                    alt={post.titulo}
                                    style={{
                                        width: '100%',
                                        height: '300px',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
                <div className="col-lg-12 d-flex justify-content-center">
                    <Link className="btn-main mt-5" href="/blog#ir-a-blog">Ver más artículos</Link>
                </div>
            </div>
        </div>
    );
}
