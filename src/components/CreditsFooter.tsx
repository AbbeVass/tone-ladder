import { Flex, Text } from "@mantine/core";
import { TEXT_COLOR } from "../defs/constants";

export default function CreditsFooter() {
  return (
    <Flex
      direction="column"
      align="center"
      gap={2}
      mb={"1vh"}
    >
      <Text
        size="xs"
        ta={"center"}
      >
        © {new Date().getFullYear()} <a
          style={{ color: TEXT_COLOR }}
          href="https://github.com/abbevass"
          target="_blank"
        >
          Abbe Andersson Vass
        </a>
      </Text>
      <Text
        size="xs"
        ta={"center"}
      >
        Gjord i sammarbete med Anna Andersson Vass
      </Text>
      <Text
        size="xs"
        ta={"center"}
      >
        <a
          style={{ color: TEXT_COLOR }}
          href="https://www.buymeacoffee.com/abbevass"
          target="_blank"
        >
          Stötta utvecklingen av Tone Ladder 🔗
        </a>
      </Text>
    </Flex>
  );
}