const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://app.polizaderentas.com/api/posts';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || 'default-key';

if (!API_URL || !API_KEY) {
  throw new Error('API configuration is missing');
}

export async function getPosts(page = 1, perPage = 5) {
  const response = await fetch(`${API_URL}?page=${page}&per_page=${perPage}`, {
    headers: { 'Authorization': `Bearer ${API_KEY}` },
    next: { revalidate: 60 } // Revalidar cada 60 segundos
  });

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  const result = await response.json();
  return {
    posts: result.data || result,
    totalPosts: result.total || result.length,
  };
}

export async function getPostBySlug(slug: string) {
  const response = await fetch(`${API_URL}/${slug}`, {
    headers: { 'Authorization': `Bearer ${API_KEY}` },
    next: { revalidate: 60 }
  });

  if (!response.ok) {
    if (response.status === 404) return null;
    throw new Error('Failed to fetch post');
  }

  const result = await response.json();
  return result.data || result;
}

export async function getRecentPosts(limit = 5) {
  const response = await fetch(`${API_URL}?limit=${limit}`, {
    headers: { 'Authorization': `Bearer ${API_KEY}` },
    next: { revalidate: 60 }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch recent posts');
  }

  const result = await response.json();
  return result.data || result;
}

export async function getRelatedPosts(currentSlug: string, limit = 2) {
  const allPosts = await getRecentPosts(10); // Obtenemos más posts para encontrar relacionados
  
  // Encontramos el índice del post actual
  const currentIndex = allPosts.findIndex((post: any) => post.slug === currentSlug);
  
  // Seleccionamos los siguientes posts
  if (currentIndex !== -1) {
    return allPosts.slice(currentIndex + 1, currentIndex + 1 + limit);
  }
  
  // Si no encontramos el post actual, devolvemos los más recientes
  return allPosts.slice(0, limit);
}