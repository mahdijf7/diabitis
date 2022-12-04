import {
  Box,
  Button,
  Container,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import t from "../../public/locales/defualt/common.json";
import device from "../../public/images/home/device.png";
import dubleArrow from "../../public/images/home/more.svg";
import Link from "next/link";
import style from "../../styles/Home.module.scss";

const Device = () => {
  const theme = useTheme();

  return (
    <Container
      disableGutters
      maxWidth={false}
      className={style.diabetContainer}
    >
      <Box display="flex" maxWidth="1400px" width="90%" m="auto">
        <Box
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
              width: "214px",
              height: { xs: "45px", lg: "65px" },
              justifyContent: "center",
              justifySelf: "center",
              alignItems: "center",
              mt: { lg: "-75px", xs: "-61px" },
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              color="common.white"
              sx={{
                typography: { md: "subtitle1", lg: "h4" },
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
              typography: { md: "subtitle4", lg: "subtitle1" },
            }}
          >
            {t.home.deviceDes1}
          </Typography>
          <Typography
            component="h1"
            color="text.secondary"
            textAlign="justify"
            sx={{
              typography: { md: "subtitle4", lg: "subtitle1" },
            }}
          >
            {t.home.deviceDes2}
          </Typography>
          <Box display="flex" justifyContent="end" alignItems="center" mt={2}>
            <Link href="/#">
              <Typography
                variant="subtitle5"
                component="h1"
                color="text.secondary"
                sx={{ cursor: "pointer" }}
              >
                {t.home.moreText}
              </Typography>
            </Link>
            <Link href="/#">
              <Button
                sx={{
                  p: 0,
                  minWidth: "30px",
                  "&:hover": { backgroundColor: "common.white" },
                }}
              >
                <Image src={dubleArrow} loading="lazy" />
              </Button>
            </Link>
          </Box>
        </Box>
        <Box position="absolute" sx={{ left: "4%", width: "50%" }}>
          <Image src={device} loading="lazy" />
        </Box>
      </Box>
    </Container>
  );
};

export default Device;
