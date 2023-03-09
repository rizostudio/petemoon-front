import React from "react";
import { initState, reducer } from "./state";

export const Context = React.createContext({});
export const BasketContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
//custom hook for use context in other components
export const BasketContext = () => {
  return React.useContext(Context);
};
