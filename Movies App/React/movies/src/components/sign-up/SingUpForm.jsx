import React, { useState } from "react";
import { authAction } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import appRoutes from "../../constants/routes";

export default function SingUpForm() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: "",
    email: "",
  });

  const signUpHandler = (e) => {
    e.preventDefault();
    authAction(user, "register")
      .then(() => {
        navigate(appRoutes.signin, { state: { success: true } });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className="container mt-5">
      <div className="mb-3">
        <input
          className="form-control"
          onChange={(e) =>
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
          name="userName"
          placeholder="Username"
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          onChange={(e) =>
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
          name="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          onChange={(e) =>
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
          name="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <button onClick={signUpHandler} type="submit" className="btn btn-primary">
        Sign up
      </button>
    </form>
  );
}
