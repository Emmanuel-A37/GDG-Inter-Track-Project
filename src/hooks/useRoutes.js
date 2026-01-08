import { useState, useCallback } from 'react';
import api from '../utils/api';

const useRoutes = () => {
  const [routes, setRoutes] = useState([]);
  const [route, setRoute] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRoutes = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('/routes');
      if (response.data.success) {
        setRoutes(response.data.data);
      }
    } catch (err) {
      console.error('Error fetching routes:', err);
      setError(err.response?.data?.message || 'Failed to load routes');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchRouteDetails = useCallback(async (id) => {
    if (!id) return;
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(`/routes/${id}`);
      if (response.data.success) {
        setRoute(response.data.data);
      }
    } catch (err) {
      console.error('Error fetching route details:', err);
      setError(err.response?.data?.message || 'Failed to load route details');
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteRoute = useCallback(async (routeId) => {
    setLoading(true);
    try {
      const response = await api.delete(`/routes/${routeId}`);
      if (response.data.success) {
        setRoutes(prevRoutes => prevRoutes.filter(r => r.id !== routeId));
        return true;
      }
    } catch (err) {
      console.error('Error deleting route:', err);
      throw err;
    } finally {
      setLoading(false);
    }
    return false;
  }, []);

  return {
    routes,
    route,
    loading,
    error,
    fetchRoutes,
    fetchRouteDetails,
    deleteRoute
  };
};

export default useRoutes;
