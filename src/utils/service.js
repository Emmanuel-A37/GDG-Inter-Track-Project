import { apiCall } from "./api";

export const adminLogin = (password) => {
  return apiCall("/auth/login", {
    method: "POST",
    body: JSON.stringify({ password }),
  });
};

export const deleteBuilding = (id) => {
  return apiCall(`/buildings/${id}`, {
    method: "DELETE",
  });
};
export const deleteRoute = (id) => {
  return apiCall(`/routes/${id}/`, {
    method: "DELETE",
  });
};
