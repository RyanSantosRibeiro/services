import React from "react";

import type { AppProps } from "next/app"
import theme from "../../styles/theme";
import { ThemeProvider } from "styled-components";
import { Container } from "./style";

const  Banner: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    // <ThemeProvider theme={theme}>
        <Container>
            <h2>Banner 2</h2>
        </Container>
    // </ThemeProvider>
  )
}

export default Banner;
