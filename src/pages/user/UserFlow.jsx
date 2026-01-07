import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Details from "./Details";
import UserLayout from "./UserLayout";
import UserProtectedRoute from "../../components/UserProtectedRoute";

const UserFlow = () => {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={
            <UserProtectedRoute>
              <Home />
            </UserProtectedRoute>
          }
        />
        <Route path="/home/recent/:id" element={<Details />} />
      </Route>
    </Routes>
  );
};

export default UserFlow;
