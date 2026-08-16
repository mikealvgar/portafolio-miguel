# AGENTS.md

Guía de desarrollo, arquitectura y reglas operativas para agentes de Inteligencia Artificial (Antigravity, Gemini, Claude, Copilot, Cursor, etc.) que trabajen en este repositorio.

---

## 1. Descripción del Proyecto

**portafolio-miguel** es el sitio web personal y blog técnico de **Miguel Alvarez Garcia**, Ingeniero Informático y Desarrollador Frontend Web & Móvil. El proyecto destaca su experiencia profesional, habilidades técnicas, proyectos, y una sección de blog con artículos técnicos orientados a desarrollo asistido por IA, arquitecturas frontend y metodologías ágiles.

---

## 2. Stack Tecnológico

| Categoría | Tecnología / Librería | Versión | Propósito |
| :--- | :--- | :--- | :--- |
| **Core Framework** | React | `^19.2.8` | Biblioteca de UI declarativa y basada en componentes |
| **Build Tool & Bundler** | Vite | `^8.2.0` | Servidor de desarrollo ultrarrápido y empaquetador de producción |
| **Lenguaje** | TypeScript | `~6.0.2` | Tipado estático estricto |
| **Enrutamiento** | React Router DOM | `^7.18.2` | SPA Router con soporte para parámetros dinámicos |
| **Estilos** | Vanilla CSS | Modern CSS | Sistema de diseño propio sin frameworks utility-first (No Tailwind) |
| **Animaciones** | Framer Motion | `^13.0.0` | Animaciones fluidas, scroll reveals y transiciones de estado |
| **Linter** | Oxlint | `^1.75.0` | Linter de alto rendimiento en Rust |
| **Iconografía** | Lucide React / React Icons | `^1.31.0` / `^5.7.0` | Iconos de interfaz y logotipos de tecnologías |
| **Contenido Blog** | React Markdown | `^10.1.0` | Renderizado dinámico de artículos en formato Markdown |
| **SEO & Metadatos** | React Helmet Async | `^3.0.0` | Gestión dinámica de tags `<head>`, Open Graph y Twitter Cards |
| **Despliegue** | Vercel | SPA Configuration | Despliegue estático con reescritura de URLs en `vercel.json` |

---

## 3. Estructura del Directorio

```text
portafolio-miguel/
├── public/
│   ├── CV_Miguel_Alvarez.pdf      # Archivo descargable del Curriculum Vitae
│   ├── favicon.svg                # Favicon del sitio
│   ├── posts/                     # Archivos Markdown de los artículos del blog
│   │   ├── el-poder-del-plan.md
│   │   ├── figma-mcp.md
│   │   ├── herdr-profundidad.md
│   │   ├── mi-primer-post.md
│   │   ├── qa-criterios.md
│   │   └── que-son-las-skills.md
│   └── *.png / *.jpg              # Banners y recursos gráficos de posts y perfil
├── src/
│   ├── assets/                    # Recursos estáticos locales importables
│   ├── components/                # Componentes reutilizables de UI
│   │   ├── ContactSection.tsx     # Sección de contacto con formulario mailto
│   │   └── Navigation.tsx         # Barra de navegación principal (Portafolio / Blog)
│   ├── data/                      # Datos estáticos e interfaces
│   │   └── posts.ts               # Catálogo de posts (id, title, date, thumbnail, file)
│   ├── pages/                     # Vistas / Páginas de la aplicación
│   │   ├── BlogList.tsx           # Catálogo/Listado de artículos del blog
│   │   ├── BlogPost.tsx           # Vista individual de lectura de artículo
│   │   └── Home.tsx               # Portafolio principal (Hero, Experiencia, IA, Skills)
│   ├── App.css                    # Estilos complementarios
│   ├── App.tsx                    # Enrutador principal con HelmetProvider
│   ├── index.css                  # Sistema de diseño global, tokens CSS y utilidades
│   └── main.tsx                   # Punto de entrada de React 19
├── .gitignore
├── .oxlintrc.json                 # Configuración de Oxlint
├── AGENTS.md                      # Instrucciones para agentes de IA (este archivo)
├── index.html                     # Plantilla base HTML con metadatos OpenGraph por defecto
├── package.json                   # Dependencias y scripts de ejecución
├── tsconfig.app.json              # Configuración TypeScript para la aplicación
├── tsconfig.json                  # Configuración TypeScript raíz
├── tsconfig.node.json             # Configuración TypeScript para herramientas de Node
├── vercel.json                    # Reglas de enrutamiento SPA para Vercel
└── vite.config.ts                 # Configuración de plugins de Vite
```

---

## 4. Comandos de Desarrollo y Verificación

| Comando | Acción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor local de desarrollo con HMR (por defecto en `http://localhost:5173`). |
| `npm run build` | Ejecuta verificación de tipos con `tsc -b` y compila para producción con `vite build`. |
| `npm run lint` | Ejecuta el linter `oxlint` para detectar problemas en código React y TypeScript. |
| `npm run preview` | Levanta un servidor local para previsualizar los archivos generados en `dist/`. |

> [!IMPORTANT]
> Antes de dar por finalizada cualquier tarea o cambio en el código, el agente debe ejecutar `npm run lint` y `npm run build` para garantizar que no existan errores de compilación ni advertencias de linting.

---

## 5. Sistema de Diseño y Reglas de Estilo

1. **Tokens CSS (`src/index.css`)**:
   - Fondo oscuro profundo: `--bg-color: #030303;`
   - Tarjetas y contenedores translúcidos: `--bg-card: rgba(20, 20, 20, 0.6);`
   - Acento esmeralda tecnológico: `--accent-color: #10B981;`, `--accent-light: #34d399;`, `--accent-glow: rgba(16, 185, 129, 0.15);`
   - Bordes de cristal: `--glass-border: rgba(255, 255, 255, 0.08);`
   - Tipografía principal: `'Outfit', sans-serif` (importada desde Google Fonts).

2. **Clases Utilitarias Principales**:
   - `.glass-card`: Aplica efecto Glassmorphism (`backdrop-filter: blur(12px)`), borde sutil y efecto hover con elevación.
   - `.skill-chip`: Píldora para mostrar tecnologías con su respectivo icono y hover state.
   - `.btn-primary`: Botón principal con transición y efecto hover interactivo.
   - `.text-gradient`: Degradado de texto de blanco a verde acento.
   - `.text-accent` / `.text-muted`: Colores para jerarquía de texto.
   - `.heading-xl` / `.heading-lg`: Tamaños y pesos estandarizados para encabezados.
   - `.section`: Espaciado estándar vertical (`padding: 6rem 0;`).

3. **Restricciones de Diseño**:
   - **No instalar ni usar TailwindCSS** a menos que el usuario lo solicite explícitamente. Se debe mantener la coherencia con Vanilla CSS y las variables definidas en `src/index.css`.
   - Mantener el tema visual oscuro, minimalista y técnico con acentos verdes.

---

## 6. Arquitectura del Blog y Gestión de Contenido

El blog utiliza un patrón desacoplado híbrido:

1. **Metadatos (`src/data/posts.ts`)**:
   Cada post se registra en el arreglo `posts`:
   ```typescript
   export interface Post {
     id: string;          // Slug para la URL (/blog/:id)
     title: string;       // Título visible del post
     date: string;        // Fecha en formato 'DD Mes, AAAA'
     description: string; // Resumen corto para tarjetas y meta tags SEO
     thumbnail: string;   // Ruta a la imagen en /public (ej: '/plan-banner.png')
     file: string;        // Nombre del archivo Markdown en /public/posts/
   }
   ```

2. **Cuerpo del Artículo (`public/posts/*.md`)**:
   - Los artículos se redactan en formato Markdown estándar.
   - Son cargados en tiempo de ejecución mediante `fetch('/posts/' + post.file)` dentro de `src/pages/BlogPost.tsx` y renderizados con `ReactMarkdown`.
   - Se estilizan automáticamente mediante el contenedor `.markdown-body` definido en `src/index.css`.

3. **Cómo Agregar un Nuevo Post**:
   1. Crear el archivo `public/posts/<nombre-post>.md`.
   2. Agregar la imagen de portada en `public/<imagen-banner>.png`.
   3. Registrar el nuevo post al inicio o final de `src/data/posts.ts`.
   4. Verificar que la vista de detalle y el compartir nativo funcionen correctamente.

---

## 7. Reglas y Buenas Prácticas para Agentes

1. **TypeScript Estricto**:
   - Definir interfaces explícitas para props y estructuras de datos.
   - Evitar el uso de `any`. Usar tipos específicos (`React.ChangeEvent<HTMLInputElement>`, `Variants` de `framer-motion`, etc.).
   - Utilizar importaciones de tipo explícitas: `import type { Variants } from 'framer-motion';`.

2. **Componentes React 19**:
   - Usar componentes funcionales con hooks estándar (`useState`, `useEffect`, `useParams`, `useLocation`).
   - Asegurarse de que los hooks cumplan con las reglas de React (`react/rules-of-hooks`).
   - Evitar dependencias innecesarias en `useEffect`.

3. **SEO & Accesibilidad**:
   - Cada página o vista debe incluir `<Helmet>` con su correspondiente `<title>`, `<meta name="description">` y propiedades Open Graph (`og:title`, `og:description`, `og:image`).
   - Todas las imágenes (`<img>`) deben incluir atributo `alt` descriptivo.
   - Usar etiquetas semánticas (`<nav>`, `<section>`, `<header>`, `<footer>`, `<main>`).

4. **Animaciones Fluidas**:
   - Usar variantes de `framer-motion` para mantener coherencia en transiciones (`fadeInUp`, `staggerContainer`).
   - En secciones con scroll, usar `whileInView="visible"` con `viewport={{ once: true }}` para evitar reanimaciones molestas.

5. **Idioma y Tono**:
   - El contenido de la interfaz de usuario, títulos y publicaciones está en **español**.
   - Los nombres de variables, funciones, componentes y archivos deben mantenerse en **inglés** o según el estándar existente (`ContactSection.tsx`, `getSkillIcon`, `posts.ts`).

---

## 8. Guía de Modificación de Secciones del Portafolio

- **Hero & Presentación**: Modificar en `src/pages/Home.tsx` (`TypewriterHeader`, título y descripción principal).
- **Experiencia Laboral**: Actualizar las tarjetas en la sección `Experiencia` de `src/pages/Home.tsx`.
- **Desarrollo con IA & Metodologías**: Mantener y expandir en la sección `Desarrollo Asistido por IA` de `src/pages/Home.tsx`.
- **Stack de Tecnologías & Iconos**:
  - Para agregar un nuevo icono de lenguaje o herramienta, registrarlo en la función `getSkillIcon` en `src/pages/Home.tsx` utilizando `react-icons/si` o `react-icons/fa`.
  - Añadir el nombre al array correspondiente en la sección `Stack Tecnológico`.
- **Formulario de Contacto**: Configurado en `src/components/ContactSection.tsx` para generar enlaces directos `mailto:`.
