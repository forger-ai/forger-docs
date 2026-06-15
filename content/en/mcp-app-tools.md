---
title: "MCP and App Tools"
description: "How Forger separates app-owned MCP tools, official tools, validation, and visible features."
section: "MCP and App Tools"
order: 7
status: "experimental"
owner: "desktop"
sources:
  - "desktop/src/main/prompt-builder/prompts/skills/global/forger-app-mcp-data-tools.md"
  - "desktop/src/main/prompt-builder/prompts/skills/forger/forger-tools.md"
  - "desktop/src/main/prompt-builder/prompts/skills/forger/forger-manifest-authoring.md"
---

## MCP and App Tools

MCP is the structured interface Forger uses when an agent needs to operate app data or platform capabilities. It gives the agent named operations with declared inputs, outputs, permissions, and validation instead of asking the agent to guess how a screen, database, script, or endpoint works.

Forger treats tools as an agent-facing operating layer. The person experiences the result in product terms: what was found, what changed, what needs permission, and what cannot be done with the current app or access level.

## What Tools Are

Tools are controlled capabilities that an agent can call during a task. They can read records, validate input, create data, update data, start a supported operation, or use a connected service when the app and platform allow it.

A tool is not automatically a user-visible feature. The visible feature is the workflow or outcome the person understands, such as importing messages, reviewing customer notes, updating a plan, or sending an approved reply. The tool is the structured mechanism the agent uses behind that workflow.

## App Data Tools

App data tools belong to the installed app. They reflect the app's real model, validation rules, and domain language so the agent can work with app-owned data without bypassing the backend or writing directly to storage.

When app data tools exist, they are the normal path for agent work. Direct database edits, ad hoc scripts, or undocumented endpoints remain fallback mechanisms for technical work, not the normal path for a supported app workflow.

## Platform Tools

Platform tools are Forger-owned capabilities that sit outside one app's data model. They include integrations, Desktop operations, and other platform services that an app can request when a task needs access beyond local app data.

Platform tools remain separate from app data tools. An app can ask Forger for access to a platform capability, but Desktop owns the permission boundary, availability checks, and safe execution path.

## Gmail and WhatsApp Access

Gmail and WhatsApp access is granted through platform tools, not by giving an app broad account access. A manifest grant identifies the tool, explains the user-visible reason, and requests the actions the app needs for the declared workflow.

This access is used for work the app cannot perform without that integration. If access is unavailable or denied, Forger explains the functional impact, such as not being able to read selected messages, draft a reply, or sync a conversation.

## Tool Permissions

Tool permissions connect a visible app workflow to the specific operations an agent may use. Narrow and explainable permissions make it clear why the app needs access and how that access relates to the current capability.

Permission copy describes what the person gets from the access, not the internal transport. The person does not need to understand MCP server names, manifest fields, endpoints, environment variables, or local paths to decide whether an app can use a tool.

## Safe Data Changes

Tools that change data validate before committing changes and return structured errors the agent can translate into clear guidance. Missing fields, invalid values, duplicate records, unsupported operations, permission denial, and partial failures produce specific user-facing explanations.

Destructive or hard-to-reverse changes use explicit confirmation when the workflow requires it. When preview, apply, and undo flows are available, the person can inspect the impact before the app changes important data.

## Why Tools Are Not UI

Tools are not the app interface. They are how the agent operates approved capabilities while the person uses screens, chat, confirmations, progress states, and results.

Documentation and product copy present the workflow outcome, not tool calls as manual steps. When a person asks what happened, Forger explains the outcome and the safety boundary first, then exposes implementation details only when they are useful for debugging or technical review.
