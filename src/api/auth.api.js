// src/api/auth.js
import { apiClient } from "./client";

export const loginAdmin = async (payload) => {
  const response = await apiClient.post("/auth/login", payload);
  
  if (response.data.token) {
    localStorage.setItem("admin_token", response.data.token);
  }
  
  return response.data;
};

export const registerAdmin = async (payload) => {
  const response = await apiClient.post("/auth/signup", payload);
  return response.data;
};

export const logoutAdmin = () => {
  localStorage.removeItem("admin_token");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("admin_token");
};