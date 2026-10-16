import { ActionIcon } from "@mantine/core";
import { RiInformation2Line } from "react-icons/ri";
import { TEXT_COLOR } from "../defs/constants";

export default function AboutPageButtion() {
  return (
    <a
      href="/tone-ladder/about"
    >
      <ActionIcon
        size={"xl"}
        radius={"xl"}
        variant={"subtle"}
        color={TEXT_COLOR}
        pos={"fixed"}
        top={20}
        left={20}
      >
        <RiInformation2Line size={"50"}/>
      </ActionIcon>
    </a>
  );
}