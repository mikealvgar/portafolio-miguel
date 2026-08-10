# Configurando Figma MCP: Del Diseño al Código con IA

En mi post anterior hablé de cómo el **Spec Driven Development (SDD)** ha cambiado mi forma de programar. Hoy vamos a dar el siguiente paso lógico: conectar directamente los diseños de nuestro equipo de UI/UX con nuestra Inteligencia Artificial usando **Figma MCP** (Model Context Protocol).

## ¿Qué es Figma MCP?

El protocolo MCP permite a los modelos de IA interactuar con herramientas externas. Al configurar el servidor MCP de Figma, tu agente de IA (como Antigravity CLI o Claude) gana la capacidad de "leer" archivos de Figma en tiempo real. 

Ya no tienes que exportar imágenes o copiar y pegar propiedades CSS a mano. La IA analiza los nodos, los colores, las tipografías y las reglas de diseño (como el Auto Layout) directamente desde el código fuente de la herramienta de diseño.

## Cómo configurarlo paso a paso

Implementar esto en tu entorno local es súper directo:

### 1. Obtén tu Token de Figma
- Entra a Figma y ve a las configuraciones de tu cuenta (**Account Settings**).
- Navega a la pestaña de **Personal Access Tokens**.
- Genera un nuevo token, ponle un nombre y cópialo (¡ojo, guárdalo bien en tu gestor de contraseñas, no lo subas a GitHub!).

### 2. Configura el archivo MCP
Dependiendo del entorno Agentic que utilices, debes agregar el servidor oficial de Figma a tu configuración local. Si usas Antigravity CLI o Claude Desktop, basta con agregar el siguiente bloque a tu archivo `mcp_config.json`:

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@figma/mcp-server"],
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "tu_token_aqui"
      }
    }
  }
}
```

Al reiniciar tu entorno, la IA detectará que ahora tiene "ojos" dentro de Figma.

### 3. ¿Cómo mandar a llamarlo para desarrollar maquetas?

Una vez configurado, el flujo de trabajo es brutal. No necesitas pelear con la IA para que entienda el diseño. Solo tienes que abrir el chat del agente y darle un comando claro como este:

> *"Por favor, utiliza tus herramientas de Figma para analizar este archivo: `https://www.figma.com/file/...`. Revisa el frame llamado 'Dashboard Mobile', extrae todos los tokens de diseño (colores, espaciados, fuentes) y genérame el componente completo en React + TypeScript que coincida píxel a píxel con el maquetado."*

El agente se conectará a la API a través del MCP, extraerá toda la metadata y te devolverá el código perfectamente estructurado para que tú solo te enfoques en conectar la lógica de negocio.

---

### Recomendaciones extra para potenciar este flujo

Para complementar el desarrollo moderno en Frontend y asegurar que el código que genera la IA sea mantenible y a prueba de errores, te recomiendo incorporar estas 3 tecnologías a tu radar:

- **Context7:** Una herramienta excelente para manejar y mantener el contexto claro en aplicaciones escalables. Ayuda a que la arquitectura no se desmorone a medida que el proyecto crece.
- **Playwright:** Una vez que la IA te genera el componente desde Figma, usa Playwright. Es brutal para escribir tests E2E y pruebas visuales, asegurando que ninguna actualización rompa la interfaz gráfica que ya maquetaste.
- **Dart (con Flutter):** Si tu objetivo es llevar esos diseños de Figma al mundo móvil, el ecosistema de Dart sigue siendo imbatible para lograr 60 FPS estables con animaciones complejas en multiplataforma.

Integrar Figma como servidor MCP cierra por fin la brecha histórica entre diseñadores y desarrolladores. Si te animas a configurarlo, ¡cuéntame cómo te cambia la vida!
