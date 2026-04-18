# Agentarium Phase 0 Build Plan

## Goal

Build the minimum technical backbone that proves Agentarium can project real runtime events into a usable world state.

## Phase 0 Deliverable

A local demo where:
- a fake runtime emits events
- the frontend receives them over a simple adapter boundary
- the world state updates correctly
- three agents appear in the Forge
- the primary artifact appears and changes state
- approvals can be simulated

## Scope

### Build
- typed contracts in code
- event reducer / projector
- demo event feed
- websocket or local mocked adapter path
- minimal Forge room shell
- three placeholder agents
- one artifact pedestal
- one approval terminal
- basic inspector panel

### Skip
- final art
- Hunyuan integration
- multi-room navigation
- production runtime integration
- social/multiplayer systems

## Recommended Order

### Task 1
Create shared code contracts for:
- runtime events
- world state
- commands

### Task 2
Create world projection reducer that consumes events and updates state.

### Task 3
Create demo runtime event generator with scripted sessions.

### Task 4
Create runtime connection layer for ingesting demo events.

### Task 5
Create minimal Forge room scene.

### Task 6
Bind projected world state to scene rendering.

### Task 7
Add click-to-inspect for agents and artifacts.

### Task 8
Add simple approval resolution path.

## Exit Criteria

Phase 0 is done when a scripted session can visibly do this:
1. task enters Forge
2. Architect activates
3. Builder produces an artifact
4. Critic raises a critique
5. approval appears
6. approval resolves
7. session completes

If that works, the backbone is real.
