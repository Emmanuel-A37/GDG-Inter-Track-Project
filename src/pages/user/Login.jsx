import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const fakeUser = {
    password: "1234",
  };

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === fakeUser.password) {
      localStorage.setItem("user_auth", "true");
      navigate("/home", { replace: true });
    } else {
      console.log("Invalid credentials");
    }
  };
  return (
    <div className="bg-[#F6F7F8] min-h-screen flex flex-col items-center justify-center">
      <Navbar title="User Login" />

      <form
        onSubmit={handleLogin}
        className="flex flex-col justify-between items-center min-h-screen w-md"
      >
        <h1 className="lexend font-bold text-3xl">Welcome Back</h1>
        <div className="flex flex-col">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            className="h-10 bg-white w-md shadow-xl focus:outline-none p-3"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-sm text-primary mt-1">Forgot password?</p>
        </div>
        <Button type="submit" className="bg-primary text-white w-full mb-20">
          Login
        </Button>
        {/* Dont have an account
        <span
          onClick={() => goTo("signup")}
          className="ml-2 text-blue-600 cursor-pointer"
        >
          Signup
        </span> */}
      </form>
    </div>
  );
};

export default Login;
