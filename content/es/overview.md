---
title: "Visión general"
description: "Forger como ecosistema open-core para apps locales, Desktop, Cloud y límites actuales de la beta."
section: "Visión general"
order: 1
status: "beta"
owner: "forger"
sources:
  - "AGENTS.md"
  - "desktop/AGENTS.md"
  - "pages/forger-ai.github.io/src/i18n/es.ts"
---

## Visión general

Forger es un ecosistema open-core para construir harnesses gráficos rápidamente. Una app de Forger le da a una persona una interfaz enfocada en una tarea, dataset, API o automatización. La app se ejecuta en un espacio local privado, trabaja con datos locales controlados por la persona y puede usar agentes para cambiar la app cuando cambian los requisitos.

## Qué es Forger

Forger combina un runtime de escritorio, un formato de app local, contratos de agentes y servicios Cloud. Los desarrolladores pueden usarlo para crear herramientas ágilmente que se adaptan a su flujo de trabajo y crean una capa de datos persistente entre llamadas al LLM. Las personas no técnicas pueden usarlo para crear aplicaciones y herramientas que se adaptan a sus flujos de trabajo: LLMs que trabajan sobre sus datos, guardan contexto útil y reutilizan sus prompts sin pedirles administrar infraestructura de desarrollo.

## El modelo local-first

La experiencia principal de Forger corre en el computador de la persona. Las apps instaladas mantienen su código, dependencias y datos de app dentro de un espacio local privado. Las apps pueden usar material que la persona importa, comparte o crea dentro de la app, y no reciben acceso amplio a archivos externos por defecto.

Una app local igual puede ser un cliente conectado. Puede llamar APIs externas, operar sobre datos locales privados, hacer web scraping cuando el flujo y los permisos lo permiten, y usar las suscripciones LLM de la persona mediante herramientas de codificación como Codex o Claude Code administradas por la aplicación de escritorio de Forger.

## Cloud

Forger Cloud complementa el modelo local con servicios asociados a una cuenta. Soporta descubrimiento social, compartir apps, almacenamiento, respaldos, metadata de catálogo, verificación de publicación y flujos de administración remota cuando esas capacidades están habilitadas.

Cloud coordina lo que necesita moverse entre personas, dispositivos y versiones publicadas de apps. Desktop sigue siendo la infraestructura local que instala apps, inicia servicios, abre interfaces, conecta agentes y mantiene la experiencia usable para desarrolladores y personas no técnicas.

## Qué puede hacer Forger

Forger puede crear y adaptar apps locales, instalar apps curadas, ejecutar servicios de app, conectar proveedores de agentes, trabajar con herramientas específicas de cada app y ayudar a convertir datos o APIs en flujos gráficos. Las apps pueden mostrar pantallas normales, guardar datos locales, llamar servicios de red y entregar documentación legible por agentes para que un asistente pueda explicar, inspeccionar o modificar la app.

Forger también soporta flujos de publicación y de compartir apps cuando una app está lista para moverse más allá del computador de una persona. Las apps compartidas siguen siendo código real, con metadata explícita, capacidades declaradas y versiones instalables.

## Qué sigue en beta

Forger es actualmente software beta. La creación de apps, adaptación de apps, configuración de proveedores, instalación desde catálogo, publicación, funciones sociales, almacenamiento, respaldos y administración remota están disponibles con distintos niveles de completitud según la app, cuenta, proveedor y configuración de plataforma.

En la práctica, esto significa que algunas capacidades aparecen como beta, parciales o dependientes de configuración. Una app puede soportar Cloud, proveedores de IA o integraciones específicas sin que eso signifique que todas las apps tengan la misma cobertura. Forger muestra esas diferencias para que la persona entienda qué puede usar hoy y qué requiere preparación adicional.
