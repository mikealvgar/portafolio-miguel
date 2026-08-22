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
    id: 'omarchy-ia-flujo-trabajo',
    title: 'Potenciando mi Flujo de Trabajo: Desarrollo, Inteligencia Artificial y Omarchy',
    date: '22 Ago, 2026',
    description: 'Descubre cómo he optimizado mi entorno de desarrollo utilizando Omarchy (Hyprland) e Inteligencia Artificial para potenciar mis proyectos personales.',
    thumbnail: '/omarchy_desktop.jpg',
    file: 'omarchy.md'
  },
  {
    id: 'el-poder-del-plan',
    title: 'El poder del comando \'/plan\': Por qué tu IA debe pensar antes de codificar',
    date: '10 Ago, 2026',
    description: 'Descubre cómo forzar a los agentes de IA a estructurar sus pensamientos antes de escribir código puede salvar tu proyecto de errores desastrosos.',
    thumbnail: '/plan-banner.png',
    file: 'el-poder-del-plan.md'
  },
  {
    id: 'configurar-figma-mcp',
    title: 'Configurando Figma MCP: Del Diseño al Código con IA',
    date: '10 Ago, 2026',
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
  },
  {
    id: 'herdr-profundidad',
    title: 'Herdr: Un gestor de terminales diseñado para agentes de IA',
    date: '10 Ago, 2026',
    description: 'Descubre cómo Herdr resuelve el caos de usar múltiples agentes de IA en la terminal mediante espacios de trabajo persistentes y rastreo de estados.',
    thumbnail: '/herdr-banner.png',
    file: 'herdr-profundidad.md'
  },
  {
    id: 'qa-criterios',
    title: 'Creando Skills personalizadas en IA: El caso práctico de QA',
    date: '11 Ago, 2026',
    description: 'Aprende cómo forzar a los agentes de IA a actuar como Ingenieros de QA generando Criterios de Aceptación estrictos antes de programar.',
    thumbnail: '/qa-banner.jpg',
    file: 'qa-criterios.md'
  },
  {
    id: 'que-son-las-skills',
    title: '¿Qué son las "Skills" en la IA y por qué cambiarán tu forma de programar?',
    date: '11 Ago, 2026',
    description: 'Olvídate de repetirle a la IA cómo hacer su trabajo todos los días. Descubre cómo las Skills personalizadas actúan como la memoria muscular de tus agentes.',
    thumbnail: '/skills-banner.jpg',
    file: 'que-son-las-skills.md'
  },
  {
    id: 'git-worktree-ia',
    title: 'Multiplicando la Productividad: Git Worktree y Agentes de IA',
    date: '16 Ago, 2026',
    description: 'Descubre cómo los entornos de desarrollo aislados con Git Worktree permiten trabajar simultáneamente en múltiples tareas sin interferir con tu Agente de Inteligencia Artificial.',
    thumbnail: '/git-worktree-banner.jpg',
    file: 'git-worktree-ia.md'
  }
];
