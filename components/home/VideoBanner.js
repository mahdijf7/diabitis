import { Box, Container } from "@mui/material";
import card1 from "../../public/images/home/doctor1.png";
import card2 from "../../public/images/home/doctor2.png";
import CustomLargeCard from "../utiles/CustomLargeCard";
import t from "../../public/locales/defualt/common.json";

const VideoBanner = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ backgroundColor: "common.white", py: "25px", height: "auto" }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        m="auto"
        width={{ lg: "66%", md: "77%" }}
        maxWidth="995px"
      >
        <CustomLargeCard img={card1} text={t.home.doctorCard1} />
        <CustomLargeCard img={card2} text={t.home.doctorCard2} />
      </Box>
    </Container>
  );
};

export default VideoBanner;
