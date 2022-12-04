import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";

const CustomLargeCard = ({ text, img, isMatch }) => {
  const theme = useTheme();
  return (
    <Box
      width={isMatch ? "100%" : "48%"}
      borderRadius="5px"
      boxShadow={theme.customShadows.widget}
      mb={isMatch ? "30px" : "0px"}
    >
      <Box>
        <Image
          src={img}
          alt="placeholder"
          objectFit="contain"
          layout="responsive"
          loading="lazy"
        />
      </Box>
      <Box width="100%" p={{ md: "30px 35px", xs: "20px 5px" }}>
        <Typography
          color="text.secondary"
          component="h3"
          sx={{
            typography: {
              md: "subtitle3",
              lg: "subtitle3",
              sm: "subtitle5",
              xs: "subtitle6",
            },
          }}
          textAlign="center"
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomLargeCard;
