import React, { useState } from "react";
import { Provider } from "./Provider";

const AuthContexts = ({ children }) => {
  const [user, setUser] = useState(null);

  const authinfo = {
    user,
  };
  return <Provider value={authinfo}>{children}</Provider>;
};

export default AuthContexts;
