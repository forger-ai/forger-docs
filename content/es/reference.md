---
title: "Referencia"
description: "Referencia de manifest, stack, runtime bridge, matriz de capacidades, glosario y troubleshooting."
section: "Referencia"
order: 10
status: "partial"
owner: "workspace"
sources:
  - "desktop/src/main/prompt-builder/prompts/skills/forger/forger-manifest-authoring.md"
  - "stacks/vite-fastapi-sqlite-commons/AGENTS.md"
  - "desktop/src/main/prompt-builder/prompts/skills/forger/forger-desktop-runtime-bridge.md"
---

## Referencia

Esta referencia resume los contratos técnicos que hacen que una app de Forger sea instalable, operable y comprensible para personas y agentes. Se enfoca en los conceptos que necesita una persona técnica al construir, revisar, publicar o diagnosticar una app.

Las apps de Forger son aplicaciones locales con metadata explícita, servicios declarados, datos privados de app y capacidades opcionales para agentes. La experiencia visible se mantiene enfocada en la app, mientras el contrato técnico define cómo Desktop la instala, la inicia, la conecta con agentes y mantiene claros los límites de seguridad.

## Manifest

El manifest es el contrato de instalación y runtime de la app. Describe qué es la app, qué stack usa, cómo aparece en el catálogo, qué servicios locales necesita, qué capacidades declara y qué herramientas o skills para agentes están disponibles.

Las secciones no deprecadas actuales del manifest incluyen `name`, `version`, `description`, `changelog`, `stack`, `catalog`, `services`, `mcp`, `tools`, `appSecrets`, `promptTemplates`, `agents`, `scripts`, `skills`, `cloudMessaging`, `agentRuntime`, `remoteTunnel` y `localNetworkShare`.

Los valores del manifest describen comportamiento que realmente existe en la app. Un servicio, capacidad, secreto, skill o herramienta es útil en el manifest cuando la app puede usarlo y la experiencia tiene sentido sin exponer mecánicas internas.

## Stack de apps

El stack actual de apps de Forger es `vite-fastapi-sqlite`. Combina un backend Python, FastAPI, SQLite, Vite, React, Tailwind CSS, componentes shadcn/ui copiados, primitivas Radix, tooling frontend con Node y tooling Python con `uv`.

El stack le da a las apps una forma predecible: el backend se encarga del comportamiento de la aplicación y el acceso a datos locales, el frontend se encarga de la interfaz visible, SQLite guarda los datos de app, las herramientas MCP exponen operaciones controladas para agentes y las definiciones de servicios permiten que Desktop inicie la app de manera confiable.

Las apps pueden personalizarse para un flujo específico, pero las convenciones del stack mantienen consistentes la instalación, health checks, actualizaciones realtime, empaquetado y operación con agentes.

## Runtime bridge

El runtime bridge es el camino local firmado de comunicación entre un backend de app y las operaciones de agentes administradas por Desktop. Los frontends de app llaman a su propio backend. El backend usa el bridge cuando necesita comportamiento perteneciente a Desktop, como actualizaciones de tareas, coordinación de proveedores, información del ciclo de vida de la app u otras operaciones administradas por la plataforma.

El bridge no es una API pública de internet y no reemplaza las rutas normales de la app. Existe para mantener la coordinación privilegiada de Desktop separada de la interfaz visible y de la lógica de negocio específica de la app.

Los caminos WebSocket del bridge soportan actualizaciones de tareas y streams de estado en vivo cuando una app necesita mostrar progreso en la interfaz. Las solicitudes normales de app siguen usando rutas HTTP ordinarias.

## Capacidades

Las capacidades describen qué puede hacer una app o una superficie de plataforma y qué límite es dueño del comportamiento. Una documentación útil de capacidades identifica dueño, requisitos de configuración, superficie visible para la persona, límite de seguridad y disponibilidad actual.

Áreas comunes de capacidad incluyen archivos locales compartidos explícitamente por la persona, secretos de app, memoria, herramientas MCP, compartir en red local, acceso por túnel remoto, mensajería Cloud, respaldos, diagnósticos y funciones sociales o de compartir.

Las capacidades se entienden mejor como resultados funcionales. Por ejemplo, una persona puede conectar una cuenta requerida, compartir un archivo con una app, abrir una sesión en red local o recibir un reporte de diagnóstico. Las herramientas internas, scripts, manifests y endpoints siguen siendo detalles de implementación salvo que la persona esté trabajando en modo técnico.

## Glosario

- Desktop: la aplicación local de Forger que instala apps, inicia servicios, abre interfaces y coordina trabajo local con agentes.
- Cloud: servicios de Forger asociados a una cuenta para metadata de catálogo, verificación de publicación, compartir, almacenamiento, respaldos, acceso remoto y funciones sociales cuando están habilitadas.
- App instalada: una app de Forger preparada dentro del espacio local privado de la persona y ejecutada por Desktop.
- Espacio privado de app: el área local donde una app instalada mantiene su código, dependencias y datos de app.
- Manifest: la metadata y el contrato de runtime que le dice a Forger cómo instalar, presentar y operar una app.
- Stack de apps: la base técnica usada para construir una app, incluyendo backend, frontend, almacenamiento, tooling y convenciones de servicios.
- Herramienta MCP: una operación entregada por la app que le da a un agente acceso controlado al comportamiento de la app.
- Secreto de app: una credencial o token requerido declarado por la app y guardado mediante mecanismos seguros, nunca como valor plano en el manifest.
- Memoria: una capacidad de plataforma de Forger para preferencias durables, restricciones y datos útiles que pueden guiar trabajo futuro.
- Compartir en red local: una forma administrada por Desktop para exponer una app en ejecución a dispositivos en la misma red local mientras la persona mantiene activa la sesión compartida.
- Túnel remoto: una forma controlada por Desktop y Cloud para hacer que una sesión seleccionada de app sea alcanzable por internet cuando está habilitada.

## Resolución de problemas

Empieza el diagnóstico desde el síntoma visible y luego identifica la capa dueña.

Si la app no se instala, revisa metadata del manifest, disponibilidad del paquete, plataforma soportada, información de checksum y preparación de dependencias.

Si la app se instala pero no abre, revisa inicio de servicios, health checks, rutas del backend, salida de build del frontend y disponibilidad de puertos locales.

Si fallan las acciones del agente, revisa configuración del proveedor, herramientas MCP declaradas, documentación de app, disponibilidad del runtime bridge y si la operación pedida está realmente soportada por la app.

Si una capacidad parece ausente, revisa si está declarada en el manifest, habilitada para la cuenta o app, visible en la interfaz y soportada por la versión actual de la app.

Cuando el acceso a datos no está claro, los archivos externos permanecen no disponibles hasta que la persona los comparte explícitamente. Los datos de app permanecen dentro del espacio privado de app, salvo que la app tenga un flujo claro y aprobado por la persona para importar, exportar, compartir o sincronizar.
