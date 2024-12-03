
import { useState, useEffect } from "react";

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await fetch(
        `https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}&ps=50`
      );
      const result = await response.json();
      setData(result.artObjects);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
};

export default useFetchData;
