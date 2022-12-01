import { useEffect, useState, useRef } from "react";
import { AppBar, Box } from "@mui/material";
import NavBarUp from "./NavBarUp";
import NavBarDown from "./NavBarDown";

const CustomNavbar = ({ list }) => {
  const maxWidth = "1750px";
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
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <>
      <Box
        ref={wrapperRef}
        display="flex"
        width="90%"
        maxWidth={maxWidth}
        sx={{
          m: "0 auto 60px auto",
          transition: "height 0.25s linear",
          height: showUpNav ? "73px" : "0px",
          alignItems: "center",
        }}
      >
        <NavBarUp />
      </Box>
      <AppBar
        sx={{
          backgroundColor: "secondary.main",
          mt: showUpNav ? "73px" : "0px",
          boxShadow: "none",
        }}
      >
        <NavBarDown list={list} maxWidth={maxWidth} />
      </AppBar>
    </>
  );
};

export default CustomNavbar;
