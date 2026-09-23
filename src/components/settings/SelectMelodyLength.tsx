import { Fieldset, Slider, Space, Switch } from "@mantine/core";
import { STAIRCASE_COLOR, LENGTH_LIMITS } from "../../defs/constants";
import type { Settings } from "../../interfaces/Settings.interface";

export interface SelectMelodyLengthProps {
  settings: Settings;
  setSettings: (settings: Settings) => void;
  getSettingsClone: () => Settings;
}

export default function SelectMelodyLength({
  settings,
  setSettings,
  getSettingsClone
}: SelectMelodyLengthProps) {
  return (
    <Fieldset
      w={300}
      legend="Antal toner"
      variant="outline"
    >
      <Switch
        color={STAIRCASE_COLOR}
        label="Slumpmässigt"
        checked={settings.melodyLength.random}
        onChange={(event) => {
          let _tempSettings = getSettingsClone();
          _tempSettings.melodyLength.random = event.currentTarget.checked;
          setSettings(_tempSettings);
        }}
      />
      <Space h="lg" />
      <Slider 
        disabled={settings.melodyLength.random}
        thumbSize={20}
        mb={10}
        min={LENGTH_LIMITS.min}
        max={LENGTH_LIMITS.max}
        step={1}
        marks={Array.from({ length: LENGTH_LIMITS.max - LENGTH_LIMITS.min + 1 }, (_, i) => {
          const value = i + LENGTH_LIMITS.min;
          return { value, label: value };
        })}
        value={settings.melodyLength.length}
        onChange={(value) => {
          let _tempSettings = getSettingsClone();
          _tempSettings.melodyLength.length = value;
          setSettings(_tempSettings);
        }}
      />
    </Fieldset>
  );
}