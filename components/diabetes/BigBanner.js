import { Box, Container, Typography } from "@mui/material";
import style from "../../styles/Diabetes.module.scss";
import t from "../../public/locales/defualt/common.json";

const BigBanner = () => {
  return (
    <Box>
      <Container
        disableGutters
        maxWidth={false}
        className={style.bigBanner}
        sx={{
          backgroundImage: "url(/images/diabetes/diabetes.png)",
        }}
      ></Container>
      <Box
        position="relative"
        display="flex"
        alignItems="center"
        borderRadius="2px"
        justifyContent="center"
        right={{
          lg: "calc(50% - 210px)",
          md: "calc(50% - 180px)",
          sm: "calc(50% - 150px)",
          tiny: "calc(50% - 115px)",
          xs: "calc(50% - 80px)",
        }}
        width={{
          lg: "420px",
          md: "360px",
          sm: "300px",
          tiny: "230px",
          xs: "160px",
        }}
        bottom={{lg:"26px",sm:"30px",tiny:"20px",xs:"15px"}}
        height={{sm:"76px",tiny:"50px",xs:"40px"}}
        bgcolor="secondary.main"
      >
        <Typography
          component="h1"
          typography={{ md: "h1", sm: "h2", tiny: "body1", xs: "body3" }}
          fontWeight="700 !important"
          color="common.white"
        >
          {t.diadetes.whatsDiabetes}
        </Typography>
      </Box>
    </Box>
  );
};

export default BigBanner;
