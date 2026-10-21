import {
  MELODY_STORAGE_KEY,
  SETTINGS_PRESETS_STORAGE_KEY,
  SETTINGS_STORAGE_KEY
} from "../constants";

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