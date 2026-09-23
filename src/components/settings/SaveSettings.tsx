import { useEffect, useState } from "react";
import { Fieldset, Flex, TextInput, Button, Tooltip } from "@mantine/core";
import { CUSTOM_PRESET_LABEL } from "../../defs/constants";
import type { SettingsPreset } from "../../interfaces/SettingsPreset.interface";
import type { Settings } from "../../interfaces/Settings.interface";
import { getStoredSettingsPresets, storeSettingsPreset } from "../../defs/functions";

export interface SaveSettingsProps {
  settings: Settings;
  settingsPresets: SettingsPreset[];
  setSettingsPresets: (presets: SettingsPreset[]) => void;
}

export default function SaveSettings({
  settings,
  settingsPresets,
  setSettingsPresets
}: SaveSettingsProps) {

  const [presetLabelInputValue, setPresetLabelInputValue] = useState<string>("");
  const [presetLabelInputError, setPresetLabelInputError] = useState<string>("");
  const [presetLabelInputSuccess, setPresetLabelInputSuccess] = useState<string>("");

  useEffect(() => {
    setPresetLabelInputError("");
    setPresetLabelInputSuccess("");
  }, [settings]);

  /**
   * Stores the current settings and updates the settings presets array (`settingsPreset`)
   * if a unique label (name) is provided and the settings doesn't already exist as a preset.
   */
  function saveSettingsAsPreset(): void {

    // Check that the label input isn't empty
    if (!presetLabelInputValue) {
      setPresetLabelInputError("Paketet behöver ett namn");
    }

    // Check that the label isn't the label for custom settings
    else if (presetLabelInputValue === CUSTOM_PRESET_LABEL) {
      setPresetLabelInputError("Välj ett annat namn");
    }

    // Check that the new label is unique
    else if (settingsPresets.map((preset) => {
        return preset.label;
      }).includes(presetLabelInputValue)) {
      setPresetLabelInputError("Det finns redan ett paket med det här namnet");
    }

    // Check that the settings isn't already stored as a preset
    else if (settingsPresets.map((preset) => {
        return JSON.stringify(preset.settings);
      }).includes(JSON.stringify(settings))) {
      setPresetLabelInputError("De valda inställningarna finns redan sparade som ett paket");
    }

    // Store the settings as a new preset and update the loaded presets
    else {
      storeSettingsPreset({
        label: presetLabelInputValue,
        settings: settings
      });
      setSettingsPresets(getStoredSettingsPresets());
      setPresetLabelInputValue("");
      setPresetLabelInputSuccess(`Inställningarna är sparade som '${presetLabelInputValue}'`);
    }
  }
  
  return (
    <Fieldset
      legend="Spara inställningar"
      variant="outline"
      w={400}
    >
      <Flex
        gap={5}
      >
        <TextInput 
          label="Spara nuvarande inställningar som paket"
          placeholder="Paketnamn"
          value={presetLabelInputValue}
          error={presetLabelInputError}
          success={presetLabelInputSuccess}
          onChange={(event) => {
            setPresetLabelInputValue(event.currentTarget.value.trim());
            setPresetLabelInputError("");
            setPresetLabelInputSuccess("");
          }}
        />
        <Flex
          align={"end"}
        >
          <Tooltip
            label="Inställningarna sparas som ett nytt paket med det angivna namnet.
                   Inställningspaketet sparas endast på den här enheten i den här webbläsaren."
            multiline
            w={200}
          >
            <Button
              size="xs"
              color={"gray"}
              mb={3}
              onClick={() =>
                saveSettingsAsPreset()
              }
            >
              Spara
            </Button>
          </Tooltip>
        </Flex>
      </Flex>
    </Fieldset>
  );
}