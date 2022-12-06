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
      color="info"
      sx={{
        height: { sm: "56px", sx: "45px" },
        backgroundColor: "info.main",
        color: "common.white",
        boxShadow: "none",
        "&:hover": {
          bgcolor: "info.main",
        },
        "&.MuiButton-root": {
          borderRadius: "30px",
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
