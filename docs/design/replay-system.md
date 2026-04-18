# Agentarium Replay System

## Purpose

Replay is a first-class product feature.

It exists for:
- understanding
- auditability
- teaching
- content generation
- branching new work from past sessions

## Core Principle

Replay must reconstruct from persisted runtime events.

Do not make replay depend on recorded video as the source of truth.
Video is an output format, not the canonical session record.

## Required Replay Inputs
- ordered runtime events
- world-state projection rules
- room anchor definitions
- artifact snapshots or version references
- bookmarks

## Replay Outputs
- interactive playback
- summarized timeline
- clip export plan
- branch-from-moment workflow

## Replay Modes

### 1. Timeline Replay
Step through the session event by event.

### 2. Cinematic Replay
Use bookmarks and camera rules to generate a more watchable playback.

### 3. Audit Replay
Optimized for debugging and traceability.
Focuses on event lineage, causation, and approvals.

### 4. Branch Replay
Lets the user pick a past moment and fork a new task from it.

## Bookmark Types
- `content_moment`
- `decision_point`
- `critique_start`
- `approval_gate`
- `artifact_birth`
- `session_finish`

## Bookmark Shape
```json
{
  "id": "bookmark_01",
  "event_id": "evt_204",
  "timestamp": "2026-04-17T09:10:00.000Z",
  "kind": "content_moment",
  "title": "Critic exposes a missing approval gate",
  "importance": "high"
}
```

## Replay Timeline Requirements

The replay timeline must support:
- play
- pause
- scrub
- jump to bookmark
- step next / previous event
- filter by agent
- filter by artifact
- filter by room

## Reconstruction Rules

1. Start from an empty or checkpointed world state.
2. Apply events in sequence.
3. Rebuild room state, agent state, artifacts, and approvals.
4. Derive presentational effects from event type and resulting state.

## Performance Recommendation

For long sessions:
- store periodic world-state checkpoints
- replay from nearest checkpoint plus event delta

## Public Content Workflow

A replay should be convertible into:
- a short highlight reel
- a narrated timeline
- patch notes
- “how it was made” content

## Anti-Patterns

Bad:
- replay only as screen recording
- replay that cannot be scrubbed
- replay that loses artifact lineage
- replay that cannot explain why a scene changed

Good:
- event-grounded reconstruction
- bookmarkable moments
- inspectable causation
- branchable timelines
