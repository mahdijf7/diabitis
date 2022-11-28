import { lightMode, darkMode } from "./default";

import { createTheme } from "@mui/material";

const overrides = {
  typography: {
    h1: {
      fontSize: "40px",
      fontWeight: "700",
      lineHeight: "55px",
    },
    h2: {
      fontSize: "30px",
      fontWeight: "700",
      lineHeight: "45px",
    },
    h3: {
      fontSize: "28px",
      fontWeight: "700",
      lineHeight: "32px",
    },
    h4: {
      fontSize: "20px",
      fontWeight: "700",
    },
    h5: {
      fontSize: "22px",
      fontWeight: "700",
    },
    h6: {
      fontSize: "20px",
      fontWeight: "900",
    },
    body1: {
      fontSize: "18px",
      fontWeight: "700",
    },
    body2: {
      fontSize: "16px",
      fontWeight: "700",
    },
    body3: {
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "40px",
    },
    body4: {
      fontSize: "18px",
      fontWeight: "400",
      lineHeight: "28px",
    },
    subtitle1: {
      fontSize: "20px",
      fontWeight: "500",
    },
    subtitle2: {
      fontSize: "20px",
      fontWeight: "400",
    },
    subtitle3: {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "35px",
    },
    subtitle4: {
      fontSize: "14px",
      fontWeight: "400",
    },
    subtitle5: {
      fontSize: "12px",
      fontWeight: "500",
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
    widget: "0px -4px 20px 0px #06377533",
    // widgetDark:
    //   "",
    // widgetWide:
    //   "",
  },
};

export default {
  light: createTheme({ ...lightMode, ...overrides }),
  dark: createTheme({ ...darkMode, ...overrides }),
};
