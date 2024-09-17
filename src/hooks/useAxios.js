import { useState, useEffect } from "react";
import axios from "axios";

// Custom hook to handle axios requests
export const useAxios = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiKey = process.env.TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}&query=${queryTerm}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading };
};
