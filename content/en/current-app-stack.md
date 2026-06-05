---
title: "The Current App Stack"
description: "How the current Forger app stack helps teams create local apps with a consistent technical shape."
section: "The Current App Stack"
order: 3
status: "available"
owner: "stacks/vite-fastapi-sqlite-commons"
sources:
  - "stacks/vite-fastapi-sqlite-commons/AGENTS.md"
  - "skeletons/vite-fastapi-sqlite/AGENTS.md"
  - "skeletons/vite-fastapi-sqlite/manifest.json"
---

## The Current App Stack

The current Forger app stack combines a Python backend, FastAPI, SQLite, Vite, React, Tailwind CSS, shadcn/ui components, Radix primitives, Node frontend tooling, and Python tooling with `uv`.

This stack gives local apps a predictable technical shape. Apps can still be customized for a specific person or workflow, but the foundation stays familiar across projects.

## Why Forger Uses a Stack

Forger uses a stack as a convention, not as a limitation. The convention accelerates app creation because the core choices are already made: how the backend runs, how data is stored, how the interface is built, how services start, and how the app is packaged.

The same convention also helps AI work with the app. When files, services, data access, and user interface patterns follow a known shape, the agent can understand the code faster, explain behavior more accurately, and make targeted changes without relearning the app structure from scratch.

## Backend

The backend is a Python service built with FastAPI. It owns application routes, validation, domain behavior, local data access, background work, and the MCPs that let the agent interact with app capabilities in a controlled way.

FastAPI keeps the backend explicit and easy to inspect. Routes describe the app's public behavior, services hold the app's domain logic, and MCPs expose higher-level operations that the agent can use without treating implementation details as the user experience.

## Local Database

SQLite is the default local database because it is lightweight, reliable, and well suited to apps that run on a person's own machine. It avoids unnecessary infrastructure while still supporting durable local data, relational queries, and straightforward backups.

App data uses clear tables and typed columns when the shape of the data is known. Flexible storage is reserved for data that is genuinely variable and benefits from that flexibility.

## Frontend

The frontend is a Vite and React app. React provides the application structure, while shadcn/ui components and Radix primitives provide accessible, composable interface building blocks. Tailwind CSS handles styling close to the component layer.

This combination supports polished local tools without requiring every app to invent its own interaction patterns. Forms, dialogs, tables, menus, and navigation can stay consistent while still matching the needs of the specific app.

## App Services

A Forger app can run multiple local services when the app needs them. The usual shape includes the backend service, the frontend development or packaged web service, MCP servers for agent interaction, and background workers for longer tasks.

Services keep responsibilities separated. The interface stays focused on the user experience, the backend owns application behavior, MCPs give the agent controlled entry points, and background work can run without blocking the screen.

## Realtime Updates

The stack supports realtime interaction through WebSockets. Realtime updates are useful when an app needs to show progress, stream task status, refresh data after background work, or keep the interface aligned with agent-driven changes.

HTTP remains the normal path for standard requests. WebSockets are used when the user experience benefits from live updates instead of repeated manual refreshes.

## Development and Packaging

The stack gives app development a repeatable path from creation to installation. Developers can build the backend, frontend, local services, MCPs, and data model with shared expectations instead of choosing every piece from zero.

Packaging turns the app into an installable local application for Forger. The packaged app includes the code, service definitions, dependencies, and metadata needed for Forger to prepare and run it in the user's private local app space.
