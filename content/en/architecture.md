---
title: "Architecture"
description: "The Forger system map, trust boundaries, data flow, and ownership layers."
section: "Architecture"
order: 2
status: "beta"
owner: "forger-docs"
sources:
  - "AGENTS.md"
  - "desktop/AGENTS.md"
  - "backend/AGENTS.md"
---

## Architecture

Forger is an ecosystem for local, personal software. Forger Desktop runs on the person's computer, Forger Cloud extends the local experience, curated apps provide installable functionality, and the public repository makes the platform contracts and app-building surface inspectable. The Cloud service code is the private exception; the rest of the ecosystem is designed to be public, reviewable, and grounded in real app code.

## Ecosystem

Forger Desktop is the control surface for installing, opening, updating, and adapting apps. Forger Cloud provides account identity, catalog records, publishing metadata, social and review surfaces, sync, backups, and remote access entrypoints. Curated apps are real local codebases packaged for Desktop. The public repo documents how apps are structured, how agents interact with them, and how the app base is copied and shaped into a concrete product.

## The Local App Model

An installed Forger app is code running locally for one person. It owns its interface, local backend, data model, database, manifest, packaged skills, and agent-facing procedures. The current app base uses a Python/FastAPI backend, SQLite, Vite + React, Node frontend tooling, and `uv` for Python tooling.

Desktop prepares a packaged Python and Node runtime so installed apps can run without asking the person to assemble a development environment. When a person asks to create or adapt an app, Coding CLI access to MCP can copy the app base into the app folder, register it with Desktop, and then work on the app code and data model.

## How Desktop Coordinates Apps

Desktop reads the catalog, downloads an app package, prepares dependencies, starts declared services, opens the app interface, and exposes app context to the agent. It also tracks the installed version, mediates platform capabilities, and keeps the app lifecycle visible to the person.

Desktop is the boundary between platform-level controls and app-level behavior. It can coordinate an app, but the app remains responsible for its domain logic, user interface, local API, database schema, and any app-specific validation.

## How Cloud Extends the Local Experience

Cloud adds shared platform services without turning local apps into remote SaaS products. It stores account identity, catalog and version metadata, publish records, reviews, social surfaces, cloud messages, backup and sync records, and remote access coordination.

Cloud does not own the live local app process or the local database during normal app use. The person opens and uses the app through Desktop, and Cloud participates only where the feature requires an online service.

## How Agents Work Inside Apps

Agents operate from the selected app's real state. Desktop and the app provide documentation, manifest details, skills, tools, memory, runtime state, and app data that the task is allowed to use. The agent can explain the app, load material the person shares, inspect supported capabilities, transform data into app formats, and propose or apply code changes.

Agent tools are internal operating mechanisms, not the normal user experience. The person sees the functional result: what was loaded, what changed, what needs confirmation, and what remains unsupported.

## Data Flow and Trust Boundaries

Forger keeps trust boundaries explicit. Desktop talks to the app runtime, the app backend talks to its local database, Desktop talks to Cloud for online platform features, and agents talk to configured providers when a task uses external model execution.

Each boundary has a clear owner. Desktop owns installation, app lifecycle, platform permissions, and provider setup. Apps own domain validation and local persistence. Cloud owns online identity, catalog, publishing, sharing, sync, backup, and remote coordination. Agents operate through the files, services, and capabilities that the app or Desktop makes available for the task.

## Where User Data Lives

App data starts on the person's computer inside the installed app's private app folder. The app may store structured records in SQLite, keep app-owned files beside the app, and receive files only when the person explicitly shares them.

Cloud stores user data only for online platform features such as account identity, app publishing metadata, reviews, social sharing, messages, backups, sync, and remote access coordination. Provider runtimes receive task context only when the person uses an agent backed by that provider, and provider usage can consume the person's own provider quota.
