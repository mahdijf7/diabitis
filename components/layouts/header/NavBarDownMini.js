import { Grid, IconButton, Toolbar, useMediaQuery } from "@mui/material";
import CustomButton from "../../utiles/CustomButton";
import t from "../../../public/locales/defualt/common.json";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";

const NavBarDownMini = ({ handleOpen }) => {
  const isSmall = useMediaQuery("(max-width:420px)");
  const router = useRouter();
  return (
    <Toolbar sx={{ maxHeight: "50px", px: "15px" }}>
      <Grid container columns={12} sx={{ placeItems: "center" }}>
        <Grid item xs={6}>
          <IconButton onClick={handleOpen}>
            <MenuIcon fontSize={isSmall ? "medium" : "large"} color="info" />
          </IconButton>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="flex-end">
          <CustomButton
            onClick={() => {
              router.push("/login");
            }}
            text={t.header.test}
            font="mini"
            padd={{ xs: "5px 10px", sm: "5px 21px" }}
          />
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default NavBarDownMini;
