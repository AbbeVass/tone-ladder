import { useEffect, useState } from "react";
import { Button, Fieldset, Flex, Select } from "@mantine/core";
import { CUSTOM_PRESET_LABEL } from "../../defs/constants";
import { deleteSettingsPreset, getStoredSettingsPresets } from "../../defs/functions/settingsPresetsStorage";
import type { SettingsPreset } from "../../interfaces/SettingsPreset.interface";
import type { Settings } from "../../interfaces/Settings.interface";

export interface SelectPresetProps {
  settingsPresets: SettingsPreset[];
  selectedPreset: string;
  setSettings: (settings: Settings) => void;
  setSettingsPresets: (presets: SettingsPreset[]) => void;
  setSelectedPreset: (preset: string) => void;
}

export default function SelectPreset({
  settingsPresets,
  selectedPreset,
  setSettings,
  setSettingsPresets,
  setSelectedPreset
}: SelectPresetProps) {

  const [localPreset, setLocalPreset] = useState<boolean>(
    getStoredSettingsPresets(false)
      .map(set => set.label)
      .includes(selectedPreset)
  );

  useEffect(() => {
    setLocalPreset(getStoredSettingsPresets(false)
      .map(set => set.label)
      .includes(selectedPreset)
    );
  }, [selectedPreset]);

  return (
    <Fieldset
      legend="Färdiga inställningar"
    >
      <Select
        label="Välj ett inställningspaket"
        w={330}
        allowDeselect={false}
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
        onChange={(value) => {
          if (value && selectedPreset !== value) {
            setSelectedPreset(value);
            for (const set of settingsPresets) {
              if (set.label === value) {
                setSettings(set.settings);
                setLocalPreset(getStoredSettingsPresets(false).includes(set));
              }
            }
          }
        }}
      />
      
      {localPreset && (
        <Flex
          pt={10}
        >
          <Button
            size="xs"
            color="red"
            onClick={() => {
              if (confirm(`Är du säker på att du vill radera inställningspaketet "${selectedPreset}"?`) &&
                deleteSettingsPreset(selectedPreset))
              {
                setSelectedPreset(CUSTOM_PRESET_LABEL);
                setSettingsPresets(getStoredSettingsPresets());
                alert("Det valda inställningspaketet har raderats.");
              }
            }}
          >
            Radera lokalt paket
            </Button>
        </Flex>
      )}
    </Fieldset>
  );
}