// types/blog-types.ts
export interface BlogPost {
  id: number;
  titulo: string;
  slug: string;
  contenido: string;
  url_img: string | null;
  created_at: string;
  meta_titulo?: string;
  meta_descripcion?: string;
  palabras_clave_ceo?: string;
}