import { Box, Grid, Toolbar, Typography } from "@mui/material";
import CustomButton from "../../utiles/CustomButton";
import t from "../../../public/locales/defualt/common.json";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

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
          <Grid
            item
            xs={14}
            display="flex"
            justifyContent="flex-end"
            >
            <CustomButton
              mx={{lg:"20px", xs:"8px"}}
              width="160px"
              onClick={() => {
                router.push("/register");
              }}
              text={
                <Box display="flex" alignItems="center">
                  <Box ml="10px" mt="6px">
                    <Image
                      src={"/images/home/addUser.svg"}
                      width="20px"
                      height="20px"
                      loading="lazy"
                    />
                  </Box>
                  {t.header.memberShip}
                </Box>
              }
            />
            <CustomButton
              width="160px"
              padd="0px"
              onClick={() => {
                router.push("/login");
              }}
              text={
                <Box display="flex" alignItems="center">
                  <Box ml="10px" mt="6px">
                    <Image
                      src={"/images/home/joinUser.svg"}
                      width="20px"
                      height="20px"
                      loading="lazy"
                    />
                  </Box>
                  {t.header.login}
                </Box>
              }
            />
          </Grid>
        </Grid>
      </Box>
    </Toolbar>
  );
};

export default NavBarDown;
