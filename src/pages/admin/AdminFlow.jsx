import { Routes, Route } from "react-router-dom";
import AdminProtectedRoute from "../../components/AdminProtectedRoute";
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
          <AdminProtectedRoute>
            <AdminHome />
          </AdminProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AdminFlow;
