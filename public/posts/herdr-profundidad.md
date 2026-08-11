# Herdr: El motor definitivo para flujos de trabajo con Agentes de IA

Si has estado utilizando agentes de IA para programar (como Codex, Claude Code, Cursor Agent o Antigravity), probablemente te hayas topado con un problema: cuando tienes múltiples agentes corriendo al mismo tiempo, el caos en la terminal se vuelve inmanejable. 

Un agente podría estar editando un archivo, otro revisando el código, un tercero ejecutando pruebas y un cuarto esperando que le des una confirmación. Mantener el seguimiento de todas esas terminales simplemente no escala.

Ahí es donde entra **Herdr**, que según su documentación oficial se define como *"the runtime coding agents run on"* (el entorno de ejecución sobre el que corren los agentes de código). Herdr es un gestor de espacios de trabajo en la terminal construido exactamente para solucionar este problema.

---

## ¿Por qué no usar simplemente tmux?

Si bien herramientas excelentes como *tmux* o *Zellij* añaden sesiones persistentes y gestión de paneles, estas son de propósito general y **no entienden el proceso que ocurre dentro de ellas**. Para tmux, un agente de IA es solo otro comando ejecutándose, sin consciencia de su contexto.

Por otro lado, los entornos gráficos para agentes suelen aislar todo en su propia aplicación, alejándote del flujo de trabajo real de una terminal (y complicando el trabajo en servidores remotos).

**Herdr se sitúa justo en el medio:**
Mantiene el modelo de sesiones persistentes y terminales reales, pero le añade **conocimiento sobre el estado del agente**, controles con el ratón nativos (puedes hacer clics en pestañas, arrastrar paneles, etc.), notificaciones, una API de sockets local, y capacidades de automatización.

---

## El superpoder: Conciencia de Estados del Agente

La característica más importante de Herdr no es solo la persistencia, sino la barra lateral (sidebar) que rastrea activamente cinco estados principales:

- **`working`** (trabajando): El agente está procesando una solicitud o generando código.
- **`blocked`** (bloqueado): El agente se ha detenido porque necesita tu aprobación o que respondas una pregunta para continuar.
- **`done`** (finalizado): El agente terminó su trabajo en segundo plano, pero tú aún no has visto la pestaña.
- **`idle`** (inactivo): El agente está listo para recibir comandos y ya lo has revisado.
- **`unknown`** (desconocido): El estado no pudo ser clasificado.

Esto elimina la necesidad de revisar pestaña por pestaña. No tienes que abrir seis terminales diferentes cada pocos minutos para ver si un agente ya terminó de escribir código; simplemente miras la barra lateral de Herdr y diriges tu atención solo donde es requerida. 

Actualmente, Herdr soporta **19 agentes de caja** (Claude Code, Codex, Pi, OpenCode, Cursor, Grok, Copilot, Hermes, entre otros) que pueden informar su estado automáticamente.

---

## Arquitectura Cliente-Servidor Real y Persistencia

Al igual que un multiplexor de terminal tradicional, Herdr cuenta con un cliente y un servidor en segundo plano.

El servidor es el dueño de los pseudo-terminales (PTYs), los procesos hijos, el estado y el diseño de la sesión. El cliente simplemente renderiza ese estado y envía tus pulsaciones de teclado o clics del ratón. 

Esto significa que **puedes cerrar la ventana de tu laptop o perder la conexión a internet**. El servidor de Herdr, tus agentes, tus tests y tu entorno de desarrollo seguirán ejecutándose. Cuando vuelvas a abrir la terminal y ejecutes `herdr`, regresarás exactamente al mismo estado en el que estabas. Funciona perfecto en local, por SSH hacia un servidor remoto, ¡e incluso desde el celular adaptando su interfaz!

---

## Agent-Native: Automatización para Agentes

Otra joya de Herdr descrita en su documentación es su filosofía "Agent-native". Herdr expone una interfaz de línea de comandos (CLI) y una API de sockets que los mismos agentes pueden usar. 

Esto significa que un agente de IA puede decirle a Herdr: *"Divide mi panel a la derecha, abre otro agente especializado en testing, pásale este comando y avísame cuando esté bloqueado o haya terminado"*. En lugar de presionar teclas a ciegas y cruzar los dedos, los agentes se coordinan a nivel de sistema.

---

## Mi experiencia personal corriendo Antigravity CLI

Recientemente he integrado **Antigravity CLI** a mi flujo de trabajo, y correrlo dentro de Herdr ha cambiado por completo las reglas del juego. 

Al delegar tareas pesadas o refactorizaciones masivas a Antigravity, a menudo el agente tarda varios minutos en planear, buscar en el código, y aplicar los cambios. Antes, tenía que dejar la terminal bloqueada y no perderla de vista. 

Ahora, levanto una pestaña específica para Antigravity en mi Workspace de Herdr. Le paso el requerimiento (`/plan`) y me muevo a otra pestaña a seguir trabajando, o incluso cierro la computadora. 

Herdr mantiene a Antigravity trabajando incansablemente en segundo plano. Si Antigravity necesita mi confirmación para ejecutar un comando de shell o quiere que le apruebe el Spec, la barra lateral en Herdr cambia mágicamente a **`blocked`**. Hago clic, le doy mi validación, y vuelvo a lo mío. 

## Conclusión

Herdr es como si hubieran reconstruido tmux, pero pensando específicamente en la era del desarrollo asistido por Inteligencia Artificial.

Con integración de ratón (puedes arrastrar bordes, hacer clic derecho y cambiar de pestañas fácilmente), soporte remoto persistente, y detección automática de estados de los agentes más populares, es una herramienta imprescindible para cualquier desarrollador que quiera escalar su productividad corriendo múltiples agentes en paralelo.
