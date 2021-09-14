import React from "react";
import { createGlobalStyle, ThemeProvider as StyledProvider } from "styled-components";


const ThemeProvider = ({ children, theme }) => {
  <StyledProvider theme={theme}>{children}</StyledProvider>;
};

export default ThemeProvider;
