// src/hooks/useBuildings.js
import { useEffect, useState } from "react";
import { getBuildings } from "@/api/buildings.api";

export const useBuildings = () => {
  const [buildings, setBuildings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBuildings = async () => {
      setLoading(true);
      const data = await getBuildings();
      setBuildings(data);
      setLoading(false);
    };

    fetchBuildings();
  }, []);

  return { buildings, loading };
};
