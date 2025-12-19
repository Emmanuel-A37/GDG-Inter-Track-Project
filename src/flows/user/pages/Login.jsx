import React from "react";
import Navbar from "../../../components/Navbar";
import Button from "../../../components/Button";

const Login = ({ goTo }) => {
  return (
    <div className="bg-[#F6F7F8] min-h-screen flex flex-col items-center justify-center">
      <Navbar title={"User Login"} />

      <div className="flex flex-col justify-between items-center min-h-screen w-md">
        <h1 className="lexend font-bold text-3xl">Welcome Back</h1>
        <div className="flex flex-col">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            className="h-10 bg-white w-md drop-shadow-3xl focus:outline-none p-3"
          />
          <p className="text-sm text-primary mt-1">Forgot password?</p>
        </div>
        <Button onClick={() => goTo("home")} className="bg-primary text-white w-full mb-20">
          Login
        </Button>
        {/* Dont have an account
        <span
          onClick={() => goTo("signup")}
          className="ml-2 text-blue-600 cursor-pointer"
        >
          Signup
        </span> */}
      </div>
    </div>
  );
};

export default Login;
