---
title: "Crear apps"
description: "Cómo una idea se convierte en una app local usable de Forger con UI, datos, servicios y capacidades de agente."
section: "Crear apps"
order: 4
status: "beta"
owner: "skeletons/vite-fastapi-sqlite"
sources:
  - "AGENTS.md"
  - "skeletons/vite-fastapi-sqlite/AGENTS.md"
  - "desktop/src/main/prompt-builder/prompts/skills/forger/forger-manifest-authoring.md"
---

## Crear apps

Una app de Forger es un producto local usable, no solo un prompt o una instrucción de chat. Combina pantallas, datos locales, servicios, metadata de instalación y capacidades de agente para que una persona pueda abrir la app, usar sus flujos y pedirle al agente que opere la app con el mismo estado real.

La app hace visible y repetible el objetivo de la persona. Si la idea es "ayúdame a revisar facturas", la app ofrece lugares para cargar facturas, revisar campos extraídos, resolver excepciones, guardar decisiones y pedirle al agente que revise o actualice los mismos registros.

## De idea a app

Parte por el trabajo que la persona quiere completar. Define los objetos principales que la app administra, las decisiones que toma la persona, las pantallas que necesita y las acciones del agente que ayudan sin ocultar estado importante.

Una buena idea de app se vuelve concreta cuando tiene:

- un objetivo claro para la persona;
- flujos visibles para tareas comunes;
- datos locales que guardan el estado real de la app;
- servicios que ejecutan la app de forma confiable;
- capacidades de agente que leen o cambian datos mediante operaciones definidas;
- metadata de instalación para que Forger pueda preparar y abrir la app.

El agente no es la única interfaz. Una buena app de Forger sigue siendo útil cuando la persona quiere inspeccionar, comparar, editar o recuperar información directamente.

## Estructura de la app

La estructura de la app separa la experiencia visible del comportamiento de runtime. El frontend presenta pantallas y flujos. El backend controla validación, lógica de dominio, escrituras de datos, trabajo en segundo plano y operaciones disponibles para el agente. Los servicios locales mantienen frontend y backend disponibles cuando la persona abre la app.

Cada parte tiene una responsabilidad clara:

- las pantallas muestran lo que la persona puede ver y hacer;
- las rutas backend reciben solicitudes y aplican reglas;
- los servicios de dominio realizan el trabajo de la app;
- la base de datos guarda registros y configuraciones locales;
- las tools del agente exponen operaciones seguras para el asistente;
- la documentación explica capacidades y límites actuales.

El código puente se mantiene pequeño para que la app siga siendo comprensible. El código que conecta UI, backend, datos y operaciones de agente delega validación y comportamiento de negocio a módulos enfocados en vez de acumular toda la lógica.

## Manifiesto

El manifiesto describe cómo Forger instala, prepara, inicia y presenta la app. Es metadata de instalación y runtime, no un reemplazo de la documentación del producto.

Usa el manifiesto para declarar los datos que Forger necesita conocer:

- nombre, descripción, categoría y versión de la app;
- stack de runtime;
- servicios que Forger inicia;
- health checks que prueban que los servicios están listos;
- scripts usados por la plataforma durante preparación u operación;
- skills o instrucciones de agente incluidas con la app;
- capacidades declaradas que coinciden con comportamiento implementado.

El manifiesto funciona mejor cuando describe comportamiento que ya existe en la app. Si una capacidad depende de una pantalla, ruta, modelo de datos, script u operación de agente, esa implementación es lo que vuelve significativa la capacidad para la persona.

## Pantallas y flujos de trabajo

Las pantallas exponen los flujos reales de la app. Una persona puede entender qué está cargado, qué puede cambiar, qué se guardó y qué todavía necesita atención sin leer instrucciones internas.

Los buenos flujos suelen incluir:

- una pantalla inicial que muestra el estado actual;
- formularios o flujos de importación para agregar datos;
- pantallas de revisión para comparar y corregir resultados;
- vistas guardadas para volver a trabajo anterior;
- estados claros de vacío, carga, error y conflicto;
- confirmación o deshacer para cambios riesgosos.

La UI usa el sistema visual de la app de forma consistente. Detalles técnicos como nombres de servicios, scripts internos o rutas de archivos quedan fuera del copy normal, salvo que la persona pida diagnósticos explícitamente.

## Datos de la app

Los datos locales son la fuente de verdad de la app. Guarda registros de dominio, decisiones de la persona, configuraciones y estado de flujos en estructuras explícitas que la app pueda validar y recuperar.

Los datos relacionales usan tablas y columnas tipadas cuando la forma es conocida. El almacenamiento sin esquema sirve para datos realmente flexibles cuando existe una razón clara para esa flexibilidad. La app trabaja dentro del espacio privado de la persona salvo que la persona entregue material explícitamente para la tarea.

Los flujos de datos se diseñan alrededor de la propiedad de cada capa. El frontend muestra y solicita cambios. El backend valida y escribe cambios. Las operaciones de agente usan las mismas reglas de datos que la UI para que el asistente trabaje mediante las protecciones de la app en vez de saltárselas.

## Capacidades del agente

Las capacidades del agente permiten que el asistente opere la app mediante acciones definidas. Las capacidades útiles son prácticas, acotadas, basadas en el estado actual de la app y conectadas con trabajo que la persona puede entender.

Las capacidades útiles suelen incluir leer registros actuales, importar material entregado explícitamente, resumir datos guardados, aplicar cambios aprobados, crear salidas que la app entiende y explicar lo que la app puede o no puede hacer.

Los mecanismos internos crudos no son la experiencia normal. El agente puede usar tools, scripts y documentación internamente, mientras la persona recibe el resultado funcional: qué se cargó, qué cambió, qué necesita revisión y qué sigue sin soporte.

## Empaquetado para instalación

El empaquetado convierte la app en un artefacto local instalable. El paquete contiene código de la app, metadata, documentación, skills y archivos de preparación que Forger usa para instalar dependencias, iniciar servicios y abrir la app.

Los paquetes excluyen material inseguro o innecesario, como caches de desarrollo, carpetas de dependencias, entornos virtuales, metadata Git, secretos y rutas que intenten escribir fuera de la app instalada. Los health checks y la metadata de preparación permiten que Forger verifique que la app está lista antes de presentarla como en ejecución.

Después del empaquetado, la prueba importante es funcional: la app se instala limpiamente, inicia sus servicios locales, abre las pantallas esperadas, guarda datos localmente y da al agente solo las capacidades que están realmente implementadas.
