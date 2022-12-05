import { Grid, IconButton, Toolbar, useMediaQuery } from "@mui/material";
import CustomButton from "../../utiles/CustomButton";
import t from "../../../public/locales/defualt/common.json";
import MenuIcon from "@mui/icons-material/Menu";

const NavBarDownMini = ({ list }) => {
  const isSmall = useMediaQuery("(max-width:420px)");
  return (
    <Toolbar sx={{ maxHeight: "50px", px: "15px" }}>
      <Grid container columns={12} sx={{ placeItems: "center" }}>
        <Grid item xs={6}>
          <IconButton>
            <MenuIcon fontSize={isSmall ? "medium" : "large"} color="info" />
          </IconButton>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="flex-end">
          <CustomButton
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
