import React from "react";
import Navbar from "../../../components/Navbar";
import Button from "../../../components/Button";

const Signup = ({ goTo }) => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar title={"Navbar"} />
      <label htmlFor="name">Name: </label>
      <input className="border mb-4" type="text" />

      <Button
        onClick={() => goTo("login")}
        className="bg-blue-700 text-white w-1/2"
      >
        Signup
      </Button>
    </div>
  );
};

export default Signup;
