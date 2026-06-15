---
title: "Arquitectura"
description: "El mapa del sistema Forger, límites de confianza, flujo de datos y ownership por capa."
section: "Arquitectura"
order: 2
status: "experimental"
owner: "forger-docs"
sources:
  - "AGENTS.md"
  - "desktop/AGENTS.md"
  - "backend/AGENTS.md"
---

## Arquitectura

Forger es un ecosistema para software local y personal. Forger Desktop se ejecuta en el computador de la persona, Forger Cloud amplía la experiencia local, las apps curadas entregan funcionalidad instalable y el repo público permite revisar los contratos de plataforma y la superficie para construir apps. El código del servicio Cloud es la excepción privada; el resto del ecosistema está diseñado para ser público, revisable y basado en código real de apps.

## Ecosistema

Forger Desktop es la superficie de control para instalar, abrir, actualizar y adaptar apps. Forger Cloud aporta identidad de cuenta, registros de catálogo, metadata de publicación, superficies sociales y de reviews, sincronización, respaldos y puntos de entrada de acceso remoto. Las apps curadas son codebases locales reales empaquetadas para Desktop. El repo público documenta cómo se estructuran las apps, cómo los agentes interactúan con ellas y cómo la base de app se copia y se transforma en un producto concreto.

## El modelo de app local

Una app instalada de Forger es código que corre localmente para una persona. Controla su interfaz, backend local, modelo de datos, base de datos, manifest, skills empaquetadas y procedimientos para agentes. La base de app actual usa backend Python/FastAPI, SQLite, Vite + React, tooling frontend de Node y `uv` para tooling Python.

Desktop prepara un runtime empaquetado de Python y Node para que las apps instaladas puedan correr sin pedirle a la persona que arme un entorno de desarrollo. Cuando una persona pide crear o adaptar una app, el acceso de Coding CLI a MCP puede copiar la base de app en la carpeta de la app, registrarla con Desktop y luego trabajar sobre el código y el modelo de datos.

## Cómo Desktop coordina apps

Desktop lee el catálogo, descarga un paquete de app, prepara dependencias, inicia los servicios declarados, abre la interfaz de la app y expone contexto de la app al agente. También rastrea la versión instalada, media capacidades de plataforma y mantiene visible el ciclo de vida de la app para la persona.

Desktop es el límite entre los controles de plataforma y el comportamiento de la app. Puede coordinar una app, pero la app sigue siendo responsable de su lógica de dominio, interfaz de usuario, API local, esquema de base de datos y cualquier validación específica.

## Cómo Cloud amplía la experiencia local

Cloud agrega servicios compartidos de plataforma sin convertir las apps locales en productos SaaS remotos. Guarda identidad de cuenta, metadata de catálogo y versiones, registros de publicación, reviews, superficies sociales, mensajes cloud, registros de respaldo y sincronización, y coordinación de acceso remoto.

Cloud no controla el proceso local vivo de la app ni la base de datos local durante el uso normal. La persona abre y usa la app mediante Desktop, y Cloud participa solo cuando la función requiere un servicio online.

## Cómo trabajan los agentes dentro de las apps

Los agentes operan desde el estado real de la app seleccionada. Desktop y la app entregan documentación, detalles del manifest, skills, tools, memoria, estado runtime y datos de la app que la tarea puede usar. El agente puede explicar la app, cargar material que la persona comparte, inspeccionar capacidades soportadas, transformar datos a formatos de la app y proponer o aplicar cambios de código.

Las tools de agentes son mecanismos internos de operación, no la experiencia normal de la persona. La persona ve el resultado funcional: qué se cargó, qué cambió, qué necesita confirmación y qué sigue sin estar soportado.

## Flujo de datos y límites de confianza

Forger mantiene explícitos los límites de confianza. Desktop habla con el runtime de la app, el backend de la app habla con su base de datos local, Desktop habla con Cloud para funciones online de plataforma y los agentes hablan con proveedores configurados cuando una tarea usa ejecución externa de modelos.

Cada límite tiene un dueño claro. Desktop controla instalación, ciclo de vida de apps, permisos de plataforma y configuración de proveedores. Las apps controlan validación de dominio y persistencia local. Cloud controla identidad online, catálogo, publicación, compartir, sincronización, respaldos y coordinación remota. Los agentes operan mediante los archivos, servicios y capacidades que la app o Desktop pone disponibles para la tarea.

## Dónde viven los datos del usuario

Los datos de una app parten en el computador de la persona, dentro de la carpeta privada de la app instalada. La app puede guardar registros estructurados en SQLite, mantener archivos propios junto a la app y recibir archivos solo cuando la persona los comparte explícitamente.

Cloud guarda datos de usuario solo para funciones online de plataforma como identidad de cuenta, metadata de publicación de apps, reviews, compartir en superficies sociales, mensajes, respaldos, sincronización y coordinación de acceso remoto. Los runtimes de proveedores reciben contexto de tarea solo cuando la persona usa un agente respaldado por ese proveedor, y el uso del proveedor puede consumir la cuota propia de la persona.
