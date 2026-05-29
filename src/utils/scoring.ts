import type { RadarStatus } from "../types/lego";

export function getRadarStatus(score: number): RadarStatus {
  if (score >= 80) return "koopwaardig";
  if (score >= 65) return "volgen";
  return "wachten";
}
