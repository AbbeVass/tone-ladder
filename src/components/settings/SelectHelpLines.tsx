import { Fieldset, Checkbox } from "@mantine/core";
import { TONAL_LADDER, STAIRCASE_COLOR, HELP_LINES } from "../../defs/constants";
import type { Settings } from "../../interfaces/Settings.interface";

export interface SelectHelpLinesProps {
  settings: Settings;
  setSettings: (settings: Settings) => void;
  getSettingsClone: () => Settings;
}

export default function SelectHelpLines({
  settings,
  setSettings,
  getSettingsClone
}: SelectHelpLinesProps) {
  return (
    <Fieldset
      w={200}
      legend="Hjälplinjer"
      variant="outline"
    >
      {HELP_LINES.map((tone_index) => {
        return (
          <Checkbox
            key={tone_index}
            size="md"
            color={STAIRCASE_COLOR}
            mt={5}
            ml={(tone_index - HELP_LINES[HELP_LINES.length - 1]) * 14}
            label={TONAL_LADDER[tone_index]}
            checked={settings.helpLines?.includes(tone_index)}
            onChange={(event) => {
              let _tempSettings = getSettingsClone();
              if (event.currentTarget.checked) {
                _tempSettings.helpLines = [...(_tempSettings.helpLines || []), tone_index];
              } else {
                _tempSettings.helpLines = (_tempSettings.helpLines || []).filter((tone) => tone !== tone_index);
              }
              setSettings(_tempSettings);
            }}
          />
        );
      })}
    </Fieldset>
  );
}