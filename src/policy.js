export const threshold = 182;
const riskPenalty = 6;
const latencyPenalty = 4;
const weightBonus = 6;

export function score(signal) {
  return signal.demand * 2 + signal.capacity + signal.weight * weightBonus
    - signal.latency * latencyPenalty - signal.risk * riskPenalty;
}

export function classify(signal) {
  return score(signal) >= threshold ? "accept" : "review";
}
