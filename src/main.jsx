import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import Router from "../src/Router/Router";
import { ToastContainer } from "react-toastify";
import AuthContexts from "./Componets/context/AuthContexts";
import { ThemeProvider } from "./Componets/context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthContexts>
        <RouterProvider router={Router}></RouterProvider>
        <ToastContainer autoClose={2000} />
      </AuthContexts>
    </ThemeProvider>
  </StrictMode>,
);
