'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
    id: number;
    titulo: string;
    slug: string;
    contenido: string;
    url_img: string | null;
    created_at: string;
}

export default function RecentPosts() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);

                const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/posts';
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
                                        <h4 style={{ color: '#000' }}>Cargando...</h4>
                                        <Link className="btn-main btn-fullwidth btn-white" href="#">
                                            Ver más
                                        </Link>
                                    </div>
                                </div>
                                <div className="placeholder" style={{
                                    width: '100%',
                                    height: '300px',
                                    backgroundColor: '#f0f0f0'
                                }}></div>
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
                                        <h4>{post.titulo}</h4>
                                        <Link
                                            className="btn-main btn-fullwidth btn-white"
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
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
                <div className="col-lg-12 d-flex justify-content-center">
                    <Link className="btn-main mt-5" href="/blog">Ver más artículos</Link>
                </div>
            </div>
        </div>
    );
}