# Agentarium Governance Principles

## Purpose

Define how the project stays coherent as contributors join.

## Principle

Agentarium should be open to experimentation, but not structurally sloppy.

## Governance Rules

### 1. Protect the contracts
Changes to:
- runtime events
- world state
- commands
- replay semantics

should receive higher scrutiny than visual or local UX changes.

### 2. Preserve product identity
Agentarium is:
- a spatial operating system for AI agents
- event-driven
- inspectable
- artifact-first
- replay-first

It is not:
- a random 3D sandbox
- a toy office sim
- a generic multiplayer game

### 3. Prefer extensibility over core churn
If a feature can be added as a room, role pack, theme, or adapter, prefer that over changing the core.

### 4. Reject spectacle without meaning
Visual flourish is welcome.
Visual flourish disconnected from runtime meaning is not.

### 5. Keep the repo legible
Large monolith files, undocumented magic, and hidden side effects should be treated as architectural debt.

## Maintainer Call

When reviewing a contribution, the core question is:
- does this make Agentarium more understandable, useful, extensible, or replayable?

If not, it probably does not belong.
