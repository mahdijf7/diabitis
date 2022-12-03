import { lightMode, darkMode } from "./default";

import { createTheme } from "@mui/material";

const overrides = {
  typography: {
    h1: {
      fontSize: "30px",
      fontWeight: "500",
      lineHeight: "46.96px",
    },
    h2: {
      fontSize: "22px",
      fontWeight: "700",
      lineHeight: "34.43px",
    },
    h3: {
      fontSize: "22px",
      fontWeight: "400",
      lineHeight: "50px",
    },
    h4: {
      fontSize: "20px",
      fontWeight: "700",
      lineHeight: "31.3px",
    },
    h5: {
      fontSize: "20px",
      fontWeight: "500",
      lineHeight: "31.3px",
    },
    h6: {
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: "40px",
    },
    body1: {
      fontSize: "18px",
      fontWeight: "500",
    },
    body2: {
      fontSize: "18px",
      fontWeight: "700",
    },
    body3: {
      fontSize: "14px",
      fontWeight: "700",
    },
    body4: {
      fontSize: "14px",
      fontWeight: "500",
    },
    subtitle1: {
      fontSize: "18px",
      fontWeight: "400",
    },
    subtitle2: {
      fontSize: "18px",
      fontWeight: "300",
    },
    subtitle3: {
      fontSize: "16px",
      fontWeight: "400",
    },
    subtitle4: {
      fontSize: "16px",
      fontWeight: "300",
      lineHeight: "25.04px",
    },
    subtitle5: {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "21.91px",
    },
    subtitle6: {
      fontSize: "12px",
      fontWeight: "400",
    },
    subtitle7: {
      fontSize: "10px",
      fontWeight: "400",
    },
    fontFamily: `"IRANSans", "sans-serif", "serif" `,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  breakpoints: {
    values: {
      xs: 0,
      tiny: 362,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  customShadows: {
    border: "2px solid #45A9A3",
    widget: "0px 0px 10px 5px #1C24531A",
    widgetDark: "0px 0px 10px 5px rgba(28, 36, 83, 0.1)",
    // widgetWide:
    //   "",
  },
};

export default {
  light: createTheme({ ...lightMode, ...overrides }),
  dark: createTheme({ ...darkMode, ...overrides }),
};
