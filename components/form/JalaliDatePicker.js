import { useState } from "react";
import AdapterJalali from "@date-io/date-fns-jalali";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TextField, useTheme } from "@mui/material";

export default function JalaliDatePicker({ text }) {
  const [value, setValue] = useState(null);
  const theme = useTheme();

  return (
    <LocalizationProvider dateAdapter={AdapterJalali}>
      <DatePicker
        label={text}
        mask="____/__/__"
        value={value}
        PopperProps={{
          sx: {
            "& .MuiPaper-root": {
              "& .Mui-selected": {
                color: "white",
                backgroundColor: "secondary.main",
                "&:hover": {
                  backgroundColor: "secondary.main",
                },
                "&:focus": {
                  backgroundColor: "secondary.main",
                },
              },
              "& .MuiSvgIcon-root": {
                rotate: "180deg",
              },
            },
          },
        }}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              width: "100% !important",
              margin: "15px 0px",
              // backgroundColor:"primary.dark",
              "& input": {
                "&::placeholder": {
                  // textOverflow: 'ellipsis !important',
                  color: theme.palette.primary.light,
                  opacity: 1,
                },
              },
              "& .MuiOutlinedInput-root": {
                backgroundColor: theme.palette.primary.light,
                border: theme.palette.grey.dark,
                // color:theme.palette.primary.dark,
                borderRadius: "8px",
              },
              "& .MuiInputLabel-root": {
                right: "30px",
                left: "auto",
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
}
