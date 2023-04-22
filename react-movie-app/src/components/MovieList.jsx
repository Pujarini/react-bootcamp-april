import React, { useEffect, useState, memo } from "react";
// import requests from "../utils/requests";
import data from "../data/movies.json";
import MovieItem from "./MovieItem";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // const movies = fetchTrendingMovies();
    // setMovies(movies);
    setMovies(data);
  }, []);

  console.log(movies);

  //   const fetchTrendingMovies = async () => {
  //     const response = await fetch("");
  //     const movies = await response.json();
  //     return movies;
  //   };

  return (
    <div className="p-5 my-10 3xl:flex xl:grid-cols-3 md:grid-cols-2 sm:grid flex-wrap justify-center ">
      {movies.map((movie) => {
        return <MovieItem movie={movie} key={movie?.id} />;
      })}
    </div>
  );
};

export default memo(MovieList);
