const API_BASE_URL = "http://localhost:8000/api/v1";

export const apiCall = async (endpoint, options = {}) => {
  const token = localStorage.getItem("admin_token");

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  let data;
  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    throw new Error(data.message || "API Error");
  }

  return data;
};