import { useState } from "react";
import { Center, Flex, Title, Fieldset, Switch, Slider, Space } from "@mantine/core";
import "../styles/Settings.css";
import type { Settings } from "../interfaces/Settings.interface";
import { SETTINGS_PRESETS } from "../defs/settingsPresets";
import { TONE_LADDER } from "../defs/constants";

export default function Settings() {
  document.title += " - Inställningar";

  //const [settings, setSettings] = useState<Settings>({});

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
        >
          <Switch
            label="Slumpmässig"
            
            /*onChange={(event) => {
              settings.startTone.random = event.currentTarget.checked
            }}*/
          />
          <Space h="lg" />
          <Slider 
            //disabled={settings.startTone.random}
            thumbSize={20}
            color="blue"
          />
        </Fieldset>
      </Flex>
    </>
  );
}