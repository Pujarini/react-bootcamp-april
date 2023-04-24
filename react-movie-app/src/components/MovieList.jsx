import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import requests from "../utils/requests";
import MovieItem from "./MovieItem";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const code = searchParams.get("genre");

  useEffect(() => {
    fetchTrendingMovies();
  }, [code]);

  const fetchTrendingMovies = async () => {
    const url = `https://api.themoviedb.org/3/${
      requests[code]?.url || requests.fetchTrending.url
    }`;
    const response = await fetch(url);
    const moviesList = await response.json();
    setMovies(moviesList?.results);
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

/**
 * Add genre list
 * add a search bar
 * Search for movies
 * filter according to genre
 */
