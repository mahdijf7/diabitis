import { Button, Typography } from "@mui/material";

const SubmitButton = ({ text }) => {
  return (
    <Button
      variant="contained"
      fullWidth
      sx={{
        mt: { tiny: "20px", xs: "10px" },
        height: { sm: "60px", tiny: "50px", xs: "45px" },
        borderRadius: "30px",
        boxShadow: "none",
        "&:hover": {
          bgcolor: `primary.main`,
        },
      }}
    >
      <Typography
        color="text.primary"
        component="span"
        sx={{
          typography: {
            md: "h4",
            sm: "body2",
            tiny: "subtitle3",
            xs: "subtitle5",
          },
        }}
      >
        {text}
      </Typography>
    </Button>
  );
};

export default SubmitButton;
