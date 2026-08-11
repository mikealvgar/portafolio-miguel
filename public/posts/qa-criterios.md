# Creando Skills personalizadas en IA: El caso práctico de QA y Criterios de Aceptación

Todos amamos la velocidad con la que los agentes de IA (como Claude, Cursor o Antigravity) generan código. Pero hay un lado oscuro: si los dejas trabajar sin supervisión, a menudo ignoran los "edge cases" (casos límite) o rompen funcionalidades que ya existían.

La solución no es dejar de usar IA, sino cambiarle el sombrero. Antes de dejarla programar, **tienes que obligarla a ser tu Ingeniero de QA**.

## El problema de programar sin Criterios de Aceptación

Cuando le pides a una IA *"agrega un formulario de login"*, te va a generar los inputs y el botón. Pero probablemente olvidará:
- ¿Qué pasa si el internet se corta mientras se envía el request?
- ¿Qué pasa si el usuario ingresa un email inválido?
- ¿Cómo se ve el estado de carga (loading state)?

Para evitar esto, en mi flujo de trabajo de *Agentic Coding* implemento **Skills Personalizadas**, como un comando especializado en QA (por ejemplo, `/qa-verification`).

## Creando el Skill `/qa-verification`

En herramientas como Antigravity CLI, puedes crear una carpeta con un archivo `SKILL.md` que le enseñe a la IA a comportarse estrictamente como un Tester. 

Así es como se estructura un Skill de QA:

```yaml
---
name: qa-verification
description: Actúa como un Ingeniero de QA Senior. Lee los requerimientos y genera Criterios de Aceptación estrictos antes de que se escriba el código.
---
```

### Las Reglas del Skill (Hard Rules)
Dentro de ese archivo, le doy instrucciones claras al agente de que **tiene prohibido escribir código**. Su única tarea es leer lo que quiero construir y devolverme un checklist dividido en tres partes:

1. **Happy Path (Camino feliz):** Lo que debe pasar cuando todo sale bien.
2. **Edge Cases (Casos límite):** ¿Qué pasa con datos nulos, strings súper largos o usuarios sin permisos?
3. **Error Handling (Manejo de errores):** ¿Cómo debe reaccionar la UI si el backend devuelve un error 500 o 401?

## Cómo cambia esto el flujo de trabajo

Al aplicar esto, mi proceso de desarrollo se ve así:

1. **Defino la idea:** Escribo qué quiero lograr.
2. **Invoco a QA:** Ejecuto el comando de QA. El agente lee mi idea y me genera una lista de 10 criterios de aceptación súper estrictos que yo ni había pensado.
3. **Apruebo los criterios:** Si me gusta la lista, la guardo en mi documentación (Specs).
4. **A programar:** Ahora sí, lanzo a mi agente programador, pero con una condición: *"Escribe el código para este feature, pero asegúrate de cumplir con estos 10 Criterios de Aceptación de QA"*.

## Conclusión

Forzar a la IA a generar Criterios de Aceptación *antes* de tirar código ha reducido mis tiempos de depuración casi a cero. 

Dejas de pelearte arreglando bugs tontos al final del día, porque la misma IA ya los previó desde la fase de diseño. En el *Agentic Coding*, la calidad del código no depende de qué tan bueno sea el modelo, sino de qué tan estrictos sean los criterios con los que lo evalúas.
