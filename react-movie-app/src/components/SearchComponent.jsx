const SearchComponent = ({ searchTextFn, searchText, filterMovie }) => {
  const searchMovie = (e) => {
    searchTextFn(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search Movies"
          onChange={searchMovie}
          className="text-black"
          value={searchText}
        />
        <button type="submit" onClick={filterMovie}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;
