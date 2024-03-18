import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authcontext/AuthContextProvider";
import appRoutes from "../../constants/routes";
import actionCreators from "../../context/authcontext/authActionCreators";

const values = Object.entries(appRoutes);

export default function Navbar() {
  const navigate = useNavigate();
  const { state, dispatch } = useAuthContext();

  const handleLogout = () => {
    dispatch(actionCreators.logOut());
    navigate(appRoutes.signin);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {values.map((route) => {
              if (
                (route[1] === appRoutes.signin ||
                  route[1] === appRoutes.signup) &&
                state.isUserLoggedin
              ) {
                return false;
              }
              return (
                <li className="nav-item" key={route[1]}>
                  <button
                    className="nav-link btn btn-link"
                    onClick={() => navigate(route[1])}
                  >
                    {route[0]}
                  </button>
                </li>
              );
            })}
            {state.isUserLoggedin && (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
