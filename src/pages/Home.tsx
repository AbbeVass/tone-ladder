import { useState } from "react";
import { Button, Center, Box, Flex, Text, Space, ActionIcon, Tooltip, Code } from "@mantine/core";
import { IoCodeDownloadOutline } from "react-icons/io5";
import "../styles/svg.css";
import { STAIRCASE_COLOR, TEXT_COLOR } from "../defs/constants";
import { getStoredSettings, storeMelody, getStoredMelody, getActivePreset, getStoredSettingsPresets, downloadStoredObjects } from "../defs/functions";
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
        <Space h={"md"}/>
        <Center>
          <Text
            size="xl"
          >
            {getActivePreset(getStoredSettingsPresets(), SETTINGS)}
          </Text>

          {/* Download button */}
          <Tooltip
            w={200}
            multiline
            withArrow
            label={
              <>
                Ladda ned debug-data från localStorage: {' '}
                <Code color={TEXT_COLOR}>
                  &#123;settings, melody, settingsPresets&#125;
                </Code>
              </>
            }
          >
            <a
              id="downloadAnchor"
              style={{
                position: "fixed",
                bottom: 20,
                right: 20
              }}
            >
              <ActionIcon
                size={"xl"}
                radius={"xl"}
                variant="outline"
                onClick={() => downloadStoredObjects("downloadAnchor")}
              >
                <IoCodeDownloadOutline size={"30"}/>
              </ActionIcon>
            </a>
          </Tooltip>
        </Center>
      </Box>
    </Flex>
  );
}
