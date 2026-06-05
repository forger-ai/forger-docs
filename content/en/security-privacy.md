---
title: "Security and Privacy"
description: "How Forger protects local data with app isolation, explicit file access, memory safeguards, permission boundaries, remote access controls, and AI provider limits."
section: "Security and Privacy"
order: 9
status: "beta"
owner: "workspace"
sources:
  - "AGENTS.md"
  - "desktop/AGENTS.md"
  - "desktop/src/main/prompt-builder/prompts/skills/forger/forger-permissions.md"
---

## Security and Privacy

Forger treats security and privacy as product boundaries, not optional settings. Apps run locally, data access is scoped to the person's local app data, and Forger keeps access understandable before it is used.

The core rule is simple: an installed app works with its own data unless the person explicitly shares something else. Forger prioritizes isolation, clear permissions, and narrow data movement over broad convenience.

## Local Data Boundary

Installed apps run inside the person's private local app space. App data, generated files, local databases, and runtime state belong to that local app area unless the person exports or shares them through a Forger surface.

Forger treats the current app state as the source of truth for app work. Other projects, folders, backups, downloads, cloud drives, and unrelated apps stay outside the task unless the person explicitly brings that material into the flow.

## Explicit File Access

Apps and agents may use files that the person explicitly provides, imports, connects, or stores inside the relevant Forger app. That explicit action defines the boundary for the task.

Forger does not silently expand from one shared file into unrelated filesystem locations or keep using a file for a different purpose without a clear reason. When access is missing, the person sees what cannot be reviewed or changed in functional terms.

## App Isolation

Each installed app is real code running locally for one person. The app reads and writes its own local app data and the files the person gives it for the requested task.

Hidden global state, shared private folders, and cross-app access are outside the normal app model. When an app needs another service, account, or permission, that requirement is visible and scoped to the app's declared capability.

Desktop security remains part of this isolation model. Privileged desktop capabilities belong behind controlled bridges, with renderer access limited to the APIs the platform intentionally exposes.

## Secrets

Secrets include API keys, tokens, passwords, private keys, credentials, and signing material. Forger keeps them out of prompts, memory, generated documentation, screenshots, logs, fixtures, manifests, and final user messages.

An app may declare that it needs a credential, but the declaration contains the purpose, not the value. When a credential is required, the user experience explains why and keeps the secret in the appropriate secure storage path for the platform.

## Memory Safety

Forger memory stores durable preferences and useful facts so the product can stay personal across conversations. Memory is supporting context; it does not replace current files, current app state, or user confirmation.

Memory is not a place for secrets, credentials, private keys, raw sensitive documents, medical or legal inferences, or delicate personal inferences. If the person asks Forger to remember something sensitive, Forger can help convert it into a safer preference-level memory or explain why that information does not belong in memory.

## Tool Permissions

Tools are operational capabilities. They are tied to declared actions, visible reasons, the person's request, and the app's current capability.

Internal tools, scripts, endpoints, manifests, and paths are not the normal user experience. If a tool cannot act because access is unavailable, data is missing, input is invalid, an item already exists, or the action is unsupported, Forger explains that limit plainly instead of inventing capabilities.

## Remote Access

Remote access is controlled by Forger Desktop and Forger Cloud flows. Apps use that platform path instead of independently exposing public servers, asking the person to open ports, or creating their own remote access security model.

Remote features preserve the same local data boundary: only the data needed for the requested remote session or cloud-backed action moves through the platform. If remote access is not enabled or not supported for a task, Forger explains the limitation without asking the person to bypass platform controls.

## AI Provider Data

When Forger uses Codex, Claude, or another AI provider, the provider may receive the prompts, code, files, tool results, or app data needed to complete the requested task. The exact handling depends on the connected account, provider configuration, and provider terms.

Provider-bound context stays narrow. Forger sends the information needed for the task, avoids including secrets or unrelated files, and distinguishes current app data from assumptions or memory.
