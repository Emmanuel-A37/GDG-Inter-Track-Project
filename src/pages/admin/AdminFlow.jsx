import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../../components/ProtectedRoute";
import AdminLogin from "./AdminLogin";
import AdminHome from "./AdminHome";
import React from "react";

const AdminFlow = () => {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <AdminHome />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AdminFlow;
