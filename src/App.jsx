import React from "react";
import "./App.css";
import UserFlow from "./pages/user/UserFlow";
import AdminFlow from "./pages/admin/AdminFlow";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<UserFlow />} />
        <Route path="/admin/*" element={<AdminFlow />} />
      </Routes>
    </>
  );
};

export default App;
