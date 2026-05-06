# thread-ops-backup-map

`thread-ops-backup-map` keeps a focused JavaScript implementation around automation. The project goal is to develop a JavaScript command-oriented project for backup scenarios with framed sample traffic, bounds and ordering tests, and fixture-scale datasets.

## Why I Keep It Small

I want this repository to be useful as a quick reading exercise: fixtures first, implementation second, verifier last.

## Thread Ops Backup Map Review Notes

For a quick review, compare `operator cost` with `rename risk` before reading the middle cases.

## Included Behavior

- `fixtures/domain_review.csv` adds cases for dry-run spread and rename risk.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/thread-ops-backup-walkthrough.md` walks through the case spread.
- The JavaScript code includes a review path for `operator cost` and `rename risk`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Internal Model

The repository has two validation layers: the original compact policy fixture and the domain review fixture. They are separate so one can change without hiding failures in the other.

The JavaScript addition stays small enough to inspect in one sitting.

## Try It Locally

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Validation

The verifier is intentionally local. It should fail if the fixture score math, lane assignment, or language-specific test drifts.

## Scope

No external service is required. A deeper version would add more negative cases and a clearer boundary around invalid input.
