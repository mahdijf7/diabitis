import { Box, Grid, Toolbar, Typography } from "@mui/material";
import CustomButton from "../../utiles/CustomButton";
import t from "../../../public/locales/defualt/common.json";
import { useRouter } from "next/router";
import Link from "next/link";

const NavBarDown = ({ maxWidth, list }) => {
  const router = useRouter();
  return (
    <Toolbar sx={{ maxHeight: "60px" }}>
      <Box width="100%" m="auto" maxWidth={maxWidth}>
        <Grid container columns={32} sx={{ placeItems: "center" }}>
          {list.map((el, index) => (
            <Link href={el.link} key={index}>
              <Grid
                sx={{ cursor: "pointer" }}
                item
                xs={el.col}
                textAlign="center"
              >
                <Typography
                  color="common.white"
                  component="h3"
                  sx={{ typography: { md: "subtitle3", lg: "subtitle1" } }}
                >
                  {el.label}
                </Typography>
              </Grid>
            </Link>
          ))}
          <Grid item xs={11} display="flex" justifyContent="flex-end">
            <CustomButton
              onClick={() => {
                router.push("/login");
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
