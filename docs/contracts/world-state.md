# Agentarium World State Contract

## Purpose

This document defines the minimum world state required to render Agentarium consistently from runtime events.

The world state is a projection.
It is not the source of truth for runtime reasoning.

## Design Rules

1. Runtime events are authoritative.
2. World state is a derived, queryable view.
3. Every visible thing must map to a runtime entity or derived projection.
4. State should be serializable for reconnects, replay startup, and debugging.

## Top-Level World State Shape

```json
{
  "world_id": "world_main",
  "session_id": "sess_...",
  "updated_at": "2026-04-17T09:00:00.000Z",
  "active_room_id": "forge_main",
  "rooms": [],
  "agents": [],
  "objects": [],
  "artifacts": [],
  "approvals": [],
  "timeline": {
    "last_event_id": "evt_...",
    "bookmark_ids": []
  }
}
```

## Rooms

Each room is an operational context.

### Room shape
```json
{
  "id": "forge_main",
  "kind": "forge",
  "title": "Forge",
  "status": "active",
  "occupant_agent_ids": ["architect_01", "builder_01"],
  "object_ids": ["table_01", "artifact_pedestal_01"],
  "task_ids": ["task_01"]
}
```

### Room fields
- `id` — unique room id
- `kind` — semantic room type
- `title` — display name
- `status` — `idle`, `active`, `blocked`, `review`, `archived`
- `occupant_agent_ids` — present agents
- `object_ids` — world objects currently anchored in the room
- `task_ids` — active task ids anchored to the room

## Agents

Agent state is the main live state users will inspect.

### Agent shape
```json
{
  "id": "builder_01",
  "role": "builder",
  "display_name": "Builder",
  "room_id": "forge_main",
  "state": "building",
  "status_text": "Generating implementation artifact",
  "current_task_id": "task_01",
  "focused_artifact_id": "artifact_01",
  "position": {
    "anchor": "forge_bench_a"
  },
  "interaction_target_id": "architect_01"
}
```

### Required agent fields
- `id`
- `role`
- `display_name`
- `room_id`
- `state`
- `status_text`

### Positioning rule
The runtime should not own literal coordinates.
It should own semantic anchors:
- `planning_table`
- `forge_bench_a`
- `arena_podium_left`
- `library_shelf_02`

The world renderer maps anchors to coordinates.

## Objects

Objects are inspectable world entities.

### Object shape
```json
{
  "id": "artifact_pedestal_01",
  "kind": "artifact_pedestal",
  "room_id": "forge_main",
  "title": "Current Output",
  "linked_entity_id": "artifact_01",
  "state": "active"
}
```

### Object kinds
- `artifact_pedestal`
- `blueprint_table`
- `memory_shelf`
- `debate_podium`
- `approval_terminal`
- `status_beacon`
- `portal`

## Artifacts

Artifacts are durable outputs that can be inspected, replayed, approved, promoted, or published.

### Artifact shape
```json
{
  "id": "artifact_01",
  "type": "spec",
  "title": "Forge MVP UX spec",
  "state": "under_review",
  "owner_agent_id": "builder_01",
  "origin_task_id": "task_01",
  "room_id": "forge_main",
  "storage_ref": "vault://artifact_01",
  "preview_text": "Single-room UX with Architect, Builder, Critic",
  "version": 2
}
```

### Artifact states
- `draft`
- `active`
- `under_review`
- `approved`
- `rejected`
- `promoted`
- `archived`

## Approvals

Approvals are explicit world entities so they can be surfaced visually and in replay.

### Approval shape
```json
{
  "id": "approval_01",
  "kind": "artifact_promotion",
  "state": "pending",
  "room_id": "forge_main",
  "target_entity_id": "artifact_01",
  "requested_by_agent_id": "curator_01",
  "question": "Promote this artifact to Vault?"
}
```

## Timeline Projection

The world state should keep minimal replay linkage.

### Timeline shape
```json
{
  "last_event_id": "evt_999",
  "bookmark_ids": ["bookmark_01", "bookmark_02"],
  "event_count": 48
}
```

## Derived State Rules

The following may be derived by the world layer and should not require separate runtime ownership:
- room occupancy
- object highlight state
- attention overlays
- light pulses
- idle animation selection
- camera recommendation

## Forbidden World-State Coupling

Do not put these in canonical world state:
- raw model chain-of-thought
- renderer-specific particle settings
- camera shake scripts
- direct mesh animation cues as runtime facts

## MVP Minimum State

The MVP can render correctly if it has:
- 1 room
- 3 agents
- 1 active task
- 1-3 objects
- 1 active artifact
- 0-1 pending approval
- timeline metadata

If more is required for basic comprehension, the state model is too complex.
