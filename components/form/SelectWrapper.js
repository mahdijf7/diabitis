import { TextField, MenuItem, useTheme } from "@mui/material";
import { useField, useFormikContext } from "formik";

const SelectWrapper = ({ name, options, text, setProvince, setTypeSelected, ...otherProps }) => {
  const theme = useTheme();
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  field.value = field.value || "";

  const handleChange = (event) => {
    const { value } = event.target;
    setFieldValue(name, value);
    if (setProvince) {
      setFieldValue("city", "");
      setProvince(value);
    }
    if (setTypeSelected){
      setTypeSelected(value)
    }
  };
  const configTextField = {
    ...field,
    name,
    ...otherProps,
    select: true,
    variant: "filled",
    fullWidth: true,
    label: text,
    onChange: handleChange,
  };
  if (meta && meta.error && meta.touched) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }
  return (
    <TextField
      InputProps={{
        disableUnderline: true,
        sx: {
          borderRadius: "10px",
          fontSize: "14px",
          // '@media (max-width: 420px)' : {
          //   fontSize:  "13px" ,
          // },
          // '@media (min-width: 420px) and (max-width: 600px)' : {
          //   fontSize:  "14px" ,
          // },
          // '@media (min-width: 600px) and (max-width: 960px)' : {
          //   fontSize:  "16px" ,
          // },
        },
      }}
      {...configTextField}
      sx={{
        width: "100%",
        minWidth: "100px !important",
        m: "15px 0px",
        "& .MuiFormLabel-root": {
          right: "20px !important",
          left: "auto !important",
          transformOrigin: "top right !important",
          fontSize: "14px",
        },
        "& .MuiFilledInput-root": {
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.main,
          borderRadius: "8px",
          textAlign: "right",
          paddingRight: "0px !important",
          border: "solid #D1D1D6 1px",
        },
        "& .MuiFilledInput-input": {
          paddingRight: "10px !important",
          backgroundColor: theme.palette.primary.light,
          borderRadius: "8px",
          height:{xs:"10px",tiny:"15px",sm:"auto"},
          minHeight:"10px",
          "&:focus": {
            backgroundColor: theme.palette.primary.light,
            borderRadius: "8px",
          },
        },
        "& .MuiSelect-icon": {
          right: "auto",
          left: "15px",
        },
      }}
      SelectProps={{
        MenuProps: {
          sx: { mr: 30 },
        },
      }}
    >
      {options.map((el, index) => {
        return (
          <MenuItem key={index} value={el.id} sx={{ zIndex: 99999 }}>
            {el.name}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default SelectWrapper;
