---
title: "Overview"
description: "Forger as an open-core ecosystem for local apps, Desktop, Cloud, and current experimental limits."
section: "Overview"
order: 1
status: "experimental"
owner: "forger"
sources:
  - "AGENTS.md"
  - "desktop/AGENTS.md"
  - "pages/forger-ai.github.io/src/i18n/en.ts"
---

## Overview

Forger is an open-core ecosystem for building graphical harnesses quickly. A Forger app gives a person a focused interface around a task, dataset, API, or automation. The app runs in a private local app space, works with local data the person controls, and can use agents to change the app when requirements change.

## What Forger Is

Forger combines a desktop runtime, a local app format, agent contracts, and Cloud services. Developers can use it to create tools quickly, adapt those tools to their own workflows, and keep a persistent data layer between LLM calls. Non-developers can use it to create applications and tools that adapt to their workflows: LLMs that work over their data, keep useful context, and reuse their prompts without asking them to manage development infrastructure.

## The Local-First Model

The primary Forger experience runs on the person's machine. Installed apps keep their code, dependencies, and app data inside a private local app space. Apps can use material the person imports, shares, or creates inside the app, and they do not receive broad access to external files by default.

A local app can still be a connected client. It can call external APIs, operate on private local data, perform web scraping when the workflow and permissions allow it, and use the person's LLM subscriptions through coding tools such as Codex or Claude Code managed by the Forger Desktop app.

## Cloud

Forger Cloud complements the local model with account-backed services. It supports social discovery, app sharing, storage, backups, catalog metadata, publish verification, and remote management flows when those capabilities are enabled.

Cloud coordinates what needs to move between people, devices, and published app versions. Desktop remains the local infrastructure that installs apps, starts services, opens interfaces, connects agents, and keeps the app experience usable for both developers and non-developers.

## What Forger Can Do

Forger can create and adapt local apps, install curated apps, run app services, connect agent providers, work with app-specific tools, and help people turn data or APIs into graphical workflows. Apps can expose normal screens, store local data, call network services, and provide agent-readable documentation so an assistant can explain, inspect, or modify the app.

Forger also supports publishing and sharing flows for apps that are ready to move beyond one person's machine. Shared apps remain real code with explicit metadata, declared capabilities, and installable versions.

## What Is Experimental

Forger is currently an experimental release. App creation, app adaptation, provider setup, catalog installation, publishing, social features, storage, backups, and remote management are available at different levels of completeness depending on the app, account, provider, and platform configuration.

In practice, this means some capabilities appear as experimental, partial, or setup-dependent. One app can support Cloud, AI providers, or specific integrations without every app having the same coverage. Forger shows those differences so the person can understand what works today and what still needs setup.
