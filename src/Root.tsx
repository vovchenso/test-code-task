import React from "react";
import { ThemeProvider } from "styled-components";

import App from "src/App";
import theme from "src/configs/theme";
import GlobalStyles from "src/components/GlobalStyles";

const Root: React.FC = () => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyles />
            <App />
        </>
    </ThemeProvider>
);

export default Root;
