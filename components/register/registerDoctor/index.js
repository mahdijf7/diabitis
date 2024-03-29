import { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import t from "../../../public/locales/defualt/common.json";
import TableFrameRegister from "../../form/TableFrameRegister";
import SelectWrapper from "../../form/SelectWrapper";
import SubmitButtonFill from "../../form/SubmitButtonFill";
import FetchApi from "../../../services/FetchApi";
import Image from "next/image";
import refresh from "../../../public/images/register/refresh.svg";
import CustomSnackbar from "../../form/CustomSnackbar";
import CustomInputFill from "../../form/CustomInputFill";

const RegisterDoctor = ({ provinceOptions, citiesList }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadrefresh, setLoadrefresh] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackData, setSnackData] = useState();
  const [captchaImage, setCaptchaImage] = useState(null);
  const [hashKey, setHashKey] = useState(null);
  const [cityOptions, setCityOptions] = useState([]);

  const _setProvince = (id) => {
    setCityOptions(citiesList[id] || []);
  };
  const list = [
    {
      tag: (
        <CustomInputFill name="firstname" text={t.registerDoctor.firstname} />
      ),
      sm: 6,
    },
    {
      tag: <CustomInputFill name="lastname" text={t.registerDoctor.lastname} />,
      sm: 6,
    },
    {
      tag: (
        <CustomInputFill
          name="nationalCode"
          text={t.registerDoctor.nationalCode}
          type="number"
        />
      ),
      sm: 6,
    },
    {
      tag: (
        <CustomInputFill
          name="mobile"
          text={t.registerDoctor.mobile}
          type="number"
        />
      ),
      sm: 6,
    },
    {
      tag: <CustomInputFill name="email" text={t.registerDoctor.email} />,
      sm: 6,
    },
    {
      tag: (
        <SelectWrapper
          name="province"
          options={provinceOptions}
          text={t.registerDoctor.province}
          setProvince={_setProvince}
        />
      ),
      sm: 6,
    },
    {
      tag: (
        <SelectWrapper
          name="city"
          options={cityOptions}
          text={t.registerDoctor.city}
        />
      ),
      sm: 6,
    },
    {
      tag: <CustomInputFill name="field" text={t.registerDoctor.specialty} />,
      sm: 6,
    },
    {
      tag: (
        <CustomInputFill
          name="medicalNumber"
          text={t.registerDoctor.medicalNumber}
          type="number"
        />
      ),
      sm: 6,
    },
  ];
  const Validation_Schema = Yup.object({
    firstname: Yup.string().required(t.all.required),
    lastname: Yup.string().required(t.all.required),
    nationalCode: Yup.number().required(t.all.required),
    mobile: Yup.number().required(t.all.required),
    email: Yup.string().email().required(t.all.required),
    province: Yup.string().required(t.all.required),
    city: Yup.string().required(t.all.required),
    field: Yup.string().required(t.all.required),
    medicalNumber: Yup.number().required(t.all.required),
    code: Yup.string().required(t.all.required),
  });
  const getCaptcha = async () => {
    const res = await FetchApi("", "fa", "getCaptcha");
    if (res.success) {
      setCaptchaImage(res.dataBody.html);
      setHashKey(res.dataBody.hashKey);
    }
  };

  useEffect(() => {
    async function fetchData() {
      await getCaptcha();
    }
    fetchData();
  }, []);

  const handleRefresh = async () => {
    setLoadrefresh(true);
    setCaptchaImage(null);
    await getCaptcha();
    setLoadrefresh(false);
  };
  const initialValuesCreate = {
    type: "doctor",
    firstname: "",
    lastname: "",
    nationalCode: "",
    mobile: "",
    email: "",
    province: "",
    city: "",
    field: "",
    medicalNumber: "",
    code: "",
  };

  const handleSubmit = async (values) => {
    setIsLoading(true);
    values.hashKey = hashKey;
    const res = await FetchApi("", "fa", "register", values);
    setSnackData({
      title: t.all[res.success ? "success" : "error"],
      type: res.success ? "success" : "error",
      des: res.message,
    });
    setOpenSnackbar(true);
    setIsLoading(false);
    if (!res.success) await handleRefresh();
  };
  return (
    <>
      <CustomSnackbar
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
        snackData={snackData}
      />
      <Formik
        initialValues={initialValuesCreate}
        validationSchema={Validation_Schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <TableFrameRegister
            notFoundText={"account.noData"}
            data={initialValuesCreate}
          >
            {list.map((el, index) => (
              <Grid key={index} item textAlign="center" xs={12} sm={el.sm}>
                {el.tag}
              </Grid>
            ))}
            <Grid item textAlign="center" xs={12} sm={6}></Grid>
            <Grid item textAlign="center" xs={12} sm={6}>
              <CustomInputFill name="code" text={t.registerDoctor.code} />
            </Grid>
            {/* <Grid item textAlign="center" xs={12} sm={6}></Grid> */}
            <Grid
              item
              display="flex"
              pt="10px"
              justifyContent="center"
              xs={12}
              sm={6}
            >
              {captchaImage ? (
                <div dangerouslySetInnerHTML={{ __html: captchaImage }} />
              ) : (
                <CircularProgress />
              )}
              <Button
                onClick={handleRefresh}
                disabled={loadrefresh}
                sx={{
                  minHeight: { lg: "50px", xs: "40px" },
                  maxHeight: { lg: "50px", xs: "40px" },
                  minWidth: { lg: "50px", xs: "40px" },
                  maxWidth: { lg: "50px", xs: "40px" },
                  boxShadow: "none",
                  p: "0px",
                  mr: "10px",
                  "&:hover": {
                    bgcolor: "warning.main",
                  },
                }}
                color="warning"
                variant="contained"
              >
                <Image src={refresh} width="35px" height="35px" />
              </Button>
            </Grid>
            <Box
              width="100%"
              display="grid"
              sx={{
                my: "2%",
                ml: { sm: "10%" },
              }}
            >
              <Grid item xs={12} sm={6}>
                <SubmitButtonFill fullWidth={true} disabled={isLoading}>
                  {!isLoading ? (
                    <Typography
                      sx={{
                        typography: {
                          xs: "body4",
                          sm: "subtitle3",
                          md: "body2",
                          lg: "h4",
                        },
                      }}
                      color="text.secondary"
                    >
                      {t.registerDoctor.requestConfirmation}
                    </Typography>
                  ) : (
                    <CircularProgress size={20} />
                  )}
                </SubmitButtonFill>
              </Grid>
              {<Grid item xs={12} sm={6}></Grid>}
            </Box>
          </TableFrameRegister>
        </Form>
      </Formik>
    </>
  );
};

export default RegisterDoctor;
