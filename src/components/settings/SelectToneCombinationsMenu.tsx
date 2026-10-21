import { MultiSelect } from "@mantine/core";
import { getCombinationLabel } from "../../defs/functions/getCombinationsLabel";
import type { SelectToneCombinationsFieldProps } from "./SelectToneCombinationsField";
import type { SelectGroup } from "../../interfaces/SelectGroup.interface";

export interface SelectToneCombinationsMenuProps extends SelectToneCombinationsFieldProps {
  toneCombinations: number[][];
  combinationLength: number;
  label: string;
}

export default function SelectToneCombinationsMenu({
  settings,
  setSettings,
  getSettingsClone,
  tonalLadder,
  toneCombinations,
  combinationLength,
  label
}: SelectToneCombinationsMenuProps) {

  function formatSelectData(combinations: number[][]): SelectGroup[] {
    const groups: SelectGroup[] = [];
    for (let comb of combinations) {
      let group = groups.find(g => g.group === String(tonalLadder[comb[0]]));
      if (group) {
        group.items.push({
          label: getCombinationLabel(comb),
          value: comb.join(",")
        })
      } else {
        groups.push({
          group: String(tonalLadder[comb[0]]),
          items: [{
            label: getCombinationLabel(comb),
            value: comb.join(",")
          }]
        })
      }
    }
    return groups;
  }

  return (
    <MultiSelect 
      label={label}
      chevronColor="#C9C9C9"
      maxDropdownHeight={300}
      clearable
      withAlignedLabels
      data={formatSelectData(toneCombinations
          .filter(comb => comb.length === combinationLength)
        ).sort((a, b) => a.group.localeCompare(b.group))
        .map(group => ({
          ...group,
          items: group.items.sort((a, b) => a.label.localeCompare(b.label))
        }))
      }
      value={settings.toneCombinationsPool
        .filter(comb => comb.length === combinationLength)
        .map((combination) => {
          return combination.join(",");
      })}
      onChange={(value) => {
        let _tempSettings = getSettingsClone();
        _tempSettings.toneCombinationsPool = _tempSettings.toneCombinationsPool
          .filter(comb => comb.length !== combinationLength)
          .concat(value.map((v) => {
            return v.split(",").map(Number);
        }));
        setSettings(_tempSettings);
      }}
    />
  );
}