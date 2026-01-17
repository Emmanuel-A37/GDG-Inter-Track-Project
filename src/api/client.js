// src/api/client.js
import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://campus-navigation-project.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * REQUEST INTERCEPTOR
 * Attach JWT to every request if available
 */
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("admin_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * RESPONSE INTERCEPTOR
 * Handle global API errors
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      // Token is invalid or expired
      localStorage.removeItem("admin_token");

      // Optional: prevent infinite redirect loops
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);
