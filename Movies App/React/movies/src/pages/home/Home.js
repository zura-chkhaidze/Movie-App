import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/authcontext/AuthContextProvider";

function Home() {
  const { state } = useAuthContext();

  return (
    <div className="container mt-5">
      <h1 className="mb-4">
        <Link to="/movies" style={{ textDecoration: "none", color: "Blue" }}>
          Click here To see all movies
        </Link>
      </h1>

      {state.isUserLoggedin && (
        <div>
          <h3 className="mt-3">Welcome to Our Site: {state.user.userName}</h3>
          <span className="mt-2">Email: {state.user.email}</span>
        </div>
      )}
    </div>
  );
}

export default Home;
