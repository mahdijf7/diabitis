import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";

const CustomSmallCard = ({ text, img }) => {
  const theme = useTheme();
  return (
    <Box
      my="20px"
      mx="10px"
      maxWidth="200px"
      minHeight="250px"
      maxHeight="300px"
      bgcolor="common.white"
      borderRadius="5px"
      boxShadow={theme.customShadows.widget}
    >
      <Box width="100%" height="60%" display="block">
        <Image
          src={img}
          alt="placeholder"
          objectFit="contain"
          layout="responsive"
        />
      </Box>
      <Box width="100%" height="40%" p="14% 5% 5% 5%">
        <Typography
          color="text.secondary"
          component="h3"
          sx={{ typography: { md: "subtitle5", lg: "subtitle5" } }}
          textAlign="center"
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomSmallCard;
