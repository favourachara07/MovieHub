import { createContext, useContext } from "react";
import { useAxios } from "../hooks";
import { useApiPath } from "./ApiPathContext";

const MoviesContext = createContext();

function MoviesProvider({ children }) {
    const {apiPath}=useApiPath();
    const { data: movies, loading, error } = useAxios(apiPath)
    return (
        <MoviesContext.Provider value={{ movies }}>
            {children}
        </MoviesContext.Provider>
    )
}
function useMovies() {
    const context = useContext(MoviesContext);
    if (!context) {
        throw new Error('useMovies must be used within a MoviesProvider');
    }
    return context;
}
export {MoviesProvider, useMovies};