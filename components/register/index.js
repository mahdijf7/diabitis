import { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import t from "../../public/locales/defualt/common.json";
import TableFrameEdit from "../form/TableFrameEdit";
import CustomInputOutline from "../form/CustomInputOutline";
import SelectWrapper from "../form/SelectWrapper";
import Bell from "./Bell";
import SubmitButtonFill from "../form/SubmitButtonFill";
import JalaliDatePicker from "../form/JalaliDatePicker";
import FetchApi from "../../services/FetchApi";
import Image from "next/image";
import refresh from "../../public/images/register/refresh.svg";
import CustomSnackbar from "../form/CustomSnackbar";

const Register = ({ provinceOptions, citiesList }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadrefresh, setLoadrefresh] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackData, setSnackData] = useState();
  const [captchaImage, setCaptchaImage] = useState(null);
  const [hashKey, setHashKey] = useState(null);
  const [cityOptions, setCityOptions] = useState([]);

  const genderOptions = [
    { name: t.register.female, id: "female" },
    { name: t.register.male, id: "male" },
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
      tag: <CustomInputOutline name="firstname" t={t} />,
      sm: 6,
    },
    {
      tag: <CustomInputOutline name="lastname" t={t} />,
      sm: 6,
    },
    {
      tag: <CustomInputOutline name="idNumber" t={t} />,
      sm: 6,
    },
    {
      tag: <CustomInputOutline name="nationalCode" t={t} />,
      sm: 6,
    },
    {
      tag: <CustomInputOutline name="fathersName" t={t} />,
      sm: 6,
    },
    {
      tag: <SelectWrapper name="gender" options={genderOptions} t={t} />,
      sm: 6,
    },
    {
      tag: <CustomInputOutline name="phone" t={t} />,
      sm: 6,
    },
    {
      tag: <CustomInputOutline name="mobile" t={t} />,
      sm: 6,
    },
    {
      tag: (
        <JalaliDatePicker name="birthDateAt" text={t.register.dateOfBirth} />
      ),
      sm: 6,
    },
    {
      tag: (
        <SelectWrapper
          name="diabetesType"
          options={typeOfDiabetesOptions}
          t={t}
        />
      ),
      sm: 6,
    },
    {
      tag: <CustomInputOutline name="email" t={t} />,
      sm: 6,
    },
    {
      tag: <CustomInputOutline name="postalCode" t={t} />,
      sm: 6,
    },
    {
      tag: (
        <SelectWrapper
          name="province"
          options={provinceOptions}
          t={t}
          setProvince={_setProvince}
        />
      ),
      sm: 6,
    },
    {
      tag: <SelectWrapper name="city" options={cityOptions} t={t} />,
      sm: 6,
    },
    {
      tag: <CustomInputOutline name="address" t={t} multiline />,
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
    firstname: "",
    lastname: "",
    idNumber: "",
    nationalCode: "",
    fathersName: "",
    gender: "",
    phone: "",
    mobile: "",
    birthDateAt: "",
    diabetesType: "",
    email: "",
    postalCode: "",
    province: "",
    city: "",
    address: "",
    code: "",
  };

  const handleSubmit = async (values) => {
    if (values.birthDateAt == "") delete values.birthDateAt;
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
    if(!res.success) await handleRefresh()
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
          <TableFrameEdit
            notFoundText={"account.noData"}
            data={initialValuesCreate}
          >
            <Bell />
            {list.map((el, index) => (
              <Grid key={index} item textAlign="center" xs={12} sm={el.sm}>
                {el.tag}
              </Grid>
            ))}
            <Grid item textAlign="center" xs={12} sm={6}>
              <CustomInputOutline name="code" t={t} />
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
              // justifyContent="center"
              sx={{
                my: "2%",
                ml: { sm: "10%" },
              }}
            >
              <Grid item xs={12} sm={6}>
                <SubmitButtonFill fullWidth={true} disabled={isLoading}>
                  {!isLoading ? (
                    <Typography variant={"h4"} color="text.secondary">
                      {t.register.confirmInformation}
                    </Typography>
                  ) : (
                    <CircularProgress size={20} />
                  )}
                </SubmitButtonFill>
              </Grid>
              {<Grid item xs={12} sm={6}></Grid>}
            </Box>
          </TableFrameEdit>
        </Form>
      </Formik>
    </>
  );
};

export default Register;
