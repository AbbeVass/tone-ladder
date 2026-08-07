import { useState } from "react";
import { Center, Flex, Title, Fieldset, Switch, Slider, Space } from "@mantine/core";
import "../styles/Settings.css";
import type { Settings } from "../interfaces/Settings.interface";
import { SETTINGS_PRESETS } from "../defs/settingsPresets";
import { TONE_LADDER } from "../defs/constants";

export default function Settings() {
  document.title += " - Inställningar";

  const [settings, setSettings] = useState<Settings>({
    startTone: {
      random: false,
      index: 3
    },
    toneGroupPool: [[3, 4], [4, 3]],
    melodyLength: {
      random: false,
      number: 8
    },
    maxToneDiff: 4
  });

  return (
    <>
      <Center>
        <Title
          mt={20}
        >
          Inställningar
        </Title>
      </Center>
      <Flex>
        <Fieldset
          w={300}
          legend="Första ton"
          variant="filed"
          data-mantine-color-scheme="dark"
        >
          <Switch
            label="Slumpmässig"
            onChange={(event) => {
              let _tempSettings = {...settings};
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
            onChange={(value) => {
              let _tempSettings = {...settings};
              _tempSettings.startTone.index = value;
              setSettings(_tempSettings);
            }}
          />
        </Fieldset>
      </Flex>
    </>
  );
}