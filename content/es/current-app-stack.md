---
title: "El stack actual"
description: "Cómo el stack actual de apps de Forger ayuda a crear apps locales con una forma técnica consistente."
section: "El stack actual"
order: 3
status: "available"
owner: "stacks/vite-fastapi-sqlite-commons"
sources:
  - "stacks/vite-fastapi-sqlite-commons/AGENTS.md"
  - "skeletons/vite-fastapi-sqlite/AGENTS.md"
  - "skeletons/vite-fastapi-sqlite/manifest.json"
---

## El stack actual

El stack actual de apps de Forger combina backend Python, FastAPI, SQLite, Vite, React, Tailwind CSS, componentes shadcn/ui, primitivas Radix, herramientas frontend con Node y herramientas Python con `uv`.

Este stack les da a las apps locales una forma técnica predecible. Las apps pueden personalizarse para una persona o flujo de trabajo concreto, pero la base se mantiene familiar entre proyectos.

## Por qué Forger usa un stack

Forger usa un stack como una convención, no como una limitación. La convención acelera la creación de apps porque las decisiones centrales ya existen: cómo corre el backend, cómo se guardan los datos, cómo se construye la interfaz, cómo arrancan los servicios y cómo se empaqueta la app.

La misma convención también ayuda a la IA a trabajar con la app. Cuando los archivos, servicios, acceso a datos y patrones de interfaz siguen una forma conocida, el agente entiende el código más rápido, explica el comportamiento con mayor precisión y hace cambios puntuales sin reaprender la estructura de la app desde cero.

## Backend

El backend es un servicio Python construido con FastAPI. Controla rutas de aplicación, validación, comportamiento de dominio, acceso a datos locales, trabajo en segundo plano y los MCPs que permiten al agente interactuar con capacidades de la app de forma controlada.

FastAPI mantiene el backend explícito y fácil de inspeccionar. Las rutas describen el comportamiento público de la app, los servicios contienen la lógica de dominio y los MCPs exponen operaciones de mayor nivel que el agente puede usar sin convertir los detalles de implementación en la experiencia del usuario.

## Base de datos local

SQLite es la base de datos local por defecto porque es liviana, confiable y adecuada para apps que corren en la propia máquina de la persona. Evita infraestructura innecesaria y aun así permite datos locales durables, consultas relacionales y respaldos simples.

Los datos de la app usan tablas claras y columnas tipadas cuando la forma de los datos es conocida. El almacenamiento flexible se reserva para datos realmente variables que se benefician de esa flexibilidad.

## Frontend

El frontend es una app Vite y React. React aporta la estructura de aplicación, mientras que los componentes shadcn/ui y las primitivas Radix entregan bloques de interfaz accesibles y componibles. Tailwind CSS maneja los estilos cerca de la capa de componentes.

Esta combinación permite crear herramientas locales pulidas sin que cada app tenga que inventar sus propios patrones de interacción. Formularios, diálogos, tablas, menús y navegación pueden mantenerse consistentes y aun así adaptarse a las necesidades de cada app.

## Servicios de la app

Una app de Forger puede ejecutar múltiples servicios locales cuando los necesita. La forma habitual incluye el servicio backend, el servicio web del frontend en desarrollo o empaquetado, servidores MCP para la interacción del agente y procesos de trabajo para tareas más largas.

Los servicios mantienen responsabilidades separadas. La interfaz se concentra en la experiencia del usuario, el backend controla el comportamiento de aplicación, los MCPs le dan al agente puntos de entrada controlados y el trabajo en segundo plano puede correr sin bloquear la pantalla.

## Actualizaciones en tiempo real

El stack soporta interacción en tiempo real mediante WebSockets. Las actualizaciones en tiempo real son útiles cuando una app necesita mostrar progreso, transmitir estado de tareas, refrescar datos después de trabajo en segundo plano o mantener la interfaz alineada con cambios realizados por el agente.

HTTP sigue siendo el camino normal para solicitudes estándar. WebSockets se usan cuando la experiencia del usuario mejora con actualizaciones en vivo en vez de depender de recargas manuales repetidas.

## Desarrollo y empaquetado

El stack le da al desarrollo de apps un camino repetible desde la creación hasta la instalación. Los desarrolladores pueden construir backend, frontend, servicios locales, MCPs y modelo de datos con expectativas compartidas en vez de elegir cada pieza desde cero.

El empaquetado convierte la app en una aplicación local instalable para Forger. La app empaquetada incluye el código, definiciones de servicios, dependencias y metadatos necesarios para que Forger la prepare y la ejecute en el espacio privado del usuario.
