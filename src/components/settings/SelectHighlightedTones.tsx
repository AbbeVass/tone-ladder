import { Button, Checkbox, Fieldset, Flex } from "@mantine/core";
import { HIGHLIGHT_COLOR, TONAL_LADDER } from "../../defs/constants";
import type { Settings } from "../../interfaces/Settings.interface";

export interface SelectHighlightedTonesProps {
  settings: Settings;
  setSettings: (settings: Settings) => void;
  getSettingsClone: () => Settings;
}

export default function SelectHighlightedTones({
  settings,
  setSettings,
  getSettingsClone
}: SelectHighlightedTonesProps) {
  return (
    <Fieldset
      legend="Färgade toner"
      variant="outline"
    >
      <Button
        size="sm"
        color="gray"
        mr={10}
        mb={10}
        onClick={() => {
          let _tempSettings = getSettingsClone();
          _tempSettings.highlightedTones = [...Array(TONAL_LADDER.length).keys()];
          setSettings(_tempSettings);
        }}
      >
        Markera alla
      </Button>
      <Button
        size="sm"
        color="gray"
        mb={10}
        onClick={() => {
          let _tempSettings = getSettingsClone();
          _tempSettings.highlightedTones = [];
          setSettings(_tempSettings);
        }}
      >
        Avmarkera alla
      </Button>
      <Flex
        gap={10}
      >
        {TONAL_LADDER.map((tone, tone_index) => {
          return (
            <Checkbox
              key={tone_index}
              className="highlight-tones"
              color={HIGHLIGHT_COLOR}
              label={tone}
              checked={settings.highlightedTones?.includes(tone_index)}
              onChange={(event) => {
                let _tempSettings = getSettingsClone();
                if (event.currentTarget.checked) {
                  _tempSettings.highlightedTones = [...(_tempSettings.highlightedTones || []), tone_index];
                } else {
                  _tempSettings.highlightedTones = (_tempSettings.highlightedTones || []).filter((tone) => tone !== tone_index);
                }
                setSettings(_tempSettings);
              }}
            />
          );
        })}
      </Flex>
    </Fieldset>
  );
}