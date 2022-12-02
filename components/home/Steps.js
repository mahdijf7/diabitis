import {
  Box,
  Container,
  Divider,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import t from "../../public/locales/defualt/common.json";
import style from "../../styles/Home.module.scss";
import arrow from "../../public/images/home/arrow.svg";

const Steps = () => {
  const isMatch = useMediaQuery("(max-width:1429px)");
  const theme = useTheme();
  const styleCard = {
    backgroundColor: "common.white",
    boxShadow: theme.customShadows.widget,
    borderRadius: "20px",
    border: theme.customShadows.border,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: { lg: "5%", md: "3%" },
  };
  const list = [
    {
      img: "/images/home/cv.svg",
      text: t.home.cv,
    },
    {
      img: "/images/home/pay.svg",
      text: t.home.pay,
    },
    {
      img: "/images/home/account.svg",
      text: t.home.account,
    },
  ];
  const Card = ({ index }) => {
    return (
      <Box textAlign="center">
        <Image
          src={list[index].img}
          width={isMatch ? "90px" : "100px"}
          height={isMatch ? "90px" : "100px"}
        />
        <Typography
          color="text.hint"
          component="h2"
          sx={{ typography: { md: "body1", lg: "h5" } }}
        >
          {list[index].text}
        </Typography>
      </Box>
    );
  };
  return (
    <Container disableGutters maxWidth={false}>
      <Typography
        color="text.primary"
        sx={{ typography: { md: "h4", lg: "h2" } }}
        component="h1"
        textAlign="center"
        my="3%"
      >
        {t.home.stepsTitle}
      </Typography>
      <Box width="100%" height="300px" display="flex">
        <Box
          height="20%"
          className={style.dash}
          width={{ lg: isMatch ? "15%" : "calc(49vw - 500px)", md: "10%" }}
        />
        <Box display="flex" width={{ lg: "70%", md: "80%" }} maxWidth="1000px">
          <Box width="27%" height={{ lg: "80%", md: "70%" }} sx={styleCard}>
            <Card index={0} />
          </Box>
          <Box display="flex" width="9.5%">
            <Box width="40%" height="50%" className={style.dash} />
            <Box width="20%" display="flex" alignItems="center">
              <Image
                src={"/images/home/arrow.svg"}
                width="20px"
                height="20px"
                style={{ marginTop: "30%" }}
              />
            </Box>
            <Box width="40%" height="50%" className={style.dash} />
          </Box>
          <Box width="27%">
            <Box height="20%" />
            <Box height={{ lg: "80%", md: "70%" }} sx={styleCard}>
              <Card index={1} />
            </Box>
          </Box>
          <Box display="flex" width="9.5%">
            <Box width="40%" height="50%" className={style.dash} />
            <Box width="20%" display="flex" alignItems="center">
              <Image
                src={"/images/home/arrow.svg"}
                width="20px"
                height="20px"
                style={{ marginTop: "30%" }}
              />
            </Box>
            <Box width="40%" height="50%" className={style.dash} />
          </Box>
          <Box width="27%" height={{ lg: "80%", md: "70%" }} sx={styleCard}>
            <Card index={2} />
          </Box>
        </Box>
        <Box
          height="20%"
          className={style.dash}
          width={{ lg: isMatch ? "15%" : "calc(50vw - 500px)", md: "10%" }}
        />
      </Box>
    </Container>
  );
};

export default Steps;
