import { Flex, Box, Center, Text, Title, Button } from "@mantine/core";
import CreditsFooter from "../components/CreditsFooter";
import { TEXT_COLOR } from "../defs/constants";

export default function AboutScales() {
  return (
    <Flex 
      direction="column"
      justify="space-between"
      h={"100vh"}
    >
      <Box m={30}>
        <Center mt="xl">
          <Flex
            direction="column"
            gap="sm"
            w={750}
          >
            <Title order={2}>Skalor</Title>
            <Text size="lg">Dur (halva tonsteg mellan 3-4 och 7-1)</Text>
            <Text size="lg">Ren moll (halva tonsteg mellan 2-3 och 5-6)</Text>
            <Text size="lg">Harmonisk moll - (högt sjunde steg)</Text>
            <Text size="lg">Melodisk moll - (hög 6:e och 7:e steg uppåt, ev. återställda på nervägen)</Text>
            <Title order={2} mt="md">Modala skalor/kyrkotonarter:</Title>
            <Text size="lg">Lydisk (dur, hög 4:e steg)</Text>
            <Text size="lg">Jonisk (dur)</Text>
            <Text size="lg">Mixolydisk (dur, lågt 7:e steg)</Text>
            <Text size="lg">Dorisk (moll, högt 6:e steg)</Text>
            <Text size="lg">Eoliskt (ren moll)</Text>
            <Text size="lg">Frygisk (moll, lågt 2:a steg)</Text>
          </Flex>
        </Center>
        <Center m="md">
          <Button
            className="about-back-button"
            m={20}
            size="lg"
            variant="outline"
            color={TEXT_COLOR}
            onClick={() => 
              window.location.href = "/tone-ladder/about"
            }
          >
            Tillbaka
          </Button>
        </Center>
      </Box>
      <CreditsFooter />
    </Flex>
  );
}