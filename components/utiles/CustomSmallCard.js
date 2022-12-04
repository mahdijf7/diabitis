import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";

const CustomSmallCard = ({ text, img, style, calss, isSmall }) => {
  const theme = useTheme();

  return (
    <Box
      my="20px"
      bgcolor="common.white"
      borderRadius="5px"
      boxShadow={theme.customShadows.widget}
      sx={style || {}}
      className={calss || ""}
    >
      <Image
        src={img}
        alt="placeholder"
        objectFit="contain"
        layout="responsive"
        loading="lazy"
      />
      <Typography
        color="text.secondary"
        component="h3"
        sx={{
          typography: {
            md: "subtitle5",
            lg: "subtitle5",
            sm: "subtitle6",
            xs: "subtitle6",
          },
        }}
        textAlign="center"
        py={isSmall ? "15px" : "26px"}
        px="10px"
      >
        {text}
      </Typography>
    </Box>
  );
};

export default CustomSmallCard;
