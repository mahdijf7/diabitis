import { useEffect, useState } from "react";
import {
  Box,
  Container,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import t from "../../public/locales/defualt/common.json";
import SubmitButtonFill from "../form/SubmitButtonFill";
import FetchApi from "../../services/FetchApi";
import TableFrameLogin from "../form/TableFrameLogin";
import CustomInputFillLogin from "../form/CustomInputFillLogin";
import CustomSnackbar from "../form/CustomSnackbar";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackData, setSnackData] = useState();
  const [disabledCod, setDisabledCod] = useState(true);
  const [disabledMobile, setDisabledMobile] = useState(false);

  const list = [
    {
      label: t.login.nationalCode,
      labeldes: t.login.nationalCodedes,
      tag: (
        <CustomInputFillLogin
          name="nationalCode"
          t={t.login.nationalCodedes}
          disabled={disabledMobile}
        />
      ),
    },
    {
      label: t.login.mobile,
      labeldes: t.login.mobiledes,
      tag: (
        <CustomInputFillLogin
          name="mobile"
          t={t.login.mobiledes}
          disabled={disabledMobile}
        />
      ),
    },
    {
      label: t.login.code,
      labeldes: t.login.codedes,
      tag: (
        <CustomInputFillLogin
          name="code"
          t={t.login.codedes}
          disabled={disabledCod}
        />
      ),
    },
  ];
  const Validation_Schema = Yup.object({
    nationalCode: Yup.number().required(t.all.required),
    mobile: Yup.number().required(t.all.required),
    code: Yup.number().required(t.all.required),
  });
  const initialValuesCreate = {
    nationalCode: "",
    mobile: "",
    code: "",
  };
  const handleSubmit = async (values) => {
    setIsLoading(true);
    // const res = await FetchApi("", "fa", "register", values);
    // setSnackData({
    //   title: t.all[res.success ? "success" : "error"],
    //   type: res.success ? "success" : "error",
    //   des: res.message,
    // });
    // setOpenSnackbar(true);
    setIsLoading(false);
  };
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "90vh",
        pt: 10,
      }}
    >
      <Box
        sx={{
          width: "90%",
          backgroundRepeat: "no-repeat !important",
          //   backgroundSize: "contain !important",
          background: "url(/images/login/bg.svg)",
        }}
      >
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
              <TableFrameLogin
                notFoundText={"account.noData"}
                data={initialValuesCreate}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  sx={{ width: "100%", mb: 2 }}
                >
                  <Typography
                    sx={{
                      typography: { xs: "body2", sm: "h4", md: "h2" },
                    }}
                    component="h1"
                  >
                    {t.login.login}
                  </Typography>
                </Box>
                {list.map((el, index) => (
                  <Grid key={index} item textAlign="start" xs={12}>
                    <Typography
                      sx={{
                        typography: {
                          xs: "subtitle5",
                          sm: "subtitle3",
                          md: "subtitle1",
                        },
                      }}
                      component="h1"
                    >
                      {el.label}
                    </Typography>
                    {el.tag}
                  </Grid>
                ))}
                <Box
                  width="100%"
                  display="flex"
                  //   justifyContent="center"
                  sx={{
                    my: "5%",
                    // ml: { sm: "10%" },
                  }}
                >
                  <Grid item xs={3}></Grid>
                  <Grid item xs={6}>
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
                          {t.login.sendCode}
                        </Typography>
                      ) : (
                        <CircularProgress size={20} />
                      )}
                    </SubmitButtonFill>
                  </Grid>
                  <Grid item xs={3}></Grid>
                </Box>
              </TableFrameLogin>
            </Form>
          </Formik>
        </>
      </Box>
    </Container>
  );
};

export default Login;
