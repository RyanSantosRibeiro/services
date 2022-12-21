import React from "react";

import type { AppProps } from "next/app"
import GlobalStyles from "../styles/global";
import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";

const  App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
    </ThemeProvider>
  )
}

export default App;
