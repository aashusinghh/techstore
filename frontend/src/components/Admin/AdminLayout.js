import React from "react";
import Footer from "../Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../utils/Constant";
import AdminNav from "./AdminNav";
import { GlobalStyle } from "../../GlobalStyle";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AdminNav />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default AdminLayout;
