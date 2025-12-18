import React, { useState } from "react";
import UserFlow from "./flows/user/UserFlow";
import AdminFlow from "./flows/admin/AdminFlow";

const App = () => {
  const [flow, setFlow] = useState("user");

  return (
    <div>
      {flow === "user" && <UserFlow switchFlow={setFlow} />}
      {flow === "admin" && <AdminFlow switchFlow={setFlow} />}
      
    </div>
  );
};

export default App;
