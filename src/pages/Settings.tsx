import { useEffect, useState } from "react";
import { Center, Flex, Title, Fieldset, Switch, Slider, Space, MultiSelect, Button, NativeSelect } from "@mantine/core";
import "../styles/Settings.css";
import type { Settings } from "../interfaces/Settings.interface";
import { TONE_LADDER, LENGTH_LIMITS, TEXT_COLOR, CUSTOM_PRESET_LABEL } from "../defs/constants";
import { getStoredSettings, getActivePreset, storeSettings } from "../defs/functions";
import { TONE_COMBINATIONS } from "../defs/toneCombinations";
import { SETTINGS_PRESETS } from "../defs/settingsPresets";

export default function Settings() {
  document.title += " - Inställningar";

  const [settings, setSettings] = useState<Settings>(getStoredSettings());
  const [selectedPreset, setSelectedPreset] = useState<string>(getActivePreset(settings));

  useEffect(() => {
    storeSettings(settings);
    setSelectedPreset(getActivePreset(settings));
  }, [settings]);

  /**
   * @returns a clone of the current settings object
   */
  function getSettingsClone(): Settings {
    return JSON.parse(JSON.stringify(settings));
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
          w={300}
          legend="Färdiga inställningar"
          variant="outline"
        >
          <NativeSelect
            id="settingsPresetSelect"
            data={SETTINGS_PRESETS.map((set) => {
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
                for (const set of SETTINGS_PRESETS) {
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
            max={TONE_LADDER.length - 1}
            step={1}
            label={(value) => TONE_LADDER[value]}
            marks={TONE_LADDER.map((tone, i) => {
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
                label: combination.map((index) => {
                  return TONE_LADDER[index]
                  }).join(" - ")
              };
            })}
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
          legend="Maximal tonskillnad"
          variant="outline"
        >
          <Slider
            thumbSize={20}
            mb={10}
            min={1}
            max={TONE_LADDER.length - 1}
            step={1}
            marks={Array.from({ length: TONE_LADDER.length - 1 }, (_, i) => {
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