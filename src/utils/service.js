import { apiCall } from "./api";


export const adminLogin = (password) => {
  return apiCall("/auth/login", {
    method: "POST",
    body: JSON.stringify({ password }),
  });
};
