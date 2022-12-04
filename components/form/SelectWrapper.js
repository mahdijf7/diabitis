import { TextField, MenuItem, useTheme } from "@mui/material";
import { useField, useFormikContext } from "formik";

const SelectWrapper = ({ name, options, t, setProvince, ...otherProps }) => {
  const theme = useTheme();
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const handleChange = (event) => {
    const { value } = event.target;
    setFieldValue(name, value);
    if (setProvince) {
      setFieldValue("city", "");
      setProvince(value);
    }
  };
  const configTextField = {
    ...field,
    name,
    ...otherProps,
    select: true,
    variant: "outlined",
    fullWidth: true,
    label: t.register[name],
    onChange: handleChange,
  };
  if (meta && meta.error && meta.touched) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }
  return (
    <TextField
      {...configTextField}
      sx={{
        width: "100%",
        m: "15px 0px",
        "& .MuiOutlinedInput-root": {
          backgroundColor: theme.palette.primary.light,
          border: theme.palette.grey.dark,
          color: theme.palette.primary.dark,
          borderRadius: "8px",
          textAlign: "right",
        },
        "& .MuiInputLabel-root": {
          right: "30px",
          left: "auto",
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
          <MenuItem
            placeholder={el.label}
            key={index}
            value={el.id}
            sx={{ zIndex: 99999 }}
          >
            {el.name}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default SelectWrapper;
