import { Flex, Image, Text } from "@mantine/core";
import github_icon from "../assets/GitHub_Invertocat_White.svg";

export default function GitHubButton() {
  return (
    <Flex
      className="github-button"
      justify="space-around"
      align="center"
      bg="black"
    >
      <Image
        className="github-icon"
        src={github_icon}
        alt="GitHub"
      />
      <Text
        className="github-text"
        m="md"
        size="lg"
        c="white"
      >
        Tone Ladder på GitHub
      </Text>
    </Flex>
  );
}