import { useMediaQuery, useTheme, Container } from "@mui/material";
import CustomDrawer from "./CustomDrawer";
import CustomNavbar from "./CustomNavbar";
// import t from "../../../public/locales/defualt/common.json";
// import style from "../../../styles/Header.module.css";

export default function Header() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // const isSmall = useMediaQuery("(max-width:420px)");

  const list = [
    // {
    //   label: t.header.reister,
    //   link: "/",
    // },
    // {
    //   label: t.header.login,
    //   link: "/",
    // },
    // {
    //   label: t.header.services,
    //   link: "/",
    // },
    // {
    //   label: t.header.news,
    //   link: "/",
    // },
  ];
  return (
    <Container disableGutters maxWidth={false}>
      {isMatch ? <CustomDrawer list={list} /> : <CustomNavbar list={list} />}
    </Container>
  );
}
