import { Box, Button, Container, Typography } from "@mui/material";
import t from "../../public/locales/defualt/common.json";

const BigBanner = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        // width: "100%",
        height: { md: "419px", sm: "270px", xs: "170px" },
        backgroundImage: "url(/images/news/bigBanner.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box display="grid" alignContent="center" width="35%" height="100%">
        <Typography
          textAlign="justify"
          mr="5%"
          mb="3%"
          typography={{ md: "h1", sm: "body2", xs: "body3" }}
        >
          {t.news.bigbannerTitle}
        </Typography>
        <Typography
          textAlign="justify"
          mr="5%"
          mb="7%"
          typography={{ md: "subtitle3", sm: "subtitle6", xs: "subtitle7" }}
        >
          {t.news.bigbannerDes}
        </Typography>
        <Button
          variant="contained"
          color="info"
          sx={{
            width: { md: "180px", sm: "140px", xs: "80px" },
            height: { md: "40px", sm: "30px", xs: "20px" },
            borderRadius: "30px",
            mr: "5%",
          }}
        >
          <Typography
            textAlign="justify"
            typography={{ md: "subtitle1", sm: "subtitle3", xs: "subtitle7" }}
          >
            {t.news.moreText}
          </Typography>
        </Button>
      </Box>
      {/* <img
        style={{ width: "100%", minHeight: "250px" }}
        src="/images/news/bigBanner.png"
      /> */}
    </Container>
  );
};

export default BigBanner;
