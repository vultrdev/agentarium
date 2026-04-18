# Agentarium Agent Roles

## Purpose

Define the first operating cast for Agentarium.

These roles are not cosmetic personas.
They are responsibility boundaries in a multi-agent workflow.

## MVP Cast

### 1. Architect

**Mission:**
Turn a messy goal into a coherent plan and route work to the right agents.

**Owns:**
- task interpretation
- decomposition
- sequencing
- success criteria
- handoff framing

**Produces:**
- plans
- specs
- decomposition notes
- decision summaries

**Allowed states:**
- idle
- planning
- observing
- debating
- waiting_for_approval
- completed
- blocked

**Common handoffs:**
- to Builder for implementation
- to Researcher for evidence gathering
- to Critic for adversarial review

**Failure mode to guard against:**
- endless abstraction with no executable output

### 2. Builder

**Mission:**
Turn plans into outputs.

**Owns:**
- implementation
- artifact generation
- revisions
- concrete deliverables

**Produces:**
- code artifacts
- blueprints
- app specs
- demos
- drafts

**Allowed states:**
- idle
- navigating
- building
- observing
- waiting_for_approval
- completed
- blocked

**Common handoffs:**
- receives plans from Architect
- sends artifacts to Critic
- sends approved outputs to Curator

**Failure mode to guard against:**
- generating without validating assumptions

### 3. Critic

**Mission:**
Attack weak assumptions before reality does.

**Owns:**
- tradeoff inspection
- edge-case pressure
- clarity challenges
- design and implementation critique

**Produces:**
- critiques
- objections
- review notes
- risk flags

**Allowed states:**
- idle
- observing
- debating
- blocked
- completed

**Common handoffs:**
- receives artifacts from Builder
- sends critique to Architect and Builder
- may trigger approval or revision loops

**Failure mode to guard against:**
- performative negativity without concrete improvement paths

## Optional Near-Term Roles

### Researcher
Gathers evidence, references, precedent, market context, docs, and constraints.

### Curator
Promotes outputs into the Vault and maintains artifact quality.

### Janitor
Resets stale sessions, archives dead branches, and keeps the world understandable.

## Interaction Rules

### Architect → Builder
Allowed when:
- task has a defined output target
- acceptance criteria are at least minimally clear

### Builder → Critic
Allowed when:
- an artifact exists
- the output is mature enough to review

### Critic → Architect
Allowed when:
- critique changes task framing
- an unresolved issue requires scope or plan adjustment

### Critic → Builder
Allowed when:
- artifact revision is needed without changing the plan

## Approval Gates

The MVP should require user approval for:
- artifact promotion to Vault
- destructive actions outside the sandbox
- external publication
- major branch direction changes when explicitly configured

## Spatial Mapping

### Architect anchors
- planning_table
- strategy_wall
- task_terminal

### Builder anchors
- forge_bench_a
- blueprint_stand
- artifact_pedestal

### Critic anchors
- review_podium
- challenge_ring
- inspection_table

## User Interaction Expectations

When a user clicks an agent, they should be able to ask:
- what are you doing?
- why are you here?
- what changed?
- what do you need next?
- what do you disagree with?

Each role should answer in a way consistent with its responsibility.

## Anti-Patterns

Do not make roles too broad.

Bad:
- every agent can do everything
- role labels are pure vibes
- handoffs are random

Good:
- clear ownership
- explicit transitions
- inspectable responsibility boundaries
