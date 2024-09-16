import { useState, useEffect } from "react";
import axios from "axios";

// Custom hook to handle axios requests
export const useAxios = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=e9fe41fd5626415eb9b028cc98a24587&query=${queryTerm}`;

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
