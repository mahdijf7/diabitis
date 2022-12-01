import { Box } from "@mui/material";
import CustomButton from "../utiles/CustomButton";
import t from "../../public/locales/defualt/common.json";

const Register = () => {
  return (
    <Box
      display="flex"
      width={{ lg: "70%", md: "80%" }}
      maxWidth="1100px"
      m="40px auto"
      justifyContent={{ lg: "space-around", md: "space-between" }}
    >
      <CustomButton
        text={t.home.easyRegister}
        font="large"
        minWidth={{ lg: "448px", md: "48%" }}
        padd={{ md: "24px", lg: "26px" }}
      />
      <CustomButton
        text={t.home.loginGroup}
        font="large"
        minWidth={{ lg: "448px", md: "48%" }}
        padd={{ md: "24px", lg: "26px" }}
      />
    </Box>
  );
};

export default Register;
