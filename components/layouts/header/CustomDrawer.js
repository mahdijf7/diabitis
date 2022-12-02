// import { Button, Grid, IconButton } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import logoImage from "../../../public/images/logo/mainReverse.svg";
// import Image from "next/image";
// import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { AppBar, Box } from "@mui/material";
import NavBarUpMini from "./NavBarUpMini";
import NavBarDownMini from "./NavBarDownMini";

const CustomDrawer = ({ list, useOutsideAlerter, showUpNav }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <>
      <Box
        ref={wrapperRef}
        display="flex"
        width={{sm:"95%",xs:"98%"}}
        sx={{
          m: "0 auto 50px auto",
          transition: "height 0.25s linear",
          height: showUpNav ? "45px" : "0px",
          alignItems: "center",
        }}
      >
        <NavBarUpMini />
      </Box>
      <AppBar
        sx={{
          backgroundColor: "secondary.main",
          mt: showUpNav ? "45px" : "0px",
          boxShadow: "none",
        }}
      >
        <NavBarDownMini list={list} />
      </AppBar>
    </>
  );
};

export default CustomDrawer;
