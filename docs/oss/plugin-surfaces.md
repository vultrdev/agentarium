# Agentarium Plugin Surfaces

## Purpose

Define the extension points that should exist so contributors can add value without hacking the core.

## Principle

Extension is better than mutation.

If a contributor needs to patch unrelated core files to add a room, adapter, or theme, the architecture is failing.

## Primary Plugin Surfaces

### 1. Runtime adapters
Purpose:
- connect external runtimes to Agentarium

Examples:
- Hermes
- OpenClaw
- custom orchestrator
- event-bus simulator

Required properties:
- declares capabilities honestly
- emits normalized events
- supports command handling where applicable

### 2. Rooms
Purpose:
- add new operational spaces to the world

Examples:
- Forge
- Library
- Arena
- Vault
- Studio
- future community rooms

A room plugin should define:
- room id / kind
- semantic purpose
- object layout anchors
- room-specific interaction rules
- event-to-visual mappings

### 3. Agent role packs
Purpose:
- add or refine multi-agent cast behavior

Examples:
- Researcher
- Curator
- Janitor
- Prosecutor
- Mentor

A role pack should define:
- role name
- responsibility boundary
- allowed handoffs
- common outputs
- failure modes

### 4. Theme and asset packs
Purpose:
- change appearance without changing world logic

Examples:
- noir theme
- sci-fi archive theme
- ruined forge theme
- crypto cathedral theme

A theme pack should define:
- materials
- props
- ambient effects
- optional room overrides

### 5. Replay/export plugins
Purpose:
- transform replay data into useful outputs

Examples:
- highlight clip planner
- narrated timeline exporter
- patch note generator
- audit report exporter

## Non-Plugin Core

The following should stay guarded and core-owned:
- event schema
- world state schema
- command schema
- adapter base interface
- replay timeline core semantics

These can evolve, but not casually.

## Design Rule

A plugin surface should be:
- documented
- stable enough to target
- narrow enough to understand
- powerful enough to be worth using

## Anti-Patterns

Bad:
- “plugin system” with no actual contracts
- runtime-specific hacks in room plugins
- visual themes that change business logic
- role packs that bypass event contracts

Good:
- room plugins built on the same world state contract
- adapter plugins built on the same event contract
- replay exporters consuming normalized data
