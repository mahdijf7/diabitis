import { Box, Typography } from "@mui/material";
import style from "../../styles/Home.module.scss";
import t from "../../public/locales/defualt/common.json";
import SelectWrapper from "../form/SelectWrapper";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import SubmitButtonFill from "../form/SubmitButtonFill";

const SelectCustom = ({noClass,setTypeSelected}) => {
  const router = useRouter();
  const memberOptions = [
    { name: t.home.patient, id: "patient" },
    { name: t.home.doctor, id: "doctor" },
    { name: t.home.company, id: "company" },
    { name: t.home.agent, id: "agent" },
  ];
  const initialValuesCreate = {
    member: "",
  };
  const Validation_Schema = Yup.object({
    member: Yup.string().required(t.all.required),
  });
  const handleSubmit = (values) => {
    console.log(values);
    router.push(`/register/${values.member}`);
  };
  return (
    <Box className={noClass ? "" : style.boxButton  }>
      <Box
        sx={{
          width: { lg: "300px", md: "260px", sm: "280px", xs: "220px" },
          m: "auto",
        }}
      >
        <Formik
          initialValues={initialValuesCreate}
          validationSchema={Validation_Schema}
          onSubmit={handleSubmit}
        >
          <Form>
            <SelectWrapper
              name="member"
              options={memberOptions}
              text={t.home.membershipType}
              setTypeSelected={setTypeSelected || null}
            />
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
