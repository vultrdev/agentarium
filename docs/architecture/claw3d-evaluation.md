# Claw3D Evaluation Framework

## Purpose

Decide whether Agentarium should:
- fork Claw3D
- partially reuse Claw3D
- use Claw3D as reference only

Do not decide this emotionally.

## Known Facts

Claw3D already aims to be:
- a 3D workspace for AI agents
- a visualization and interaction layer
- compatible with multiple backends including Hermes and OpenClaw

That makes it strategically relevant.

## Evaluation Criteria

### 1. Runtime fit
Questions:
- does its adapter/gateway model fit Agentarium’s runtime boundary?
- can Agentarium’s event contract map cleanly onto it?
- is the backend abstraction real or just marketing?

### 2. UI fit
Questions:
- does the current scene structure support semantic rooms and artifact-centric workflows?
- can the camera and interaction model support inspectability over spectacle?

### 3. Code quality
Questions:
- is the code modular?
- is world state separate from rendering?
- can we replace or extend major surfaces without surgery?

### 4. Fork risk
Questions:
- how fast is upstream moving?
- how painful will divergence be?
- how much dead code do we inherit?

### 5. Product fit
Questions:
- does Claw3D reinforce Agentarium’s product direction?
- or does it pull us toward “3D office theater” instead of operational clarity?

## Decision Matrix

### Fork Claw3D if
- runtime abstractions are genuinely usable
- scene graph and UI model are extensible
- world interaction is already close to Agentarium’s needs
- inherited complexity is manageable

### Partially reuse if
- useful renderer/UI pieces exist
- but runtime assumptions or product metaphors are too constraining

### Reference only if
- the code is too coupled
- the office metaphor is too dominant
- adapting it would cost nearly as much as a thinner clean build

## Current Recommendation

Default recommendation:
- **reference or partial reuse first**
- **do not fully commit to a fork until a technical spike proves it is cheaper than building a thinner shell**

## Spike Output Required

A proper evaluation should produce:
- architecture notes
- module map
- extension points
- runtime boundary assessment
- risk summary
- final recommendation: fork / partial reuse / reference only

## Pushback

If Claw3D is chosen only because it looks cool and is already 3D, that is not a valid reason.

The real question is:
- does it accelerate Agentarium’s operational product,
- or does it tempt us into building a prettier but weaker thing?
