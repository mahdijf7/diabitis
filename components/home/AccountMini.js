//-----------------------------------mui-------------------------------
import { Box, Container, Typography, useTheme } from "@mui/material";
import t from "../../public/locales/defualt/common.json";
import SelectCustom from "./SelectCustom";

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
        width="90%"
        m="10% auto 0 auto"
        pt="3%"
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
              width: "40%",
              height: "55px",
              right: "30%",
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
                typography: { md: "subtitle1", lg: "h4" },
              }}
            >
              {t.home.group}
            </Typography>
          </Box>
          <Box p="2vw 0 4vw 0">
            {list.map((el, index) => (
              <Typography
                sx={{
                  lineHeight: "50px",
                  typography: { md: "h6", lg: "h3" },
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
        sx={{
          mt: "-10%",
          // mb: 5,
          zIndex:-1,
          position:"relative",
          height: "300px",
          backgroundColor: "secondary.main",
          // textAlign: "end",
        }}
      >
        <SelectCustom
          text={t.home.membershipType}
          textButton={t.home.continue}
        />
      </Container>
    </>
  );
};

export default AccountMini;
