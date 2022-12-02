import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";

const CustomLargeCard = ({ text, img }) => {
  const theme = useTheme();
  return (
    <Box
      width="48%"
      borderRadius="5px"
      boxShadow={theme.customShadows.widget}
    >
      <Box>
        <Image
          src={img}
          alt="placeholder"
          objectFit="contain"
          layout="responsive"
        />
      </Box>
      <Box width="100%" p="30px 35px">
        <Typography
          color="text.secondary"
          component="h3"
          sx={{ typography: { md: "subtitle3", lg: "subtitle3" } }}
          textAlign="center"
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomLargeCard;
