import "./App.css";
import Filters from "./components/Filters";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Filters />
      <MovieList />

      {/**Navbar */}
      {/**Filter component */}
      {/**MovieList */}
    </div>
  );
}

export default App;
