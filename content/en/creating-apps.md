---
title: "Creating Apps"
description: "How an idea becomes a usable local Forger app with UI, data, services, and agent capabilities."
section: "Creating Apps"
order: 4
status: "experimental"
owner: "skeletons/vite-fastapi-sqlite"
sources:
  - "AGENTS.md"
  - "skeletons/vite-fastapi-sqlite/AGENTS.md"
  - "desktop/src/main/prompt-builder/prompts/skills/forger/forger-manifest-authoring.md"
---

## Creating Apps

A Forger app is a usable local product, not only a prompt or a chat instruction. It combines screens, local data, services, installation metadata, and agent capabilities so a person can open the app, use its workflows, and ask the agent to operate the app with the same real state.

The app makes the person's goal visible and repeatable. If the idea is "help me review invoices," the app gives the person places to load invoices, inspect extracted fields, resolve exceptions, save decisions, and ask the agent to review or update the same records.

## From Idea to App

Start with the job the person wants to complete. Define the primary objects the app manages, the decisions the person makes, the screens they need, and the agent actions that help without hiding important state.

A strong app idea becomes concrete when it has:

- a clear user goal;
- visible workflows for common tasks;
- local data that stores the app's real state;
- services that run the app reliably;
- agent capabilities that read or change app data through defined operations;
- installation metadata that lets Forger prepare and open the app.

The agent is not the only interface. A good Forger app remains useful when the person wants to inspect, compare, edit, or recover information directly.

## App Structure

The app structure separates visible experience from runtime behavior. The frontend presents screens and workflows. The backend owns validation, domain logic, data writes, background work, and agent-facing operations. Local services keep the frontend and backend available when the person opens the app.

Each part has a clear responsibility:

- screens show what the person can see and do;
- backend routes receive requests and enforce rules;
- domain services perform the app's work;
- the database stores local records and settings;
- agent tools expose safe operations for the assistant;
- documentation explains current capabilities and limits.

The bridge code stays small so the app remains understandable. Code that connects UI, backend, data, and agent operations delegates validation and business behavior to focused modules instead of becoming the place where all logic accumulates.

## Manifest

The manifest describes how Forger installs, prepares, starts, and presents the app. It is installation and runtime metadata, not a replacement for product documentation.

Use the manifest to declare facts Forger needs to know:

- the app name, description, category, and version;
- the runtime stack;
- the services Forger starts;
- health checks that prove services are ready;
- scripts used by the platform during setup or operation;
- skills or agent instructions shipped with the app;
- declared capabilities that match implemented behavior.

The manifest works best when it describes behavior that already exists in the app. If a capability depends on a screen, route, data model, script, or agent operation, that implementation is what makes the capability meaningful to the person.

## Screens and Workflows

Screens expose the real workflows of the app. A person can understand what is loaded, what can be changed, what has been saved, and what still needs attention without reading internal instructions.

Good workflows usually include:

- an entry screen that shows the current state;
- forms or import flows for adding data;
- review screens for comparing and correcting results;
- saved views for returning to prior work;
- clear empty, loading, error, and conflict states;
- confirmation or undo paths for risky changes.

The UI uses the app's visual system consistently. Technical details such as service names, internal scripts, or file paths stay out of normal user copy unless the person explicitly asks for diagnostics.

## App Data

Local data is the app's source of truth. Store domain records, user decisions, settings, and workflow state in explicit structures that the app can validate and recover.

Relational data uses typed tables and columns when the shape is known. Schemaless storage is useful for genuinely flexible data when there is a clear reason for that flexibility. The app works inside the person's private app space unless the person explicitly provides material for the task.

Data flows are designed around ownership. The frontend displays and requests changes. The backend validates and writes changes. Agent operations use the same data rules as the UI so the assistant works through app safeguards instead of bypassing them.

## Agent Capabilities

Agent capabilities let the assistant operate the app through defined actions. Practical capabilities are scoped, grounded in current app state, and connected to work the person can understand.

Useful capabilities usually include reading the app's current records, importing explicitly provided material, summarizing saved data, applying approved changes, creating outputs the app understands, and explaining what the app can or cannot do.

Raw internal mechanics are not the normal experience. The agent can use tools, scripts, and documentation internally, while the person receives the functional result: what was loaded, what changed, what needs review, and what remains unsupported.

## Packaging for Installation

Packaging turns the app into an installable local artifact. The package contains the app code, metadata, documentation, skills, and setup files Forger uses to install dependencies, start services, and open the app.

Packages exclude unsafe or unnecessary material such as development caches, dependency folders, virtual environments, Git metadata, secrets, and paths that try to write outside the installed app. Health checks and setup metadata let Forger verify that the app is ready before presenting it as running.

After packaging, the important proof is functional: the app installs cleanly, starts its local services, opens the expected screens, stores data locally, and gives the agent only the capabilities that are actually implemented.
