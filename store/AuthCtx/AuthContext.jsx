import React from "react";
import { initState, reducer } from "./state";

export const Context = React.createContext({});
export const AuthContextProvider = ({ children }) => {
  const [authState, authDispatch] = React.useReducer(reducer, initState);
  return (
    <Context.Provider value={{ authState, authDispatch }}>
      {children}
    </Context.Provider>
  );
};
//custom hook for use context in other components
export const AuthContext = () => {
  return React.useContext(Context);
};
