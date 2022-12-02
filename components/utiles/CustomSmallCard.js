import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";

const CustomSmallCard = ({ text, img, style }) => {
  const theme = useTheme();

  return (
    <Box
      my="20px"
      bgcolor="common.white"
      borderRadius="5px"
      boxShadow={theme.customShadows.widget}
      sx={style}
    >
      <Image
        src={img}
        alt="placeholder"
        objectFit="contain"
        layout="responsive"
      />
      <Typography
        color="text.secondary"
        component="h3"
        sx={{ typography: { md: "subtitle5", lg: "subtitle5" } }}
        textAlign="center"
        py="26px"
        px="10px"
      >
        {text}
      </Typography>
    </Box>
  );
};

export default CustomSmallCard;
