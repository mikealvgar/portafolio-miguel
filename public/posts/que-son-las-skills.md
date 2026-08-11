# ¿Qué son las "Skills" en la IA y por qué cambiarán tu forma de programar?

Últimamente he estado hablando mucho sobre cómo organizo mis proyectos con herramientas como Antigravity o Herdr. Pero hay un concepto que creo que es el verdadero "game changer" y del que casi nadie está hablando: **Las Skills de IA**.

Si llevas un rato usando ChatGPT, GitHub Copilot o Claude, seguro te has topado con este ciclo infinito:
Abres un chat, le explicas cómo funciona tu proyecto, le dices qué librerías usas, le pides que por favor no use Tailwind porque estás usando CSS puro... y al día siguiente, en un chat nuevo, **tienes que volver a explicarle exactamente lo mismo**.

Es agotador, ¿verdad? Bueno, las Skills vienen a solucionar precisamente eso.

## Entonces, ¿qué rayos es un Skill?

Imagina que contratas a un desarrollador Junior súper inteligente, pero que tiene memoria de corto plazo. Cada vez que le pides algo, tienes que recordarle las reglas de la empresa. 

Un **Skill** es como si le dieras a ese Junior un manual de procedimientos. En el mundo del Agentic Coding (programación con agentes autónomos), un Skill no es más que una simple carpeta en tu proyecto que contiene un archivo de texto (usualmente un `.md`).

Dentro de ese archivo, tú escribes instrucciones claras sobre cómo quieres que la IA haga una tarea específica. 

## ¿Cómo se ven en la vida real?

Déjame darte un ejemplo de mi día a día. En mis proyectos de Frontend, casi siempre sigo la misma estructura para crear un componente. En lugar de escribir un *prompt* larguísimo cada vez, yo creé un Skill llamado `/generar-componente`.

En su archivo de configuración le escribí algo así:
> *"Cuando te pida generar un componente, usa React, no uses export default, separa los estilos en un archivo .css tradicional, y siempre, siempre, génerame un archivo de pruebas con Vitest."*

Ahora, cuando estoy en la terminal trabajando, solo escribo:
`/generar-componente "Botón de Login"`

Y la IA hace exactamente lo que quiero, con mis propias reglas de negocio, sin que yo tenga que recordárselas.

## De consumir IA a orquestar IA

Esto cambia por completo la dinámica. Pasas de ser alguien que "le pide favores" a la IA, a convertirte en un arquitecto que diseña flujos de trabajo. 

Puedes tener un Skill para hacer Code Review, otro Skill que actúe como tu QA personal (como platiqué en otro post), o incluso un Skill que analice tu base de datos y te genere documentación. Las herramientas como Antigravity CLI te permiten guardar estos comandos en una carpeta oculta (`.agents/skills/`) y tenerlos disponibles en todo tu proyecto al instante.

## Conclusión

La Inteligencia Artificial genérica es buena para resolver dudas, pero la **Inteligencia Artificial personalizada a tu manera de trabajar** es lo que realmente te vuelve 10x más rápido.

Te invito a que hagas el ejercicio mental: ¿Cuál es esa tarea que te da mucha pereza hacer y que siempre le pides a la IA de la misma forma? Probablemente ese sea tu primer gran Skill.

¿Alguien por aquí ya está creando sus propios flujos o atajos personalizados? ¡Los leo!
