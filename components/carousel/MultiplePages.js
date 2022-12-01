import card1 from "../../public/images/home/card1.svg";
import card2 from "../../public/images/home/card2.svg";
import card3 from "../../public/images/home/card3.svg";
import card4 from "../../public/images/home/card4.svg";
import t from "../../public/locales/defualt/common.json";
import { Box, Container } from "@mui/material";
import CustomSmallCard from "../utiles/CustomSmallCard";
import style from "../../styles/Carousel.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomRightArrow from "./CustomRightArrow";
import CustomLeftArrow from "./CustomLeftArrow";

const MultiplePages = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 960 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 960, min: 600 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 960, min: 420 },
      items: 2,
    },
    mini: {
      breakpoint: { max: 420, min: 0 },
      items: 1,
    },
  };
  const list = [
    {
      title: t.home.card1Des,
      icon: card1,
    },
    {
      title: t.home.card2Des,
      icon: card2,
    },
    {
      title: t.home.card3Des,
      icon: card3,
    },
    {
      title: t.home.card4Des,
      icon: card4,
    },
  ];
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        pl: { lg: "22px", md: "0px" },
      }}
    >
      <Box maxWidth="1100px" width={{ lg: "75%", md: "90%" }} m="auto">
        <Box
          sx={{
            width: "95%",
            transform: "scale(1)",
            marginRight: { xs: "0px", sm: "1.5%" },
          }}
        >
          <Carousel
            className={style.boxCarouselItems}
            responsive={responsive}
            draggable={true}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
            autoPlay={true}
            transitionDuration={200}
          >
            {list.map((el, index) => (
              <CustomSmallCard key={index} img={el.icon} text={el.title} />
            ))}
          </Carousel>
        </Box>
      </Box>
    </Container>
  );
};

export default MultiplePages;
