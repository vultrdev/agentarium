# Agentarium Engine Decision

## Recommendation

For MVP, Agentarium should run on:
- **Web stack:** Next.js + React + TypeScript
- **3D renderer:** **Three.js via React Three Fiber**
- **Realtime state:** WebSocket event stream + local projected world state store
- **Runtime layer:** Hermes/OpenClaw-compatible adapter

## Short Answer

Use **React Three Fiber / Three.js** for the actual world.

Do **not** go hunting for a bigger game engine first.
Do **not** treat Hunyuan as an engine.
Do **not** let rendering tech dictate product architecture.

## Why This Is The Right Engine Choice

### 1. Claw3D already proves the stack is viable
Claw3D uses:
- Three.js
- React Three Fiber
- Next.js

That gives us a practical reference implementation for:
- browser-based 3D
- UI overlays + 3D world coexistence
- camera control
- object interaction
- runtime-connected scene behavior

### 2. Agentarium is not physics-first
Agentarium is:
- event-driven
- inspectability-first
- artifact-first
- replay-first

It is not:
- twitch gameplay
- vehicle simulation
- open-world physics sandbox
- first-person shooter

That means we do not need Unreal, Unity, Godot, or a heavyweight game runtime for MVP.

### 3. Browser-native matters
A browser stack gives:
- fastest iteration
- easiest sharing
- easiest content capture
- easiest runtime adapter integration
- easiest dashboard / overlay composition

That matters more than raw rendering prestige.

## What We Need The Engine To Do

### MVP requirements
- render one room
- render three agents
- move agents between semantic anchors
- render room objects and artifacts
- support click/select/inspect
- support overlays and approval modals
- support replay timeline playback
- support camera presets

Three.js + R3F can do all of this comfortably.

## What We Do Not Need Yet
- complex physics
- advanced character locomotion systems
- open-world streaming
- navmesh-heavy simulation engine
- expensive cinematic toolchain

## Alternative Engines Considered

### Unity
Pros:
- strong 3D tooling
- mature workflows
- lots of asset support

Cons:
- slower web/product iteration
- worse integration with web-native app/state surfaces
- heavier deployment and tooling cost
- bigger jump for UI/product-style iteration

### Unreal
Pros:
- beautiful rendering
- cinematic potential

Cons:
- comically overkill for MVP
- wrong iteration profile
- too much engine for too little product certainty

### Godot
Pros:
- open source
- lighter than Unreal/Unity

Cons:
- weaker direct leverage from Claw3D
- less aligned with browser-native product stack

### Phaser
Claw3D includes Phaser, but Agentarium’s main world should not be Phaser-first.
Phaser is better for 2D systems or specific minigame-like interactions, not the core 3D world.

## Final Decision

### MVP Engine
**Three.js + React Three Fiber**

### Why
Because it gives the best tradeoff between:
- rendering quality
- browser-native delivery
- developer speed
- reuse from Claw3D patterns
- product flexibility

## Hunyuan’s Role
Hunyuan is **not** the engine.

Use Hunyuan for:
- room props
- artifact models
- decorative assets
- themed world drops
- visual collectibles

Do not use Hunyuan for:
- world logic
- agent orchestration
- runtime control
- scene state management
- interaction architecture

## Rule Of Thumb

If a choice improves:
- event-driven world clarity
- inspectability
- replayability
- iteration speed

it is probably good.

If a choice improves:
- rendering prestige
- engine complexity
- visual spectacle without product leverage

it is probably bait.
