// src/hooks/useAuth.js
import { useState } from "react";
import { loginAdmin } from "@/api/auth.api";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const data = await loginAdmin({ email, password });

      localStorage.setItem("token", data.token);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
