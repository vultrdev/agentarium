# Agentarium Runtime Events Contract

## Purpose

This document defines the canonical event contract between the runtime layer and the Agentarium world.

If an important world behavior cannot be explained through these events, the system is underspecified.

## Design Rules

1. Events describe real runtime facts, not presentation wishes.
2. Events are append-only facts for replay.
3. Rendering-specific details do not belong in runtime events.
4. Every event must be attributable to a session, task, and actor where applicable.
5. Events should be human-legible enough to inspect during debugging.

## Event Envelope

Every event must use this outer structure.

```json
{
  "id": "evt_01J...",
  "type": "artifact.created",
  "timestamp": "2026-04-17T09:00:00.000Z",
  "session_id": "sess_...",
  "task_id": "task_...",
  "world_id": "world_main",
  "room_id": "forge_main",
  "actor": {
    "kind": "agent",
    "id": "builder_01"
  },
  "subject": {
    "kind": "artifact",
    "id": "artifact_..."
  },
  "correlation_id": "corr_...",
  "causation_id": "evt_prev_...",
  "payload": {}
}
```

## Required Envelope Fields

- `id` — globally unique event identifier
- `type` — event name
- `timestamp` — ISO-8601 UTC timestamp
- `session_id` — logical session identifier
- `task_id` — task or subtask identifier when applicable
- `world_id` — target world identifier
- `room_id` — room where the event should be anchored when applicable
- `actor` — originator of the event
- `payload` — event-specific data

## Optional Envelope Fields

- `subject` — primary entity acted on
- `correlation_id` — ties related events together
- `causation_id` — links directly to the triggering event
- `visibility` — `internal`, `user_visible`, `public_candidate`
- `tags` — arbitrary labels for filtering and replay indexing

## Actor Shape

```json
{
  "kind": "agent | user | system | runtime | tool",
  "id": "string"
}
```

## Subject Shape

```json
{
  "kind": "task | artifact | agent | room | memory | approval | replay_bookmark",
  "id": "string"
}
```

## Required MVP Event Types

### Task Lifecycle
- `task.created`
- `task.assigned`
- `task.reframed`
- `task.completed`
- `task.failed`
- `task.blocked`

### Agent Lifecycle
- `agent.activated`
- `agent.state_changed`
- `agent.message`
- `agent.handoff_sent`
- `agent.handoff_received`
- `agent.blocked`

### Tool Lifecycle
- `tool.called`
- `tool.completed`
- `tool.failed`

### Artifact Lifecycle
- `artifact.created`
- `artifact.updated`
- `artifact.promoted`
- `artifact.approved`
- `artifact.rejected`

### Memory and Knowledge
- `memory.saved`
- `memory.linked`

### Debate and Review
- `debate.started`
- `debate.turn_taken`
- `debate.resolved`
- `critique.raised`
- `critique.resolved`

### Approval Flow
- `approval.requested`
- `approval.resolved`

### Replay and Capture
- `replay.bookmark_created`
- `session.completed`

## Event Payload Requirements

### `task.created`
```json
{
  "title": "Landing page teardown",
  "goal": "Produce a better conversion-oriented spec",
  "priority": "normal",
  "requested_by": "user_01",
  "entry_mode": "chat | spatial_drop | replay_branch"
}
```

### `task.assigned`
```json
{
  "assignee_agent_id": "architect_01",
  "reason": "goal decomposition",
  "assignment_kind": "primary | support | critique"
}
```

### `agent.state_changed`
```json
{
  "from": "idle",
  "to": "planning",
  "reason": "task assignment received"
}
```

### `agent.message`
```json
{
  "message_kind": "thought_summary | handoff | critique | answer | status_update",
  "content": "Plan split into three workstreams.",
  "target_agent_id": "builder_01",
  "target_user_visible": true
}
```

### `tool.called`
```json
{
  "tool_name": "search_files",
  "intent": "inspect existing code paths",
  "input_summary": "pattern=prompt_builder"
}
```

### `tool.completed`
```json
{
  "tool_name": "search_files",
  "status": "success",
  "output_summary": "3 matching files found",
  "duration_ms": 182
}
```

### `artifact.created`
```json
{
  "artifact_id": "artifact_spec_01",
  "artifact_type": "plan | spec | code_patch | note | app_blueprint | replay_clip",
  "title": "Forge MVP UX spec",
  "storage_ref": "vault://artifact_spec_01",
  "preview_text": "Single-room flow with Architect, Builder, Critic"
}
```

### `critique.raised`
```json
{
  "critique_id": "crit_01",
  "target_artifact_id": "artifact_spec_01",
  "severity": "low | medium | high",
  "claim": "The proposal lacks an approval gate before artifact promotion.",
  "requested_response_from": "architect_01"
}
```

### `approval.requested`
```json
{
  "approval_id": "approval_01",
  "approval_kind": "artifact_promotion | destructive_action | publish_output",
  "question": "Promote this spec to Vault?",
  "target_artifact_id": "artifact_spec_01"
}
```

### `replay.bookmark_created`
```json
{
  "bookmark_id": "bookmark_01",
  "title": "Critic challenge begins",
  "reason": "good content moment",
  "importance": "high"
}
```

## Event Ordering Rules

- Ordering is authoritative within a session timeline.
- Timestamps alone are not enough; clients should preserve stream order.
- Replays should use event sequence, not physics simulation, as the source of truth.

## Idempotency Rules

- Duplicate `id` values must be ignored by consumers.
- Runtime emitters may retry delivery.
- World consumers must tolerate duplicate event delivery safely.

## Privacy and Visibility

Each event should be markable as:
- `internal` — runtime-only or debug-only
- `user_visible` — can appear in inspection UI
- `public_candidate` — safe for replay clips or content workflows after review

## Anti-Patterns

Do not emit events like:
- `agent.walked_to_table`
- `camera.shook`
- `glow.started`
- `npc.looked_busy`

Those are rendering outcomes, not runtime facts.

Correct approach:
- runtime emits `artifact.created`
- world maps that into pedestal spawn, light pulse, and UI overlay

## MVP Requirement

The MVP must be completable with these event types alone:
- `task.created`
- `task.assigned`
- `agent.state_changed`
- `agent.message`
- `artifact.created`
- `critique.raised`
- `approval.requested`
- `approval.resolved`
- `session.completed`

If additional events are required just to make the MVP understandable, the contract is incomplete.
