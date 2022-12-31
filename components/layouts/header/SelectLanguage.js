import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import fa from "../../../public/images/header/fa.svg";
import uk from "../../../public/images/header/uk.svg";
import ar from "../../../public/images/header/ar.svg";
import down from "../../../public/images/header/down.svg";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SelectLanguage = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("FA");

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("scroll", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("scroll", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  //   useEffect(() => {
  //     let dir = router.locale == "fa" ? "rtl" : "ltr";
  //     let lang = router.locale == "fa" ? "fa" : "en";
  //     document.querySelector("html").setAttribute("dir", dir);
  //     document.querySelector("html").setAttribute("lang", lang);
  //   }, [router.locale]);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleChange = (value) => {
    console.log(value);
    setLang(value);
    setOpen(false);
  };
  const list = [
    {
      title: "FA",
      icon: fa,
    },
    {
      title: "EN",
      icon: uk,
    },
    {
      title: "AR",
      icon: ar,
    },
  ];
  return (
    <Box ref={wrapperRef}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        width="75px"
        height="40px"
        bgcolor="secondary.main"
        border="solid #fff 1px"
        borderRadius="20px"
        sx={{cursor:"pointer"}}
        onClick={handleClick}
      >
        <Image src={down} alt="" loading="lazy" />
        <Typography variant="body3">{lang}</Typography>
      </Box>
      <Box
        width="100px"
        pb="10px"
        display={open ? "grid" : "none"}
        bgcolor="secondary.main"
        position="absolute"
        left="345px"
        top="65px"
      >
        <Box sx={{ display: "grid", justifyContent: "center" }}>
          {list.map((el, index) => (
            <List key={index} sx={{ py: "0px" }}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleChange(el.title)}>
                  <ListItemIcon>
                    <Image src={el.icon} />
                  </ListItemIcon>
                  <ListItemText primary={el.title} />
                </ListItemButton>
              </ListItem>
            </List>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SelectLanguage;
