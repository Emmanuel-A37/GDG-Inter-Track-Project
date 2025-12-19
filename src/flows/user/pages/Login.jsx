import React from "react";
import Navbar from "../../../components/Navbar";
import Button from "../../../components/Button";

const Login = ({ goTo }) => {
  return (
    <div>
      <Navbar title={"Navbar"} />
      <Button onClick={() => goTo("home")} className="bg-blue-600 text-white">
        Login
      </Button>
      Dont have an account
      <span
        onClick={() => goTo("signup")}
        className="ml-2 text-blue-600 cursor-pointer"
      >
        Signup
      </span>
    </div>
  );
};

export default Login;
