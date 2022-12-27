import { Box, useMediaQuery } from "@mui/material";
import CustomButton from "../utiles/CustomButton";
import t from "../../public/locales/defualt/common.json";
import Image from "next/image";
import { useRouter } from "next/router";

const RegisterMini = () => {
  const router = useRouter();
  const isMatch = useMediaQuery("(max-width:1440px)");
  return (
    <Box
      display="grid"
      maxWidth={{ xs: "400px" }}
      m={{ tiny: "30px 65px", xs: "25px 20px", sm: "30px auto" }}
    >
      <CustomButton
        onClick={() => {
          router.push("/register");
        }}
        text={
          <Box display="flex" alignItems="center">
            <Box ml="10px" mt="4px">
              <Image
                src={"/images/home/addUser.svg"}
                width="20px"
                height="20px"
                loading="lazy"
              />
            </Box>
            {t.home.easyRegister}
          </Box>
        }
        font="bold"
        mb="20px"
      />
      <CustomButton
        onClick={() => {
          router.push("/login");
        }}
        text={
          <Box display="flex" alignItems="center">
            <Box ml="10px" mt="4px">
              <Image
                src={"/images/home/joinUser.svg"}
                width="20px"
                height="20px"
                loading="lazy"
              />
            </Box>
            {t.home.loginGroup}
          </Box>
        }
        font="bold"
      />
    </Box>
  );
};

export default RegisterMini;
