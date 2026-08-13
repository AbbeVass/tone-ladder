import { useEffect, useState } from "react";
import { Center, Flex, Title, Fieldset, Switch, Slider, Space, MultiSelect, Button, NativeSelect, TextInput, Tooltip } from "@mantine/core";
import "../styles/Settings.css";
import type { Settings } from "../interfaces/Settings.interface";
import { TONAL_LADDER, LENGTH_LIMITS, TEXT_COLOR, CUSTOM_PRESET_LABEL } from "../defs/constants";
import { getStoredSettings, getActivePreset, storeSettings, getStoredSettingsPresets, storeSettingsPreset, getCombinationLabel } from "../defs/functions";
import { TONE_COMBINATIONS } from "../defs/toneCombinations";
import type { SettingsPreset } from "../interfaces/SettingsPreset.interface";

export default function Settings() {
  document.title += " - Inställningar";

  const [settings, setSettings] = useState<Settings>(getStoredSettings());
  const [settingsPresets, setSettingsPresets] = useState<SettingsPreset[]>(getStoredSettingsPresets());
  const [selectedPreset, setSelectedPreset] = useState<string>(getActivePreset(settingsPresets, settings));
  const [presetLabelInputValue, setPresetLabelInputValue] = useState<string>("");
  const [presetLabelInputError, setPresetLabelInputError] = useState<string>("");
  const [presetLabelInputSuccess, setPresetLabelInputSuccess] = useState<string>("");

  useEffect(() => {
    storeSettings(settings);
    setSelectedPreset(getActivePreset(settingsPresets, settings));
    setPresetLabelInputError("");
    setPresetLabelInputSuccess("");
  }, [settings]);

  /**
   * @returns a clone of the current settings object
   */
  function getSettingsClone(): Settings {
    return JSON.parse(JSON.stringify(settings));
  }

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
    <>
      <Center>
        <Title
          m={20}
        >
          Inställningar
        </Title>
      </Center>

      <Flex
        m={5}
        gap="xs"
        justify="center"
        wrap="wrap"
      >
        <Fieldset
          w={400}
          legend="Färdiga inställningar"
          variant="outline"
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
                       Inställningspaketet sparas endast på den här datorn i den här webbläsaren."
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
          <Space h={"sm"}/>
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

        <Fieldset
          w={300}
          legend="Första ton"
          variant="outline"
        >
          <Switch
            label="Slumpmässig"
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

        <Fieldset
          w={300}
          legend="Antal toner"
          variant="outline"
        >
          <Switch
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

        <Fieldset
          w={500}
          legend="Tonkombinationer"
          variant="outline"
        >
          <Button
            size="sm"
            color="gray"
            mb={10}
            onClick={() => {
              let _tempSettings = getSettingsClone();
              _tempSettings.toneCombinationsPool = TONE_COMBINATIONS;
              setSettings(_tempSettings);
            }}
          >
            Markera alla
          </Button>
          <MultiSelect 
            label="Valda kombinationer kommer att användas för att skapa melodier."
            chevronColor="var(--mantine-color-dark-0)"
            floatingHeight="viewport"
            clearable
            withAlignedLabels
            data={TONE_COMBINATIONS.map((combination) => {
                return {
                  value: combination.join(","),
                  label: getCombinationLabel(combination)
                };
              }).sort((a, b) => a.label.localeCompare(b.label))
            }
            value={settings.toneCombinationsPool.map((combination) => {
              return combination.join(",");
            })}
            onChange={(value) => {
              let _tempSettings = getSettingsClone();
              _tempSettings.toneCombinationsPool = value.map((v) => {
                return v.split(",").map(Number);
              });
              setSettings(_tempSettings);
            }}
          />
        </Fieldset>

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
      </Flex>

      <Center>
        <Button
          className="settings-back-button"
          m={20}
          size="lg"
          variant="outline"
          color={TEXT_COLOR}
          onClick={() => 
            window.location.href = "/tone-ladder"
          }
        >
          Tillbaka
        </Button>
      </Center>
    </>
  );
}