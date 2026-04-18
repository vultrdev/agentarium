# Agentarium Contribution Model

## Purpose

Define how contributors should engage with Agentarium from the beginning.

Agentarium is intended to be open-source and contributor-friendly from day one.
That means the project must be shaped around extension, clarity, and stable contracts — not around one founder's private mental model.

## Core Principle

Contributors should be able to improve Agentarium by working on one layer without needing to understand the entire system.

## Contribution Layers

### 1. Core contracts
Safe for contributors who like architecture and correctness.

Examples:
- runtime event schema
- world state schema
- command schema
- artifact lifecycle
- replay contract

### 2. Runtime adapters
Safe for contributors who know agent runtimes and backends.

Examples:
- Hermes adapter
- OpenClaw adapter
- custom runtime adapters
- simulated/demo adapters

### 3. World and room systems
Safe for frontend / interaction / 3D contributors.

Examples:
- Forge improvements
- Library room implementation
- Arena mechanics
- room object systems
- camera systems

### 4. Artifact and replay tooling
Safe for product/tooling contributors.

Examples:
- artifact inspectors
- replay timeline UX
- clip export tools
- session summaries

### 5. Themes and asset packs
Safe for visual / worldbuilding contributors.

Examples:
- room themes
- prop packs
- visual skins
- Hunyuan-assisted asset bundles

## Contributor Expectations

Contributors should:
- preserve stable contracts
- avoid giant incidental rewrites
- propose extensions before changing core semantics
- keep features observable and explainable
- prefer explicitness over magic

## Maintainer Expectations

Maintainers should:
- keep architecture docs current
- label contribution surfaces clearly
- protect core contracts from casual breakage
- welcome small useful improvements
- avoid turning the repo into a vague experiment

## What Makes A Good Contribution

Good:
- a new room with clear semantics
- a runtime adapter with honest capability declarations
- a replay improvement with a clear event model
- a well-scoped UX improvement
- a theme or asset pack that does not break core logic

Bad:
- rewriting the core scene around personal taste
- hardcoding one runtime into the entire app
- adding effects without real state meaning
- shipping a flashy feature with no docs or contract

## Review Philosophy

Review should focus on:
- correctness
- maintainability
- extension friendliness
- product coherence
- contract stability

## Contribution Strategy

The project should optimize for:
- many small useful contributions
- a few deep architecture contributions
- low-friction room/theme/plugin additions

It should not require every contributor to become a core maintainer to ship value.
