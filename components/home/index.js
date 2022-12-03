import { useMediaQuery, useTheme } from "@mui/material";
import MultiplePagesCrousel from "../carousel/MultiplePages";
import SinglePageCrousel from "../carousel/SinglePage";
import SinglePageCrouselMini from "../carousel/SinglePageMini";
import Cards from "./Cards";
import Register from "./Register";
import RegisterMini from "./RegisterMini";
import Steps from "./Steps";
import VideoBanner from "./VideoBanner";

export default function Home() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isMatch ? (
        <>
          <SinglePageCrouselMini />
          <RegisterMini />
        </>
      ) : (
        <>
          <SinglePageCrousel />
          <Register />
          <MultiplePagesCrousel />
          <VideoBanner />
          <Cards />
          <Steps />
        </>
      )}
    </>
  );
}
