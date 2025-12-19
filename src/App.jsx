import React, { useState } from "react";
import UserFlow from "./flows/user/UserFlow";
import AdminFlow from "./flows/admin/AdminFlow";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminHome from "./pages/admin/AdminHome";
import ProtectedRoute from "./components/ProtectedRoute";


const App = () => {
  const [flow, setFlow] = useState("user");

  return (
    <div>
      {flow === "user" && <UserFlow switchFlow={setFlow} />}
      {flow === "admin" && <AdminFlow switchFlow={setFlow} />}
      
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin/home"
        element={
          <ProtectedRoute>
            <AdminHome />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
