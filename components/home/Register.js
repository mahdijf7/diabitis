import { Box,useMediaQuery } from "@mui/material";
import CustomButton from "../utiles/CustomButton";
import t from "../../public/locales/defualt/common.json";

const Register = () => {
  const isMatch = useMediaQuery("(max-width:1440px)");
  return (
    <Box
      display="flex"
      width={{ lg: "66%", md: "77%" }}
      maxWidth="1000px"
      m="40px auto"
      justifyContent="space-between"
    >
      <CustomButton
        text={t.home.easyRegister}
        font="large"
        minWidth={{ lg: isMatch ? "430" : "460px", md: "48%" }}
        padd={{ md: "24px", lg: "26px" }}
      />
      <CustomButton
        text={t.home.loginGroup}
        font="large"
        minWidth={{ lg: isMatch ? "430" :"460px", md: "48%" }}
        padd={{ md: "24px", lg: "26px" }}
      />
    </Box>
  );
};

export default Register;
