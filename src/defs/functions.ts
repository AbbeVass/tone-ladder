import type { Settings } from "../interfaces/Settings.interface";
import type { SettingsPreset } from "../interfaces/SettingsPreset.interface";
import { CUSTOM_PRESET_LABEL, MELODY_STORAGE_KEY, SETTINGS_PRESETS_STORAGE_KEY, SETTINGS_STORAGE_KEY, TONAL_LADDER } from "./constants";
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

/**
 * Use an anchor element to download a json file with all data in localStorage
 * @param id the anchor element's id
 */
export function downloadStoredObjects(id: string) {
  const settingsData = localStorage.getItem(SETTINGS_STORAGE_KEY);
  const melodyData = localStorage.getItem(MELODY_STORAGE_KEY);
  const settingsPresetsData = localStorage.getItem(SETTINGS_PRESETS_STORAGE_KEY);

  const jsonData = {
    settings: settingsData ? JSON.parse(settingsData) : null,
    melody: melodyData ? JSON.parse(melodyData) : null,
    settingsPresets: settingsPresetsData ? JSON.parse(settingsPresetsData) : null
  };

  const date = new Date().toISOString().slice(0, 10);
  const prettyJson = JSON.stringify(jsonData, null, 2);

  const anchor = document.getElementById(id);
  if (anchor instanceof HTMLAnchorElement) {
    anchor.href = `data:application/json;charset=utf-8,${encodeURIComponent(prettyJson)}`;
    anchor.download = `tone-ladder-storage-data-${date}.json`;
  }
}