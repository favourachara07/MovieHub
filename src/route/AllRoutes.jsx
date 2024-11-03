/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageLoader from "../components/PageLoader";
import Loader from "../components/Loader";
import SeriesDetail from "../pages/SeriesDetail";

const MovieList = lazy(() => import("../pages/MovieList"));
const MovieDetail = lazy(() => import("../pages/MovieDetail"));
const Search = lazy(() => import("../pages/Search"));
const SeriesList= lazy(()=> import("../pages/SeriesList"))
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
          <Route path="tv" element={<SeriesList apiPath="tv/airing_today" title="Home" />} />
          <Route path="series/top_rated" element={<SeriesList apiPath="tv/top_rated" title="Top Rated" />} />
          <Route path="series/popular" element={<SeriesList apiPath="tv/popular" title="Popular" />} />
          <Route path="series/onAir" element={<SeriesList apiPath="tv/on_the_air" title="On The Air" />} />
          <Route path="tv/:id" element={<SeriesDetail />} />
          <Route path="search" element={<Search apiPath="search/movie" />} />
          <Route path="*" element={<PageNotFound darkMode={darkMode} />} />
        </Routes>
      </Suspense>
    </div>
  );
};