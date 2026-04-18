# Agentarium Forge Room Design

## Purpose

The Forge is the MVP room.
It is where ideas become artifacts.

If the Forge is not compelling, Agentarium is not ready for multiple rooms.

## Room Job

The Forge should let a user:
- enter a task
- watch Architect, Builder, and Critic collaborate
- inspect activity live
- intervene during work
- review and approve outputs
- leave with a durable artifact

## Core Zones

### 1. Task Ingress Terminal
Where new work enters the room.

Functions:
- create task
- attach context
- choose mode: ideation, build, review
- assign priority

### 2. Planning Table
Architect home base.

Functions:
- show current task framing
- display current plan nodes
- reveal latest handoff summary

### 3. Build Bench
Builder home base.

Functions:
- display active artifact draft
- show build progress state
- expose key output preview

### 4. Review Podium
Critic home base.

Functions:
- show active objections
- show open critique severity
- show whether critique is resolved

### 5. Artifact Pedestal
The focal output object.

Functions:
- display current primary artifact
- open artifact inspector
- show state: draft, review, approved, promoted

### 6. Approval Terminal
Used when user confirmation is required.

Functions:
- show pending decisions
- accept / reject / revise
- explain consequences

## Camera Modes

### Follow Focus
Camera follows the currently active agent.
Use when the user wants to spectate the live process.

### Room Overview
Fixed strategic view showing all three agents and the artifact pedestal.
Use as default.

### Artifact Focus
Centers the current artifact and overlays source, status, and lineage.

### Replay Mode
Locks into timeline-aware cinematic paths and bookmark jumps.

## Click Targets

### Agent click
Open:
- current state
- status text
- last emitted message
- related task and artifact links
- ask/interrupt actions

### Artifact click
Open:
- title
- type
- state
- owner
- preview
- version history
- promote / review / replay actions

### Room object click
Open object-specific context:
- planning table → task structure
- review podium → critique stack
- approval terminal → pending approvals

## Event-to-Animation Mapping

These are world mappings, not runtime truths.

### `task.assigned`
- Architect becomes active
- subtle route to planning table
- task ingress terminal dims

### `artifact.created`
- pedestal activates
- new artifact materializes
- short light pulse

### `critique.raised`
- Critic spotlight increases
- review podium activates
- artifact outline changes to warning state

### `approval.requested`
- approval terminal lights up
- room switches to waiting emphasis
- active agents move to observing or waiting state

### `session.completed`
- room enters resolved mode
- artifact pedestal stabilizes
- replay bookmark prompt appears

## UX Rules

1. The room should always reveal the current task owner.
2. The room should always reveal the current primary artifact.
3. The user should never need logs to know whether progress is happening.
4. Movement must be sparse and meaningful.
5. The room should feel alive because work is happening, not because idle animations are noisy.

## Minimal UI Overlay

Must show:
- active task title
- active phase
- current owner agent
- latest significant event
- primary artifact state
- pending approval count

## Success Condition

A first-time user entering the Forge should be able to answer within 10 seconds:
- what is being worked on?
- who is doing it?
- what has been produced?
- what is blocked or waiting?

If not, the room is too decorative or too opaque.
