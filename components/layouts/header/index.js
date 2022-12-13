import { useMediaQuery, useTheme, Container } from "@mui/material";
import CustomDrawer from "./CustomDrawer";
import CustomNavbar from "./CustomNavbar";
import t from "../../../public/locales/defualt/common.json";
import { useEffect, useState } from "react";
// import style from "../../../styles/Header.module.scss";

export default function Header() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [showUpNav, setShowUpNav] = useState(true);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowUpNav(scrollY == 0 ? true : false);
        }
      }
      document.addEventListener("scroll", handleClickOutside);
      return () => {
        document.removeEventListener("scroll", handleClickOutside);
      };
    }, [ref]);
  }

  const list = [
    {
      label: t.header.home,
      link: "/",
      col: 3,
    },
    {
      label: t.header.store,
      link: "/",
      col: 3,
    },
    {
      label: t.header.monye,
      link: "/",
      col: 3,
    },
    {
      label: t.header.news,
      link: "/news",
      col: 3,
    },
    {
      label: t.header.service,
      link: "/",
      col: 3,
    },
    {
      label: t.header.aboutUs,
      link: "/",
      col: 3,
    },
    {
      label: t.header.memberShip,
      link: "/",
      col: 3,
    },
    // {
    //   label: t.header.request,
    //   link: "/",
    //   col: 4,
    // },
    // {
    //   label: t.header.group,
    //   link: "/",
    //   col: 3,
    // },
    // {
    //   label: t.header.center,
    //   link: "/",
    //   col: 4,
    // },
    // {
    //   label: t.header.report,
    //   link: "/",
    //   col: 3,
    // },
    // {
    //   label: t.header.rule,
    //   link: "/",
    //   col: 4,
    // },
    // {
    //   label: t.header.contact,
    //   link: "/",
    //   col: 3,
    // },
  ];
  return (
    <Container disableGutters maxWidth={false}>
      {isMatch ? (
        <CustomDrawer
          list={list}
          useOutsideAlerter={useOutsideAlerter}
          showUpNav={showUpNav}
        />
      ) : (
        <CustomNavbar
          list={list}
          useOutsideAlerter={useOutsideAlerter}
          showUpNav={showUpNav}
        />
      )}
    </Container>
  );
}
