import { Button, Center, Box, Flex } from "@mantine/core"
import StaircaseSvg from "../components/StaircaseSvg"
import ToneLadderSvg from "../components/ToneLadderSvg"
import { THICKNESS, STAIRCASE_SVG_WIDTH } from "../defs/constants"
import "../styles/Home.css"
import "../styles/svg.css"

function Home() {
  const EXAMPLE = [5, 3, 4, 7, 3, 0, 10, 9]
  const TONE_LADDER_STEP_WIDTH = 50

  const TONE_LADDER_SVG_WIDTH = EXAMPLE.length * TONE_LADDER_STEP_WIDTH + THICKNESS
  const TOTAL_WIDTH = STAIRCASE_SVG_WIDTH + TONE_LADDER_SVG_WIDTH
  const STAIRCASE_FLEX_BASIS = `${(STAIRCASE_SVG_WIDTH / TOTAL_WIDTH) * 100}%`
  const TONE_LADDER_FLEX_BASIS = `${(TONE_LADDER_SVG_WIDTH / TOTAL_WIDTH) * 100}%`

  return (
    <Flex 
      direction="column"
      className="home-container"
    >
      <Box className="svg-container">
        <Box className="staircase-container" style={{ flex: `0 1 ${STAIRCASE_FLEX_BASIS}` }}>
          <StaircaseSvg />
        </Box>
        <Box className="tone-ladder-container" style={{ flex: `0 1 ${TONE_LADDER_FLEX_BASIS}` }}>
          <ToneLadderSvg displayLadder={EXAMPLE} stepWidth={TONE_LADDER_STEP_WIDTH} />
        </Box>
      </Box>
      <Center>
        <Button
          size="lg"
          color="var(--mantine-color-lime-9)"
          className="generate-button"
        >
          Generera
        </Button>
      </Center>
    </Flex>
  )
}

export default Home