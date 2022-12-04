import { useState } from "react";
import {
  Box,
  MenuItem,
  FormControl,
  Select,
  OutlinedInput,
} from "@mui/material";
import SubmitButton from "./SubmitButton";
import style from "../../styles/Home.module.scss";

const SelectCustom = ({ text, textButton }) => {
  const [membershipType, setMembershipType] = useState(text);
  const options = [{ name: "شرکتی" }, { name: "خصوصی" }, { name: "عمومی" }];

  const handleChange = (event) => {
    setMembershipType(event.target.value);
  };
  return (
    <Box className={style.boxButton}>
      <Box sx={{ width: { lg: "300px", md: "260px",sm:"280px", xs: "100%" } , m:"auto"}}>
        <FormControl fullWidth variant="outlined">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="membershipType"
            onChange={handleChange}
            sx={{
              fontSize: { md: "20px", sm: "18px", tiny: "16px", xs: "14px" },
              backgroundColor: "background.default",
              boxShadow: "none",
              height: { sm: "60px", tiny: "50px", xs: "45px" },
              borderRadius: { tiny: "10px", xs: "5px" },
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: 0,
              },
            }}
            multiple={false}
            displayEmpty
            value={membershipType}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return;
              }
              return selected;
            }}
          >
            {options.map((el, index) => (
              <MenuItem key={index} value={el.name}>
                {el.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <SubmitButton text={textButton} />
      </Box>
    </Box>
  );
};

export default SelectCustom;
