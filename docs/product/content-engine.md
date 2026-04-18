# Agentarium Content Engine

## Purpose

Agentarium should naturally generate content from real work instead of forcing content as a separate process.

## Core Principle

The best content should fall out of:
- real sessions
- real debates
- real builds
- real artifacts
- real replays

Not staged fake moments.

## Core Content Types

### 1. Session Highlights
Short clips or summaries from meaningful moments.

### 2. Build Stories
Idea → plan → critique → artifact.

### 3. Patch Notes
What changed in Agentarium itself.

### 4. Room Drops
New room mechanics, themes, props, archetypes.

### 5. Agent Character Moments
Memorable interactions where a role behaves distinctly and usefully.

## Content Pipeline

1. Session emits bookmarks
2. Replay system marks candidate moments
3. Curator or user selects moments
4. System generates summary + clip plan
5. Optional public-safe render/export path produces final content asset

## Required Metadata for Content Candidates
- session id
- event ids
- room id
- involved agent ids
- artifact ids
- public-safety visibility tag
- suggested title
- suggested summary

## Recurring Content Loops

### Weekly
- best debate of the week
- best artifact of the week
- biggest architecture argument won

### Per release
- patch notes from replay/bookmark synthesis
- new room walkthrough
- new agent archetype reveal

### Ambient
- “live in the Forge” moments
- timelapse sessions
- before/after artifact comparisons

## Anti-Patterns

Bad:
- fabricating fake agent drama
- spamming every session as content
- exporting moments with no explanatory framing

Good:
- selective curation
- real utility moments
- clear narrative framing
- teachable clips

## MVP Content Goal

From any completed session, the system should be able to produce:
- one short summary
- one replay bookmark set
- one candidate highlight clip plan

That is enough to prove the content loop.
