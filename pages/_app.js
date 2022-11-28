import "../styles/globals.css";
import Layouts from "../components/layouts";
import Theme from "../assets/theme";
import { ThemeProvider, useMediaQuery, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import StoreContext from "../assets/context/StoreContext";
import createEmotionCache from "../assets/context/createEmotionCache";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";


const clientSideEmotionCache = createEmotionCache();
function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    const mode = localStorage.getItem("mode") === "true";
    setDarkMode(mode);
  }, []);

  const _setDarkMode = (newmode) => {
    localStorage.setItem("mode", newmode);
    setDarkMode(newmode);
  };

  return (
    <CacheProvider value={emotionCache}>
      <StoreContext.Provider value={{ darkMode, setDarkMode: _setDarkMode }}>
        <ThemeProvider theme={darkMode ? Theme.dark : Theme.light}>
          <CssBaseline />
          <Layouts>
            <Component {...pageProps} />
          </Layouts>
        </ThemeProvider>
      </StoreContext.Provider>
    </CacheProvider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
export default MyApp;