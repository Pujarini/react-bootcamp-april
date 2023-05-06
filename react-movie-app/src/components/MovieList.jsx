import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovies } from "../utils/fetchMovies";
import MovieItem from "./MovieItem";

const MovieList = ({ movies, setMovieListFn }) => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("genre");

  useEffect(() => {
    fetchMovieList();
  }, [code]);

  const fetchMovieList = async () => {
    const data = await fetchMovies(code);
    setMovieListFn(data);
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
