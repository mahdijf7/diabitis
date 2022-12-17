import { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import t from "../../../public/locales/defualt/common.json";
import TableFrameRegister from "../../form/TableFrameRegister";
import SelectWrapper from "../../form/SelectWrapper";
import UploadButton from "../../form/UploadButton";
import Bell from "./Bell";
import SubmitButtonFill from "../../form/SubmitButtonFill";
import FetchApi from "../../../services/FetchApi";
import JalaliDatePicker from "../../form/JalaliDatePicker";
import Image from "next/image";
import refresh from "../../../public/images/register/refresh.svg";
import CustomSnackbar from "../../form/CustomSnackbar";
import CustomInputFill from "../../form/CustomInputFill";
import Profile from "./Profile";

const RegisterPatient = ({ provinceOptions, citiesList }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadrefresh, setLoadrefresh] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackData, setSnackData] = useState();
  const [captchaImage, setCaptchaImage] = useState(null);
  const [hashKey, setHashKey] = useState(null);
  const [cityOptions, setCityOptions] = useState([]);
  // const [fileUploaded, setFileUploaded] = useState();

  const genderOptions = [
    { name: t.register.female, id: "female" },
    { name: t.register.male, id: "male" },
  ];
  const countryCodeOptions = [
    { name: t.register.countryCodeIran, id: "countryCodeIran" },
  ];
  const typeOfDiabetesOptions = [
    { name: t.register.typeOfDiabetes1, id: "A" },
    { name: t.register.typeOfDiabetes2, id: "B" },
    { name: t.register.typeOfDiabetes3, id: "C" },
  ];
  const _setProvince = (id) => {
    setCityOptions(citiesList[id] || []);
  };
  const list = [
    {
      tag: <CustomInputFill name="firstname" text={t.register.firstname} />,
      sm: 6,
    },
    {
      tag: <CustomInputFill name="lastname" text={t.register.lastname} />,
      sm: 6,
    },
    {
      tag: (
        <CustomInputFill
          name="idNumber"
          text={t.register.idNumber}
          type="number"
        />
      ),
      sm: 6,
    },
    {
      tag: (
        <CustomInputFill
          name="nationalCode"
          text={t.register.nationalCode}
          // type="number"
        />
      ),
      sm: 6,
    },
    {
      tag: <CustomInputFill name="fathersName" text={t.register.fathersName} />,
      sm: 6,
    },
    {
      tag: (
        <SelectWrapper
          name="gender"
          options={genderOptions}
          text={t.register.gender}
        />
      ),
      sm: 6,
    },
    {
      tag: (
        <JalaliDatePicker name="birthDateAt" text={t.register.birthDateAt} />
      ),
      sm: 6,
    },
    {
      tag: (
        <SelectWrapper
          name="countryCode"
          options={countryCodeOptions}
          text={t.register.countryCode}
        />
      ),
      sm: 6,
    },
    {
      tag: (
        <CustomInputFill name="phone" text={t.register.phone} type="number" />
      ),
      sm: 6,
    },
    {
      tag: (
        <CustomInputFill
          name="mobile"
          text={t.register.mobile}
          // type="number"
        />
      ),
      sm: 6,
    },
    {
      tag: (
        <SelectWrapper
          name="diabetesType"
          options={typeOfDiabetesOptions}
          text={t.register.diabetesType}
        />
      ),
      sm: 6,
    },
    {
      tag: <UploadButton name="file" text={t.register.attachedFile} />,
      sm: 6,
    },
    {
      tag: <CustomInputFill name="email" text={t.register.email} />,
      sm: 6,
    },
    {
      tag: (
        <CustomInputFill
          name="postalCode"
          text={t.register.postalCode}
          type="number"
        />
      ),
      sm: 6,
    },
    {
      tag: (
        <SelectWrapper
          name="province"
          options={provinceOptions}
          text={t.register.province}
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
          text={t.register.city}
        />
      ),
      sm: 6,
    },
    {
      tag: (
        <CustomInputFill name="address" text={t.register.address} multiline />
      ),
      sm: 12,
    },
  ];
  const Validation_Schema = Yup.object({
    firstname: Yup.string().required(t.all.required),
    lastname: Yup.string().required(t.all.required),
    idNumber: Yup.number().required(t.all.required),
    nationalCode: Yup.number().required(t.all.required),
    fathersName: Yup.string().required(t.all.required),
    gender: Yup.string().required(t.all.required),
    phone: Yup.number().required(t.all.required),
    mobile: Yup.number().required(t.all.required),
    birthDateAt: Yup.number(),
    email: Yup.string().email().required(t.all.required),
    file: Yup.mixed().required(t.all.required),
    postalCode: Yup.number().required(t.all.required),
    province: Yup.string().required(t.all.required),
    city: Yup.string().required(t.all.required),
    address: Yup.string().required(t.all.required),
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
    type: "patient",
    firstname: "",
    lastname: "",
    idNumber: "",
    nationalCode: "",
    fathersName: "",
    gender: "",
    countryCode: "",
    phone: "",
    mobile: "",
    birthDateAt: "",
    diabetesType: "",
    email: "",
    postalCode: "",
    file: "",
    province: "",
    city: "",
    address: "",
    code: "",
  };

  const handleSubmit = async (values) => {
    setIsLoading(true);
    const formData = new FormData();
    if (values.birthDateAt != "")
      formData.append("birthDateAt", values.birthDateAt);
    formData.append("firstname", values.firstname);
    formData.append("lastname", values.lastname);
    formData.append("idNumber", values.idNumber);
    formData.append("nationalCode", values.nationalCode);
    formData.append("fathersName", values.fathersName);
    formData.append("gender", values.gender);
    formData.append("phone", values.phone);
    formData.append("mobile", values.mobile);
    formData.append("diabetesType", values.diabetesType);
    formData.append("email", values.email);
    formData.append("postalCode", values.postalCode);
    formData.append("province", values.province);
    formData.append("city", values.city);
    formData.append("address", values.address);
    formData.append("code", values.code);
    formData.append("type", values.type);
    formData.append("file", values.file);
    formData.append("hashKey", hashKey);
    const res = await FetchApi("", "fa", "register", formData);
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
            <Bell />
            <Profile />
            {list.map((el, index) => (
              <Grid key={index} item textAlign="center" xs={12} sm={el.sm}>
                {el.tag}
              </Grid>
            ))}
            <Grid item textAlign="center" xs={12} sm={6}>
              <CustomInputFill name="code" text={t.register.code} />
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
                      {t.register.confirmInformation}
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

export default RegisterPatient;
