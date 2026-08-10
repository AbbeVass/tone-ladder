import type { Settings } from "../interfaces/Settings.interface";

/**
 * Generate a new melody from the rules set by `settings`.
 * @param settings 
 * @returns an array of indices on the tone ladder
 */
export function generateMelody(settings: Settings): number[] {
  return [0];
}