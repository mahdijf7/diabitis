import { useMediaQuery, useTheme } from "@mui/material";
import MultiplePagesCrousel from "../carousel/MultiplePages";
import MultiplePagesCrouselMini from "../carousel/MultiplePagesMini";
import SinglePageCrousel from "../carousel/SinglePage";
import SinglePageCrouselMini from "../carousel/SinglePageMini";
import Cards from "./Cards";
import Register from "./Register";
import RegisterMini from "./RegisterMini";
import Steps from "./Steps";
import VideoBanner from "./VideoBanner";
import Device from "./Device";
import Account from "./Account";
import DeviceMini from "./DeviceMini";
import AccountMini from "./AccountMini";

export default function Home() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isMatch ? (
        <>
          <SinglePageCrouselMini />
          <RegisterMini />
          <MultiplePagesCrouselMini />
          <DeviceMini />
          <VideoBanner />
          <AccountMini />
          <Steps />
        </>
      ) : (
        <>
          <SinglePageCrousel />
          <Register />
          <MultiplePagesCrousel />
          <Device />
          <VideoBanner />
          <Cards />
          <Account />
          <Steps />
        </>
      )}
    </>
  );
}
