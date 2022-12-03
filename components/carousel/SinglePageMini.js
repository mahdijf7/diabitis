import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import style from "../../styles/Carousel.module.scss";
import t from "../../public/locales/defualt/common.json";

const SinglePageMini = () => {
  
  const [slideIndex, setSlideIndex] = useState(1);
  const CreateText = ({ title, listTitle }) => {
    return (
      <>
        <Typography
          sx={{ typography: { xs: "body1", tiny: "h5" } }}
          color="common.white"
          component="h1"
          pb="15px"
        >
          {title}
        </Typography>
        {listTitle.map((el, index) => (
          <Typography
            sx={{ typography: { xs: "subtitle5", tiny: "subtitle3" } }}
            color="common.white"
            component="h1"
            key={index}
          >
            {el}
          </Typography>
        ))}
      </>
    );
  };
  const slides = [
    {
      img: "/images/home/banner1.svg",
      text: (
        <CreateText
          title={t.home.childTitle}
          listTitle={[
            t.home.childDes1,
            t.home.childDes2,
            t.home.childDes3,
            t.home.childDes4,
          ]}
        />
      ),
    },
    {
      img: "/images/home/banner2.svg",
      text: (
        <CreateText title={t.home.failed} listTitle={[t.home.failedDes1]} />
      ),
    },
    {
      img: "/images/home/banner1.svg",
      text: (
        <CreateText
          title={t.home.childTitle}
          listTitle={[
            t.home.childDes1,
            t.home.childDes2,
            t.home.childDes3,
            t.home.childDes4,
          ]}
        />
      ),
    },
    {
      img: "/images/home/banner2.svg",
      text: (
        <CreateText title={t.home.childTitle} listTitle={[t.home.failedDes1]} />
      ),
    },
  ];

  useEffect(() => {
    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setSlideIndex(slideIndex - 1 < 1 ? slides.length : slideIndex - 1);
    }, 2000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [slideIndex]);

  return (
    <Box position="relative" overflow="hidden">
      {slides.map((el, index) => (
        <Box
          key={index}
          className={`${style.fade} ${style.boxImageMini}`}
          sx={{
            display: slideIndex == index + 1 ? "block" : "none",
          }}
        >
          <img src={el.img} height="100%" className={style.imageMini} />
        </Box>
      ))}
      <Box
        className={`${style.fade} ${style.boxCoverBannerMini}`}
        bgcolor="secondary.main"
      >
        {slides[slideIndex - 1].text}
        <Box
          right="calc(50vw - 14px)"
          position="absolute"
          bottom={5}
          minHeight="15px"
          display="flex"
          alignItems="center"
        >
          {slides.map((el, index) => (
            <Box
              key={index}
              bgcolor={slideIndex == index + 1 ? "common.white" : "gray.main"}
              sx={{
                width: slideIndex == index + 1 ? "10px" : "5px",
                height: slideIndex == index + 1 ? "10px" : "5px",
                borderRadius: "50%",
                cursor: "pointer",
                mx: "3px",
                display: "inline-block",
                transition: "0.6s ease",
              }}
              onClick={() => setSlideIndex(index + 1)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SinglePageMini;
