# Contributing to Agentarium

Thanks for wanting to improve Agentarium.

## First rule

Do not treat this like a random 3D sandbox.

Agentarium is a spatial operating system for AI agents. Changes should improve at least one of these:
- observability
- control
- artifact quality
- replayability
- extensibility

## Before you build anything

Read these first:
- docs index: `docs/README.md`
- canonical public docs: `https://github.com/vultrdev/agentarium-docs`
- product thesis
- runtime event contract
- world state contract
- command contract

## Contribution principles

- **Utility beats spectacle**
- **World state must reflect real state**
- **Artifacts matter more than chat**
- **Replay is a feature, not an afterthought**
- **Extension beats mutation**

## Good contributions

- room systems with clear semantics
- runtime adapters with honest capability declarations
- artifact/replay UX improvements
- scoped architecture fixes
- docs that reduce contributor confusion

## Bad contributions

- giant scene rewrites for style points
- hardcoding one runtime into the whole product
- visual effects with no runtime meaning
- undocumented contract changes

## Pull request checklist

Before opening a PR:
- update docs if behavior changed
- update `CHANGELOG.md` under `Unreleased`
- link any relevant issue
- explain tradeoffs, not just the happy path
- keep scope small enough to review sanely

## Branch naming

Use one of:
- `feat/...`
- `fix/...`
- `docs/...`
- `refactor/...`
- `chore/...`

## Commit style

Prefer clear conventional-ish commits:
- `feat: add forge room shell`
- `fix: correct event projector edge case`
- `docs: clarify adapter contract`

## Review philosophy

A contribution is strong if it makes Agentarium more:
- understandable
- useful
- extensible
- replayable

If it mainly makes it flashier, it probably needs another pass.
