# Security Policy

## Reporting a vulnerability

Do **not** open a public issue for security-sensitive bugs.

For now, report security issues privately to the maintainers with:
- affected area
- impact
- reproduction steps
- proposed fix if you have one

Until a dedicated security channel is published, treat any auth, secret, signing, wallet, or remote-execution bug as sensitive by default.

## Scope to treat as high risk

- auth and session handling
- runtime adapters with command execution
- artifact import/export pipelines
- replay data containing secrets
- deployment and release workflows
