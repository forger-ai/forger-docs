---
title: "Reference"
description: "Manifest, stack, runtime bridge, capability matrix, glossary, and troubleshooting reference."
section: "Reference"
order: 10
status: "partial"
owner: "workspace"
sources:
  - "desktop/src/main/prompt-builder/prompts/skills/forger/forger-manifest-authoring.md"
  - "stacks/vite-fastapi-sqlite-commons/AGENTS.md"
  - "desktop/src/main/prompt-builder/prompts/skills/forger/forger-desktop-runtime-bridge.md"
---

## Reference

This reference summarizes the technical contracts that make a Forger app installable, operable, and understandable to both people and agents. It focuses on the concepts a technical user needs when building, reviewing, publishing, or troubleshooting an app.

Forger apps are local applications with explicit metadata, declared services, private app data, and optional agent-facing capabilities. The visible product experience stays focused on the app, while the technical contract defines how Desktop installs it, starts it, connects it to agents, and keeps security boundaries clear.

## Manifest

The manifest is the app's install and runtime contract. It describes what the app is, which stack it uses, how it appears in the catalog, which local services it needs, which capabilities it declares, and which agent-facing tools or skills are available.

Current non-deprecated manifest sections include `name`, `version`, `description`, `changelog`, `stack`, `catalog`, `services`, `mcp`, `tools`, `appSecrets`, `promptTemplates`, `agents`, `scripts`, `skills`, `cloudMessaging`, `agentRuntime`, `remoteTunnel`, and `localNetworkShare`.

Manifest values describe behavior that actually exists in the app. A service, capability, secret, skill, or tool is useful in the manifest when the app can use it and the user experience makes sense without exposing internal mechanics.

## App Stack

The current Forger app stack is `vite-fastapi-sqlite`. It combines a Python backend, FastAPI, SQLite, Vite, React, Tailwind CSS, shadcn/ui copied components, Radix primitives, Node frontend tooling, and Python tooling with `uv`.

The stack gives apps a predictable shape: the backend owns application behavior and local data access, the frontend owns the visible interface, SQLite stores app data, MCP tools expose controlled agent operations, and service definitions let Desktop start the app reliably.

Apps can be customized for a specific workflow, but stack-level conventions keep installation, health checks, realtime updates, packaging, and agent operation consistent across apps.

## Runtime Bridge

The runtime bridge is the signed local communication path between an app backend and Desktop-managed agent operations. App frontends call their own backend. The backend uses the bridge when it needs Desktop-owned behavior such as task updates, provider coordination, app lifecycle information, or other platform-managed operations.

The bridge is not a public internet API and does not replace normal app routes. It exists to keep privileged Desktop coordination separate from the visible app interface and from app-specific business logic.

WebSocket bridge paths support live task updates and status streams when an app needs progress visible in the interface. Standard app requests continue to use ordinary HTTP routes.

## Capabilities

Capabilities describe what an app or platform surface can do and which boundary owns the behavior. Useful capability documentation identifies the owner, setup requirements, user-visible surface, security boundary, and current availability.

Common capability areas include local files explicitly shared by the person, app secrets, memory, MCP tools, local network sharing, remote tunnel access, Cloud messaging, backups, diagnostics, and social or sharing features.

Capabilities are easiest to understand as functional outcomes. For example, a person can connect a required account, share a file with an app, open a local-network session, or receive a diagnostic report. Internal tools, scripts, manifests, and endpoints remain implementation details unless the person is working in a technical mode.

## Glossary

- Desktop: the local Forger application that installs apps, starts services, opens interfaces, and coordinates local agent work.
- Cloud: account-backed Forger services for catalog metadata, publishing verification, sharing, storage, backups, remote access, and social features when enabled.
- Installed app: a Forger app prepared inside the person's private local app space and run by Desktop.
- Private app space: the local area where an installed app keeps its code, dependencies, and app data.
- Manifest: the metadata and runtime contract that tells Forger how to install, present, and operate an app.
- App stack: the technical foundation used to build an app, including backend, frontend, data store, tooling, and service conventions.
- MCP tool: an app-provided operation that gives an agent controlled access to app behavior.
- App secret: a required credential or token declared by the app and stored through secure mechanisms, never as a plain manifest value.
- Memory: a Forger platform capability for durable preferences, constraints, and useful facts that can guide future work.
- Local network share: a Desktop-managed way to expose a running app to devices on the same local network while sharing remains active.
- Remote tunnel: a Desktop and Cloud-controlled way to make a selected app session reachable over the internet when enabled.

## Troubleshooting

Start troubleshooting from the visible symptom, then identify the owning layer.

If the app does not install, check manifest metadata, package availability, supported platform, checksum information, and dependency preparation.

If the app installs but does not open, check service startup, health checks, backend routes, frontend build output, and local port availability.

If agent actions fail, check provider setup, declared MCP tools, app documentation, runtime bridge availability, and whether the requested operation is actually supported by the app.

If a capability appears missing, check whether it is declared in the manifest, enabled for the account or app, visible in the interface, and supported by the current app version.

When data access is unclear, external files remain unavailable until the person explicitly shares them. App data stays inside the private app space unless the app has a clear, user-approved flow for importing, exporting, sharing, or syncing it.
