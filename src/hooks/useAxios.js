import { useState, useEffect } from "react"
import axios from "axios";
// converting useEffect into useAxios
// axios: A promise-based HTTP client for making requests to APIs.
export const useAxios = (apiPath, queryTerm="") => {
    const [data, setData]=useState([])
    const url=`https://api.themoviedb.org/3/${apiPath}?api_key=e9fe41fd5626415eb9b028cc98a24587&query=${queryTerm}`
  console.log(apiPath)
    useEffect(() => {
        axios.get(url)
            .then(response => setData(response.data.results))
            .catch(error => console.error("Error fetching movies:", error));
    }, [url]);
  return { data }
}
