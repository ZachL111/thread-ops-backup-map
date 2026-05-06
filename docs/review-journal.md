# Review Journal

The repository goal stays the same: develop a JavaScript command-oriented project for backup scenarios with framed sample traffic, bounds and ordering tests, and fixture-scale datasets. This note explains the added review angle.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its automation focus without claiming live deployment or external usage.

## Cases

- `baseline`: `dry-run spread`, score 120, lane `watch`
- `stress`: `rename risk`, score 118, lane `watch`
- `edge`: `operator cost`, score 225, lane `ship`
- `recovery`: `idempotence`, score 215, lane `ship`
- `stale`: `dry-run spread`, score 175, lane `ship`

## Note

A future change should add new cases before it changes the scoring rule.
