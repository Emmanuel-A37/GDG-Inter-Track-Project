import React from "react";
import Navbar from "../../../components/Navbar";

const Login = ({ goTo }) => {
  return (
    <div>
      <Navbar />
      <button onClick={() => goTo("home")}>Login</button>
      Dont have an account
      <span onClick={() => goTo("signup")}>Signup</span>
    </div>
  );
};

export default Login;
