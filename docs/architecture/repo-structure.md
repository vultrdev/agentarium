# Agentarium Proposed Repo Structure

## Purpose

Define a clean MVP code layout before implementation starts.

## Recommendation

Use a browser-first monorepo or single app structure that keeps runtime contracts separate from presentation.

## Proposed Layout

```text
agentarium/
├── apps/
│   └── web/
│       ├── src/
│       │   ├── app/
│       │   ├── components/
│       │   ├── features/
│       │   │   ├── forge/
│       │   │   ├── world/
│       │   │   ├── replay/
│       │   │   ├── artifacts/
│       │   │   └── approvals/
│       │   ├── lib/
│       │   │   ├── runtime/
│       │   │   ├── state/
│       │   │   ├── contracts/
│       │   │   └── scene/
│       │   └── styles/
│       └── public/
├── docs/
├── packages/
│   └── contracts/
│       ├── runtime-events.ts
│       ├── world-state.ts
│       └── commands.ts
└── scripts/
```

## Structure Rules

### `packages/contracts`
Owns shared types and schemas.

### `features/world`
Owns world projection and room behavior.

### `features/forge`
Owns the MVP room UX.

### `features/replay`
Owns playback logic and replay UI.

### `lib/runtime`
Owns adapter client, websocket connection, and command transport.

### `lib/state`
Owns reducers, stores, and selectors.

### `lib/scene`
Owns pure rendering helpers and semantic anchor mapping.

## Anti-Patterns

Bad:
- putting all world logic in one scene file
- mixing runtime protocol definitions with UI widgets
- mixing generated Hunyuan assets with core contracts

Good:
- contracts separate from rendering
- world state separate from scene objects
- replay separate from live runtime connection logic
