import React, { use } from "react";
import { ThemeContext } from "../context/Provider";

const useTheme = () => {
  const theme = use(ThemeContext);
  return theme;
};

export default useTheme;
