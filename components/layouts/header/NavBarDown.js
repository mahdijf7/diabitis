import { Box, Grid, Toolbar, Typography } from "@mui/material";
import CustomButton from "../../utiles/CustomButton";
import t from "../../../public/locales/defualt/common.json";
import { useRouter } from "next/router";

const NavBarDown = ({ maxWidth, list }) => {
  const router = useRouter();
  return (
    <Toolbar sx={{ maxHeight: "60px" }}>
      <Box width="100%" m="auto" maxWidth={maxWidth}>
        <Grid container columns={32} sx={{ placeItems: "center" }}>
          {list.map((el, index) => (
            <Grid key={index} item xs={el.col} textAlign="center">
              <Typography
                color="common.white"
                component="h3"
                sx={{ typography: { md: "subtitle3", lg: "subtitle1" } }}
              >
                {el.label}
              </Typography>
            </Grid>
          ))}
          <Grid item xs={14} display="flex" justifyContent="flex-end">
            <CustomButton
              onClick={() => {
                // router.push("/login");
                router.push("/");
              }}
              text={t.header.test}
            />
          </Grid>
        </Grid>
      </Box>
    </Toolbar>
  );
};

export default NavBarDown;
