import { Fieldset, Slider } from "@mantine/core";
import { TONAL_LADDER } from "../../defs/constants";
import type { Settings } from "../../interfaces/Settings.interface";

export interface SelectMaxToneDiffProps {
  settings: Settings;
  setSettings: (settings: Settings) => void;
  getSettingsClone: () => Settings;
}

export default function SelectMaxToneDiff({
  settings,
  setSettings,
  getSettingsClone
}: SelectMaxToneDiffProps) {
  return (
    <Fieldset
      w={300}
      legend="Maximalt intervallsprång"
      variant="outline"
    >
      <Slider
        thumbSize={20}
        mb={10}
        min={1}
        max={TONAL_LADDER.length - 1}
        step={1}
        marks={Array.from({ length: TONAL_LADDER.length - 1 }, (_, i) => {
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