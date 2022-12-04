import CustomButton from "../../utiles/CustomButton";
import t from "../../../public/locales/defualt/common.json";
import { Button, Box, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const NavBarUpMini = () => {
  return (
    <Box display="flex" alignItems="center">
      <Link href="/">
        <IconButton>
          <Image
            src={"/images/logo.svg"}
            width="25px"
            height="25px"
            style={{ cursor: "pointer" }}
            loading="lazy"
          />
        </IconButton>
      </Link>
      <Typography
        component="h1"
        sx={{
          typography: { xs: "subtitle6", sm: "subtitle5" },
          mx: { sm: "10px", xs: "0px" },
        }}
        color="common.black"
      >
        {t.header.title}
      </Typography>
    </Box>
  );
};

export default NavBarUpMini;
