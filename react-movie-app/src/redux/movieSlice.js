import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieList: [],
  showMovies: false,
};

export const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    fetchMovieList: (state, action) => {
      state.movieList = action.payload;
    },
    showMovies: (state) => {
      state.showMovies = !state.showMovies;
    },
  },
});

export const { fetchMovieList, showMovies } = movieSlice.actions;

export default movieSlice.reducer;
