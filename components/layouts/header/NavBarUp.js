import CustomButton from "../../utiles/CustomButton";
import t from "../../../public/locales/defualt/common.json";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
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
          <IconButton>
            <Image
              src={"/images/logo.svg"}
              width="41px"
              height="42px"
              style={{ cursor: "pointer" }}
              loading="lazy"
            />
          </IconButton>
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
