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
    id: 'configurar-figma-mcp',
    title: 'Configurando Figma MCP: Del Diseño al Código con IA',
    date: '12 Ago, 2026',
    description: 'Aprende cómo conectar directamente tus diseños de Figma con tu agente de IA mediante el Model Context Protocol (MCP) para generar componentes píxel a píxel.',
    thumbnail: '/figma-mcp-banner.png',
    file: 'figma-mcp.md'
  },
  {
    id: 'desarrollo-asistido-por-ia',
    title: 'Desarrollo Asistido por IA: El futuro del Frontend',
    date: '10 Ago, 2026',
    description: 'En este artículo explico cómo utilizo herramientas de Inteligencia Artificial y metodologías como Spec Driven Development para acelerar el desarrollo web.',
    thumbnail: '/sdd-banner.jpg',
    file: 'mi-primer-post.md'
  }
];
