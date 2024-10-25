/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageLoader from "../components/PageLoader";
import Loader from "../components/Loader";

const MovieList = lazy(() => import("../pages/MovieList"));
const MovieDetail = lazy(() => import("../pages/MovieDetail"));
const Search = lazy(() => import("../pages/Search"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

export const AllRoutes = ({ darkMode }) => {
    console.log(darkMode)
  return (
    <div className="dark:bg-darkbg">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home" />} />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular" />} />
          <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated" />} />
          <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />
          <Route path="search" element={<Search apiPath="search/movie" />} />
          <Route path="*" element={<PageNotFound darkMode={darkMode} />} />
        </Routes>
      </Suspense>
    </div>
  );
};