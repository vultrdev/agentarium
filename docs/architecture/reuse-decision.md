# Agentarium Reuse Decision

## Purpose

Define what Agentarium should reuse, partially reuse, or ignore from:
- Claw3D
- Tencent Hunyuan3D

## Claw3D Decision

## What to reuse conceptually

### 1. Runtime provider seam
Claw3D already has useful thinking around:
- `openclaw`
- `hermes`
- `custom`
- capability-driven providers

This is worth reusing as an architectural pattern.

### 2. Gateway / adapter thinking
Its backend bridge model is useful for:
- runtime abstraction
- same-origin browser-safe proxying
- runtime metadata exposure
- multi-provider support

### 3. 3D interaction patterns
Worth borrowing ideas for:
- camera behaviors
- overlays over 3D space
- object interaction
- room-based navigation

## What to partially reuse in code

Potential candidates:
- provider/runtime type definitions
- adapter/proxy ideas
- selective utility code
- selected scene interaction helpers

Only after inspection and pruning.

## What not to inherit wholesale

### 1. The retro office ontology
Agentarium should not be trapped in:
- desk zones
- coffee areas
- generic office theater

Its room model should be:
- Forge
- Library
- Arena
- Vault
- Studio

### 2. Giant scene monoliths
Claw3D’s main retro office surface is too large and too coupled to adopt as the center of Agentarium.

### 3. Product assumptions
Agentarium is not just “Claw3D but branded differently.”
It needs a tighter event/artifact/replay spine.

## Claw3D final call

### Recommendation
- **reference heavily**
- **partially reuse selectively**
- **do not full-fork as the MVP foundation unless a technical spike proves the savings are real**

## Tencent Hunyuan3D Decision

## What it is good for
- generating props
- generating room objects
- generating statues, pedestals, relics, terminals, artifacts
- generating themed visual drops
- generating world cosmetics and content assets

## What it is not good for
- runtime logic
- 3D world engine
- agent behavior
- orchestration
- event architecture
- scene interaction model

## Recommended integration model

Treat Hunyuan as an **optional asset generation service**.

### Suggested uses
- offline asset pipeline
- internal content-generation tool
- occasional “generate themed room pack” workflow
- artifact visualization layer

### Do not make it mandatory for MVP
The MVP must still function if Hunyuan is unavailable.

## License Pushback
Even if the project is “just crypto,” that is still public, money-adjacent, and likely promotional/commercial in practice.

So the safe architecture choice is:
- **optional Hunyuan dependency**
- **non-core role**
- **replaceable asset pipeline**

Not:
- hard dependency for the core product

## Final Reuse Table

### Reuse / borrow from Claw3D
- runtime seam ideas
- adapter/proxy patterns
- interaction patterns
- browser 3D implementation patterns

### Reference only from Claw3D
- room semantics
- giant office scene structure
- full product shell

### Use from Hunyuan
- generated assets
- prop pipeline
- visual content drops

### Do not use from Hunyuan
- core architecture
- runtime layer
- engine choice
- world state model

## Final Conclusion

Agentarium should be:
- **architecturally independent of both repos**
- **informed by Claw3D**
- **visually enhanced by Hunyuan**

That is the correct balance.
