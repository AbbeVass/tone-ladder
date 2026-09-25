import { Fieldset, MultiSelect, Space, Text, Button } from "@mantine/core";
import { TONE_COMBINATIONS } from "../../defs/toneCombinations";
import { getCombinationLabel } from "../../defs/functions";
import type { Settings } from "../../interfaces/Settings.interface";

export interface SelectToneCombinationsProps {
  settings: Settings;
  setSettings: (settings: Settings) => void;
  getSettingsClone: () => Settings;
}

export default function SelectToneCombinations({
  settings,
  setSettings,
  getSettingsClone
}: SelectToneCombinationsProps) {
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
      <MultiSelect 
        label="Tvåtonskombinationer"
        chevronColor="#C9C9C9"
        floatingHeight="viewport"
        clearable
        withAlignedLabels
        data={TONE_COMBINATIONS.filter(comb => comb.length == 2).map((combination) => {
            return {
              value: combination.join(","),
              label: getCombinationLabel(combination)
            };
          }).sort((a, b) => a.label.localeCompare(b.label))
        }
        value={settings.toneCombinationsPool.filter(comb => comb.length == 2).map((combination) => {
          return combination.join(",");
        })}
        onChange={(value) => {
          let _tempSettings = getSettingsClone();
          _tempSettings.toneCombinationsPool = _tempSettings.toneCombinationsPool
            .filter(comb => comb.length > 2)
            .concat(value.map((v) => {
              return v.split(",").map(Number);
          }));
          setSettings(_tempSettings);
        }}
      />
      <Space h="xs" />
      <MultiSelect 
        label="Tretonskombinationer"
        chevronColor="#C9C9C9"
        floatingHeight="viewport"
        clearable
        withAlignedLabels
        data={TONE_COMBINATIONS.filter(comb => comb.length > 2).map((combination) => {
            return {
              value: combination.join(","),
              label: getCombinationLabel(combination)
            };
          }).sort((a, b) => a.label.localeCompare(b.label))
        }
        value={settings.toneCombinationsPool.filter(comb => comb.length > 2).map((combination) => {
          return combination.join(",");
        })}
        onChange={(value) => {
          let _tempSettings = getSettingsClone();
          _tempSettings.toneCombinationsPool = _tempSettings.toneCombinationsPool
            .filter(comb => comb.length == 2)
            .concat(value.map((v) => {
              return v.split(",").map(Number);
          }));
          setSettings(_tempSettings);
        }}
      />
    </Fieldset>
  );
}