import CustomButton from "../../utiles/CustomButton";
import t from "../../../public/locales/defualt/common.json";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import Link from "next/link";

const NavBarUp = () => {
  return (
    <Grid container sx={{ placeItems: "center" }}>
      <Grid
        item
        md={6}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Link href="/">
          <Button>
            <Image src={logo} style={{ cursor: "pointer" }} />
          </Button>
        </Link>
        <Typography
          component="h1"
          sx={{ typography: { md: "body1", lg: "h5" }, mx: "10px" }}
          color="common.black"
        >
          {t.header.title}
        </Typography>
      </Grid>
      <Grid item md={6} display="flex" justifyContent="flex-end">
        <CustomButton text={t.header.test} />
      </Grid>
    </Grid>
  );
};

export default NavBarUp;
