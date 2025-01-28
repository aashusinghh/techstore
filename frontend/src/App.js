import React from "react";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { theme } from "./utils/Constant";
// import "./output.css"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header  />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
