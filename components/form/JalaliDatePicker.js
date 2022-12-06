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
            variant="filled"
            sx={{
              width: "100% !important",
              margin: "15px 0px",
              // backgroundColor:"primary.main",
              "& .MuiFormLabel-root": {
                right: "20px !important",
                left: "auto !important",
                transformOrigin: "top right !important",
              },
              // "& input": {
              //   "&::placeholder": {
              //     // textOverflow: 'ellipsis !important',
              //     color: theme.palette.primary.light,
              //     opacity: 1,
              //   },
              // },
              "& .MuiFilledInput-root": {
                backgroundColor: theme.palette.primary.light,
                border: "solid #D1D1D6 1px",
                // color:theme.palette.primary.main,
                borderRadius: "8px",
              },
              "& .MuiInputLabel-root": {
                right: "30px",
                left: "auto",
                fontSize:  "18px" ,
                '@media (max-width: 420px)' : {
                  fontSize:  "13px" ,
                },
                '@media (min-width: 420px) and (max-width: 600px)' : {
                  fontSize:  "14px" ,
                },
                '@media (min-width: 600px) and (max-width: 960px)' : {
                  fontSize:  "16px" ,
                },
              },
            }}
          />
        )}
        InputProps={{
          disableUnderline: true,
          sx: {
            borderRadius: "10px",
            fontSize:  "18px" ,
            '@media (max-width: 420px)' : {
              fontSize:  "13px" ,
            },
            '@media (min-width: 420px) and (max-width: 600px)' : {
              fontSize:  "14px" ,
            },
            '@media (min-width: 600px) and (max-width: 960px)' : {
              fontSize:  "16px" ,
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}
