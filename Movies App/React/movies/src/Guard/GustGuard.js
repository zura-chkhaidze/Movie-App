import React from "react";
import { useAuthContext } from "../../src/context/authcontext/AuthContextProvider";
import routes from "../constants/routes";
import { Navigate } from "react-router-dom";

const GustGuard = ({ children }) => {
  const {
    state: { isUserLoggedin },
  } = useAuthContext();

  return <>{isUserLoggedin ? <Navigate to={routes.home} /> : children}</>;
};

export default GustGuard;
