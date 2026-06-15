---
title: "Seguridad y privacidad"
description: "Cómo Forger protege los datos locales con aislamiento de apps, acceso explícito a archivos, memoria segura, límites de permisos, controles de acceso remoto y límites de proveedores de IA."
section: "Seguridad y privacidad"
order: 9
status: "experimental"
owner: "workspace"
sources:
  - "AGENTS.md"
  - "desktop/AGENTS.md"
  - "desktop/src/main/prompt-builder/prompts/skills/forger/forger-permissions.md"
---

## Seguridad y privacidad

Forger trata la seguridad y la privacidad como límites del producto, no como ajustes opcionales. Las apps corren localmente, el acceso a datos se limita a los datos locales de la app y Forger mantiene comprensible el acceso antes de usarlo.

La regla central es simple: una app instalada trabaja con sus propios datos salvo que la persona comparta algo más de forma explícita. Forger prioriza aislamiento, permisos claros y movimiento acotado de datos por sobre la conveniencia amplia.

## Límite de datos locales

Las apps instaladas corren dentro del espacio local privado de la app. Los datos de app, archivos generados, bases de datos locales y estado de ejecución pertenecen a esa área local salvo que la persona los exporte o comparta mediante una superficie de Forger.

Forger trata el estado actual de la app como la fuente de verdad para el trabajo dentro de la app. Otros proyectos, carpetas, respaldos, descargas, unidades en la nube y apps no relacionadas quedan fuera de la tarea salvo que la persona traiga explícitamente ese material al flujo.

## Acceso explícito a archivos

Las apps y los agentes pueden usar archivos que la persona entrega, importa, conecta o guarda explícitamente dentro de la app de Forger correspondiente. Esa acción explícita define el límite de la tarea.

Forger no se expande silenciosamente desde un archivo compartido hacia ubicaciones no relacionadas del filesystem ni sigue usando un archivo para otro propósito sin una razón clara. Cuando falta acceso, la persona ve lo que no se puede revisar o cambiar en términos funcionales.

## Aislamiento de apps

Cada app instalada es código real corriendo localmente para una persona. La app lee y escribe sus propios datos locales y los archivos que la persona le entrega para la tarea solicitada.

El estado global oculto, las carpetas privadas compartidas y el acceso entre apps quedan fuera del modelo normal de una app. Cuando una app necesita otro servicio, cuenta o permiso, ese requisito es visible y queda limitado a la capacidad declarada por la app.

La seguridad de Desktop sigue siendo parte de este modelo de aislamiento. Las capacidades privilegiadas de Desktop pertenecen detrás de puentes controlados, con acceso del renderer limitado a las APIs que la plataforma expone de forma intencional.

## Secretos

Los secretos incluyen API keys, tokens, contraseñas, llaves privadas, credenciales y material de firma. Forger los mantiene fuera de prompts, memoria, documentación generada, screenshots, logs, fixtures, manifests y mensajes finales al usuario.

Una app puede declarar que necesita una credencial, pero la declaración contiene el propósito, no el valor. Cuando se requiere una credencial, la experiencia explica para qué sirve y mantiene el secreto en el almacenamiento seguro apropiado para la plataforma.

## Seguridad de memoria

La memoria de Forger guarda preferencias duraderas y datos útiles para que el producto siga siendo personal entre conversaciones. La memoria es contexto de apoyo; no reemplaza los archivos actuales, el estado actual de la app ni la confirmación del usuario.

La memoria no es un lugar para secretos, credenciales, llaves privadas, documentos sensibles crudos, inferencias médicas o legales ni inferencias personales delicadas. Si la persona pide que Forger recuerde algo sensible, Forger puede ayudar a convertirlo en una memoria más segura a nivel de preferencia o explicar por qué esa información no pertenece a la memoria.

## Permisos de herramientas

Las herramientas son capacidades operativas. Están vinculadas a acciones declaradas, razones visibles, la solicitud de la persona y la capacidad actual de la app.

Herramientas internas, scripts, endpoints, manifests y rutas no son la experiencia normal del usuario. Si una herramienta no puede actuar porque falta acceso, faltan datos, el input no es válido, un elemento ya existe o la acción no está soportada, Forger explica ese límite claramente en vez de inventar capacidades.

## Acceso remoto

El acceso remoto se controla mediante flujos de Forger Desktop y Forger Cloud. Las apps usan esa ruta de plataforma en vez de exponer servidores públicos independientes, pedirle a la persona abrir puertos o crear su propio modelo de seguridad para acceso remoto.

Las funciones remotas preservan el mismo límite de datos locales: solo los datos necesarios para la sesión remota o la acción con respaldo cloud solicitada se mueven mediante la plataforma. Si el acceso remoto no está habilitado o no está soportado para una tarea, Forger explica el límite sin pedirle a la persona que evada los controles de la plataforma.

## Datos de proveedores de IA

Cuando Forger usa Codex, Claude u otro proveedor de IA, el proveedor puede recibir prompts, código, archivos, resultados de herramientas o datos de app necesarios para completar la tarea solicitada. El manejo exacto depende de la cuenta conectada, la configuración del proveedor y los términos del proveedor.

El contexto enviado al proveedor se mantiene acotado. Forger envía la información necesaria para la tarea, evita incluir secretos o archivos no relacionados y distingue los datos actuales de la app de supuestos o memoria.
