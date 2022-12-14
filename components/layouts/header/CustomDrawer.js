import { useState, useRef } from "react";
import {
  AppBar,
  Box,
  SwipeableDrawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import NavBarUpMini from "./NavBarUpMini";
import NavBarDownMini from "./NavBarDownMini";
import Image from "next/image";

const CustomDrawer = ({ list, useOutsideAlerter, showUpNav }) => {
  const wrapperRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  useOutsideAlerter(wrapperRef);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const DrawerList = () => (
    <Box
      sx={{ width: { tiny: "250px", xs: "200px" } }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      textAlign="end"
      m="10px"
    >
      <IconButton>
        <Image
          src="/images/header/close.svg"
          alt=""
          loading="lazy"
          width="28px"
          height="28px"
        />
      </IconButton>
      <List>
        {list.map((el, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: "start" }}>
              <ListItemIcon>
                <Image
                  src={el.icon}
                  alt=""
                  loading="lazy"
                  width="18px"
                  height="18px"
                />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  typography: { xs: "subtitle5", tiny: "subtitle1" },
                }}
                sx={{
                  color: "common.white",
                }}
                primary={el.label}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box
        ref={wrapperRef}
        display="flex"
        width={{ sm: "95%", xs: "98%" }}
        sx={{
          m: "0 auto 55px auto",
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
        <NavBarDownMini handleOpen={handleOpen} />
      </AppBar>

      <div>
        {/* <Button onClick={() => toggleDrawer(false)}></Button> */}
        <SwipeableDrawer
          anchor="right"
          open={isOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          transitionDuration={500}
          sx={{ "& .MuiDrawer-paper": { backgroundColor: "secondary.main" } }}
        >
          <DrawerList />
        </SwipeableDrawer>
      </div>
    </>
  );
};

export default CustomDrawer;
