import React, { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer, initialState } from "./authReducer";
import { isTokenValid } from "../../utils/index";
import actionCreators from "./authActionCreators";
const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token && isTokenValid(token)) {
      dispatch(actionCreators.logIn({token}));
    }
  }, []);

  return (
    <authContext.Provider value={{ state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(authContext);
  if (context) {
    return context;
  }
  throw new Error("auth context error");
};

export default AuthContextProvider;
