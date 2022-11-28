import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import style from "../../styles/Carousel.module.scss";

const SinglePage = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const slides = ["/images/t1.jpg", "/images/t2.jpg", "/images/t3.jpg"];

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

  //   const currentSlide = (n) => {
  //     if (n > slides.length) {
  //       setSlideIndex(1);
  //     } else if (n < 1) {
  //       setSlideIndex(slides.length);
  //     } else {
  //       setSlideIndex(n);
  //     }
  //   };

  return (
    <Box>
      {slides.map((el, index) => (
        <Box
          key={index}
          className={style.fade}
          style={{ display: slideIndex == index + 1 ? "block" : "none" }}
        >
          <img src={el} style={{ width: "100%" }} />
        </Box>
      ))}
      <Box position="absolute" mt="-45px" mr="40px">
        {slides.map((el, index) => (
          <Box
            key={index}
            className={style.dot}
            style={{
              backgroundColor: slideIndex == index + 1 ? "green" : "red",
            }}
            onClick={() => setSlideIndex(index + 1)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SinglePage;
