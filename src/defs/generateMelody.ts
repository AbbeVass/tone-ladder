import type { Settings } from "../interfaces/Settings.interface";
import { LENGTH_LIMITS, TONAL_LADDER } from "./constants";

/**
 * Generate a new melody from the rules set by `settings`.
 * @param settings 
 * @returns an array of indices on the tone ladder
 */
export function generateMelody(settings: Settings): number[] {
  let melody: number[] = [];

  // Set the melody length
  let melodyLenght = settings.melodyLength.random ?
    Math.floor(Math.random() * (LENGTH_LIMITS.max - LENGTH_LIMITS.min - 1) + LENGTH_LIMITS.min) :
    settings.melodyLength.length;

  // Set the start tone index
  let startTone = settings.startTone.random ?
    Math.floor(Math.random() * TONAL_LADDER.length) :
    settings.startTone.index;

  // Add combinations and tones until the melody is its set length
  for (let i = 0; melody.length < melodyLenght; i++) {
    const latestTone = melody[melody.length - 1];
    let possibleCombinationsPool = [];

    // Check which combinations are possible and add them to the pool
    for (const comb of settings.toneCombinationsPool) {

      // Ensure that every tone in the combination is on the tone
      // ladder, that the combination has more than 1 tone and
      // that each tone in the combination is within the maximum
      // range of the previous tone.
      if (comb.filter((tone) => {
          return tone >= 0 && tone < TONAL_LADDER.length;
        }).length === comb.length
        && comb.length > 1
        && comb.slice(1).filter((tone, i) => {
          return tone >= comb[i] - settings.maxToneDiff
              && tone <= comb[i] + settings.maxToneDiff;
        }).length === comb.length - 1
      ) {
        
        // Only add combinations to the pool that begins with the
        // start note if nothing's been added to the melody yet.
        // And make sure that it's not longer than the melody's
        // full length.
        if (melody.length === 0) {
          if (comb[0] === startTone && comb.length <= melodyLenght) {
            possibleCombinationsPool.push(comb);
          }
        } else {

          // Check if the first tone of the combination is within
          // the maximum range of the last tone and that the melody
          // doesn't become longer than its decided length.
          if ( comb[0] >= latestTone - settings.maxToneDiff
            && comb[0] <= latestTone + settings.maxToneDiff
            && melody.length + comb.length <= melodyLenght)
          {

            // Add the combination to the pool
            possibleCombinationsPool.push(comb);
          }
        }
      }
    }
    
    // Check if there are any possible combinations
    if (possibleCombinationsPool.length > 0) {

      // Randomly choose a combination from the pool and add it to the melody
      const randomIndex = Math.floor(Math.random() * possibleCombinationsPool.length);
      possibleCombinationsPool[randomIndex].forEach((tone) => {
        melody.push(tone);
      });
    } else {
      
      // If the melody is empty and no combinations begins with the start tone,
      // add only the start tone to start of the melody,
      if (melody.length === 0) {
        melody.push(startTone);
      } else {

        // If there aren't any possible combinations to add to the melody,
        // most likely because there's only one tone missing to make the
        // melody complete, then add a single tone within the maximium range
        // of the last tone.
        const min = Math.max(latestTone - settings.maxToneDiff, 0);
        const max = Math.min(latestTone + settings.maxToneDiff, TONAL_LADDER.length - 1);
        const randomTone = Math.floor(Math.random() * (max - min + 1)) + min;
        melody.push(randomTone);
      }
    }
  }

  return melody;
}