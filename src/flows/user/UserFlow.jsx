import React, { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Details from "./pages/Details";

const UserFlow = ({ switchFlow }) => {
  const [page, setPage] = useState("login");
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      {page === "login" && <Login goTo={setPage} />}
      {page === "signup" && <Signup goTo={setPage} />}
      {page === "home" && (
        <Home
          goTo={setPage}
          setSelectedOption={setSelectedOption}
          switchFlow={switchFlow}
        />
      )}

      {page === "details" && (
        <Details option={selectedOption} goBack={() => setPage("home")} />
      )}
    </div>
  );
};

export default UserFlow;
