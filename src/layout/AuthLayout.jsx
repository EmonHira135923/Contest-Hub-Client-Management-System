import React from "react";
import Navbar from "../Componets/Shared/Navvar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
