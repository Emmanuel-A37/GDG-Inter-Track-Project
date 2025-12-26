import api from "./api";
/**
 * Building API
 * ONLY what this feature needs
 */
export const BuildingAPI = {
  createBuilding(data) {
    return api.post('/buildings', data);
  },

  getAllBuildings() {
    return api.get('/buildings');
  },
};
