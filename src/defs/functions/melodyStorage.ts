import { MELODY_STORAGE_KEY } from "../constants";

/**
 * Stores `melody` in localStorage and overwrites melodies that are already stored.
 * The melody can be retrieved using `getStoredMelody()`.
 * @param melody array of tones that will be stored
 */
export function storeMelody(melody: number[]): void {
  localStorage.setItem(MELODY_STORAGE_KEY, JSON.stringify(melody));
}

/**
 * @returns melody stored in localStorage or an empty array if there's nothing stored
 */
export function getStoredMelody(): number[] {
  const storedMelody = localStorage.getItem(MELODY_STORAGE_KEY);
  return storedMelody ?
    JSON.parse(storedMelody) :
    [];
}