//import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminHome from "./pages/admin/AdminHome";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import UserProtectedRoute from "./components/UserProtectedRoute";

import Signup from "./pages/user/Signup";
import Home from "./pages/user/Home";
import Login from "./pages/user/Login"
import UploadDirectionsDesktop from "./pages/Desktop/UploadDesktop/UploadDirectionsDesktop";
import UploadBuildingDesktop from "./pages/Desktop/UploadDesktop/UploadBuildingDesktop";
import UploadBuildingIpod from "./pages/Ipod/UploadIpod/UploadBuildingIpod";
import EditBuildingIpod from "./pages/Ipod/EditBuildingIpod";
import EditBuildingIpad from "./pages/Ipad/EditBuildingIpad";
import EditBuildingDesktop from "./pages/Desktop/EditBuildingDesktop";
import EditBuildingMobile from "./pages/Mobile/EditBuildingMobile";

const App = () => {

  return (
    <>
      {/* <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/home"
          element={
            <AdminProtectedRoute>
              <AdminHome />
            </AdminProtectedRoute>
          }
        />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <UserProtectedRoute>
              <Home />
            </UserProtectedRoute>
          }
        />
      </Routes> */}
      <EditBuildingMobile/>
    </>
  );
};

export default App;
