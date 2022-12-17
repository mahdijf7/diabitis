import { TextField } from "@mui/material";
import { useField } from "formik";
import { styled } from "@mui/material/styles";

const TextFieldCustom = styled(TextField)(({ theme }) => ({
  width: "100% !important",
  margin: "10px 0px",
  "& input": {
    "&:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0px 1000px ${theme.palette.primary.light} inset !important`,
      webkitTextFillColor: theme.palette.primary.dark,
    },
  },
  "& .MuiFilledInput-root": {
    backgroundColor: theme.palette.background.default,
    border: "solid #D1D1D6 1px",
    borderRadius: "8px",
  },
  "& .MuiFilledInput-input": {
    "&:-webkit-autofill": {
      borderRadius: "inherit",
    },
  },
  "& input": {
    paddingBottom: "22px",
    paddingTop: "22px",
    "&::placeholder": {
      color: theme.palette.common.black,
      opacity: 1,
    },
  },
}));
const CustomInputFillLogin = ({ name, disabled, t }) => {
  const [field, meta] = useField(name);
  field.value = field.value || "";

  const configTextField = {
    ...field,
    disabled: !!disabled,
    fullWidth: true,
    variant: "filled",
    placeholder: t,
  };
  if (meta && meta.error && meta.touched) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }
  return (
    <TextFieldCustom
      InputProps={{
        disableUnderline: true,
        sx: {
          borderRadius: "8px",
          fontSize: "14px",
        },
      }}
      {...configTextField}
    />
  );
};

export default CustomInputFillLogin;
