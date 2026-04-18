# Agentarium Runtime Adapter

## Purpose

Define the boundary between Hermes/OpenClaw-compatible runtimes and the Agentarium world.

The adapter should make Agentarium runtime-agnostic enough to support:
- Hermes
- OpenClaw
- future custom orchestrators

without rewriting the world client.

## Responsibilities

The adapter must:
- expose runtime health
- accept user tasks and world commands
- emit runtime events in Agentarium format
- resolve approvals
- expose artifact references
- support session replay queries

## Transport

### Recommended
- WebSocket for live event stream and bidirectional commands
- HTTP for snapshots, health, and historical queries

## Required Endpoints

### `GET /health`
Returns runtime and adapter status.

### `GET /world/state`
Returns current projected world state.

### `GET /sessions/:id/events`
Returns ordered event stream or paginated event history.

### `POST /tasks`
Creates a new task.

### `POST /approvals/:id/resolve`
Resolves an approval request.

### `POST /commands`
Accepts world-level commands.

### `GET /artifacts/:id`
Returns artifact metadata and storage reference.

## WebSocket Channels

### Server → Client
- `event`
- `world_state_patch`
- `approval_request`
- `system_notice`

### Client → Server
- `create_task`
- `ask_agent`
- `resolve_approval`
- `move_artifact`
- `request_replay`

## Command Types

### `create_task`
User submits a task into the world.

### `ask_agent`
User asks a direct question to a selected agent.

### `resolve_approval`
User approves or rejects a pending decision.

### `move_artifact`
Spatial interaction that changes artifact routing, e.g. Forge → Arena.

### `request_replay`
Client requests replay data or branch-from-moment behavior.

## Adapter Rules

1. The adapter must not leak provider-specific junk directly into the world contract.
2. Runtime-specific metadata may exist, but under namespaced extension fields.
3. The client should not know whether Hermes or OpenClaw is behind the adapter.
4. Approvals must round-trip with stable identifiers.
5. Event IDs must be durable for replay.

## Extension Fields

If runtime-specific metadata is needed, use:

```json
{
  "extensions": {
    "hermes": {},
    "openclaw": {}
  }
}
```

Not arbitrary top-level junk.

## Health Model

Health response should include:
- adapter status
- runtime status
- websocket status
- session count
- event backlog health
- replay availability

## Failure Handling

### Runtime unavailable
- world enters degraded mode
- existing replay and artifacts remain inspectable
- new task ingress disabled

### Event stream interrupted
- client attempts reconnect
- adapter supports replay-from-last-event-id catchup

### Approval resolution lost
- adapter must treat approval responses idempotently

## MVP Recommendation

Keep the first adapter thin.
Do not build a universal orchestration platform first.
Build enough boundary to support:
- one world
- one live session
- three agents
- event flow
- artifacts
- approvals
- replay
