import React, { useState } from "react";
import { authAction } from "../../api/auth";
import { useAuthContext } from "../../context/authcontext/AuthContextProvider";
import actionCreators from "../../context/authcontext/authActionCreators";
import { Link, useNavigate } from "react-router-dom";
import AppRoutes from "../../constants/routes";

import { PacmanLoader } from "react-spinners";

const SignInForm = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: "",
    error: "",
  });
  const [loading, setLoading] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setUser((prev) => ({ ...prev, error: "" }));
    authAction(user, "login")
      .then((data) => {
        dispatch(actionCreators.logIn(data));
        navigate(AppRoutes.home);
      })
      .catch((err) => {
        setUser((prev) => ({ ...prev, error: err.message }));
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <form className="container">
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">
          UserName
        </label>
        <input
          autoComplete="true"
          value={user.userName}
          type="text"
          className="form-control form-control-sm"
          id="userName"
          name="userName"
          onChange={(e) => {
            setUser((prev) => {
              return { ...prev, [e.target.name]: e.target.value };
            });
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          autoComplete="true"
          value={user.password}
          type="password"
          className="form-control form-control-sm"
          id="password"
          name="password"
          onChange={(e) => {
            setUser((prev) => {
              return { ...prev, [e.target.name]: e.target.value };
            });
          }}
        />
      </div>
      {loading && <PacmanLoader color="#36d7b7" />}
      {user.error && <h4>{user.error}</h4>}
      <button onClick={submitHandler} type="submit" className="btn btn-primary">
        Submit
      </button>
      <Link to={AppRoutes.home} className="btn btn-link">
        Back to Home Page
      </Link>
    </form>
  );
};

export default SignInForm;
