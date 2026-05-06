# Field Notes

The useful part of this repository is the small rule set around dry-run spread and operator cost.

The domain cases cover `dry-run spread`, `rename risk`, `operator cost`, and `idempotence`. They sit beside the smaller starter fixture so the project has both a compact scoring check and a domain-flavored review check.

`edge` is the strongest case at 225 on `operator cost`. `stress` is the cautious anchor at 118 on `rename risk`.

The extra check gives the repository a behavior path that can fail for a domain reason, not only a syntax reason.
