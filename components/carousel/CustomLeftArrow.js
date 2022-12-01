import { IconButton } from "@mui/material";
import Image from "next/image";
import leftIcon from "../../public/images/home/arrowLeft.svg";

function CustomLeftArrow({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "fixed",
        marginLeft: { lg: "-15%", md: "-8%" },
        zIndex: 100,
      }}
    >
      <Image src={leftIcon} />
    </IconButton>
  );
}
export default CustomLeftArrow;
