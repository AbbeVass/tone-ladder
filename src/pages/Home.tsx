import { Button, Center, Box, Flex } from "@mantine/core";
import StaircaseSvg from "../components/StaircaseSvg";
import ToneLadderSvg from "../components/ToneLadderSvg";
import "../styles/Home.css";
import "../styles/svg.css";

export default function Home() {
  const EXAMPLE = [5, 3, 4, 7, 3, 0, 10, 9];
  const TONE_LADDER_STEP_WIDTH = 50;

  return (
    <Flex 
      direction="column"
      className="home-container"
    >
      <Box className="svg-container">
        <Box className="staircase-container">
          <StaircaseSvg />
        </Box>
        <Box className="tone-ladder-container">
          <ToneLadderSvg displayLadder={EXAMPLE} stepWidth={TONE_LADDER_STEP_WIDTH} />
        </Box>
      </Box>
      
      <Center>
        <Box className="button-container">
          <Button
            size="lg"
            color="var(--mantine-color-lime-9)"
          >
            Ny melodi
          </Button>
          <Button
            size="lg"
            onClick={() => window.location.href = "/tone-ladder/settings"}
          >
            Inställningar
          </Button>
        </Box>
      </Center>
    </Flex>
  );
}
