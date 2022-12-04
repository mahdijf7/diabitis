import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import t from "../../../public/locales/defualt/common.json";

const FooterMini = ({ contact, icons, list }) => {
  return (
    <>
      <Box>
        <Image
          src={"/images/logo.svg"}
          width="53px"
          height="55px"
          loading="lazy"
        />
        <Typography
          color="common.white"
          sx={{
            typography: { sm: "body1", xs: "subtitle3" },
            pb: "20px",
            pt: "5px",
          }}
          component="h1"
        >
          {t.footer.title}
        </Typography>
        {list.map((el, index) => (
          <Typography
            key={index}
            color="common.white"
            sx={{ typography: { sm: "subtitle5", xs: "subtitle6" }, pb: "8px" }}
            component="h2"
          >
            {el.text}
          </Typography>
        ))}
      </Box>
      <Box>
        <Typography
          color="common.white"
          sx={{
            typography: { sm: "body1", xs: "subtitle3" },
            py: "15px",
            // pt: "80px",
            // px: "15%",
          }}
          component="h1"
        >
          {t.footer.contact}
        </Typography>
        {contact.map((el, index) => (
          <Box display="flex" key={index} alignItems="flex-start" mb="8px">
            <Box ml="10px">
              <Image src={el.icon} width="20px" height="20px" loading="lazy" />
            </Box>
            <Box width="85%">
              <Typography
                color="common.white"
                sx={{
                  typography: { sm: "subtitle5", xs: "subtitle6" },
                }}
                component="h2"
              >
                {el.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box display="flex" justifyContent="center">
        {icons.map((el, index) => (
          <Box key={index} mx={{ sm: "12px", xs: "7px" }}>
            <Image src={el} width="27px" height="27px" loading="lazy" />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default FooterMini;
