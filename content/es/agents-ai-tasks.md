---
title: "Agentes y tareas de IA"
description: "Chat de Forger, chat de app, tareas de una sola ejecución, agentes de app, permisos, progreso y proveedores Coding CLI."
section: "Agentes y tareas de IA"
order: 6
status: "beta"
owner: "desktop"
sources:
  - "desktop/AGENTS.md"
  - "desktop/src/main/prompt-builder/prompts/skills/forger/forger-desktop-runtime-bridge.md"
  - "desktop/src/main/prompt-builder/prompts/skills/forger/forger-agents.md"
---

## Agentes y tareas de IA

Forger usa agentes de dos maneras: chat abierto y trabajo empaquetado por manifest. El chat es conversacional y puede adaptarse cuando la persona hace preguntas de seguimiento. El trabajo empaquetado lo declara el manifest de una app y le entrega a Forger un prompt con nombre, inputs esperados, contexto runtime, configuración de proveedor y acceso a herramientas para un trabajo específico.

Cuando una tarea empaquetada o un agente de app se ejecuta, Desktop invoca un Coding CLI configurado, como Codex o Claude, desde el contexto de la app instalada. Forger prepara el prompt con documentación de app, metadata del manifest, estado runtime actual, input seleccionado por la persona, variables de entorno para ese run y las herramientas MCP de app que el agente puede usar para inspeccionar o cambiar datos propios de la app.

## Chat con Forger

El chat con Forger es el asistente a nivel de plataforma. Puede responder preguntas del producto, explicar apps instaladas, ayudar a crear o modificar apps, revisar capacidades disponibles y coordinar trabajo que cruza la experiencia de Desktop.

Este chat se apoya en el estado actual de la plataforma. Cuando una respuesta depende de una app instalada, configuración de proveedor, permisos locales o metadata del catálogo, Forger usa esos hechos en vez de tratarlos como suposiciones.

## Chat con una app

El chat con una app está limitado a una app instalada. El agente trabaja desde la documentación de la app, el manifest, las capacidades visibles, las herramientas MCP disponibles y el estado runtime cuando explica qué puede hacer la app.

El resultado normal es funcional: qué puede cargar, revisar, crear, actualizar o explicar la app. Detalles internos como archivos de prompt, nombres de herramientas, URLs de servicios y rutas locales quedan en segundo plano salvo que la persona los pida.

## Tareas de una sola ejecución

Las tareas de una sola ejecución son prompts empaquetados en el manifest para trabajos acotados con inputs declarados y criterios claros de término. Sirven para trabajos como importar un archivo compartido, extraer registros estructurados, producir una revisión, generar un informe o aplicar un cambio enfocado en la app.

El manifest de la app declara el nombre visible de la tarea, prompt, campos de input, configuración de proveedor y herramientas permitidas. Desktop entrega el contexto del run y variables de entorno, luego invoca el Coding CLI. Cuando la app expone herramientas MCP de datos, las lecturas y escrituras pueden pasar por las reglas de validación propias de la app en vez de saltarse el modelo de la app.

## Agentes de app

Los agentes de app son coworkers empaquetados en el manifest para trabajo continuo dentro de una app instalada. Usan un prompt con nombre y contexto de app como las tareas de una sola ejecución, pero mantienen un thread de conversación para que la persona pueda hacer preguntas de seguimiento, ajustar el plan o continuar un workflow más largo.

Un agente de app trabaja dentro del alcance de la app seleccionada. Puede usar herramientas MCP de app, herramientas de proveedor aprobadas, inputs compartidos por la persona y contexto runtime para trabajar con datos de la app. El material fuera del área local privada de la app entra a la tarea solo cuando la persona lo entrega explícitamente.

## Continuar trabajo

Forger rastrea estado de runs y threads para que el trabajo pueda continuar después de una primera respuesta. La persona puede volver a una conversación con un agente de app, agregar instrucciones, pedir una revisión o cancelar una tarea que sigue corriendo.

Continuar trabajo preserva contexto sin ocultar cambios importantes. La persona puede ver qué cambió, qué queda pendiente y qué necesita confirmación antes de continuar con cambios destructivos o difíciles de revertir.

## Permisos

Los permisos conectan un prompt empaquetado con las herramientas que puede usar. Un manifest puede solicitar acceso MCP de app, herramientas oficiales de Forger, capacidades de proveedor y manejo de inputs compartidos. La solicitud se vincula con el trabajo visible que la tarea o agente intenta completar.

Las solicitudes de permiso explican la razón visible para la persona. Secretos, valores crudos de entorno, tokens de proveedor y líneas de comando internas quedan fuera del texto de permisos. Si el acceso se rechaza o no está disponible, Forger explica qué parte de la tarea no puede continuar.

## Progreso y fallas

Los estados de progreso son simples y accionables: en cola, corriendo, esperando permiso, completado, fallido o cancelado. Las tareas más largas pueden mostrar estado intermedio útil cuando el Coding CLI o el backend de la app reportan progreso significativo.

Las fallas identifican la causa funcional cuando es posible, como input faltante, autenticación de proveedor, permiso denegado, falla del runtime de app, falla de validación MCP, datos no soportados o un run cancelado. El detalle diagnóstico puede ayudar a recuperar, mientras el mensaje visible le dice a la persona qué pasó y qué puede reintentar o cambiar.

## Codex y Claude

Codex y Claude son runtimes de proveedor que Forger puede invocar mediante sus Coding CLIs cuando están configurados en la máquina de la persona. El proveedor seleccionado, modelo, nivel de esfuerzo, autenticación local y modo de permisos afectan qué tareas y agentes de app pueden ejecutarse.

Forger trata a los proveedores como motores de ejecución, no como la fuente de verdad de la app. El prompt recibe contexto actual desde Desktop y la app instalada, mientras las herramientas MCP de app entregan acceso estructurado a datos propios de la app mediante operaciones definidas por la app.
