import card1 from "../../public/images/home/card1.svg";
import card2 from "../../public/images/home/card2.svg";
import card3 from "../../public/images/home/card3.svg";
import card4 from "../../public/images/home/card4.svg";
import t from "../../public/locales/defualt/common.json";
import { Box, Container, useMediaQuery } from "@mui/material";
import CustomSmallCard from "../utiles/CustomSmallCard";
import style from "../../styles/Carousel.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MultiplePagesMini = () => {
  const isSmall = useMediaQuery("(max-width:650px)");
  const responsive = {
    tablet: {
      breakpoint: { max: 960, min: 650 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 650, min: 300 },
      items: 2,
    },
    mini: {
      breakpoint: { max: 300, min: 0 },
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
    >
      <Box>
        <Box
          sx={{
            transform: "scale(1)",
          }}
        >
          <Carousel
            className={style.boxCarouselItemsMini}
            responsive={responsive}
            draggable={true}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile", "mini"]}
            autoPlay={true}
            transitionDuration={200}
          >
            {list.map((el, index) => (
              <CustomSmallCard
                key={index}
                img={el.icon}
                text={el.title}
                calss={style.imagesBox}
                isSmall={isSmall}
              />
            ))}
          </Carousel>
        </Box>
      </Box>
    </Container>
  );
};

export default MultiplePagesMini;
