import { useState } from "react";
import { Button, Center, Box, Flex, Text, Space } from "@mantine/core";
import "../styles/Home.css";
import "../styles/svg.css";
import { TEXT_COLOR } from "../defs/constants";
import { getStoredSettings, storeMelody, getStoredMelody, getActivePreset } from "../defs/functions";
import { generateMelody } from "../defs/generateMelody";
import StaircaseSvg from "../components/StaircaseSvg";
import ToneLadderSvg from "../components/ToneLadderSvg";

export default function Home() {
  const TONE_LADDER_STEP_WIDTH = 50;

  const SETTINGS = getStoredSettings();
  const [melody, setMelody] = useState<number[]>(getStoredMelody());

  return (
    <Flex 
      direction="column"
      h={"100vh"}
    >
      <Box className="svg-container">
        <Box className="staircase-container">
          <StaircaseSvg />
        </Box>
        <Box className="tone-ladder-container">
          <ToneLadderSvg
            displayLadder={melody}
            stepWidth={TONE_LADDER_STEP_WIDTH}
          />
        </Box>
      </Box>
      
      <Box
        m={"3vh 3vw"}
      >
        <Center>
          <Flex
            wrap={"wrap"}
            gap={20}
            justify={"center"}
          >
            <Button
              size="lg"
              color="var(--mantine-color-lime-9)"
              onClick={() => {
                const melody = generateMelody(SETTINGS);
                setMelody(melody);
                storeMelody(melody);
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
        <Space h={"md"}/>
        <Center>
          <Text
            size="xl"
          >
            {getActivePreset(SETTINGS)}
          </Text>
        </Center>
      </Box>
    </Flex>
  );
}
