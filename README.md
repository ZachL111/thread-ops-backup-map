# thread-ops-backup-map

`thread-ops-backup-map` treats automation as a local verification problem. The JavaScript implementation is intentionally narrow, but the fixtures and notes make the behavior explicit.

## Thread Ops Backup Map Checkpoints

Treat the compact fixture as the contract and the extended examples as a scratchpad. The code should stay boring enough that a change in behavior is obvious from the test output.

## What This Is For

The repository exists to keep a technical idea small enough to reason about. The implementation avoids external dependencies where possible, then uses fixtures to make changes easy to review.

## Case Study

The extended cases are not random smoke tests. `degraded` keeps pressure on the review path, while `recovery` shows the model when capacity and weight are strong enough to clear the threshold.

## Architecture Notes

The core is a scoring model over demand, capacity, latency, risk, and weight. That keeps dry-run output, file plans, and safety rails in one explicit decision path. The threshold is 182, with risk penalty 6, latency penalty 4, and weight bonus 6. The JavaScript version uses native modules and a small Node test path.

## Useful Pieces

- Models dry-run output with deterministic scoring and explicit review decisions.
- Uses fixture data to keep file plans changes visible in code review.
- Includes extended examples for safety rails, including `recovery` and `degraded`.
- Documents idempotent checks tradeoffs in `docs/operations.md`.
- Runs locally with a single verification command and no external credentials.

## Local Workflow

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

This runs the language-level build or test path against the compact fixture set.

## Quality Gate

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/audit.ps1
```

The audit command checks repository structure and README constraints before it delegates to the verifier.

## Project Layout

- `src`: primary implementation
- `tests`: verification harness
- `fixtures`: compact golden scenarios
- `examples`: expanded scenario set
- `metadata`: project constants and verification metadata
- `docs`: operations and extension notes
- `scripts`: local verification and audit commands
- `package.json`: Node package scripts

## Expansion Ideas

- Add a comparison mode that shows how decisions change when one signal is adjusted.
- Add a loader for `examples/extended_cases.csv` and promote selected cases into the language test suite.
- Add a short report command that prints the score breakdown for a single scenario.
- Add one more automation fixture that focuses on a malformed or borderline input.

## Scope

The repository favors determinism over breadth. It does not pull live data, keep secrets, or depend on network access for verification.

## Tooling

Install JavaScript and run the commands from the repository root. The project does not need credentials or a hosted service.
