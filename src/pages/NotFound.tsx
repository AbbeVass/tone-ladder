import { Link } from "react-router-dom";
import { Flex, Title, Text } from "@mantine/core";
import { TEXT_COLOR } from "../defs/constants";

export default function NotFound() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap={20}
      m={50}
    >
      <Title c={TEXT_COLOR}>404 - Not Found</Title>
      <Link to="/tone-ladder/">
        <Text
          size="xl"
          c={TEXT_COLOR}
          td="underline"
        >
          Go back to Home
        </Text>
      </Link>
    </Flex>
  )
}
