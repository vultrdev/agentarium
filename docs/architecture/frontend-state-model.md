# Agentarium Frontend State Model

## Purpose

Define the minimum frontend state needed to drive the Agentarium MVP cleanly.

## Core Rule

The frontend should not invent business truth.
It should hold:
- projected world state
- UI state
- replay state
- connection state

## State Domains

### 1. Connection state
Tracks:
- websocket connected/disconnected
- adapter health
- reconnect state
- last seen event id

### 2. World state
Tracks:
- rooms
- agents
- objects
- artifacts
- approvals
- active task summaries

Derived from runtime events.

### 3. UI state
Tracks:
- selected agent
- selected artifact
- selected room object
- active camera mode
- open panels/modals
- current hover/focus

### 4. Replay state
Tracks:
- replay mode on/off
- current timeline position
- active bookmark
- playback speed
- filters

### 5. Draft input state
Tracks:
- task form draft
- intervention input draft
- approval note draft

## Recommendation

Use separate stores or slices for:
- connection
- world
- ui
- replay

Do not put everything into one massive scene component.

## Anti-Pattern

Bad:
- one monolithic component owning world logic, rendering, overlays, and replay state

Good:
- clean state slices with event reducers and selectors
