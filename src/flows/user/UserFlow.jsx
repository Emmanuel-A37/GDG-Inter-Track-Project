import React, { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const UserFlow = ({switchFlow}) => {
  const [page, setPage] = useState("login");

  return (
    <div>
      {page === "login" && <Login goTo={setPage} />}
      {page === "signup" && <Signup goTo={setPage} />}
      {page === "home" && <Home switchFlow={switchFlow} />}
    </div>
  );
};

export default UserFlow;