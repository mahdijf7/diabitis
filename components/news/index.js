import { useMediaQuery, useTheme } from "@mui/material";
import BigBanner from "./BigBanner";
import PaginationCustom from "./PaginationCustom";

const News = () => {
  const theme = useTheme();
  // const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {/* {isMatch ? (
            <>
            </>
          ) : (
            <> */}
      <BigBanner />
      <PaginationCustom />
      {/* </>
          )} */}
    </>
  );
};

export default News;
