import { Button, Center, Box, Flex } from "@mantine/core"
import StaircaseSvg from "../components/StaircaseSvg"
import "../styles/Home.css"

function Home() {
  return (
    <Flex 
      direction="column"
      className="home-container"
    >
      <Box className="svg-container">
        <StaircaseSvg />
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