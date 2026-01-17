import api from "../utils/api";

const AuthService = {
  login: async (username, password) => {
    try {
      const response = await api.post("/auth/login/", { username, password });
      if (response.data.success) {
        localStorage.setItem("admin_token", response.data.token);
      }
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },

  logout: () => {
    localStorage.removeItem("admin_token");
  },

  getToken: () => {
    return localStorage.getItem("admin_token");
  },

  isAuthenticated: () => {
    return !!localStorage.getItem("admin_token");
  },
};

export default AuthService;
