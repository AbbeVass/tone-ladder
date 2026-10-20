import { Fieldset, Select } from "@mantine/core";
import type { Settings } from "../../interfaces/Settings.interface";
import { TONAL_LADDERS, type TonalLadder } from "../../defs/tonal_ladders";

export interface SelectKeyProps {
  setSettings: (settings: Settings) => void;
  getSettingsClone: () => Settings;
  tonalLadder: (number | string)[];
}

interface Item {
  label: string;
  value: string;
}

interface Group {
  group: string;
  items: Item[];
}

export default function SelectKey({
  setSettings,
  getSettingsClone,
  tonalLadder
}: SelectKeyProps) {

  function formatSelectData(data: TonalLadder[]): Group[] {
    if (data.length === 0) return [];

    const groups: Group[] = [
      {
        group: "", // No divider
        items: [{ label: data[0].label, value: JSON.stringify(data[0].value) }]
      }
    ];

    for (let i = 1; i < data.length; i += 2) {
      const items: Item[] = data.slice(i, i + 2).map((item) => ({
        label: item.label,
        value: JSON.stringify(item.value),
      }));

      groups.push({
        group: " ", // Divider
        items,
      });
    }

    return groups;
  }

  return (
    <Fieldset
      w={300}
      legend="Tonart"
    >
      <Select
        label="Välj tonart för tonstegstrappan"
        allowDeselect={false}
        data={formatSelectData(TONAL_LADDERS)}
        value={JSON.stringify(tonalLadder)}
        onChange={(value) => {
          if (value) {
            let _tempSettings = getSettingsClone();
            _tempSettings.tonalLadder = JSON.parse(value)
            setSettings(_tempSettings);
          }
        }}
      />
    </Fieldset>
  );
}