import type { Settings } from "../../interfaces/Settings.interface";
import type { SettingsPreset } from "../../interfaces/SettingsPreset.interface";
import { CUSTOM_PRESET_LABEL, SETTINGS_PRESETS_STORAGE_KEY } from "../constants";
import { SETTINGS_PRESETS } from "../settingsPresets";
import { validSettingsPresetObject } from "./validObjects";

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
 * Removes the preset with the label `presetLabel` from the stored presets.
 * @param presetLabel the label of the preset that will be deleted
 * @returns `true` if the preset was removed, `false` if no preset was found with a matching label
 */
export function deleteSettingsPreset(presetLabel: string): boolean {
  const storedPresets = localStorage.getItem(SETTINGS_PRESETS_STORAGE_KEY);
  if (storedPresets) {
    const presetArray = JSON.parse(storedPresets);
    if (Array.isArray(presetArray)) {
      const filteredArray = presetArray.filter(set => set.label !== presetLabel)
      if (filteredArray !== presetArray) {
        localStorage.setItem(SETTINGS_PRESETS_STORAGE_KEY, JSON.stringify(filteredArray));
        return true;
      }
    }
  }
  return false;
}

/**
 * Get all settings presets (settings packages)
 * @param includeGlobalPreset include the global presets
 * @returns all presets, both the local stored and the server stored
 */
export function getStoredSettingsPresets(includeGlobalPresets: boolean = true): SettingsPreset[] {
  let validPresets: SettingsPreset[] = [];
  const presetLabels = new Set(SETTINGS_PRESETS.map((preset) => preset.label));
  const storedPresets = localStorage.getItem(SETTINGS_PRESETS_STORAGE_KEY);
  if (storedPresets) {
    const presetArray = JSON.parse(storedPresets);
    if (Array.isArray(presetArray)) {
      for (const preset of presetArray) {
        if (validSettingsPresetObject(preset) && !presetLabels.has(preset.label)) {
          validPresets.push(preset);
          presetLabels.add(preset.label);
        }
      }

      // Clean up stored values if there's bad objects
      if (JSON.stringify(presetArray) !== JSON.stringify(validPresets)) {
        localStorage.setItem(SETTINGS_PRESETS_STORAGE_KEY, JSON.stringify(validPresets));
      }
    }
  }

  // Return all presets
  return includeGlobalPresets ? SETTINGS_PRESETS.concat(validPresets) : validPresets;
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