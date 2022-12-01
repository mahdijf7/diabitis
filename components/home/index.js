import MultiplePagesCrousel from "../carousel/MultiplePages";
import SinglePageCrousel from "../carousel/SinglePage";
import Register from "./Register";

export default function Home() {
  // const theme = useTheme();
  // const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <SinglePageCrousel />
      <Register/>
      <MultiplePagesCrousel />
    </>
  );
}
