import { useMediaQuery, useTheme } from "@mui/material";
import BigBanner from "./BigBanner";
import BigBannerMini from "./BigBannerMini";
import PaginationCustom from "./PaginationCustom";

const News = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isMatch ? <BigBannerMini /> : <BigBanner />}
      <PaginationCustom />
    </>
  );
};

export default News;
