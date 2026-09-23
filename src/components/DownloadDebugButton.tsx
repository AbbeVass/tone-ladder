import { Tooltip, Code, ActionIcon } from "@mantine/core";
import { IoCodeDownloadOutline } from "react-icons/io5";
import { TEXT_COLOR } from "../defs/constants";
import { downloadStoredObjects } from "../defs/functions";


export default function DownloadDebugButton() {
  return (
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
      >
        <ActionIcon
          size={"xl"}
          radius={"xl"}
          variant="outline"
          color="cyan"
          onClick={() => downloadStoredObjects("downloadAnchor")}
        >
          <IoCodeDownloadOutline size={"30"}/>
        </ActionIcon>
      </a>
    </Tooltip>
  );
}