import type { Settings } from "../../interfaces/Settings.interface";
import type { SettingsPreset } from "../../interfaces/SettingsPreset.interface";

/**
 * Checks whether an object is a Settings object
 * @param settings the object which to validate
 * @returns `true` if the object is of type `Settings` and `false` if it's not
 */
export function validSettingsObject(settings: Settings): boolean {
  return (settings
    && typeof settings === "object"
    && typeof settings.startTone === "object"
    && typeof settings.startTone?.random === "boolean"
    && typeof settings.startTone?.index === "number"
    && Array.isArray(settings.toneCombinationsPool)
    && typeof settings.melodyLength === "object"
    && typeof settings.melodyLength?.random === "boolean"
    && typeof settings.melodyLength?.length === "number"
    && typeof settings.maxToneDiff === "number"
  );
}

/**
 * Checks whether an object is a SettingsPreset object
 * @param preset the object which to validate
 * @returns `true` if the object is of type `SettingsPreset` and `false` if it's not
 */
export function validSettingsPresetObject(preset: SettingsPreset): boolean {
  return (preset
    && typeof preset === "object"
    && typeof preset.label === "string"
    && typeof preset.settings === "object"
    && validSettingsObject(preset.settings)
  );
}