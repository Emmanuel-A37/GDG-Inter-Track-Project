import api from './api';

export const RoutesAPI = {
  createRoute(data) {
    return api.post('/routes', data);
  },
};
