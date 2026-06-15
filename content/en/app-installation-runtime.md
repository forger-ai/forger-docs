---
title: "App Installation and Runtime"
description: "How Forger helps people install, open, update, and recover local apps."
section: "App Installation and Runtime"
order: 5
status: "experimental"
owner: "desktop"
sources:
  - "AGENTS.md"
  - "desktop/AGENTS.md"
  - "desktop/src/main/installed-apps/lifecycle.ts"
---

## App Installation and Runtime

Forger installs apps from Desktop and prepares them to run on the person's computer. The normal experience is choosing an app, letting Forger set it up, opening it from the app library, and using it with local data the person creates or explicitly shares.

The person does not manage package files, start servers, inspect technical configuration, or know where the app lives on disk during normal use. Forger presents installation, runtime controls, visible status, update prompts, and recovery choices as product actions.

## Catalog

The catalog is the place where a person discovers apps that can be installed. It describes the app in product terms: what it does, who it is for, whether it is available for the current device, what version is offered, and whether the app is already installed or has an update available.

Catalog entries separate visible capabilities from setup details. If an app needs an account, provider connection, local permission, or extra preparation before it can be useful, Forger explains that requirement without turning it into a technical checklist.

## Installing an App

Installing an app starts from a Desktop action such as install or get. Forger retrieves the published app, verifies that it is safe to install, places it in the person's private local app space, and records that it belongs to that local Forger installation.

During installation, the visible flow shows progress and explains failures in plain language. A successful install ends with the app available to open. A failed install leaves the person with a clear next step such as retrying, checking a requirement, or contacting support with the diagnostic details Forger can provide.

## Preparing Dependencies

Some apps need local runtime pieces before they can open. Forger prepares those dependencies as part of setup and presents the work as app preparation, not as a manual developer task.

If preparation cannot finish because something is missing, blocked, or incompatible, the message explains what the person can do next. The person sees the functional requirement, such as connecting a provider or allowing a permission, rather than internal package names or setup commands.

## Opening and Running Apps

Opening an app starts the local services it needs and shows the app interface in Desktop. The person uses normal app controls to open, reopen, stop, or return to the app; they are not expected to start the runtime manually.

An installed app works with its own local data and with files or information the person explicitly provides. Local installation does not give the app broad access to unrelated files on the computer.

## Runtime Health

Runtime health describes whether an installed app can open, respond, and keep its local services available. User-facing states use clear terms such as opening, running, stopped, needs setup, unavailable, or conflict.

When health is degraded, Forger explains the impact and the safest next action. Detailed logs and internal diagnostics are useful for support and agents, but the main message tells the person what is happening and what choice they have.

## Local Changes

Local changes are part of the installed app experience. A person may add data, adjust settings, ask an agent to adapt the app, or save work that only exists in their local installation.

Forger treats those changes as meaningful user state. When changes affect updates or recovery, the person sees saved versions, preview or undo choices when available, and a clear explanation of what will be preserved or replaced before anything destructive happens.

## Updates and Recovery

When a newer published version is available, Desktop can show an update notice. The update experience protects local data, preserves compatible local changes, and explains anything that cannot be merged automatically.

If an update fails or creates a conflict, Forger keeps the app in a recoverable state. Recovery choices appear as product actions such as retry, restore, keep the local version, or review the conflict. Local work and data are protected behind explicit confirmation before destructive recovery actions.
