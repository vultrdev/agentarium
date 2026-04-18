# Agentarium MVP Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Build the first usable Agentarium slice: a live 3D room where three agents collaborate on a task, emit real runtime events, create artifacts, and produce a replayable session.

**Architecture:** Keep runtime, world state, and 3D rendering separate. The runtime emits typed events; the world translates them into spatial state; the client renders that state and allows user intervention. Start with one room and one collaboration loop.

**Tech Stack:** TypeScript, React/Next frontend or Claw3D-derived shell, WebSocket event stream, Hermes/OpenClaw-compatible runtime adapter, structured JSON event schema, persistent session/artifact store.

---

## MVP Scope

### In scope
- one main room: Forge
- three agents: Architect, Builder, Critic
- one live task pipeline
- event-driven world updates
- artifact panel
- approval UI
- replay timeline

### Out of scope
- multiplayer world
- multiple worlds
- full visual app builder
- procedural environments
- game mechanics unrelated to agent work
- complex economy / progression systems

## Task 1: Define runtime event contract

**Objective:** Create the canonical event schema that the runtime and world both speak.

**Files:**
- Create: `docs/contracts/runtime-events.md`
- Create: `docs/contracts/runtime-events.schema.json`

**Deliverables:**
- event types list
- per-event payload shape
- required metadata fields: `session_id`, `task_id`, `agent_id`, `timestamp`, `room_id`
- replay requirements

**Verification:**
- schema supports all MVP events
- no room animation requires hidden undocumented fields

## Task 2: Define world state model

**Objective:** Specify the minimal persistent state needed to render the world.

**Files:**
- Create: `docs/contracts/world-state.md`
- Create: `docs/contracts/world-state.schema.json`

**Deliverables:**
- rooms
- agents
- objects
- artifacts
- interactions
- replay bookmarks

**Verification:**
- every UI-visible thing maps back to a runtime entity or derived world state

## Task 3: Define agent role behavior

**Objective:** Lock the first three agent archetypes and their interaction rules.

**Files:**
- Create: `docs/design/agent-roles.md`

**Deliverables:**
- Architect responsibilities
- Builder responsibilities
- Critic responsibilities
- allowed handoffs
- blocked states
- approval points

**Verification:**
- one task can move from intake to artifact with no undefined role ownership

## Task 4: Define Forge room UX

**Objective:** Design the single-room MVP UX before adding more rooms.

**Files:**
- Create: `docs/design/forge-room.md`

**Deliverables:**
- camera modes
- click targets
- overlays
- artifact pedestal behavior
- event-to-animation mapping

**Verification:**
- user can understand what is happening without reading logs first

## Task 5: Define replay model

**Objective:** Make replay native to the architecture, not bolted on later.

**Files:**
- Create: `docs/design/replay-system.md`

**Deliverables:**
- event sourcing rules
- playback timeline structure
- bookmark model
- clip generation requirements

**Verification:**
- an MVP session can be reconstructed from persisted events alone

## Task 6: Build runtime adapter spec

**Objective:** Define the boundary between Hermes/OpenClaw runtime and Agentarium world.

**Files:**
- Create: `docs/architecture/runtime-adapter.md`

**Deliverables:**
- websocket protocol
- command interface
- approval callbacks
- artifact persistence hooks
- heartbeat / health semantics

**Verification:**
- frontend team can build against the adapter without direct runtime coupling

## Task 7: Build content engine requirements

**Objective:** Design for regular public updates from day one.

**Files:**
- Create: `docs/product/content-engine.md`

**Deliverables:**
- replay-to-clip flow
- patch notes format
- “session highlight” generation
- seasonal room/asset drop system

**Verification:**
- every meaningful session can create at least one shareable output

## Task 8: Technical spike decision

**Objective:** Decide whether to fork Claw3D, borrow parts, or build a thinner shell.

**Files:**
- Create: `docs/architecture/claw3d-evaluation.md`

**Deliverables:**
- code quality assessment
- runtime fit
- protocol fit
- fork risk
- recommended path

**Verification:**
- explicit decision: fork / partial reuse / reference only

## Recommendation

Start implementation only after Tasks 1 through 5 are complete.

If you skip those and jump straight to scene building, you will likely create a pretty but shallow product.
