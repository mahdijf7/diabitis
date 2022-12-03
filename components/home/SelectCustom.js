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
      <Box sx={{ width: { lg: "300px", xs: "260px" } }}>
        <FormControl fullWidth variant="outlined">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="membershipType"
            onChange={handleChange}
            sx={{
              backgroundColor: "background.default",
              boxShadow: "none",
              borderRadius: "10px",
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
