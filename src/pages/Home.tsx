import { useState } from "react";
import { Button, Center, Box, Flex, Text, Space } from "@mantine/core";
import AboutPageButtion from "../components/AboutPageButton";
import StaircaseSvg from "../components/StaircaseSvg";
import TonalLadderSvg from "../components/TonalLadderSvg";
import CreditsFooter from "../components/CreditsFooter";
import { STAIRCASE_COLOR, TEXT_COLOR } from "../defs/constants";
import { getStoredSettings, getTonalLadder } from "../defs/functions/settingsStorage";
import { getActivePreset, getStoredSettingsPresets } from "../defs/functions/settingsPresetsStorage";
import { storeMelody, getStoredMelody } from "../defs/functions/melodyStorage";
import { generateMelody } from "../defs/generateMelody";
import "../styles/svg.css";

export default function Home() {
  const TONAL_LADDER = getTonalLadder();
  const TONAL_LADDER_STEP_WIDTH = 50;

  const SETTINGS = getStoredSettings();
  const [melody, setMelody] = useState<number[]>(getStoredMelody());

  return (
    <Flex 
      direction="column"
      h={"100vh"}
    >
      <AboutPageButtion />
      <Box className="svg-container">
        <Box className="staircase-container">
          <StaircaseSvg
            tonalLadder={TONAL_LADDER}
            helpLines={SETTINGS.helpLines}
            highlightedTones={SETTINGS.highlightedTones}
          />
        </Box>
        <Box className="tonal-ladder-container">
          <TonalLadderSvg
            tonalLadder={TONAL_LADDER}
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
