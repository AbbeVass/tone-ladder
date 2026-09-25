import { Fieldset, NativeSelect } from "@mantine/core";
import { CUSTOM_PRESET_LABEL } from "../../defs/constants";
import type { SettingsPreset } from "../../interfaces/SettingsPreset.interface";
import type { Settings } from "../../interfaces/Settings.interface";

export interface SelectPresetProps {
  settingsPresets: SettingsPreset[];
  selectedPreset: string;
  setSelectedPreset: (preset: string) => void;
  setSettings: (settings: Settings) => void;
}

export default function SelectPreset({
  settingsPresets,
  selectedPreset,
  setSelectedPreset,
  setSettings
}: SelectPresetProps) {
  return (
    <Fieldset
      w={300}
      legend="Färdiga inställningar"
    >
      <NativeSelect
        label="Välj ett inställningspaket"
        data={settingsPresets.map((set) => {
            return {
              label: set.label,
              value: set.label,
              disabled: false
            };
          }).concat([{
            label: CUSTOM_PRESET_LABEL,
            value: CUSTOM_PRESET_LABEL,
            disabled: true
          }])
        }
        value={selectedPreset}
        onChange={(event) => {
          const value = event.currentTarget.value;
          if (selectedPreset !== value) {
            setSelectedPreset(value);
            for (const set of settingsPresets) {
              if (set.label === value) {
                setSettings(set.settings);
              }
            }
          }
        }}
      />
    </Fieldset>
  );
}