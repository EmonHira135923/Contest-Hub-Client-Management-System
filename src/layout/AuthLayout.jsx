import React from "react";
import Navbar from "../Componets/Shared/Navvar";
import { Outlet } from "react-router";
import ScrollToTop from "../Componets/Shared/ScrollToTop";

const AuthLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
