import { createContext } from "react";
import { useAxios } from "../hooks";

const MoviesContext = createContext();

function MoviesProvider({ children }) {
    const { data: movies, loading, error } = useAxios(apiPath)
}