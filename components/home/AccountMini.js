//-----------------------------------mui-------------------------------
import { Box, Container, Typography, useTheme } from "@mui/material";
import t from "../../public/locales/defualt/common.json";
import SelectCustom from "../utiles/SelectCustom";

import style from "../../styles/Home.module.scss";

const AccountMini = () => {
  const theme = useTheme();
  const list = [
    {
      text: t.home.accountDes1,
    },
    {
      text: t.home.accountDes2,
    },
    {
      text: t.home.accountDes3,
    },
    {
      text: t.home.accountDes4,
    },
    {
      text: t.home.accountDes5,
    },
  ];

  return (
    <>
      <Box
        width={{ sm: "80%", xs: "90%" }}
        m={{ tiny: "10% auto 0 auto", xs: "15% auto 0 auto" }}
        pt={{ sm: "3%", tiny: "5%", xs: "7%" }}
        bgcolor="common.white"
        sx={{
          transform: "scale(1)",
          boxShadow: theme.customShadows.widget,
        }}
      >
        <Box position="relative">
          <Box
            position="fixed"
            // display="flex"
            bgcolor="secondary.main"
            sx={{
              borderRadius: "2px",
              width: { sm: "35%", xs: "55%" },
              right: { sm: "32.5%", xs: "22.5%" },
              height: { xs: "45px", lg: "65px" },
              top: "-27px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              // mt: "-30px",
            }}
          >
            <Typography
              component="h1"
              color="common.white"
              sx={{
                typography: { xs: "subtitle3", tiny: "body2" },
              }}
            >
              {t.home.group}
            </Typography>
          </Box>
          <Box p="2vw 0 4vw 0">
            {list.map((el, index) => (
              <Typography
                sx={{
                  lineHeight: "25px",
                  typography: {
                    sm: "subtitle5",
                    tiny: "subtitle6",
                    xs: "subtitle7",
                  },
                }}
                key={index}
                component="h1"
                color="text.secondary"
                textAlign="center"
              >
                {el.text}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
      <Container
        disableGutters
        maxWidth={false}
        className={style.memberBoxMini}
        sx={{
          backgroundColor: "secondary.main",
        }}
      >
        <SelectCustom />
      </Container>
    </>
  );
};

export default AccountMini;
