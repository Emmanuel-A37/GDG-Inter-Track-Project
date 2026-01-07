// src/api/buildings.api.js
import { apiClient } from "./client";

export const getBuildings = async () => {
  const response = await apiClient.get("/buildings");
  return response.data;
};

export const getBuildingById = async (id) => {
  const response = await apiClient.get(`/buildings/${id}`);
  return response.data;
};

export const searchBuildings = async (query) => {
  const response = await apiClient.get("/buildings/search", {
    params: { q: query },
  });
  return response.data;
};
