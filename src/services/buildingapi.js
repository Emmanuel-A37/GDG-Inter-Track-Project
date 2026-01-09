import api from './api';

export const BuildingAPI = {
  createBuilding(formData) {
    return api.post('/buildings', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },

  getAllBuildings() {
    return api.get('/buildings');
  },

  getBuildingById(id) {
    return api.get(`/buildings/${id}`);
  },

  updateBuilding(id, formData) {
    return api.put(`/buildings/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },

  deleteBuilding(id) {
    return api.delete(`/buildings/${id}`);
  },
};
