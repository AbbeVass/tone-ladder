export const TONE_LADDER = [5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1];

export const LENGTH_LIMITS = {
  min: 4,
  max: 15
};

export const TEXT_COLOR = getComputedStyle(document.documentElement)
  .getPropertyValue('--mantine-color-gray-1');

export const SETTINGS_STORAGE_KEY = "settings";

export const CUSTOM_PRESET_LABEL = "Anpassad";

// Staircase SVG
export const STAIRCASE_STEP_WIDTH = 20;
export const STEP_HEIGHT = 30;
export const THICKNESS = 3;
export const GAP = 3.5;
export const STAIRCASE_SVG_WIDTH = TONE_LADDER.length * STAIRCASE_STEP_WIDTH + THICKNESS;
export const SVG_HEIGHT = TONE_LADDER.length * STEP_HEIGHT + THICKNESS;