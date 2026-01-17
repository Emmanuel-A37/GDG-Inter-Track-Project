import { useState, useCallback } from 'react';
import api from '../utils/api';

const useBuildings = () => {
  const [buildings, setBuildings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBuildings = useCallback(async (query) => {
    setLoading(true);
    setError(null);
    try {
      const endpoint = query 
        ? `/buildings/search?q=${encodeURIComponent(query)}` 
        : '/buildings';
      const response = await api.get(endpoint);
      if (response.data.success) {
        setBuildings(response.data.data);
      }
    } catch (err) {
      console.error('Error fetching buildings:', err);
      setError(err.response?.data?.message || 'Failed to load buildings');
    } finally {
      setLoading(false);
    }
  }, []);

  const uploadBuilding = useCallback(async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/buildings', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (err) {
      console.error('Error uploading building:', err);
      setError(err.response?.data?.message || 'Failed to upload building');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    buildings,
    loading,
    error,
    fetchBuildings,
    uploadBuilding
  };
};

export default useBuildings;
