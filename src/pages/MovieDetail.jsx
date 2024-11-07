import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CondImg from '../assets/geoffrey-moffett-TFRezw7pQwI-unsplash.jpg';
import { useTitle } from '../hooks';

const MovieDetail = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const image = data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : CondImg;
  const backgroundImage = data.backdrop_path ? `https://image.tmdb.org/t/p/w1280/${data.backdrop_path}` : CondImg;

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=e9fe41fd5626415eb9b028cc98a24587`)
      .then(response => setData(response.data))
      .catch(error => console.error("Error fetching movies:", error));
  }, [params.id]);

  useTitle(data.title ? data.title : '');

  return (
    <main className="max-w-7xl mx-auto min-h-[90vh] p-2.5">
      <section className="relative w-full h-[500px]">
        <img src={backgroundImage} alt={data.title} className="absolute inset-0 w-full h-full object-cover" width="1280" height="500" />
        <div className="relative flex justify-center items-center h-full">
          <img src={image} alt={data.title} className="w-64 h-auto" width="500" height="750" />
        </div>
      </section>
      <section className="max-w-2xl mx-auto text-gray-700 text-lg dark:text-white">
        <h1 className="text-3xl font-bold my-4">{data.title}</h1>
        <p className="my-4">{data.overview}</p>
        <div className="flex items-center my-4">
          <p className="ml-2 text-gray-900 dark:text-white">{data.vote_average}</p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <span className="font-medium text-gray-900 hover:no-underline dark:text-white">{data.vote_count} reviews</span>
        </div>
        <p className="my-4">
          <span className="font-bold mr-4">Runtime:</span>
          <span>{data.runtime} minutes</span>
        </p>
        <p className="my-4">
          <span className="font-bold mr-4">Budget:</span>
          <span>{data.budget}</span>
        </p>
        <p className="my-4">
          <span className="font-bold mr-4">Revenue:</span>
          <span>{data.revenue}</span>
        </p>
        <p className="my-4">
          <span className="font-bold mr-4">Release Date:</span>
          <span>{data.release_date}</span>
        </p>
        <p className="my-4">
          <span className="font-bold mr-4">IMDB Code:</span>
          <span>{data.imdb_id}</span>
        </p>
      </section>
    </main>
  );
};

export default MovieDetail;