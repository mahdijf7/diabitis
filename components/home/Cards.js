import { Box } from "@mui/material";
import card1 from "../../public/images/home/card1.svg";
import card2 from "../../public/images/home/card2.svg";
import card3 from "../../public/images/home/card3.svg";
import card4 from "../../public/images/home/card4.svg";
import t from "../../public/locales/defualt/common.json";
import CustomSmallCard from "../utiles/CustomSmallCard";

const Cards = () => {
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
    <Box
      display="flex"
      justifyContent="space-between"
      m="auto"
      width={{ lg: "66%", md: "77%" }}
      maxWidth="995px"
    >
      {list.map((el, index) => (
        <CustomSmallCard
          key={index}
          img={el.icon}
          text={el.title}
          style={{ width: "22%" }}
        />
      ))}
    </Box>
  );
};

export default Cards;
