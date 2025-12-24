import React from "react";

const Navbar = ({ title, children }) => {
  return (
    <nav className="relative flex justify-center items-center  shadow h-14 border-b border-b-borderGrey px-4 bg-white w-full">
        <div className="absolute left-4 flex items-center ">
          {children}
        </div>

      <h2 className="text-lg md:text-2xl font-bold text-dark">{title}</h2>
    </nav>
  );
};

export default Navbar;
