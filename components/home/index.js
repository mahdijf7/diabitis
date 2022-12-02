import MultiplePagesCrousel from "../carousel/MultiplePages";
import SinglePageCrousel from "../carousel/SinglePage";
import Cards from "./Cards";
import Register from "./Register";
import VideoBanner from "./VideoBanner";

export default function Home() {
  // const theme = useTheme();
  // const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <SinglePageCrousel />
      <Register />
      <MultiplePagesCrousel />
      <VideoBanner />
      <Cards />
    </>
  );
}
