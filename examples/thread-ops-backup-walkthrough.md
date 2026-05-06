# Thread Ops Backup Map Walkthrough

This note is the quickest way to read the extra review model in `thread-ops-backup-map`.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | dry-run spread | 120 | watch |
| stress | rename risk | 118 | watch |
| edge | operator cost | 225 | ship |
| recovery | idempotence | 215 | ship |
| stale | dry-run spread | 175 | ship |

Start with `edge` and `stress`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

If `stress` becomes less cautious without a clear reason, I would inspect the drag input first.
