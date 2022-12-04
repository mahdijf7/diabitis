import { Container, useTheme, useMediaQuery } from "@mui/material";
import t from "../../../public/locales/defualt/common.json";
import FooterLarge from "./FooterLarge";
import FooterMini from "./FooterMini";

const Footer = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));

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
        p: isMatch ? "25px 60px 50px 60px" : "25px 25px",
        display: { md: "flex", xs: "grid" },
        // mt: { lg: "60px", md: "45px", xs: "30px" },
      }}
    >
      {isMatch ? (
        <FooterLarge icons={icons} list={list} contact={contact} />
      ) : (
        <FooterMini icons={icons} list={list} contact={contact} />
      )}
    </Container>
  );
};

export default Footer;
