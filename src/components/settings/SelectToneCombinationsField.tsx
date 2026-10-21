import { Fieldset, Space, Text, Button } from "@mantine/core";
import { TONE_COMBINATIONS } from "../../defs/toneCombinations";
import type { Settings } from "../../interfaces/Settings.interface";
import SelectToneCombinationsMenu from "./SelectToneCombinationsMenu";

export interface SelectToneCombinationsFieldProps {
  settings: Settings;
  setSettings: (settings: Settings) => void;
  getSettingsClone: () => Settings;
  tonalLadder: (number | string)[];
}

export default function SelectToneCombinationsField({
  settings,
  setSettings,
  getSettingsClone,
  tonalLadder
}: SelectToneCombinationsFieldProps) {
  return (
    <Fieldset
      w={600}
      legend="Tonkombinationer"
    >
      <Text
        size="md"
        mb={10}
      >
        Valda kombinationer kommer att användas för att skapa melodier.
      </Text>
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
      <SelectToneCombinationsMenu
        settings={settings}
        setSettings={setSettings}
        getSettingsClone={getSettingsClone}
        tonalLadder={tonalLadder}
        toneCombinations={TONE_COMBINATIONS}
        combinationLength={2}
        label="Tvåtonskombinationer"
      />
      <Space h="xs" />
      <SelectToneCombinationsMenu
        settings={settings}
        setSettings={setSettings}
        getSettingsClone={getSettingsClone}
        tonalLadder={tonalLadder}
        toneCombinations={TONE_COMBINATIONS}
        combinationLength={3}
        label="Tretonskombinationer"
      />
    </Fieldset>
  );
}