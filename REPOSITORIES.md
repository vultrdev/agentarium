# Agentarium Repository Topology

This project is intentionally split into a small, clean public repo set.

## Canonical repos

### 1. `agentarium`
**Purpose:** product code, app scaffolding, runtime adapters, contracts-in-code, contributor templates.

**Owns:**
- application code
- package structure
- local developer workflow
- issue templates for product work
- repo-level changelog for codebase evolution

### 2. `agentarium-docs`
**Purpose:** public architecture, product, spec, roadmap, contribution, media planning, and governance docs.

**Owns:**
- public specs
- product thesis
- architecture docs
- open-source governance docs
- media/demo planning docs

### 3. `agentarium-releases`
**Purpose:** public release notes, upgrade guides, migration notes, rollout history, and version communication.

**Owns:**
- public release notes
- upgrade checklists
- migration notes
- release templates
- release asset indexing

## Source of truth rules

- code truth lives in **agentarium**
- docs truth lives in **agentarium-docs**
- release communication truth lives in **agentarium-releases**

If the same information exists in multiple places, one of those places is wrong.
Keep ownership sharp.
