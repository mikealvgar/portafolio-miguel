# Desarrollo Asistido por IA: Mi experiencia real en el Frontend

Últimamente se habla muchísimo de cómo la inteligencia artificial va a quitarnos el trabajo a los programadores. La verdad, después de integrar estas herramientas en mi día a día, me he dado cuenta de que es todo lo contrario: el verdadero estándar ahora es lo que llamamos **Agentic Coding**.

## ¿Qué es esto del Spec Driven Development (SDD)?

Básicamente, el Spec Driven Development (SDD) cambia el orden en el que hacemos las cosas. En lugar de recibir un ticket de Jira medio vacío y ponernos a tirar código directo en el editor, invertimos tiempo en escribir especificaciones técnicas súper detalladas (Specs).

La idea es armar un documento tan claro que un agente de IA pueda leerlo y escupir la estructura base del proyecto sin equivocarse.

### Así es como lo aplico en la vida real

Como dev Mid-level, he notado que si le pides cosas a ciegas a la IA, terminas con un código espagueti inmanejable. Para evitar eso, este es el flujo que me ha estado funcionando:

1. **Sesiones de "Grill Me"** 
   Antes de escribir nada, abro un chat con la IA y le pido que me interrogue. Le digo de qué trata el feature y dejo que me haga preguntas incómodas sobre reglas de negocio o casos límite en los que yo ni había pensado.
   
2. **Armando el Spec (Open Spec)**
   Con todo ese contexto, escribo un archivo Markdown definiendo el objetivo, el stack que tiene que usar sí o sí (por ejemplo, *React, TypeScript, Vite*) y le pongo restricciones claras como "no uses Tailwind, solo CSS puro".

3. **Dejando que el Agente trabaje**
   Luego le paso este documento a herramientas como **Gemini** o **Antigravity CLI**. En cuestión de segundos, la IA me genera todo el boilerplate, los tipos de TypeScript y me arma la estructura de carpetas. Te ahorra horas de trabajo mecánico.

4. **El toque humano (Revisión y Refactor)**
   Acá es donde realmente aporto valor como ingeniero. Tomo ese código crudo, lo reviso, conecto la lógica y me aseguro de que las interfaces gráficas coincidan perfectamente con el maquetado (más adelante subiré otro post relacionado a cómo configurar Figma como MCP para el maquetado de aplicaciones).

---

### Las herramientas que no me pueden faltar
- **Gemini y Claude:** Son mis compañeros de *Pair Programming*. Los uso muchísimo para pelotear ideas de arquitectura o refactorizar componentes grandes de React.
- **Vite y Astro:** Porque compilan tan rápido que me permiten probar el código generado por la IA casi en tiempo real.

En mi experiencia, integrar metodologías como SDD me ha ayudado a acortar los tiempos de entrega de manera brutal. Lejos de reemplazarme, estas herramientas me permiten enfocarme en pensar la solución en lugar de pelearme con la sintaxis. 

Hoy por hoy, el límite ya no está en qué tan rápido escribes código, sino en tu capacidad para orquestar la solución completa.
