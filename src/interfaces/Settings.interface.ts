export interface Settings {
  startTone: {
    random: boolean;
    index: number;
  },
  toneGroupPool: number[][];
  melodyLength: {
    random: boolean;
    number: number;
  }
  maxToneDiff: number;
}
