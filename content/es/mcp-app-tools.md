---
title: "MCP y herramientas de app"
description: "Cómo Forger separa tools MCP propias de app, tools oficiales, validación y features visibles."
section: "MCP y herramientas de app"
order: 7
status: "beta"
owner: "desktop"
sources:
  - "desktop/src/main/prompt-builder/prompts/skills/global/forger-app-mcp-data-tools.md"
  - "desktop/src/main/prompt-builder/prompts/skills/forger/forger-tools.md"
  - "desktop/src/main/prompt-builder/prompts/skills/forger/forger-manifest-authoring.md"
---

## MCP y herramientas de app

MCP es la interfaz estructurada que Forger usa cuando un agente necesita operar datos de una app o capacidades de la plataforma. Le da al agente operaciones con nombre, entradas, salidas, permisos y validaciones declaradas en vez de pedirle que adivine cómo funciona una pantalla, base de datos, script o endpoint.

Forger trata las herramientas como una capa operativa para agentes. La persona vive el resultado en términos de producto: qué se encontró, qué cambió, qué necesita permiso y qué no se puede hacer con la app o el nivel de acceso actual.

## Qué son las herramientas

Las herramientas son capacidades controladas que un agente puede llamar durante una tarea. Pueden leer registros, validar entradas, crear datos, actualizar datos, iniciar una operación soportada o usar un servicio conectado cuando la app y la plataforma lo permiten.

Una herramienta no es automáticamente una feature visible. La feature visible es el flujo o resultado que la persona entiende, como importar mensajes, revisar notas de clientes, actualizar un plan o enviar una respuesta aprobada. La herramienta es el mecanismo estructurado que el agente usa detrás de ese flujo.

## Herramientas de datos de app

Las herramientas de datos de app pertenecen a la app instalada. Reflejan el modelo real, las reglas de validación y el lenguaje de dominio de la app para que el agente pueda trabajar con datos propios sin saltarse el backend ni escribir directamente en el almacenamiento.

Cuando existen herramientas de datos de app, ese es el camino normal para el trabajo del agente. Las ediciones directas de base de datos, scripts ad hoc o endpoints no documentados quedan como mecanismos de respaldo para trabajo técnico, no como la forma normal de operar un flujo soportado de la app.

## Herramientas de plataforma

Las herramientas de plataforma son capacidades propias de Forger que están fuera del modelo de datos de una sola app. Incluyen integraciones, operaciones de Desktop y otros servicios de plataforma que una app puede solicitar cuando una tarea necesita acceso más allá de los datos locales de la app.

Las herramientas de plataforma siguen separadas de las herramientas de datos de app. Una app puede pedirle a Forger acceso a una capacidad de plataforma, pero Desktop controla el límite de permisos, las verificaciones de disponibilidad y la ruta de ejecución segura.

## Acceso a Gmail y WhatsApp

El acceso a Gmail y WhatsApp se concede mediante herramientas de plataforma, no dando acceso amplio de cuenta a una app. Un grant en el manifest identifica la herramienta, explica el motivo visible para la persona y pide las acciones que la app necesita para el flujo declarado.

Este acceso se usa para trabajos que la app no puede hacer sin esa integración. Si el acceso no está disponible o se deniega, Forger explica el impacto funcional, como no poder leer mensajes seleccionados, preparar una respuesta o sincronizar una conversación.

## Permisos de herramientas

Los permisos de herramientas conectan un flujo visible de app con las operaciones específicas que un agente puede usar. Los permisos acotados y explicables hacen visible por qué la app necesita acceso y cómo ese acceso se relaciona con la capacidad actual.

El texto de permisos describe qué obtiene la persona con el acceso, no el transporte interno. La persona no necesita entender nombres de servidores MCP, campos de manifest, endpoints, variables de entorno o rutas locales para decidir si una app puede usar una herramienta.

## Cambios seguros en datos

Las herramientas que cambian datos validan antes de confirmar cambios y devuelven errores estructurados que el agente puede traducir en orientación clara. Campos faltantes, valores inválidos, registros duplicados, operaciones no soportadas, permisos denegados y fallas parciales producen explicaciones visibles específicas.

Los cambios destructivos o difíciles de revertir usan confirmación explícita cuando el flujo lo requiere. Cuando existen flujos de vista previa, aplicar y deshacer, la persona puede inspeccionar el impacto antes de que la app cambie datos importantes.

## Por qué las herramientas no son UI

Las herramientas no son la interfaz de la app. Son la forma en que el agente opera capacidades aprobadas mientras la persona usa pantallas, chat, confirmaciones, estados de progreso y resultados.

La documentación y el texto de producto presentan el resultado del workflow, no llamadas a herramientas como pasos manuales. Cuando una persona pregunta qué pasó, Forger explica primero el resultado y el límite de seguridad, y muestra detalles de implementación solo cuando sirven para depuración o revisión técnica.
