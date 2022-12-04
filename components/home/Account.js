//-----------------------------------mui-------------------------------
import { Box, Container, Typography, useTheme } from "@mui/material";
import t from "../../public/locales/defualt/common.json";
import SelectCustom from "./SelectCustom";

import style from "../../styles/Home.module.scss";

const Account = () => {
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
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        mt: 15,
        mb: 15,
        height: { lg: "261px", md: "220px" },
        backgroundColor: "secondary.main",
        textAlign: "end",
      }}
    >
      <Box
        sx={{
          mt: 15,
          mb: 15,
          height: "100%",
          backgroundColor: "secondary.main",
          textAlign: "end",
          // overflow:"hidden",
          backgroundRepeat: "no-repeat !important",
          backgroundSize: "contain !important",
          background: "url(/images/home/users.svg)",
        }}
      >
        <Box display="flex" maxWidth="1400px" width="90%" m="auto">
          <Box
            bgcolor="common.white"
            className={style.memberBox}
            sx={{
              boxShadow: theme.customShadows.widget,
            }}
          >
            <Box
              position="relative"
              display="flex"
              bgcolor="secondary.main"
              sx={{
                borderRadius: "2px",
                width: "214px",
                // right: "calc( 50% - 107px)",
                height: { xs: "45px", lg: "65px" },
                justifyContent: "center",
                justifySelf: "center",
                alignItems: "center",
                mt: {lg:"-30px",xs:"-20px"},
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
          <SelectCustom
            text={t.home.membershipType}
            textButton={t.home.continue}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Account;
