import { IconButton } from "@mui/material";
import Image from "next/image";
import leftIcon from "../../public/images/home/arrowLeft.svg";

function CustomLeftArrow({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "fixed",
        left: { lg: "-15%", md: "-11%" },
        // zIndex: 100,
      }}
    >
      <Image src={leftIcon} loading="lazy"/>
    </IconButton>
  );
}
export default CustomLeftArrow;
