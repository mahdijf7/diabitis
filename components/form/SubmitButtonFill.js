import { Button } from "@mui/material";
import { useFormikContext } from "formik";

const SubmitButtonFill = ({ children, sx, ...otherProps }) => {
  const { submitForm } = useFormikContext();
  const handleSubmit = () => {
    submitForm();
  };
  const configButton = {
    ...otherProps,
    variant: "contained",
    onClick: handleSubmit,
  };
  return (
    <Button
      sx={{
        height: "56px",
        backgroundColor: "primary.main",
        color: "common.white",
        boxShadow: "none",
        "&:hover": {
          bgcolor: "primary.main",
        },
        "&.MuiButton-root":{
          borderRadius:"30px",
        },
        ...sx,
      }}
      {...configButton}
    >
      {children}
    </Button>
  );
};

export default SubmitButtonFill;
