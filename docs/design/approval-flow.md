# Agentarium Approval Flow

## Purpose

Define when the system must pause for user approval and how approval state should behave.

## Principle

Autonomy is good until side effects matter.

Approval gates exist for:
- irreversible actions
- risky actions
- public actions
- promotion of important artifacts

## MVP Approval Types
- `artifact_promotion`
- `destructive_action`
- `publish_output`
- `branch_direction_change` (optional)

## Approval States
- `pending`
- `approved`
- `rejected`
- `revise_requested`
- `expired`

## Required Approval Fields
- approval id
- kind
- question
- target entity id
- requested by agent
- room id
- created at
- resolved at
- resolution note

## Basic Flow

1. Agent determines approval is needed
2. Runtime emits `approval.requested`
3. World highlights approval terminal
4. User approves / rejects / requests revision
5. Runtime emits `approval.resolved`
6. Related artifact/task state updates accordingly

## UX Rules

The user must be able to understand:
- what is being approved
- why approval is needed
- what happens if they approve
- what happens if they reject

## Approval Terminal Behavior

When active, the terminal should show:
- question
- target artifact or action
- requesting agent
- consequence summary
- buttons: approve / reject / revise

## Anti-Patterns

Bad:
- vague approval prompts
- approvals with no visible consequence
- approval state existing only in backend logs

Good:
- explicit question
- visible target
- visible result after resolution
