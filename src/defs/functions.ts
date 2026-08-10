import type { Settings } from "../interfaces/Settings.interface";
import { CUSTOM_PRESET_LABEL, MELODY_STORAGE_KEY, SETTINGS_STORAGE_KEY } from "./constants";
import { SETTINGS_PRESETS } from "./settingsPresets";

/**
 * Stores `settings` in localStorage and overwrites settings that are already stored.
 * These settings can be retrieved using `getStoredSettings()`.
 * @param settings settings object that will be stored
 */
export function storeSettings(settings: Settings): void {
  localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
}

/**
 * @returns settings stored in localStorage or the first preset if there's nothing stored
 */
export function getStoredSettings(): Settings {
  const storedSettings = localStorage.getItem(SETTINGS_STORAGE_KEY);
  return storedSettings ?
    JSON.parse(storedSettings) :
    SETTINGS_PRESETS[0].settings;
}

/**
 * Stores `melody` in localStorage and overwrites melodies that are already stored.
 * These settings can be retrieved using `getStoredMelody()`.
 * @param settings settings object that will be stored
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

/**
 * @param settings the settings object to campare the presets against
 * @returns the preset that matches `settings` or the `CUSTOM_PRESET_LABEL` if no preset match
 */
export function getActivePreset(settings: Settings): string {
  for (const set of SETTINGS_PRESETS) {
    if (JSON.stringify(settings) === JSON.stringify(set.settings)) {
      return set.label;
    }
  };
  return CUSTOM_PRESET_LABEL;
}