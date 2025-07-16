export interface BlogPost {
  id: number;
  titulo: string;
  slug: string;
  contenido: string;
  url_img: string | null;
  created_at: string;
}