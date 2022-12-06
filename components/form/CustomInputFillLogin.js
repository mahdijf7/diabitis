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
    "&::placeholder": {
      // textOverflow: 'ellipsis !important',
      color: theme.palette.common.black,
      opacity: 1,
    },
  },
}));
const CustomInputFillLogin = ({ name, disabled, t }) => {
  const [field, meta] = useField(name);
  field.value = field.value || ""
  
  const configTextField = {
    ...field,
    disabled: !!disabled,
    fullWidth: true,
    variant: "filled", //outlined
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
          borderRadius: "10px",
          fontSize: "18px",
          "@media (max-width: 420px)": {
            fontSize: "13px",
          },
          "@media (min-width: 420px) and (max-width: 600px)": {
            fontSize: "14px",
          },
          "@media (min-width: 600px) and (max-width: 960px)": {
            fontSize: "16px",
          },
        },
      }}
      {...configTextField}
    />
  );
};

export default CustomInputFillLogin;
