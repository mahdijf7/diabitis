import { TextField } from "@mui/material";
import { useField } from "formik";
import { styled } from "@mui/material/styles";

const TextFieldCustom = styled(TextField)(({ theme }) => ({
  width: "100% !important",
  minWidth: "100px !important",
  margin: "15px 0px",
  "& input[type=number]": {
    MozAppearance: "textfield",
  },
  "& input[type=number]::-webkit-outer-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
  "& input[type=number]::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
  "& .MuiFormLabel-root": {
    right: "20px !important",
    left: "auto !important",
    transformOrigin: "top right !important",
    fontSize: "14px",
  },
  "& input": {
    "&:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0px 1000px ${theme.palette.primary.light} inset !important`,
      webkitTextFillColor: theme.palette.primary.dark,
    },
  },
  "& .MuiFilledInput-root": {
    backgroundColor: theme.palette.primary.light,
    border: "solid #D1D1D6 1px",
    borderRadius: "8px",
  },
  "& .MuiFilledInput-input": {
    "&:-webkit-autofill": {
      borderRadius: "inherit",
    },
  },
}));
const CustomInputFill = ({
  name,
  disabled,
  text,
  multiline,
  ...otherProps
}) => {
  const [field, meta] = useField(name);
  field.value = field.value || "";

  const configTextField = {
    ...field,
    ...otherProps,
    disabled: !!disabled,
    fullWidth: true,
    variant: "filled",
    label: text,
    multiline: !!multiline,
  };
  if (meta && meta.error && meta.touched) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }
  return (
    <TextFieldCustom
      InputProps={{
        disableUnderline: true,
      }}
      {...configTextField}
    />
  );
};

export default CustomInputFill;
