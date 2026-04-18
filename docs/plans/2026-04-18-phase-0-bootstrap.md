# Agentarium Phase 0 Bootstrap Plan

> For Hermes: use the `github-etiquette` skill before concluding follow-up repo work.

## Goal

Turn the empty bootstrap repo into a real monorepo shell that can host the first browser-first Forge prototype.

## Scope in this pass

- npm workspace root
- `apps/web` Next.js app shell
- `packages/contracts` shared contracts package
- React Three Fiber Forge viewport placeholder
- links to docs and release process

## Out of scope in this pass

- runtime websocket integration
- reducers/projector implementation
- replay engine
- production visuals
- auth/deployment

## Verification

- `npm install`
- `npm run typecheck`
- `npm run build`
