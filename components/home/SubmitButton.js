import { Button, Typography } from "@mui/material";

const SubmitButton = ({ text }) => {
  return (
    <Button
      variant="contained"
      fullWidth
      sx={{
        mt: "30px",
        height: "60px",
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
        sx={{ typography: { md: "h4", xs: "body2" } }}
      >
        {" "}
        {text}
      </Typography>
    </Button>
  );
};

export default SubmitButton;
