import type { Settings } from "../../interfaces/Settings.interface";
import { SETTINGS_STORAGE_KEY } from "../constants";
import { SETTINGS_PRESETS } from "../data/settingsPresets";
import { TONAL_LADDERS } from "../data/tonalLadders";
import { validSettingsObject } from "./validObjects";


/**
 * Stores `settings` in localStorage and overwrites settings that are already stored.
 * These settings can be retrieved using `getStoredSettings()`.
 * @param settings settings object that will be stored
 */
export function storeSettings(settings: Settings): void {
  localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
}

/**
 * @returns settings stored in localStorage or the first preset if there's nothing stored or if the settings are in an old format
 */
export function getStoredSettings(): Settings {
  const storedSettings = localStorage.getItem(SETTINGS_STORAGE_KEY);
  if (storedSettings) {
    const settingsObject = JSON.parse(storedSettings)
    if (validSettingsObject(settingsObject)) {
      return settingsObject as Settings;
    }
  }
  return SETTINGS_PRESETS[0].settings;
}

/**
 * @returns the tonal ladder that is stored in settings or the tonal ladder with numbers as default
 */
export function getTonalLadder(): (number | string)[] {
  const settings = getStoredSettings();
  return settings.tonalLadder ?? [...TONAL_LADDERS[0].value];
}