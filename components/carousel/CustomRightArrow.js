import { Button } from "@mui/material";
import Image from "next/image";
import rightIcon from "../../public/images/home/arrowRight.svg";

function CustomRightArrow({ onClick }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        position: "fixed",
        marginLeft: { lg: "106%", md: "100.5%" },
        zIndex: 100,
      }}
    >
      <Image src={rightIcon} />
    </Button>
  );
}
export default CustomRightArrow;
