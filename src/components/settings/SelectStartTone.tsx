import { Fieldset, Slider, Space, Switch } from "@mantine/core";
import { STAIRCASE_COLOR, TONAL_LADDER } from "../../defs/constants";
import type { Settings } from "../../interfaces/Settings.interface";

export interface SelectStartToneProps {
  settings: Settings;
  setSettings: (settings: Settings) => void;
  getSettingsClone: () => Settings;
}

export default function SelectStartTone({
  settings,
  setSettings,
  getSettingsClone
}: SelectStartToneProps) {
  return (
    <Fieldset
      w={300}
      legend="Första ton"
      variant="outline"
    >
      <Switch
        color={STAIRCASE_COLOR}
        label="Slumpmässig första tonkombination"
        checked={settings.startTone.random}
        onChange={(event) => {
          let _tempSettings = getSettingsClone();
          _tempSettings.startTone.random = event.currentTarget.checked;
          setSettings(_tempSettings);
        }}
      />
      <Space h="lg" />
      <Slider 
        disabled={settings.startTone.random}
        thumbSize={20}
        mb={10}
        min={0}
        max={TONAL_LADDER.length - 1}
        step={1}
        label={(value) => TONAL_LADDER[value]}
        marks={TONAL_LADDER.map((tone, i) => {
          return {value: i, label: tone};
        })}
        value={settings.startTone.index}
        onChange={(value) => {
          let _tempSettings = getSettingsClone();
          _tempSettings.startTone.index = value;
          setSettings(_tempSettings);
        }}
      />
    </Fieldset>
  );
}