import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/common-components/Footer";
import Navbar from "../components/common-components/Navbar";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
