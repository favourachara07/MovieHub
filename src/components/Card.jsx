import React from 'react';
import { Link } from 'react-router-dom';
import CondImg from '../assets/geoffrey-moffett-TFRezw7pQwI-unsplash.jpg';
import { useProgram } from '../context/ProgramContext';

export const Card = ({ movie, tv }) => {
  const { program } = useProgram();

  let id, title, overview, poster_path, tvId, original_name, tvDesc, img;

  if (!program && movie) {
    ({ id, title, overview, poster_path } = movie);
  } else if (program && tv) {
    ({ id: tvId, original_name, overview: tvDesc, poster_path: img } = tv);
  }

  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : CondImg;
  const tvimage = img ? `https://image.tmdb.org/t/p/w500/${img}` : CondImg;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={program ? `/tv/${tvId}` : `/movie/${id}`}>
        <img
          className="rounded-t-lg"
          src={program ? tvimage : image}
          alt={program ? original_name : title}
          width="500"
          height="750"
        />
      </Link>
      <div className="p-5">
        <Link to={program ? `/tv/${tvId}` : `/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {program ? original_name : title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {program ? tvDesc : overview}
        </p>
      </div>
    </div>
  );
};