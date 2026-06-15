---
title: "Platform Capabilities"
description: "Memory, files, secrets, automations, backups, sync, social, sharing, remote access, and diagnostics."
section: "Platform Capabilities"
order: 8
status: "experimental"
owner: "desktop"
sources:
  - "desktop/AGENTS.md"
  - "desktop/src/main/prompt-builder/prompts/skills/forger/forger-memory.md"
  - "desktop/src/main/prompt-builder/prompts/skills/forger/forger-remote-tunnel-wiring.md"
---

## Platform Capabilities

Platform capabilities are Forger services that sit beside installed apps. They help the person remember preferences, provide files, connect secrets, schedule work, preserve data, continue across devices, share apps, reach local sessions from other devices, and report problems with useful context.

Forger keeps the local app model as the default. An installed app runs in the person's private local app space and owns its own interface, data model, and local state. Platform capabilities extend that experience when the person enables them, when the app supports the relevant workflow, and when Desktop or Cloud can provide the capability safely.

Platform capabilities are coordinated by Forger instead of being invented by each app at runtime. A capability can exist in the platform without every installed app exposing a visible feature for it. Forger keeps that distinction visible by explaining what an app supports, what is unavailable, and what still needs setup or permission.

## Memory

Memory lets Forger remember durable preferences, stable profile details, recurring workflow choices, constraints, and useful facts that improve future work. A person can ask Forger to remember something, update what it remembers, use a remembered preference, or forget it.

Memory can guide Forger chat, app agents, and automations when it is relevant. It supports continuity, but it is not proof of current app state, current files, current messages, or current intent. Current state still comes from the app, files, messages, or permissions involved in the active task.

Memory is a platform capability, not an app manifest feature or a normal app secret store. Its practical boundary is privacy: it does not hold secrets, credentials, private keys, raw sensitive documents, delicate personal inferences, or one-time instructions that only matter in the current conversation.

## Files

Files are explicit inputs. A person can share a file with Forger, upload it through an app flow, or use a file surface that an app provides. Apps and agents can then review, transform, import, summarize, or attach that file when the requested task supports it.

An installed app does not gain broad file access just because it runs locally. A shared file grants access to that material for the requested work; it does not grant access to unrelated folders or documents.

File handling depends on the app's supported formats, validation rules, and available agent tools. If a file cannot be read safely, cannot be converted into the app's data model, or would require a destructive change, Forger explains the blocked step and asks for confirmation or a safer input.

## Secrets

Secrets let a person connect private configuration such as credentials, tokens, API keys, or provider settings to an installed app. The app can declare which secrets it needs, and Forger stores the actual values separately from app code and documentation.

Secret values stay out of manifests, prompts, memory, logs, generated files, screenshots, tests, and final messages. When a secret is needed at runtime, Forger injects it through the approved secure path for that app.

A missing, expired, denied, or revoked secret can block the related workflow. Forger describes the missing setup in user-facing terms and avoids exposing internal variable names unless technical detail is requested.

## Automations

Automations let a person configure scheduled or recurring agent work such as checks, summaries, maintenance, reminders, and follow-ups. They can work with selected apps, approved tools, relevant memory, and app secrets when the runtime grants allow it.

Automation output is useful even when nothing changes: it explains what was checked, what happened, and what needs attention. Automations use the context and access granted for their configured purpose.

Automations depend on provider availability, app runtime health, account state, permissions, and any connected secrets. Private content and secret values stay out of automation instructions, and destructive changes follow the confirmation model required by the app or platform.

## Backups

Backups protect app data so the person can recover from updates, failed migrations, local mistakes, or device problems. Desktop can create local backups during sensitive app operations, and Cloud-backed backups can participate when the account-backed feature is available and allowed.

Forger preserves recoverable state before risky update or migration work, then explains recovery choices in product terms such as retry, restore, keep the current version, start fresh, or review conflicts.

A backup is not the same as a successful sync, a published app version, or a complete copy of every external file the person has ever shared. Restore, delete, overwrite, or start-fresh actions are destructive enough to require clear confirmation.

## Sync

Sync is an account-backed capability for continuity between connected devices and Cloud-aware surfaces. It helps selected app or platform state become available beyond one Desktop installation when the feature is supported, enabled, and connected.

Sync complements local ownership instead of replacing it. The local app remains the place where the person opens the app, works with app data, and uses the app's interface.

Sync is not a blanket upload of every local file, app database, secret, or agent conversation. It depends on the specific synced surface, account state, connectivity, conflict handling, and app support. When sync is unavailable or incomplete, Forger explains what remains local.

## Social

Social features let people participate in Forger's shared app ecosystem. Depending on the available surface, a person can use profiles, reviews, app sharing, friend relationships, cloud messages, and visible app discovery or feedback flows.

Social actions respect visibility, version, access, and review rules. Sharing or publishing an app describes what other people can see or install, and app review helps identify common risks without claiming absolute safety.

Social features do not turn a local app into a remote SaaS product. Shared apps still need compatible packaging, supported metadata, safe installation review, and appropriate access controls. Private app data does not become public just because the app has social metadata.

## Local Sharing

Local sharing lets a person reach a running app from another device on the same local network when Desktop provides the share. It is useful for checking an app from a phone, tablet, or another computer without publishing it to the internet.

Desktop owns the local sharing lifecycle. The person can understand when sharing is active, stop the share, and keep the app's normal local behavior intact.

Local sharing depends on the current network, device reachability, app runtime health, and supported app routes. Apps use the Desktop sharing flow instead of asking the person to open ports, run their own public server, or treat local network access as a permanent availability guarantee.

## Remote Access

Remote access lets a person reach selected local app sessions over the internet through Desktop and Cloud-controlled flows. It extends an active local app session for approved use cases without making the app independently public.

Desktop owns the remote access lifecycle and security boundary. Apps keep normal local requests working and use the shared remote session behavior when Desktop builds one. Assistant, internal tool, script, or automation routes remain separate unless there is a reviewed product reason to expose them.

Remote access depends on Desktop being available, the account and session being valid, the app being healthy, and the remote path supporting the requested operation. Apps use the platform remote path instead of creating independent tunnels, starting their own public services, or treating a tunnel provider as the privacy boundary.

## Diagnostics

Diagnostics help a person and support staff understand what went wrong. A report can include sanitized logs, runtime context, app state summaries, screenshots, or attachments when they are useful and appropriate for the issue.

Diagnostics explain the functional problem: what failed, what was being attempted, what impact it had, and what can be retried or changed. Reports keep secrets, tokens, private keys, unnecessary paths, and unrelated private content out of user-visible messages and uploaded artifacts.

Diagnostics do not automatically fix a problem and do not justify exposing sensitive data. If deeper inspection, production cleanup, data deletion, or irreversible recovery is needed, Forger asks for explicit confirmation and keeps the person informed about the functional impact.
