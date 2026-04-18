# Agentarium MVP Coding Start Plan

## Question

When should implementation begin?

## Answer

**Start coding the MVP after the contracts and room model are stable enough that two engineers would build roughly the same thing from the docs.**

That means:
- runtime events are defined
- world state is defined
- agent roles are defined
- Forge room is defined
- replay expectations are defined
- engine decision is made

This threshold is now close enough to begin MVP coding.

## Recommendation

### Start coding now, but only the backbone
Do not start with:
- pretty scene polish
- lots of props
- fancy avatars
- multiple rooms
- Hunyuan integration

Start with:
- event contract implementation
- projected world state store
- runtime adapter stub
- basic Forge scene
- three agent actors
- artifact pedestal
- click-to-inspect
- replay timeline skeleton

## Phase Plan

## Phase 0 — Foundation
Build first:
1. runtime event types in code
2. world state projection store
3. WebSocket adapter skeleton
4. fake/demo runtime event generator for local iteration

**Goal:** prove that the world can move from events.

## Phase 1 — Forge MVP
Build next:
1. one Forge room
2. Architect / Builder / Critic actors
3. semantic anchor movement
4. artifact pedestal
5. approval terminal
6. basic overlays

**Goal:** the room is understandable and useful.

## Phase 2 — Replay and artifact loop
Build next:
1. event persistence
2. timeline playback
3. bookmarks
4. artifact inspection/versioning

**Goal:** a session can be replayed and shared.

## Phase 3 — Runtime integration
Build next:
1. Hermes/OpenClaw adapter integration
2. real task creation
3. agent interaction loop
4. approvals round-trip

**Goal:** replace demo runtime with real runtime.

## Phase 4 — Hunyuan layer
Build later:
1. asset generation pipeline
2. themed prop generation
3. artifact visual skinning
4. content pack generation

**Goal:** make it prettier without making it architecturally dependent.

## Do Not Start With
- worldbuilder
- multiple rooms
- complex nav systems
- economies/progression
- multiplayer social presence
- heavy Hunyuan dependency
- big fork surgery on Claw3D

## Coding Start Trigger

The MVP should begin once these are accepted as stable:
- `contracts/runtime-events.md`
- `contracts/world-state.md`
- `design/agent-roles.md`
- `design/forge-room.md`
- `design/replay-system.md`
- `architecture/engine-decision.md`

That condition is now effectively met.

## My Recommendation

**Start coding the backbone immediately after one final implementation-readiness pass.**

Not a long planning phase.
Not a giant 3D art phase.

A thin, ruthless MVP phase.
