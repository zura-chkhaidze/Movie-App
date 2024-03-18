import React from "react";
import SingUpForm from "../../components/sign-up/SingUpForm";

function Signup(props) {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Sign Up</h2>
          <SingUpForm />
        </div>
      </div>
    </div>
  );
}

export default Signup;
