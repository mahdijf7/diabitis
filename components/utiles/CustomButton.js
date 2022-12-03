import { Button, Typography } from "@mui/material";

const CustomButton = ({
  text,
  radius = 20,
  color = "primary",
  font = "small",
  height = 40,
  padd = { xs: "5px 30px", lg: "5px 35px" },
  ...otherprops
}) => {
  switch (font) {
    case "small":
      font = { typography: { md: "subtitle3", lg: "body1" } };
      break;
    case "mini":
      font = { typography: { xs: "subtitle6", sm: "subtitle5" } };
      break;
    case "bold":
      font = { typography: { xs: "subtitle6", tiny: "body3" } };
      break;
    case "large":
      font = { typography: { md: "body2", lg: "h4" } };
      break;
  }
  return (
    <Button
      variant="contained"
      color={color}
      sx={{
        height: height + "px",
        borderRadius: `${radius}px`,
        boxShadow: "none",
        p: padd,
        ...otherprops,
        "&:hover": {
          bgcolor: `${color}.main`,
        },
      }}
    >
      <Typography component="h3" sx={{ ...font }} color="">
        {text}
      </Typography>
    </Button>
  );
};

export default CustomButton;
