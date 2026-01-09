import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Details from "./Details";
import UserLayout from "./UserLayout";
import UserProtectedRoute from "../../components/UserProtectedRoute";
import SearchResults from "./SearchResults";

const UserFlow = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/home"
        element={
          <UserProtectedRoute>
            <UserLayout />
          </UserProtectedRoute>
        }
      >
        <Route index element={<Home />} />

        <Route path="search" element={<SearchResults />} />

        <Route path="buildings/:id" element={<Details />} />

        <Route path="routes/:id" element={<Details />} />
      </Route>
    </Routes>
  );
};

export default UserFlow;
