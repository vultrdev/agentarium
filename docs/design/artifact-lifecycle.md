# Agentarium Artifact Lifecycle

## Purpose

Artifacts are the main durable outputs of Agentarium.

They matter more than chats because they can be:
- reviewed
- replayed
- approved
- promoted
- reused
- published

## Artifact Definition

An artifact is any structured output produced or modified by the agent system that should persist beyond a single message.

## MVP Artifact Types
- `plan`
- `spec`
- `note`
- `code_patch`
- `app_blueprint`
- `replay_clip_plan`

## Lifecycle States
- `draft`
- `active`
- `under_review`
- `approved`
- `rejected`
- `promoted`
- `archived`

## Lifecycle Rules

### 1. Birth
Artifacts are born through:
- `artifact.created`

They must immediately have:
- id
- type
- owner
- origin task
- room
- storage reference
- version

### 2. Iteration
Artifacts may change through:
- `artifact.updated`

Every update should increment version.

### 3. Review
Artifacts enter critique through:
- `critique.raised`
- state becomes `under_review`

### 4. Approval
Artifacts become accepted through:
- `artifact.approved`
- optionally `approval.resolved`

### 5. Promotion
Artifacts become durable world outputs through:
- `artifact.promoted`

Promotion usually means moving to the Vault or becoming a reusable template.

### 6. Archival
Artifacts that are obsolete but useful historically should become `archived`, not deleted.

## Artifact Ownership

### Primary owner
The agent that most recently authored the artifact.

### Lineage
Artifacts should maintain lineage to:
- task id
- previous versions
- critique objects
- approval records
- replay bookmarks referencing them

## Spatial Behavior

Artifacts should have spatial representations.

### In Forge
- active artifact pedestal
- visible draft state

### In Arena
- review focus object
- critique overlays

### In Vault
- promoted artifact entry
- reusable canonical object

## Anti-Patterns

Bad:
- artifacts that only exist in chat logs
- overwriting artifacts with no versioning
- approval without artifact state change
- deleting historical outputs because they are messy

Good:
- explicit versioning
- clear review state
- visible promotion path
- replay linkage

## MVP Requirement

By the end of an MVP session, at least one artifact should exist in a durable inspectable form.

If a session ends with only chat, the system underperformed.
