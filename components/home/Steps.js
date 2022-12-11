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
import numberCircle from "../../public/images/home/numberCircle.svg";

const Steps = () => {
  const isMatch = useMediaQuery("(max-width:1429px)");
  const isMedium = useMediaQuery("(max-width:800px)");
  const isSmall = useMediaQuery("(max-width:550px)");
  const isMini = useMediaQuery("(max-width:400px)");
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
    position: "relative",
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
  const sizeImage = "100px";
  switch (true) {
    case isMini == true:
      sizeImage = "30px";
      break;
    case isSmall == true:
      sizeImage = "50px";
      break;
    case isMedium == true:
      sizeImage = "70px";
      break;
    case isMatch == true:
      sizeImage = "90px";
      break;
  }
  const NumberCircle = ({ index }) => {
    return (
      <Box
        bgcolor="common.white"
        position="absolute"
        width={{ md: "70px", sm: "55px", xs: "40px" }}
        height={{ md: "70px", sm: "55px", xs: "40px" }}
        right={{ md: "-30px", sm: "-23px", xs: "-17px" }}
        left="auto"
        top={{ md: "-30px", sm: "-23px", xs: "-17px" }}
        borderRadius="50%"
      >
        <Typography
          position="absolute"
          color="secondary.main"
          right={{ md: "27px", sm: "22px", xs: "15px" }}
          top={{ md: "15px", sm: "12px", xs: "6px" }}
          sx={{
            typography: { md: "h1", sm: "h2", xs: "h4" },
            fontWeight: "700 !important",
          }}
        >
          {index + 1}
        </Typography>
        <Image src={numberCircle} alt="" width="100%" height="100%" />
      </Box>
    );
  };
  const Card = ({ index }) => {
    return (
      <Box textAlign="center" px={isMini ? "2px" : "8px"}>
        <Image
          src={list[index].img}
          width={sizeImage}
          height={sizeImage}
          loading="lazy"
        />
        <Typography
          color="text.hint"
          component="h2"
          sx={{
            typography: {
              md: "body1",
              lg: "h5",
              xs: isMini ? "subtitle7" : "subtitle6",
            },
          }}
        >
          {list[index].text}
        </Typography>
      </Box>
    );
  };
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ pb: "5%", pt: { md: "0px", xs: "5%" } }}
    >
      <Typography
        color="text.primary"
        sx={{
          typography: {
            md: "h4",
            lg: "h2",
            xs: isMini ? "subtitle5" : "subtitle3",
          },
          mb:{xs:"30px"}
        }}
        component="h1"
        textAlign="center"
        my="3%"
      >
        {t.home.stepsTitle}
      </Typography>
      <Box
        width="100%"
        height={{ md: "300px", xs: isMini ? "170px" : "200px" }}
        display="flex"
      >
        <Box
          height="20%"
          className={style.dash}
          width={{
            lg: isMatch ? "15%" : "calc(49vw - 500px)",
            md: "10%",
            xs: isMini ? "3%" : "5%",
          }}
        />
        <Box
          display="flex"
          width={{ lg: "70%", md: "80%", xs: isMini ? "94%" : "90%" }}
          maxWidth="1000px"
        >
          <Box
            width={isMini ? "30%" : "28%"}
            height={{ lg: "80%", md: "70%", xs: "70%" }}
            sx={styleCard}
          >
            <NumberCircle index={0} />
            <Card index={0} />
          </Box>
          <Box display="flex" width={{ md: "9.5%", xs: isMini ? "5%" : "8%" }}>
            <Box width="40%" height="50%" className={style.dash} />
            <Box width="20%" display="flex" alignItems="center">
              <Image
                loading="lazy"
                src={"/images/home/arrow.svg"}
                width="20px"
                height="20px"
                style={{ marginTop: "30%" }}
              />
            </Box>
            <Box width="40%" height="50%" className={style.dash} />
          </Box>
          <Box width={isMini ? "30%" : "28%"}>
            <Box height="20%" />
            <Box height={{ lg: "80%", md: "70%", xs: "70%" }} sx={styleCard}>
              <NumberCircle index={1} />
              <Card index={1} />
            </Box>
          </Box>
          <Box display="flex" width={{ md: "9.5%", xs: isMini ? "5%" : "8%" }}>
            <Box width="40%" height="50%" className={style.dash} />
            <Box width="20%" display="flex" alignItems="center">
              <Image
                loading="lazy"
                src={"/images/home/arrow.svg"}
                width="20px"
                height="20px"
                style={{ marginTop: "30%" }}
              />
            </Box>
            <Box width="40%" height="50%" className={style.dash} />
          </Box>
          <Box
            width={isMini ? "30%" : "28%"}
            height={{ lg: "80%", md: "70%", xs: "70%" }}
            sx={styleCard}
          >
            <NumberCircle index={2} />
            <Card index={2} />
          </Box>
        </Box>
        <Box
          height="20%"
          className={style.dash}
          width={{
            lg: isMatch ? "15%" : "calc(50vw - 500px)",
            md: "10%",
            xs: isMini ? "3%" : "5%",
          }}
        />
      </Box>
    </Container>
  );
};

export default Steps;
