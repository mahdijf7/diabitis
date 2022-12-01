import { useMediaQuery, useTheme, Container } from "@mui/material";
import CustomDrawer from "./CustomDrawer";
import CustomNavbar from "./CustomNavbar";
import t from "../../../public/locales/defualt/common.json";
// import style from "../../../styles/Header.module.scss";

export default function Header() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // const isSmall = useMediaQuery("(max-width:420px)");

  const list = [
    {
      label: t.header.home,
      link: "/",
      col: 3,
    },
    {
      label: t.header.memberShip,
      link: "/",
      col: 3,
    },
    {
      label: t.header.request,
      link: "/",
      col: 4,
    },
    {
      label: t.header.store,
      link: "/",
      col: 3,
    },
    {
      label: t.header.group,
      link: "/",
      col: 3,
    },
    {
      label: t.header.monye,
      link: "/",
      col: 3,
    },
    {
      label: t.header.center,
      link: "/",
      col: 4,
    },
    {
      label: t.header.report,
      link: "/",
      col: 3,
    },
    {
      label: t.header.rule,
      link: "/",
      col: 4,
    },
    {
      label: t.header.contact,
      link: "/",
      col: 3,
    },
  ];
  return (
    <Container disableGutters maxWidth={false}>
      {isMatch ? <CustomDrawer list={list} /> : <CustomNavbar list={list} />}
    </Container>
  );
}
