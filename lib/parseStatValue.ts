/**
 * Parses a stat value string like "15+", "250+", "10K+" into
 * { endValue, suffix } for the count-up animation.
 */
export function parseStatValue(value: string): {
  endValue: number;
  suffix: string;
} {
  // Match number at start, then everything else is suffix
  const match = value.match(/^(\d+)(.*)/);
  if (!match) return { endValue: 0, suffix: value };

  return {
    endValue: parseInt(match[1], 10),
    suffix: match[2], // e.g. "+", "K+", "%"
  };
}