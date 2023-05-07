import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Filters from "./components/Filters";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import SearchComponent from "./components/SearchComponent";
import { fetchMovies } from "./utils/fetchMovies";
import { useDispatch, useSelector } from "react-redux";
import { showMovies, fetchMovieList } from "./redux/movieSlice";

function App() {
  const [searchMovieText, setSearchMovieText] = useState("");

  // const movie = useSelector((state) => state.movies.showMovies);
  const movieList = useSelector((state) => state.movies.movieList);
  console.log(movieList);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!searchMovieText) {
      resetMovieList();
    }
  }, [searchMovieText]);

  const resetMovieList = async () => {
    const data = await fetchMovies();
    dispatch(fetchMovieList(data));
  };

  const filterMovie = (e) => {
    e.preventDefault();
    const filteredMovieList = movieList.filter(({ media_type }) =>
      media_type.includes(searchMovieText)
    );
    if (searchMovieText) {
      dispatch(fetchMovieList(filteredMovieList));
    }
  };
  return (
    <div className="App">
      <SearchComponent
        searchTextFn={setSearchMovieText}
        searchText={searchMovieText}
        filterMovie={filterMovie}
      />
      <Filters />
      <button onClick={() => dispatch(showMovies())}>Show Movies</button>
      <MovieList />
      {/* <Navbar />
       */}
      {/* <About /> */}

      {/**Navbar */}
      {/**Filter component */}
      {/**MovieList */}
    </div>
  );
}

export default App;
