import { TextField } from "@mui/material";
import { useField } from "formik";
import { styled } from "@mui/material/styles";

const TextFieldCustom = styled(TextField)(({ theme }) => ({
  width: "100% !important",
  margin: "15px 0px",
  // backgroundColor:"primary.dark",
  "& input": {
    "&:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0px 1000px ${theme.palette.primary.light} inset !important`,
      "-webkit-text-fill-color": theme.palette.primary.dark,
    },
    '&::placeholder': {
      // textOverflow: 'ellipsis !important',
      color: theme.palette.primary.dark,
      opacity:1
    }
  },
  "& .MuiOutlinedInput-root":{
    backgroundColor:theme.palette.primary.light, 
    border: theme.palette.grey.dark,
    // color:theme.palette.primary.dark,
    borderRadius:"8px",
  }
}));
const CustomInputOutline = ({ name, disabled, t, multiline }) => {
  const [field, meta] = useField(name);
  const configTextField = {
    ...field,
    disabled: !!disabled,
    fullWidth: true,
    variant: "outlined",
    placeholder: t.register[name],
    multiline: !!multiline,
  };
  if (meta && meta.error && meta.touched) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }
  return <TextFieldCustom {...configTextField} />;
};

export default CustomInputOutline;
