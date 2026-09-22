export const TONAL_LADDER: (number | string)[] = [5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1];
//export const TONAL_LADDER: (number | string)[] = ["E", "F", "G", "A", "B", "C", "D", "E", "F", "G", "A"];

export const LENGTH_LIMITS = {
  min: 4,
  max: 15
};

export const TEXT_COLOR = "#f1f3f5"; // --mantine-color-gray-1
export const STAIRCASE_COLOR = "#5c940d"; // --mantine-color-lime-9
export const HIGHLIGHT_COLOR = "#f06595"; // --mantine-color-pink-5

// Local storage keys
export const SETTINGS_STORAGE_KEY = "settings";
export const SETTINGS_PRESETS_STORAGE_KEY = "settingsPresets";
export const MELODY_STORAGE_KEY = "melody";

export const CUSTOM_PRESET_LABEL = "Anpassad";

// Staircase SVG
export const STAIRCASE_STEP_WIDTH = 20;
export const STEP_HEIGHT = 30;
export const THICKNESS = 2;
export const GAP = 6;
export const STAIRCASE_SVG_WIDTH = TONAL_LADDER.length * STAIRCASE_STEP_WIDTH + THICKNESS;
export const SVG_HEIGHT = TONAL_LADDER.length * STEP_HEIGHT + THICKNESS;

export const HELP_LINES = [7, 5, 3];