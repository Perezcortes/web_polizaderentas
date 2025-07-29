// components/PostMetadata.tsx
import { BlogPost } from '../types/blog-types';

interface PostMetadataProps {
  post: BlogPost;
}

export const PostMetadata = ({ post }: PostMetadataProps) => {
  const cleanContent = (text: string) => 
    text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  
  const formatKeywords = (keywords?: string) => {
    const defaultKeywords = "blog, arrendamiento, inquilinos, propietarios, noticias inmobiliarias";
    
    if (!keywords) return defaultKeywords;
    
    const cleaned = keywords.split(',')
      .map(k => k.trim())
      .filter(k => k.length > 0)
      .join(', ');
      
    return `${cleaned}, ${defaultKeywords}`;
  };

  return (
    <>
      <title>{post.meta_titulo || `${post.titulo} - Póliza de Rentas`}</title>
      <meta 
        name="description" 
        content={post.meta_descripcion || cleanContent(post.contenido).substring(0, 160)} 
      />
      <meta 
        name="keywords" 
        content={formatKeywords(post.palabras_clave_ceo)} 
      />
      <meta name="author" content="Póliza de Rentas" />
      <link rel="icon" href="/images/icon.png" type="image/gif" sizes="16x16" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={post.meta_titulo || post.titulo} />
      <meta 
        property="og:description" 
        content={post.meta_descripcion || cleanContent(post.contenido).substring(0, 160)} 
      />
      <meta property="og:url" content={`https://polizaderentas.com/blog/${post.slug}`} />
      {post.url_img && (
        <meta 
          property="og:image" 
          content={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/${post.url_img.replace(/^\//, '')}`} 
        />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.meta_titulo || post.titulo} />
      <meta 
        name="twitter:description" 
        content={post.meta_descripcion || cleanContent(post.contenido).substring(0, 160)} 
      />
      {post.url_img && (
        <meta 
          name="twitter:image" 
          content={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/${post.url_img.replace(/^\//, '')}`} 
        />
      )}
    </>
  );
};