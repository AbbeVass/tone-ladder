import { ActionIcon, Tooltip } from "@mantine/core";
import { MdOutlineDeleteForever } from "react-icons/md";


export default function ClearStorageButton() {
  return (
    <Tooltip
      withArrow
      label={"Radera lokalt sparad data"}
    >
      <ActionIcon
        size={"xl"}
        radius={"xl"}
        variant="outline"
        color="red"
        onClick={() => {
          // Confirm and clear local storage
          if (confirm("Är du säker på att du vill radera all sparad information?\nDetta inkluderar dina lokalt sparade inställningspaket.")) {
            localStorage.clear();
            location.reload();
            alert("All lokalt sparad data har raderats.");
          }
        }}
      >
        <MdOutlineDeleteForever size={"30"}/>
      </ActionIcon>
    </Tooltip>
  );
}