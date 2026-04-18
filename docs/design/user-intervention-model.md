# Agentarium User Intervention Model

## Purpose

Define how users step into an autonomous world without destroying flow.

## Principle

The user is not micromanaging every token.
The user is steering, inspecting, approving, and redirecting when it matters.

## Intervention Modes

### 1. Passive spectating
The user watches the world and inspects state without changing it.

### 2. Conversational intervention
The user asks an agent a direct question.

### 3. Task redirection
The user changes task direction or constraints.

### 4. Approval resolution
The user permits or blocks a gated action.

### 5. Spatial intervention
The user moves an artifact or routes work into another room.

## User Questions That Must Work
- what are you doing?
- why did you choose this?
- what changed?
- what are you waiting for?
- what do you disagree with?
- continue from here
- stop and rethink

## Intervention Rules

1. Interventions should create a command.
2. Commands should create events.
3. Events should change visible world state.
4. Interventions should never disappear silently.

## Good Intervention Design

Good:
- direct
- inspectable
- traceable
- reversible when practical

Bad:
- invisible overrides
- magical unstated state changes
- hidden prompt injection through the UI

## MVP Requirement

The user must be able to:
- ask an agent a question
- redirect a task
- approve or reject a pending action
- move an artifact into review

That is enough for a first real control model.
