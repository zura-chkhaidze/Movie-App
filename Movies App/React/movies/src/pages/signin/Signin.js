import React from "react";
import SingInForm from "../../components/sign-in/SignInForm";

function Signin(props) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4">Sign In</h2>
          <SingInForm />
        </div>
      </div>
    </div>
  );
}

export default Signin;
