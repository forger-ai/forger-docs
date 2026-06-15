---
title: "Instalación y funcionamiento de apps"
description: "Cómo Forger ayuda a instalar, abrir, actualizar y recuperar apps locales."
section: "Instalación y funcionamiento de apps"
order: 5
status: "experimental"
owner: "desktop"
sources:
  - "AGENTS.md"
  - "desktop/AGENTS.md"
  - "desktop/src/main/installed-apps/lifecycle.ts"
---

## Instalación y funcionamiento de apps

Forger instala apps desde Desktop y las prepara para ejecutarse en el computador de la persona. La experiencia normal es elegir una app, dejar que Forger la configure, abrirla desde la biblioteca de apps y usarla con datos locales que la persona crea o comparte explícitamente.

La persona no administra archivos de instalación, inicia servidores, revisa configuración técnica ni necesita saber dónde vive la app en el disco durante el uso normal. Forger presenta la instalación, los controles de ejecución, el estado visible, los avisos de actualización y las opciones de recuperación como acciones del producto.

## Catálogo

El catálogo es el lugar donde una persona descubre apps que puede instalar. Describe la app en términos de producto: qué hace, para quién sirve, si está disponible para el dispositivo actual, qué versión se ofrece y si la app ya está instalada o tiene una actualización disponible.

Las entradas del catálogo separan capacidades visibles de detalles de preparación. Si una app necesita una cuenta, conexión con un proveedor, permiso local o preparación extra antes de ser útil, Forger explica ese requisito sin convertirlo en una lista técnica.

## Instalar una app

Instalar una app empieza desde una acción de Desktop como instalar u obtener. Forger recupera la app publicada, verifica que sea segura para instalar, la ubica en el espacio privado de apps de la persona y registra que pertenece a esa instalación local de Forger.

Durante la instalación, el flujo visible muestra progreso y explica fallas con lenguaje claro. Una instalación exitosa termina con la app disponible para abrir. Una instalación fallida deja a la persona con un siguiente paso claro, como reintentar, revisar un requisito o contactar soporte con los detalles de diagnóstico que Forger puede entregar.

## Preparar dependencias

Algunas apps necesitan piezas locales de ejecución antes de poder abrirse. Forger prepara esas dependencias como parte de la configuración y presenta ese trabajo como preparación de la app, no como una tarea manual de desarrollo.

Si la preparación no puede terminar porque algo falta, está bloqueado o es incompatible, el mensaje explica qué puede hacer la persona después. La persona ve el requisito funcional, como conectar un proveedor o permitir un permiso, en vez de nombres internos de paquetes o comandos de configuración.

## Abrir y ejecutar apps

Abrir una app inicia los servicios locales que necesita y muestra la interfaz de la app en Desktop. La persona usa controles normales para abrir, volver a abrir, detener o regresar a la app; no se espera que inicie el runtime manualmente.

Una app instalada trabaja con sus propios datos locales y con archivos o información que la persona entrega explícitamente. Estar instalada localmente no le da acceso amplio a archivos no relacionados del computador.

## Salud de ejecución

La salud de ejecución describe si una app instalada puede abrirse, responder y mantener disponibles sus servicios locales. Los estados visibles usan términos claros como abriendo, ejecutándose, detenida, necesita configuración, no disponible o en conflicto.

Cuando la salud se degrada, Forger explica el impacto y la acción segura siguiente. Los logs detallados y diagnósticos internos son útiles para soporte y agentes, pero el mensaje principal le dice a la persona qué está pasando y qué opción tiene.

## Cambios locales

Los cambios locales son parte de la experiencia de una app instalada. Una persona puede agregar datos, ajustar preferencias, pedirle a un agente que adapte la app o guardar trabajo que solo existe en su instalación local.

Forger trata esos cambios como estado importante de la persona. Cuando los cambios afectan actualizaciones o recuperación, la persona ve versiones guardadas, opciones de previsualización o deshacer cuando existen, y una explicación clara de qué se preserva o reemplaza antes de que ocurra algo destructivo.

## Actualizaciones y recuperación

Cuando hay una versión publicada más nueva, Desktop puede mostrar un aviso de actualización. La experiencia de actualización protege los datos locales, preserva cambios locales compatibles y explica cualquier cosa que no pueda combinarse automáticamente.

Si una actualización falla o genera un conflicto, Forger mantiene la app en un estado recuperable. Las opciones de recuperación aparecen como acciones de producto, como reintentar, restaurar, conservar la versión local o revisar el conflicto. El trabajo local y los datos quedan protegidos por confirmación explícita antes de acciones destructivas de recuperación.
