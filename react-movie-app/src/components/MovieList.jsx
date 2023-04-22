import React, { useEffect, useState } from "react";
import requests from "../utils/requests";
import MovieItem from "./MovieItem";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/${requests.fetchTrending.url}`
    );
    const moviesList = await response.json();
    setMovies(moviesList.results);
  };

  return (
    <div className="p-5 my-10 3xl:flex xl:grid-cols-3 md:grid-cols-2 sm:grid flex-wrap justify-center ">
      {movies.map((movie) => {
        return <MovieItem movie={movie} key={movie?.id} />;
      })}
    </div>
  );
};

export default MovieList;
