import { Fieldset, Slider } from "@mantine/core";
import type { Settings } from "../../interfaces/Settings.interface";

export interface SelectMaxToneDiffProps {
  settings: Settings;
  setSettings: (settings: Settings) => void;
  getSettingsClone: () => Settings;
  tonalLadder: (number | string)[];
}

export default function SelectMaxToneDiff({
  settings,
  setSettings,
  getSettingsClone,
  tonalLadder
}: SelectMaxToneDiffProps) {
  return (
    <Fieldset
      w={300}
      legend="Maximalt intervallsprång"
    >
      <Slider
        thumbSize={20}
        mb={10}
        min={1}
        max={tonalLadder.length - 1}
        step={1}
        marks={Array.from({ length: tonalLadder.length - 1 }, (_, i) => {
          const value = i + 1;
          return { value, label: value };
        })}
        value={settings.maxToneDiff}
        onChange={(value) => {
          let _tempSettings = getSettingsClone();
          _tempSettings.maxToneDiff = value;
          setSettings(_tempSettings);
        }}
      />
    </Fieldset>
  );
}