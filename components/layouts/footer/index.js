import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import t from "../../../public/locales/defualt/common.json";
import logo from "../../../public/images/logo.svg";

const Footer = () => {
  const list = [
    {
      text: t.footer.subTitle1,
    },
    {
      text: t.footer.subTitle2,
    },
    {
      text: t.footer.subTitle3,
    },
    {
      text: t.footer.subTitle4,
    },
  ];
  const contact = [
    {
      text: t.footer.location,
      icon: "/images/footer/location.svg",
    },
    {
      text: t.footer.call,
      icon: "/images/footer/phone.svg",
    },
    {
      text: t.footer.email,
      icon: "/images/footer/email.svg",
    },
  ];
  const icons = [
    "/images/footer/facebook.svg",
    "/images/footer/twitter.svg",
    "/images/footer/linkedin.svg",
    "/images/footer/instagram.svg",
  ];
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        backgroundColor: "secondary.main",
        p: "25px 60px 50px 60px",
        display: "flex",
        mt: { lg: "60px", md: "45px", xs: "30px" },
      }}
    >
      <Box width="42.6%">
        <Image src={"/images/logo.svg"} width="53px" height="55px" />
        <Typography
          color="common.white"
          sx={{ typography: { md: "h4", lg: "h2" }, pb: "20px", pt: "5px" }}
          component="h1"
        >
          {t.footer.title}
        </Typography>
        {list.map((el, index) => (
          <Typography
            key={index}
            color="common.white"
            sx={{ typography: { md: "subtitle5", lg: "subtitle4" }, pb: "8px" }}
            component="h2"
          >
            {el.text}
          </Typography>
        ))}
      </Box>
      <Box width="30%" display="flex" alignItems="flex-end">
        {icons.map((el, index) => (
          <Box key={index} mx={{lg:"12px",md:"7px"}}>
            <Image src={el} width="27px" height="27px" />
          </Box>
        ))}
      </Box>
      <Box width="25%">
        <Typography
          color="common.white"
          sx={{
            typography: { md: "subtitle3", lg: "body2" },
            pb: "20px",
            pt: "80px",
            px: "15%",
          }}
          component="h1"
        >
          {t.footer.contact}
        </Typography>
        {contact.map((el, index) => (
          <Box display="flex" key={index} alignItems="flex-start" mb="8px">
            <Box width="15%">
              <Image src={el.icon} width="20px" height="20px" />
            </Box>
            <Box width="85%">
              <Typography
                color="common.white"
                sx={{
                  typography: { md: "subtitle5", lg: "subtitle4" },
                }}
                component="h2"
              >
                {el.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Footer;
