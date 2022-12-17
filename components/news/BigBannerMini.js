import { Box, Button, Typography } from "@mui/material";
import t from "../../public/locales/defualt/common.json";

const BigBannerMini = () => {
  return (
    <>
      <Box
        sx={{
          height: { sm: "350px", tiny: "280px", xs: "205px" },
          backgroundImage: "url(/images/news/bigBanner.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: "secondary.main",
          p: "15px",
        }}
      >
        <Typography
          color="common.white"
          fontWeight="500 !important"
          typography={{ sm: "h3", tiny: "h5", xs: "subtitle3" }}
        >
          {t.news.bigbannerTitle}
        </Typography>
        <Typography
          mt="10px"
          sx={{
            lineHeight: "25px",
            textAlign: "justify",
            color: "common.white",
            typography: { sm: "subtitle1", tiny: "subtitle3", xs: "subtitle5" },
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "wrap",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
          }}
        >
          {t.news.bigbannerDes}
        </Typography>
        <Box display="flex" justifyContent="center" width="100%" height="auto%">
          <Button
            variant="contained"
            color="info"
            sx={{
              width: { sm: "140px", xs: "118px" },
              height: { sm: "40px", xs: "30px" },
              borderRadius: "30px",
              mt: { tiny: "30px", xs: "18px" },
            }}
          >
            <Typography
              textAlign="justify"
              typography={{
                md: "subtitle1",
                sm: "subtitle3",
                xs: "subtitle6",
              }}
            >
              {t.news.moreText}
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default BigBannerMini;
