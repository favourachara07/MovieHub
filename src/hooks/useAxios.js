import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}&query=${queryTerm}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data.results); 
      } catch (error) {
        if (error.response) {
          // If the request was made and the server responded with a status code outside 200-299
          console.error("Error response:", error.response);
          setError('Something went wrong. Check your internet connection');
        } else if (error.request) {
          // If the request was made but no response was received
          console.error("No response received:", error.request);
          setError('No response from server. Please check your connection.');
        } else {
          // Something else happened while setting up the request
          console.error("Error setting up request:", error.message);
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);
  
  return { data, loading, error };
};

