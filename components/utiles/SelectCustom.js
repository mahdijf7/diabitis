import { Box, Typography } from "@mui/material";
import style from "../../styles/Home.module.scss";
import t from "../../public/locales/defualt/common.json";
import SelectWrapper from "../form/SelectWrapper";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import SubmitButtonFill from "../form/SubmitButtonFill";

const SelectCustom = () => {
  const router = useRouter();
  const memberOptions = [
    { name: t.home.real, id: "1" },
    { name: t.home.regal, id: "2" },
  ];
  const initialValuesCreate = {
    member: "",
  };
  const Validation_Schema = Yup.object({
    member: Yup.string(),
  });
  const handleSubmit = () => {
    router.push("/register");
  };
  return (
    <Box className={style.boxButton}>
      <Box
        sx={{
          width: { lg: "300px", md: "260px", sm: "280px", xs: "100%" },
          m: "auto",
        }}
      >
        <Formik
          initialValues={initialValuesCreate}
          validationSchema={Validation_Schema}
          onSubmit={handleSubmit}
        >
          <Form>
            <SelectWrapper name="member" options={memberOptions} t={t} />
            <SubmitButtonFill fullWidth={true}>
              <Typography
                sx={{
                  typography: { xs: "subtitle3", tiny: "body1", sm: "h4" },
                }}
                color="text.secondary"
              >
                {t.home.continue}
              </Typography>
            </SubmitButtonFill>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};

export default SelectCustom;
