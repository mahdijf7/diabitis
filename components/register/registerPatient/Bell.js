import { Box, Typography } from "@mui/material";
import Image from "next/image";
import bell from "../../public/images/register/bell.svg";
import t from "../../public/locales/defualt/common.json";

const Bell = () => {
  return (
    <Box sx={{ width: "100%", mb: 3 }}>
      <Box
        display="flex"
        bgcolor="gray.main"
        sx={{
          ml: { sm: "5%" },
          borderRadius: "10px",
          height: "75px",
          alignItems: "center",
        }}
      >
        <Box
          bgcolor="secondary.main"
          display="flex"
          sx={{
            width: { xs: "17%", md: "11%" },
            height: "75px",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            justifyContent: "center",
          }}
        >
          <Image src={bell} alt="" />
        </Box>
        <Box
          sx={{
            width: { xs: "83%", md: "89%" },
            px: "5px",
          }}
        >
          <Typography
            component="h1"
            sx={{
              typography: { md: "h6", sm: "body4", xs: "body4" },
              textAlign: { xs: "start", md: "center" },
            }}
          >
            {t.register.accountPrice}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Bell;
