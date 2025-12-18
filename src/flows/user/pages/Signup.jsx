import React from "react";
import Navbar from "../../../components/Navbar";
import Button from "../../../components/Button";

const Signup = ({ goTo }) => {
  return (
    <div className="flex flex-col  justify-center">
      <Navbar />
      <label htmlFor="name">Name: </label>
      <input className="border" type="text" />

      <span
        className="block cursor-pointer bg-blue-700 w-1/2"
        onClick={() => goTo("login")}
      >
        Signup
      </span>
    </div>
  );
};

export default Signup;
