import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: null,
  userData: null,
});

export default AuthContext;
