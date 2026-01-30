import React from "react";
import Footer from "../Componets/Shared/Footer.jsx";
import { Outlet } from "react-router";
import Navvar from "../Componets/Shared/Navvar.jsx";
import ScrollToTop from "../Componets/Shared/ScrollToTop.jsx";

const Root = () => {
  return (
    <div>
      <ScrollToTop />
      <Navvar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
