import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 46, slack: 27, drag: 21, confidence: 64 };
assert.equal(domainReviewScore(item), 120);
assert.equal(domainReviewLane(item), "watch");
