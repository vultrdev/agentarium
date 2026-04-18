# Release Coordination

This file explains how the three Agentarium repos stay in sync.

## Rule of thumb

- if code changed, update **agentarium**
- if public understanding changed, update **agentarium-docs**
- if release or upgrade communication changed, update **agentarium-releases**

## Minimum shipping flow

1. land the code change in `agentarium`
2. update `CHANGELOG.md` in `agentarium`
3. update public docs in `agentarium-docs` if architecture, product shape, or usage understanding changed
4. write or update release notes / upgrade guide in `agentarium-releases`
5. publish the GitHub release from `agentarium`
6. link the release note and upgrade guide from the GitHub release body

## Session-end hygiene

Before ending a session, use the `github-etiquette` skill.
