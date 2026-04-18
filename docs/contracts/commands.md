# Agentarium Command Contract

## Purpose

This document defines commands sent from the Agentarium client to the runtime adapter.

Events describe what happened.
Commands describe what the user or world is asking the runtime to do.

## Design Rules

1. Commands are requests, not guarantees.
2. Commands should produce observable events in response.
3. Commands must be traceable with identifiers.
4. Commands should remain runtime-agnostic.
5. Commands should be minimal, explicit, and auditable.

## Command Envelope

```json
{
  "id": "cmd_01",
  "type": "create_task",
  "timestamp": "2026-04-17T10:00:00.000Z",
  "session_id": "sess_01",
  "world_id": "world_main",
  "room_id": "forge_main",
  "issued_by": {
    "kind": "user",
    "id": "user_01"
  },
  "payload": {}
}
```

## Required Fields
- `id`
- `type`
- `timestamp`
- `session_id`
- `world_id`
- `issued_by`
- `payload`

## Command Types

### `create_task`
Create a new task in the world.

Payload:
```json
{
  "title": "Landing page teardown",
  "goal": "Create a better conversion-focused version",
  "priority": "normal",
  "entry_mode": "chat | spatial_drop",
  "context": ["existing copy", "brand notes"]
}
```

### `ask_agent`
Send a direct question or instruction to one agent.

Payload:
```json
{
  "agent_id": "architect_01",
  "message": "Why did you choose this approach?"
}
```

### `redirect_task`
Adjust task direction without creating a fresh task.

Payload:
```json
{
  "task_id": "task_01",
  "instruction": "Focus on speed over completeness"
}
```

### `move_artifact`
Move an artifact between rooms or states through a spatial action.

Payload:
```json
{
  "artifact_id": "artifact_01",
  "from_room_id": "forge_main",
  "to_room_id": "arena_main",
  "reason": "send for critique"
}
```

### `resolve_approval`
Resolve a pending approval.

Payload:
```json
{
  "approval_id": "approval_01",
  "decision": "approve | reject | revise",
  "note": "Looks good, promote it"
}
```

### `bookmark_replay`
Create a manual replay bookmark.

Payload:
```json
{
  "title": "Important debate turn",
  "reason": "good content moment"
}
```

### `branch_from_replay`
Fork a new task from a replay event or bookmark.

Payload:
```json
{
  "source_event_id": "evt_204",
  "new_goal": "Continue this idea but for mobile"
}
```

## Required Response Pattern

Each accepted command should lead to one or more events, for example:
- `create_task` → `task.created`
- `ask_agent` → `agent.message` or `task.assigned`
- `move_artifact` → `artifact.updated` or `artifact.promoted`
- `resolve_approval` → `approval.resolved`

## Error Handling

Rejected commands should produce structured error responses and, when appropriate, a user-visible event.

## Anti-Patterns

Bad:
- commands that embed renderer behavior
- commands that assume a specific backend vendor
- silent commands with no resulting event trail

Good:
- commands that are explicit, auditable, and cause visible state transitions
