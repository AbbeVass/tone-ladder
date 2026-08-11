import type { Settings } from "../interfaces/Settings.interface";
import type { SettingsPreset } from "../interfaces/SettingsPreset.interface";
import { CUSTOM_PRESET_LABEL, MELODY_STORAGE_KEY, SETTINGS_PRESETS_STORAGE_KEY, SETTINGS_STORAGE_KEY } from "./constants";
import { SETTINGS_PRESETS } from "./settingsPresets";

/**
 * Checks whether an object is a Settings object
 * @param settings the object which to validate
 * @returns `true` if the object is of type `Settings` and `false` if it's not
 */
export function validSettingsObject(settings: Settings): boolean {
  if (settings
    && typeof settings === "object"
    && typeof settings.startTone === "object"
    && typeof settings.startTone?.random === "boolean"
    && typeof settings.startTone?.index === "number"
    && Array.isArray(settings.toneCombinationsPool)
    && typeof settings.melodyLength === "object"
    && typeof settings.melodyLength?.random === "boolean"
    && typeof settings.melodyLength?.length === "number"
    && typeof settings.maxToneDiff === "number")
  {
    return true;
  } else {
    return false;
  }
}

/**
 * Checks whether an object is a SettingsPreset object
 * @param preset the object which to validate
 * @returns `true` if the object is of type `SettingsPreset` and `false` if it's not
 */
export function validSettingsPresetObject(preset: SettingsPreset): boolean {
  if (preset
    && typeof preset === "object"
    && typeof preset.label === "string"
    && typeof preset.settings === "object"
    && validSettingsObject(preset.settings))
  {
    return true;
  } else {
    return false;
  }
}


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

/**
 * Stores `preset` together with other already stored settings presets in localStorage.
 * The presets can be retrieved using `getStoredSettingsPresets()`.
 * @param preset the settings preset to store
 */
export function storeSettingsPreset(preset: SettingsPreset): void {
  const storedPresets = localStorage.getItem(SETTINGS_PRESETS_STORAGE_KEY);
  if (storedPresets)  {
    const presetArray = JSON.parse(storedPresets);
    if (Array.isArray(presetArray)) {
      localStorage.setItem(SETTINGS_PRESETS_STORAGE_KEY, JSON.stringify(presetArray.concat(preset)));
    }
  } else {

    // If no presets have been stored yet
    localStorage.setItem(SETTINGS_PRESETS_STORAGE_KEY, JSON.stringify([preset]));
  }
}

/**
 * Get all settings presets (settings packages)
 * @returns all presets, both the local stored and the server stored
 */
export function getStoredSettingsPresets(): SettingsPreset[] {
  let validPresets: SettingsPreset[] = [];
  const storedPresets = localStorage.getItem(SETTINGS_PRESETS_STORAGE_KEY);
  if (storedPresets) {
    const presetArray = JSON.parse(storedPresets);
    if (Array.isArray(presetArray)) {
      for (const preset of presetArray) {
        if (validSettingsPresetObject(preset)) {
          validPresets.push(preset);
        }
      }

      // Clean up stored values if there's bad objects
      if (JSON.stringify(presetArray) !== JSON.stringify(validPresets)) {
        localStorage.setItem(SETTINGS_PRESETS_STORAGE_KEY, JSON.stringify(validPresets));
      }
    }
  }

  // Return all presets
  return SETTINGS_PRESETS.concat(validPresets);
}

/**
 * @param presets an array of settings presets to campare the settings against
 * @param settings the settings object to campare the presets against
 * @returns the preset that matches `settings` or the `CUSTOM_PRESET_LABEL` if no preset match
 */
export function getActivePreset(presets: SettingsPreset[], settings: Settings): string {
  for (const set of presets) {
    if (JSON.stringify(settings) === JSON.stringify(set.settings)) {
      return set.label;
    }
  };
  return CUSTOM_PRESET_LABEL;
}