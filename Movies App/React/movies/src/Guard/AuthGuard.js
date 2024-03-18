import React from "react";
import { useAuthContext } from "../context/authcontext/AuthContextProvider";
import { Link } from "react-router-dom";
import routes from "../constants/routes";

const AuthGuard = ({ children }) => {
  const { state } = useAuthContext();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {state.isUserLoggedin ? (
            children
          ) : (
            <div className="text-center">
              <h1>You are not authenticated</h1>
              <h4>Please sign in or sign up</h4>
              <div className="mt-4">
                <Link to={routes.signin} className="btn btn-primary me-2">
                  Sign In
                </Link>
                <Link to={routes.signup} className="btn btn-outline-primary">
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthGuard;
