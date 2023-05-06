import requests from "./requests";

export const fetchMovies = async (code) => {
  const url = `https://api.themoviedb.org/3/${
    requests[code]?.url || requests.fetchTrending.url
  }`;
  const response = await fetch(url);
  const moviesList = await response.json();
  return moviesList?.results;
  //   setMovieListFn(moviesList?.results);
};
