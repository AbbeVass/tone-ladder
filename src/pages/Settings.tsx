import { useEffect, useState } from "react";
import { Center, Flex, Title, Button, Box } from "@mantine/core";
import SelectPreset from "../components/settings/SelectPreset";
import SelectHelpLines from "../components/settings/SelectHelpLines";
import SelectHighlightedTones from "../components/settings/SelectHighlightedTones";
import SelectStartTone from "../components/settings/SelectStartTone";
import SelectMelodyLength from "../components/settings/SelectMelodyLength";
import SelectToneCombinations from "../components/settings/SelectToneCombinations";
import SelectMaxToneDiff from "../components/settings/SelectMaxToneDiff";
import SaveSettings from "../components/settings/SaveSettings";
import CreditsFooter from "../components/CreditsFooter";
import ClearStorageButton from "../components/ClearStorageButton";
import DownloadDebugButton from "../components/DownloadDebugButton";
import { TEXT_COLOR } from "../defs/constants";
import { getStoredSettings, getActivePreset, storeSettings, getStoredSettingsPresets } from "../defs/functions";
import type { Settings } from "../interfaces/Settings.interface";
import type { SettingsPreset } from "../interfaces/SettingsPreset.interface";
import "../styles/Settings.css";

export default function Settings() {
  document.title = "Tonplatstrappa - Inställningar";

  const [settings, setSettings] = useState<Settings>(getStoredSettings());
  const [settingsPresets, setSettingsPresets] = useState<SettingsPreset[]>(getStoredSettingsPresets());
  const [selectedPreset, setSelectedPreset] = useState<string>(getActivePreset(settingsPresets, settings));

  useEffect(() => {
    storeSettings(settings);
    setSelectedPreset(getActivePreset(settingsPresets, settings));
  }, [settings]);

  /**
   * @returns a clone of the current settings object
   */
  function getSettingsClone(): Settings {
    return JSON.parse(JSON.stringify(settings));
  }

  return (
    <Flex 
      direction="column"
      justify="space-between"
      h={"100vh"}
    >
      <Box>
        <Center
          className="header"
        >
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
          <SelectPreset
            settingsPresets={settingsPresets}
            selectedPreset={selectedPreset}
            setSelectedPreset={setSelectedPreset}
            setSettings={setSettings}
          />

          <SelectHelpLines
            settings={settings}
            setSettings={setSettings}
            getSettingsClone={getSettingsClone}
          />

          <SelectHighlightedTones
            settings={settings}
            setSettings={setSettings}
            getSettingsClone={getSettingsClone}
          />

          <SelectStartTone
            settings={settings}
            setSettings={setSettings}
            getSettingsClone={getSettingsClone}
          />

          <SelectMelodyLength
            settings={settings}
            setSettings={setSettings}
            getSettingsClone={getSettingsClone}
          />

          <SelectToneCombinations
            settings={settings}
            setSettings={setSettings}
            getSettingsClone={getSettingsClone}
          />

          <SelectMaxToneDiff
            settings={settings}
            setSettings={setSettings}
            getSettingsClone={getSettingsClone}
          />

          <SaveSettings
            settings={settings}
            settingsPresets={settingsPresets}
            setSettingsPresets={setSettingsPresets}
          />
        </Flex>

        <Center>
          {/* Home page button */}
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
          
          <Flex
            gap={10}
            pos={"fixed"}
            bottom={20}
            right={20}
          >
            <DownloadDebugButton />
            <ClearStorageButton />
          </Flex>
        </Center>
      </Box>
      <CreditsFooter />
    </Flex>
  );
}