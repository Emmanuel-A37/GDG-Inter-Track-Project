import React from "react";
import Navbar from "../../../components/Navbar";
import Button from "../../../components/Button";

const Signup = ({ goTo }) => {
  return (
    <div className="bg-[#F6F7F8] min-h-screen flex flex-col items-center justify-center">
      <Navbar title={"User Signup"} />
      
      <div className="flex flex-col justify-between items-center min-h-screen w-md">
        <h1 className="lexend font-bold text-3xl">We are glad to have you!</h1>
        <div className=""><div className="flex flex-col">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            className="h-10 bg-white w-md drop-shadow-3xl focus:outline-none p-3"
          />
          
        </div>
        <div className="flex flex-col">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            className="h-10 bg-white w-md drop-shadow-3xl focus:outline-none p-3"
          />
          
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            className="h-10 bg-white w-md drop-shadow-3xl focus:outline-none p-3"
          />
          
        </div></div>
        
        <Button onClick={() => goTo("login")} className="bg-primary text-white w-full mb-20">
          Signup
        </Button>
      </div>
      
    </div>
  );
};

export default Signup;
