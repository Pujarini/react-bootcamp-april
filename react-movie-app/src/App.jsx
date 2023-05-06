import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Filters from "./components/Filters";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import SearchComponent from "./components/SearchComponent";
import { fetchMovies } from "./utils/fetchMovies";

function App() {
  const [searchMovieText, setSearchMovieText] = useState("");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    if (!searchMovieText) {
      resetMovieList();
    }
  }, [searchMovieText]);

  const resetMovieList = async () => {
    const data = await fetchMovies();
    setMovieList(data);
  };

  const filterMovie = (e) => {
    e.preventDefault();
    const filteredMovieList = movieList.filter(({ media_type }) =>
      media_type.includes(searchMovieText)
    );
    if (searchMovieText) {
      setMovieList(filteredMovieList);
    }
  };
  return (
    <div className="App">
      {/* <Navbar />
       */}
      {/* <About /> */}
      <SearchComponent
        searchTextFn={setSearchMovieText}
        searchText={searchMovieText}
        filterMovie={filterMovie}
      />
      <Filters />
      <MovieList movies={movieList} setMovieListFn={setMovieList} />

      {/**Navbar */}
      {/**Filter component */}
      {/**MovieList */}
    </div>
  );
}

export default App;
