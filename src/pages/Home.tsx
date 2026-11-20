import { useState } from "react";
import { Button, Center, Box, Flex, Text, Space } from "@mantine/core";
import { useToggle } from '@mantine/hooks';
import AboutPageButtion from "../components/AboutPageButton";
import StaircaseSvg from "../components/StaircaseSvg";
import TonalLadderSvg from "../components/TonalLadderSvg";
import CreditsFooter from "../components/CreditsFooter";
import { HIGHLIGHT_COLOR, STAIRCASE_COLOR, TEXT_COLOR } from "../defs/constants";
import { TONAL_LADDERS } from "../defs/data/tonalLadders";
import { getStoredSettings, getTonalLadder, getOverrideKey, storeOverrideKey } from "../defs/functions/settingsStorage";
import { getActivePreset, getStoredSettingsPresets } from "../defs/functions/settingsPresetsStorage";
import { storeMelody, getStoredMelody } from "../defs/functions/melodyStorage";
import { generateMelody } from "../defs/functions/generateMelody";
import "../styles/svg.css";

export default function Home() {
  const TONAL_LADDER = getTonalLadder();
  const TONAL_LADDER_STEP_WIDTH = 50;

  const SETTINGS = getStoredSettings();
  const [melody, setMelody] = useState<number[]>(getStoredMelody());
  const [overrideKey, toggleOverrideKey] = useToggle([getOverrideKey(), !getOverrideKey()]);

  return (
    <Flex 
      direction="column"
      h={"100vh"}
    >
      <AboutPageButtion />
      <Box className="svg-container">
        <Box className="staircase-container">
          <StaircaseSvg
            tonalLadder={overrideKey ? TONAL_LADDERS[0].value : TONAL_LADDER}
            helpLines={SETTINGS.helpLines}
            highlightedTones={SETTINGS.highlightedTones}
          />
        </Box>
        <Box className="tonal-ladder-container">
          <TonalLadderSvg
            tonalLadder={overrideKey ? TONAL_LADDERS[0].value : TONAL_LADDER}
            displayLadder={melody}
            stepWidth={TONAL_LADDER_STEP_WIDTH}
            helpLines={SETTINGS.helpLines}
            highlightedTones={SETTINGS.highlightedTones}
          />
        </Box>
      </Box>
      
      <Box
        m={"1vh 3vw"}
      >
        <Center>
          <Flex
            wrap={"wrap"}
            gap={20}
            justify={"center"}
            align={"center"}
          >
            <Button
              size="lg"
              color={STAIRCASE_COLOR}
              onClick={() => {
                const newMelody = generateMelody(SETTINGS);
                setMelody(newMelody);
                storeMelody(newMelody);
              }}
            >
              Ny melodi
            </Button>

            <Button
              size="lg"
              variant="outline"
              color={TEXT_COLOR}
              onClick={() => 
                window.location.href = "/tone-ladder/settings"
              }
            >
              Inställningar
            </Button>
            
            {JSON.stringify(TONAL_LADDER) !== JSON.stringify(TONAL_LADDERS[0].value) && (
              <Button
                size="lg"
                color={overrideKey ? HIGHLIGHT_COLOR : "#495057"}
                style={overrideKey ? undefined : {
                  border: 1,
                  borderStyle: "solid",
                  borderColor: TEXT_COLOR
                }}
                onClick={() => {
                  storeOverrideKey(!overrideKey);
                  toggleOverrideKey();
                }}
              >
                {overrideKey
                  ? "Byt till " + 
                    TONAL_LADDERS.find((ladder) => 
                      JSON.stringify(ladder.value) === JSON.stringify(TONAL_LADDER)
                    )?.label
                  : "Byt till siffror"}
              </Button>
            )}
          </Flex>
        </Center>
        <Space h={"sm"}/>
        <Center>
          <Text
            size="xl"
            ta={"center"}
          >
            {getActivePreset(getStoredSettingsPresets(), SETTINGS)}
          </Text>
        </Center>
      </Box>
      <CreditsFooter />
    </Flex>
  );
}
