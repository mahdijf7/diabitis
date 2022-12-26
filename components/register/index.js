import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import SelectCustom from "../utiles/SelectCustom";
import t from "../../public/locales/defualt/common.json";
import Image from "next/image";
import registerPic from "../../public/images/register/registerPic.svg";

const Rgister = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "90%",
        mx: "auto",
        mt: "30px",
        pb: "10%",
        backgroundRepeat: "no-repeat !important",
        //   backgroundSize: "contain !important",
        background: "url(/images/register/bgpic.svg)",
      }}
    >
      <Box width="100%" maxWidth="1220px" mx="auto" pt="60px">
        <Box
          width="50%"
          justifyContent="center"
          bgcolor="common.white"
          minHeight={{lg:"366px",md:"330px"}}
          mr="2.5%"
          sx={{
            boxShadow: theme.customShadows.widget,
          }}
        >
          <Typography
            textAlign="center"
            pt="5%"
            pb="10%"
            typography={{ md: "h2", sm: "h4", xs: "subtitle" }}
          >
            {t.register.group}
          </Typography>
          <Box width="100%" display="flex" justifyContent="center">
            <SelectCustom noClass={true} />
          </Box>
        </Box>
        <Box
          width="50%"
          mr="47.5%"
          mt="-20%"
          display="flex"
          zIndex={-1}
          px="40px"
          justifyContent="center"
          position="relative"
          bgcolor="secondary.main"
          minHeight={{lg:"364px",md:"330px"}}
          sx={{
            boxShadow: theme.customShadows.widget,
          }}
        >
          <Image
            src={registerPic}
            alt=""
            // layout="responsive"
            // objectFit="contain"
            // style={{ marginTop: "20px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Rgister;
