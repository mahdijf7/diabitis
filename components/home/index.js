// import { Box, useTheme, useMediaQuery } from "@mui/material";
// import style from "../../styles/Home.module.scss";
// import Banner from "./Banner";
// import Companies from "./Companies";
// import Help from "./help";
// import ImageTitle from "./ImageTitle";
// import ImageTitleMini from "./ImageTitleMini";

import MultiplePagesCrousel from "../carousel/MultiplePages";
import SinglePageCrousel from "../carousel/SinglePage";

export default function Home() {
  // const theme = useTheme();
  // const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <SinglePageCrousel />
      <MultiplePagesCrousel />
    </>
  );
}
