import { Box, Typography, useTheme } from "@mui/material";
import SelectCustom from "../utiles/SelectCustom";
import t from "../../public/locales/defualt/common.json";
import Image from "next/image";
import registerPic from "../../public/images/register/registerPic.svg";
import { useState } from "react";

const Rgister = () => {
  const theme = useTheme();
  const [typeSelected, setTypeSelected] = useState("none");

  const CreateText = ({ title, list }) => {
    return (
      <Box
        mr={{ md: "5%", xs: "auto" }}
        textAlign="center"
        pb="20px"
      >
        <Typography
          fontWeight="700 !important"
          color="common.white"
          mb="25px"
          mt="15px"
          typography={{
            lg: "h2",
            md: "h4",
            sm: "body2",
            tiny: "subtitle3",
            xs: "subtitle5",
          }}
        >
          {title}
        </Typography>
        {list.map((el, index) => (
          <Box key={index} display="flex" alignItems="flex-start">
              <Box
                width="5px"
                height="5px"
                mx="5px"
                mt="10px"
                bgcolor="common.white"
                borderRadius="50%"
              />
            <Typography
              fontWeight="500 !important"
              lineHeight="30px !important"
              textAlign="justify"
              width="calc(100% - 15px)"
              color="common.white"
              typography={{
                lg: "body1",
                md: "subtitle3",
                sm: "subtitle5",
                tiny: "subtitle6",
                xs: "subtitle7",
              }}
            >
              {el}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  };

  const BenefitText = () => {
    switch (typeSelected) {
      case "none":
        return <Image src={registerPic} alt="" />;
      case "patient":
        return (
          <CreateText
            title={t.register.benefitPatient}
            list={[
              t.register.patientDes1,
              t.register.patientDes2,
              t.register.patientDes3,
              t.register.patientDes4,
              t.register.patientDes5,
            ]}
          />
        );
      case "doctor":
        return (
          <CreateText
            title={t.register.benefitDoctor}
            list={[
              t.register.doctorDes1,
              t.register.doctorDes2,
              t.register.doctorDes3,
              t.register.doctorDes4,
              t.register.doctorDes5,
            ]}
          />
        );
      case "company":
        return (
          <CreateText
            title={t.register.benefitCompany}
            list={[
              t.register.companyDes1,
              t.register.companyDes2,
              t.register.companyDes3,
              t.register.companyDes4,
              t.register.companyDes5,
            ]}
          />
        );
      case "agent":
        return (
          <CreateText
            title={t.register.benefitAgent}
            list={[
              t.register.agentDes1,
              t.register.agentDes2,
              t.register.agentDes3,
              t.register.agentDes4,
              t.register.agentDes5,
            ]}
          />
        );

      default:
        return <Image src={registerPic} alt="" />;
    }
  };
  return (
    <Box
      sx={{
        width: { md: "95%", xs: "100%" },
        mx: "auto",
        mt: "30px",
        pb: "10%",
        backgroundRepeat: "no-repeat !important",
        //   backgroundSize: "contain !important",
        background: "url(/images/register/bgpic.svg)",
      }}
    >
      <Box width="100%" maxWidth="1220px" mx="auto" pt="60px">
        <Box
          width={{ md: "50%", sm: "80%", xs: "90%" }}
          justifyContent="center"
          bgcolor="common.white"
          minHeight={{ lg: "366px", md: "330px", sm: "260px", xs: "220px" }}
          mr={{ md: "0", sm: "10%", xs: "5%" }}
          sx={{
            boxShadow: theme.customShadows.widget,
          }}
        >
          <Typography
            textAlign="center"
            pt="5%"
            pb={{ md: "10%", xs: "10px" }}
            typography={{ md: "h2", sm: "subtitle1", xs: "subtitle5" }}
          >
            {t.register.group}
          </Typography>
          <Box width="100%" display="flex" justifyContent="center">
            <SelectCustom noClass={true} setTypeSelected={setTypeSelected} />
          </Box>
        </Box>
        <Box
          width={{ md: "55%", sm: "90%", xs: "100%" }}
          mr={{ md: "45%", sm: "5%", xs: "auto" }}
          mt={{ md: "-20%", xs: "-100px" }}
          display="flex"
          zIndex={-1}
          px={{sm:"40px", tiny:"30px", xs:"20px"}}
          justifyContent="center"
          alignItems="center"
          position="relative"
          bgcolor="secondary.main"
          minHeight={{ lg: "364px", md: "330px" }}
          sx={{
            boxShadow: theme.customShadows.widget,
          }}
        >
          <Box mt={{ md: "0px", xs: "120px" }}>
            <BenefitText />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Rgister;
