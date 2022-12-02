import { useRef } from "react";
import { AppBar, Box } from "@mui/material";
import NavBarUp from "./NavBarUp";
import NavBarDown from "./NavBarDown";

const CustomNavbar = ({ list, useOutsideAlerter, showUpNav }) => {
  const maxWidth = "1750px";
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
