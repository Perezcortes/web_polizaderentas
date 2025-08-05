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

export interface BlogSidebarProps {
  apiUrl: string;
  apiKey: string;
  cloudflareEndpoint: string;
  excludeSlug?: string; // Slug del post actual para excluirlo de los recientes
}


export interface BlogContentProps {
  postsPerPage: number;
  apiUrl: string;
  apiKey: string;
  cloudflareEndpoint: string;
}

export interface BlogSearchBarProps {
  onSearch: (searchTerm: string) => void;
  isLoading?: boolean;
  apiUrl?: string;
  apiKey?: string;
  searchMode?: 'auto' | 'manual'; // Controla el modo de búsqueda
  debounceTime?: number; // Tiempo de espera antes de lanzar la búsqueda
}
