---
title: "Agents and AI Tasks"
description: "Forger chat, app chat, one-shot tasks, app agents, permissions, progress, and Coding CLI providers."
section: "Agents and AI Tasks"
order: 6
status: "beta"
owner: "desktop"
sources:
  - "desktop/AGENTS.md"
  - "desktop/src/main/prompt-builder/prompts/skills/forger/forger-desktop-runtime-bridge.md"
  - "desktop/src/main/prompt-builder/prompts/skills/forger/forger-agents.md"
---

## Agents and AI Tasks

Forger uses agents in two ways: open-ended chat and manifest-packaged work. Chat is conversational and can adapt as the person asks follow-up questions. Packaged work is declared by an app manifest and gives Forger a named prompt, expected inputs, runtime context, provider settings, and tool access for a specific job.

When a packaged task or app agent runs, Desktop invokes a configured Coding CLI such as Codex or Claude from the installed app context. Forger prepares the prompt with app documentation, manifest metadata, the current runtime state, selected user input, environment variables for that run, and the app MCP tools that the agent can use to inspect or change app-owned data.

## Chat with Forger

Chat with Forger is the platform-level assistant. It can answer product questions, explain installed apps, help create or modify apps, review available capabilities, and coordinate work that spans the Desktop experience.

This chat is grounded in current platform state. When an answer depends on an installed app, provider configuration, local permissions, or catalog metadata, Forger uses those facts instead of treating them as guesses.

## Chat with an App

Chat with an app is scoped to one installed app. The agent works from the app's documentation, manifest, visible capabilities, available MCP tools, and runtime state when explaining what the app can do.

The normal result is functional: what the app can load, review, create, update, or explain. Internal details such as prompt files, tool names, service URLs, and local paths stay in the background unless the person asks for them.

## One-Shot Tasks

One-shot tasks are manifest-packaged prompts for bounded jobs with declared inputs and clear completion criteria. They fit work such as importing a shared file, extracting structured records, producing a review, generating a report, or applying a focused app change.

The app manifest declares the task label, prompt, input fields, provider configuration, and allowed tools. Desktop supplies the run context and environment variables, then invokes the Coding CLI. When the app exposes MCP data tools, reads and writes can go through the app's own validation rules instead of bypassing the app model.

## App Agents

App agents are manifest-packaged coworkers for ongoing work inside an installed app. They use a named prompt and app context like one-shot tasks, but they keep a conversation thread so the person can ask follow-up questions, refine the plan, or continue a longer workflow.

An app agent works inside the selected app's scope. It can use app MCP tools, approved provider tools, shared user inputs, and runtime context to work with app data. Material outside the app's private local area enters the task only when the person explicitly provides it.

## Continuing Work

Forger tracks run and thread state so work can continue after an initial response. The person can return to an app agent conversation, add instructions, ask for a revision, or cancel a task that is still running.

Continuing work preserves context without hiding important changes. The person can see what changed, what remains pending, and what needs confirmation before destructive or hard-to-reverse changes continue.

## Permissions

Permissions connect a packaged prompt to the tools it can use. A manifest can request app MCP access, official Forger tools, provider capabilities, and shared input handling. The request is tied to the visible job the task or agent is trying to complete.

Permission prompts explain the user-visible reason for access. Secrets, raw environment values, provider tokens, and internal command lines stay out of the permission copy. If access is denied or unavailable, Forger explains what part of the task cannot continue.

## Progress and Failures

Progress states are simple and actionable: queued, running, waiting for permission, completed, failed, or canceled. Longer tasks can show useful intermediate status when the Coding CLI or app backend reports meaningful progress.

Failures identify the functional cause when possible, such as missing input, provider authentication, permission denial, app runtime failure, MCP validation failure, unsupported data, or a canceled run. Diagnostic detail can support recovery, while the visible message tells the person what happened and what can be retried or changed.

## Codex and Claude

Codex and Claude are provider runtimes that Forger can invoke through their Coding CLIs when configured on the person's machine. The selected provider, model, effort level, local authentication, and permission mode affect which tasks and app agents can run.

Forger treats providers as execution engines, not as the source of app truth. The prompt receives current context from Desktop and the installed app, while app MCP tools provide structured access to app-owned data through app-defined operations.
