import { Box, Typography } from "@mui/material";
import t from "../../public/locales/defualt/common.json";
const DiabetesContent = () => {
  const list = [
    { des: t.diadetes.whatsDiabetesDes1 },
    { des: t.diadetes.whatsDiabetesDes2 },
    { des: t.diadetes.whatsDiabetesDes3 },
    { des: t.diadetes.whatsDiabetesDes4 },
  ];
  return (
    <Box
      width={{ md: "80%", sm: "90%", xs: "94%" }}
      maxWidth="1200px"
      mx="auto"
      mt="3%"
      mb="10%"
    >
      {list.map((el, index) => (
        <Typography
          key={index}
          textAlign="justify"
          fontWeight="300 !important"
          typography={{
            lg: "h3",
            md: "h3",
            sm: "h6",
            tiny: "subtitle3",
            xs: "subtitle5",
          }}
        >
          {el.des}
        </Typography>
      ))}
    </Box>
  );
};

export default DiabetesContent;
