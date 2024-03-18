import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider from "./context/authcontext/AuthContextProvider";
import { MovieContextProvider } from "./context/movieContext/movieContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <MovieContextProvider>
      <Router>
        <App />
      </Router>
    </MovieContextProvider>
  </AuthContextProvider>
);
