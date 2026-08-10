import type { Settings } from "../interfaces/Settings.interface";
import { TONE_COMBINATIONS } from "./toneCombinations";

export const SETTINGS_PRESETS: {
  label: string,
  settings: Settings
}[] = [
  {
    label: "Test",
    settings: {
      startTone: {
        random: false,
        index: 3
      },
      toneCombinationsPool: [TONE_COMBINATIONS[0], TONE_COMBINATIONS[2]],
      melodyLength: {
        random: false,
        length: 8
      },
      maxToneDiff: 4
    }
  },
  {
    label: "Test2",
    settings: {
      startTone: {
        random: true,
        index: 0
      },
      toneCombinationsPool: [TONE_COMBINATIONS[1], TONE_COMBINATIONS[2]],
      melodyLength: {
        random: false,
        length: 12
      },
      maxToneDiff: 7
    }
  }
];