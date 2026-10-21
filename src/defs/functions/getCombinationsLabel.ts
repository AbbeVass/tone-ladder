import { getTonalLadder } from "./settingsStorage";

/**
 * Convert the tone indices of a combination to a string with all tones and arrows
 * in between that shows their relation to each other.
 * If it's a combination with 2 tones and both of the tones are either among the
 * 4 highest or 4 lowest on the tonal ladder, which are displayed with the same numbers,
 * then a mark clarifying their position on the ladder will be added to the end.
 * @param comb the tone combination to create a label for
 * @returns the label as a string
 */
export function getCombinationLabel(comb: number[]): string {
  const TONAL_LADDER = getTonalLadder();
  let label = TONAL_LADDER[comb[0]] as string;

  for (let i = 1; i < comb.length; i++) {

    // If the next tone is higher
    if (comb[i-1] < comb[i]) {
      label += " ↗ " + TONAL_LADDER[comb[i]];
    }

    // If the next tone is lower
    else if (comb[i-1] > comb[i]) {
      label += " ↘ " + TONAL_LADDER[comb[i]];
    }

    // If the next tone is the same
    else {
      label += " → " + TONAL_LADDER[comb[i]];
    }
  }
  
  // Mark 2-tone-combinaitons with "high" or "low" to distinguish combinations that
  // otherwise would have the same label
  if (comb.length === 2) {
    if (comb.filter((index) => {
      return index >= 7;
    }).length === 2) {
      label += " (hög)";
    }
    else if (comb.filter((index) => {
      return index <= 3;
    }).length === 2) {
      label += " (låg)";
    }
  }

  return label;
}