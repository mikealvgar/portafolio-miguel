export interface Post {
  id: string;
  title: string;
  date: string;
  description: string;
  thumbnail: string;
  file: string;
}

export const posts: Post[] = [
  {
    id: 'desarrollo-asistido-por-ia',
    title: 'Desarrollo Asistido por IA: El futuro del Frontend',
    date: '10 Ago, 2026',
    description: 'En este artículo explico cómo utilizo herramientas de Inteligencia Artificial y metodologías como Spec Driven Development para acelerar el desarrollo web.',
    thumbnail: '/sdd-banner.jpg',
    file: 'mi-primer-post.md'
  }
];
