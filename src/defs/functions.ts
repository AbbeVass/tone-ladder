import type { Settings } from "../interfaces/Settings.interface";
import { CUSTOM_PRESET_LABEL, SETTINGS_STORAGE_KEY } from "./constants";
import { SETTINGS_PRESETS } from "./settingsPresets";

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