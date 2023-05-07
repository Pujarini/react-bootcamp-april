import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchMovieList } from "../redux/movieSlice";
import { fetchMovies } from "../utils/fetchMovies";
import MovieItem from "./MovieItem";

const MovieList = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("genre");

  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies.movieList);
  console.log(movies);

  useEffect(() => {
    fetchFilteredMovies();
  }, [code]);

  const fetchFilteredMovies = async () => {
    const data = await fetchMovies(code);
    // console.log(data);
    dispatch(fetchMovieList(data));
  };

  return (
    <div className="p-5 my-10 3xl:flex xl:grid-cols-3 md:grid-cols-2 sm:grid flex-wrap justify-center ">
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie?.id} />
      ))}
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
