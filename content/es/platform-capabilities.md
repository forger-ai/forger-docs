---
title: "Capacidades de plataforma"
description: "Memoria, archivos, secretos, automatizaciones, respaldos, sync, social, compartir, acceso remoto y diagnóstico."
section: "Capacidades de plataforma"
order: 8
status: "experimental"
owner: "desktop"
sources:
  - "desktop/AGENTS.md"
  - "desktop/src/main/prompt-builder/prompts/skills/forger/forger-memory.md"
  - "desktop/src/main/prompt-builder/prompts/skills/forger/forger-remote-tunnel-wiring.md"
---

## Capacidades de plataforma

Las capacidades de plataforma son servicios de Forger que funcionan junto a las apps instaladas. Ayudan a la persona a recordar preferencias, entregar archivos, conectar secretos, programar trabajo, preservar datos, continuar entre dispositivos, compartir apps, acceder a sesiones locales desde otros dispositivos y reportar problemas con contexto útil.

Forger mantiene el modelo de app local como punto de partida. Una app instalada corre en el espacio privado de la persona y controla su propia interfaz, modelo de datos y estado local. Las capacidades de plataforma extienden esa experiencia cuando la persona las habilita, cuando la app soporta el workflow relevante y cuando Desktop o Cloud pueden entregar la capacidad de forma segura.

Las capacidades de plataforma son coordinadas por Forger en vez de ser inventadas por cada app en tiempo de ejecución. Una capacidad puede existir en la plataforma sin que cada app instalada tenga una función visible para usarla. Forger mantiene esa diferencia visible al explicar qué soporta una app, qué no está disponible y qué todavía necesita configuración o permiso.

## Memoria

La memoria permite que Forger recuerde preferencias durables, detalles estables de perfil, elecciones recurrentes de workflow, restricciones y hechos útiles que mejoran el trabajo futuro. Una persona puede pedirle a Forger que recuerde algo, actualice lo que recuerda, use una preferencia recordada o la olvide.

La memoria puede guiar el chat con Forger, los agentes de una app y las automatizaciones cuando es relevante. Sirve para dar continuidad, pero no prueba el estado actual de una app, archivos actuales, mensajes actuales ni intención actual. El estado vigente sigue viniendo de la app, archivos, mensajes o permisos involucrados en la tarea activa.

La memoria es una capacidad de plataforma, no una función del manifest de una app ni un almacén normal de secretos. Su límite práctico es la privacidad: no guarda secretos, credenciales, llaves privadas, documentos sensibles completos, inferencias personales delicadas ni instrucciones de una sola vez que solo importan en la conversación actual.

## Archivos

Los archivos son entradas explícitas. Una persona puede compartir un archivo con Forger, cargarlo mediante un flujo de una app o usar una superficie de archivos que la app entregue. Las apps y agentes pueden revisar, transformar, importar, resumir o adjuntar ese archivo cuando la tarea solicitada lo soporta.

Una app instalada no gana acceso amplio a archivos solo porque corre localmente. Un archivo compartido entrega acceso a ese material para el trabajo solicitado; no entrega acceso a carpetas o documentos no relacionados.

El manejo de archivos depende de los formatos soportados por la app, sus reglas de validación y sus herramientas de agente disponibles. Si un archivo no se puede leer de forma segura, no se puede convertir al modelo de datos de la app o requiere un cambio destructivo, Forger explica el paso bloqueado y pide confirmación o una entrada más segura.

## Secretos

Los secretos permiten conectar configuración privada, como credenciales, tokens, claves de API o ajustes de proveedor, a una app instalada. La app puede declarar qué secretos necesita, y Forger guarda los valores reales separados del código y de la documentación de la app.

Los valores secretos quedan fuera de manifests, prompts, memoria, logs, archivos generados, capturas, tests y mensajes finales. Cuando un secreto se necesita en runtime, Forger lo inyecta por el camino seguro aprobado para esa app.

Un secreto ausente, vencido, denegado o revocado puede bloquear el workflow relacionado. Forger describe la configuración faltante en términos visibles para la persona y evita exponer nombres internos de variables salvo que se pida detalle técnico.

## Automatizaciones

Las automatizaciones permiten configurar trabajo programado o recurrente con agentes, como revisiones, resúmenes, mantenimiento, recordatorios y seguimientos. Pueden trabajar con apps seleccionadas, herramientas aprobadas, memoria relevante y secretos de app cuando los permisos del runtime lo permiten.

El resultado de una automatización es útil incluso cuando no cambia nada: explica qué se revisó, qué ocurrió y qué necesita atención. Las automatizaciones usan el contexto y el acceso concedidos para su propósito configurado.

Las automatizaciones dependen de la disponibilidad del proveedor, la salud del runtime de la app, el estado de la cuenta, los permisos y los secretos conectados. El contenido privado y los valores secretos quedan fuera de las instrucciones de automatización, y los cambios destructivos siguen el modelo de confirmación que requiere la app o la plataforma.

## Respaldos

Los respaldos protegen datos de apps para que la persona pueda recuperarse de actualizaciones, migraciones fallidas, errores locales o problemas del dispositivo. Desktop puede crear respaldos locales durante operaciones sensibles de una app, y los respaldos con Cloud pueden participar cuando la función con cuenta está disponible y permitida.

Forger preserva un estado recuperable antes de trabajos riesgosos de actualización o migración, y luego explica las opciones de recuperación en términos de producto, como reintentar, restaurar, mantener la versión actual, partir limpio o revisar conflictos.

Un respaldo no es lo mismo que una sincronización exitosa, una versión publicada de la app ni una copia completa de cada archivo externo que la persona haya compartido. Restaurar, borrar, sobrescribir o partir limpio son acciones suficientemente destructivas para requerir confirmación clara.

## Sincronización

La sincronización es una capacidad con cuenta para dar continuidad entre dispositivos conectados y superficies compatibles con Cloud. Ayuda a que estado seleccionado de apps o de la plataforma esté disponible más allá de una instalación de Desktop cuando la función está soportada, habilitada y conectada.

La sincronización complementa el ownership local en vez de reemplazarlo. La app local sigue siendo el lugar donde la persona abre la app, trabaja con sus datos y usa su interfaz.

La sincronización no sube de forma general todos los archivos locales, bases de datos de apps, secretos o conversaciones con agentes. Depende de la superficie específica que se sincroniza, el estado de la cuenta, la conectividad, el manejo de conflictos y el soporte de la app. Cuando la sincronización no está disponible o queda incompleta, Forger explica qué permanece local.

## Social

Las funciones sociales permiten que las personas participen en el ecosistema compartido de apps de Forger. Según la superficie disponible, una persona puede usar perfiles, reviews, compartir apps, amistades, mensajes cloud y flujos visibles de descubrimiento o feedback de apps.

Las acciones sociales respetan reglas de visibilidad, versión, acceso y revisión. Compartir o publicar una app explica qué pueden ver o instalar otras personas, y la revisión de una app ayuda a detectar riesgos comunes sin prometer seguridad absoluta.

Las funciones sociales no convierten una app local en un SaaS remoto. Las apps compartidas siguen necesitando empaquetado compatible, metadata soportada, revisión segura de instalación y controles de acceso apropiados. Los datos privados de una app no se vuelven públicos solo porque la app tenga metadata social.

## Compartir localmente

Compartir localmente permite que una persona acceda a una app en ejecución desde otro dispositivo en la misma red local cuando Desktop entrega esa opción. Sirve para revisar una app desde un teléfono, tablet u otro computador sin publicarla en internet.

Desktop controla el ciclo de vida de compartir localmente. La persona puede entender cuándo el acceso compartido está activo, detenerlo y mantener intacto el comportamiento local normal de la app.

Compartir localmente depende de la red actual, la disponibilidad del dispositivo, la salud del runtime de la app y las rutas soportadas por la app. Las apps usan el flujo de Desktop para compartir en vez de pedirle a la persona abrir puertos, correr un servidor público propio o tratar el acceso de red local como una garantía permanente de disponibilidad.

## Acceso remoto

El acceso remoto permite que una persona alcance sesiones locales seleccionadas de una app por internet mediante flujos controlados por Desktop y Cloud. Extiende una sesión local activa para casos aprobados sin volver pública la app de forma independiente.

Desktop controla el ciclo de vida y el límite de seguridad del acceso remoto. Las apps mantienen funcionando las solicitudes locales normales y usan el comportamiento compartido de sesión remota cuando Desktop crea una. Rutas de asistente, herramientas internas, scripts o automatizaciones permanecen separadas salvo que exista una razón de producto revisada para exponerlas.

El acceso remoto depende de que Desktop esté disponible, la cuenta y la sesión sean válidas, la app esté sana y la ruta remota soporte la operación solicitada. Las apps usan la ruta remota de la plataforma en vez de crear túneles independientes, iniciar servicios públicos propios o tratar al proveedor del túnel como el límite de privacidad.

## Diagnóstico

El diagnóstico ayuda a la persona y al soporte a entender qué salió mal. Un reporte puede incluir logs sanitizados, contexto de runtime, resúmenes de estado de la app, capturas o adjuntos cuando son útiles y apropiados para el problema.

El diagnóstico explica el problema funcional: qué falló, qué se intentaba hacer, qué impacto tuvo y qué se puede reintentar o cambiar. Los reportes mantienen secretos, tokens, llaves privadas, rutas innecesarias y contenido privado no relacionado fuera de los mensajes visibles y de los artefactos enviados.

El diagnóstico no corrige automáticamente un problema ni justifica exponer datos sensibles. Si se necesita una inspección más profunda, limpieza en producción, eliminación de datos o recuperación irreversible, Forger pide confirmación explícita y mantiene informada a la persona sobre el impacto funcional.
