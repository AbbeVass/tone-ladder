export interface Settings {
  startTone: {
    random: boolean;
    index: number;
  },
  toneCombinationsPool: number[][];
  melodyLength: {
    random: boolean;
    length: number;
  },
  maxToneDiff: number;
}
