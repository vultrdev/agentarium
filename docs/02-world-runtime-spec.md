# Agentarium — World Runtime and Agent Interaction Spec

## Goal

Define how autonomous agents operate inside Agentarium as a real world state system instead of a fake animated scene.

## Architecture Overview

Agentarium should be split into three layers.

### 1. Runtime Layer
Owns actual agent execution.

Responsibilities:
- task intake
- orchestration
- model/runtime selection
- tool use
- memory
- approvals
- artifact creation
- event emission
- replay logs

Candidate runtime:
- Hermes / OpenClaw compatible orchestration layer

### 2. World Layer
Owns spatial state and scene mapping.

Responsibilities:
- rooms
- avatar positions
- interactable objects
- scene transitions
- room occupancy
- visual effects triggered by runtime events
- world object persistence

### 3. Interface Layer
Owns user interaction.

Responsibilities:
- camera/navigation
- click-to-inspect
- direct agent chat
- overlays
- approvals
- artifact browsing
- replay controls
- publishing tools

## Non-Negotiable Rule

The world must subscribe to runtime events.
It must not invent fake behavior to appear alive.

Bad:
- random wandering
- decorative “thinking” loops with no causal link
- fake collaboration animations unrelated to output

Good:
- Architect walks to planning table when assigned
- Builder moves to Forge bench when generating code/app output
- Critic enters Arena review stance when critique event starts
- world object appears only after artifact creation event

## Event Model

Everything important should emit typed events.

## Required Event Types
- `task.created`
- `task.assigned`
- `agent.activated`
- `agent.state_changed`
- `agent.message`
- `tool.called`
- `tool.completed`
- `artifact.created`
- `artifact.updated`
- `artifact.approved`
- `artifact.rejected`
- `memory.saved`
- `debate.started`
- `debate.turn_taken`
- `approval.requested`
- `approval.resolved`
- `session.completed`
- `replay.bookmark_created`

## Agent State Machine

Each visible agent should have explicit state.

### Minimum states
- idle
- navigating
- observing
- planning
- building
- researching
- debating
- waiting_for_approval
- blocked
- completed

### State constraints
- state must be set by runtime or orchestration logic
- 3D scene should only render states that exist in runtime state
- time spent in each state should be captured for analytics and replay

## Agent-to-Agent Interaction Model

Agent interaction should be explicit, not implied.

### Interaction types
- request
- handoff
- critique
- support
- approval_request
- challenge
- answer
- artifact_transfer

### Example flow
1. Architect receives goal
2. Architect emits `task.assigned`
3. Architect creates plan artifact
4. Builder receives handoff
5. Builder creates implementation artifact
6. Critic challenges assumptions
7. Architect or Builder responds
8. Curator promotes approved output to Vault

## World Objects

Agentarium needs durable, inspectable objects.

### Object categories
- artifact pedestals
- blueprint tables
- memory shelves
- debate podiums
- task terminals
- portal doors between rooms
- status beacons for blocked/urgent work

### Object rules
- objects should be inspectable
- objects should have source metadata
- objects should support replay references
- objects should map to real runtime entities, not only visuals

## Rooms as Operational Modes

### Forge
Purpose:
- coding
- app generation
- asset synthesis
- plan-to-output conversion

### Library
Purpose:
- retrieval
- memory inspection
- notes
- structured synthesis

### Arena
Purpose:
- debate
- design review
- red-team / blue-team thinking
- pushback and tradeoff testing

### Vault
Purpose:
- approved artifacts
- reusable templates
- saved workflows
- canonical outputs

### Studio
Purpose:
- capture clips
- produce replays
- generate release notes / content summaries

## User Interaction Model

Users should be able to interact in three ways.

### 1. Direct conversation
Walk to an agent or click it and ask:
- what are you doing?
- why did you choose this?
- show me the evidence
- continue from here
- stop and rethink

### 2. Spatial command
Use the world itself:
- drop an idea into the Forge
- move an artifact into the Arena for critique
- promote an artifact into the Vault
- send an agent into the Library for research

### 3. Executive control
Use overlays for:
- approvals
- budget limits
- model/runtime overrides
- replay capture
- publishing

## Replay System

Replay is first-class.

### Must support
- timeline scrubber
- event bookmarks
- room-level playback
- camera presets
- artifact snapshots at points in time
- summary generation from replay state

### Replay outputs
- internal audit trail
- learning playback
- public content clips
- “how this was built” mode

## MVP Runtime Slice

For MVP, support only this loop:
- one room
- Architect, Builder, Critic
- one task at a time
- live event stream
- artifact creation
- critique cycle
- approval or rejection
- replay timeline

Do not build:
- complex economies
- physics-heavy gameplay
- procedural worlds
- social multiplayer features
- dozens of decorative NPCs

## Technical Recommendation

### Use Claw3D for
- 3D interaction patterns
- office/world scene inspiration
- adapter ideas
- possibly frontend shell pieces if code quality is acceptable

### Use Hunyuan3D for
- themed props
- room assets
- avatars
- collectible artifacts
- seasonal content drops

### Do not use Hunyuan3D for
- core runtime
- world logic
- orchestration
- scene control
- agent behavior

## Critical Risk

The biggest product risk is building spectacle without operational depth.

The biggest technical risk is coupling the runtime too tightly to scene rendering.

Avoid both by making events the contract.
