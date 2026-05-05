import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 88,
    "capacity": 81,
    "latency": 15,
    "risk": 5,
    "weight": 13,
    "score": 245,
    "decision": "accept"
  },
  {
    "name": "case_2",
    "demand": 69,
    "capacity": 107,
    "latency": 16,
    "risk": 15,
    "weight": 6,
    "score": 127,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 97,
    "capacity": 79,
    "latency": 11,
    "risk": 17,
    "weight": 4,
    "score": 151,
    "decision": "review"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
