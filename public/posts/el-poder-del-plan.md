# El poder del comando '/plan': Por qué tu IA debe pensar antes de codificar

La mayoría de los desarrolladores interactúan con la Inteligencia Artificial como si fuera un buscador avanzado o un oráculo: le hacen una pregunta y esperan código funcional de inmediato. Pero cuando trabajas en arquitecturas complejas o con Agentes Autónomos (Agentic Workflows), este enfoque es una receta para el desastre.

Aquí es donde entra el comando **`/plan`** y la filosofía del **Spec Driven Development (SDD)**.

## ¿Qué sucede cuando la IA no planea?

Si le pides a un agente: *"Agrega un sistema de autenticación a mi app"*, la IA intentará escribir todo el código de una vez. Sin contexto suficiente, asumirá bibliotecas que no usas, sobreescribirá archivos importantes y generará una "alucinación técnica" difícil de deshacer.

## Forzando la pausa: El artefacto de Planeación

Al usar un comando como `/plan`, le indicamos al agente que **se detenga y estructure sus pensamientos**. En lugar de código, el agente debe generar un documento (un artefacto) que contiene:

1. **Entendimiento del problema:** ¿Qué estamos tratando de resolver?
2. **Preguntas Abiertas:** ¿Falta información clave? (ej. *¿Usaremos Firebase o Supabase?*)
3. **Cambios Propuestos:** Una lista exacta de los archivos a modificar y crear, con snippets de código propuestos.
4. **Plan de Verificación:** ¿Cómo probaremos que el código funciona?

## Los beneficios de ser el "Director Técnico"

Al requerir aprobación explícita de este plan antes de ejecutar cualquier comando en la terminal, tú retomas el control. Te conviertes en el **Director de Ingeniería** revisando el diseño de arquitectura de tu desarrollador Junior (la IA). 

Esto nos permite debatir decisiones, corregir el rumbo temprano y asegurar que cuando la IA finalmente escriba el código, lo haga con un contexto perfecto y alineado con nuestra visión.

En mi experiencia, obligar a los agentes a pensar en voz alta antes de actuar ha reducido mis horas de depuración a cero. ¿Tú ya usas `/plan` en tu día a día?
