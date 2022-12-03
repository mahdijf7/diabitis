import {
  Box,
  Button,
  Container,
  useMediaQuery,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import t from "../../public/locales/defualt/common.json";
import device from "../../public/images/home/device.png";
import dubleArrow from "../../public/images/home/more.svg";
import Link from "next/link";
import style from "../../styles/Home.module.scss";

const DeviceMini = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmall = useMediaQuery("(max-width:500px)");

  return (
    <Container
      disableGutters
      maxWidth={false}
      className={style.diabetContainer}
    >
      <Box width="90%" m="auto">
        <Box
          zIndex={1000}
          display="grid"
          bgcolor="common.white"
          className={style.diabetBox}
          sx={{
            boxShadow: theme.customShadows.widget,
          }}
        >
          <Box
            position="relative"
            display="flex"
            bgcolor="secondary.main"
            sx={{
              borderRadius: "2px",
              width: { sm: "35%", xs: "55%" },
              height: { xs: "45px", lg: "65px" },
              justifyContent: "center",
              justifySelf: "center",
              alignItems: "center",
              mt: { lg: "-90px", xs: "-60px" },
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              color="common.white"
              sx={{
                typography: { xs: "subtitle3", sm: "body2" },
              }}
            >
              {t.home.deviceTitle}
            </Typography>
          </Box>
          <Typography
            component="h1"
            color="text.secondary"
            textAlign="justify"
            sx={{
              typography: { xs: "subtitle6", sm: "subtitle5" },
            }}
          >
            {t.home.deviceDes1}
          </Typography>
          <Typography
            component="h1"
            color="text.secondary"
            textAlign="justify"
            sx={{
              typography: { xs: "subtitle6", sm: "subtitle5" },
            }}
          >
            {t.home.deviceDes2}
          </Typography>
          <Box display="flex" justifyContent="end" alignItems="center" mt={2}>
            <Link href="/#">
              <Typography
                sx={{
                  cursor: "pointer" ,
                  typography: { xs: "subtitle6", sm: "subtitle5" },
                }}
                component="h1"
                color="text.secondary"
              >
                {t.home.moreText}
              </Typography>
            </Link>
            <Link href="/#">
              <IconButton
                sx={{
                  p: 0,
                  // minWidth: "30px",
                  maxWidth:{xs:"15px",sm:"25px"},
                  "&:hover": { backgroundColor: "common.white" },
                }}
              >
                <Image src={dubleArrow} />
              </IconButton>
            </Link>
          </Box>
        </Box>
        <Box position="relative" mt={{tiny:"-10%", xs:"0px"}} zIndex="-1">
          <Image
            src={"/images/home/device.png"}
            width="900px"
            height={isSmall ? "500px" : isMatch ? "430px" : "325px"}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default DeviceMini;
