import { Button } from "@mui/material";
import Image from "next/image";
import rightIcon from "../../public/images/home/arrowRight.svg";

function CustomRightArrow({ onClick, isMatch }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        position: "fixed",
        marginLeft: { lg: isMatch ? "108%" : "106%", md: "102%" },
        zIndex: 100,
      }}
    >
      <Image src={rightIcon} />
    </Button>
  );
}
export default CustomRightArrow;
