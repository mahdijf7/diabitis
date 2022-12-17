import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import t from "../../public/locales/defualt/common.json";

const BigBanner = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery("(max-width:1100px)");
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: isMatch ? "350px" : "419px",
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
          // sx={{
            // textOverflow: "ellipsis",
            // overflow: "hidden",
            // display: "-webkit-box",
            // whiteSpace: "wrap",
            // WebkitBoxOrient: "vertical",
            // WebkitLineClamp: 3,
          // }}
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
    </Container>
  );
};

export default BigBanner;
