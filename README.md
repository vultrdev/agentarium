# Agentarium

**A spatial operating system for AI agents.**

Agentarium is not a dashboard with 3D wallpaper.
It is an event-driven world where agents can think, build, debate, inspect, and leave behind artifacts that matter.

## Why this exists

Most agent products disappear into:
- chat logs
- terminal scrollback
- dashboards with no spatial meaning
- one-shot outputs with no replay value

Agentarium makes agent work *legible* through:
- spatial semantics
- observable agent roles
- artifact-first workflows
- human approvals at the right moments
- replayable sessions that can become content

## Current status

This repository is the **main product repo** and canonical home for the codebase.
Right now it contains the bootstrap structure, contributor scaffolding, and links to the public docs/spec work.

## Repository map

- **Main code:** [`vultrdev/agentarium`](https://github.com/vultrdev/agentarium)
- **Public docs/specs:** [`vultrdev/agentarium-docs`](https://github.com/vultrdev/agentarium-docs)
- **Release notes / upgrade history:** [`vultrdev/agentarium-releases`](https://github.com/vultrdev/agentarium-releases)

See [`REPOSITORIES.md`](./REPOSITORIES.md) for ownership and source-of-truth rules.

## Product shape

**Core identity**
- spatial operating system for AI agents
- browser-first
- event-driven
- inspectable
- artifact-first
- replay-first

**MVP boundary**
- one world
- one main room (**Forge**)
- three visible agents
- one event pipeline
- one artifact system
- one replayable session timeline

## Planned architecture

```text
agentarium/
├── apps/
│   └── web/
├── packages/
│   └── contracts/
├── scripts/
├── docs/
└── .github/
```

The technical direction is intentionally simple:
- **Next.js + React + TypeScript**
- **Three.js / React Three Fiber** for the world
- normalized runtime events
- projected world state
- adapters for different agent runtimes

## Demo videos

Simulation videos are coming soon.

Planned media includes:
- Forge room walkthroughs
- scripted session replays
- agent collaboration clips
- approval flow demos
- artifact lifecycle showcases

Media planning lives in the docs repo so the public narrative stays tidy.

## Read first

- public docs index: [`agentarium-docs/docs/README.md`](https://github.com/vultrdev/agentarium-docs/blob/main/docs/README.md)
- product thesis: [`01-product-thesis.md`](https://github.com/vultrdev/agentarium-docs/blob/main/docs/01-product-thesis.md)
- world/runtime spec: [`02-world-runtime-spec.md`](https://github.com/vultrdev/agentarium-docs/blob/main/docs/02-world-runtime-spec.md)
- MVP implementation plan: [`03-mvp-implementation-plan.md`](https://github.com/vultrdev/agentarium-docs/blob/main/docs/03-mvp-implementation-plan.md)

## Contributing

We want contributors from day one, but not chaos from day one.

If you want to help:
1. read the docs repo first
2. respect the runtime/world/command contracts
3. keep changes scoped and legible
4. prefer extension over mutation
5. document architectural changes properly

Start with [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Changelog and releases

- human-readable changes live in [`CHANGELOG.md`](./CHANGELOG.md)
- canonical public release notes and upgrade guides live in **agentarium-releases**
- versioning follows **Semantic Versioning**
- changelog style follows **Keep a Changelog**

## License

MIT
